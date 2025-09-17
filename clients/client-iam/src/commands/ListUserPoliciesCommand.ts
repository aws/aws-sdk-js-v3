// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListUserPoliciesRequest, ListUserPoliciesResponse } from "../models/models_0";
import { de_ListUserPoliciesCommand, se_ListUserPoliciesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUserPoliciesCommand}.
 */
export interface ListUserPoliciesCommandInput extends ListUserPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListUserPoliciesCommand}.
 */
export interface ListUserPoliciesCommandOutput extends ListUserPoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists the names of the inline policies embedded in the specified IAM user.</p>
 *          <p>An IAM user can also have managed policies attached to it. To list the managed
 *             policies that are attached to a user, use <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedUserPolicies.html">ListAttachedUserPolicies</a>. For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed
 *                 policies and inline policies</a> in the
 *             <i>IAM User Guide</i>.</p>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters. If there are no inline policies embedded with the specified user, the
 *             operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListUserPoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListUserPoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListUserPoliciesRequest
 *   UserName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListUserPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListUserPoliciesResponse
 * //   PolicyNames: [ // policyNameListType // required
 * //     "STRING_VALUE",
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserPoliciesCommandInput - {@link ListUserPoliciesCommandInput}
 * @returns {@link ListUserPoliciesCommandOutput}
 * @see {@link ListUserPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListUserPoliciesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListUserPoliciesCommand extends $Command
  .classBuilder<
    ListUserPoliciesCommandInput,
    ListUserPoliciesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "ListUserPolicies", {})
  .n("IAMClient", "ListUserPoliciesCommand")
  .f(void 0, void 0)
  .ser(se_ListUserPoliciesCommand)
  .de(de_ListUserPoliciesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUserPoliciesRequest;
      output: ListUserPoliciesResponse;
    };
    sdk: {
      input: ListUserPoliciesCommandInput;
      output: ListUserPoliciesCommandOutput;
    };
  };
}
