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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  DescribeDocumentClassifierRequest,
  DescribeDocumentClassifierResponse,
  DescribeDocumentClassifierResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeDocumentClassifierCommand, se_DescribeDocumentClassifierCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDocumentClassifierCommand}.
 */
export interface DescribeDocumentClassifierCommandInput extends DescribeDocumentClassifierRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDocumentClassifierCommand}.
 */
export interface DescribeDocumentClassifierCommandOutput extends DescribeDocumentClassifierResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the properties associated with a document classifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeDocumentClassifierCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeDocumentClassifierCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // DescribeDocumentClassifierRequest
 *   DocumentClassifierArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDocumentClassifierCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDocumentClassifierResponse
 * //   DocumentClassifierProperties: { // DocumentClassifierProperties
 * //     DocumentClassifierArn: "STRING_VALUE",
 * //     LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW",
 * //     Status: "SUBMITTED" || "TRAINING" || "DELETING" || "STOP_REQUESTED" || "STOPPED" || "IN_ERROR" || "TRAINED" || "TRAINED_WITH_WARNING",
 * //     Message: "STRING_VALUE",
 * //     SubmitTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     TrainingStartTime: new Date("TIMESTAMP"),
 * //     TrainingEndTime: new Date("TIMESTAMP"),
 * //     InputDataConfig: { // DocumentClassifierInputDataConfig
 * //       DataFormat: "COMPREHEND_CSV" || "AUGMENTED_MANIFEST",
 * //       S3Uri: "STRING_VALUE",
 * //       TestS3Uri: "STRING_VALUE",
 * //       LabelDelimiter: "STRING_VALUE",
 * //       AugmentedManifests: [ // DocumentClassifierAugmentedManifestsList
 * //         { // AugmentedManifestsListItem
 * //           S3Uri: "STRING_VALUE", // required
 * //           Split: "TRAIN" || "TEST",
 * //           AttributeNames: [ // AttributeNamesList // required
 * //             "STRING_VALUE",
 * //           ],
 * //           AnnotationDataS3Uri: "STRING_VALUE",
 * //           SourceDocumentsS3Uri: "STRING_VALUE",
 * //           DocumentType: "PLAIN_TEXT_DOCUMENT" || "SEMI_STRUCTURED_DOCUMENT",
 * //         },
 * //       ],
 * //       DocumentType: "PLAIN_TEXT_DOCUMENT" || "SEMI_STRUCTURED_DOCUMENT",
 * //       Documents: { // DocumentClassifierDocuments
 * //         S3Uri: "STRING_VALUE", // required
 * //         TestS3Uri: "STRING_VALUE",
 * //       },
 * //       DocumentReaderConfig: { // DocumentReaderConfig
 * //         DocumentReadAction: "TEXTRACT_DETECT_DOCUMENT_TEXT" || "TEXTRACT_ANALYZE_DOCUMENT", // required
 * //         DocumentReadMode: "SERVICE_DEFAULT" || "FORCE_DOCUMENT_READ_ACTION",
 * //         FeatureTypes: [ // ListOfDocumentReadFeatureTypes
 * //           "TABLES" || "FORMS",
 * //         ],
 * //       },
 * //     },
 * //     OutputDataConfig: { // DocumentClassifierOutputDataConfig
 * //       S3Uri: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       FlywheelStatsS3Prefix: "STRING_VALUE",
 * //     },
 * //     ClassifierMetadata: { // ClassifierMetadata
 * //       NumberOfLabels: Number("int"),
 * //       NumberOfTrainedDocuments: Number("int"),
 * //       NumberOfTestDocuments: Number("int"),
 * //       EvaluationMetrics: { // ClassifierEvaluationMetrics
 * //         Accuracy: Number("double"),
 * //         Precision: Number("double"),
 * //         Recall: Number("double"),
 * //         F1Score: Number("double"),
 * //         MicroPrecision: Number("double"),
 * //         MicroRecall: Number("double"),
 * //         MicroF1Score: Number("double"),
 * //         HammingLoss: Number("double"),
 * //       },
 * //     },
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     VolumeKmsKeyId: "STRING_VALUE",
 * //     VpcConfig: { // VpcConfig
 * //       SecurityGroupIds: [ // SecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Subnets: [ // Subnets // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Mode: "MULTI_CLASS" || "MULTI_LABEL",
 * //     ModelKmsKeyId: "STRING_VALUE",
 * //     VersionName: "STRING_VALUE",
 * //     SourceModelArn: "STRING_VALUE",
 * //     FlywheelArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDocumentClassifierCommandInput - {@link DescribeDocumentClassifierCommandInput}
 * @returns {@link DescribeDocumentClassifierCommandOutput}
 * @see {@link DescribeDocumentClassifierCommandInput} for command's `input` shape.
 * @see {@link DescribeDocumentClassifierCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 */
export class DescribeDocumentClassifierCommand extends $Command<
  DescribeDocumentClassifierCommandInput,
  DescribeDocumentClassifierCommandOutput,
  ComprehendClientResolvedConfig
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
  constructor(readonly input: DescribeDocumentClassifierCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDocumentClassifierCommandInput, DescribeDocumentClassifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDocumentClassifierCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DescribeDocumentClassifierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeDocumentClassifierResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "Comprehend_20171127",
        operation: "DescribeDocumentClassifier",
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
  private serialize(input: DescribeDocumentClassifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDocumentClassifierCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDocumentClassifierCommandOutput> {
    return de_DescribeDocumentClassifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
