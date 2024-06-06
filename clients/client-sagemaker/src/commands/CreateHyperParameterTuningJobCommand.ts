// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateHyperParameterTuningJobRequest, CreateHyperParameterTuningJobResponse } from "../models/models_1";
import {
  de_CreateHyperParameterTuningJobCommand,
  se_CreateHyperParameterTuningJobCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHyperParameterTuningJobCommand}.
 */
export interface CreateHyperParameterTuningJobCommandInput extends CreateHyperParameterTuningJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateHyperParameterTuningJobCommand}.
 */
export interface CreateHyperParameterTuningJobCommandOutput
  extends CreateHyperParameterTuningJobResponse,
    __MetadataBearer {}

/**
 * <p>Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version
 *             of a model by running many training jobs on your dataset using the algorithm you choose
 *             and values for hyperparameters within ranges that you specify. It then chooses the
 *             hyperparameter values that result in a model that performs the best, as measured by an
 *             objective metric that you choose.</p>
 *          <p>A hyperparameter tuning job automatically creates Amazon SageMaker experiments, trials, and
 *             trial components for each training job that it runs. You can view these entities in
 *             Amazon SageMaker Studio. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/experiments-view-compare.html#experiments-view">View
 *                 Experiments, Trials, and Trial Components</a>.</p>
 *          <important>
 *             <p>Do not include any security-sensitive information including account access IDs,
 *                 secrets or tokens in any hyperparameter field. If the use of security-sensitive
 *                 credentials are detected, SageMaker will reject your training job request and return an
 *                 exception error.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateHyperParameterTuningJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateHyperParameterTuningJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateHyperParameterTuningJobRequest
 *   HyperParameterTuningJobName: "STRING_VALUE", // required
 *   HyperParameterTuningJobConfig: { // HyperParameterTuningJobConfig
 *     Strategy: "Bayesian" || "Random" || "Hyperband" || "Grid", // required
 *     StrategyConfig: { // HyperParameterTuningJobStrategyConfig
 *       HyperbandStrategyConfig: { // HyperbandStrategyConfig
 *         MinResource: Number("int"),
 *         MaxResource: Number("int"),
 *       },
 *     },
 *     HyperParameterTuningJobObjective: { // HyperParameterTuningJobObjective
 *       Type: "Maximize" || "Minimize", // required
 *       MetricName: "STRING_VALUE", // required
 *     },
 *     ResourceLimits: { // ResourceLimits
 *       MaxNumberOfTrainingJobs: Number("int"),
 *       MaxParallelTrainingJobs: Number("int"), // required
 *       MaxRuntimeInSeconds: Number("int"),
 *     },
 *     ParameterRanges: { // ParameterRanges
 *       IntegerParameterRanges: [ // IntegerParameterRanges
 *         { // IntegerParameterRange
 *           Name: "STRING_VALUE", // required
 *           MinValue: "STRING_VALUE", // required
 *           MaxValue: "STRING_VALUE", // required
 *           ScalingType: "Auto" || "Linear" || "Logarithmic" || "ReverseLogarithmic",
 *         },
 *       ],
 *       ContinuousParameterRanges: [ // ContinuousParameterRanges
 *         { // ContinuousParameterRange
 *           Name: "STRING_VALUE", // required
 *           MinValue: "STRING_VALUE", // required
 *           MaxValue: "STRING_VALUE", // required
 *           ScalingType: "Auto" || "Linear" || "Logarithmic" || "ReverseLogarithmic",
 *         },
 *       ],
 *       CategoricalParameterRanges: [ // CategoricalParameterRanges
 *         { // CategoricalParameterRange
 *           Name: "STRING_VALUE", // required
 *           Values: [ // ParameterValues // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       AutoParameters: [ // AutoParameters
 *         { // AutoParameter
 *           Name: "STRING_VALUE", // required
 *           ValueHint: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     TrainingJobEarlyStoppingType: "Off" || "Auto",
 *     TuningJobCompletionCriteria: { // TuningJobCompletionCriteria
 *       TargetObjectiveMetricValue: Number("float"),
 *       BestObjectiveNotImproving: { // BestObjectiveNotImproving
 *         MaxNumberOfTrainingJobsNotImproving: Number("int"),
 *       },
 *       ConvergenceDetected: { // ConvergenceDetected
 *         CompleteOnConvergence: "Disabled" || "Enabled",
 *       },
 *     },
 *     RandomSeed: Number("int"),
 *   },
 *   TrainingJobDefinition: { // HyperParameterTrainingJobDefinition
 *     DefinitionName: "STRING_VALUE",
 *     TuningObjective: {
 *       Type: "Maximize" || "Minimize", // required
 *       MetricName: "STRING_VALUE", // required
 *     },
 *     HyperParameterRanges: {
 *       IntegerParameterRanges: [
 *         {
 *           Name: "STRING_VALUE", // required
 *           MinValue: "STRING_VALUE", // required
 *           MaxValue: "STRING_VALUE", // required
 *           ScalingType: "Auto" || "Linear" || "Logarithmic" || "ReverseLogarithmic",
 *         },
 *       ],
 *       ContinuousParameterRanges: [
 *         {
 *           Name: "STRING_VALUE", // required
 *           MinValue: "STRING_VALUE", // required
 *           MaxValue: "STRING_VALUE", // required
 *           ScalingType: "Auto" || "Linear" || "Logarithmic" || "ReverseLogarithmic",
 *         },
 *       ],
 *       CategoricalParameterRanges: [
 *         {
 *           Name: "STRING_VALUE", // required
 *           Values: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       AutoParameters: [
 *         {
 *           Name: "STRING_VALUE", // required
 *           ValueHint: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     StaticHyperParameters: { // HyperParameters
 *       "<keys>": "STRING_VALUE",
 *     },
 *     AlgorithmSpecification: { // HyperParameterAlgorithmSpecification
 *       TrainingImage: "STRING_VALUE",
 *       TrainingInputMode: "Pipe" || "File" || "FastFile", // required
 *       AlgorithmName: "STRING_VALUE",
 *       MetricDefinitions: [ // MetricDefinitionList
 *         { // MetricDefinition
 *           Name: "STRING_VALUE", // required
 *           Regex: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     RoleArn: "STRING_VALUE", // required
 *     InputDataConfig: [ // InputDataConfig
 *       { // Channel
 *         ChannelName: "STRING_VALUE", // required
 *         DataSource: { // DataSource
 *           S3DataSource: { // S3DataSource
 *             S3DataType: "ManifestFile" || "S3Prefix" || "AugmentedManifestFile", // required
 *             S3Uri: "STRING_VALUE", // required
 *             S3DataDistributionType: "FullyReplicated" || "ShardedByS3Key",
 *             AttributeNames: [ // AttributeNames
 *               "STRING_VALUE",
 *             ],
 *             InstanceGroupNames: [ // InstanceGroupNames
 *               "STRING_VALUE",
 *             ],
 *           },
 *           FileSystemDataSource: { // FileSystemDataSource
 *             FileSystemId: "STRING_VALUE", // required
 *             FileSystemAccessMode: "rw" || "ro", // required
 *             FileSystemType: "EFS" || "FSxLustre", // required
 *             DirectoryPath: "STRING_VALUE", // required
 *           },
 *         },
 *         ContentType: "STRING_VALUE",
 *         CompressionType: "None" || "Gzip",
 *         RecordWrapperType: "None" || "RecordIO",
 *         InputMode: "Pipe" || "File" || "FastFile",
 *         ShuffleConfig: { // ShuffleConfig
 *           Seed: Number("long"), // required
 *         },
 *       },
 *     ],
 *     VpcConfig: { // VpcConfig
 *       SecurityGroupIds: [ // VpcSecurityGroupIds // required
 *         "STRING_VALUE",
 *       ],
 *       Subnets: [ // Subnets // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *     OutputDataConfig: { // OutputDataConfig
 *       KmsKeyId: "STRING_VALUE",
 *       S3OutputPath: "STRING_VALUE", // required
 *       CompressionType: "GZIP" || "NONE",
 *     },
 *     ResourceConfig: { // ResourceConfig
 *       InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5n.xlarge" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.8xlarge" || "ml.c6i.4xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge",
 *       InstanceCount: Number("int"),
 *       VolumeSizeInGB: Number("int"), // required
 *       VolumeKmsKeyId: "STRING_VALUE",
 *       KeepAlivePeriodInSeconds: Number("int"),
 *       InstanceGroups: [ // InstanceGroups
 *         { // InstanceGroup
 *           InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5n.xlarge" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.8xlarge" || "ml.c6i.4xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge", // required
 *           InstanceCount: Number("int"), // required
 *           InstanceGroupName: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *     HyperParameterTuningResourceConfig: { // HyperParameterTuningResourceConfig
 *       InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5n.xlarge" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.8xlarge" || "ml.c6i.4xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge",
 *       InstanceCount: Number("int"),
 *       VolumeSizeInGB: Number("int"),
 *       VolumeKmsKeyId: "STRING_VALUE",
 *       AllocationStrategy: "Prioritized",
 *       InstanceConfigs: [ // HyperParameterTuningInstanceConfigs
 *         { // HyperParameterTuningInstanceConfig
 *           InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5n.xlarge" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.8xlarge" || "ml.c6i.4xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge", // required
 *           InstanceCount: Number("int"), // required
 *           VolumeSizeInGB: Number("int"), // required
 *         },
 *       ],
 *     },
 *     StoppingCondition: { // StoppingCondition
 *       MaxRuntimeInSeconds: Number("int"),
 *       MaxWaitTimeInSeconds: Number("int"),
 *       MaxPendingTimeInSeconds: Number("int"),
 *     },
 *     EnableNetworkIsolation: true || false,
 *     EnableInterContainerTrafficEncryption: true || false,
 *     EnableManagedSpotTraining: true || false,
 *     CheckpointConfig: { // CheckpointConfig
 *       S3Uri: "STRING_VALUE", // required
 *       LocalPath: "STRING_VALUE",
 *     },
 *     RetryStrategy: { // RetryStrategy
 *       MaximumRetryAttempts: Number("int"), // required
 *     },
 *     Environment: { // HyperParameterTrainingJobEnvironmentMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   TrainingJobDefinitions: [ // HyperParameterTrainingJobDefinitions
 *     {
 *       DefinitionName: "STRING_VALUE",
 *       TuningObjective: {
 *         Type: "Maximize" || "Minimize", // required
 *         MetricName: "STRING_VALUE", // required
 *       },
 *       HyperParameterRanges: {
 *         IntegerParameterRanges: [
 *           {
 *             Name: "STRING_VALUE", // required
 *             MinValue: "STRING_VALUE", // required
 *             MaxValue: "STRING_VALUE", // required
 *             ScalingType: "Auto" || "Linear" || "Logarithmic" || "ReverseLogarithmic",
 *           },
 *         ],
 *         ContinuousParameterRanges: [
 *           {
 *             Name: "STRING_VALUE", // required
 *             MinValue: "STRING_VALUE", // required
 *             MaxValue: "STRING_VALUE", // required
 *             ScalingType: "Auto" || "Linear" || "Logarithmic" || "ReverseLogarithmic",
 *           },
 *         ],
 *         CategoricalParameterRanges: [
 *           {
 *             Name: "STRING_VALUE", // required
 *             Values: [ // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *         AutoParameters: [
 *           {
 *             Name: "STRING_VALUE", // required
 *             ValueHint: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       StaticHyperParameters: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *       AlgorithmSpecification: {
 *         TrainingImage: "STRING_VALUE",
 *         TrainingInputMode: "Pipe" || "File" || "FastFile", // required
 *         AlgorithmName: "STRING_VALUE",
 *         MetricDefinitions: [
 *           {
 *             Name: "STRING_VALUE", // required
 *             Regex: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       RoleArn: "STRING_VALUE", // required
 *       InputDataConfig: [
 *         {
 *           ChannelName: "STRING_VALUE", // required
 *           DataSource: {
 *             S3DataSource: {
 *               S3DataType: "ManifestFile" || "S3Prefix" || "AugmentedManifestFile", // required
 *               S3Uri: "STRING_VALUE", // required
 *               S3DataDistributionType: "FullyReplicated" || "ShardedByS3Key",
 *               AttributeNames: [
 *                 "STRING_VALUE",
 *               ],
 *               InstanceGroupNames: [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             FileSystemDataSource: {
 *               FileSystemId: "STRING_VALUE", // required
 *               FileSystemAccessMode: "rw" || "ro", // required
 *               FileSystemType: "EFS" || "FSxLustre", // required
 *               DirectoryPath: "STRING_VALUE", // required
 *             },
 *           },
 *           ContentType: "STRING_VALUE",
 *           CompressionType: "None" || "Gzip",
 *           RecordWrapperType: "None" || "RecordIO",
 *           InputMode: "Pipe" || "File" || "FastFile",
 *           ShuffleConfig: {
 *             Seed: Number("long"), // required
 *           },
 *         },
 *       ],
 *       VpcConfig: {
 *         SecurityGroupIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         Subnets: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *       OutputDataConfig: {
 *         KmsKeyId: "STRING_VALUE",
 *         S3OutputPath: "STRING_VALUE", // required
 *         CompressionType: "GZIP" || "NONE",
 *       },
 *       ResourceConfig: {
 *         InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5n.xlarge" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.8xlarge" || "ml.c6i.4xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge",
 *         InstanceCount: Number("int"),
 *         VolumeSizeInGB: Number("int"), // required
 *         VolumeKmsKeyId: "STRING_VALUE",
 *         KeepAlivePeriodInSeconds: Number("int"),
 *         InstanceGroups: [
 *           {
 *             InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5n.xlarge" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.8xlarge" || "ml.c6i.4xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge", // required
 *             InstanceCount: Number("int"), // required
 *             InstanceGroupName: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       HyperParameterTuningResourceConfig: {
 *         InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5n.xlarge" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.8xlarge" || "ml.c6i.4xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge",
 *         InstanceCount: Number("int"),
 *         VolumeSizeInGB: Number("int"),
 *         VolumeKmsKeyId: "STRING_VALUE",
 *         AllocationStrategy: "Prioritized",
 *         InstanceConfigs: [
 *           {
 *             InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.p3dn.24xlarge" || "ml.p4d.24xlarge" || "ml.p4de.24xlarge" || "ml.p5.48xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.c5n.xlarge" || "ml.c5n.2xlarge" || "ml.c5n.4xlarge" || "ml.c5n.9xlarge" || "ml.c5n.18xlarge" || "ml.g5.xlarge" || "ml.g5.2xlarge" || "ml.g5.4xlarge" || "ml.g5.8xlarge" || "ml.g5.16xlarge" || "ml.g5.12xlarge" || "ml.g5.24xlarge" || "ml.g5.48xlarge" || "ml.trn1.2xlarge" || "ml.trn1.32xlarge" || "ml.trn1n.32xlarge" || "ml.m6i.large" || "ml.m6i.xlarge" || "ml.m6i.2xlarge" || "ml.m6i.4xlarge" || "ml.m6i.8xlarge" || "ml.m6i.12xlarge" || "ml.m6i.16xlarge" || "ml.m6i.24xlarge" || "ml.m6i.32xlarge" || "ml.c6i.xlarge" || "ml.c6i.2xlarge" || "ml.c6i.8xlarge" || "ml.c6i.4xlarge" || "ml.c6i.12xlarge" || "ml.c6i.16xlarge" || "ml.c6i.24xlarge" || "ml.c6i.32xlarge", // required
 *             InstanceCount: Number("int"), // required
 *             VolumeSizeInGB: Number("int"), // required
 *           },
 *         ],
 *       },
 *       StoppingCondition: {
 *         MaxRuntimeInSeconds: Number("int"),
 *         MaxWaitTimeInSeconds: Number("int"),
 *         MaxPendingTimeInSeconds: Number("int"),
 *       },
 *       EnableNetworkIsolation: true || false,
 *       EnableInterContainerTrafficEncryption: true || false,
 *       EnableManagedSpotTraining: true || false,
 *       CheckpointConfig: {
 *         S3Uri: "STRING_VALUE", // required
 *         LocalPath: "STRING_VALUE",
 *       },
 *       RetryStrategy: {
 *         MaximumRetryAttempts: Number("int"), // required
 *       },
 *       Environment: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   WarmStartConfig: { // HyperParameterTuningJobWarmStartConfig
 *     ParentHyperParameterTuningJobs: [ // ParentHyperParameterTuningJobs // required
 *       { // ParentHyperParameterTuningJob
 *         HyperParameterTuningJobName: "STRING_VALUE",
 *       },
 *     ],
 *     WarmStartType: "IdenticalDataAndAlgorithm" || "TransferLearning", // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Autotune: { // Autotune
 *     Mode: "Enabled", // required
 *   },
 * };
 * const command = new CreateHyperParameterTuningJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateHyperParameterTuningJobResponse
 * //   HyperParameterTuningJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateHyperParameterTuningJobCommandInput - {@link CreateHyperParameterTuningJobCommandInput}
 * @returns {@link CreateHyperParameterTuningJobCommandOutput}
 * @see {@link CreateHyperParameterTuningJobCommandInput} for command's `input` shape.
 * @see {@link CreateHyperParameterTuningJobCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateHyperParameterTuningJobCommand extends $Command
  .classBuilder<
    CreateHyperParameterTuningJobCommandInput,
    CreateHyperParameterTuningJobCommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "CreateHyperParameterTuningJob", {})
  .n("SageMakerClient", "CreateHyperParameterTuningJobCommand")
  .f(void 0, void 0)
  .ser(se_CreateHyperParameterTuningJobCommand)
  .de(de_CreateHyperParameterTuningJobCommand)
  .build() {}
