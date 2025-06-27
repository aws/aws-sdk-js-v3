// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSyncBlockerInput, UpdateSyncBlockerOutput } from "../models/models_0";
import { de_UpdateSyncBlockerCommand, se_UpdateSyncBlockerCommand } from "../protocols/Aws_json1_0";

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
 * import { CodeStarConnectionsClient, UpdateSyncBlockerCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, UpdateSyncBlockerCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * const client = new CodeStarConnectionsClient(config);
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
 * @see {@link CodeStarConnectionsClientResolvedConfig | config} for CodeStarConnectionsClient's `config` shape.
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
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 *
 * @public
 */
export class UpdateSyncBlockerCommand extends $Command
  .classBuilder<
    UpdateSyncBlockerCommandInput,
    UpdateSyncBlockerCommandOutput,
    CodeStarConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeStarConnectionsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeStar_connections_20191201", "UpdateSyncBlocker", {})
  .n("CodeStarConnectionsClient", "UpdateSyncBlockerCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSyncBlockerCommand)
  .de(de_UpdateSyncBlockerCommand)
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
