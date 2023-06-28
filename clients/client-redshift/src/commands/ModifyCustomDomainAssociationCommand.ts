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

import { ModifyCustomDomainAssociationMessage, ModifyCustomDomainAssociationResult } from "../models/models_1";
import {
  de_ModifyCustomDomainAssociationCommand,
  se_ModifyCustomDomainAssociationCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyCustomDomainAssociationCommand}.
 */
export interface ModifyCustomDomainAssociationCommandInput extends ModifyCustomDomainAssociationMessage {}
/**
 * @public
 *
 * The output of {@link ModifyCustomDomainAssociationCommand}.
 */
export interface ModifyCustomDomainAssociationCommandOutput
  extends ModifyCustomDomainAssociationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Contains information for changing a custom domain association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyCustomDomainAssociationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyCustomDomainAssociationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // ModifyCustomDomainAssociationMessage
 *   CustomDomainName: "STRING_VALUE",
 *   CustomDomainCertificateArn: "STRING_VALUE",
 *   ClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new ModifyCustomDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyCustomDomainAssociationResult
 * //   CustomDomainName: "STRING_VALUE",
 * //   CustomDomainCertificateArn: "STRING_VALUE",
 * //   ClusterIdentifier: "STRING_VALUE",
 * //   CustomDomainCertExpiryTime: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyCustomDomainAssociationCommandInput - {@link ModifyCustomDomainAssociationCommandInput}
 * @returns {@link ModifyCustomDomainAssociationCommandOutput}
 * @see {@link ModifyCustomDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link ModifyCustomDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link CustomCnameAssociationFault} (client fault)
 *  <p>An error occurred when an attempt was made to change the custom domain association.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class ModifyCustomDomainAssociationCommand extends $Command<
  ModifyCustomDomainAssociationCommandInput,
  ModifyCustomDomainAssociationCommandOutput,
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
  constructor(readonly input: ModifyCustomDomainAssociationCommandInput) {
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
  ): Handler<ModifyCustomDomainAssociationCommandInput, ModifyCustomDomainAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyCustomDomainAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "ModifyCustomDomainAssociationCommand";
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
  private serialize(input: ModifyCustomDomainAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyCustomDomainAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyCustomDomainAssociationCommandOutput> {
    return de_ModifyCustomDomainAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
