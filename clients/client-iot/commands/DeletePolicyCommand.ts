import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeletePolicyRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DeletePolicyCommand,
  serializeAws_restJson1DeletePolicyCommand,
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

export interface DeletePolicyCommandInput extends DeletePolicyRequest {}
export interface DeletePolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified policy.</p>
 *          <p>A policy cannot be deleted if it has non-default versions or it is attached to any
 *          certificate.</p>
 *          <p>To delete a policy, use the <a>DeletePolicyVersion</a> action to delete all non-default
 *          versions of the policy; use the <a>DetachPolicy</a> action to detach the policy from any
 *          certificate; and then use the DeletePolicy action to delete the policy.</p>
 *          <p>When a policy is deleted using DeletePolicy, its default version is deleted with
 *          it.</p>
 *          <note>
 *             <p>Because of the distributed nature of Amazon Web Services, it can take up to five minutes after
 *          a policy is detached before it's ready to be deleted.</p>
 *          </note>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeletePolicy</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeletePolicyCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeletePolicyCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeletePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeletePolicyCommand extends $Command<
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePolicyCommandInput) {
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
  ): Handler<DeletePolicyCommandInput, DeletePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "DeletePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeletePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePolicyCommandOutput> {
    return deserializeAws_restJson1DeletePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
