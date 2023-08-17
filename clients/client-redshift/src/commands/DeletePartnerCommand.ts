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
} from "@smithy/types";

import { PartnerIntegrationInputMessage, PartnerIntegrationOutputMessage } from "../models/models_0";
import { de_DeletePartnerCommand, se_DeletePartnerCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeletePartnerCommand}.
 */
export interface DeletePartnerCommandInput extends PartnerIntegrationInputMessage {}
/**
 * @public
 *
 * The output of {@link DeletePartnerCommand}.
 */
export interface DeletePartnerCommandOutput extends PartnerIntegrationOutputMessage, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeletePartnerCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeletePartnerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // PartnerIntegrationInputMessage
 *   AccountId: "STRING_VALUE", // required
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   PartnerName: "STRING_VALUE", // required
 * };
 * const command = new DeletePartnerCommand(input);
 * const response = await client.send(command);
 * // { // PartnerIntegrationOutputMessage
 * //   DatabaseName: "STRING_VALUE",
 * //   PartnerName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeletePartnerCommandInput - {@link DeletePartnerCommandInput}
 * @returns {@link DeletePartnerCommandOutput}
 * @see {@link DeletePartnerCommandInput} for command's `input` shape.
 * @see {@link DeletePartnerCommandOutput} for command's `response` shape.
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
export class DeletePartnerCommand extends $Command<
  DeletePartnerCommandInput,
  DeletePartnerCommandOutput,
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
  constructor(readonly input: DeletePartnerCommandInput) {
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
  ): Handler<DeletePartnerCommandInput, DeletePartnerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeletePartnerCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DeletePartnerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DeletePartnerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeletePartnerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePartnerCommandOutput> {
    return de_DeletePartnerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
