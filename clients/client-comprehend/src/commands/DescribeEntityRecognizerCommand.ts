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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  DescribeEntityRecognizerRequest,
  DescribeEntityRecognizerResponse,
  DescribeEntityRecognizerResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeEntityRecognizerCommand, se_DescribeEntityRecognizerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEntityRecognizerCommand}.
 */
export interface DescribeEntityRecognizerCommandInput extends DescribeEntityRecognizerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEntityRecognizerCommand}.
 */
export interface DescribeEntityRecognizerCommandOutput extends DescribeEntityRecognizerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides details about an entity recognizer including status, S3 buckets containing
 *       training data, recognizer metadata, metrics, and so on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeEntityRecognizerCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeEntityRecognizerCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // DescribeEntityRecognizerRequest
 *   EntityRecognizerArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeEntityRecognizerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEntityRecognizerResponse
 * //   EntityRecognizerProperties: { // EntityRecognizerProperties
 * //     EntityRecognizerArn: "STRING_VALUE",
 * //     LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW",
 * //     Status: "SUBMITTED" || "TRAINING" || "DELETING" || "STOP_REQUESTED" || "STOPPED" || "IN_ERROR" || "TRAINED" || "TRAINED_WITH_WARNING",
 * //     Message: "STRING_VALUE",
 * //     SubmitTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     TrainingStartTime: new Date("TIMESTAMP"),
 * //     TrainingEndTime: new Date("TIMESTAMP"),
 * //     InputDataConfig: { // EntityRecognizerInputDataConfig
 * //       DataFormat: "COMPREHEND_CSV" || "AUGMENTED_MANIFEST",
 * //       EntityTypes: [ // EntityTypesList // required
 * //         { // EntityTypesListItem
 * //           Type: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Documents: { // EntityRecognizerDocuments
 * //         S3Uri: "STRING_VALUE", // required
 * //         TestS3Uri: "STRING_VALUE",
 * //         InputFormat: "ONE_DOC_PER_FILE" || "ONE_DOC_PER_LINE",
 * //       },
 * //       Annotations: { // EntityRecognizerAnnotations
 * //         S3Uri: "STRING_VALUE", // required
 * //         TestS3Uri: "STRING_VALUE",
 * //       },
 * //       EntityList: { // EntityRecognizerEntityList
 * //         S3Uri: "STRING_VALUE", // required
 * //       },
 * //       AugmentedManifests: [ // EntityRecognizerAugmentedManifestsList
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
 * //     },
 * //     RecognizerMetadata: { // EntityRecognizerMetadata
 * //       NumberOfTrainedDocuments: Number("int"),
 * //       NumberOfTestDocuments: Number("int"),
 * //       EvaluationMetrics: { // EntityRecognizerEvaluationMetrics
 * //         Precision: Number("double"),
 * //         Recall: Number("double"),
 * //         F1Score: Number("double"),
 * //       },
 * //       EntityTypes: [ // EntityRecognizerMetadataEntityTypesList
 * //         { // EntityRecognizerMetadataEntityTypesListItem
 * //           Type: "STRING_VALUE",
 * //           EvaluationMetrics: { // EntityTypesEvaluationMetrics
 * //             Precision: Number("double"),
 * //             Recall: Number("double"),
 * //             F1Score: Number("double"),
 * //           },
 * //           NumberOfTrainMentions: Number("int"),
 * //         },
 * //       ],
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
 * //     ModelKmsKeyId: "STRING_VALUE",
 * //     VersionName: "STRING_VALUE",
 * //     SourceModelArn: "STRING_VALUE",
 * //     FlywheelArn: "STRING_VALUE",
 * //     OutputDataConfig: { // EntityRecognizerOutputDataConfig
 * //       FlywheelStatsS3Prefix: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEntityRecognizerCommandInput - {@link DescribeEntityRecognizerCommandInput}
 * @returns {@link DescribeEntityRecognizerCommandOutput}
 * @see {@link DescribeEntityRecognizerCommandInput} for command's `input` shape.
 * @see {@link DescribeEntityRecognizerCommandOutput} for command's `response` shape.
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
export class DescribeEntityRecognizerCommand extends $Command<
  DescribeEntityRecognizerCommandInput,
  DescribeEntityRecognizerCommandOutput,
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
  constructor(readonly input: DescribeEntityRecognizerCommandInput) {
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
  ): Handler<DescribeEntityRecognizerCommandInput, DescribeEntityRecognizerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEntityRecognizerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DescribeEntityRecognizerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeEntityRecognizerResponseFilterSensitiveLog,
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
  private serialize(input: DescribeEntityRecognizerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEntityRecognizerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEntityRecognizerCommandOutput> {
    return de_DescribeEntityRecognizerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
