// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListServiceQuotaWarningsRequest, ListServiceQuotaWarningsResponse } from "../models/models_0";
import { ListServiceQuotaWarnings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListServiceQuotaWarningsCommand}.
 */
export interface ListServiceQuotaWarningsCommandInput extends ListServiceQuotaWarningsRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceQuotaWarningsCommand}.
 */
export interface ListServiceQuotaWarningsCommandOutput extends ListServiceQuotaWarningsResponse, __MetadataBearer {}

/**
 * <p>Lists the service quota warnings for the plans that you can access. Region switch creates a warning when the applied quota value in one Region of a plan is lower than the value required for the matching resource in another Region or account in the plan.</p> <p>Returns the warnings for the plans that you own and for plans that are shared with your account through AWS Resource Access Manager (AWS RAM). To return warnings for specific plans, provide a list of plan Amazon Resource Names (ARNs). Region switch ignores any plan ARN that you can't access. If you don't provide any plan ARNs, Region switch returns the warnings for all of your accessible plans.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCRegionSwitchClient, ListServiceQuotaWarningsCommand } from "@aws-sdk/client-arc-region-switch"; // ES Modules import
 * // const { ARCRegionSwitchClient, ListServiceQuotaWarningsCommand } = require("@aws-sdk/client-arc-region-switch"); // CommonJS import
 * // import type { ARCRegionSwitchClientConfig } from "@aws-sdk/client-arc-region-switch";
 * const config = {}; // type is ARCRegionSwitchClientConfig
 * const client = new ARCRegionSwitchClient(config);
 * const input = { // ListServiceQuotaWarningsRequest
 *   planArns: [ // PlanArnList
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceQuotaWarningsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceQuotaWarningsResponse
 * //   serviceQuotaWarningSummaries: [ // ServiceQuotaWarningSummaryList // required
 * //     { // ServiceQuotaWarningSummary
 * //       accountId: "STRING_VALUE", // required
 * //       quotaRegion: "STRING_VALUE", // required
 * //       serviceCode: "STRING_VALUE",
 * //       quotaCode: "STRING_VALUE",
 * //       quotaName: "STRING_VALUE",
 * //       status: "pending" || "denied" || "insufficientPermissions" || "maxRegionSwitchRequestsExceeded" || "maxAccountRequestsExceeded", // required
 * //       planArn: "STRING_VALUE", // required
 * //       requestId: "STRING_VALUE",
 * //       caseId: "STRING_VALUE",
 * //       warningMessage: "STRING_VALUE",
 * //       lastCheckedAt: new Date("TIMESTAMP"),
 * //       warningCreatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceQuotaWarningsCommandInput - {@link ListServiceQuotaWarningsCommandInput}
 * @returns {@link ListServiceQuotaWarningsCommandOutput}
 * @see {@link ListServiceQuotaWarningsCommandInput} for command's `input` shape.
 * @see {@link ListServiceQuotaWarningsCommandOutput} for command's `response` shape.
 * @see {@link ARCRegionSwitchClientResolvedConfig | config} for ARCRegionSwitchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p> <p>HTTP Status Code: 403</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p> <p>HTTP Status Code: 500</p>
 *
 * @throws {@link ARCRegionSwitchServiceException}
 * <p>Base exception class for all service exceptions from ARCRegionSwitch service.</p>
 *
 *
 * @public
 */
export class ListServiceQuotaWarningsCommand extends command<ListServiceQuotaWarningsCommandInput, ListServiceQuotaWarningsCommandOutput>(
  _ep0,
  _mw0,
  "ListServiceQuotaWarnings",
  ListServiceQuotaWarnings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceQuotaWarningsRequest;
      output: ListServiceQuotaWarningsResponse;
    };
    sdk: {
      input: ListServiceQuotaWarningsCommandInput;
      output: ListServiceQuotaWarningsCommandOutput;
    };
  };
}
