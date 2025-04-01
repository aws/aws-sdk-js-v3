// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DomainInfos, ListDomainsInput } from "../models/models_0";
import { de_ListDomainsCommand, se_ListDomainsCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDomainsCommand}.
 */
export interface ListDomainsCommandInput extends ListDomainsInput {}
/**
 * @public
 *
 * The output of {@link ListDomainsCommand}.
 */
export interface ListDomainsCommandOutput extends DomainInfos, __MetadataBearer {}

/**
 * <p>Returns the list of domains registered in the account. The results may be split into
 *       multiple pages. To retrieve subsequent pages, make the call again using the nextPageToken
 *       returned by the initial call.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not
 *         exactly reflect recent updates and changes.</p>
 *          </note>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
 *       follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
 *           only specified domains. The element must be set to
 *             <code>arn:aws:swf::AccountID:domain/*</code>, where <i>AccountID</i> is
 *           the account ID, with no dashes.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this
 *           action.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *       parameter values fall outside the specified constraints, the action fails. The associated
 *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
 *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, ListDomainsCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, ListDomainsCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * const client = new SWFClient(config);
 * const input = { // ListDomainsInput
 *   nextPageToken: "STRING_VALUE",
 *   registrationStatus: "REGISTERED" || "DEPRECATED", // required
 *   maximumPageSize: Number("int"),
 *   reverseOrder: true || false,
 * };
 * const command = new ListDomainsCommand(input);
 * const response = await client.send(command);
 * // { // DomainInfos
 * //   domainInfos: [ // DomainInfoList // required
 * //     { // DomainInfo
 * //       name: "STRING_VALUE", // required
 * //       status: "REGISTERED" || "DEPRECATED", // required
 * //       description: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainsCommandInput - {@link ListDomainsCommandInput}
 * @returns {@link ListDomainsCommandOutput}
 * @see {@link ListDomainsCommandInput} for command's `input` shape.
 * @see {@link ListDomainsCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *  <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 *
 * @throws {@link SWFServiceException}
 * <p>Base exception class for all service exceptions from SWF service.</p>
 *
 *
 * @public
 */
export class ListDomainsCommand extends $Command
  .classBuilder<
    ListDomainsCommandInput,
    ListDomainsCommandOutput,
    SWFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SWFClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleWorkflowService", "ListDomains", {})
  .n("SWFClient", "ListDomainsCommand")
  .f(void 0, void 0)
  .ser(se_ListDomainsCommand)
  .de(de_ListDomainsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainsInput;
      output: DomainInfos;
    };
    sdk: {
      input: ListDomainsCommandInput;
      output: ListDomainsCommandOutput;
    };
  };
}
