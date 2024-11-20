// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  ListFunctionsRequest,
  ListFunctionsResponse,
  ListFunctionsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListFunctionsCommand, se_ListFunctionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFunctionsCommand}.
 */
export interface ListFunctionsCommandInput extends ListFunctionsRequest {}
/**
 * @public
 *
 * The output of {@link ListFunctionsCommand}.
 */
export interface ListFunctionsCommandOutput extends ListFunctionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Lambda functions, with the version-specific configuration of each. Lambda returns up to 50
 *       functions per call.</p>
 *          <p>Set <code>FunctionVersion</code> to <code>ALL</code> to include all published versions of each function in
 *       addition to the unpublished version.</p>
 *          <note>
 *             <p>The <code>ListFunctions</code> operation returns a subset of the <a>FunctionConfiguration</a> fields.
 *         To get the additional fields (State, StateReasonCode, StateReason, LastUpdateStatus, LastUpdateStatusReason,
 *         LastUpdateStatusReasonCode,  RuntimeVersionConfig) for a function or version, use <a>GetFunction</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListFunctionsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListFunctionsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // ListFunctionsRequest
 *   MasterRegion: "STRING_VALUE",
 *   FunctionVersion: "ALL",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListFunctionsCommand(input);
 * const response = await client.send(command);
 * // { // ListFunctionsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   Functions: [ // FunctionList
 * //     { // FunctionConfiguration
 * //       FunctionName: "STRING_VALUE",
 * //       FunctionArn: "STRING_VALUE",
 * //       Runtime: "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "dotnet8" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x" || "python3.10" || "java17" || "ruby3.2" || "ruby3.3" || "python3.11" || "nodejs20.x" || "provided.al2023" || "python3.12" || "java21" || "python3.13" || "nodejs22.x",
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
 * //       State: "Pending" || "Active" || "Inactive" || "Failed",
 * //       StateReason: "STRING_VALUE",
 * //       StateReasonCode: "Idle" || "Creating" || "Restoring" || "EniLimitExceeded" || "InsufficientRolePermissions" || "InvalidConfiguration" || "InternalError" || "SubnetOutOfIPAddresses" || "InvalidSubnet" || "InvalidSecurityGroup" || "ImageDeleted" || "ImageAccessDenied" || "InvalidImage" || "KMSKeyAccessDenied" || "KMSKeyNotFound" || "InvalidStateKMSKey" || "DisabledKMSKey" || "EFSIOError" || "EFSMountConnectivityError" || "EFSMountFailure" || "EFSMountTimeout" || "InvalidRuntime" || "InvalidZipFileException" || "FunctionError",
 * //       LastUpdateStatus: "Successful" || "Failed" || "InProgress",
 * //       LastUpdateStatusReason: "STRING_VALUE",
 * //       LastUpdateStatusReasonCode: "EniLimitExceeded" || "InsufficientRolePermissions" || "InvalidConfiguration" || "InternalError" || "SubnetOutOfIPAddresses" || "InvalidSubnet" || "InvalidSecurityGroup" || "ImageDeleted" || "ImageAccessDenied" || "InvalidImage" || "KMSKeyAccessDenied" || "KMSKeyNotFound" || "InvalidStateKMSKey" || "DisabledKMSKey" || "EFSIOError" || "EFSMountConnectivityError" || "EFSMountFailure" || "EFSMountTimeout" || "InvalidRuntime" || "InvalidZipFileException" || "FunctionError",
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
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFunctionsCommandInput - {@link ListFunctionsCommandInput}
 * @returns {@link ListFunctionsCommandOutput}
 * @see {@link ListFunctionsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionsCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
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
 * @example To get a list of Lambda functions
 * ```javascript
 * // This operation returns a list of Lambda functions.
 * const input = {};
 * const command = new ListFunctionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Functions": [
 *     {
 *       "CodeSha256": "dBG9m8SGdmlEjw/JYXlhhvCrAv5TxvXsbL/RMr0fT/I=",
 *       "CodeSize": 294,
 *       "Description": "",
 *       "FunctionArn": "arn:aws:lambda:us-west-2:123456789012:function:helloworld",
 *       "FunctionName": "helloworld",
 *       "Handler": "helloworld.handler",
 *       "LastModified": "2019-09-23T18:32:33.857+0000",
 *       "MemorySize": 128,
 *       "RevisionId": "1718e831-badf-4253-9518-d0644210af7b",
 *       "Role": "arn:aws:iam::123456789012:role/service-role/MyTestFunction-role-zgur6bf4",
 *       "Runtime": "nodejs10.x",
 *       "Timeout": 3,
 *       "TracingConfig": {
 *         "Mode": "PassThrough"
 *       },
 *       "Version": "$LATEST"
 *     },
 *     {
 *       "CodeSha256": "sU0cJ2/hOZevwV/lTxCuQqK3gDZP3i8gUoqUUVRmY6E=",
 *       "CodeSize": 266,
 *       "Description": "",
 *       "FunctionArn": "arn:aws:lambda:us-west-2:123456789012:function:my-function",
 *       "FunctionName": "my-function",
 *       "Handler": "index.handler",
 *       "LastModified": "2019-10-01T16:47:28.490+0000",
 *       "MemorySize": 256,
 *       "RevisionId": "93017fc9-59cb-41dc-901b-4845ce4bf668",
 *       "Role": "arn:aws:iam::123456789012:role/service-role/helloWorldPython-role-uy3l9qyq",
 *       "Runtime": "nodejs10.x",
 *       "Timeout": 3,
 *       "TracingConfig": {
 *         "Mode": "PassThrough"
 *       },
 *       "Version": "$LATEST",
 *       "VpcConfig": {
 *         "SecurityGroupIds": [],
 *         "SubnetIds": [],
 *         "VpcId": ""
 *       }
 *     }
 *   ],
 *   "NextMarker": ""
 * }
 * *\/
 * // example id: to-get-a-list-of-lambda-functions-1481650507425
 * ```
 *
 */
export class ListFunctionsCommand extends $Command
  .classBuilder<
    ListFunctionsCommandInput,
    ListFunctionsCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "ListFunctions", {})
  .n("LambdaClient", "ListFunctionsCommand")
  .f(void 0, ListFunctionsResponseFilterSensitiveLog)
  .ser(se_ListFunctionsCommand)
  .de(de_ListFunctionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFunctionsRequest;
      output: ListFunctionsResponse;
    };
    sdk: {
      input: ListFunctionsCommandInput;
      output: ListFunctionsCommandOutput;
    };
  };
}
