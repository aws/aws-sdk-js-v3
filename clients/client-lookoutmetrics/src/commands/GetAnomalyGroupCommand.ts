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
import { GetAnomalyGroupRequest, GetAnomalyGroupResponse } from "../models/models_0";
import { de_GetAnomalyGroupCommand, se_GetAnomalyGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAnomalyGroupCommand}.
 */
export interface GetAnomalyGroupCommandInput extends GetAnomalyGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetAnomalyGroupCommand}.
 */
export interface GetAnomalyGroupCommandOutput extends GetAnomalyGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns details about a group of anomalous metrics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, GetAnomalyGroupCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, GetAnomalyGroupCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const input = { // GetAnomalyGroupRequest
 *   AnomalyGroupId: "STRING_VALUE", // required
 *   AnomalyDetectorArn: "STRING_VALUE", // required
 * };
 * const command = new GetAnomalyGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetAnomalyGroupResponse
 * //   AnomalyGroup: { // AnomalyGroup
 * //     StartTime: "STRING_VALUE",
 * //     EndTime: "STRING_VALUE",
 * //     AnomalyGroupId: "STRING_VALUE",
 * //     AnomalyGroupScore: Number("double"),
 * //     PrimaryMetricName: "STRING_VALUE",
 * //     MetricLevelImpactList: [ // MetricLevelImpactList
 * //       { // MetricLevelImpact
 * //         MetricName: "STRING_VALUE",
 * //         NumTimeSeries: Number("int"),
 * //         ContributionMatrix: { // ContributionMatrix
 * //           DimensionContributionList: [ // DimensionContributionList
 * //             { // DimensionContribution
 * //               DimensionName: "STRING_VALUE",
 * //               DimensionValueContributionList: [ // DimensionValueContributionList
 * //                 { // DimensionValueContribution
 * //                   DimensionValue: "STRING_VALUE",
 * //                   ContributionScore: Number("double"),
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAnomalyGroupCommandInput - {@link GetAnomalyGroupCommandInput}
 * @returns {@link GetAnomalyGroupCommandOutput}
 * @see {@link GetAnomalyGroupCommandInput} for command's `input` shape.
 * @see {@link GetAnomalyGroupCommandOutput} for command's `response` shape.
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
export class GetAnomalyGroupCommand extends $Command<
  GetAnomalyGroupCommandInput,
  GetAnomalyGroupCommandOutput,
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
  constructor(readonly input: GetAnomalyGroupCommandInput) {
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
  ): Handler<GetAnomalyGroupCommandInput, GetAnomalyGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAnomalyGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutMetricsClient";
    const commandName = "GetAnomalyGroupCommand";
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
  private serialize(input: GetAnomalyGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAnomalyGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAnomalyGroupCommandOutput> {
    return de_GetAnomalyGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
