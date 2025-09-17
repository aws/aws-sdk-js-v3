// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { ListTrustedEntitySetsRequest, ListTrustedEntitySetsResponse } from "../models/models_1";
import { de_ListTrustedEntitySetsCommand, se_ListTrustedEntitySetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTrustedEntitySetsCommand}.
 */
export interface ListTrustedEntitySetsCommandInput extends ListTrustedEntitySetsRequest {}
/**
 * @public
 *
 * The output of {@link ListTrustedEntitySetsCommand}.
 */
export interface ListTrustedEntitySetsCommandOutput extends ListTrustedEntitySetsResponse, __MetadataBearer {}

/**
 * <p>Lists the trusted entity sets associated with the specified GuardDuty detector ID. If you use this
 *        operation from a member account, the trusted entity sets that are returned as a response, belong to the
 *        administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, ListTrustedEntitySetsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, ListTrustedEntitySetsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // ListTrustedEntitySetsRequest
 *   DetectorId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListTrustedEntitySetsCommand(input);
 * const response = await client.send(command);
 * // { // ListTrustedEntitySetsResponse
 * //   TrustedEntitySetIds: [ // TrustedEntitySetIds // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTrustedEntitySetsCommandInput - {@link ListTrustedEntitySetsCommandInput}
 * @returns {@link ListTrustedEntitySetsCommandOutput}
 * @see {@link ListTrustedEntitySetsCommandInput} for command's `input` shape.
 * @see {@link ListTrustedEntitySetsCommandOutput} for command's `response` shape.
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
export class ListTrustedEntitySetsCommand extends $Command
  .classBuilder<
    ListTrustedEntitySetsCommandInput,
    ListTrustedEntitySetsCommandOutput,
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
  .s("GuardDutyAPIService", "ListTrustedEntitySets", {})
  .n("GuardDutyClient", "ListTrustedEntitySetsCommand")
  .f(void 0, void 0)
  .ser(se_ListTrustedEntitySetsCommand)
  .de(de_ListTrustedEntitySetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTrustedEntitySetsRequest;
      output: ListTrustedEntitySetsResponse;
    };
    sdk: {
      input: ListTrustedEntitySetsCommandInput;
      output: ListTrustedEntitySetsCommandOutput;
    };
  };
}
