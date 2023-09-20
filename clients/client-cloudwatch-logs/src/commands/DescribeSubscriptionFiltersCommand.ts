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

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DescribeSubscriptionFiltersRequest, DescribeSubscriptionFiltersResponse } from "../models/models_0";
import { de_DescribeSubscriptionFiltersCommand, se_DescribeSubscriptionFiltersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeSubscriptionFiltersCommand}.
 */
export interface DescribeSubscriptionFiltersCommandInput extends DescribeSubscriptionFiltersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSubscriptionFiltersCommand}.
 */
export interface DescribeSubscriptionFiltersCommandOutput
  extends DescribeSubscriptionFiltersResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Lists the subscription filters for the specified log group. You can list all the subscription filters or filter the results by prefix.
 *       The results are ASCII-sorted by filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DescribeSubscriptionFiltersCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DescribeSubscriptionFiltersCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // DescribeSubscriptionFiltersRequest
 *   logGroupName: "STRING_VALUE", // required
 *   filterNamePrefix: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new DescribeSubscriptionFiltersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSubscriptionFiltersResponse
 * //   subscriptionFilters: [ // SubscriptionFilters
 * //     { // SubscriptionFilter
 * //       filterName: "STRING_VALUE",
 * //       logGroupName: "STRING_VALUE",
 * //       filterPattern: "STRING_VALUE",
 * //       destinationArn: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //       distribution: "Random" || "ByLogStream",
 * //       creationTime: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSubscriptionFiltersCommandInput - {@link DescribeSubscriptionFiltersCommandInput}
 * @returns {@link DescribeSubscriptionFiltersCommandOutput}
 * @see {@link DescribeSubscriptionFiltersCommandInput} for command's `input` shape.
 * @see {@link DescribeSubscriptionFiltersCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Logs_20140328",
        operation: "DescribeSubscriptionFilters",
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
  private serialize(input: DescribeSubscriptionFiltersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeSubscriptionFiltersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSubscriptionFiltersCommandOutput> {
    return de_DescribeSubscriptionFiltersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
