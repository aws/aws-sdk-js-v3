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

import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { GetRecommendationsRequest, GetRecommendationsResponse } from "../models/models_0";
import { de_GetRecommendationsCommand, se_GetRecommendationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRecommendationsCommand}.
 */
export interface GetRecommendationsCommandInput extends GetRecommendationsRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommendationsCommand}.
 */
export interface GetRecommendationsCommandOutput extends GetRecommendationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *             Returns a list of
 *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Recommendation.html">
 *                <code>Recommendation</code>
 *             </a>
 *             objects that contain recommendations for a profiling group for a given time period. A list of
 *             <a href="https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_Anomaly.html">
 *                <code>Anomaly</code>
 *             </a>
 *             objects that contains details about anomalies detected in the profiling group for the same time period is also
 *             returned.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, GetRecommendationsCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, GetRecommendationsCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const input = { // GetRecommendationsRequest
 *   profilingGroupName: "STRING_VALUE", // required
 *   startTime: new Date("TIMESTAMP"), // required
 *   endTime: new Date("TIMESTAMP"), // required
 *   locale: "STRING_VALUE",
 * };
 * const command = new GetRecommendationsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommendationsResponse
 * //   profilingGroupName: "STRING_VALUE", // required
 * //   profileStartTime: new Date("TIMESTAMP"), // required
 * //   profileEndTime: new Date("TIMESTAMP"), // required
 * //   recommendations: [ // Recommendations // required
 * //     { // Recommendation
 * //       allMatchesCount: Number("int"), // required
 * //       allMatchesSum: Number("double"), // required
 * //       pattern: { // Pattern
 * //         id: "STRING_VALUE",
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         resolutionSteps: "STRING_VALUE",
 * //         targetFrames: [ // TargetFrames
 * //           [ // TargetFrame
 * //             "STRING_VALUE",
 * //           ],
 * //         ],
 * //         thresholdPercent: Number("double"),
 * //         countersToAggregate: [ // Strings
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       topMatches: [ // Matches // required
 * //         { // Match
 * //           targetFramesIndex: Number("int"),
 * //           frameAddress: "STRING_VALUE",
 * //           thresholdBreachValue: Number("double"),
 * //         },
 * //       ],
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       endTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   anomalies: [ // Anomalies // required
 * //     { // Anomaly
 * //       metric: { // Metric
 * //         frameName: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         threadStates: [ // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       reason: "STRING_VALUE", // required
 * //       instances: [ // AnomalyInstances // required
 * //         { // AnomalyInstance
 * //           id: "STRING_VALUE", // required
 * //           startTime: new Date("TIMESTAMP"), // required
 * //           endTime: new Date("TIMESTAMP"),
 * //           userFeedback: { // UserFeedback
 * //             type: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetRecommendationsCommandInput - {@link GetRecommendationsCommandInput}
 * @returns {@link GetRecommendationsCommandOutput}
 * @see {@link GetRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationsCommandOutput} for command's `response` shape.
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
export class GetRecommendationsCommand extends $Command<
  GetRecommendationsCommandInput,
  GetRecommendationsCommandOutput,
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
  constructor(readonly input: GetRecommendationsCommandInput) {
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
  ): Handler<GetRecommendationsCommandInput, GetRecommendationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRecommendationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruProfilerClient";
    const commandName = "GetRecommendationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeGuruProfiler",
        operation: "GetRecommendations",
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
  private serialize(input: GetRecommendationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRecommendationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRecommendationsCommandOutput> {
    return de_GetRecommendationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
