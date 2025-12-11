// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import type { GetMasterAccountRequest, GetMasterAccountResponse } from "../models/models_0";
import { GetMasterAccount } from "../schemas/schemas_0";

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
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "GetMasterAccount", {})
  .n("GuardDutyClient", "GetMasterAccountCommand")
  .sc(GetMasterAccount)
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
