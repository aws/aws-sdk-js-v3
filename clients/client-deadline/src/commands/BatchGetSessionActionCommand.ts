// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetSessionActionRequest, BatchGetSessionActionResponse } from "../models/models_0";
import { BatchGetSessionAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetSessionActionCommand}.
 */
export interface BatchGetSessionActionCommandInput extends BatchGetSessionActionRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetSessionActionCommand}.
 */
export interface BatchGetSessionActionCommandOutput extends BatchGetSessionActionResponse, __MetadataBearer {}

/**
 * <p>Retrieves multiple session actions in a single request. This is a batch version of the <code>GetSessionAction</code> API.</p> <p>The result of getting each session action is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, BatchGetSessionActionCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, BatchGetSessionActionCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // BatchGetSessionActionRequest
 *   identifiers: [ // BatchGetSessionActionIdentifiers // required
 *     { // BatchGetSessionActionIdentifier
 *       farmId: "STRING_VALUE", // required
 *       queueId: "STRING_VALUE", // required
 *       jobId: "STRING_VALUE", // required
 *       sessionActionId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchGetSessionActionCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetSessionActionResponse
 * //   sessionActions: [ // BatchGetSessionActionItems // required
 * //     { // BatchGetSessionActionItem
 * //       farmId: "STRING_VALUE", // required
 * //       queueId: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       sessionActionId: "STRING_VALUE", // required
 * //       status: "ASSIGNED" || "RUNNING" || "CANCELING" || "SUCCEEDED" || "FAILED" || "INTERRUPTED" || "CANCELED" || "NEVER_ATTEMPTED" || "SCHEDULED" || "RECLAIMING" || "RECLAIMED", // required
 * //       startedAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //       workerUpdatedAt: new Date("TIMESTAMP"),
 * //       progressPercent: Number("float"),
 * //       manifests: [ // TaskRunManifestPropertiesListResponse
 * //         { // TaskRunManifestPropertiesResponse
 * //           outputManifestPath: "STRING_VALUE",
 * //           outputManifestHash: "STRING_VALUE",
 * //         },
 * //       ],
 * //       sessionId: "STRING_VALUE", // required
 * //       processExitCode: Number("int"),
 * //       progressMessage: "STRING_VALUE",
 * //       acquiredLimits: [ // AcquiredLimits
 * //         { // AcquiredLimit
 * //           limitId: "STRING_VALUE", // required
 * //           count: Number("int"), // required
 * //         },
 * //       ],
 * //       definition: { // SessionActionDefinition Union: only one key present
 * //         envEnter: { // EnvironmentEnterSessionActionDefinition
 * //           environmentId: "STRING_VALUE", // required
 * //         },
 * //         envExit: { // EnvironmentExitSessionActionDefinition
 * //           environmentId: "STRING_VALUE", // required
 * //         },
 * //         taskRun: { // TaskRunSessionActionDefinition
 * //           taskId: "STRING_VALUE",
 * //           stepId: "STRING_VALUE", // required
 * //           parameters: { // TaskParameters // required
 * //             "<keys>": { // TaskParameterValue Union: only one key present
 * //               int: "STRING_VALUE",
 * //               float: "STRING_VALUE",
 * //               string: "STRING_VALUE",
 * //               path: "STRING_VALUE",
 * //               chunkInt: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         syncInputJobAttachments: { // SyncInputJobAttachmentsSessionActionDefinition
 * //           stepId: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   errors: [ // BatchGetSessionActionErrors // required
 * //     { // BatchGetSessionActionError
 * //       farmId: "STRING_VALUE", // required
 * //       queueId: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       sessionActionId: "STRING_VALUE", // required
 * //       code: "InternalServerErrorException" || "ResourceNotFoundException" || "ValidationException", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetSessionActionCommandInput - {@link BatchGetSessionActionCommandInput}
 * @returns {@link BatchGetSessionActionCommandOutput}
 * @see {@link BatchGetSessionActionCommandInput} for command's `input` shape.
 * @see {@link BatchGetSessionActionCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @example Get multiple session actions in a single request
 * ```javascript
 * //
 * const input = {
 *   identifiers: [
 *     {
 *       farmId: "farm-1234567890abcdef1234567890abcdef",
 *       jobId: "job-1234567890abcdef1234567890abcdef",
 *       queueId: "queue-1234567890abcdef1234567890abcdef",
 *       sessionActionId: "sessionaction-1234567890abcdef1234567890abcdef-0"
 *     },
 *     {
 *       farmId: "farm-1234567890abcdef1234567890abcdef",
 *       jobId: "job-1234567890abcdef1234567890abcdef",
 *       queueId: "queue-1234567890abcdef1234567890abcdef",
 *       sessionActionId: "sessionaction-1234567890abcdef1234567890abcdef-1"
 *     }
 *   ]
 * };
 * const command = new BatchGetSessionActionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class BatchGetSessionActionCommand extends $Command
  .classBuilder<
    BatchGetSessionActionCommandInput,
    BatchGetSessionActionCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "BatchGetSessionAction", {})
  .n("DeadlineClient", "BatchGetSessionActionCommand")
  .sc(BatchGetSessionAction$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetSessionActionRequest;
      output: BatchGetSessionActionResponse;
    };
    sdk: {
      input: BatchGetSessionActionCommandInput;
      output: BatchGetSessionActionCommandOutput;
    };
  };
}
