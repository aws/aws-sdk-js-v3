// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCanariesRequest, DescribeCanariesResponse } from "../models/models_0";
import { de_DescribeCanariesCommand, se_DescribeCanariesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCanariesCommand}.
 */
export interface DescribeCanariesCommandInput extends DescribeCanariesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCanariesCommand}.
 */
export interface DescribeCanariesCommandOutput extends DescribeCanariesResponse, __MetadataBearer {}

/**
 * <p>This operation returns a list of the canaries in your account, along with full details
 *       about each canary.</p>
 *          <p>This operation supports resource-level authorization using an IAM policy and
 *       the <code>Names</code> parameter. If you specify the <code>Names</code> parameter, the operation is successful only if you have authorization to view
 *          all the canaries that you specify in your request. If you do not have permission to view any of
 *          the canaries, the request fails with a 403 response.</p>
 *          <p>You are required to use the <code>Names</code> parameter if you are logged on to a user or role that has an
 *          IAM policy that restricts which canaries that you are allowed to view. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Restricted.html">
 *             Limiting a user to viewing specific canaries</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DescribeCanariesCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DescribeCanariesCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * // import type { SyntheticsClientConfig } from "@aws-sdk/client-synthetics";
 * const config = {}; // type is SyntheticsClientConfig
 * const client = new SyntheticsClient(config);
 * const input = { // DescribeCanariesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Names: [ // DescribeCanariesNameFilter
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeCanariesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCanariesResponse
 * //   Canaries: [ // Canaries
 * //     { // Canary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Code: { // CanaryCodeOutput
 * //         SourceLocationArn: "STRING_VALUE",
 * //         Handler: "STRING_VALUE",
 * //         Dependencies: [ // Dependencies
 * //           { // Dependency
 * //             Type: "LambdaLayer",
 * //             Reference: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       ExecutionRoleArn: "STRING_VALUE",
 * //       Schedule: { // CanaryScheduleOutput
 * //         Expression: "STRING_VALUE",
 * //         DurationInSeconds: Number("long"),
 * //         RetryConfig: { // RetryConfigOutput
 * //           MaxRetries: Number("int"),
 * //         },
 * //       },
 * //       RunConfig: { // CanaryRunConfigOutput
 * //         TimeoutInSeconds: Number("int"),
 * //         MemoryInMB: Number("int"),
 * //         ActiveTracing: true || false,
 * //         EphemeralStorage: Number("int"),
 * //       },
 * //       SuccessRetentionPeriodInDays: Number("int"),
 * //       FailureRetentionPeriodInDays: Number("int"),
 * //       Status: { // CanaryStatus
 * //         State: "CREATING" || "READY" || "STARTING" || "RUNNING" || "UPDATING" || "STOPPING" || "STOPPED" || "ERROR" || "DELETING",
 * //         StateReason: "STRING_VALUE",
 * //         StateReasonCode: "INVALID_PERMISSIONS" || "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "UPDATE_PENDING" || "UPDATE_IN_PROGRESS" || "UPDATE_COMPLETE" || "ROLLBACK_COMPLETE" || "ROLLBACK_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "SYNC_DELETE_IN_PROGRESS",
 * //       },
 * //       Timeline: { // CanaryTimeline
 * //         Created: new Date("TIMESTAMP"),
 * //         LastModified: new Date("TIMESTAMP"),
 * //         LastStarted: new Date("TIMESTAMP"),
 * //         LastStopped: new Date("TIMESTAMP"),
 * //       },
 * //       ArtifactS3Location: "STRING_VALUE",
 * //       EngineArn: "STRING_VALUE",
 * //       RuntimeVersion: "STRING_VALUE",
 * //       VpcConfig: { // VpcConfigOutput
 * //         VpcId: "STRING_VALUE",
 * //         SubnetIds: [ // SubnetIds
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroupIds: [ // SecurityGroupIds
 * //           "STRING_VALUE",
 * //         ],
 * //         Ipv6AllowedForDualStack: true || false,
 * //       },
 * //       VisualReference: { // VisualReferenceOutput
 * //         BaseScreenshots: [ // BaseScreenshots
 * //           { // BaseScreenshot
 * //             ScreenshotName: "STRING_VALUE", // required
 * //             IgnoreCoordinates: [ // BaseScreenshotIgnoreCoordinates
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         BaseCanaryRunId: "STRING_VALUE",
 * //         BrowserType: "CHROME" || "FIREFOX",
 * //       },
 * //       ProvisionedResourceCleanup: "AUTOMATIC" || "OFF",
 * //       BrowserConfigs: [ // BrowserConfigs
 * //         { // BrowserConfig
 * //           BrowserType: "CHROME" || "FIREFOX",
 * //         },
 * //       ],
 * //       EngineConfigs: [ // EngineConfigs
 * //         { // EngineConfig
 * //           EngineArn: "STRING_VALUE",
 * //           BrowserType: "CHROME" || "FIREFOX",
 * //         },
 * //       ],
 * //       VisualReferences: [ // VisualReferencesOutput
 * //         {
 * //           BaseScreenshots: [
 * //             {
 * //               ScreenshotName: "STRING_VALUE", // required
 * //               IgnoreCoordinates: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //           BaseCanaryRunId: "STRING_VALUE",
 * //           BrowserType: "CHROME" || "FIREFOX",
 * //         },
 * //       ],
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ArtifactConfig: { // ArtifactConfigOutput
 * //         S3Encryption: { // S3EncryptionConfig
 * //           EncryptionMode: "SSE_S3" || "SSE_KMS",
 * //           KmsKeyArn: "STRING_VALUE",
 * //         },
 * //       },
 * //       DryRunConfig: { // DryRunConfigOutput
 * //         DryRunId: "STRING_VALUE",
 * //         LastDryRunExecutionStatus: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCanariesCommandInput - {@link DescribeCanariesCommandInput}
 * @returns {@link DescribeCanariesCommandOutput}
 * @see {@link DescribeCanariesCommandInput} for command's `input` shape.
 * @see {@link DescribeCanariesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeCanariesCommand extends $Command
  .classBuilder<
    DescribeCanariesCommandInput,
    DescribeCanariesCommandOutput,
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
  .s("Synthetics", "DescribeCanaries", {})
  .n("SyntheticsClient", "DescribeCanariesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCanariesCommand)
  .de(de_DescribeCanariesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCanariesRequest;
      output: DescribeCanariesResponse;
    };
    sdk: {
      input: DescribeCanariesCommandInput;
      output: DescribeCanariesCommandOutput;
    };
  };
}
