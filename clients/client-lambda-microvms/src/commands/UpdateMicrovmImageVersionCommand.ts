// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateMicrovmImageVersionRequest, UpdateMicrovmImageVersionResponse } from "../models/models_0";
import { UpdateMicrovmImageVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateMicrovmImageVersionCommand}.
 */
export interface UpdateMicrovmImageVersionCommandInput extends UpdateMicrovmImageVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMicrovmImageVersionCommand}.
 */
export interface UpdateMicrovmImageVersionCommandOutput extends UpdateMicrovmImageVersionResponse, __MetadataBearer {}

/**
 * <p>Updates the status of a specific MicroVM image version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, UpdateMicrovmImageVersionCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, UpdateMicrovmImageVersionCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // UpdateMicrovmImageVersionRequest
 *   imageIdentifier: "STRING_VALUE", // required
 *   imageVersion: "STRING_VALUE", // required
 *   status: "ACTIVE" || "INACTIVE", // required
 * };
 * const command = new UpdateMicrovmImageVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMicrovmImageVersionResponse
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
 * //   imageArn: "STRING_VALUE", // required
 * //   imageVersion: "STRING_VALUE", // required
 * //   state: "PENDING" || "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "DELETING" || "DELETED" || "DELETE_FAILED", // required
 * //   status: "ACTIVE" || "INACTIVE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   stateReason: "STRING_VALUE",
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateMicrovmImageVersionCommandInput - {@link UpdateMicrovmImageVersionCommandInput}
 * @returns {@link UpdateMicrovmImageVersionCommandOutput}
 * @see {@link UpdateMicrovmImageVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateMicrovmImageVersionCommandOutput} for command's `response` shape.
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
export class UpdateMicrovmImageVersionCommand extends command<UpdateMicrovmImageVersionCommandInput, UpdateMicrovmImageVersionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateMicrovmImageVersion",
  UpdateMicrovmImageVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMicrovmImageVersionRequest;
      output: UpdateMicrovmImageVersionResponse;
    };
    sdk: {
      input: UpdateMicrovmImageVersionCommandInput;
      output: UpdateMicrovmImageVersionCommandOutput;
    };
  };
}
