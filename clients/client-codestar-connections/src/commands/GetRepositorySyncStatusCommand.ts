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
import { GetRepositorySyncStatusInput, GetRepositorySyncStatusOutput } from "../models/models_0";
import { de_GetRepositorySyncStatusCommand, se_GetRepositorySyncStatusCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRepositorySyncStatusCommand}.
 */
export interface GetRepositorySyncStatusCommandInput extends GetRepositorySyncStatusInput {}
/**
 * @public
 *
 * The output of {@link GetRepositorySyncStatusCommand}.
 */
export interface GetRepositorySyncStatusCommandOutput extends GetRepositorySyncStatusOutput, __MetadataBearer {}

/**
 * <p>Returns details about the sync status for a repository. A repository sync uses Git sync
 *       to push and pull changes from your remote repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, GetRepositorySyncStatusCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, GetRepositorySyncStatusCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * // import type { CodeStarConnectionsClientConfig } from "@aws-sdk/client-codestar-connections";
 * const config = {}; // type is CodeStarConnectionsClientConfig
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // GetRepositorySyncStatusInput
 *   Branch: "STRING_VALUE", // required
 *   RepositoryLinkId: "STRING_VALUE", // required
 *   SyncType: "CFN_STACK_SYNC", // required
 * };
 * const command = new GetRepositorySyncStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetRepositorySyncStatusOutput
 * //   LatestSync: { // RepositorySyncAttempt
 * //     StartedAt: new Date("TIMESTAMP"), // required
 * //     Status: "FAILED" || "INITIATED" || "IN_PROGRESS" || "SUCCEEDED" || "QUEUED", // required
 * //     Events: [ // RepositorySyncEventList // required
 * //       { // RepositorySyncEvent
 * //         Event: "STRING_VALUE", // required
 * //         ExternalId: "STRING_VALUE",
 * //         Time: new Date("TIMESTAMP"), // required
 * //         Type: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRepositorySyncStatusCommandInput - {@link GetRepositorySyncStatusCommandInput}
 * @returns {@link GetRepositorySyncStatusCommandOutput}
 * @see {@link GetRepositorySyncStatusCommandInput} for command's `input` shape.
 * @see {@link GetRepositorySyncStatusCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link CodeStarConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeStarConnections service.</p>
 *
 *
 * @public
 */
export class GetRepositorySyncStatusCommand extends $Command
  .classBuilder<
    GetRepositorySyncStatusCommandInput,
    GetRepositorySyncStatusCommandOutput,
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
  .s("CodeStar_connections_20191201", "GetRepositorySyncStatus", {})
  .n("CodeStarConnectionsClient", "GetRepositorySyncStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetRepositorySyncStatusCommand)
  .de(de_GetRepositorySyncStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRepositorySyncStatusInput;
      output: GetRepositorySyncStatusOutput;
    };
    sdk: {
      input: GetRepositorySyncStatusCommandInput;
      output: GetRepositorySyncStatusCommandOutput;
    };
  };
}
