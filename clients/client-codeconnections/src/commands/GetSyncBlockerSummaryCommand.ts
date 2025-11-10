// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeConnectionsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeConnectionsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSyncBlockerSummaryInput, GetSyncBlockerSummaryOutput } from "../models/models_0";
import { GetSyncBlockerSummary } from "../schemas/schemas_0";

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
 * import { CodeConnectionsClient, GetSyncBlockerSummaryCommand } from "@aws-sdk/client-codeconnections"; // ES Modules import
 * // const { CodeConnectionsClient, GetSyncBlockerSummaryCommand } = require("@aws-sdk/client-codeconnections"); // CommonJS import
 * // import type { CodeConnectionsClientConfig } from "@aws-sdk/client-codeconnections";
 * const config = {}; // type is CodeConnectionsClientConfig
 * const client = new CodeConnectionsClient(config);
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link CodeConnectionsServiceException}
 * <p>Base exception class for all service exceptions from CodeConnections service.</p>
 *
 *
 * @public
 */
export class GetSyncBlockerSummaryCommand extends $Command
  .classBuilder<
    GetSyncBlockerSummaryCommandInput,
    GetSyncBlockerSummaryCommandOutput,
    CodeConnectionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeConnectionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeConnections_20231201", "GetSyncBlockerSummary", {})
  .n("CodeConnectionsClient", "GetSyncBlockerSummaryCommand")
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
