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

import { CreateModelPackageInput, CreateModelPackageOutput } from "../models/models_1";
import {
  deserializeAws_json1_1CreateModelPackageCommand,
  serializeAws_json1_1CreateModelPackageCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link CreateModelPackageCommand}.
 */
export interface CreateModelPackageCommandInput extends CreateModelPackageInput {}
/**
 * @public
 *
 * The output of {@link CreateModelPackageCommand}.
 */
export interface CreateModelPackageCommandOutput extends CreateModelPackageOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a model package that you can use to create SageMaker models or list on Amazon Web Services
 *             Marketplace, or a versioned model that is part of a model group. Buyers can subscribe to
 *             model packages listed on Amazon Web Services Marketplace to create models in SageMaker.</p>
 *          <p>To create a model package by specifying a Docker container that contains your
 *             inference code and the Amazon S3 location of your model artifacts, provide values for
 *             <code>InferenceSpecification</code>. To create a model from an algorithm resource
 *             that you created or subscribed to in Amazon Web Services Marketplace, provide a value for
 *             <code>SourceAlgorithmSpecification</code>.</p>
 *          <note>
 *             <p>There are two types of model packages:</p>
 *             <ul>
 *                <li>
 *                   <p>Versioned - a model that is part of a model group in the model
 *                         registry.</p>
 *                </li>
 *                <li>
 *                   <p>Unversioned - a model package that is not part of a model group.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelPackageCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelPackageCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = {
 *   ModelPackageName: "STRING_VALUE",
 *   ModelPackageGroupName: "STRING_VALUE",
 *   ModelPackageDescription: "STRING_VALUE",
 *   InferenceSpecification: {
 *     Containers: [ // required
 *       {
 *         ContainerHostname: "STRING_VALUE",
 *         Image: "STRING_VALUE", // required
 *         ImageDigest: "STRING_VALUE",
 *         ModelDataUrl: "STRING_VALUE",
 *         ProductId: "STRING_VALUE",
 *         Environment: {
 *           "<keys>": "STRING_VALUE",
 *         },
 *         ModelInput: {
 *           DataInputConfig: "STRING_VALUE", // required
 *         },
 *         Framework: "STRING_VALUE",
 *         FrameworkVersion: "STRING_VALUE",
 *         NearestModelName: "STRING_VALUE",
 *       },
 *     ],
 *     SupportedTransformInstanceTypes: [
 *       "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge",
 *     ],
 *     SupportedRealtimeInferenceInstanceTypes: [
 *       "ml.t2.medium" || "ml.t2.large" || "ml.t2.xlarge" || "ml.t2.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.12xlarge" || "ml.m5d.24xlarge" || "ml.c4.large" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5d.large" || "ml.c5d.xlarge" || "ml.c5d.2xlarge" || "ml.c5d.4xlarge" || "ml.c5d.9xlarge" || "ml.c5d.18xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.12xlarge" || "ml.r5.24xlarge" || "ml.r5d.large" || "ml.r5d.xlarge" || "ml.r5d.2xlarge" || "ml.r5d.4xlarge" || "ml.r5d.12xlarge" || "ml.r5d.24xlarge" || "ml.inf1.xlarge" || "ml.inf1.2xlarge" || "ml.inf1.6xlarge" || "ml.inf1.24xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.p4d.24xlarge" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m6gd.large" || "ml.m6gd.xlarge" || "ml.m6gd.2xlarge" || "ml.m6gd.4xlarge" || "ml.m6gd.8xlarge" || "ml.m6gd.12xlarge" || "ml.m6gd.16xlarge" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c6gd.large" || "ml.c6gd.xlarge" || "ml.c6gd.2xlarge" || "ml.c6gd.4xlarge" || "ml.c6gd.8xlarge" || "ml.c6gd.12xlarge" || "ml.c6gd.16xlarge" || "ml.c6gn.large" || "ml.c6gn.xlarge" || "ml.c6gn.2xlarge" || "ml.c6gn.4xlarge" || "ml.c6gn.8xlarge" || "ml.c6gn.12xlarge" || "ml.c6gn.16xlarge" || "ml.r6g.large" || "ml.r6g.xlarge" || "ml.r6g.2xlarge" || "ml.r6g.4xlarge" || "ml.r6g.8xlarge" || "ml.r6g.12xlarge" || "ml.r6g.16xlarge" || "ml.r6gd.large" || "ml.r6gd.xlarge" || "ml.r6gd.2xlarge" || "ml.r6gd.4xlarge" || "ml.r6gd.8xlarge" || "ml.r6gd.12xlarge" || "ml.r6gd.16xlarge" || "ml.p4de.24xlarge",
 *     ],
 *     SupportedContentTypes: [ // required
 *       "STRING_VALUE",
 *     ],
 *     SupportedResponseMIMETypes: [ // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ValidationSpecification: {
 *     ValidationRole: "STRING_VALUE", // required
 *     ValidationProfiles: [ // required
 *       {
 *         ProfileName: "STRING_VALUE", // required
 *         TransformJobDefinition: {
 *           MaxConcurrentTransforms: Number("int"),
 *           MaxPayloadInMB: Number("int"),
 *           BatchStrategy: "MultiRecord" || "SingleRecord",
 *           Environment: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           TransformInput: {
 *             DataSource: {
 *               S3DataSource: {
 *                 S3DataType: "ManifestFile" || "S3Prefix" || "AugmentedManifestFile", // required
 *                 S3Uri: "STRING_VALUE", // required
 *               },
 *             },
 *             ContentType: "STRING_VALUE",
 *             CompressionType: "None" || "Gzip",
 *             SplitType: "None" || "Line" || "RecordIO" || "TFRecord",
 *           },
 *           TransformOutput: {
 *             S3OutputPath: "STRING_VALUE", // required
 *             Accept: "STRING_VALUE",
 *             AssembleWith: "None" || "Line",
 *             KmsKeyId: "STRING_VALUE",
 *           },
 *           TransformResources: {
 *             InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge", // required
 *             InstanceCount: Number("int"), // required
 *             VolumeKmsKeyId: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     ],
 *   },
 *   SourceAlgorithmSpecification: {
 *     SourceAlgorithms: [ // required
 *       {
 *         ModelDataUrl: "STRING_VALUE",
 *         AlgorithmName: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   CertifyForMarketplace: true || false,
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ModelApprovalStatus: "Approved" || "Rejected" || "PendingManualApproval",
 *   MetadataProperties: {
 *     CommitId: "STRING_VALUE",
 *     Repository: "STRING_VALUE",
 *     GeneratedBy: "STRING_VALUE",
 *     ProjectId: "STRING_VALUE",
 *   },
 *   ModelMetrics: {
 *     ModelQuality: {
 *       Statistics: {
 *         ContentType: "STRING_VALUE", // required
 *         ContentDigest: "STRING_VALUE",
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *       Constraints: {
 *         ContentType: "STRING_VALUE", // required
 *         ContentDigest: "STRING_VALUE",
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *     },
 *     ModelDataQuality: {
 *       Statistics: {
 *         ContentType: "STRING_VALUE", // required
 *         ContentDigest: "STRING_VALUE",
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *       Constraints: {
 *         ContentType: "STRING_VALUE", // required
 *         ContentDigest: "STRING_VALUE",
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *     },
 *     Bias: {
 *       Report: {
 *         ContentType: "STRING_VALUE", // required
 *         ContentDigest: "STRING_VALUE",
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *       PreTrainingReport: {
 *         ContentType: "STRING_VALUE", // required
 *         ContentDigest: "STRING_VALUE",
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *       PostTrainingReport: {
 *         ContentType: "STRING_VALUE", // required
 *         ContentDigest: "STRING_VALUE",
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *     },
 *     Explainability: {
 *       Report: {
 *         ContentType: "STRING_VALUE", // required
 *         ContentDigest: "STRING_VALUE",
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   ClientToken: "STRING_VALUE",
 *   CustomerMetadataProperties: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   DriftCheckBaselines: {
 *     Bias: {
 *       ConfigFile: {
 *         ContentType: "STRING_VALUE",
 *         ContentDigest: "STRING_VALUE",
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *       PreTrainingConstraints: {
 *         ContentType: "STRING_VALUE", // required
 *         ContentDigest: "STRING_VALUE",
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *       PostTrainingConstraints: {
 *         ContentType: "STRING_VALUE", // required
 *         ContentDigest: "STRING_VALUE",
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *     },
 *     Explainability: {
 *       Constraints: {
 *         ContentType: "STRING_VALUE", // required
 *         ContentDigest: "STRING_VALUE",
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *       ConfigFile: {
 *         ContentType: "STRING_VALUE",
 *         ContentDigest: "STRING_VALUE",
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *     },
 *     ModelQuality: {
 *       Statistics: {
 *         ContentType: "STRING_VALUE", // required
 *         ContentDigest: "STRING_VALUE",
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *       Constraints: {
 *         ContentType: "STRING_VALUE", // required
 *         ContentDigest: "STRING_VALUE",
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *     },
 *     ModelDataQuality: {
 *       Statistics: {
 *         ContentType: "STRING_VALUE", // required
 *         ContentDigest: "STRING_VALUE",
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *       Constraints: {
 *         ContentType: "STRING_VALUE", // required
 *         ContentDigest: "STRING_VALUE",
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *     },
 *   },
 *   Domain: "STRING_VALUE",
 *   Task: "STRING_VALUE",
 *   SamplePayloadUrl: "STRING_VALUE",
 *   AdditionalInferenceSpecifications: [
 *     {
 *       Name: "STRING_VALUE", // required
 *       Description: "STRING_VALUE",
 *       Containers: [ // required
 *         {
 *           ContainerHostname: "STRING_VALUE",
 *           Image: "STRING_VALUE", // required
 *           ImageDigest: "STRING_VALUE",
 *           ModelDataUrl: "STRING_VALUE",
 *           ProductId: "STRING_VALUE",
 *           Environment: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *           ModelInput: {
 *             DataInputConfig: "STRING_VALUE", // required
 *           },
 *           Framework: "STRING_VALUE",
 *           FrameworkVersion: "STRING_VALUE",
 *           NearestModelName: "STRING_VALUE",
 *         },
 *       ],
 *       SupportedTransformInstanceTypes: [
 *         "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge",
 *       ],
 *       SupportedRealtimeInferenceInstanceTypes: [
 *         "ml.t2.medium" || "ml.t2.large" || "ml.t2.xlarge" || "ml.t2.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.m5d.large" || "ml.m5d.xlarge" || "ml.m5d.2xlarge" || "ml.m5d.4xlarge" || "ml.m5d.12xlarge" || "ml.m5d.24xlarge" || "ml.c4.large" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.large" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5d.large" || "ml.c5d.xlarge" || "ml.c5d.2xlarge" || "ml.c5d.4xlarge" || "ml.c5d.9xlarge" || "ml.c5d.18xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.12xlarge" || "ml.r5.24xlarge" || "ml.r5d.large" || "ml.r5d.xlarge" || "ml.r5d.2xlarge" || "ml.r5d.4xlarge" || "ml.r5d.12xlarge" || "ml.r5d.24xlarge" || "ml.inf1.xlarge" || "ml.inf1.2xlarge" || "ml.inf1.6xlarge" || "ml.inf1.24xlarge" || "ml.c6i.large" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.4xlarge" || "ml.c6i.8xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.12xlarge" || "ml.g5.16xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.p4d.24xlarge" || "ml.c7g.large" || "ml.c7g.xlarge" || "ml.c7g.2xlarge" || "ml.c7g.4xlarge" || "ml.c7g.8xlarge" || "ml.c7g.12xlarge" || "ml.c7g.16xlarge" || "ml.m6g.large" || "ml.m6g.xlarge" || "ml.m6g.2xlarge" || "ml.m6g.4xlarge" || "ml.m6g.8xlarge" || "ml.m6g.12xlarge" || "ml.m6g.16xlarge" || "ml.m6gd.large" || "ml.m6gd.xlarge" || "ml.m6gd.2xlarge" || "ml.m6gd.4xlarge" || "ml.m6gd.8xlarge" || "ml.m6gd.12xlarge" || "ml.m6gd.16xlarge" || "ml.c6g.large" || "ml.c6g.xlarge" || "ml.c6g.2xlarge" || "ml.c6g.4xlarge" || "ml.c6g.8xlarge" || "ml.c6g.12xlarge" || "ml.c6g.16xlarge" || "ml.c6gd.large" || "ml.c6gd.xlarge" || "ml.c6gd.2xlarge" || "ml.c6gd.4xlarge" || "ml.c6gd.8xlarge" || "ml.c6gd.12xlarge" || "ml.c6gd.16xlarge" || "ml.c6gn.large" || "ml.c6gn.xlarge" || "ml.c6gn.2xlarge" || "ml.c6gn.4xlarge" || "ml.c6gn.8xlarge" || "ml.c6gn.12xlarge" || "ml.c6gn.16xlarge" || "ml.r6g.large" || "ml.r6g.xlarge" || "ml.r6g.2xlarge" || "ml.r6g.4xlarge" || "ml.r6g.8xlarge" || "ml.r6g.12xlarge" || "ml.r6g.16xlarge" || "ml.r6gd.large" || "ml.r6gd.xlarge" || "ml.r6gd.2xlarge" || "ml.r6gd.4xlarge" || "ml.r6gd.8xlarge" || "ml.r6gd.12xlarge" || "ml.r6gd.16xlarge" || "ml.p4de.24xlarge",
 *       ],
 *       SupportedContentTypes: [
 *         "STRING_VALUE",
 *       ],
 *       SupportedResponseMIMETypes: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateModelPackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateModelPackageCommandInput - {@link CreateModelPackageCommandInput}
 * @returns {@link CreateModelPackageCommandOutput}
 * @see {@link CreateModelPackageCommandInput} for command's `input` shape.
 * @see {@link CreateModelPackageCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 *
 */
export class CreateModelPackageCommand extends $Command<
  CreateModelPackageCommandInput,
  CreateModelPackageCommandOutput,
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
  constructor(readonly input: CreateModelPackageCommandInput) {
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
  ): Handler<CreateModelPackageCommandInput, CreateModelPackageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateModelPackageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateModelPackageCommand";
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
  private serialize(input: CreateModelPackageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateModelPackageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateModelPackageCommandOutput> {
    return deserializeAws_json1_1CreateModelPackageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
