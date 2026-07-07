// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { FunctionConfiguration, UpdateFunctionCodeRequest } from "../models/models_0";
import { UpdateFunctionCode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFunctionCodeCommand}.
 */
export interface UpdateFunctionCodeCommandInput extends UpdateFunctionCodeRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFunctionCodeCommand}.
 */
export interface UpdateFunctionCodeCommandOutput extends FunctionConfiguration, __MetadataBearer {}

/**
 * <p>Updates a Lambda function's code. If code signing is enabled for the function, the code package must be signed by a trusted publisher. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-codesigning.html">Configuring code signing for Lambda</a>.</p> <p>If the function's package type is <code>Image</code>, then you must specify the code package in <code>ImageUri</code> as the URI of a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html">container image</a> in the Amazon ECR registry.</p> <p>If the function's package type is <code>Zip</code>, then you must specify the deployment package as a <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html#gettingstarted-package-zip">.zip file archive</a>. Enter the Amazon S3 bucket and key of the code .zip file location. You can also provide the function code inline using the <code>ZipFile</code> field.</p> <p>The code in the deployment package must be compatible with the target instruction set architecture of the function (<code>x86-64</code> or <code>arm64</code>).</p> <p>The function's code is locked when you publish a version. You can't modify the code of a published version, only the unpublished version.</p> <note> <p>For a function defined as a container image, Lambda resolves the image tag to an image digest. In Amazon ECR, if you update the image tag to a new image, Lambda does not automatically update the function.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateFunctionCodeCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateFunctionCodeCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // UpdateFunctionCodeRequest
 *   FunctionName: "STRING_VALUE", // required
 *   ZipFile: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   S3Bucket: "STRING_VALUE",
 *   S3Key: "STRING_VALUE",
 *   S3ObjectVersion: "STRING_VALUE",
 *   S3ObjectStorageMode: "COPY" || "REFERENCE",
 *   ImageUri: "STRING_VALUE",
 *   Architectures: [ // ArchitecturesList
 *     "x86_64" || "arm64",
 *   ],
 *   Publish: true || false,
 *   PublishTo: "LATEST_PUBLISHED",
 *   DryRun: true || false,
 *   RevisionId: "STRING_VALUE",
 *   SourceKMSKeyArn: "STRING_VALUE",
 * };
 * const command = new UpdateFunctionCodeCommand(input);
 * const response = await client.send(command);
 * // { // FunctionConfiguration
 * //   FunctionName: "STRING_VALUE",
 * //   FunctionArn: "STRING_VALUE",
 * //   Runtime: "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "nodejs18.x" || "nodejs20.x" || "nodejs22.x" || "nodejs24.x" || "java8" || "java8.al2" || "java11" || "java17" || "java21" || "java25" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "python3.10" || "python3.11" || "python3.12" || "python3.13" || "python3.14" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "dotnet8" || "dotnet10" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "ruby3.2" || "ruby3.3" || "ruby3.4" || "ruby4.0" || "provided" || "provided.al2" || "provided.al2023",
 * //   Role: "STRING_VALUE",
 * //   Handler: "STRING_VALUE",
 * //   CodeSize: Number("long"),
 * //   Description: "STRING_VALUE",
 * //   Timeout: Number("int"),
 * //   MemorySize: Number("int"),
 * //   LastModified: "STRING_VALUE",
 * //   CodeSha256: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * //   VpcConfig: { // VpcConfigResponse
 * //     SubnetIds: [ // SubnetIds
 * //       "STRING_VALUE",
 * //     ],
 * //     SecurityGroupIds: [ // SecurityGroupIds
 * //       "STRING_VALUE",
 * //     ],
 * //     VpcId: "STRING_VALUE",
 * //     Ipv6AllowedForDualStack: true || false,
 * //   },
 * //   DeadLetterConfig: { // DeadLetterConfig
 * //     TargetArn: "STRING_VALUE",
 * //   },
 * //   Environment: { // EnvironmentResponse
 * //     Variables: { // EnvironmentVariables
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Error: { // EnvironmentError
 * //       ErrorCode: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * //   KMSKeyArn: "STRING_VALUE",
 * //   TracingConfig: { // TracingConfigResponse
 * //     Mode: "Active" || "PassThrough",
 * //   },
 * //   MasterArn: "STRING_VALUE",
 * //   RevisionId: "STRING_VALUE",
 * //   Layers: [ // LayersReferenceList
 * //     { // Layer
 * //       Arn: "STRING_VALUE",
 * //       CodeSize: Number("long"),
 * //       SigningProfileVersionArn: "STRING_VALUE",
 * //       SigningJobArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   State: "Pending" || "Active" || "Inactive" || "Failed" || "Deactivating" || "Deactivated" || "ActiveNonInvocable" || "Deleting",
 * //   StateReason: "STRING_VALUE",
 * //   StateReasonCode: "Idle" || "Creating" || "Restoring" || "EniLimitExceeded" || "InsufficientRolePermissions" || "InvalidConfiguration" || "InternalError" || "SubnetOutOfIPAddresses" || "InvalidSubnet" || "InvalidSecurityGroup" || "ImageDeleted" || "ImageAccessDenied" || "InvalidImage" || "KMSKeyAccessDenied" || "KMSKeyNotFound" || "InvalidStateKMSKey" || "DisabledKMSKey" || "EFSIOError" || "EFSMountConnectivityError" || "EFSMountFailure" || "EFSMountTimeout" || "InvalidRuntime" || "InvalidZipFileException" || "FunctionError" || "ServiceQuotaExceededException" || "VcpuLimitExceeded" || "CapacityProviderScalingLimitExceeded" || "InsufficientCapacity" || "EC2RequestLimitExceeded" || "FunctionError.InitTimeout" || "FunctionError.RuntimeInitError" || "FunctionError.ExtensionInitError" || "FunctionError.InvalidEntryPoint" || "FunctionError.InvalidWorkingDirectory" || "FunctionError.PermissionDenied" || "FunctionError.TooManyExtensions" || "FunctionError.InitResourceExhausted" || "DisallowedByVpcEncryptionControl" || "DrainingDurableExecutions",
 * //   LastUpdateStatus: "Successful" || "Failed" || "InProgress",
 * //   LastUpdateStatusReason: "STRING_VALUE",
 * //   LastUpdateStatusReasonCode: "EniLimitExceeded" || "InsufficientRolePermissions" || "InvalidConfiguration" || "InternalError" || "SubnetOutOfIPAddresses" || "InvalidSubnet" || "InvalidSecurityGroup" || "ImageDeleted" || "ImageAccessDenied" || "InvalidImage" || "KMSKeyAccessDenied" || "KMSKeyNotFound" || "InvalidStateKMSKey" || "DisabledKMSKey" || "EFSIOError" || "EFSMountConnectivityError" || "EFSMountFailure" || "EFSMountTimeout" || "InvalidRuntime" || "InvalidZipFileException" || "FunctionError" || "ServiceQuotaExceededException" || "VcpuLimitExceeded" || "CapacityProviderScalingLimitExceeded" || "InsufficientCapacity" || "EC2RequestLimitExceeded" || "FunctionError.InitTimeout" || "FunctionError.RuntimeInitError" || "FunctionError.ExtensionInitError" || "FunctionError.InvalidEntryPoint" || "FunctionError.InvalidWorkingDirectory" || "FunctionError.PermissionDenied" || "FunctionError.TooManyExtensions" || "FunctionError.InitResourceExhausted" || "DisallowedByVpcEncryptionControl",
 * //   FileSystemConfigs: [ // FileSystemConfigList
 * //     { // FileSystemConfig
 * //       Arn: "STRING_VALUE", // required
 * //       LocalMountPath: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   SigningProfileVersionArn: "STRING_VALUE",
 * //   SigningJobArn: "STRING_VALUE",
 * //   PackageType: "Zip" || "Image",
 * //   ImageConfigResponse: { // ImageConfigResponse
 * //     ImageConfig: { // ImageConfig
 * //       EntryPoint: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       Command: [
 * //         "STRING_VALUE",
 * //       ],
 * //       WorkingDirectory: "STRING_VALUE",
 * //     },
 * //     Error: { // ImageConfigError
 * //       ErrorCode: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * //   Architectures: [ // ArchitecturesList
 * //     "x86_64" || "arm64",
 * //   ],
 * //   EphemeralStorage: { // EphemeralStorage
 * //     Size: Number("int"), // required
 * //   },
 * //   SnapStart: { // SnapStartResponse
 * //     ApplyOn: "PublishedVersions" || "None",
 * //     OptimizationStatus: "On" || "Off",
 * //   },
 * //   RuntimeVersionConfig: { // RuntimeVersionConfig
 * //     RuntimeVersionArn: "STRING_VALUE",
 * //     Error: { // RuntimeVersionError
 * //       ErrorCode: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * //   LoggingConfig: { // LoggingConfig
 * //     LogFormat: "JSON" || "Text",
 * //     ApplicationLogLevel: "TRACE" || "DEBUG" || "INFO" || "WARN" || "ERROR" || "FATAL",
 * //     SystemLogLevel: "DEBUG" || "INFO" || "WARN",
 * //     LogGroup: "STRING_VALUE",
 * //   },
 * //   TenancyConfig: { // TenancyConfig
 * //     TenantIsolationMode: "PER_TENANT", // required
 * //   },
 * //   CapacityProviderConfig: { // CapacityProviderConfig
 * //     LambdaManagedInstancesCapacityProviderConfig: { // LambdaManagedInstancesCapacityProviderConfig
 * //       CapacityProviderArn: "STRING_VALUE", // required
 * //       PerExecutionEnvironmentMaxConcurrency: Number("int"),
 * //       ExecutionEnvironmentMemoryGiBPerVCpu: Number("double"),
 * //     },
 * //   },
 * //   ConfigSha256: "STRING_VALUE",
 * //   DurableConfig: { // DurableConfig
 * //     KMSKeyArn: "STRING_VALUE",
 * //     RetentionPeriodInDays: Number("int"),
 * //     ExecutionTimeout: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateFunctionCodeCommandInput - {@link UpdateFunctionCodeCommandInput}
 * @returns {@link UpdateFunctionCodeCommandOutput}
 * @see {@link UpdateFunctionCodeCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionCodeCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link CodeSigningConfigNotFoundException} (client fault)
 *  <p>The specified code signing configuration does not exist.</p>
 *
 * @throws {@link CodeStorageExceededException} (client fault)
 *  <p>Your Amazon Web Services account has exceeded its maximum total code size. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda quotas</a>.</p>
 *
 * @throws {@link CodeVerificationFailedException} (client fault)
 *  <p>The code signature failed one or more of the validation checks for signature mismatch or expiry, and the code signing policy is set to ENFORCE. Lambda blocks the deployment.</p>
 *
 * @throws {@link InvalidCodeSignatureException} (client fault)
 *  <p>The code signature failed the integrity check. If the integrity check fails, then Lambda blocks deployment, even if the code signing policy is set to WARN.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>The RevisionId provided does not match the latest RevisionId for the Lambda function or alias.</p> <ul> <li> <p> <b>For AddPermission and RemovePermission API operations:</b> Call <code>GetPolicy</code> to retrieve the latest RevisionId for your resource.</p> </li> <li> <p> <b>For all other API operations:</b> Call <code>GetFunction</code> or <code>GetAlias</code> to retrieve the latest RevisionId for your resource.</p> </li> </ul>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
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
 * @example To update a Lambda function's code
 * ```javascript
 * // The following example replaces the code of the unpublished ($LATEST) version of a function named my-function with the contents of the specified zip file in Amazon S3.
 * const input = {
 *   FunctionName: "my-function",
 *   S3Bucket: "my-bucket-1xpuxmplzrlbh",
 *   S3Key: "function.zip"
 * };
 * const command = new UpdateFunctionCodeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CodeSha256: "PFn4S+er27qk+UuZSTKEQfNKG/XNn7QJs90mJgq6oH8=",
 *   CodeSize: 308,
 *   Description: "",
 *   FunctionArn: "arn:aws:lambda:us-east-2:123456789012:function:my-function",
 *   FunctionName: "my-function",
 *   Handler: "index.handler",
 *   LastModified: "2019-08-14T22:26:11.234+0000",
 *   MemorySize: 128,
 *   RevisionId: "873282ed-xmpl-4dc8-a069-d0c647e470c6",
 *   Role: "arn:aws:iam::123456789012:role/lambda-role",
 *   Runtime: "nodejs12.x",
 *   Timeout: 3,
 *   TracingConfig: {
 *     Mode: "PassThrough"
 *   },
 *   Version: "$LATEST"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateFunctionCodeCommand extends command<UpdateFunctionCodeCommandInput, UpdateFunctionCodeCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFunctionCode",
  UpdateFunctionCode$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFunctionCodeRequest;
      output: FunctionConfiguration;
    };
    sdk: {
      input: UpdateFunctionCodeCommandInput;
      output: UpdateFunctionCodeCommandOutput;
    };
  };
}
