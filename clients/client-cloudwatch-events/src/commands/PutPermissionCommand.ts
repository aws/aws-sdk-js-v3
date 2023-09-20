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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { PutPermissionRequest } from "../models/models_0";
import { de_PutPermissionCommand, se_PutPermissionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutPermissionCommand}.
 */
export interface PutPermissionCommandInput extends PutPermissionRequest {}
/**
 * @public
 *
 * The output of {@link PutPermissionCommand}.
 */
export interface PutPermissionCommandOutput extends __MetadataBearer {}

/**
 * @public
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
 * import { CloudWatchEventsClient, PutPermissionCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, PutPermissionCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const input = { // PutPermissionRequest
 *   EventBusName: "STRING_VALUE",
 *   Action: "STRING_VALUE",
 *   Principal: "STRING_VALUE",
 *   StatementId: "STRING_VALUE",
 *   Condition: { // Condition
 *     Type: "STRING_VALUE", // required
 *     Key: "STRING_VALUE", // required
 *     Value: "STRING_VALUE", // required
 *   },
 *   Policy: "STRING_VALUE",
 * };
 * const command = new PutPermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutPermissionCommandInput - {@link PutPermissionCommandInput}
 * @returns {@link PutPermissionCommandOutput}
 * @see {@link PutPermissionCommandInput} for command's `input` shape.
 * @see {@link PutPermissionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
 *
 * @throws {@link PolicyLengthExceededException} (client fault)
 *  <p>The event bus policy is too long. For more information, see the limits.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 */
export class PutPermissionCommand extends $Command<
  PutPermissionCommandInput,
  PutPermissionCommandOutput,
  CloudWatchEventsClientResolvedConfig
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
    configuration: CloudWatchEventsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutPermissionCommandInput, PutPermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutPermissionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchEventsClient";
    const commandName = "PutPermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSEvents",
        operation: "PutPermission",
      },
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
  private serialize(input: PutPermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutPermissionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPermissionCommandOutput> {
    return de_PutPermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
