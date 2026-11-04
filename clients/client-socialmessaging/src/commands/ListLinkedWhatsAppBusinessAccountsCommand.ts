// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListLinkedWhatsAppBusinessAccountsInput,
  ListLinkedWhatsAppBusinessAccountsOutput,
} from "../models/models_0";
import { ListLinkedWhatsAppBusinessAccounts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListLinkedWhatsAppBusinessAccountsCommandOutput extends ListLinkedWhatsAppBusinessAccountsOutput, __MetadataBearer {}

/**
 * List all WhatsApp Business Accounts linked to your Amazon Web Services account.
 *
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
 * //       marketingMessagesOnboardingStatus: "STRING_VALUE",
 * //       directSendEnforcementStatus: "STRING_VALUE",
 * //       directSendEnforcementStatusExpiresAt: new Date("TIMESTAMP"),
 * //       datasetId: "STRING_VALUE",
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
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *
 * One or more parameters provided to the action are not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource was not found.
 *
 * @throws {@link ThrottledRequestException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request contains an invalid parameter value.
 *
 * @throws {@link SocialMessagingServiceException}
 *
 * Base exception class for all service exceptions from SocialMessaging service.
 *
 * @public
 */
export class ListLinkedWhatsAppBusinessAccountsCommand extends command<ListLinkedWhatsAppBusinessAccountsCommandInput, ListLinkedWhatsAppBusinessAccountsCommandOutput>(
  _ep0,
  _mw0,
  "ListLinkedWhatsAppBusinessAccounts",
  ListLinkedWhatsAppBusinessAccounts$
) {
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
