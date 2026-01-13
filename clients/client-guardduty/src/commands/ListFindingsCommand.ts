// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import type { ListFindingsRequest, ListFindingsResponse } from "../models/models_1";
import { ListFindings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFindingsCommand}.
 */
export interface ListFindingsCommandInput extends ListFindingsRequest {}
/**
 * @public
 *
 * The output of {@link ListFindingsCommand}.
 */
export interface ListFindingsCommandOutput extends ListFindingsResponse, __MetadataBearer {}

/**
 * <p>Lists GuardDuty findings for the specified detector ID.</p>
 *          <p>There might be regional differences because some flags might not be available in all the Regions where GuardDuty
 *       is currently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListFindingsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListFindingsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // ListFindingsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   FindingCriteria: { // FindingCriteria
 *     Criterion: { // Criterion
 *       "<keys>": { // Condition
 *         Eq: [ // Eq
 *           "STRING_VALUE",
 *         ],
 *         Neq: [ // Neq
 *           "STRING_VALUE",
 *         ],
 *         Gt: Number("int"),
 *         Gte: Number("int"),
 *         Lt: Number("int"),
 *         Lte: Number("int"),
 *         Equals: [ // Equals
 *           "STRING_VALUE",
 *         ],
 *         NotEquals: [ // NotEquals
 *           "STRING_VALUE",
 *         ],
 *         GreaterThan: Number("long"),
 *         GreaterThanOrEqual: Number("long"),
 *         LessThan: Number("long"),
 *         LessThanOrEqual: Number("long"),
 *         Matches: [ // Matches
 *           "STRING_VALUE",
 *         ],
 *         NotMatches: [ // NotMatches
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   SortCriteria: { // SortCriteria
 *     AttributeName: "STRING_VALUE",
 *     OrderBy: "ASC" || "DESC",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFindingsCommand(input);
 * const response = await client.send(command);
 * // { // ListFindingsResponse
 * //   FindingIds: [ // FindingIds // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFindingsCommandInput - {@link ListFindingsCommandInput}
 * @returns {@link ListFindingsCommandOutput}
 * @see {@link ListFindingsCommandInput} for command's `input` shape.
 * @see {@link ListFindingsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 *
 * @public
 */
export class ListFindingsCommand extends $Command
  .classBuilder<
    ListFindingsCommandInput,
    ListFindingsCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "ListFindings", {})
  .n("GuardDutyClient", "ListFindingsCommand")
  .sc(ListFindings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFindingsRequest;
      output: ListFindingsResponse;
    };
    sdk: {
      input: ListFindingsCommandInput;
      output: ListFindingsCommandOutput;
    };
  };
}
