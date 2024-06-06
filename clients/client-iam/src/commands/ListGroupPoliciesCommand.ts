// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListGroupPoliciesRequest, ListGroupPoliciesResponse } from "../models/models_0";
import { de_ListGroupPoliciesCommand, se_ListGroupPoliciesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGroupPoliciesCommand}.
 */
export interface ListGroupPoliciesCommandInput extends ListGroupPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListGroupPoliciesCommand}.
 */
export interface ListGroupPoliciesCommandOutput extends ListGroupPoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists the names of the inline policies that are embedded in the specified IAM
 *             group.</p>
 *          <p>An IAM group can also have managed policies attached to it. To list the managed
 *             policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>.
 *             For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters. If there are no inline policies embedded with the specified group, the
 *             operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListGroupPoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListGroupPoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListGroupPoliciesRequest
 *   GroupName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListGroupPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListGroupPoliciesResponse
 * //   PolicyNames: [ // policyNameListType // required
 * //     "STRING_VALUE",
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGroupPoliciesCommandInput - {@link ListGroupPoliciesCommandInput}
 * @returns {@link ListGroupPoliciesCommandOutput}
 * @see {@link ListGroupPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListGroupPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 * @example To list the in-line policies for an IAM group
 * ```javascript
 * // The following command lists the names of in-line policies that are embedded in the IAM group named Admins.
 * const input = {
 *   "GroupName": "Admins"
 * };
 * const command = new ListGroupPoliciesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "PolicyNames": [
 *     "AdminRoot",
 *     "KeyPolicy"
 *   ]
 * }
 * *\/
 * // example id: 02de5095-2410-4d3a-ac1b-cc40234af68f
 * ```
 *
 */
export class ListGroupPoliciesCommand extends $Command
  .classBuilder<
    ListGroupPoliciesCommandInput,
    ListGroupPoliciesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "ListGroupPolicies", {})
  .n("IAMClient", "ListGroupPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_ListGroupPoliciesCommand)
  .de(de_ListGroupPoliciesCommand)
  .build() {}
