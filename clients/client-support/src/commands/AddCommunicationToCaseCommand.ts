// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AddCommunicationToCaseRequest, AddCommunicationToCaseResponse } from "../models/models_0";
import { de_AddCommunicationToCaseCommand, se_AddCommunicationToCaseCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddCommunicationToCaseCommand}.
 */
export interface AddCommunicationToCaseCommandInput extends AddCommunicationToCaseRequest {}
/**
 * @public
 *
 * The output of {@link AddCommunicationToCaseCommand}.
 */
export interface AddCommunicationToCaseCommandOutput extends AddCommunicationToCaseResponse, __MetadataBearer {}

/**
 * <p>Adds additional customer communication to an Amazon Web Services Support case. Use the <code>caseId</code>
 *             parameter to identify the case to which to add communication. You can list a set of
 *             email addresses to copy on the communication by using the <code>ccEmailAddresses</code>
 *             parameter. The <code>communicationBody</code> value contains the text of the
 *             communication.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 *                         API. </p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have a
 *                         Business, Enterprise On-Ramp, or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, AddCommunicationToCaseCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, AddCommunicationToCaseCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SupportClient(config);
 * const input = { // AddCommunicationToCaseRequest
 *   caseId: "STRING_VALUE",
 *   communicationBody: "STRING_VALUE", // required
 *   ccEmailAddresses: [ // CcEmailAddressList
 *     "STRING_VALUE",
 *   ],
 *   attachmentSetId: "STRING_VALUE",
 * };
 * const command = new AddCommunicationToCaseCommand(input);
 * const response = await client.send(command);
 * // { // AddCommunicationToCaseResponse
 * //   result: true || false,
 * // };
 *
 * ```
 *
 * @param AddCommunicationToCaseCommandInput - {@link AddCommunicationToCaseCommandInput}
 * @returns {@link AddCommunicationToCaseCommandOutput}
 * @see {@link AddCommunicationToCaseCommandInput} for command's `input` shape.
 * @see {@link AddCommunicationToCaseCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link AttachmentSetExpired} (client fault)
 *  <p>The expiration time of the attachment set has passed. The set expires 1 hour after it
 *             is created.</p>
 *
 * @throws {@link AttachmentSetIdNotFound} (client fault)
 *  <p>An attachment set with the specified ID could not be found.</p>
 *
 * @throws {@link CaseIdNotFound} (client fault)
 *  <p>The requested <code>caseId</code> couldn't be located.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link SupportServiceException}
 * <p>Base exception class for all service exceptions from Support service.</p>
 *
 * @public
 */
export class AddCommunicationToCaseCommand extends $Command
  .classBuilder<
    AddCommunicationToCaseCommandInput,
    AddCommunicationToCaseCommandOutput,
    SupportClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupportClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSupport_20130415", "AddCommunicationToCase", {})
  .n("SupportClient", "AddCommunicationToCaseCommand")
  .f(void 0, void 0)
  .ser(se_AddCommunicationToCaseCommand)
  .de(de_AddCommunicationToCaseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddCommunicationToCaseRequest;
      output: AddCommunicationToCaseResponse;
    };
    sdk: {
      input: AddCommunicationToCaseCommandInput;
      output: AddCommunicationToCaseCommandOutput;
    };
  };
}
