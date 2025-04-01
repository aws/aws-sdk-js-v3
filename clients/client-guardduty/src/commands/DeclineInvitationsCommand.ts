// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DeclineInvitationsRequest, DeclineInvitationsResponse } from "../models/models_0";
import { de_DeclineInvitationsCommand, se_DeclineInvitationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeclineInvitationsCommand}.
 */
export interface DeclineInvitationsCommandInput extends DeclineInvitationsRequest {}
/**
 * @public
 *
 * The output of {@link DeclineInvitationsCommand}.
 */
export interface DeclineInvitationsCommandOutput extends DeclineInvitationsResponse, __MetadataBearer {}

/**
 * <p>Declines invitations sent to the current member account by Amazon Web Services accounts specified by
 *       their account IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeclineInvitationsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeclineInvitationsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // DeclineInvitationsRequest
 *   AccountIds: [ // AccountIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeclineInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // DeclineInvitationsResponse
 * //   UnprocessedAccounts: [ // UnprocessedAccounts // required
 * //     { // UnprocessedAccount
 * //       AccountId: "STRING_VALUE", // required
 * //       Result: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeclineInvitationsCommandInput - {@link DeclineInvitationsCommandInput}
 * @returns {@link DeclineInvitationsCommandOutput}
 * @see {@link DeclineInvitationsCommandInput} for command's `input` shape.
 * @see {@link DeclineInvitationsCommandOutput} for command's `response` shape.
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
export class DeclineInvitationsCommand extends $Command
  .classBuilder<
    DeclineInvitationsCommandInput,
    DeclineInvitationsCommandOutput,
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
  .s("GuardDutyAPIService", "DeclineInvitations", {})
  .n("GuardDutyClient", "DeclineInvitationsCommand")
  .f(void 0, void 0)
  .ser(se_DeclineInvitationsCommand)
  .de(de_DeclineInvitationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeclineInvitationsRequest;
      output: DeclineInvitationsResponse;
    };
    sdk: {
      input: DeclineInvitationsCommandInput;
      output: DeclineInvitationsCommandOutput;
    };
  };
}
