// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { ListAttachedGroupPoliciesRequest, ListAttachedGroupPoliciesResponse } from "../models/models_0";
import { ListAttachedGroupPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAttachedGroupPoliciesCommand}.
 */
export interface ListAttachedGroupPoliciesCommandInput extends ListAttachedGroupPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListAttachedGroupPoliciesCommand}.
 */
export interface ListAttachedGroupPoliciesCommandOutput extends ListAttachedGroupPoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists all managed policies that are attached to the specified IAM group.</p>
 *          <p>An IAM group can also have inline policies embedded with it. To list the inline
 *             policies for a group, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListGroupPolicies.html">ListGroupPolicies</a>.
 *             For information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters. You can use the <code>PathPrefix</code> parameter to limit the list of
 *             policies to only those matching the specified path prefix. If there are no policies
 *             attached to the specified group (or none that match the specified path prefix), the
 *             operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListAttachedGroupPoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAttachedGroupPoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListAttachedGroupPoliciesRequest
 *   GroupName: "STRING_VALUE", // required
 *   PathPrefix: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListAttachedGroupPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListAttachedGroupPoliciesResponse
 * //   AttachedPolicies: [ // attachedPoliciesListType
 * //     { // AttachedPolicy
 * //       PolicyName: "STRING_VALUE",
 * //       PolicyArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAttachedGroupPoliciesCommandInput - {@link ListAttachedGroupPoliciesCommandInput}
 * @returns {@link ListAttachedGroupPoliciesCommandOutput}
 * @see {@link ListAttachedGroupPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAttachedGroupPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
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
 *
 * @public
 */
export class ListAttachedGroupPoliciesCommand extends $Command
  .classBuilder<
    ListAttachedGroupPoliciesCommandInput,
    ListAttachedGroupPoliciesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "ListAttachedGroupPolicies", {})
  .n("IAMClient", "ListAttachedGroupPoliciesCommand")
  .sc(ListAttachedGroupPolicies$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAttachedGroupPoliciesRequest;
      output: ListAttachedGroupPoliciesResponse;
    };
    sdk: {
      input: ListAttachedGroupPoliciesCommandInput;
      output: ListAttachedGroupPoliciesCommandOutput;
    };
  };
}
