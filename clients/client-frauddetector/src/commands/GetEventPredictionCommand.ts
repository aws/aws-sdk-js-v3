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

import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import {
  GetEventPredictionRequest,
  GetEventPredictionRequestFilterSensitiveLog,
  GetEventPredictionResult,
} from "../models/models_0";
import { de_GetEventPredictionCommand, se_GetEventPredictionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetEventPredictionCommand}.
 */
export interface GetEventPredictionCommandInput extends GetEventPredictionRequest {}
/**
 * @public
 *
 * The output of {@link GetEventPredictionCommand}.
 */
export interface GetEventPredictionCommandOutput extends GetEventPredictionResult, __MetadataBearer {}

/**
 * @public
 * <p>Evaluates an event against a detector version. If a version ID is not provided, the detector’s (<code>ACTIVE</code>) version is used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, GetEventPredictionCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, GetEventPredictionCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // GetEventPredictionRequest
 *   detectorId: "STRING_VALUE", // required
 *   detectorVersionId: "STRING_VALUE",
 *   eventId: "STRING_VALUE", // required
 *   eventTypeName: "STRING_VALUE", // required
 *   entities: [ // listOfEntities // required
 *     { // Entity
 *       entityType: "STRING_VALUE", // required
 *       entityId: "STRING_VALUE", // required
 *     },
 *   ],
 *   eventTimestamp: "STRING_VALUE", // required
 *   eventVariables: { // EventVariableMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   externalModelEndpointDataBlobs: { // ExternalModelEndpointDataBlobMap
 *     "<keys>": { // ModelEndpointDataBlob
 *       byteBuffer: "BLOB_VALUE",
 *       contentType: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new GetEventPredictionCommand(input);
 * const response = await client.send(command);
 * // { // GetEventPredictionResult
 * //   modelScores: [ // ListOfModelScores
 * //     { // ModelScores
 * //       modelVersion: { // ModelVersion
 * //         modelId: "STRING_VALUE", // required
 * //         modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS", // required
 * //         modelVersionNumber: "STRING_VALUE", // required
 * //         arn: "STRING_VALUE",
 * //       },
 * //       scores: { // ModelPredictionMap
 * //         "<keys>": Number("float"),
 * //       },
 * //     },
 * //   ],
 * //   ruleResults: [ // ListOfRuleResults
 * //     { // RuleResult
 * //       ruleId: "STRING_VALUE",
 * //       outcomes: [ // ListOfStrings
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   externalModelOutputs: [ // ListOfExternalModelOutputs
 * //     { // ExternalModelOutputs
 * //       externalModel: { // ExternalModelSummary
 * //         modelEndpoint: "STRING_VALUE",
 * //         modelSource: "SAGEMAKER",
 * //       },
 * //       outputs: { // ExternalModelPredictionMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetEventPredictionCommandInput - {@link GetEventPredictionCommandInput}
 * @returns {@link GetEventPredictionCommandOutput}
 * @see {@link GetEventPredictionCommandInput} for command's `input` shape.
 * @see {@link GetEventPredictionCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An exception indicating there was a conflict during a delete operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>An exception indicating that the attached customer-owned (external) model threw an exception when Amazon Fraud Detector invoked the model.</p>
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
export class GetEventPredictionCommand extends $Command<
  GetEventPredictionCommandInput,
  GetEventPredictionCommandOutput,
  FraudDetectorClientResolvedConfig
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
  constructor(readonly input: GetEventPredictionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEventPredictionCommandInput, GetEventPredictionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEventPredictionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "GetEventPredictionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEventPredictionRequestFilterSensitiveLog,
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
  private serialize(input: GetEventPredictionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetEventPredictionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEventPredictionCommandOutput> {
    return de_GetEventPredictionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
