// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPoliciesRequest, ListPoliciesResponse } from "../models/models_0";
import { ListPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPoliciesCommand}.
 */
export interface ListPoliciesCommandInput extends ListPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListPoliciesCommand}.
 */
export interface ListPoliciesCommandOutput extends ListPoliciesResponse, __MetadataBearer {}

/**
 * Lists all the managed policies that are available in your Amazon Web Services account, including your own customer-defined managed policies and all Amazon Web Services managed policies.
 *
 * You can filter the list of policies that is returned using the optional `OnlyAttached`, `Scope`, and `PathPrefix` parameters. For example, to list only the customer managed policies in your Amazon Web Services account, set `Scope` to `Local`. To list only Amazon Web Services managed policies, set `Scope` to `AWS`.
 *
 * You can paginate the results using the `MaxItems` and `Marker` parameters.
 *
 * For more information about managed policies, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
 * > **Note:** IAM resource-listing operations return a subset of the available attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for a customer manged policy, see [GetPolicy](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetPolicy.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListPoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListPoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListPoliciesRequest
 *   Scope: "All" || "AWS" || "Local",
 *   OnlyAttached: true || false,
 *   PathPrefix: "STRING_VALUE",
 *   PolicyUsageFilter: "PermissionsPolicy" || "PermissionsBoundary",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListPoliciesResponse
 * //   Policies: [ // policyListType
 * //     { // Policy
 * //       PolicyName: "STRING_VALUE",
 * //       PolicyId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Path: "STRING_VALUE",
 * //       DefaultVersionId: "STRING_VALUE",
 * //       AttachmentCount: Number("int"),
 * //       PermissionsBoundaryUsageCount: Number("int"),
 * //       IsAttachable: true || false,
 * //       Description: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       UpdateDate: new Date("TIMESTAMP"),
 * //       Tags: [ // tagListType
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
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
 * @param ListPoliciesCommandInput - {@link ListPoliciesCommandInput}
 * @returns {@link ListPoliciesCommandOutput}
 * @see {@link ListPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @public
 */
export class ListPoliciesCommand extends command<ListPoliciesCommandInput, ListPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "ListPolicies",
  ListPolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPoliciesRequest;
      output: ListPoliciesResponse;
    };
    sdk: {
      input: ListPoliciesCommandInput;
      output: ListPoliciesCommandOutput;
    };
  };
}
