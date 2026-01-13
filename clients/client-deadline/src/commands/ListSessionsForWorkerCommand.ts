// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSessionsForWorkerRequest, ListSessionsForWorkerResponse } from "../models/models_0";
import { ListSessionsForWorker$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSessionsForWorkerCommand}.
 */
export interface ListSessionsForWorkerCommandInput extends ListSessionsForWorkerRequest {}
/**
 * @public
 *
 * The output of {@link ListSessionsForWorkerCommand}.
 */
export interface ListSessionsForWorkerCommandOutput extends ListSessionsForWorkerResponse, __MetadataBearer {}

/**
 * <p>Lists sessions for a worker.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListSessionsForWorkerCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListSessionsForWorkerCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListSessionsForWorkerRequest
 *   farmId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 *   workerId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSessionsForWorkerCommand(input);
 * const response = await client.send(command);
 * // { // ListSessionsForWorkerResponse
 * //   sessions: [ // ListSessionsForWorkerSummaries // required
 * //     { // WorkerSessionSummary
 * //       sessionId: "STRING_VALUE", // required
 * //       queueId: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       startedAt: new Date("TIMESTAMP"), // required
 * //       lifecycleStatus: "STARTED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCEEDED" || "UPDATE_FAILED" || "ENDED", // required
 * //       endedAt: new Date("TIMESTAMP"),
 * //       targetLifecycleStatus: "ENDED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSessionsForWorkerCommandInput - {@link ListSessionsForWorkerCommandInput}
 * @returns {@link ListSessionsForWorkerCommandOutput}
 * @see {@link ListSessionsForWorkerCommandInput} for command's `input` shape.
 * @see {@link ListSessionsForWorkerCommandOutput} for command's `response` shape.
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
export class ListSessionsForWorkerCommand extends $Command
  .classBuilder<
    ListSessionsForWorkerCommandInput,
    ListSessionsForWorkerCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "ListSessionsForWorker", {})
  .n("DeadlineClient", "ListSessionsForWorkerCommand")
  .sc(ListSessionsForWorker$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSessionsForWorkerRequest;
      output: ListSessionsForWorkerResponse;
    };
    sdk: {
      input: ListSessionsForWorkerCommandInput;
      output: ListSessionsForWorkerCommandOutput;
    };
  };
}
