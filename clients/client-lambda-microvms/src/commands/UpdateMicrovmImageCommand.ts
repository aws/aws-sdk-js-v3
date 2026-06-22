// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LambdaMicrovmsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LambdaMicrovmsClient";
import type { UpdateMicrovmImageRequest, UpdateMicrovmImageResponse } from "../models/models_0";
import { UpdateMicrovmImage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMicrovmImageCommand}.
 */
export interface UpdateMicrovmImageCommandInput extends UpdateMicrovmImageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMicrovmImageCommand}.
 */
export interface UpdateMicrovmImageCommandOutput extends UpdateMicrovmImageResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration of a MicroVM image and triggers a new version build. This operation uses PUT semantics — all required fields (codeArtifact, baseImageArn, buildRoleArn) must be provided with every request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, UpdateMicrovmImageCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, UpdateMicrovmImageCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // UpdateMicrovmImageRequest
 *   baseImageArn: "STRING_VALUE", // required
 *   baseImageVersion: "STRING_VALUE",
 *   buildRoleArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   codeArtifact: { // CodeArtifact Union: only one key present
 *     uri: "STRING_VALUE",
 *   },
 *   logging: { // Logging Union: only one key present
 *     disabled: {},
 *     cloudWatch: { // CloudWatchLogging
 *       logGroup: "STRING_VALUE",
 *       logStream: "STRING_VALUE",
 *     },
 *   },
 *   egressNetworkConnectors: [ // NetworkConnectorList
 *     "STRING_VALUE",
 *   ],
 *   cpuConfigurations: [ // CpuConfigurationList
 *     { // CpuConfiguration
 *       architecture: "ARM_64", // required
 *     },
 *   ],
 *   resources: [ // ResourcesList
 *     { // Resources
 *       minimumMemoryInMiB: Number("int"), // required
 *     },
 *   ],
 *   additionalOsCapabilities: [ // CapabilityList
 *     "ALL",
 *   ],
 *   hooks: { // Hooks
 *     port: Number("int"),
 *     microvmHooks: { // MicrovmHooks
 *       run: "DISABLED" || "ENABLED",
 *       runTimeoutInSeconds: Number("int"),
 *       resume: "DISABLED" || "ENABLED",
 *       resumeTimeoutInSeconds: Number("int"),
 *       suspend: "DISABLED" || "ENABLED",
 *       suspendTimeoutInSeconds: Number("int"),
 *       terminate: "DISABLED" || "ENABLED",
 *       terminateTimeoutInSeconds: Number("int"),
 *     },
 *     microvmImageHooks: { // MicrovmImageHooks
 *       ready: "DISABLED" || "ENABLED",
 *       readyTimeoutInSeconds: Number("int"),
 *       validate: "DISABLED" || "ENABLED",
 *       validateTimeoutInSeconds: Number("int"),
 *     },
 *   },
 *   environmentVariables: { // EnvironmentVariableMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   imageIdentifier: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateMicrovmImageCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMicrovmImageResponse
 * //   imageArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   state: "CREATING" || "CREATED" || "CREATE_FAILED" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED" || "DELETED", // required
 * //   latestActiveImageVersion: "STRING_VALUE",
 * //   latestFailedImageVersion: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   baseImageArn: "STRING_VALUE", // required
 * //   baseImageVersion: "STRING_VALUE",
 * //   buildRoleArn: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   codeArtifact: { // CodeArtifact Union: only one key present
 * //     uri: "STRING_VALUE",
 * //   },
 * //   logging: { // Logging Union: only one key present
 * //     disabled: {},
 * //     cloudWatch: { // CloudWatchLogging
 * //       logGroup: "STRING_VALUE",
 * //       logStream: "STRING_VALUE",
 * //     },
 * //   },
 * //   egressNetworkConnectors: [ // NetworkConnectorList
 * //     "STRING_VALUE",
 * //   ],
 * //   cpuConfigurations: [ // CpuConfigurationList
 * //     { // CpuConfiguration
 * //       architecture: "ARM_64", // required
 * //     },
 * //   ],
 * //   resources: [ // ResourcesList
 * //     { // Resources
 * //       minimumMemoryInMiB: Number("int"), // required
 * //     },
 * //   ],
 * //   additionalOsCapabilities: [ // CapabilityList
 * //     "ALL",
 * //   ],
 * //   hooks: { // Hooks
 * //     port: Number("int"),
 * //     microvmHooks: { // MicrovmHooks
 * //       run: "DISABLED" || "ENABLED",
 * //       runTimeoutInSeconds: Number("int"),
 * //       resume: "DISABLED" || "ENABLED",
 * //       resumeTimeoutInSeconds: Number("int"),
 * //       suspend: "DISABLED" || "ENABLED",
 * //       suspendTimeoutInSeconds: Number("int"),
 * //       terminate: "DISABLED" || "ENABLED",
 * //       terminateTimeoutInSeconds: Number("int"),
 * //     },
 * //     microvmImageHooks: { // MicrovmImageHooks
 * //       ready: "DISABLED" || "ENABLED",
 * //       readyTimeoutInSeconds: Number("int"),
 * //       validate: "DISABLED" || "ENABLED",
 * //       validateTimeoutInSeconds: Number("int"),
 * //     },
 * //   },
 * //   environmentVariables: { // EnvironmentVariableMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   imageVersion: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateMicrovmImageCommandInput - {@link UpdateMicrovmImageCommandInput}
 * @returns {@link UpdateMicrovmImageCommandOutput}
 * @see {@link UpdateMicrovmImageCommandInput} for command's `input` shape.
 * @see {@link UpdateMicrovmImageCommandOutput} for command's `response` shape.
 * @see {@link LambdaMicrovmsClientResolvedConfig | config} for LambdaMicrovmsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry the request later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded a service quota for Lambda MicroVMs.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by the service.</p>
 *
 * @throws {@link LambdaMicrovmsServiceException}
 * <p>Base exception class for all service exceptions from LambdaMicrovms service.</p>
 *
 *
 * @public
 */
export class UpdateMicrovmImageCommand extends $Command
  .classBuilder<
    UpdateMicrovmImageCommandInput,
    UpdateMicrovmImageCommandOutput,
    LambdaMicrovmsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaMicrovmsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LambdaMicrovms", "UpdateMicrovmImage", {})
  .n("LambdaMicrovmsClient", "UpdateMicrovmImageCommand")
  .sc(UpdateMicrovmImage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMicrovmImageRequest;
      output: UpdateMicrovmImageResponse;
    };
    sdk: {
      input: UpdateMicrovmImageCommandInput;
      output: UpdateMicrovmImageCommandOutput;
    };
  };
}
