// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListUserPoliciesRequest, ListUserPoliciesResponse } from "../models/models_0";
import { ListUserPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the names of the inline policies embedded in the specified IAM user.
 *
 * An IAM user can also have managed policies attached to it. To list the managed policies that are attached to a user, use [ListAttachedUserPolicies](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListAttachedUserPolicies.html). For more information about policies, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
 * You can paginate the results using the `MaxItems` and `Marker` parameters. If there are no inline policies embedded with the specified user, the operation returns an empty list.
 *
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
export class ListUserPoliciesCommand extends command<ListUserPoliciesCommandInput, ListUserPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "ListUserPolicies",
  ListUserPolicies$
) {
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
