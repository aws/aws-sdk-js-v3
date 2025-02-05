// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCommunicationsRequest, DescribeCommunicationsResponse } from "../models/models_0";
import { de_DescribeCommunicationsCommand, se_DescribeCommunicationsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCommunicationsCommand}.
 */
export interface DescribeCommunicationsCommandInput extends DescribeCommunicationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCommunicationsCommand}.
 */
export interface DescribeCommunicationsCommandOutput extends DescribeCommunicationsResponse, __MetadataBearer {}

/**
 * <p>Returns communications and attachments for one or more support cases. Use the
 *                 <code>afterTime</code> and <code>beforeTime</code> parameters to filter by date. You
 *             can use the <code>caseId</code> parameter to restrict the results to a specific
 *             case.</p>
 *          <p>Case data is available for 12 months after creation. If a case was created more than
 *             12 months ago, a request for data might cause an error.</p>
 *          <p>You can use the <code>maxResults</code> and <code>nextToken</code> parameters to
 *             control the pagination of the results. Set <code>maxResults</code> to the number of
 *             cases that you want to display on each page, and use <code>nextToken</code> to specify
 *             the resumption of pagination.</p>
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
 * import { SupportClient, DescribeCommunicationsCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, DescribeCommunicationsCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SupportClient(config);
 * const input = { // DescribeCommunicationsRequest
 *   caseId: "STRING_VALUE", // required
 *   beforeTime: "STRING_VALUE",
 *   afterTime: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeCommunicationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCommunicationsResponse
 * //   communications: [ // CommunicationList
 * //     { // Communication
 * //       caseId: "STRING_VALUE",
 * //       body: "STRING_VALUE",
 * //       submittedBy: "STRING_VALUE",
 * //       timeCreated: "STRING_VALUE",
 * //       attachmentSet: [ // AttachmentSet
 * //         { // AttachmentDetails
 * //           attachmentId: "STRING_VALUE",
 * //           fileName: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCommunicationsCommandInput - {@link DescribeCommunicationsCommandInput}
 * @returns {@link DescribeCommunicationsCommandOutput}
 * @see {@link DescribeCommunicationsCommandInput} for command's `input` shape.
 * @see {@link DescribeCommunicationsCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
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
export class DescribeCommunicationsCommand extends $Command
  .classBuilder<
    DescribeCommunicationsCommandInput,
    DescribeCommunicationsCommandOutput,
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
  .s("AWSSupport_20130415", "DescribeCommunications", {})
  .n("SupportClient", "DescribeCommunicationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCommunicationsCommand)
  .de(de_DescribeCommunicationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCommunicationsRequest;
      output: DescribeCommunicationsResponse;
    };
    sdk: {
      input: DescribeCommunicationsCommandInput;
      output: DescribeCommunicationsCommandOutput;
    };
  };
}
