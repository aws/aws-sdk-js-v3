// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSessionActionRequest, GetSessionActionResponse } from "../models/models_0";
import { GetSessionAction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSessionActionCommand}.
 */
export interface GetSessionActionCommandInput extends GetSessionActionRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionActionCommand}.
 */
export interface GetSessionActionCommandOutput extends GetSessionActionResponse, __MetadataBearer {}

/**
 * <p>Gets a session action for the job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetSessionActionCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetSessionActionCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // GetSessionActionRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   sessionActionId: "STRING_VALUE", // required
 * };
 * const command = new GetSessionActionCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionActionResponse
 * //   sessionActionId: "STRING_VALUE", // required
 * //   status: "ASSIGNED" || "RUNNING" || "CANCELING" || "SUCCEEDED" || "FAILED" || "INTERRUPTED" || "CANCELED" || "NEVER_ATTEMPTED" || "SCHEDULED" || "RECLAIMING" || "RECLAIMED", // required
 * //   startedAt: new Date("TIMESTAMP"),
 * //   endedAt: new Date("TIMESTAMP"),
 * //   workerUpdatedAt: new Date("TIMESTAMP"),
 * //   progressPercent: Number("float"),
 * //   sessionId: "STRING_VALUE", // required
 * //   processExitCode: Number("int"),
 * //   progressMessage: "STRING_VALUE",
 * //   definition: { // SessionActionDefinition Union: only one key present
 * //     envEnter: { // EnvironmentEnterSessionActionDefinition
 * //       environmentId: "STRING_VALUE", // required
 * //     },
 * //     envExit: { // EnvironmentExitSessionActionDefinition
 * //       environmentId: "STRING_VALUE", // required
 * //     },
 * //     taskRun: { // TaskRunSessionActionDefinition
 * //       taskId: "STRING_VALUE",
 * //       stepId: "STRING_VALUE", // required
 * //       parameters: { // TaskParameters // required
 * //         "<keys>": { // TaskParameterValue Union: only one key present
 * //           int: "STRING_VALUE",
 * //           float: "STRING_VALUE",
 * //           string: "STRING_VALUE",
 * //           path: "STRING_VALUE",
 * //           chunkInt: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     syncInputJobAttachments: { // SyncInputJobAttachmentsSessionActionDefinition
 * //       stepId: "STRING_VALUE",
 * //     },
 * //   },
 * //   acquiredLimits: [ // AcquiredLimits
 * //     { // AcquiredLimit
 * //       limitId: "STRING_VALUE", // required
 * //       count: Number("int"), // required
 * //     },
 * //   ],
 * //   manifests: [ // TaskRunManifestPropertiesListResponse
 * //     { // TaskRunManifestPropertiesResponse
 * //       outputManifestPath: "STRING_VALUE",
 * //       outputManifestHash: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSessionActionCommandInput - {@link GetSessionActionCommandInput}
 * @returns {@link GetSessionActionCommandOutput}
 * @see {@link GetSessionActionCommandInput} for command's `input` shape.
 * @see {@link GetSessionActionCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
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
export class GetSessionActionCommand extends $Command
  .classBuilder<
    GetSessionActionCommandInput,
    GetSessionActionCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "GetSessionAction", {})
  .n("DeadlineClient", "GetSessionActionCommand")
  .sc(GetSessionAction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSessionActionRequest;
      output: GetSessionActionResponse;
    };
    sdk: {
      input: GetSessionActionCommandInput;
      output: GetSessionActionCommandOutput;
    };
  };
}
