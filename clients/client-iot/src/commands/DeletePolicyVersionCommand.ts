import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeletePolicyVersionRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeletePolicyVersionCommand,
  serializeAws_restJson1DeletePolicyVersionCommand,
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

export interface DeletePolicyVersionCommandInput extends DeletePolicyVersionRequest {}
export interface DeletePolicyVersionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified version of the specified policy. You cannot delete the default
 *          version of a policy using this action. To delete the default version of a policy, use <a>DeletePolicy</a>. To find out which version of a policy is marked as the default
 *          version, use ListPolicyVersions.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicyVersion</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeletePolicyVersionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeletePolicyVersionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeletePolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePolicyVersionCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeletePolicyVersionCommand extends $Command<
  DeletePolicyVersionCommandInput,
  DeletePolicyVersionCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePolicyVersionCommandInput) {
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
  ): Handler<DeletePolicyVersionCommandInput, DeletePolicyVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeletePolicyVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePolicyVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePolicyVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeletePolicyVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePolicyVersionCommandOutput> {
    return deserializeAws_restJson1DeletePolicyVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
