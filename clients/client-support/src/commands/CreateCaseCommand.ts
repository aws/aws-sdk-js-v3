// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateCaseRequest, CreateCaseResponse } from "../models/models_0";
import { CreateCase$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCaseCommand}.
 */
export interface CreateCaseCommandInput extends CreateCaseRequest {}
/**
 * @public
 *
 * The output of {@link CreateCaseCommand}.
 */
export interface CreateCaseCommandOutput extends CreateCaseResponse, __MetadataBearer {}

/**
 * <p>Creates a case in the Amazon Web Services Support Center. This operation is similar to how you create a case
 *             in the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create
 *                 Case</a> page.</p>
 *          <p>The Amazon Web Services Support API doesn't support requesting service limit increases. You can submit a
 *             service limit increase in the following ways: </p>
 *          <ul>
 *             <li>
 *                <p>Submit a request from the Amazon Web Services Support Center <a href="https://console.aws.amazon.com/support/home#/case/create">Create Case</a> page.</p>
 *             </li>
 *             <li>
 *                <p>Use the Service Quotas <a href="https://docs.aws.amazon.com/servicequotas/2019-06-24/apireference/API_RequestServiceQuotaIncrease.html">RequestServiceQuotaIncrease</a> operation.</p>
 *             </li>
 *          </ul>
 *          <p>A successful <code>CreateCase</code> request returns an Amazon Web Services Support case number. You can use
 *             the <a>DescribeCases</a> operation and specify the case number to get
 *             existing Amazon Web Services Support cases. After you create a case, use the <a>AddCommunicationToCase</a> operation to add additional communication or
 *             attachments to an existing case.</p>
 *          <p>The <code>caseId</code> is separate from the <code>displayId</code> that appears in
 *             the <a href="https://console.aws.amazon.com/support">Amazon Web Services Support Center</a>. Use the <a>DescribeCases</a> operation to get the <code>displayId</code>.</p>
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
 * import { SupportClient, CreateCaseCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, CreateCaseCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // import type { SupportClientConfig } from "@aws-sdk/client-support";
 * const config = {}; // type is SupportClientConfig
 * const client = new SupportClient(config);
 * const input = { // CreateCaseRequest
 *   subject: "STRING_VALUE", // required
 *   serviceCode: "STRING_VALUE",
 *   severityCode: "STRING_VALUE",
 *   categoryCode: "STRING_VALUE",
 *   communicationBody: "STRING_VALUE", // required
 *   ccEmailAddresses: [ // CcEmailAddressList
 *     "STRING_VALUE",
 *   ],
 *   language: "STRING_VALUE",
 *   issueType: "STRING_VALUE",
 *   attachmentSetId: "STRING_VALUE",
 * };
 * const command = new CreateCaseCommand(input);
 * const response = await client.send(command);
 * // { // CreateCaseResponse
 * //   caseId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCaseCommandInput - {@link CreateCaseCommandInput}
 * @returns {@link CreateCaseCommandOutput}
 * @see {@link CreateCaseCommandInput} for command's `input` shape.
 * @see {@link CreateCaseCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link AttachmentSetExpired} (client fault)
 *  <p>The expiration time of the attachment set has passed. The set expires 1 hour after it
 *             is created.</p>
 *
 * @throws {@link AttachmentSetIdNotFound} (client fault)
 *  <p>An attachment set with the specified ID could not be found.</p>
 *
 * @throws {@link CaseCreationLimitExceeded} (client fault)
 *  <p>The case creation limit for the account has been exceeded.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link SupportServiceException}
 * <p>Base exception class for all service exceptions from Support service.</p>
 *
 *
 * @public
 */
export class CreateCaseCommand extends $Command
  .classBuilder<
    CreateCaseCommandInput,
    CreateCaseCommandOutput,
    SupportClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupportClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSSupport_20130415", "CreateCase", {})
  .n("SupportClient", "CreateCaseCommand")
  .sc(CreateCase$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCaseRequest;
      output: CreateCaseResponse;
    };
    sdk: {
      input: CreateCaseCommandInput;
      output: CreateCaseCommandOutput;
    };
  };
}
