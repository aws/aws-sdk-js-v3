// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetFunctionRequest, GetFunctionResponse, GetFunctionResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetFunctionCommand, se_GetFunctionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFunctionCommand}.
 */
export interface GetFunctionCommandInput extends GetFunctionRequest {}
/**
 * @public
 *
 * The output of {@link GetFunctionCommand}.
 */
export interface GetFunctionCommandOutput extends GetFunctionResponse, __MetadataBearer {}

/**
 * <p>Returns information about the function or function version, with a link to download the deployment package
 *       that's valid for 10 minutes. If you specify a function version, only details that are specific to that version are
 *       returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // GetFunctionRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE",
 * };
 * const command = new GetFunctionCommand(input);
 * const response = await client.send(command);
 * // { // GetFunctionResponse
 * //   Configuration: { // FunctionConfiguration
 * //     FunctionName: "STRING_VALUE",
 * //     FunctionArn: "STRING_VALUE",
 * //     Runtime: "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "dotnet8" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x" || "python3.10" || "java17" || "ruby3.2" || "ruby3.3" || "python3.11" || "nodejs20.x" || "provided.al2023" || "python3.12" || "java21",
 * //     Role: "STRING_VALUE",
 * //     Handler: "STRING_VALUE",
 * //     CodeSize: Number("long"),
 * //     Description: "STRING_VALUE",
 * //     Timeout: Number("int"),
 * //     MemorySize: Number("int"),
 * //     LastModified: "STRING_VALUE",
 * //     CodeSha256: "STRING_VALUE",
 * //     Version: "STRING_VALUE",
 * //     VpcConfig: { // VpcConfigResponse
 * //       SubnetIds: [ // SubnetIds
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroupIds: [ // SecurityGroupIds
 * //         "STRING_VALUE",
 * //       ],
 * //       VpcId: "STRING_VALUE",
 * //       Ipv6AllowedForDualStack: true || false,
 * //     },
 * //     DeadLetterConfig: { // DeadLetterConfig
 * //       TargetArn: "STRING_VALUE",
 * //     },
 * //     Environment: { // EnvironmentResponse
 * //       Variables: { // EnvironmentVariables
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Error: { // EnvironmentError
 * //         ErrorCode: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //     KMSKeyArn: "STRING_VALUE",
 * //     TracingConfig: { // TracingConfigResponse
 * //       Mode: "Active" || "PassThrough",
 * //     },
 * //     MasterArn: "STRING_VALUE",
 * //     RevisionId: "STRING_VALUE",
 * //     Layers: [ // LayersReferenceList
 * //       { // Layer
 * //         Arn: "STRING_VALUE",
 * //         CodeSize: Number("long"),
 * //         SigningProfileVersionArn: "STRING_VALUE",
 * //         SigningJobArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     State: "Pending" || "Active" || "Inactive" || "Failed",
 * //     StateReason: "STRING_VALUE",
 * //     StateReasonCode: "Idle" || "Creating" || "Restoring" || "EniLimitExceeded" || "InsufficientRolePermissions" || "InvalidConfiguration" || "InternalError" || "SubnetOutOfIPAddresses" || "InvalidSubnet" || "InvalidSecurityGroup" || "ImageDeleted" || "ImageAccessDenied" || "InvalidImage" || "KMSKeyAccessDenied" || "KMSKeyNotFound" || "InvalidStateKMSKey" || "DisabledKMSKey" || "EFSIOError" || "EFSMountConnectivityError" || "EFSMountFailure" || "EFSMountTimeout" || "InvalidRuntime" || "InvalidZipFileException" || "FunctionError",
 * //     LastUpdateStatus: "Successful" || "Failed" || "InProgress",
 * //     LastUpdateStatusReason: "STRING_VALUE",
 * //     LastUpdateStatusReasonCode: "EniLimitExceeded" || "InsufficientRolePermissions" || "InvalidConfiguration" || "InternalError" || "SubnetOutOfIPAddresses" || "InvalidSubnet" || "InvalidSecurityGroup" || "ImageDeleted" || "ImageAccessDenied" || "InvalidImage" || "KMSKeyAccessDenied" || "KMSKeyNotFound" || "InvalidStateKMSKey" || "DisabledKMSKey" || "EFSIOError" || "EFSMountConnectivityError" || "EFSMountFailure" || "EFSMountTimeout" || "InvalidRuntime" || "InvalidZipFileException" || "FunctionError",
 * //     FileSystemConfigs: [ // FileSystemConfigList
 * //       { // FileSystemConfig
 * //         Arn: "STRING_VALUE", // required
 * //         LocalMountPath: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     PackageType: "Zip" || "Image",
 * //     ImageConfigResponse: { // ImageConfigResponse
 * //       ImageConfig: { // ImageConfig
 * //         EntryPoint: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         Command: [
 * //           "STRING_VALUE",
 * //         ],
 * //         WorkingDirectory: "STRING_VALUE",
 * //       },
 * //       Error: { // ImageConfigError
 * //         ErrorCode: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //     SigningProfileVersionArn: "STRING_VALUE",
 * //     SigningJobArn: "STRING_VALUE",
 * //     Architectures: [ // ArchitecturesList
 * //       "x86_64" || "arm64",
 * //     ],
 * //     EphemeralStorage: { // EphemeralStorage
 * //       Size: Number("int"), // required
 * //     },
 * //     SnapStart: { // SnapStartResponse
 * //       ApplyOn: "PublishedVersions" || "None",
 * //       OptimizationStatus: "On" || "Off",
 * //     },
 * //     RuntimeVersionConfig: { // RuntimeVersionConfig
 * //       RuntimeVersionArn: "STRING_VALUE",
 * //       Error: { // RuntimeVersionError
 * //         ErrorCode: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //     LoggingConfig: { // LoggingConfig
 * //       LogFormat: "JSON" || "Text",
 * //       ApplicationLogLevel: "TRACE" || "DEBUG" || "INFO" || "WARN" || "ERROR" || "FATAL",
 * //       SystemLogLevel: "DEBUG" || "INFO" || "WARN",
 * //       LogGroup: "STRING_VALUE",
 * //     },
 * //   },
 * //   Code: { // FunctionCodeLocation
 * //     RepositoryType: "STRING_VALUE",
 * //     Location: "STRING_VALUE",
 * //     ImageUri: "STRING_VALUE",
 * //     ResolvedImageUri: "STRING_VALUE",
 * //   },
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Concurrency: { // Concurrency
 * //     ReservedConcurrentExecutions: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFunctionCommandInput - {@link GetFunctionCommandInput}
 * @returns {@link GetFunctionCommandOutput}
 * @see {@link GetFunctionCommandInput} for command's `input` shape.
 * @see {@link GetFunctionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetFunctionCommand extends $Command
  .classBuilder<
    GetFunctionCommandInput,
    GetFunctionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "GetFunction", {})
  .n("LambdaClient", "GetFunctionCommand")
  .f(void 0, GetFunctionResponseFilterSensitiveLog)
  .ser(se_GetFunctionCommand)
  .de(de_GetFunctionCommand)
  .build() {}
