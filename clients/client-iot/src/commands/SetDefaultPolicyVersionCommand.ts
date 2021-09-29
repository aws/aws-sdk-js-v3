import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { SetDefaultPolicyVersionRequest } from "../models/models_2";
import {
  deserializeAws_restJson1SetDefaultPolicyVersionCommand,
  serializeAws_restJson1SetDefaultPolicyVersionCommand,
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

export interface SetDefaultPolicyVersionCommandInput extends SetDefaultPolicyVersionRequest {}
export interface SetDefaultPolicyVersionCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the specified version of the specified policy as the policy's default
 *          (operative) version. This action affects all certificates to which the policy is attached.
 *          To list the principals the policy is attached to, use the <a>ListPrincipalPolicies</a>
 *          action.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SetDefaultPolicyVersion</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SetDefaultPolicyVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SetDefaultPolicyVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new SetDefaultPolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetDefaultPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link SetDefaultPolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SetDefaultPolicyVersionCommand extends $Command<
  SetDefaultPolicyVersionCommandInput,
  SetDefaultPolicyVersionCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SetDefaultPolicyVersionCommandInput) {
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
  ): Handler<SetDefaultPolicyVersionCommandInput, SetDefaultPolicyVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "SetDefaultPolicyVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetDefaultPolicyVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetDefaultPolicyVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SetDefaultPolicyVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetDefaultPolicyVersionCommandOutput> {
    return deserializeAws_restJson1SetDefaultPolicyVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
