// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListLinkedWhatsAppBusinessAccountsInput, ListLinkedWhatsAppBusinessAccountsOutput } from "../models/models_0";
import { ListLinkedWhatsAppBusinessAccounts } from "../schemas/schemas_5_App";
import { ServiceInputTypes, ServiceOutputTypes, SocialMessagingClientResolvedConfig } from "../SocialMessagingClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLinkedWhatsAppBusinessAccountsCommand}.
 */
export interface ListLinkedWhatsAppBusinessAccountsCommandInput extends ListLinkedWhatsAppBusinessAccountsInput {}
/**
 * @public
 *
 * The output of {@link ListLinkedWhatsAppBusinessAccountsCommand}.
 */
export interface ListLinkedWhatsAppBusinessAccountsCommandOutput
  extends ListLinkedWhatsAppBusinessAccountsOutput,
    __MetadataBearer {}

/**
 * <p>List all WhatsApp Business Accounts linked to your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SocialMessagingClient, ListLinkedWhatsAppBusinessAccountsCommand } from "@aws-sdk/client-socialmessaging"; // ES Modules import
 * // const { SocialMessagingClient, ListLinkedWhatsAppBusinessAccountsCommand } = require("@aws-sdk/client-socialmessaging"); // CommonJS import
 * // import type { SocialMessagingClientConfig } from "@aws-sdk/client-socialmessaging";
 * const config = {}; // type is SocialMessagingClientConfig
 * const client = new SocialMessagingClient(config);
 * const input = { // ListLinkedWhatsAppBusinessAccountsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListLinkedWhatsAppBusinessAccountsCommand(input);
 * const response = await client.send(command);
 * // { // ListLinkedWhatsAppBusinessAccountsOutput
 * //   linkedAccounts: [ // LinkedWhatsAppBusinessAccountSummaryList
 * //     { // LinkedWhatsAppBusinessAccountSummary
 * //       arn: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       wabaId: "STRING_VALUE", // required
 * //       registrationStatus: "COMPLETE" || "INCOMPLETE", // required
 * //       linkDate: new Date("TIMESTAMP"), // required
 * //       wabaName: "STRING_VALUE", // required
 * //       eventDestinations: [ // WhatsAppBusinessAccountEventDestinations // required
 * //         { // WhatsAppBusinessAccountEventDestination
 * //           eventDestinationArn: "STRING_VALUE", // required
 * //           roleArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLinkedWhatsAppBusinessAccountsCommandInput - {@link ListLinkedWhatsAppBusinessAccountsCommandInput}
 * @returns {@link ListLinkedWhatsAppBusinessAccountsCommandOutput}
 * @see {@link ListLinkedWhatsAppBusinessAccountsCommandInput} for command's `input` shape.
 * @see {@link ListLinkedWhatsAppBusinessAccountsCommandOutput} for command's `response` shape.
 * @see {@link SocialMessagingClientResolvedConfig | config} for SocialMessagingClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the action are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ThrottledRequestException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value. </p>
 *
 * @throws {@link SocialMessagingServiceException}
 * <p>Base exception class for all service exceptions from SocialMessaging service.</p>
 *
 *
 * @public
 */
export class ListLinkedWhatsAppBusinessAccountsCommand extends $Command
  .classBuilder<
    ListLinkedWhatsAppBusinessAccountsCommandInput,
    ListLinkedWhatsAppBusinessAccountsCommandOutput,
    SocialMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SocialMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SocialMessaging", "ListLinkedWhatsAppBusinessAccounts", {})
  .n("SocialMessagingClient", "ListLinkedWhatsAppBusinessAccountsCommand")
  .sc(ListLinkedWhatsAppBusinessAccounts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLinkedWhatsAppBusinessAccountsInput;
      output: ListLinkedWhatsAppBusinessAccountsOutput;
    };
    sdk: {
      input: ListLinkedWhatsAppBusinessAccountsCommandInput;
      output: ListLinkedWhatsAppBusinessAccountsCommandOutput;
    };
  };
}
