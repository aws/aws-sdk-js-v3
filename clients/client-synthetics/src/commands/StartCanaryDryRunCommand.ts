// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartCanaryDryRunRequest, StartCanaryDryRunResponse } from "../models/models_0";
import { StartCanaryDryRun } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartCanaryDryRunCommand}.
 */
export interface StartCanaryDryRunCommandInput extends StartCanaryDryRunRequest {}
/**
 * @public
 *
 * The output of {@link StartCanaryDryRunCommand}.
 */
export interface StartCanaryDryRunCommandOutput extends StartCanaryDryRunResponse, __MetadataBearer {}

/**
 * <p>Use this operation to start a dry run for a canary that has already been created</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, StartCanaryDryRunCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, StartCanaryDryRunCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * // import type { SyntheticsClientConfig } from "@aws-sdk/client-synthetics";
 * const config = {}; // type is SyntheticsClientConfig
 * const client = new SyntheticsClient(config);
 * const input = { // StartCanaryDryRunRequest
 *   Name: "STRING_VALUE", // required
 *   Code: { // CanaryCodeInput
 *     S3Bucket: "STRING_VALUE",
 *     S3Key: "STRING_VALUE",
 *     S3Version: "STRING_VALUE",
 *     ZipFile: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *     Handler: "STRING_VALUE",
 *     BlueprintTypes: [ // BlueprintTypes
 *       "STRING_VALUE",
 *     ],
 *     Dependencies: [ // Dependencies
 *       { // Dependency
 *         Type: "LambdaLayer",
 *         Reference: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   RuntimeVersion: "STRING_VALUE",
 *   RunConfig: { // CanaryRunConfigInput
 *     TimeoutInSeconds: Number("int"),
 *     MemoryInMB: Number("int"),
 *     ActiveTracing: true || false,
 *     EnvironmentVariables: { // EnvironmentVariablesMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     EphemeralStorage: Number("int"),
 *   },
 *   VpcConfig: { // VpcConfigInput
 *     SubnetIds: [ // SubnetIds
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [ // SecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *     Ipv6AllowedForDualStack: true || false,
 *   },
 *   ExecutionRoleArn: "STRING_VALUE",
 *   SuccessRetentionPeriodInDays: Number("int"),
 *   FailureRetentionPeriodInDays: Number("int"),
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
 *     BrowserType: "CHROME" || "FIREFOX",
 *   },
 *   ArtifactS3Location: "STRING_VALUE",
 *   ArtifactConfig: { // ArtifactConfigInput
 *     S3Encryption: { // S3EncryptionConfig
 *       EncryptionMode: "SSE_S3" || "SSE_KMS",
 *       KmsKeyArn: "STRING_VALUE",
 *     },
 *   },
 *   ProvisionedResourceCleanup: "AUTOMATIC" || "OFF",
 *   BrowserConfigs: [ // BrowserConfigs
 *     { // BrowserConfig
 *       BrowserType: "CHROME" || "FIREFOX",
 *     },
 *   ],
 *   VisualReferences: [ // VisualReferences
 *     {
 *       BaseScreenshots: [
 *         {
 *           ScreenshotName: "STRING_VALUE", // required
 *           IgnoreCoordinates: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       BaseCanaryRunId: "STRING_VALUE", // required
 *       BrowserType: "CHROME" || "FIREFOX",
 *     },
 *   ],
 * };
 * const command = new StartCanaryDryRunCommand(input);
 * const response = await client.send(command);
 * // { // StartCanaryDryRunResponse
 * //   DryRunConfig: { // DryRunConfigOutput
 * //     DryRunId: "STRING_VALUE",
 * //     LastDryRunExecutionStatus: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartCanaryDryRunCommandInput - {@link StartCanaryDryRunCommandInput}
 * @returns {@link StartCanaryDryRunCommandOutput}
 * @see {@link StartCanaryDryRunCommandInput} for command's `input` shape.
 * @see {@link StartCanaryDryRunCommandOutput} for command's `response` shape.
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
export class StartCanaryDryRunCommand extends $Command
  .classBuilder<
    StartCanaryDryRunCommandInput,
    StartCanaryDryRunCommandOutput,
    SyntheticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SyntheticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Synthetics", "StartCanaryDryRun", {})
  .n("SyntheticsClient", "StartCanaryDryRunCommand")
  .sc(StartCanaryDryRun)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartCanaryDryRunRequest;
      output: StartCanaryDryRunResponse;
    };
    sdk: {
      input: StartCanaryDryRunCommandInput;
      output: StartCanaryDryRunCommandOutput;
    };
  };
}
