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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { PutRetentionPolicyRequest, PutRetentionPolicyRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1PutRetentionPolicyCommand,
  serializeAws_json1_1PutRetentionPolicyCommand,
} from "../protocols/Aws_json1_1";

export interface PutRetentionPolicyCommandInput extends PutRetentionPolicyRequest {}
export interface PutRetentionPolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the retention of the specified log group. With a retention policy, you can
 *       configure the number of days for which to retain log events in the specified log
 *       group.</p>
 *          <note>
 *             <p>CloudWatch Logs doesn’t immediately delete log events when they reach their retention
 *         setting. It typically takes up to 72 hours after that before log events are deleted, but in
 *         rare situations might take longer.</p>
 *             <p>To illustrate, imagine that you change a log group to have a longer retention setting
 *         when it contains log events that are past the expiration date, but haven’t been deleted.
 *         Those log events will take up to 72 hours to be deleted after the new retention date is
 *         reached. To make sure that log data is deleted permanently, keep a log group at its lower
 *         retention setting until 72 hours after the previous retention period ends. Alternatively,
 *         wait to change the retention setting until you confirm that the earlier log events are
 *         deleted. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutRetentionPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutRetentionPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new PutRetentionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRetentionPolicyCommandInput} for command's `input` shape.
 * @see {@link PutRetentionPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 */
export class PutRetentionPolicyCommand extends $Command<
  PutRetentionPolicyCommandInput,
  PutRetentionPolicyCommandOutput,
  CloudWatchLogsClientResolvedConfig
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

  constructor(readonly input: PutRetentionPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchLogsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRetentionPolicyCommandInput, PutRetentionPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutRetentionPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "PutRetentionPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRetentionPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRetentionPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutRetentionPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRetentionPolicyCommandOutput> {
    return deserializeAws_json1_1PutRetentionPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
