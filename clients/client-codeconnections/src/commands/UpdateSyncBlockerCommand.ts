// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CodeConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateSyncBlockerInput, UpdateSyncBlockerOutput } from "../models/models_0";
import { UpdateSyncBlocker$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSyncBlockerCommand}.
 */
export interface UpdateSyncBlockerCommandInput extends UpdateSyncBlockerInput {}
/**
 * @public
 *
 * The output of {@link UpdateSyncBlockerCommand}.
 */
export interface UpdateSyncBlockerCommandOutput extends UpdateSyncBlockerOutput, __MetadataBearer {}

/**
 * <p>Allows you to update the status of a sync blocker, resolving the blocker and allowing syncing to continue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeConnectionsClient, UpdateSyncBlockerCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, UpdateSyncBlockerCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
 * const input = { // UpdateSyncBlockerInput
 *   Id: "STRING_VALUE", // required
 *   SyncType: "CFN_STACK_SYNC", // required
 *   ResourceName: "STRING_VALUE", // required
 *   ResolvedReason: "STRING_VALUE", // required
 * };
 * const command = new UpdateSyncBlockerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSyncBlockerOutput
 * //   ResourceName: "STRING_VALUE", // required
 * //   ParentResourceName: "STRING_VALUE",
 * //   SyncBlocker: { // SyncBlocker
 * //     Id: "STRING_VALUE", // required
 * //     Type: "AUTOMATED", // required
 * //     Status: "ACTIVE" || "RESOLVED", // required
 * //     CreatedReason: "STRING_VALUE", // required
 * //     CreatedAt: new Date("TIMESTAMP"), // required
 * //     Contexts: [ // SyncBlockerContextList
 * //       { // SyncBlockerContext
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ResolvedReason: "STRING_VALUE",
 * //     ResolvedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSyncBlockerCommandInput - {@link UpdateSyncBlockerCommandInput}
 * @returns {@link UpdateSyncBlockerCommandOutput}
 * @see {@link UpdateSyncBlockerCommandInput} for command's `input` shape.
 * @see {@link UpdateSyncBlockerCommandOutput} for command's `response` shape.
 * @see {@link CodeConnectionsClientResolvedConfig | config} for CodeConnectionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Received an internal server exception. Try again later.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input is not valid. Verify that the action is typed correctly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found. Verify the connection resource ARN and try again.</p>
 *
 * @throws {@link RetryLatestCommitFailedException} (server fault)
 *  <p>Retrying the latest commit failed. Try again later.</p>
 *
 * @throws {@link SyncBlockerDoesNotExistException} (client fault)
 *  <p>Unable to continue. The sync blocker does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link CodeConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeConnections service.</p>
 *
 *
 * @public
 */
export class UpdateSyncBlockerCommand extends $Command
  .classBuilder<
    UpdateSyncBlockerCommandInput,
    UpdateSyncBlockerCommandOutput,
    CodeConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeConnectionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeConnections_20231201", "UpdateSyncBlocker", {})
  .n("CodeConnectionsClient", "UpdateSyncBlockerCommand")
  .sc(UpdateSyncBlocker$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSyncBlockerInput;
      output: UpdateSyncBlockerOutput;
    };
    sdk: {
      input: UpdateSyncBlockerCommandInput;
      output: UpdateSyncBlockerCommandOutput;
    };
  };
}
