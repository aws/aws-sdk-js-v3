// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListPoliciesGrantingServiceAccessRequest,
  ListPoliciesGrantingServiceAccessResponse,
} from "../models/models_0";
import { ListPoliciesGrantingServiceAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListPoliciesGrantingServiceAccessCommandOutput extends ListPoliciesGrantingServiceAccessResponse, __MetadataBearer {}

/**
 * Retrieves a list of policies that the IAM identity (user, group, or role) can use to access each specified service.
 *
 * > **Note:** This operation does not use other policy types when determining whether a resource could access a service. These other policy types include resource-based policies, access control lists, Organizations policies, IAM permissions boundaries, and STS assume role policies. It only applies permissions policy logic. For more about the evaluation of policy types, see [Evaluating policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html#policy-eval-basics) in the *IAM User Guide*.
 *
 * The list of policies returned by the operation depends on the ARN of the identity that you provide.
 *
 * - **User** – The list of policies includes the managed and inline policies that are attached to the user directly. The list also includes any additional managed and inline policies that are attached to the group to which the user belongs.
 * - **Group** – The list of policies includes only the managed and inline policies that are attached to the group directly. Policies that are attached to the group’s user are not included.
 * - **Role** – The list of policies includes only the managed and inline policies that are attached to the role.
 *
 * For each managed policy, this operation returns the ARN and policy name. For each inline policy, it returns the policy name and the entity to which it is attached. Inline policies do not have an ARN. For more information about these policy types, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html) in the *IAM User Guide*.
 *
 * Policies that are attached to users and roles as permissions boundaries are not returned. To view which managed policy is currently used to set the permissions boundary for a user or role, use the [GetUser](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetUser.html) or [GetRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetRole.html) operations.
 *
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
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
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
export class ListPoliciesGrantingServiceAccessCommand extends command<ListPoliciesGrantingServiceAccessCommandInput, ListPoliciesGrantingServiceAccessCommandOutput>(
  _ep0,
  _mw0,
  "ListPoliciesGrantingServiceAccess",
  ListPoliciesGrantingServiceAccess$
) {
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
