// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateCanaryRequest, UpdateCanaryResponse } from "../models/models_0";
import { de_UpdateCanaryCommand, se_UpdateCanaryCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCanaryCommand}.
 */
export interface UpdateCanaryCommandInput extends UpdateCanaryRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCanaryCommand}.
 */
export interface UpdateCanaryCommandOutput extends UpdateCanaryResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of a canary that has
 *          already been created.</p>
 *          <p>You can't use this operation to update the tags of an existing canary. To
 *          change the tags of an existing canary, use
 *          <a href="https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_TagResource.html">TagResource</a>.</p>
 *          <note>
 *             <p>When you use the <code>dryRunId</code> field when updating a canary, the only other field you can provide is the <code>Schedule</code>. Adding any other field will thrown an exception.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, UpdateCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, UpdateCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * const client = new SyntheticsClient(config);
 * const input = { // UpdateCanaryRequest
 *   Name: "STRING_VALUE", // required
 *   Code: { // CanaryCodeInput
 *     S3Bucket: "STRING_VALUE",
 *     S3Key: "STRING_VALUE",
 *     S3Version: "STRING_VALUE",
 *     ZipFile: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     Handler: "STRING_VALUE", // required
 *     Dependencies: [ // Dependencies
 *       { // Dependency
 *         Type: "LambdaLayer",
 *         Reference: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   ExecutionRoleArn: "STRING_VALUE",
 *   RuntimeVersion: "STRING_VALUE",
 *   Schedule: { // CanaryScheduleInput
 *     Expression: "STRING_VALUE", // required
 *     DurationInSeconds: Number("long"),
 *     RetryConfig: { // RetryConfigInput
 *       MaxRetries: Number("int"), // required
 *     },
 *   },
 *   RunConfig: { // CanaryRunConfigInput
 *     TimeoutInSeconds: Number("int"),
 *     MemoryInMB: Number("int"),
 *     ActiveTracing: true || false,
 *     EnvironmentVariables: { // EnvironmentVariablesMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     EphemeralStorage: Number("int"),
 *   },
 *   SuccessRetentionPeriodInDays: Number("int"),
 *   FailureRetentionPeriodInDays: Number("int"),
 *   VpcConfig: { // VpcConfigInput
 *     SubnetIds: [ // SubnetIds
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [ // SecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *     Ipv6AllowedForDualStack: true || false,
 *   },
 *   VisualReference: { // VisualReferenceInput
 *     BaseScreenshots: [ // BaseScreenshots
 *       { // BaseScreenshot
 *         ScreenshotName: "STRING_VALUE", // required
 *         IgnoreCoordinates: [ // BaseScreenshotIgnoreCoordinates
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     BaseCanaryRunId: "STRING_VALUE", // required
 *   },
 *   ArtifactS3Location: "STRING_VALUE",
 *   ArtifactConfig: { // ArtifactConfigInput
 *     S3Encryption: { // S3EncryptionConfig
 *       EncryptionMode: "SSE_S3" || "SSE_KMS",
 *       KmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   ProvisionedResourceCleanup: "AUTOMATIC" || "OFF",
 *   DryRunId: "STRING_VALUE",
 * };
 * const command = new UpdateCanaryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCanaryCommandInput - {@link UpdateCanaryCommandInput}
 * @returns {@link UpdateCanaryCommandOutput}
 * @see {@link UpdateCanaryCommandInput} for command's `input` shape.
 * @see {@link UpdateCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this operation on this resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflicting operation is already in progress.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link RequestEntityTooLargeException} (client fault)
 *  <p>One of the input resources is larger than is allowed.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One of the specified resources was not found.</p>
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
export class UpdateCanaryCommand extends $Command
  .classBuilder<
    UpdateCanaryCommandInput,
    UpdateCanaryCommandOutput,
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
  .s("Synthetics", "UpdateCanary", {})
  .n("SyntheticsClient", "UpdateCanaryCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCanaryCommand)
  .de(de_UpdateCanaryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCanaryRequest;
      output: {};
    };
    sdk: {
      input: UpdateCanaryCommandInput;
      output: UpdateCanaryCommandOutput;
    };
  };
}
