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
  DescribeSubscriptionFiltersRequest,
  DescribeSubscriptionFiltersRequestFilterSensitiveLog,
  DescribeSubscriptionFiltersResponse,
  DescribeSubscriptionFiltersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeSubscriptionFiltersCommand,
  serializeAws_json1_1DescribeSubscriptionFiltersCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeSubscriptionFiltersCommandInput extends DescribeSubscriptionFiltersRequest {}
export interface DescribeSubscriptionFiltersCommandOutput
  extends DescribeSubscriptionFiltersResponse,
    __MetadataBearer {}

/**
 * <p>Lists the subscription filters for the specified log group. You can list all the subscription filters or filter the results by prefix.
 *       The results are ASCII-sorted by filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeSubscriptionFiltersCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeSubscriptionFiltersCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DescribeSubscriptionFiltersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSubscriptionFiltersCommandInput} for command's `input` shape.
 * @see {@link DescribeSubscriptionFiltersCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 */
export class DescribeSubscriptionFiltersCommand extends $Command<
  DescribeSubscriptionFiltersCommandInput,
  DescribeSubscriptionFiltersCommandOutput,
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

  constructor(readonly input: DescribeSubscriptionFiltersCommandInput) {
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
  ): Handler<DescribeSubscriptionFiltersCommandInput, DescribeSubscriptionFiltersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSubscriptionFiltersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchLogsClient";
    const commandName = "DescribeSubscriptionFiltersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSubscriptionFiltersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeSubscriptionFiltersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSubscriptionFiltersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeSubscriptionFiltersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSubscriptionFiltersCommandOutput> {
    return deserializeAws_json1_1DescribeSubscriptionFiltersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
