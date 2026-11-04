// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAttachedRolePoliciesRequest, ListAttachedRolePoliciesResponse } from "../models/models_0";
import { ListAttachedRolePolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists all managed policies that are attached to the specified IAM role.
 *
 * An IAM role can also have inline policies embedded with it. To list the inline policies for a role, use [ListRolePolicies](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ListRolePolicies.html). For information about policies, see [Managed policies and inline policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *IAM User Guide*.
 *
 * You can paginate the results using the `MaxItems` and `Marker` parameters. You can use the `PathPrefix` parameter to limit the list of policies to only those matching the specified path prefix. If there are no policies attached to the specified role (or none that match the specified path prefix), the operation returns an empty list.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListAttachedRolePoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListAttachedRolePoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
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
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
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
export class ListAttachedRolePoliciesCommand extends command<ListAttachedRolePoliciesCommandInput, ListAttachedRolePoliciesCommandOutput>(
  _ep0,
  _mw0,
  "ListAttachedRolePolicies",
  ListAttachedRolePolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAttachedRolePoliciesRequest;
      output: ListAttachedRolePoliciesResponse;
    };
    sdk: {
      input: ListAttachedRolePoliciesCommandInput;
      output: ListAttachedRolePoliciesCommandOutput;
    };
  };
}
