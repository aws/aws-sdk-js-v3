// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { ListThreatEntitySetsRequest, ListThreatEntitySetsResponse } from "../models/models_1";
import { ListThreatEntitySets } from "../schemas/schemas_51_ListThreatEntitySets";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListThreatEntitySetsCommand}.
 */
export interface ListThreatEntitySetsCommandInput extends ListThreatEntitySetsRequest {}
/**
 * @public
 *
 * The output of {@link ListThreatEntitySetsCommand}.
 */
export interface ListThreatEntitySetsCommandOutput extends ListThreatEntitySetsResponse, __MetadataBearer {}

/**
 * <p>Lists the threat entity sets associated with the specified GuardDuty detector ID. If you use this
 *       operation from a member account, the threat entity sets that are returned as a response, belong to the
 *       administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListThreatEntitySetsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListThreatEntitySetsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // ListThreatEntitySetsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListThreatEntitySetsCommand(input);
 * const response = await client.send(command);
 * // { // ListThreatEntitySetsResponse
 * //   ThreatEntitySetIds: [ // ThreatEntitySetIds // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListThreatEntitySetsCommandInput - {@link ListThreatEntitySetsCommandInput}
 * @returns {@link ListThreatEntitySetsCommandOutput}
 * @see {@link ListThreatEntitySetsCommandInput} for command's `input` shape.
 * @see {@link ListThreatEntitySetsCommandOutput} for command's `response` shape.
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
export class ListThreatEntitySetsCommand extends $Command
  .classBuilder<
    ListThreatEntitySetsCommandInput,
    ListThreatEntitySetsCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "ListThreatEntitySets", {})
  .n("GuardDutyClient", "ListThreatEntitySetsCommand")
  .sc(ListThreatEntitySets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListThreatEntitySetsRequest;
      output: ListThreatEntitySetsResponse;
    };
    sdk: {
      input: ListThreatEntitySetsCommandInput;
      output: ListThreatEntitySetsCommandOutput;
    };
  };
}
