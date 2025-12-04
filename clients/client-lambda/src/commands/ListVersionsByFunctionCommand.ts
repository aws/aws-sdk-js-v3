// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import type { ListVersionsByFunctionRequest, ListVersionsByFunctionResponse } from "../models/models_0";
import { ListVersionsByFunction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVersionsByFunctionCommand}.
 */
export interface ListVersionsByFunctionCommandInput extends ListVersionsByFunctionRequest {}
/**
 * @public
 *
 * The output of {@link ListVersionsByFunctionCommand}.
 */
export interface ListVersionsByFunctionCommandOutput extends ListVersionsByFunctionResponse, __MetadataBearer {}

/**
 * <p>Returns a list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html">versions</a>, with the version-specific configuration of each. Lambda returns up to 50 versions per call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListVersionsByFunctionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListVersionsByFunctionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // ListVersionsByFunctionRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListVersionsByFunctionCommand(input);
 * const response = await client.send(command);
 * // { // ListVersionsByFunctionResponse
 * //   NextMarker: "STRING_VALUE",
 * //   Versions: [ // FunctionList
 * //     { // FunctionConfiguration
 * //       FunctionName: "STRING_VALUE",
 * //       FunctionArn: "STRING_VALUE",
 * //       Runtime: "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "dotnet8" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x" || "python3.10" || "java17" || "ruby3.2" || "ruby3.3" || "ruby3.4" || "python3.11" || "nodejs20.x" || "provided.al2023" || "python3.12" || "java21" || "python3.13" || "nodejs22.x" || "nodejs24.x" || "python3.14" || "java25",
 * //       Role: "STRING_VALUE",
 * //       Handler: "STRING_VALUE",
 * //       CodeSize: Number("long"),
 * //       Description: "STRING_VALUE",
 * //       Timeout: Number("int"),
 * //       MemorySize: Number("int"),
 * //       LastModified: "STRING_VALUE",
 * //       CodeSha256: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //       VpcConfig: { // VpcConfigResponse
 * //         SubnetIds: [ // SubnetIds
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroupIds: [ // SecurityGroupIds
 * //           "STRING_VALUE",
 * //         ],
 * //         VpcId: "STRING_VALUE",
 * //         Ipv6AllowedForDualStack: true || false,
 * //       },
 * //       DeadLetterConfig: { // DeadLetterConfig
 * //         TargetArn: "STRING_VALUE",
 * //       },
 * //       Environment: { // EnvironmentResponse
 * //         Variables: { // EnvironmentVariables
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         Error: { // EnvironmentError
 * //           ErrorCode: "STRING_VALUE",
 * //           Message: "STRING_VALUE",
 * //         },
 * //       },
 * //       KMSKeyArn: "STRING_VALUE",
 * //       TracingConfig: { // TracingConfigResponse
 * //         Mode: "Active" || "PassThrough",
 * //       },
 * //       MasterArn: "STRING_VALUE",
 * //       RevisionId: "STRING_VALUE",
 * //       Layers: [ // LayersReferenceList
 * //         { // Layer
 * //           Arn: "STRING_VALUE",
 * //           CodeSize: Number("long"),
 * //           SigningProfileVersionArn: "STRING_VALUE",
 * //           SigningJobArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       State: "Pending" || "Active" || "Inactive" || "Failed" || "Deactivating" || "Deactivated" || "ActiveNonInvocable" || "Deleting",
 * //       StateReason: "STRING_VALUE",
 * //       StateReasonCode: "Idle" || "Creating" || "Restoring" || "EniLimitExceeded" || "InsufficientRolePermissions" || "InvalidConfiguration" || "InternalError" || "SubnetOutOfIPAddresses" || "InvalidSubnet" || "InvalidSecurityGroup" || "ImageDeleted" || "ImageAccessDenied" || "InvalidImage" || "KMSKeyAccessDenied" || "KMSKeyNotFound" || "InvalidStateKMSKey" || "DisabledKMSKey" || "EFSIOError" || "EFSMountConnectivityError" || "EFSMountFailure" || "EFSMountTimeout" || "InvalidRuntime" || "InvalidZipFileException" || "FunctionError" || "DrainingDurableExecutions" || "VcpuLimitExceeded" || "CapacityProviderScalingLimitExceeded" || "InsufficientCapacity" || "EC2RequestLimitExceeded" || "FunctionError.InitTimeout" || "FunctionError.RuntimeInitError" || "FunctionError.ExtensionInitError" || "FunctionError.InvalidEntryPoint" || "FunctionError.InvalidWorkingDirectory" || "FunctionError.PermissionDenied" || "FunctionError.TooManyExtensions" || "FunctionError.InitResourceExhausted" || "DisallowedByVpcEncryptionControl",
 * //       LastUpdateStatus: "Successful" || "Failed" || "InProgress",
 * //       LastUpdateStatusReason: "STRING_VALUE",
 * //       LastUpdateStatusReasonCode: "EniLimitExceeded" || "InsufficientRolePermissions" || "InvalidConfiguration" || "InternalError" || "SubnetOutOfIPAddresses" || "InvalidSubnet" || "InvalidSecurityGroup" || "ImageDeleted" || "ImageAccessDenied" || "InvalidImage" || "KMSKeyAccessDenied" || "KMSKeyNotFound" || "InvalidStateKMSKey" || "DisabledKMSKey" || "EFSIOError" || "EFSMountConnectivityError" || "EFSMountFailure" || "EFSMountTimeout" || "InvalidRuntime" || "InvalidZipFileException" || "FunctionError" || "VcpuLimitExceeded" || "CapacityProviderScalingLimitExceeded" || "InsufficientCapacity" || "EC2RequestLimitExceeded" || "FunctionError.InitTimeout" || "FunctionError.RuntimeInitError" || "FunctionError.ExtensionInitError" || "FunctionError.InvalidEntryPoint" || "FunctionError.InvalidWorkingDirectory" || "FunctionError.PermissionDenied" || "FunctionError.TooManyExtensions" || "FunctionError.InitResourceExhausted" || "DisallowedByVpcEncryptionControl",
 * //       FileSystemConfigs: [ // FileSystemConfigList
 * //         { // FileSystemConfig
 * //           Arn: "STRING_VALUE", // required
 * //           LocalMountPath: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       PackageType: "Zip" || "Image",
 * //       ImageConfigResponse: { // ImageConfigResponse
 * //         ImageConfig: { // ImageConfig
 * //           EntryPoint: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           Command: [
 * //             "STRING_VALUE",
 * //           ],
 * //           WorkingDirectory: "STRING_VALUE",
 * //         },
 * //         Error: { // ImageConfigError
 * //           ErrorCode: "STRING_VALUE",
 * //           Message: "STRING_VALUE",
 * //         },
 * //       },
 * //       SigningProfileVersionArn: "STRING_VALUE",
 * //       SigningJobArn: "STRING_VALUE",
 * //       Architectures: [ // ArchitecturesList
 * //         "x86_64" || "arm64",
 * //       ],
 * //       EphemeralStorage: { // EphemeralStorage
 * //         Size: Number("int"), // required
 * //       },
 * //       SnapStart: { // SnapStartResponse
 * //         ApplyOn: "PublishedVersions" || "None",
 * //         OptimizationStatus: "On" || "Off",
 * //       },
 * //       RuntimeVersionConfig: { // RuntimeVersionConfig
 * //         RuntimeVersionArn: "STRING_VALUE",
 * //         Error: { // RuntimeVersionError
 * //           ErrorCode: "STRING_VALUE",
 * //           Message: "STRING_VALUE",
 * //         },
 * //       },
 * //       LoggingConfig: { // LoggingConfig
 * //         LogFormat: "JSON" || "Text",
 * //         ApplicationLogLevel: "TRACE" || "DEBUG" || "INFO" || "WARN" || "ERROR" || "FATAL",
 * //         SystemLogLevel: "DEBUG" || "INFO" || "WARN",
 * //         LogGroup: "STRING_VALUE",
 * //       },
 * //       CapacityProviderConfig: { // CapacityProviderConfig
 * //         LambdaManagedInstancesCapacityProviderConfig: { // LambdaManagedInstancesCapacityProviderConfig
 * //           CapacityProviderArn: "STRING_VALUE", // required
 * //           PerExecutionEnvironmentMaxConcurrency: Number("int"),
 * //           ExecutionEnvironmentMemoryGiBPerVCpu: Number("double"),
 * //         },
 * //       },
 * //       ConfigSha256: "STRING_VALUE",
 * //       DurableConfig: { // DurableConfig
 * //         RetentionPeriodInDays: Number("int"),
 * //         ExecutionTimeout: Number("int"),
 * //       },
 * //       TenancyConfig: { // TenancyConfig
 * //         TenantIsolationMode: "PER_TENANT", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVersionsByFunctionCommandInput - {@link ListVersionsByFunctionCommandInput}
 * @returns {@link ListVersionsByFunctionCommandOutput}
 * @see {@link ListVersionsByFunctionCommandInput} for command's `input` shape.
 * @see {@link ListVersionsByFunctionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 *
 * @example To list versions of a function
 * ```javascript
 * // The following example returns a list of versions of a function named my-function
 * const input = {
 *   FunctionName: "my-function"
 * };
 * const command = new ListVersionsByFunctionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Versions: [
 *     {
 *       CodeSha256: "YFgDgEKG3ugvF1+pX64gV6tu9qNuIYNUdgJm8nCxsm4=",
 *       CodeSize: 5797206,
 *       Description: "Process image objects from Amazon S3.",
 *       DurableConfig: {
 *         ExecutionTimeout: 31622400,
 *         RetentionPeriodInDays: 30
 *       },
 *       Environment: {
 *         Variables: {
 *           BUCKET: "my-bucket-1xpuxmplzrlbh",
 *           PREFIX: "inbound"
 *         }
 *       },
 *       FunctionArn: "arn:aws:lambda:us-west-2:123456789012:function:my-function",
 *       FunctionName: "my-function",
 *       Handler: "index.handler",
 *       KMSKeyArn: "arn:aws:kms:us-west-2:123456789012:key/b0844d6c-xmpl-4463-97a4-d49f50839966",
 *       LastModified: "2020-04-10T19:06:32.563+0000",
 *       MemorySize: 256,
 *       RevisionId: "850ca006-2d98-4ff4-86db-8766e9d32fe9",
 *       Role: "arn:aws:iam::123456789012:role/lambda-role",
 *       Runtime: "nodejs12.x",
 *       Timeout: 15,
 *       TracingConfig: {
 *         Mode: "Active"
 *       },
 *       Version: "$LATEST"
 *     },
 *     {
 *       CodeSha256: "YFgDgEKG3ugvF1+pX64gV6tu9qNuIYNUdgJm8nCxsm4=",
 *       CodeSize: 5797206,
 *       Description: "Process image objects from Amazon S3.",
 *       DurableConfig: {
 *         ExecutionTimeout: 31622400,
 *         RetentionPeriodInDays: 30
 *       },
 *       Environment: {
 *         Variables: {
 *           BUCKET: "my-bucket-1xpuxmplzrlbh",
 *           PREFIX: "inbound"
 *         }
 *       },
 *       FunctionArn: "arn:aws:lambda:us-west-2:123456789012:function:my-function",
 *       FunctionName: "my-function",
 *       Handler: "index.handler",
 *       KMSKeyArn: "arn:aws:kms:us-west-2:123456789012:key/b0844d6c-xmpl-4463-97a4-d49f50839966",
 *       LastModified: "2020-04-10T19:06:32.563+0000",
 *       MemorySize: 256,
 *       RevisionId: "b75dcd81-xmpl-48a8-a75a-93ba8b5b9727",
 *       Role: "arn:aws:iam::123456789012:role/lambda-role",
 *       Runtime: "nodejs12.x",
 *       Timeout: 5,
 *       TracingConfig: {
 *         Mode: "Active"
 *       },
 *       Version: "1"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListVersionsByFunctionCommand extends $Command
  .classBuilder<
    ListVersionsByFunctionCommandInput,
    ListVersionsByFunctionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "ListVersionsByFunction", {})
  .n("LambdaClient", "ListVersionsByFunctionCommand")
  .sc(ListVersionsByFunction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVersionsByFunctionRequest;
      output: ListVersionsByFunctionResponse;
    };
    sdk: {
      input: ListVersionsByFunctionCommandInput;
      output: ListVersionsByFunctionCommandOutput;
    };
  };
}
