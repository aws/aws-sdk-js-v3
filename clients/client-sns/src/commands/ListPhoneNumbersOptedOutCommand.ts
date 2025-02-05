// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListPhoneNumbersOptedOutInput,
  ListPhoneNumbersOptedOutResponse,
  ListPhoneNumbersOptedOutResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListPhoneNumbersOptedOutCommand, se_ListPhoneNumbersOptedOutCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns a list of phone numbers that are opted out, meaning you cannot send SMS
 *             messages to them.</p>
 *          <p>The results for <code>ListPhoneNumbersOptedOut</code> are paginated, and each page
 *             returns up to 100 phone numbers. If additional phone numbers are available after the
 *             first page of results, then a <code>NextToken</code> string will be returned. To receive
 *             the next page, you call <code>ListPhoneNumbersOptedOut</code> again using the
 *                 <code>NextToken</code> string received from the previous call. When there are no
 *             more records to return, <code>NextToken</code> will be null.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListPhoneNumbersOptedOutCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListPhoneNumbersOptedOutCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>Indicates that the rate at which requests have been submitted for this action exceeds the limit for your Amazon Web Services account.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 * @public
 */
export class ListPhoneNumbersOptedOutCommand extends $Command
  .classBuilder<
    ListPhoneNumbersOptedOutCommandInput,
    ListPhoneNumbersOptedOutCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSimpleNotificationService", "ListPhoneNumbersOptedOut", {})
  .n("SNSClient", "ListPhoneNumbersOptedOutCommand")
  .f(void 0, ListPhoneNumbersOptedOutResponseFilterSensitiveLog)
  .ser(se_ListPhoneNumbersOptedOutCommand)
  .de(de_ListPhoneNumbersOptedOutCommand)
  .build() {
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
