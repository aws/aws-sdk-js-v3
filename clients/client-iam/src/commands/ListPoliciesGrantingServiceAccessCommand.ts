// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  ListPoliciesGrantingServiceAccessRequest,
  ListPoliciesGrantingServiceAccessResponse,
} from "../models/models_0";
import { ListPoliciesGrantingServiceAccess } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPoliciesGrantingServiceAccessCommand}.
 */
export interface ListPoliciesGrantingServiceAccessCommandInput extends ListPoliciesGrantingServiceAccessRequest {}
/**
 * @public
 *
 * The output of {@link ListPoliciesGrantingServiceAccessCommand}.
 */
export interface ListPoliciesGrantingServiceAccessCommandOutput
  extends ListPoliciesGrantingServiceAccessResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of policies that the IAM identity (user, group, or role) can use to
 *             access each specified service.</p>
 *          <note>
 *             <p>This operation does not use other policy types when determining whether a resource
 *                 could access a service. These other policy types include resource-based policies,
 *                 access control lists, Organizations policies, IAM permissions boundaries, and STS
 *                 assume role policies. It only applies permissions policy logic. For more about the
 *                 evaluation of policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics">Evaluating policies</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *          </note>
 *          <p>The list of policies returned by the operation depends on the ARN of the identity that
 *             you provide.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>User</b> – The list of policies includes
 *                     the managed and inline policies that are attached to the user directly. The list
 *                     also includes any additional managed and inline policies that are attached to
 *                     the group to which the user belongs. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Group</b> – The list of policies includes
 *                     only the managed and inline policies that are attached to the group directly.
 *                     Policies that are attached to the group’s user are not included.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Role</b> – The list of policies includes
 *                     only the managed and inline policies that are attached to the role.</p>
 *             </li>
 *          </ul>
 *          <p>For each managed policy, this operation returns the ARN and policy name. For each
 *             inline policy, it returns the policy name and the entity to which it is attached. Inline
 *             policies do not have an ARN. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed policies and inline policies</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *          <p>Policies that are attached to users and roles as permissions boundaries are not
 *             returned. To view which managed policy is currently used to set the permissions boundary
 *             for a user or role, use the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html">GetUser</a> or <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html">GetRole</a>
 *             operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListPoliciesGrantingServiceAccessCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListPoliciesGrantingServiceAccessCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListPoliciesGrantingServiceAccessRequest
 *   Marker: "STRING_VALUE",
 *   Arn: "STRING_VALUE", // required
 *   ServiceNamespaces: [ // serviceNamespaceListType // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListPoliciesGrantingServiceAccessCommand(input);
 * const response = await client.send(command);
 * // { // ListPoliciesGrantingServiceAccessResponse
 * //   PoliciesGrantingServiceAccess: [ // listPolicyGrantingServiceAccessResponseListType // required
 * //     { // ListPoliciesGrantingServiceAccessEntry
 * //       ServiceNamespace: "STRING_VALUE",
 * //       Policies: [ // policyGrantingServiceAccessListType
 * //         { // PolicyGrantingServiceAccess
 * //           PolicyName: "STRING_VALUE", // required
 * //           PolicyType: "INLINE" || "MANAGED", // required
 * //           PolicyArn: "STRING_VALUE",
 * //           EntityType: "USER" || "ROLE" || "GROUP",
 * //           EntityName: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPoliciesGrantingServiceAccessCommandInput - {@link ListPoliciesGrantingServiceAccessCommandInput}
 * @returns {@link ListPoliciesGrantingServiceAccessCommandOutput}
 * @see {@link ListPoliciesGrantingServiceAccessCommandInput} for command's `input` shape.
 * @see {@link ListPoliciesGrantingServiceAccessCommandOutput} for command's `response` shape.
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
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To list policies that allow access to a service
 * ```javascript
 * // The following operation lists policies that allow ExampleUser01 to access IAM or EC2.
 * const input = {
 *   Arn: "arn:aws:iam::123456789012:user/ExampleUser01",
 *   ServiceNamespaces: [
 *     "iam",
 *     "ec2"
 *   ]
 * };
 * const command = new ListPoliciesGrantingServiceAccessCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   IsTruncated: false,
 *   PoliciesGrantingServiceAccess: [
 *     {
 *       Policies: [
 *         {
 *           PolicyArn: "arn:aws:iam::123456789012:policy/ExampleIamPolicy",
 *           PolicyName: "ExampleIamPolicy",
 *           PolicyType: "MANAGED"
 *         },
 *         {
 *           EntityName: "AWSExampleGroup1",
 *           EntityType: "GROUP",
 *           PolicyName: "ExampleGroup1Policy",
 *           PolicyType: "INLINE"
 *         }
 *       ],
 *       ServiceNamespace: "iam"
 *     },
 *     {
 *       Policies: [
 *         {
 *           PolicyArn: "arn:aws:iam::123456789012:policy/ExampleEc2Policy",
 *           PolicyName: "ExampleEc2Policy",
 *           PolicyType: "MANAGED"
 *         }
 *       ],
 *       ServiceNamespace: "ec2"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListPoliciesGrantingServiceAccessCommand extends $Command
  .classBuilder<
    ListPoliciesGrantingServiceAccessCommandInput,
    ListPoliciesGrantingServiceAccessCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "ListPoliciesGrantingServiceAccess", {})
  .n("IAMClient", "ListPoliciesGrantingServiceAccessCommand")
  .sc(ListPoliciesGrantingServiceAccess)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPoliciesGrantingServiceAccessRequest;
      output: ListPoliciesGrantingServiceAccessResponse;
    };
    sdk: {
      input: ListPoliciesGrantingServiceAccessCommandInput;
      output: ListPoliciesGrantingServiceAccessCommandOutput;
    };
  };
}
