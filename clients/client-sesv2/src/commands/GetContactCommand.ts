// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetContactRequest, GetContactResponse } from "../models/models_0";
import { de_GetContactCommand, se_GetContactCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetContactCommand}.
 */
export interface GetContactCommandInput extends GetContactRequest {}
/**
 * @public
 *
 * The output of {@link GetContactCommand}.
 */
export interface GetContactCommandOutput extends GetContactResponse, __MetadataBearer {}

/**
 * <p>Returns a contact from a contact list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetContactCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetContactCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // GetContactRequest
 *   ContactListName: "STRING_VALUE", // required
 *   EmailAddress: "STRING_VALUE", // required
 * };
 * const command = new GetContactCommand(input);
 * const response = await client.send(command);
 * // { // GetContactResponse
 * //   ContactListName: "STRING_VALUE",
 * //   EmailAddress: "STRING_VALUE",
 * //   TopicPreferences: [ // TopicPreferenceList
 * //     { // TopicPreference
 * //       TopicName: "STRING_VALUE", // required
 * //       SubscriptionStatus: "OPT_IN" || "OPT_OUT", // required
 * //     },
 * //   ],
 * //   TopicDefaultPreferences: [
 * //     {
 * //       TopicName: "STRING_VALUE", // required
 * //       SubscriptionStatus: "OPT_IN" || "OPT_OUT", // required
 * //     },
 * //   ],
 * //   UnsubscribeAll: true || false,
 * //   AttributesData: "STRING_VALUE",
 * //   CreatedTimestamp: new Date("TIMESTAMP"),
 * //   LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetContactCommandInput - {@link GetContactCommandInput}
 * @returns {@link GetContactCommandOutput}
 * @see {@link GetContactCommandInput} for command's `input` shape.
 * @see {@link GetContactCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class GetContactCommand extends $Command
  .classBuilder<
    GetContactCommandInput,
    GetContactCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "GetContact", {})
  .n("SESv2Client", "GetContactCommand")
  .f(void 0, void 0)
  .ser(se_GetContactCommand)
  .de(de_GetContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetContactRequest;
      output: GetContactResponse;
    };
    sdk: {
      input: GetContactCommandInput;
      output: GetContactCommandOutput;
    };
  };
}
