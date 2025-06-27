// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { ListIPSetsRequest, ListIPSetsResponse } from "../models/models_1";
import { de_ListIPSetsCommand, se_ListIPSetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIPSetsCommand}.
 */
export interface ListIPSetsCommandInput extends ListIPSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListIPSetsCommand}.
 */
export interface ListIPSetsCommandOutput extends ListIPSetsResponse, __MetadataBearer {}

/**
 * <p>Lists the IPSets of the GuardDuty service specified by the detector ID. If you use this
 *       operation from a member account, the IPSets returned are the IPSets from the associated
 *       administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListIPSetsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListIPSetsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // ListIPSetsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListIPSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListIPSetsResponse
 * //   IpSetIds: [ // IpSetIds // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIPSetsCommandInput - {@link ListIPSetsCommandInput}
 * @returns {@link ListIPSetsCommandOutput}
 * @see {@link ListIPSetsCommandInput} for command's `input` shape.
 * @see {@link ListIPSetsCommandOutput} for command's `response` shape.
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
export class ListIPSetsCommand extends $Command
  .classBuilder<
    ListIPSetsCommandInput,
    ListIPSetsCommandOutput,
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
  .s("GuardDutyAPIService", "ListIPSets", {})
  .n("GuardDutyClient", "ListIPSetsCommand")
  .f(void 0, void 0)
  .ser(se_ListIPSetsCommand)
  .de(de_ListIPSetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIPSetsRequest;
      output: ListIPSetsResponse;
    };
    sdk: {
      input: ListIPSetsCommandInput;
      output: ListIPSetsCommandOutput;
    };
  };
}
