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

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { CreateModelCustomizationJobRequest, CreateModelCustomizationJobResponse } from "../models/models_0";
import {
  de_CreateModelCustomizationJobCommand,
  se_CreateModelCustomizationJobCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateModelCustomizationJobCommand}.
 */
export interface CreateModelCustomizationJobCommandInput extends CreateModelCustomizationJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateModelCustomizationJobCommand}.
 */
export interface CreateModelCustomizationJobCommandOutput
  extends CreateModelCustomizationJobResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a fine-tuning job to customize a base model.</p>
 *          <p>You specify the base foundation model and the location of the training data.
 *             After the  model-customization job completes successfully, your custom model resource will be ready to use. Training data
 *             contains input and output text for each record in a JSONL format. Optionally, you can specify validation data
 *             in the same format as the training data. Bedrock returns validation loss metrics and output generations
 *             after the job completes.
 *         </p>
 *          <p>
 *             Model-customization jobs are asynchronous and the completion time depends on the base model and the training/validation data size.
 *             To monitor a job, use the <code>GetModelCustomizationJob</code> operation to retrieve the job status.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/custom-models.html">Custom models</a> in the Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, CreateModelCustomizationJobCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, CreateModelCustomizationJobCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // CreateModelCustomizationJobRequest
 *   jobName: "STRING_VALUE", // required
 *   customModelName: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE", // required
 *   clientRequestToken: "STRING_VALUE",
 *   baseModelIdentifier: "STRING_VALUE", // required
 *   customModelKmsKeyId: "STRING_VALUE",
 *   jobTags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   customModelTags: [
 *     {
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   trainingDataConfig: { // TrainingDataConfig
 *     s3Uri: "STRING_VALUE", // required
 *   },
 *   validationDataConfig: { // ValidationDataConfig
 *     validators: [ // Validators // required
 *       { // Validator
 *         s3Uri: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   outputDataConfig: { // OutputDataConfig
 *     s3Uri: "STRING_VALUE", // required
 *   },
 *   hyperParameters: { // ModelCustomizationHyperParameters // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   vpcConfig: { // VpcConfig
 *     subnetIds: [ // SubnetIds // required
 *       "STRING_VALUE",
 *     ],
 *     securityGroupIds: [ // SecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new CreateModelCustomizationJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateModelCustomizationJobResponse
 * //   jobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateModelCustomizationJobCommandInput - {@link CreateModelCustomizationJobCommandInput}
 * @returns {@link CreateModelCustomizationJobCommandOutput}
 * @see {@link CreateModelCustomizationJobCommandInput} for command's `input` shape.
 * @see {@link CreateModelCustomizationJobCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Error occurred because of a conflict while performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The number of requests exceeds the service quota. Resubmit your request later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>The request contains more tags than can be associated with a resource (50 tags per resource).
 *             The maximum number of tags includes both existing tags and those included in your current request. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 */
export class CreateModelCustomizationJobCommand extends $Command<
  CreateModelCustomizationJobCommandInput,
  CreateModelCustomizationJobCommandOutput,
  BedrockClientResolvedConfig
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
  constructor(readonly input: CreateModelCustomizationJobCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BedrockClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateModelCustomizationJobCommandInput, CreateModelCustomizationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateModelCustomizationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockClient";
    const commandName = "CreateModelCustomizationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockControlPlaneService",
        operation: "CreateModelCustomizationJob",
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
  private serialize(input: CreateModelCustomizationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateModelCustomizationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateModelCustomizationJobCommandOutput> {
    return de_CreateModelCustomizationJobCommand(output, context);
  }
}
