// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetServiceSyncBlockerSummaryInput, GetServiceSyncBlockerSummaryOutput } from "../models/models_0";
import {
  de_GetServiceSyncBlockerSummaryCommand,
  se_GetServiceSyncBlockerSummaryCommand,
} from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetServiceSyncBlockerSummaryCommandOutput
  extends GetServiceSyncBlockerSummaryOutput,
    __MetadataBearer {}

/**
 * <p>Get detailed data for the service sync blocker summary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetServiceSyncBlockerSummaryCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetServiceSyncBlockerSummaryCommand } = require("@aws-sdk/client-proton"); // CommonJS import
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
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 * @public
 */
export class GetServiceSyncBlockerSummaryCommand extends $Command
  .classBuilder<
    GetServiceSyncBlockerSummaryCommandInput,
    GetServiceSyncBlockerSummaryCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsProton20200720", "GetServiceSyncBlockerSummary", {})
  .n("ProtonClient", "GetServiceSyncBlockerSummaryCommand")
  .f(void 0, void 0)
  .ser(se_GetServiceSyncBlockerSummaryCommand)
  .de(de_GetServiceSyncBlockerSummaryCommand)
  .build() {}
