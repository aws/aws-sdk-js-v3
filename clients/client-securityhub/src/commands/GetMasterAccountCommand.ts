// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetMasterAccountRequest, GetMasterAccountResponse } from "../models/models_2";
import { de_GetMasterAccountCommand, se_GetMasterAccountCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

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
 * <p>This method is deprecated. Instead, use <code>GetAdministratorAccount</code>.</p>
 *          <p>The Security Hub console continues to use <code>GetMasterAccount</code>. It will eventually change to use <code>GetAdministratorAccount</code>. Any IAM policies that specifically control access to this function must continue to use <code>GetMasterAccount</code>. You should also add <code>GetAdministratorAccount</code> to your policies to ensure that the correct permissions are in place after the console begins to use <code>GetAdministratorAccount</code>.</p>
 *          <p>Provides the details for the Security Hub administrator account for the current member account.</p>
 *          <p>Can be used by both member accounts that are managed using Organizations and accounts that were
 *          invited manually.</p>
 *
 * @deprecated This API has been deprecated, use GetAdministratorAccount API instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetMasterAccountCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetMasterAccountCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = {};
 * const command = new GetMasterAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetMasterAccountResponse
 * //   Master: { // Invitation
 * //     AccountId: "STRING_VALUE",
 * //     InvitationId: "STRING_VALUE",
 * //     InvitedAt: new Date("TIMESTAMP"),
 * //     MemberStatus: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMasterAccountCommandInput - {@link GetMasterAccountCommandInput}
 * @returns {@link GetMasterAccountCommandOutput}
 * @see {@link GetMasterAccountCommandInput} for command's `input` shape.
 * @see {@link GetMasterAccountCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @public
 */
export class GetMasterAccountCommand extends $Command
  .classBuilder<
    GetMasterAccountCommandInput,
    GetMasterAccountCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "GetMasterAccount", {})
  .n("SecurityHubClient", "GetMasterAccountCommand")
  .f(void 0, void 0)
  .ser(se_GetMasterAccountCommand)
  .de(de_GetMasterAccountCommand)
  .build() {}
