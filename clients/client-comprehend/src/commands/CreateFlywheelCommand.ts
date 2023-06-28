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
import { CreateFlywheelRequest, CreateFlywheelResponse } from "../models/models_0";
import { de_CreateFlywheelCommand, se_CreateFlywheelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateFlywheelCommand}.
 */
export interface CreateFlywheelCommandInput extends CreateFlywheelRequest {}
/**
 * @public
 *
 * The output of {@link CreateFlywheelCommand}.
 */
export interface CreateFlywheelCommandOutput extends CreateFlywheelResponse, __MetadataBearer {}

/**
 * @public
 * <p>A flywheel is an Amazon Web Services resource that orchestrates the ongoing training of a model for custom classification
 *       or custom entity recognition. You can create a flywheel to start with an existing trained model, or
 *       Comprehend can create and train a new model.</p>
 *          <p>When you create the flywheel, Comprehend creates a data lake in your account. The data lake holds the training
 *       data and test data for all versions of the model.</p>
 *          <p>To use a flywheel with an existing trained model, you specify the active model version. Comprehend copies the model's
 *       training data and test data into the flywheel's data lake.</p>
 *          <p>To use the flywheel with a new model, you need to provide a dataset for training data (and optional test data)
 *       when you create the flywheel.</p>
 *          <p>For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html">
 *       Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, CreateFlywheelCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, CreateFlywheelCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // CreateFlywheelRequest
 *   FlywheelName: "STRING_VALUE", // required
 *   ActiveModelArn: "STRING_VALUE",
 *   DataAccessRoleArn: "STRING_VALUE", // required
 *   TaskConfig: { // TaskConfig
 *     LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 *     DocumentClassificationConfig: { // DocumentClassificationConfig
 *       Mode: "MULTI_CLASS" || "MULTI_LABEL", // required
 *       Labels: [ // LabelsList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     EntityRecognitionConfig: { // EntityRecognitionConfig
 *       EntityTypes: [ // EntityTypesList // required
 *         { // EntityTypesListItem
 *           Type: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   ModelType: "DOCUMENT_CLASSIFIER" || "ENTITY_RECOGNIZER",
 *   DataLakeS3Uri: "STRING_VALUE", // required
 *   DataSecurityConfig: { // DataSecurityConfig
 *     ModelKmsKeyId: "STRING_VALUE",
 *     VolumeKmsKeyId: "STRING_VALUE",
 *     DataLakeKmsKeyId: "STRING_VALUE",
 *     VpcConfig: { // VpcConfig
 *       SecurityGroupIds: [ // SecurityGroupIds // required
 *         "STRING_VALUE",
 *       ],
 *       Subnets: [ // Subnets // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateFlywheelCommand(input);
 * const response = await client.send(command);
 * // { // CreateFlywheelResponse
 * //   FlywheelArn: "STRING_VALUE",
 * //   ActiveModelArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFlywheelCommandInput - {@link CreateFlywheelCommandInput}
 * @returns {@link CreateFlywheelCommandOutput}
 * @see {@link CreateFlywheelCommandInput} for command's `input` shape.
 * @see {@link CreateFlywheelCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The specified resource is not available. Check the resource and try your request
 *       again.</p>
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
export class CreateFlywheelCommand extends $Command<
  CreateFlywheelCommandInput,
  CreateFlywheelCommandOutput,
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
  constructor(readonly input: CreateFlywheelCommandInput) {
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
  ): Handler<CreateFlywheelCommandInput, CreateFlywheelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFlywheelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "CreateFlywheelCommand";
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
  private serialize(input: CreateFlywheelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFlywheelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFlywheelCommandOutput> {
    return de_CreateFlywheelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
