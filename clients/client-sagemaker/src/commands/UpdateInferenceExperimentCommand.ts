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

import { UpdateInferenceExperimentRequest, UpdateInferenceExperimentResponse } from "../models/models_4";
import { de_UpdateInferenceExperimentCommand, se_UpdateInferenceExperimentCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateInferenceExperimentCommand}.
 */
export interface UpdateInferenceExperimentCommandInput extends UpdateInferenceExperimentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInferenceExperimentCommand}.
 */
export interface UpdateInferenceExperimentCommandOutput extends UpdateInferenceExperimentResponse, __MetadataBearer {}

/**
 * @public
 * <p>
 *            Updates an inference experiment that you created. The status of the inference experiment has to be either
 *            <code>Created</code>, <code>Running</code>. For more information on the status of an inference experiment,
 *            see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeInferenceExperiment.html">DescribeInferenceExperiment</a>.
 *        </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateInferenceExperimentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateInferenceExperimentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateInferenceExperimentRequest
 *   Name: "STRING_VALUE", // required
 *   Schedule: { // InferenceExperimentSchedule
 *     StartTime: new Date("TIMESTAMP"),
 *     EndTime: new Date("TIMESTAMP"),
 *   },
 *   Description: "STRING_VALUE",
 *   ModelVariants: [ // ModelVariantConfigList
 *     { // ModelVariantConfig
 *       ModelName: "STRING_VALUE", // required
 *       VariantName: "STRING_VALUE", // required
 *       InfrastructureConfig: { // ModelInfrastructureConfig
 *         InfrastructureType: "RealTimeInference", // required
 *         RealTimeInferenceConfig: { // RealTimeInferenceConfig
 *           InstanceType: "ml.t2.medium" || "ml.t2.large" || "ml.t2.xlarge" || "ml.t2.2xlarge" || "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.8xlarge" || "ml.m5d.12xlarge" || "ml.m5d.16xlarge" || "ml.m5d.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5d.xlarge" || "ml.c5d.2xlarge" || "ml.c5d.4xlarge" || "ml.c5d.9xlarge" || "ml.c5d.18xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.inf1.xlarge" || "ml.inf1.2xlarge" || "ml.inf1.6xlarge" || "ml.inf1.24xlarge" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge", // required
 *           InstanceCount: Number("int"), // required
 *         },
 *       },
 *     },
 *   ],
 *   DataStorageConfig: { // InferenceExperimentDataStorageConfig
 *     Destination: "STRING_VALUE", // required
 *     KmsKey: "STRING_VALUE",
 *     ContentType: { // CaptureContentTypeHeader
 *       CsvContentTypes: [ // CsvContentTypes
 *         "STRING_VALUE",
 *       ],
 *       JsonContentTypes: [ // JsonContentTypes
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   ShadowModeConfig: { // ShadowModeConfig
 *     SourceModelVariantName: "STRING_VALUE", // required
 *     ShadowModelVariants: [ // ShadowModelVariantConfigList // required
 *       { // ShadowModelVariantConfig
 *         ShadowModelVariantName: "STRING_VALUE", // required
 *         SamplingPercentage: Number("int"), // required
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateInferenceExperimentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInferenceExperimentResponse
 * //   InferenceExperimentArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateInferenceExperimentCommandInput - {@link UpdateInferenceExperimentCommandInput}
 * @returns {@link UpdateInferenceExperimentCommandOutput}
 * @see {@link UpdateInferenceExperimentCommandInput} for command's `input` shape.
 * @see {@link UpdateInferenceExperimentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class UpdateInferenceExperimentCommand extends $Command<
  UpdateInferenceExperimentCommandInput,
  UpdateInferenceExperimentCommandOutput,
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
  constructor(readonly input: UpdateInferenceExperimentCommandInput) {
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
  ): Handler<UpdateInferenceExperimentCommandInput, UpdateInferenceExperimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateInferenceExperimentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateInferenceExperimentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "UpdateInferenceExperiment",
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
  private serialize(input: UpdateInferenceExperimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateInferenceExperimentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateInferenceExperimentCommandOutput> {
    return de_UpdateInferenceExperimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
