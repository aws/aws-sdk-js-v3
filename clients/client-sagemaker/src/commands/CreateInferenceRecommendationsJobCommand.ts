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

import {
  CreateInferenceRecommendationsJobRequest,
  CreateInferenceRecommendationsJobResponse,
} from "../models/models_1";
import {
  de_CreateInferenceRecommendationsJobCommand,
  se_CreateInferenceRecommendationsJobCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateInferenceRecommendationsJobCommand}.
 */
export interface CreateInferenceRecommendationsJobCommandInput extends CreateInferenceRecommendationsJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateInferenceRecommendationsJobCommand}.
 */
export interface CreateInferenceRecommendationsJobCommandOutput
  extends CreateInferenceRecommendationsJobResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Starts a recommendation job. You can create either an instance
 *           recommendation or load test job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateInferenceRecommendationsJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateInferenceRecommendationsJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateInferenceRecommendationsJobRequest
 *   JobName: "STRING_VALUE", // required
 *   JobType: "Default" || "Advanced", // required
 *   RoleArn: "STRING_VALUE", // required
 *   InputConfig: { // RecommendationJobInputConfig
 *     ModelPackageVersionArn: "STRING_VALUE",
 *     JobDurationInSeconds: Number("int"),
 *     TrafficPattern: { // TrafficPattern
 *       TrafficType: "PHASES" || "STAIRS",
 *       Phases: [ // Phases
 *         { // Phase
 *           InitialNumberOfUsers: Number("int"),
 *           SpawnRate: Number("int"),
 *           DurationInSeconds: Number("int"),
 *         },
 *       ],
 *       Stairs: { // Stairs
 *         DurationInSeconds: Number("int"),
 *         NumberOfSteps: Number("int"),
 *         UsersPerStep: Number("int"),
 *       },
 *     },
 *     ResourceLimit: { // RecommendationJobResourceLimit
 *       MaxNumberOfTests: Number("int"),
 *       MaxParallelOfTests: Number("int"),
 *     },
 *     EndpointConfigurations: [ // EndpointInputConfigurations
 *       { // EndpointInputConfiguration
 *         InstanceType: "ml.t2.medium" || "ml.t2.large" || "ml.t2.xlarge" || "ml.t2.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.12xlarge" || "ml.m5d.24xlarge" || "ml.c4.large" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5d.large" || "ml.c5d.xlarge" || "ml.c5d.2xlarge" || "ml.c5d.4xlarge" || "ml.c5d.9xlarge" || "ml.c5d.18xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.12xlarge" || "ml.r5.24xlarge" || "ml.r5d.large" || "ml.r5d.xlarge" || "ml.r5d.2xlarge" || "ml.r5d.4xlarge" || "ml.r5d.12xlarge" || "ml.r5d.24xlarge" || "ml.inf1.xlarge" || "ml.inf1.2xlarge" || "ml.inf1.6xlarge" || "ml.inf1.24xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.p4d.24xlarge" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m6gd.large" || "ml.m6gd.xlarge" || "ml.m6gd.2xlarge" || "ml.m6gd.4xlarge" || "ml.m6gd.8xlarge" || "ml.m6gd.12xlarge" || "ml.m6gd.16xlarge" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c6gd.large" || "ml.c6gd.xlarge" || "ml.c6gd.2xlarge" || "ml.c6gd.4xlarge" || "ml.c6gd.8xlarge" || "ml.c6gd.12xlarge" || "ml.c6gd.16xlarge" || "ml.c6gn.large" || "ml.c6gn.xlarge" || "ml.c6gn.2xlarge" || "ml.c6gn.4xlarge" || "ml.c6gn.8xlarge" || "ml.c6gn.12xlarge" || "ml.c6gn.16xlarge" || "ml.r6g.large" || "ml.r6g.xlarge" || "ml.r6g.2xlarge" || "ml.r6g.4xlarge" || "ml.r6g.8xlarge" || "ml.r6g.12xlarge" || "ml.r6g.16xlarge" || "ml.r6gd.large" || "ml.r6gd.xlarge" || "ml.r6gd.2xlarge" || "ml.r6gd.4xlarge" || "ml.r6gd.8xlarge" || "ml.r6gd.12xlarge" || "ml.r6gd.16xlarge" || "ml.p4de.24xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.inf2.xlarge" || "ml.inf2.8xlarge" || "ml.inf2.24xlarge" || "ml.inf2.48xlarge",
 *         InferenceSpecificationName: "STRING_VALUE",
 *         EnvironmentParameterRanges: { // EnvironmentParameterRanges
 *           CategoricalParameterRanges: [ // CategoricalParameters
 *             { // CategoricalParameter
 *               Name: "STRING_VALUE", // required
 *               Value: [ // CategoricalParameterRangeValues // required
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           ],
 *         },
 *         ServerlessConfig: { // ProductionVariantServerlessConfig
 *           MemorySizeInMB: Number("int"), // required
 *           MaxConcurrency: Number("int"), // required
 *           ProvisionedConcurrency: Number("int"),
 *         },
 *       },
 *     ],
 *     VolumeKmsKeyId: "STRING_VALUE",
 *     ContainerConfig: { // RecommendationJobContainerConfig
 *       Domain: "STRING_VALUE",
 *       Task: "STRING_VALUE",
 *       Framework: "STRING_VALUE",
 *       FrameworkVersion: "STRING_VALUE",
 *       PayloadConfig: { // RecommendationJobPayloadConfig
 *         SamplePayloadUrl: "STRING_VALUE",
 *         SupportedContentTypes: [ // RecommendationJobSupportedContentTypes
 *           "STRING_VALUE",
 *         ],
 *       },
 *       NearestModelName: "STRING_VALUE",
 *       SupportedInstanceTypes: [ // RecommendationJobSupportedInstanceTypes
 *         "STRING_VALUE",
 *       ],
 *       DataInputConfig: "STRING_VALUE",
 *       SupportedEndpointType: "RealTime" || "Serverless",
 *       SupportedResponseMIMETypes: [ // RecommendationJobSupportedResponseMIMETypes
 *         "STRING_VALUE",
 *       ],
 *     },
 *     Endpoints: [ // Endpoints
 *       { // EndpointInfo
 *         EndpointName: "STRING_VALUE", // required
 *       },
 *     ],
 *     VpcConfig: { // RecommendationJobVpcConfig
 *       SecurityGroupIds: [ // RecommendationJobVpcSecurityGroupIds // required
 *         "STRING_VALUE",
 *       ],
 *       Subnets: [ // RecommendationJobVpcSubnets // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     ModelName: "STRING_VALUE",
 *   },
 *   JobDescription: "STRING_VALUE",
 *   StoppingConditions: { // RecommendationJobStoppingConditions
 *     MaxInvocations: Number("int"),
 *     ModelLatencyThresholds: [ // ModelLatencyThresholds
 *       { // ModelLatencyThreshold
 *         Percentile: "STRING_VALUE",
 *         ValueInMilliseconds: Number("int"),
 *       },
 *     ],
 *     FlatInvocations: "Continue" || "Stop",
 *   },
 *   OutputConfig: { // RecommendationJobOutputConfig
 *     KmsKeyId: "STRING_VALUE",
 *     CompiledOutputConfig: { // RecommendationJobCompiledOutputConfig
 *       S3OutputUri: "STRING_VALUE",
 *     },
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateInferenceRecommendationsJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateInferenceRecommendationsJobResponse
 * //   JobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateInferenceRecommendationsJobCommandInput - {@link CreateInferenceRecommendationsJobCommandInput}
 * @returns {@link CreateInferenceRecommendationsJobCommandOutput}
 * @see {@link CreateInferenceRecommendationsJobCommandInput} for command's `input` shape.
 * @see {@link CreateInferenceRecommendationsJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreateInferenceRecommendationsJobCommand extends $Command<
  CreateInferenceRecommendationsJobCommandInput,
  CreateInferenceRecommendationsJobCommandOutput,
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
  constructor(readonly input: CreateInferenceRecommendationsJobCommandInput) {
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
  ): Handler<CreateInferenceRecommendationsJobCommandInput, CreateInferenceRecommendationsJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateInferenceRecommendationsJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateInferenceRecommendationsJobCommand";
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
  private serialize(
    input: CreateInferenceRecommendationsJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateInferenceRecommendationsJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateInferenceRecommendationsJobCommandOutput> {
    return de_CreateInferenceRecommendationsJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
