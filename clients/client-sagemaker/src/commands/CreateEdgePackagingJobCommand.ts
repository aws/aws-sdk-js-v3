// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateEdgePackagingJobRequest } from "../models/models_0";
import {
  deserializeAws_json1_1CreateEdgePackagingJobCommand,
  serializeAws_json1_1CreateEdgePackagingJobCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link CreateEdgePackagingJobCommand}.
 */
export interface CreateEdgePackagingJobCommandInput extends CreateEdgePackagingJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateEdgePackagingJobCommand}.
 */
export interface CreateEdgePackagingJobCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Starts a SageMaker Edge Manager model packaging job. Edge Manager will use the model artifacts from the Amazon Simple Storage Service bucket that you specify. After the model has been packaged, Amazon SageMaker saves the resulting artifacts to an S3 bucket that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateEdgePackagingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateEdgePackagingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = {
 *   EdgePackagingJobName: "STRING_VALUE", // required
 *   CompilationJobName: "STRING_VALUE", // required
 *   ModelName: "STRING_VALUE", // required
 *   ModelVersion: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   OutputConfig: {
 *     S3OutputLocation: "STRING_VALUE", // required
 *     KmsKeyId: "STRING_VALUE",
 *     PresetDeploymentType: "GreengrassV2Component",
 *     PresetDeploymentConfig: "STRING_VALUE",
 *   },
 *   ResourceKey: "STRING_VALUE",
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateEdgePackagingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateEdgePackagingJobCommandInput - {@link CreateEdgePackagingJobCommandInput}
 * @returns {@link CreateEdgePackagingJobCommandOutput}
 * @see {@link CreateEdgePackagingJobCommandInput} for command's `input` shape.
 * @see {@link CreateEdgePackagingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 *
 */
export class CreateEdgePackagingJobCommand extends $Command<
  CreateEdgePackagingJobCommandInput,
  CreateEdgePackagingJobCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: CreateEdgePackagingJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEdgePackagingJobCommandInput, CreateEdgePackagingJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEdgePackagingJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateEdgePackagingJobCommand";
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
  private serialize(input: CreateEdgePackagingJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEdgePackagingJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEdgePackagingJobCommandOutput> {
    return deserializeAws_json1_1CreateEdgePackagingJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
