// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListAttachedRolePoliciesRequest, ListAttachedRolePoliciesResponse } from "../models/models_0";
import { de_ListAttachedRolePoliciesCommand, se_ListAttachedRolePoliciesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAttachedRolePoliciesCommand}.
 */
export interface ListAttachedRolePoliciesCommandInput extends ListAttachedRolePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListAttachedRolePoliciesCommand}.
 */
export interface ListAttachedRolePoliciesCommandOutput extends ListAttachedRolePoliciesResponse, __MetadataBearer {}

/**
 * <p>Lists all managed policies that are attached to the specified IAM role.</p>
 *          <p>An IAM role can also have inline policies embedded with it. To list the inline
 *             policies for a role, use <a>ListRolePolicies</a>. For information about
 *             policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters. You can use the <code>PathPrefix</code> parameter to limit the list of
 *             policies to only those matching the specified path prefix. If there are no policies
 *             attached to the specified role (or none that match the specified path prefix), the
 *             operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListAttachedRolePoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAttachedRolePoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListAttachedRolePoliciesRequest
 *   RoleName: "STRING_VALUE", // required
 *   PathPrefix: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListAttachedRolePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListAttachedRolePoliciesResponse
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
 * @param ListAttachedRolePoliciesCommandInput - {@link ListAttachedRolePoliciesCommandInput}
 * @returns {@link ListAttachedRolePoliciesCommandOutput}
 * @see {@link ListAttachedRolePoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAttachedRolePoliciesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListAttachedRolePoliciesCommand extends $Command
  .classBuilder<
    ListAttachedRolePoliciesCommandInput,
    ListAttachedRolePoliciesCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "ListAttachedRolePolicies", {})
  .n("IAMClient", "ListAttachedRolePoliciesCommand")
  .f(void 0, void 0)
  .ser(se_ListAttachedRolePoliciesCommand)
  .de(de_ListAttachedRolePoliciesCommand)
  .build() {}
