// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSMSSandboxPhoneNumbersInput, ListSMSSandboxPhoneNumbersResult } from "../models/models_0";
import { ListSMSSandboxPhoneNumbers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSMSSandboxPhoneNumbersCommand}.
 */
export interface ListSMSSandboxPhoneNumbersCommandInput extends ListSMSSandboxPhoneNumbersInput {}
/**
 * @public
 *
 * The output of {@link ListSMSSandboxPhoneNumbersCommand}.
 */
export interface ListSMSSandboxPhoneNumbersCommandOutput extends ListSMSSandboxPhoneNumbersResult, __MetadataBearer {}

/**
 * Lists the calling Amazon Web Services account's current verified and pending destination phone numbers in the SMS sandbox.
 *
 * When you start using Amazon SNS to send SMS messages, your Amazon Web Services account is in the *SMS sandbox*. The SMS sandbox provides a safe environment for you to try Amazon SNS features without risking your reputation as an SMS sender. While your Amazon Web Services account is in the SMS sandbox, you can use all of the features of Amazon SNS. However, you can send SMS messages only to verified destination phone numbers. For more information, including how to move out of the sandbox to send messages without restrictions, see [SMS sandbox](https://docs.aws.amazon.com/sns/latest/dg/sns-sms-sandbox.html) in the *Amazon SNS Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListSMSSandboxPhoneNumbersCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListSMSSandboxPhoneNumbersCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // ListSMSSandboxPhoneNumbersInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSMSSandboxPhoneNumbersCommand(input);
 * const response = await client.send(command);
 * // { // ListSMSSandboxPhoneNumbersResult
 * //   PhoneNumbers: [ // SMSSandboxPhoneNumberList // required
 * //     { // SMSSandboxPhoneNumber
 * //       PhoneNumber: "STRING_VALUE",
 * //       Status: "Pending" || "Verified",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSMSSandboxPhoneNumbersCommandInput - {@link ListSMSSandboxPhoneNumbersCommandInput}
 * @returns {@link ListSMSSandboxPhoneNumbersCommandOutput}
 * @see {@link ListSMSSandboxPhoneNumbersCommandInput} for command's `input` shape.
 * @see {@link ListSMSSandboxPhoneNumbersCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Can’t perform the action on the specified resource. Make sure that the resource exists.
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
export class ListSMSSandboxPhoneNumbersCommand extends command<ListSMSSandboxPhoneNumbersCommandInput, ListSMSSandboxPhoneNumbersCommandOutput>(
  _ep0,
  _mw0,
  "ListSMSSandboxPhoneNumbers",
  ListSMSSandboxPhoneNumbers$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSMSSandboxPhoneNumbersInput;
      output: ListSMSSandboxPhoneNumbersResult;
    };
    sdk: {
      input: ListSMSSandboxPhoneNumbersCommandInput;
      output: ListSMSSandboxPhoneNumbersCommandOutput;
    };
  };
}
