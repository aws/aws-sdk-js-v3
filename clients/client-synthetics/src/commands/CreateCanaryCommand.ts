// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCanaryRequest, CreateCanaryResponse } from "../models/models_0";
import { de_CreateCanaryCommand, se_CreateCanaryCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCanaryCommand}.
 */
export interface CreateCanaryCommandInput extends CreateCanaryRequest {}
/**
 * @public
 *
 * The output of {@link CreateCanaryCommand}.
 */
export interface CreateCanaryCommandOutput extends CreateCanaryResponse, __MetadataBearer {}

/**
 * <p>Creates a canary. Canaries are scripts that monitor your endpoints and APIs from the
 *          outside-in. Canaries help you check the availability and latency of your web services and
 *          troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and
 *          metrics. You can set up a canary to run continuously or just once. </p>
 *          <p>Do not use <code>CreateCanary</code> to modify an existing canary. Use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_UpdateCanary.html">UpdateCanary</a> instead.</p>
 *          <p>To create canaries, you must have the <code>CloudWatchSyntheticsFullAccess</code> policy.
 *          If you are creating a new IAM role for the canary, you also need the
 *          <code>iam:CreateRole</code>, <code>iam:CreatePolicy</code> and
 *             <code>iam:AttachRolePolicy</code> permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Roles">Necessary
 *             Roles and Permissions</a>.</p>
 *          <p>Do not include secrets or proprietary information in your canary names. The canary name
 *          makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in
 *          outbound calls over the internet. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security
 *             Considerations for Synthetics Canaries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, CreateCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, CreateCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const input = { // CreateCanaryRequest
 *   Name: "STRING_VALUE", // required
 *   Code: { // CanaryCodeInput
 *     S3Bucket: "STRING_VALUE",
 *     S3Key: "STRING_VALUE",
 *     S3Version: "STRING_VALUE",
 *     ZipFile: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     Handler: "STRING_VALUE", // required
 *   },
 *   ArtifactS3Location: "STRING_VALUE", // required
 *   ExecutionRoleArn: "STRING_VALUE", // required
 *   Schedule: { // CanaryScheduleInput
 *     Expression: "STRING_VALUE", // required
 *     DurationInSeconds: Number("long"),
 *   },
 *   RunConfig: { // CanaryRunConfigInput
 *     TimeoutInSeconds: Number("int"),
 *     MemoryInMB: Number("int"),
 *     ActiveTracing: true || false,
 *     EnvironmentVariables: { // EnvironmentVariablesMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   SuccessRetentionPeriodInDays: Number("int"),
 *   FailureRetentionPeriodInDays: Number("int"),
 *   RuntimeVersion: "STRING_VALUE", // required
 *   VpcConfig: { // VpcConfigInput
 *     SubnetIds: [ // SubnetIds
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [ // SecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *     Ipv6AllowedForDualStack: true || false,
 *   },
 *   ResourcesToReplicateTags: [ // ResourceList
 *     "lambda-function",
 *   ],
 *   ProvisionedResourceCleanup: "AUTOMATIC" || "OFF",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ArtifactConfig: { // ArtifactConfigInput
 *     S3Encryption: { // S3EncryptionConfig
 *       EncryptionMode: "SSE_S3" || "SSE_KMS",
 *       KmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new CreateCanaryCommand(input);
 * const response = await client.send(command);
 * // { // CreateCanaryResponse
 * //   Canary: { // Canary
 * //     Id: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Code: { // CanaryCodeOutput
 * //       SourceLocationArn: "STRING_VALUE",
 * //       Handler: "STRING_VALUE",
 * //     },
 * //     ExecutionRoleArn: "STRING_VALUE",
 * //     Schedule: { // CanaryScheduleOutput
 * //       Expression: "STRING_VALUE",
 * //       DurationInSeconds: Number("long"),
 * //     },
 * //     RunConfig: { // CanaryRunConfigOutput
 * //       TimeoutInSeconds: Number("int"),
 * //       MemoryInMB: Number("int"),
 * //       ActiveTracing: true || false,
 * //     },
 * //     SuccessRetentionPeriodInDays: Number("int"),
 * //     FailureRetentionPeriodInDays: Number("int"),
 * //     Status: { // CanaryStatus
 * //       State: "CREATING" || "READY" || "STARTING" || "RUNNING" || "UPDATING" || "STOPPING" || "STOPPED" || "ERROR" || "DELETING",
 * //       StateReason: "STRING_VALUE",
 * //       StateReasonCode: "INVALID_PERMISSIONS" || "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "UPDATE_PENDING" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "ROLLBACK_COMPLETE" || "ROLLBACK_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "SYNC_DELETE_IN_PROGRESS",
 * //     },
 * //     Timeline: { // CanaryTimeline
 * //       Created: new Date("TIMESTAMP"),
 * //       LastModified: new Date("TIMESTAMP"),
 * //       LastStarted: new Date("TIMESTAMP"),
 * //       LastStopped: new Date("TIMESTAMP"),
 * //     },
 * //     ArtifactS3Location: "STRING_VALUE",
 * //     EngineArn: "STRING_VALUE",
 * //     RuntimeVersion: "STRING_VALUE",
 * //     VpcConfig: { // VpcConfigOutput
 * //       VpcId: "STRING_VALUE",
 * //       SubnetIds: [ // SubnetIds
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityGroupIds: [ // SecurityGroupIds
 * //         "STRING_VALUE",
 * //       ],
 * //       Ipv6AllowedForDualStack: true || false,
 * //     },
 * //     VisualReference: { // VisualReferenceOutput
 * //       BaseScreenshots: [ // BaseScreenshots
 * //         { // BaseScreenshot
 * //           ScreenshotName: "STRING_VALUE", // required
 * //           IgnoreCoordinates: [ // BaseScreenshotIgnoreCoordinates
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       BaseCanaryRunId: "STRING_VALUE",
 * //     },
 * //     ProvisionedResourceCleanup: "AUTOMATIC" || "OFF",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     ArtifactConfig: { // ArtifactConfigOutput
 * //       S3Encryption: { // S3EncryptionConfig
 * //         EncryptionMode: "SSE_S3" || "SSE_KMS",
 * //         KmsKeyArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCanaryCommandInput - {@link CreateCanaryCommandInput}
 * @returns {@link CreateCanaryCommandOutput}
 * @see {@link CreateCanaryCommandInput} for command's `input` shape.
 * @see {@link CreateCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link RequestEntityTooLargeException} (client fault)
 *  <p>One of the input resources is larger than is allowed.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 *
 * @public
 */
export class CreateCanaryCommand extends $Command
  .classBuilder<
    CreateCanaryCommandInput,
    CreateCanaryCommandOutput,
    SyntheticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SyntheticsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Synthetics", "CreateCanary", {})
  .n("SyntheticsClient", "CreateCanaryCommand")
  .f(void 0, void 0)
  .ser(se_CreateCanaryCommand)
  .de(de_CreateCanaryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCanaryRequest;
      output: CreateCanaryResponse;
    };
    sdk: {
      input: CreateCanaryCommandInput;
      output: CreateCanaryCommandOutput;
    };
  };
}
