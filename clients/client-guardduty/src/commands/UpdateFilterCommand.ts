// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { UpdateFilterRequest, UpdateFilterResponse } from "../models/models_1";
import { UpdateFilter } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateFilterCommand}.
 */
export interface UpdateFilterCommandInput extends UpdateFilterRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFilterCommand}.
 */
export interface UpdateFilterCommandOutput extends UpdateFilterResponse, __MetadataBearer {}

/**
 * <p>Updates the filter specified by the filter name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, UpdateFilterCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, UpdateFilterCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // UpdateFilterRequest
 *   DetectorId: "STRING_VALUE", // required
 *   FilterName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Action: "NOOP" || "ARCHIVE",
 *   Rank: Number("int"),
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
 * };
 * const command = new UpdateFilterCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFilterResponse
 * //   Name: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateFilterCommandInput - {@link UpdateFilterCommandInput}
 * @returns {@link UpdateFilterCommandOutput}
 * @see {@link UpdateFilterCommandInput} for command's `input` shape.
 * @see {@link UpdateFilterCommandOutput} for command's `response` shape.
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
export class UpdateFilterCommand extends $Command
  .classBuilder<
    UpdateFilterCommandInput,
    UpdateFilterCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "UpdateFilter", {})
  .n("GuardDutyClient", "UpdateFilterCommand")
  .sc(UpdateFilter)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFilterRequest;
      output: UpdateFilterResponse;
    };
    sdk: {
      input: UpdateFilterCommandInput;
      output: UpdateFilterCommandOutput;
    };
  };
}
