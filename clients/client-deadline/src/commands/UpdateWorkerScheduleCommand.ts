// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateWorkerScheduleRequest,
  UpdateWorkerScheduleRequestFilterSensitiveLog,
  UpdateWorkerScheduleResponse,
  UpdateWorkerScheduleResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateWorkerScheduleCommand, se_UpdateWorkerScheduleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkerScheduleCommand}.
 */
export interface UpdateWorkerScheduleCommandInput extends UpdateWorkerScheduleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkerScheduleCommand}.
 */
export interface UpdateWorkerScheduleCommandOutput extends UpdateWorkerScheduleResponse, __MetadataBearer {}

/**
 * <p>Updates the schedule for a worker.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, UpdateWorkerScheduleCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, UpdateWorkerScheduleCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // UpdateWorkerScheduleRequest
 *   farmId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 *   workerId: "STRING_VALUE", // required
 *   updatedSessionActions: { // UpdatedSessionActions
 *     "<keys>": { // UpdatedSessionActionInfo
 *       completedStatus: "SUCCEEDED" || "FAILED" || "INTERRUPTED" || "CANCELED" || "NEVER_ATTEMPTED",
 *       processExitCode: Number("int"),
 *       progressMessage: "STRING_VALUE",
 *       startedAt: new Date("TIMESTAMP"),
 *       endedAt: new Date("TIMESTAMP"),
 *       updatedAt: new Date("TIMESTAMP"),
 *       progressPercent: Number("float"),
 *       manifests: [ // TaskRunManifestPropertiesListRequest
 *         { // TaskRunManifestPropertiesRequest
 *           outputManifestPath: "STRING_VALUE",
 *           outputManifestHash: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateWorkerScheduleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkerScheduleResponse
 * //   assignedSessions: { // AssignedSessions // required
 * //     "<keys>": { // AssignedSession
 * //       queueId: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       sessionActions: [ // AssignedSessionActions // required
 * //         { // AssignedSessionAction
 * //           sessionActionId: "STRING_VALUE", // required
 * //           definition: { // AssignedSessionActionDefinition Union: only one key present
 * //             envEnter: { // AssignedEnvironmentEnterSessionActionDefinition
 * //               environmentId: "STRING_VALUE", // required
 * //             },
 * //             envExit: { // AssignedEnvironmentExitSessionActionDefinition
 * //               environmentId: "STRING_VALUE", // required
 * //             },
 * //             taskRun: { // AssignedTaskRunSessionActionDefinition
 * //               taskId: "STRING_VALUE",
 * //               stepId: "STRING_VALUE", // required
 * //               parameters: { // TaskParameters // required
 * //                 "<keys>": { // TaskParameterValue Union: only one key present
 * //                   int: "STRING_VALUE",
 * //                   float: "STRING_VALUE",
 * //                   string: "STRING_VALUE",
 * //                   path: "STRING_VALUE",
 * //                   chunkInt: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //             syncInputJobAttachments: { // AssignedSyncInputJobAttachmentsSessionActionDefinition
 * //               stepId: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       logConfiguration: { // LogConfiguration
 * //         logDriver: "STRING_VALUE", // required
 * //         options: { // LogOptions
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         parameters: { // LogParameters
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         error: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   cancelSessionActions: { // CancelSessionActions // required
 * //     "<keys>": [ // SessionActionIdList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   desiredWorkerStatus: "STOPPED",
 * //   updateIntervalSeconds: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param UpdateWorkerScheduleCommandInput - {@link UpdateWorkerScheduleCommandInput}
 * @returns {@link UpdateWorkerScheduleCommandOutput}
 * @see {@link UpdateWorkerScheduleCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkerScheduleCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *          than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class UpdateWorkerScheduleCommand extends $Command
  .classBuilder<
    UpdateWorkerScheduleCommandInput,
    UpdateWorkerScheduleCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "UpdateWorkerSchedule", {})
  .n("DeadlineClient", "UpdateWorkerScheduleCommand")
  .f(UpdateWorkerScheduleRequestFilterSensitiveLog, UpdateWorkerScheduleResponseFilterSensitiveLog)
  .ser(se_UpdateWorkerScheduleCommand)
  .de(de_UpdateWorkerScheduleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkerScheduleRequest;
      output: UpdateWorkerScheduleResponse;
    };
    sdk: {
      input: UpdateWorkerScheduleCommandInput;
      output: UpdateWorkerScheduleCommandOutput;
    };
  };
}
