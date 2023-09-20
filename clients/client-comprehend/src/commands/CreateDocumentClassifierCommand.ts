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
import { CreateDocumentClassifierRequest, CreateDocumentClassifierResponse } from "../models/models_0";
import { de_CreateDocumentClassifierCommand, se_CreateDocumentClassifierCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDocumentClassifierCommand}.
 */
export interface CreateDocumentClassifierCommandInput extends CreateDocumentClassifierRequest {}
/**
 * @public
 *
 * The output of {@link CreateDocumentClassifierCommand}.
 */
export interface CreateDocumentClassifierCommandOutput extends CreateDocumentClassifierResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new document classifier that you can use to categorize documents. To create a
 *       classifier, you provide a set of training documents that are labeled with the categories that you
 *       want to use. For more information, see
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/training-classifier-model.html">Training classifier models</a>
 *       in the Comprehend Developer Guide.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, CreateDocumentClassifierCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, CreateDocumentClassifierCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // CreateDocumentClassifierRequest
 *   DocumentClassifierName: "STRING_VALUE", // required
 *   VersionName: "STRING_VALUE",
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   InputDataConfig: { // DocumentClassifierInputDataConfig
 *     DataFormat: "COMPREHEND_CSV" || "AUGMENTED_MANIFEST",
 *     S3Uri: "STRING_VALUE",
 *     TestS3Uri: "STRING_VALUE",
 *     LabelDelimiter: "STRING_VALUE",
 *     AugmentedManifests: [ // DocumentClassifierAugmentedManifestsList
 *       { // AugmentedManifestsListItem
 *         S3Uri: "STRING_VALUE", // required
 *         Split: "TRAIN" || "TEST",
 *         AttributeNames: [ // AttributeNamesList // required
 *           "STRING_VALUE",
 *         ],
 *         AnnotationDataS3Uri: "STRING_VALUE",
 *         SourceDocumentsS3Uri: "STRING_VALUE",
 *         DocumentType: "PLAIN_TEXT_DOCUMENT" || "SEMI_STRUCTURED_DOCUMENT",
 *       },
 *     ],
 *     DocumentType: "PLAIN_TEXT_DOCUMENT" || "SEMI_STRUCTURED_DOCUMENT",
 *     Documents: { // DocumentClassifierDocuments
 *       S3Uri: "STRING_VALUE", // required
 *       TestS3Uri: "STRING_VALUE",
 *     },
 *     DocumentReaderConfig: { // DocumentReaderConfig
 *       DocumentReadAction: "TEXTRACT_DETECT_DOCUMENT_TEXT" || "TEXTRACT_ANALYZE_DOCUMENT", // required
 *       DocumentReadMode: "SERVICE_DEFAULT" || "FORCE_DOCUMENT_READ_ACTION",
 *       FeatureTypes: [ // ListOfDocumentReadFeatureTypes
 *         "TABLES" || "FORMS",
 *       ],
 *     },
 *   },
 *   OutputDataConfig: { // DocumentClassifierOutputDataConfig
 *     S3Uri: "STRING_VALUE",
 *     KmsKeyId: "STRING_VALUE",
 *     FlywheelStatsS3Prefix: "STRING_VALUE",
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 *   LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 *   VolumeKmsKeyId: "STRING_VALUE",
 *   VpcConfig: { // VpcConfig
 *     SecurityGroupIds: [ // SecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *     Subnets: [ // Subnets // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Mode: "MULTI_CLASS" || "MULTI_LABEL",
 *   ModelKmsKeyId: "STRING_VALUE",
 *   ModelPolicy: "STRING_VALUE",
 * };
 * const command = new CreateDocumentClassifierCommand(input);
 * const response = await client.send(command);
 * // { // CreateDocumentClassifierResponse
 * //   DocumentClassifierArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDocumentClassifierCommandInput - {@link CreateDocumentClassifierCommandInput}
 * @returns {@link CreateDocumentClassifierCommandOutput}
 * @see {@link CreateDocumentClassifierCommandInput} for command's `input` shape.
 * @see {@link CreateDocumentClassifierCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link KmsKeyValidationException} (client fault)
 *  <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and
 *       re-enter it.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource name is already in use. Use a different name and try your request
 *       again.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The maximum number of resources per account has been exceeded. Review the resources, and
 *       then try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request contains more tags than can be associated with a resource (50 tags per
 *       resource). The maximum number of tags includes both existing tags and those included in your
 *       current request. </p>
 *
 * @throws {@link UnsupportedLanguageException} (client fault)
 *  <p>Amazon Comprehend can't process the language of the input text. For custom entity
 *       recognition APIs, only English, Spanish, French, Italian, German, or Portuguese are accepted.
 *       For a list of supported languages,
 *       <a href="https://docs.aws.amazon.com/comprehend/latest/dg/supported-languages.html">Supported languages</a> in the Comprehend Developer Guide.
 *     </p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 */
export class CreateDocumentClassifierCommand extends $Command<
  CreateDocumentClassifierCommandInput,
  CreateDocumentClassifierCommandOutput,
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
  constructor(readonly input: CreateDocumentClassifierCommandInput) {
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
  ): Handler<CreateDocumentClassifierCommandInput, CreateDocumentClassifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDocumentClassifierCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "CreateDocumentClassifierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Comprehend_20171127",
        operation: "CreateDocumentClassifier",
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
  private serialize(input: CreateDocumentClassifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDocumentClassifierCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDocumentClassifierCommandOutput> {
    return de_CreateDocumentClassifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
