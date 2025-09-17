// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListSessionActionsRequest,
  ListSessionActionsResponse,
  ListSessionActionsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListSessionActionsCommand, se_ListSessionActionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSessionActionsCommand}.
 */
export interface ListSessionActionsCommandInput extends ListSessionActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSessionActionsCommand}.
 */
export interface ListSessionActionsCommandOutput extends ListSessionActionsResponse, __MetadataBearer {}

/**
 * <p>Lists session actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListSessionActionsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListSessionActionsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListSessionActionsRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE",
 *   taskId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSessionActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSessionActionsResponse
 * //   sessionActions: [ // SessionActionSummaries // required
 * //     { // SessionActionSummary
 * //       sessionActionId: "STRING_VALUE", // required
 * //       status: "ASSIGNED" || "RUNNING" || "CANCELING" || "SUCCEEDED" || "FAILED" || "INTERRUPTED" || "CANCELED" || "NEVER_ATTEMPTED" || "SCHEDULED" || "RECLAIMING" || "RECLAIMED", // required
 * //       startedAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //       workerUpdatedAt: new Date("TIMESTAMP"),
 * //       progressPercent: Number("float"),
 * //       definition: { // SessionActionDefinitionSummary Union: only one key present
 * //         envEnter: { // EnvironmentEnterSessionActionDefinitionSummary
 * //           environmentId: "STRING_VALUE", // required
 * //         },
 * //         envExit: { // EnvironmentExitSessionActionDefinitionSummary
 * //           environmentId: "STRING_VALUE", // required
 * //         },
 * //         taskRun: { // TaskRunSessionActionDefinitionSummary
 * //           taskId: "STRING_VALUE",
 * //           stepId: "STRING_VALUE", // required
 * //           parameters: { // TaskParameters
 * //             "<keys>": { // TaskParameterValue Union: only one key present
 * //               int: "STRING_VALUE",
 * //               float: "STRING_VALUE",
 * //               string: "STRING_VALUE",
 * //               path: "STRING_VALUE",
 * //               chunkInt: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         syncInputJobAttachments: { // SyncInputJobAttachmentsSessionActionDefinitionSummary
 * //           stepId: "STRING_VALUE",
 * //         },
 * //       },
 * //       manifests: [ // TaskRunManifestPropertiesListResponse
 * //         { // TaskRunManifestPropertiesResponse
 * //           outputManifestPath: "STRING_VALUE",
 * //           outputManifestHash: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSessionActionsCommandInput - {@link ListSessionActionsCommandInput}
 * @returns {@link ListSessionActionsCommandOutput}
 * @see {@link ListSessionActionsCommandInput} for command's `input` shape.
 * @see {@link ListSessionActionsCommandOutput} for command's `response` shape.
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
export class ListSessionActionsCommand extends $Command
  .classBuilder<
    ListSessionActionsCommandInput,
    ListSessionActionsCommandOutput,
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
  .s("Deadline", "ListSessionActions", {})
  .n("DeadlineClient", "ListSessionActionsCommand")
  .f(void 0, ListSessionActionsResponseFilterSensitiveLog)
  .ser(se_ListSessionActionsCommand)
  .de(de_ListSessionActionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSessionActionsRequest;
      output: ListSessionActionsResponse;
    };
    sdk: {
      input: ListSessionActionsCommandInput;
      output: ListSessionActionsCommandOutput;
    };
  };
}
