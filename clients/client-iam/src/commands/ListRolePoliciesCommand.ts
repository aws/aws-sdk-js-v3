// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRolePoliciesRequest, ListRolePoliciesResponse } from "../models/models_0";
import { ListRolePolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRolePoliciesCommand}.
 */
export interface ListRolePoliciesCommandInput extends ListRolePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListRolePoliciesCommand}.
 */
export interface ListRolePoliciesCommandOutput extends ListRolePoliciesResponse, __MetadataBearer {}

/**
 * Lists the names of the inline policies that are embedded in the specified IAM role.
 *
 * An IAM role can also have managed policies attached to it. To list the managed policies that are attached to a role, use [ListAttachedRolePolicies](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedRolePolicies.html). For more information about policies, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
 * You can paginate the results using the `MaxItems` and `Marker` parameters. If there are no inline policies embedded with the specified role, the operation returns an empty list.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListRolePoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListRolePoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListRolePoliciesRequest
 *   RoleName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListRolePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListRolePoliciesResponse
 * //   PolicyNames: [ // policyNameListType // required
 * //     "STRING_VALUE",
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRolePoliciesCommandInput - {@link ListRolePoliciesCommandInput}
 * @returns {@link ListRolePoliciesCommandOutput}
 * @see {@link ListRolePoliciesCommandInput} for command's `input` shape.
 * @see {@link ListRolePoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
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
export class ListRolePoliciesCommand extends command<ListRolePoliciesCommandInput, ListRolePoliciesCommandOutput>(
  _ep0,
  _mw0,
  "ListRolePolicies",
  ListRolePolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRolePoliciesRequest;
      output: ListRolePoliciesResponse;
    };
    sdk: {
      input: ListRolePoliciesCommandInput;
      output: ListRolePoliciesCommandOutput;
    };
  };
}
