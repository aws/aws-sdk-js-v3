// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { GetMasterAccountRequest, GetMasterAccountResponse } from "../models/models_1";
import { de_GetMasterAccountCommand, se_GetMasterAccountCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMasterAccountCommand}.
 */
export interface GetMasterAccountCommandInput extends GetMasterAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetMasterAccountCommand}.
 */
export interface GetMasterAccountCommandOutput extends GetMasterAccountResponse, __MetadataBearer {}

/**
 * <p>Provides the details for the GuardDuty administrator account associated with the current
 *       GuardDuty member account.</p>
 *
 * @deprecated This operation is deprecated, use GetAdministratorAccount instead
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, GetMasterAccountCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, GetMasterAccountCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const input = { // GetMasterAccountRequest
 *   DetectorId: "STRING_VALUE", // required
 * };
 * const command = new GetMasterAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetMasterAccountResponse
 * //   Master: { // Master
 * //     AccountId: "STRING_VALUE",
 * //     InvitationId: "STRING_VALUE",
 * //     RelationshipStatus: "STRING_VALUE",
 * //     InvitedAt: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMasterAccountCommandInput - {@link GetMasterAccountCommandInput}
 * @returns {@link GetMasterAccountCommandOutput}
 * @see {@link GetMasterAccountCommandInput} for command's `input` shape.
 * @see {@link GetMasterAccountCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetMasterAccountCommand extends $Command
  .classBuilder<
    GetMasterAccountCommandInput,
    GetMasterAccountCommandOutput,
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
  .s("GuardDutyAPIService", "GetMasterAccount", {})
  .n("GuardDutyClient", "GetMasterAccountCommand")
  .f(void 0, void 0)
  .ser(se_GetMasterAccountCommand)
  .de(de_GetMasterAccountCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMasterAccountRequest;
      output: GetMasterAccountResponse;
    };
    sdk: {
      input: GetMasterAccountCommandInput;
      output: GetMasterAccountCommandOutput;
    };
  };
}
