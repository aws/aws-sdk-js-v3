import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";
import { DeleteCanaryRequest, DeleteCanaryResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteCanaryCommand,
  serializeAws_restJson1DeleteCanaryCommand,
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

export type DeleteCanaryCommandInput = DeleteCanaryRequest;
export type DeleteCanaryCommandOutput = DeleteCanaryResponse & __MetadataBearer;

/**
 * <p>Permanently deletes the specified canary.</p>
 *          <p>When you delete a canary, resources used and created by the canary are not automatically deleted. After you delete a canary that you do not intend to
 *          use again, you
 *       should also delete the following:</p>
 *          <ul>
 *             <li>
 *                <p>The Lambda functions and layers used by this canary. These have the prefix
 *                      <code>cwsyn-<i>MyCanaryName</i>
 *                   </code>.</p>
 *             </li>
 *             <li>
 *                <p>The CloudWatch alarms created for this canary. These alarms have a name of
 *                      <code>Synthetics-SharpDrop-Alarm-<i>MyCanaryName</i>
 *                   </code>.</p>
 *             </li>
 *             <li>
 *                <p>Amazon S3 objects and buckets, such as the canary's artifact location.</p>
 *             </li>
 *             <li>
 *                <p>IAM roles created for the canary. If they were created in the console, these roles
 *                have the name <code>
 *                      role/service-role/CloudWatchSyntheticsRole-<i>MyCanaryName</i>
 *                   </code>.</p>
 *             </li>
 *             <li>
 *                <p>CloudWatch Logs log groups created for the canary. These logs groups have the name
 *                      <code>/aws/lambda/cwsyn-<i>MyCanaryName</i>
 *                   </code>. </p>
 *             </li>
 *          </ul>
 *
 *          <p>Before you delete a canary, you might want to use <code>GetCanary</code> to display
 *          the information about this canary. Make
 *          note of the information returned by this operation so that you can delete these resources
 *          after you delete the canary.</p>
 */
export class DeleteCanaryCommand extends $Command<
  DeleteCanaryCommandInput,
  DeleteCanaryCommandOutput,
  SyntheticsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCanaryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SyntheticsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCanaryCommandInput, DeleteCanaryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SyntheticsClient";
    const commandName = "DeleteCanaryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCanaryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteCanaryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCanaryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteCanaryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCanaryCommandOutput> {
    return deserializeAws_restJson1DeleteCanaryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
