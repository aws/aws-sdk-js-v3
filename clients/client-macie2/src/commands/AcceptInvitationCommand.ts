// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { AcceptInvitationRequest, AcceptInvitationResponse } from "../models/models_0";
import { AcceptInvitation } from "../schemas/schemas_50_AcceptInvitation";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AcceptInvitationCommand}.
 */
export interface AcceptInvitationCommandInput extends AcceptInvitationRequest {}
/**
 * @public
 *
 * The output of {@link AcceptInvitationCommand}.
 */
export interface AcceptInvitationCommandOutput extends AcceptInvitationResponse, __MetadataBearer {}

/**
 * <p>Accepts an Amazon Macie membership invitation that was received from a specific account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, AcceptInvitationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, AcceptInvitationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // AcceptInvitationRequest
 *   administratorAccountId: "STRING_VALUE",
 *   invitationId: "STRING_VALUE", // required
 *   masterAccount: "STRING_VALUE",
 * };
 * const command = new AcceptInvitationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AcceptInvitationCommandInput - {@link AcceptInvitationCommandInput}
 * @returns {@link AcceptInvitationCommandOutput}
 * @see {@link AcceptInvitationCommandInput} for command's `input` shape.
 * @see {@link AcceptInvitationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class AcceptInvitationCommand extends $Command
  .classBuilder<
    AcceptInvitationCommandInput,
    AcceptInvitationCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "AcceptInvitation", {})
  .n("Macie2Client", "AcceptInvitationCommand")
  .sc(AcceptInvitation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptInvitationRequest;
      output: {};
    };
    sdk: {
      input: AcceptInvitationCommandInput;
      output: AcceptInvitationCommandOutput;
    };
  };
}
