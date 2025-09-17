// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { DeleteInvitationsRequest, DeleteInvitationsResponse } from "../models/models_0";
import { de_DeleteInvitationsCommand, se_DeleteInvitationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInvitationsCommand}.
 */
export interface DeleteInvitationsCommandInput extends DeleteInvitationsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInvitationsCommand}.
 */
export interface DeleteInvitationsCommandOutput extends DeleteInvitationsResponse, __MetadataBearer {}

/**
 * <p>Deletes invitations sent to the current member account by Amazon Web Services accounts specified by
 *       their account IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteInvitationsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteInvitationsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // DeleteInvitationsRequest
 *   AccountIds: [ // AccountIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInvitationsResponse
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
 * @param DeleteInvitationsCommandInput - {@link DeleteInvitationsCommandInput}
 * @returns {@link DeleteInvitationsCommandOutput}
 * @see {@link DeleteInvitationsCommandInput} for command's `input` shape.
 * @see {@link DeleteInvitationsCommandOutput} for command's `response` shape.
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
export class DeleteInvitationsCommand extends $Command
  .classBuilder<
    DeleteInvitationsCommandInput,
    DeleteInvitationsCommandOutput,
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
  .s("GuardDutyAPIService", "DeleteInvitations", {})
  .n("GuardDutyClient", "DeleteInvitationsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteInvitationsCommand)
  .de(de_DeleteInvitationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInvitationsRequest;
      output: DeleteInvitationsResponse;
    };
    sdk: {
      input: DeleteInvitationsCommandInput;
      output: DeleteInvitationsCommandOutput;
    };
  };
}
