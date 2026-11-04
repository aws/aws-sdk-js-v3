// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetServiceSyncBlockerSummaryInput, GetServiceSyncBlockerSummaryOutput } from "../models/models_0";
import { GetServiceSyncBlockerSummary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetServiceSyncBlockerSummaryCommand}.
 */
export interface GetServiceSyncBlockerSummaryCommandInput extends GetServiceSyncBlockerSummaryInput {}
/**
 * @public
 *
 * The output of {@link GetServiceSyncBlockerSummaryCommand}.
 */
export interface GetServiceSyncBlockerSummaryCommandOutput extends GetServiceSyncBlockerSummaryOutput, __MetadataBearer {}

/**
 * Get detailed data for the service sync blocker summary.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetServiceSyncBlockerSummaryCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetServiceSyncBlockerSummaryCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // GetServiceSyncBlockerSummaryInput
 *   serviceName: "STRING_VALUE", // required
 *   serviceInstanceName: "STRING_VALUE",
 * };
 * const command = new GetServiceSyncBlockerSummaryCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceSyncBlockerSummaryOutput
 * //   serviceSyncBlockerSummary: { // ServiceSyncBlockerSummary
 * //     serviceName: "STRING_VALUE", // required
 * //     serviceInstanceName: "STRING_VALUE",
 * //     latestBlockers: [ // LatestSyncBlockers
 * //       { // SyncBlocker
 * //         id: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         status: "STRING_VALUE", // required
 * //         createdReason: "STRING_VALUE", // required
 * //         createdAt: new Date("TIMESTAMP"), // required
 * //         contexts: [ // SyncBlockerContexts
 * //           { // SyncBlockerContext
 * //             key: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         resolvedReason: "STRING_VALUE",
 * //         resolvedAt: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetServiceSyncBlockerSummaryCommandInput - {@link GetServiceSyncBlockerSummaryCommandInput}
 * @returns {@link GetServiceSyncBlockerSummaryCommandOutput}
 * @see {@link GetServiceSyncBlockerSummaryCommandInput} for command's `input` shape.
 * @see {@link GetServiceSyncBlockerSummaryCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * There *isn't* sufficient access for performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed to register with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource *wasn't* found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input is invalid or an out-of-range value was supplied for the input parameter.
 *
 * @throws {@link ProtonServiceException}
 *
 * Base exception class for all service exceptions from Proton service.
 *
 * @public
 */
export class GetServiceSyncBlockerSummaryCommand extends command<GetServiceSyncBlockerSummaryCommandInput, GetServiceSyncBlockerSummaryCommandOutput>(
  _ep0,
  _mw0,
  "GetServiceSyncBlockerSummary",
  GetServiceSyncBlockerSummary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetServiceSyncBlockerSummaryInput;
      output: GetServiceSyncBlockerSummaryOutput;
    };
    sdk: {
      input: GetServiceSyncBlockerSummaryCommandInput;
      output: GetServiceSyncBlockerSummaryCommandOutput;
    };
  };
}
