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
  ListTagsLogGroupRequest,
  ListTagsLogGroupRequestFilterSensitiveLog,
  ListTagsLogGroupResponse,
  ListTagsLogGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListTagsLogGroupCommand,
  serializeAws_json1_1ListTagsLogGroupCommand,
} from "../protocols/Aws_json1_1";

export interface ListTagsLogGroupCommandInput extends ListTagsLogGroupRequest {}
export interface ListTagsLogGroupCommandOutput extends ListTagsLogGroupResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <important>
 *             <p>The ListTagsLogGroup operation is on the path to deprecation. We recommend that you use
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_ListTagsForResource.html">ListTagsForResource</a> instead.</p>
 *          </important>
 *          <p>Lists the tags for the specified log group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, ListTagsLogGroupCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, ListTagsLogGroupCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new ListTagsLogGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsLogGroupCommandInput} for command's `input` shape.
 * @see {@link ListTagsLogGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 */
export class ListTagsLogGroupCommand extends $Command<
  ListTagsLogGroupCommandInput,
  ListTagsLogGroupCommandOutput,
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

  constructor(readonly input: ListTagsLogGroupCommandInput) {
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
  ): Handler<ListTagsLogGroupCommandInput, ListTagsLogGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTagsLogGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "ListTagsLogGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTagsLogGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTagsLogGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTagsLogGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTagsLogGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTagsLogGroupCommandOutput> {
    return deserializeAws_json1_1ListTagsLogGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
