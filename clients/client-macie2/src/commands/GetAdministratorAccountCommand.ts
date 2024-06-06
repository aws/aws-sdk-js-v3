// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { GetAdministratorAccountRequest, GetAdministratorAccountResponse } from "../models/models_0";
import { de_GetAdministratorAccountCommand, se_GetAdministratorAccountCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAdministratorAccountCommand}.
 */
export interface GetAdministratorAccountCommandInput extends GetAdministratorAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetAdministratorAccountCommand}.
 */
export interface GetAdministratorAccountCommandOutput extends GetAdministratorAccountResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the Amazon Macie administrator account for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetAdministratorAccountCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetAdministratorAccountCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = {};
 * const command = new GetAdministratorAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetAdministratorAccountResponse
 * //   administrator: { // Invitation
 * //     accountId: "STRING_VALUE",
 * //     invitationId: "STRING_VALUE",
 * //     invitedAt: new Date("TIMESTAMP"),
 * //     relationshipStatus: "Enabled" || "Paused" || "Invited" || "Created" || "Removed" || "Resigned" || "EmailVerificationInProgress" || "EmailVerificationFailed" || "RegionDisabled" || "AccountSuspended",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAdministratorAccountCommandInput - {@link GetAdministratorAccountCommandInput}
 * @returns {@link GetAdministratorAccountCommandOutput}
 * @see {@link GetAdministratorAccountCommandInput} for command's `input` shape.
 * @see {@link GetAdministratorAccountCommandOutput} for command's `response` shape.
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
export class GetAdministratorAccountCommand extends $Command
  .classBuilder<
    GetAdministratorAccountCommandInput,
    GetAdministratorAccountCommandOutput,
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
  .s("Macie2", "GetAdministratorAccount", {})
  .n("Macie2Client", "GetAdministratorAccountCommand")
  .f(void 0, void 0)
  .ser(se_GetAdministratorAccountCommand)
  .de(de_GetAdministratorAccountCommand)
  .build() {}
