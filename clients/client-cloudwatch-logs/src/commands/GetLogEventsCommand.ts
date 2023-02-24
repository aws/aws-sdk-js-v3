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
import {
  GetLogEventsRequest,
  GetLogEventsRequestFilterSensitiveLog,
  GetLogEventsResponse,
  GetLogEventsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetLogEventsCommand,
  serializeAws_json1_1GetLogEventsCommand,
} from "../protocols/Aws_json1_1";

export interface GetLogEventsCommandInput extends GetLogEventsRequest {}
export interface GetLogEventsCommandOutput extends GetLogEventsResponse, __MetadataBearer {}

/**
 * <p>Lists log events from the specified log stream. You can list all of the log events or
 *       filter using a time range.</p>
 *          <p>By default, this operation returns as many log events as can fit in a response size of 1MB (up to 10,000 log events).
 *       You can get additional log events by specifying one of the tokens in a subsequent call.
 *       This operation can return empty results while there are more log events available through the token.</p>
 *          <p>If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and
 *       view data from the linked source accounts. For more information, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
 *          <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or <code>logGroupName</code>.
 *       You must include one of these two parameters, but you can't include both.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetLogEventsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetLogEventsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new GetLogEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLogEventsCommandInput} for command's `input` shape.
 * @see {@link GetLogEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 */
export class GetLogEventsCommand extends $Command<
  GetLogEventsCommandInput,
  GetLogEventsCommandOutput,
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

  constructor(readonly input: GetLogEventsCommandInput) {
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
  ): Handler<GetLogEventsCommandInput, GetLogEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetLogEventsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "GetLogEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetLogEventsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetLogEventsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetLogEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetLogEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetLogEventsCommandOutput> {
    return deserializeAws_json1_1GetLogEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
