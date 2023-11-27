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

import { CreateBatchInferenceJobRequest, CreateBatchInferenceJobResponse } from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { de_CreateBatchInferenceJobCommand, se_CreateBatchInferenceJobCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateBatchInferenceJobCommand}.
 */
export interface CreateBatchInferenceJobCommandInput extends CreateBatchInferenceJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateBatchInferenceJobCommand}.
 */
export interface CreateBatchInferenceJobCommandOutput extends CreateBatchInferenceJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Generates batch recommendations based on a list of items or users stored in Amazon S3
 *       and exports the recommendations to an Amazon S3 bucket.</p>
 *          <p>To generate batch recommendations, specify the ARN of a solution version and an Amazon S3 URI for the input and output data.
 *       For user personalization, popular items, and personalized ranking solutions, the batch inference job generates a list of
 *       recommended items for each user ID in the input file. For related items solutions, the job generates a list of recommended
 *       items for each item ID in the input file.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/getting-batch-recommendations.html">Creating a batch inference job
 *     </a>.</p>
 *          <p>
 *       If you use the Similar-Items recipe, Amazon Personalize can add descriptive themes to batch recommendations.
 *       To generate themes, set the job's mode to
 *       <code>THEME_GENERATION</code> and specify the name of the field that contains item names in the
 *       input data.</p>
 *          <p>
 *       For more information about generating themes, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/themed-batch-recommendations.html">Batch recommendations with themes from Content Generator
 *       </a>.
 *     </p>
 *          <p>You can't get batch recommendations with the Trending-Now or Next-Best-Action recipes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateBatchInferenceJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateBatchInferenceJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const input = { // CreateBatchInferenceJobRequest
 *   jobName: "STRING_VALUE", // required
 *   solutionVersionArn: "STRING_VALUE", // required
 *   filterArn: "STRING_VALUE",
 *   numResults: Number("int"),
 *   jobInput: { // BatchInferenceJobInput
 *     s3DataSource: { // S3DataConfig
 *       path: "STRING_VALUE", // required
 *       kmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   jobOutput: { // BatchInferenceJobOutput
 *     s3DataDestination: {
 *       path: "STRING_VALUE", // required
 *       kmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   roleArn: "STRING_VALUE", // required
 *   batchInferenceJobConfig: { // BatchInferenceJobConfig
 *     itemExplorationConfig: { // HyperParameters
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   tags: [ // Tags
 *     { // Tag
 *       tagKey: "STRING_VALUE", // required
 *       tagValue: "STRING_VALUE", // required
 *     },
 *   ],
 *   batchInferenceJobMode: "BATCH_INFERENCE" || "THEME_GENERATION",
 *   themeGenerationConfig: { // ThemeGenerationConfig
 *     fieldsForThemeGeneration: { // FieldsForThemeGeneration
 *       itemName: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateBatchInferenceJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateBatchInferenceJobResponse
 * //   batchInferenceJobArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateBatchInferenceJobCommandInput - {@link CreateBatchInferenceJobCommandInput}
 * @returns {@link CreateBatchInferenceJobCommandOutput}
 * @see {@link CreateBatchInferenceJobCommandInput} for command's `input` shape.
 * @see {@link CreateBatchInferenceJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of requests per second has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Could not find the specified resource.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You have exceeded the maximum number of tags you can apply to this resource. </p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 */
export class CreateBatchInferenceJobCommand extends $Command<
  CreateBatchInferenceJobCommandInput,
  CreateBatchInferenceJobCommandOutput,
  PersonalizeClientResolvedConfig
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
  constructor(readonly input: CreateBatchInferenceJobCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBatchInferenceJobCommandInput, CreateBatchInferenceJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateBatchInferenceJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "CreateBatchInferenceJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonPersonalize",
        operation: "CreateBatchInferenceJob",
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
  private serialize(input: CreateBatchInferenceJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateBatchInferenceJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBatchInferenceJobCommandOutput> {
    return de_CreateBatchInferenceJobCommand(output, context);
  }
}
