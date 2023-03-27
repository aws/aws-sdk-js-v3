// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  UpdateApplicationSettingsInput,
  UpdateApplicationSettingsInputFilterSensitiveLog,
  UpdateApplicationSettingsOutput,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateApplicationSettingsCommand,
  serializeAws_restJson1UpdateApplicationSettingsCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 *
 * The input for {@link UpdateApplicationSettingsCommand}.
 */
export interface UpdateApplicationSettingsCommandInput extends UpdateApplicationSettingsInput {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationSettingsCommand}.
 */
export interface UpdateApplicationSettingsCommandOutput extends UpdateApplicationSettingsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the settings of an application registered with AWS Systems Manager for
 *          SAP.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, UpdateApplicationSettingsCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, UpdateApplicationSettingsCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * const client = new SsmSapClient(config);
 * const input = { // UpdateApplicationSettingsInput
 *   ApplicationId: "STRING_VALUE", // required
 *   CredentialsToAddOrUpdate: [ // ApplicationCredentialList
 *     { // ApplicationCredential
 *       DatabaseName: "STRING_VALUE", // required
 *       CredentialType: "STRING_VALUE", // required
 *       SecretId: "STRING_VALUE", // required
 *     },
 *   ],
 *   CredentialsToRemove: [
 *     {
 *       DatabaseName: "STRING_VALUE", // required
 *       CredentialType: "STRING_VALUE", // required
 *       SecretId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new UpdateApplicationSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateApplicationSettingsCommandInput - {@link UpdateApplicationSettingsCommandInput}
 * @returns {@link UpdateApplicationSettingsCommandOutput}
 * @see {@link UpdateApplicationSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationSettingsCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource is not available.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 *
 */
export class UpdateApplicationSettingsCommand extends $Command<
  UpdateApplicationSettingsCommandInput,
  UpdateApplicationSettingsCommandOutput,
  SsmSapClientResolvedConfig
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
  constructor(readonly input: UpdateApplicationSettingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SsmSapClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateApplicationSettingsCommandInput, UpdateApplicationSettingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateApplicationSettingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SsmSapClient";
    const commandName = "UpdateApplicationSettingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateApplicationSettingsInputFilterSensitiveLog,
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
  private serialize(input: UpdateApplicationSettingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateApplicationSettingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateApplicationSettingsCommandOutput> {
    return deserializeAws_restJson1UpdateApplicationSettingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
