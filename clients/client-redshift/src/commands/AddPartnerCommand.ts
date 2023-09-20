// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { PartnerIntegrationInputMessage, PartnerIntegrationOutputMessage } from "../models/models_0";
import { de_AddPartnerCommand, se_AddPartnerCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddPartnerCommand}.
 */
export interface AddPartnerCommandInput extends PartnerIntegrationInputMessage {}
/**
 * @public
 *
 * The output of {@link AddPartnerCommand}.
 */
export interface AddPartnerCommandOutput extends PartnerIntegrationOutputMessage, __MetadataBearer {}

/**
 * @public
 * <p>Adds a partner integration to a cluster.
 *             This operation authorizes a partner to push status updates for the specified database.
 *             To complete the integration, you also set up the integration on the partner website.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AddPartnerCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AddPartnerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // PartnerIntegrationInputMessage
 *   AccountId: "STRING_VALUE", // required
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   PartnerName: "STRING_VALUE", // required
 * };
 * const command = new AddPartnerCommand(input);
 * const response = await client.send(command);
 * // { // PartnerIntegrationOutputMessage
 * //   DatabaseName: "STRING_VALUE",
 * //   PartnerName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddPartnerCommandInput - {@link AddPartnerCommandInput}
 * @returns {@link AddPartnerCommandOutput}
 * @see {@link AddPartnerCommandInput} for command's `input` shape.
 * @see {@link AddPartnerCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link PartnerNotFoundFault} (client fault)
 *  <p>The name of the partner was not found.</p>
 *
 * @throws {@link UnauthorizedPartnerIntegrationFault} (client fault)
 *  <p>The partner integration is not authorized.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class AddPartnerCommand extends $Command<
  AddPartnerCommandInput,
  AddPartnerCommandOutput,
  RedshiftClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: AddPartnerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddPartnerCommandInput, AddPartnerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, AddPartnerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "AddPartnerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftServiceVersion20121201",
        operation: "AddPartner",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: AddPartnerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddPartnerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddPartnerCommandOutput> {
    return de_AddPartnerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
