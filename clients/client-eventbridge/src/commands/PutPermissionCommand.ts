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

import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { PutPermissionRequest, PutPermissionRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1PutPermissionCommand,
  serializeAws_json1_1PutPermissionCommand,
} from "../protocols/Aws_json1_1";

export interface PutPermissionCommandInput extends PutPermissionRequest {}
export interface PutPermissionCommandOutput extends __MetadataBearer {}

/**
 * <p>Running <code>PutPermission</code> permits the specified Amazon Web Services account or Amazon Web Services organization
 *       to put events to the specified <i>event bus</i>. Amazon EventBridge (CloudWatch
 *       Events) rules in your account are triggered by these events arriving to an event bus in your
 *       account. </p>
 *          <p>For another account to send events to your account, that external account must have an
 *       EventBridge rule with your account's event bus as a target.</p>
 *          <p>To enable multiple Amazon Web Services accounts to put events to your event bus, run
 *         <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are
 *       members of the same Amazon Web Services organization, you can run <code>PutPermission</code> once specifying
 *         <code>Principal</code> as "*" and specifying the Amazon Web Services organization ID in
 *         <code>Condition</code>, to grant permissions to all accounts in that organization.</p>
 *          <p>If you grant permissions using an organization, then accounts in that organization must
 *       specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to
 *       add your account's event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and
 *         Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User
 *         Guide</i>.</p>
 *          <p>The permission policy on the event bus cannot exceed 10 KB in size.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, PutPermissionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, PutPermissionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new PutPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPermissionCommandInput} for command's `input` shape.
 * @see {@link PutPermissionCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 */
export class PutPermissionCommand extends $Command<
  PutPermissionCommandInput,
  PutPermissionCommandOutput,
  EventBridgeClientResolvedConfig
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
    this.middlewareStack.use(getEndpointPlugin(configuration, PutPermissionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EventBridgeClient";
    const commandName = "PutPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPermissionRequestFilterSensitiveLog,
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
