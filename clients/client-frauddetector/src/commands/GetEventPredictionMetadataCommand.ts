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

import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import {
  GetEventPredictionMetadataRequest,
  GetEventPredictionMetadataResult,
  GetEventPredictionMetadataResultFilterSensitiveLog,
} from "../models/models_0";
import { de_GetEventPredictionMetadataCommand, se_GetEventPredictionMetadataCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEventPredictionMetadataCommand}.
 */
export interface GetEventPredictionMetadataCommandInput extends GetEventPredictionMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetEventPredictionMetadataCommand}.
 */
export interface GetEventPredictionMetadataCommandOutput extends GetEventPredictionMetadataResult, __MetadataBearer {}

/**
 * @public
 * <p>
 * Gets details of the past fraud predictions for the specified event ID, event type, detector ID, and detector version ID that was generated in the specified time period.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetEventPredictionMetadataCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetEventPredictionMetadataCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // GetEventPredictionMetadataRequest
 *   eventId: "STRING_VALUE", // required
 *   eventTypeName: "STRING_VALUE", // required
 *   detectorId: "STRING_VALUE", // required
 *   detectorVersionId: "STRING_VALUE", // required
 *   predictionTimestamp: "STRING_VALUE", // required
 * };
 * const command = new GetEventPredictionMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetEventPredictionMetadataResult
 * //   eventId: "STRING_VALUE",
 * //   eventTypeName: "STRING_VALUE",
 * //   entityId: "STRING_VALUE",
 * //   entityType: "STRING_VALUE",
 * //   eventTimestamp: "STRING_VALUE",
 * //   detectorId: "STRING_VALUE",
 * //   detectorVersionId: "STRING_VALUE",
 * //   detectorVersionStatus: "STRING_VALUE",
 * //   eventVariables: [ // ListOfEventVariableSummaries
 * //     { // EventVariableSummary
 * //       name: "STRING_VALUE",
 * //       value: "STRING_VALUE",
 * //       source: "STRING_VALUE",
 * //     },
 * //   ],
 * //   rules: [ // EvaluatedRuleList
 * //     { // EvaluatedRule
 * //       ruleId: "STRING_VALUE",
 * //       ruleVersion: "STRING_VALUE",
 * //       expression: "STRING_VALUE",
 * //       expressionWithValues: "STRING_VALUE",
 * //       outcomes: [ // ListOfStrings
 * //         "STRING_VALUE",
 * //       ],
 * //       evaluated: true || false,
 * //       matched: true || false,
 * //     },
 * //   ],
 * //   ruleExecutionMode: "ALL_MATCHED" || "FIRST_MATCHED",
 * //   outcomes: [
 * //     "STRING_VALUE",
 * //   ],
 * //   evaluatedModelVersions: [ // ListOfEvaluatedModelVersions
 * //     { // EvaluatedModelVersion
 * //       modelId: "STRING_VALUE",
 * //       modelVersion: "STRING_VALUE",
 * //       modelType: "STRING_VALUE",
 * //       evaluations: [ // ListOfModelVersionEvaluations
 * //         { // ModelVersionEvaluation
 * //           outputVariableName: "STRING_VALUE",
 * //           evaluationScore: "STRING_VALUE",
 * //           predictionExplanations: { // PredictionExplanations
 * //             variableImpactExplanations: [ // listOfVariableImpactExplanations
 * //               { // VariableImpactExplanation
 * //                 eventVariableName: "STRING_VALUE",
 * //                 relativeImpact: "STRING_VALUE",
 * //                 logOddsImpact: Number("float"),
 * //               },
 * //             ],
 * //             aggregatedVariablesImpactExplanations: [ // ListOfAggregatedVariablesImpactExplanations
 * //               { // AggregatedVariablesImpactExplanation
 * //                 eventVariableNames: "<ListOfStrings>",
 * //                 relativeImpact: "STRING_VALUE",
 * //                 logOddsImpact: Number("float"),
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   evaluatedExternalModels: [ // ListOfEvaluatedExternalModels
 * //     { // EvaluatedExternalModel
 * //       modelEndpoint: "STRING_VALUE",
 * //       useEventVariables: true || false,
 * //       inputVariables: { // MapOfStrings
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       outputVariables: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   predictionTimestamp: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEventPredictionMetadataCommandInput - {@link GetEventPredictionMetadataCommandInput}
 * @returns {@link GetEventPredictionMetadataCommandOutput}
 * @see {@link GetEventPredictionMetadataCommandInput} for command's `input` shape.
 * @see {@link GetEventPredictionMetadataCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 */
export class GetEventPredictionMetadataCommand extends $Command<
  GetEventPredictionMetadataCommandInput,
  GetEventPredictionMetadataCommandOutput,
  FraudDetectorClientResolvedConfig
> {
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
  constructor(readonly input: GetEventPredictionMetadataCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEventPredictionMetadataCommandInput, GetEventPredictionMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEventPredictionMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetEventPredictionMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetEventPredictionMetadataResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHawksNestServiceFacade",
        operation: "GetEventPredictionMetadata",
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
  private serialize(input: GetEventPredictionMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEventPredictionMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEventPredictionMetadataCommandOutput> {
    return de_GetEventPredictionMetadataCommand(output, context);
  }
}
