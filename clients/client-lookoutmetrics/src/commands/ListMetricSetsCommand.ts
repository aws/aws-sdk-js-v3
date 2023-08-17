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
} from "@smithy/types";

import { LookoutMetricsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutMetricsClient";
import { ListMetricSetsRequest, ListMetricSetsResponse } from "../models/models_0";
import { de_ListMetricSetsCommand, se_ListMetricSetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMetricSetsCommand}.
 */
export interface ListMetricSetsCommandInput extends ListMetricSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListMetricSetsCommand}.
 */
export interface ListMetricSetsCommandOutput extends ListMetricSetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the datasets in the current AWS Region.</p>
 *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
 *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListMetricSetsCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ListMetricSetsCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const input = { // ListMetricSetsRequest
 *   AnomalyDetectorArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListMetricSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListMetricSetsResponse
 * //   MetricSetSummaryList: [ // MetricSetSummaryList
 * //     { // MetricSetSummary
 * //       MetricSetArn: "STRING_VALUE",
 * //       AnomalyDetectorArn: "STRING_VALUE",
 * //       MetricSetDescription: "STRING_VALUE",
 * //       MetricSetName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModificationTime: new Date("TIMESTAMP"),
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMetricSetsCommandInput - {@link ListMetricSetsCommandInput}
 * @returns {@link ListMetricSetsCommandOutput}
 * @see {@link ListMetricSetsCommandInput} for command's `input` shape.
 * @see {@link ListMetricSetsCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for LookoutMetricsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found. Check the ARN of the resource and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to too many requests being submitted at the same time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service. Check your input values and try
 *       again.</p>
 *
 * @throws {@link LookoutMetricsServiceException}
 * <p>Base exception class for all service exceptions from LookoutMetrics service.</p>
 *
 */
export class ListMetricSetsCommand extends $Command<
  ListMetricSetsCommandInput,
  ListMetricSetsCommandOutput,
  LookoutMetricsClientResolvedConfig
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
  constructor(readonly input: ListMetricSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutMetricsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMetricSetsCommandInput, ListMetricSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListMetricSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "ListMetricSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ListMetricSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListMetricSetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMetricSetsCommandOutput> {
    return de_ListMetricSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
