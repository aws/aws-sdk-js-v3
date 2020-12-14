import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { PutPermissionRequest } from "../models/models_0";
import {
  deserializeAws_json1_1PutPermissionCommand,
  serializeAws_json1_1PutPermissionCommand,
} from "../protocols/Aws_json1_1";
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

export type PutPermissionCommandInput = PutPermissionRequest;
export type PutPermissionCommandOutput = __MetadataBearer;

/**
 * <p>Running <code>PutPermission</code> permits the specified AWS account or AWS
 *             organization to put events to the specified <i>event bus</i>. Amazon
 *             EventBridge (CloudWatch Events) rules in your account are triggered by these events
 *             arriving to an event bus in your account. </p>
 *         <p>For another account to send events to your account, that external account must have
 *             an EventBridge rule with your account's event bus as a target.</p>
 *
 *         <p>To enable multiple AWS accounts to put events to your event bus, run
 *                 <code>PutPermission</code> once for each of these accounts. Or, if all the accounts
 *             are members of the same AWS organization, you can run <code>PutPermission</code> once
 *             specifying <code>Principal</code> as "*" and specifying the AWS organization ID in
 *                 <code>Condition</code>, to grant permissions to all accounts in that
 *             organization.</p>
 *
 *         <p>If you grant permissions using an organization, then accounts in that organization
 *             must specify a <code>RoleArn</code> with proper permissions when they use
 *                 <code>PutTarget</code> to add your account's event bus as a target. For more
 *             information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between AWS Accounts</a> in the <i>Amazon
 *                 EventBridge User Guide</i>.</p>
 *
 *         <p>The permission policy on the default event bus cannot exceed 10 KB in
 *             size.</p>
 */
export class PutPermissionCommand extends $Command<
  PutPermissionCommandInput,
  PutPermissionCommandOutput,
  EventBridgeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutPermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EventBridgeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutPermissionCommandInput, PutPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "PutPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPermissionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutPermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutPermissionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPermissionCommandOutput> {
    return deserializeAws_json1_1PutPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
