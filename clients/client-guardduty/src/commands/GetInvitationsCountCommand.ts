// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetInvitationsCountRequest, GetInvitationsCountResponse } from "../models/models_1";
import { de_GetInvitationsCountCommand, se_GetInvitationsCountCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInvitationsCountCommand}.
 */
export interface GetInvitationsCountCommandInput extends GetInvitationsCountRequest {}
/**
 * @public
 *
 * The output of {@link GetInvitationsCountCommand}.
 */
export interface GetInvitationsCountCommandOutput extends GetInvitationsCountResponse, __MetadataBearer {}

/**
 * <p>Returns the count of all GuardDuty membership invitations that were sent to the current
 *       member account except the currently accepted invitation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetInvitationsCountCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetInvitationsCountCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = {};
 * const command = new GetInvitationsCountCommand(input);
 * const response = await client.send(command);
 * // { // GetInvitationsCountResponse
 * //   InvitationsCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetInvitationsCountCommandInput - {@link GetInvitationsCountCommandInput}
 * @returns {@link GetInvitationsCountCommandOutput}
 * @see {@link GetInvitationsCountCommandInput} for command's `input` shape.
 * @see {@link GetInvitationsCountCommandOutput} for command's `response` shape.
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
export class GetInvitationsCountCommand extends $Command
  .classBuilder<
    GetInvitationsCountCommandInput,
    GetInvitationsCountCommandOutput,
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
  .s("GuardDutyAPIService", "GetInvitationsCount", {})
  .n("GuardDutyClient", "GetInvitationsCountCommand")
  .f(void 0, void 0)
  .ser(se_GetInvitationsCountCommand)
  .de(de_GetInvitationsCountCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetInvitationsCountResponse;
    };
    sdk: {
      input: GetInvitationsCountCommandInput;
      output: GetInvitationsCountCommandOutput;
    };
  };
}
