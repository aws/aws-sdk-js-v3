// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccountBalanceRequest, GetAccountBalanceResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { de_GetAccountBalanceCommand, se_GetAccountBalanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountBalanceCommand}.
 */
export interface GetAccountBalanceCommandInput extends GetAccountBalanceRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountBalanceCommand}.
 */
export interface GetAccountBalanceCommandOutput extends GetAccountBalanceResponse, __MetadataBearer {}

/**
 * <p>The <code>GetAccountBalance</code> operation retrieves the Prepaid HITs balance in your Amazon Mechanical Turk account if you are a Prepaid Requester.
 *             Alternatively, this operation will retrieve the remaining available AWS Billing usage if you have enabled AWS Billing.
 *             Note: If you have enabled AWS Billing and still have a remaining Prepaid HITs balance, this balance can be viewed on the My Account page in the Requester console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetAccountBalanceCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetAccountBalanceCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = {};
 * const command = new GetAccountBalanceCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountBalanceResponse
 * //   AvailableBalance: "STRING_VALUE",
 * //   OnHoldBalance: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccountBalanceCommandInput - {@link GetAccountBalanceCommandInput}
 * @returns {@link GetAccountBalanceCommandOutput}
 * @see {@link GetAccountBalanceCommandInput} for command's `input` shape.
 * @see {@link GetAccountBalanceCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 * @public
 */
export class GetAccountBalanceCommand extends $Command
  .classBuilder<
    GetAccountBalanceCommandInput,
    GetAccountBalanceCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MTurkRequesterServiceV20170117", "GetAccountBalance", {})
  .n("MTurkClient", "GetAccountBalanceCommand")
  .f(void 0, void 0)
  .ser(se_GetAccountBalanceCommand)
  .de(de_GetAccountBalanceCommand)
  .build() {}
