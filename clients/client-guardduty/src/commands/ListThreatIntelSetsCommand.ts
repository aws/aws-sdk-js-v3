// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { ListThreatIntelSetsRequest, ListThreatIntelSetsResponse } from "../models/models_1";
import { de_ListThreatIntelSetsCommand, se_ListThreatIntelSetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListThreatIntelSetsCommand}.
 */
export interface ListThreatIntelSetsCommandInput extends ListThreatIntelSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListThreatIntelSetsCommand}.
 */
export interface ListThreatIntelSetsCommandOutput extends ListThreatIntelSetsResponse, __MetadataBearer {}

/**
 * <p>Lists the ThreatIntelSets of the GuardDuty service specified by the detector ID. If you
 *       use this operation from a member account, the ThreatIntelSets associated with the
 *       administrator account are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListThreatIntelSetsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListThreatIntelSetsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // ListThreatIntelSetsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListThreatIntelSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListThreatIntelSetsResponse
 * //   ThreatIntelSetIds: [ // ThreatIntelSetIds // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThreatIntelSetsCommandInput - {@link ListThreatIntelSetsCommandInput}
 * @returns {@link ListThreatIntelSetsCommandOutput}
 * @see {@link ListThreatIntelSetsCommandInput} for command's `input` shape.
 * @see {@link ListThreatIntelSetsCommandOutput} for command's `response` shape.
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
export class ListThreatIntelSetsCommand extends $Command
  .classBuilder<
    ListThreatIntelSetsCommandInput,
    ListThreatIntelSetsCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GuardDutyAPIService", "ListThreatIntelSets", {})
  .n("GuardDutyClient", "ListThreatIntelSetsCommand")
  .f(void 0, void 0)
  .ser(se_ListThreatIntelSetsCommand)
  .de(de_ListThreatIntelSetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThreatIntelSetsRequest;
      output: ListThreatIntelSetsResponse;
    };
    sdk: {
      input: ListThreatIntelSetsCommandInput;
      output: ListThreatIntelSetsCommandOutput;
    };
  };
}
