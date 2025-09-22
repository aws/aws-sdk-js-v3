// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CodeStarConnectionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodeStarConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSyncBlockerSummaryInput, GetSyncBlockerSummaryOutput } from "../models/models_0";
import { GetSyncBlockerSummary } from "../schemas/schemas_5_Sync";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSyncBlockerSummaryCommand}.
 */
export interface GetSyncBlockerSummaryCommandInput extends GetSyncBlockerSummaryInput {}
/**
 * @public
 *
 * The output of {@link GetSyncBlockerSummaryCommand}.
 */
export interface GetSyncBlockerSummaryCommandOutput extends GetSyncBlockerSummaryOutput, __MetadataBearer {}

/**
 * <p>Returns a list of the most recent sync blockers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarConnectionsClient, GetSyncBlockerSummaryCommand } from "@aws-sdk/client-codestar-connections"; // ES Modules import
 * // const { CodeStarConnectionsClient, GetSyncBlockerSummaryCommand } = require("@aws-sdk/client-codestar-connections"); // CommonJS import
 * // import type { CodeStarConnectionsClientConfig } from "@aws-sdk/client-codestar-connections";
 * const config = {}; // type is CodeStarConnectionsClientConfig
 * const client = new CodeStarConnectionsClient(config);
 * const input = { // GetSyncBlockerSummaryInput
 *   SyncType: "CFN_STACK_SYNC", // required
 *   ResourceName: "STRING_VALUE", // required
 * };
 * const command = new GetSyncBlockerSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetSyncBlockerSummaryOutput
 * //   SyncBlockerSummary: { // SyncBlockerSummary
 * //     ResourceName: "STRING_VALUE", // required
 * //     ParentResourceName: "STRING_VALUE",
 * //     LatestBlockers: [ // LatestSyncBlockerList
 * //       { // SyncBlocker
 * //         Id: "STRING_VALUE", // required
 * //         Type: "AUTOMATED", // required
 * //         Status: "ACTIVE" || "RESOLVED", // required
 * //         CreatedReason: "STRING_VALUE", // required
 * //         CreatedAt: new Date("TIMESTAMP"), // required
 * //         Contexts: [ // SyncBlockerContextList
 * //           { // SyncBlockerContext
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         ResolvedReason: "STRING_VALUE",
 * //         ResolvedAt: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSyncBlockerSummaryCommandInput - {@link GetSyncBlockerSummaryCommandInput}
 * @returns {@link GetSyncBlockerSummaryCommandOutput}
 * @see {@link GetSyncBlockerSummaryCommandInput} for command's `input` shape.
 * @see {@link GetSyncBlockerSummaryCommandOutput} for command's `response` shape.
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
export class GetSyncBlockerSummaryCommand extends $Command
  .classBuilder<
    GetSyncBlockerSummaryCommandInput,
    GetSyncBlockerSummaryCommandOutput,
    CodeStarConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeStarConnectionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeStar_connections_20191201", "GetSyncBlockerSummary", {})
  .n("CodeStarConnectionsClient", "GetSyncBlockerSummaryCommand")
  .sc(GetSyncBlockerSummary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSyncBlockerSummaryInput;
      output: GetSyncBlockerSummaryOutput;
    };
    sdk: {
      input: GetSyncBlockerSummaryCommandInput;
      output: GetSyncBlockerSummaryCommandOutput;
    };
  };
}
