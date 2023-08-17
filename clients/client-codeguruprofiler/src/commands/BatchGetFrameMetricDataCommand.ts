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

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { BatchGetFrameMetricDataRequest, BatchGetFrameMetricDataResponse } from "../models/models_0";
import { de_BatchGetFrameMetricDataCommand, se_BatchGetFrameMetricDataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetFrameMetricDataCommand}.
 */
export interface BatchGetFrameMetricDataCommandInput extends BatchGetFrameMetricDataRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetFrameMetricDataCommand}.
 */
export interface BatchGetFrameMetricDataCommandOutput extends BatchGetFrameMetricDataResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *          Returns the time series of values for a requested list
 *          of frame metrics from a time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, BatchGetFrameMetricDataCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, BatchGetFrameMetricDataCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // BatchGetFrameMetricDataRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   period: "STRING_VALUE",
 *   targetResolution: "STRING_VALUE",
 *   frameMetrics: [ // FrameMetrics
 *     { // FrameMetric
 *       frameName: "STRING_VALUE", // required
 *       type: "STRING_VALUE", // required
 *       threadStates: [ // ThreadStates // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new BatchGetFrameMetricDataCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetFrameMetricDataResponse
 * //   startTime: new Date("TIMESTAMP"), // required
 * //   endTime: new Date("TIMESTAMP"), // required
 * //   resolution: "STRING_VALUE", // required
 * //   endTimes: [ // ListOfTimestamps // required
 * //     { // TimestampStructure
 * //       value: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   unprocessedEndTimes: { // UnprocessedEndTimeMap // required
 * //     "<keys>": [
 * //       {
 * //         value: new Date("TIMESTAMP"), // required
 * //       },
 * //     ],
 * //   },
 * //   frameMetricData: [ // FrameMetricData // required
 * //     { // FrameMetricDatum
 * //       frameMetric: { // FrameMetric
 * //         frameName: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         threadStates: [ // ThreadStates // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       values: [ // FrameMetricValues // required
 * //         Number("double"),
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetFrameMetricDataCommandInput - {@link BatchGetFrameMetricDataCommandInput}
 * @returns {@link BatchGetFrameMetricDataCommandOutput}
 * @see {@link BatchGetFrameMetricDataCommandInput} for command's `input` shape.
 * @see {@link BatchGetFrameMetricDataCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for CodeGuruProfilerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link CodeGuruProfilerServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruProfiler service.</p>
 *
 */
export class BatchGetFrameMetricDataCommand extends $Command<
  BatchGetFrameMetricDataCommandInput,
  BatchGetFrameMetricDataCommandOutput,
  CodeGuruProfilerClientResolvedConfig
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
  constructor(readonly input: BatchGetFrameMetricDataCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruProfilerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetFrameMetricDataCommandInput, BatchGetFrameMetricDataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetFrameMetricDataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "BatchGetFrameMetricDataCommand";
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
  private serialize(input: BatchGetFrameMetricDataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetFrameMetricDataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetFrameMetricDataCommandOutput> {
    return de_BatchGetFrameMetricDataCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
