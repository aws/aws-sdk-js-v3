// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPhoneNumbersOptedOutInput, ListPhoneNumbersOptedOutResponse } from "../models/models_0";
import { ListPhoneNumbersOptedOut$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPhoneNumbersOptedOutCommand}.
 */
export interface ListPhoneNumbersOptedOutCommandInput extends ListPhoneNumbersOptedOutInput {}
/**
 * @public
 *
 * The output of {@link ListPhoneNumbersOptedOutCommand}.
 */
export interface ListPhoneNumbersOptedOutCommandOutput extends ListPhoneNumbersOptedOutResponse, __MetadataBearer {}

/**
 * Returns a list of phone numbers that are opted out, meaning you cannot send SMS messages to them.
 *
 * The results for `ListPhoneNumbersOptedOut` are paginated, and each page returns up to 100 phone numbers. If additional phone numbers are available after the first page of results, then a `NextToken` string will be returned. To receive the next page, you call `ListPhoneNumbersOptedOut` again using the `NextToken` string received from the previous call. When there are no more records to return, `NextToken` will be null.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListPhoneNumbersOptedOutCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListPhoneNumbersOptedOutCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // ListPhoneNumbersOptedOutInput
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListPhoneNumbersOptedOutCommand(input);
 * const response = await client.send(command);
 * // { // ListPhoneNumbersOptedOutResponse
 * //   phoneNumbers: [ // PhoneNumberList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPhoneNumbersOptedOutCommandInput - {@link ListPhoneNumbersOptedOutCommandInput}
 * @returns {@link ListPhoneNumbersOptedOutCommandOutput}
 * @see {@link ListPhoneNumbersOptedOutCommandInput} for command's `input` shape.
 * @see {@link ListPhoneNumbersOptedOutCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *
 * Indicates that the user has been denied access to the requested resource.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Indicates an internal service error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @throws {@link ThrottledException} (client fault)
 *
 * Indicates that the rate at which requests have been submitted for this action exceeds the limit for your Amazon Web Services account.
 *
 * @throws {@link SNSServiceException}
 *
 * Base exception class for all service exceptions from SNS service.
 *
 * @public
 */
export class ListPhoneNumbersOptedOutCommand extends command<ListPhoneNumbersOptedOutCommandInput, ListPhoneNumbersOptedOutCommandOutput>(
  _ep0,
  _mw0,
  "ListPhoneNumbersOptedOut",
  ListPhoneNumbersOptedOut$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPhoneNumbersOptedOutInput;
      output: ListPhoneNumbersOptedOutResponse;
    };
    sdk: {
      input: ListPhoneNumbersOptedOutCommandInput;
      output: ListPhoneNumbersOptedOutCommandOutput;
    };
  };
}
