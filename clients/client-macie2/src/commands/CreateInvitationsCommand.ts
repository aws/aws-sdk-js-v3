// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { CreateInvitationsRequest, CreateInvitationsResponse } from "../models/models_0";
import { de_CreateInvitationsCommand, se_CreateInvitationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInvitationsCommand}.
 */
export interface CreateInvitationsCommandInput extends CreateInvitationsRequest {}
/**
 * @public
 *
 * The output of {@link CreateInvitationsCommand}.
 */
export interface CreateInvitationsCommandOutput extends CreateInvitationsResponse, __MetadataBearer {}

/**
 * <p>Sends an Amazon Macie membership invitation to one or more accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, CreateInvitationsCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, CreateInvitationsCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const input = { // CreateInvitationsRequest
 *   accountIds: [ // __listOf__string // required
 *     "STRING_VALUE",
 *   ],
 *   disableEmailNotification: true || false,
 *   message: "STRING_VALUE",
 * };
 * const command = new CreateInvitationsCommand(input);
 * const response = await client.send(command);
 * // { // CreateInvitationsResponse
 * //   unprocessedAccounts: [ // __listOfUnprocessedAccount
 * //     { // UnprocessedAccount
 * //       accountId: "STRING_VALUE",
 * //       errorCode: "ClientError" || "InternalError",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateInvitationsCommandInput - {@link CreateInvitationsCommandInput}
 * @returns {@link CreateInvitationsCommandOutput}
 * @see {@link CreateInvitationsCommandInput} for command's `input` shape.
 * @see {@link CreateInvitationsCommandOutput} for command's `response` shape.
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
export class CreateInvitationsCommand extends $Command
  .classBuilder<
    CreateInvitationsCommandInput,
    CreateInvitationsCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Macie2", "CreateInvitations", {})
  .n("Macie2Client", "CreateInvitationsCommand")
  .f(void 0, void 0)
  .ser(se_CreateInvitationsCommand)
  .de(de_CreateInvitationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInvitationsRequest;
      output: CreateInvitationsResponse;
    };
    sdk: {
      input: CreateInvitationsCommandInput;
      output: CreateInvitationsCommandOutput;
    };
  };
}
