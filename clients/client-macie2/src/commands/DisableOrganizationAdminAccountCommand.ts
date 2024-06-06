// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { DisableOrganizationAdminAccountRequest, DisableOrganizationAdminAccountResponse } from "../models/models_0";
import {
  de_DisableOrganizationAdminAccountCommand,
  se_DisableOrganizationAdminAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableOrganizationAdminAccountCommand}.
 */
export interface DisableOrganizationAdminAccountCommandInput extends DisableOrganizationAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link DisableOrganizationAdminAccountCommand}.
 */
export interface DisableOrganizationAdminAccountCommandOutput
  extends DisableOrganizationAdminAccountResponse,
    __MetadataBearer {}

/**
 * <p>Disables an account as the delegated Amazon Macie administrator account for an organization in Organizations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DisableOrganizationAdminAccountCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DisableOrganizationAdminAccountCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // DisableOrganizationAdminAccountRequest
 *   adminAccountId: "STRING_VALUE", // required
 * };
 * const command = new DisableOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableOrganizationAdminAccountCommandInput - {@link DisableOrganizationAdminAccountCommandInput}
 * @returns {@link DisableOrganizationAdminAccountCommandOutput}
 * @see {@link DisableOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DisableOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Provides information about an error that occurred due to a versioning conflict for a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Provides information about an error that occurred due to one or more service quotas for an account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 * @public
 */
export class DisableOrganizationAdminAccountCommand extends $Command
  .classBuilder<
    DisableOrganizationAdminAccountCommandInput,
    DisableOrganizationAdminAccountCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Macie2", "DisableOrganizationAdminAccount", {})
  .n("Macie2Client", "DisableOrganizationAdminAccountCommand")
  .f(void 0, void 0)
  .ser(se_DisableOrganizationAdminAccountCommand)
  .de(de_DisableOrganizationAdminAccountCommand)
  .build() {}
