import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteAccountAuditConfigurationRequest, DeleteAccountAuditConfigurationResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAccountAuditConfigurationCommand,
  serializeAws_restJson1DeleteAccountAuditConfigurationCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DeleteAccountAuditConfigurationCommandInput extends DeleteAccountAuditConfigurationRequest {}
export interface DeleteAccountAuditConfigurationCommandOutput
  extends DeleteAccountAuditConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Restores the default settings for Device Defender audits for this account. Any
 *           configuration data you entered is deleted and all audit checks are reset to
 *           disabled.  </p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteAccountAuditConfiguration</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteAccountAuditConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteAccountAuditConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteAccountAuditConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccountAuditConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteAccountAuditConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteAccountAuditConfigurationCommand extends $Command<
  DeleteAccountAuditConfigurationCommandInput,
  DeleteAccountAuditConfigurationCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAccountAuditConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAccountAuditConfigurationCommandInput, DeleteAccountAuditConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeleteAccountAuditConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAccountAuditConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAccountAuditConfigurationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteAccountAuditConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAccountAuditConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteAccountAuditConfigurationCommandOutput> {
    return deserializeAws_restJson1DeleteAccountAuditConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
