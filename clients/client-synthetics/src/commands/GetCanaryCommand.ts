// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetCanaryRequest, GetCanaryResponse } from "../models/models_0";
import { de_GetCanaryCommand, se_GetCanaryCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCanaryCommand}.
 */
export interface GetCanaryCommandInput extends GetCanaryRequest {}
/**
 * @public
 *
 * The output of {@link GetCanaryCommand}.
 */
export interface GetCanaryCommandOutput extends GetCanaryResponse, __MetadataBearer {}

/**
 * <p>Retrieves complete information about one canary. You must specify
 *       the name of the canary that you want. To get a list of canaries
 *       and their names, use <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DescribeCanaries.html">DescribeCanaries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, GetCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, GetCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const input = { // GetCanaryRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetCanaryCommand(input);
 * const response = await client.send(command);
 * // { // GetCanaryResponse
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
 * @param GetCanaryCommandInput - {@link GetCanaryCommandInput}
 * @returns {@link GetCanaryCommandOutput}
 * @see {@link GetCanaryCommandInput} for command's `input` shape.
 * @see {@link GetCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 * @public
 */
export class GetCanaryCommand extends $Command
  .classBuilder<
    GetCanaryCommandInput,
    GetCanaryCommandOutput,
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
  .s("Synthetics", "GetCanary", {})
  .n("SyntheticsClient", "GetCanaryCommand")
  .f(void 0, void 0)
  .ser(se_GetCanaryCommand)
  .de(de_GetCanaryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCanaryRequest;
      output: GetCanaryResponse;
    };
    sdk: {
      input: GetCanaryCommandInput;
      output: GetCanaryCommandOutput;
    };
  };
}
