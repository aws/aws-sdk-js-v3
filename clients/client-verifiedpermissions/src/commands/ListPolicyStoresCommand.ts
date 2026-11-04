// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPolicyStoresInput, ListPolicyStoresOutput } from "../models/models_0";
import { ListPolicyStores$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPolicyStoresCommand}.
 */
export interface ListPolicyStoresCommandInput extends ListPolicyStoresInput {}
/**
 * @public
 *
 * The output of {@link ListPolicyStoresCommand}.
 */
export interface ListPolicyStoresCommandOutput extends ListPolicyStoresOutput, __MetadataBearer {}

/**
 * Returns a paginated list of all policy stores in the calling Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, ListPolicyStoresCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, ListPolicyStoresCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // import type { VerifiedPermissionsClientConfig } from "@aws-sdk/client-verifiedpermissions";
 * const config = {}; // type is VerifiedPermissionsClientConfig
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // ListPolicyStoresInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPolicyStoresCommand(input);
 * const response = await client.send(command);
 * // { // ListPolicyStoresOutput
 * //   nextToken: "STRING_VALUE",
 * //   policyStores: [ // PolicyStoreList // required
 * //     { // PolicyStoreItem
 * //       policyStoreId: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       createdDate: new Date("TIMESTAMP"), // required
 * //       lastUpdatedDate: new Date("TIMESTAMP"),
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPolicyStoresCommandInput - {@link ListPolicyStoresCommandInput}
 * @returns {@link ListPolicyStoresCommandOutput}
 * @see {@link ListPolicyStoresCommandInput} for command's `input` shape.
 * @see {@link ListPolicyStoresCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed because of an internal error. Try your request again later
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request failed because it exceeded a throttling quota.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because one or more input parameters don't satisfy their constraint requirements. The output is provided as a list of fields and a reason for each field that isn't valid.
 *
 * The possible reasons include the following:
 *
 * - **UnrecognizedEntityType**
 *
 *   The policy includes an entity type that isn't found in the schema.
 * - **UnrecognizedActionId**
 *
 *   The policy includes an action id that isn't found in the schema.
 * - **InvalidActionApplication**
 *
 *   The policy includes an action that, according to the schema, doesn't support the specified principal and resource.
 * - **UnexpectedType**
 *
 *   The policy included an operand that isn't a valid type for the specified operation.
 * - **IncompatibleTypes**
 *
 *   The types of elements included in a `set`, or the types of expressions used in an `if...then...else` clause aren't compatible in this context.
 * - **MissingAttribute**
 *
 *   The policy attempts to access a record or entity attribute that isn't specified in the schema. Test for the existence of the attribute first before attempting to access its value. For more information, see the [has (presence of attribute test) operator](https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test) in the *Cedar Policy Language Guide*.
 * - **UnsafeOptionalAttributeAccess**
 *
 *   The policy attempts to access a record or entity attribute that is optional and isn't guaranteed to be present. Test for the existence of the attribute first before attempting to access its value. For more information, see the [has (presence of attribute test) operator](https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test) in the *Cedar Policy Language Guide*.
 * - **ImpossiblePolicy**
 *
 *   Cedar has determined that a policy condition always evaluates to false. If the policy is always false, it can never apply to any query, and so it can never affect an authorization decision.
 * - **WrongNumberArguments**
 *
 *   The policy references an extension type with the wrong number of arguments.
 * - **FunctionArgumentValidationError**
 *
 *   Cedar couldn't parse the argument passed to an extension type. For example, a string that is to be parsed as an IPv4 address can contain only digits and the period character.
 *
 * @throws {@link VerifiedPermissionsServiceException}
 *
 * Base exception class for all service exceptions from VerifiedPermissions service.
 *
 * @example ListPolicyStores
 * ```javascript
 * // The following example lists all policy stores in the AWS account in the AWS Region in which you call the operation.
 * const input = { /* empty *\/ };
 * const command = new ListPolicyStoresCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   policyStores: [
 *     {
 *       arn: "arn:aws:verifiedpermissions::123456789012:policy-store/C7v5xMplfFH3i3e4Jrzb1a",
 *       createdDate: "2023-05-16T17:41:29.103459Z",
 *       policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 *     },
 *     {
 *       arn: "arn:aws:verifiedpermissions::123456789012:policy-store/PSEXAMPLEabcdefg222222",
 *       createdDate: "2023-05-16T18:23:04.985521Z",
 *       policyStoreId: "PSEXAMPLEabcdefg222222"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListPolicyStoresCommand extends command<ListPolicyStoresCommandInput, ListPolicyStoresCommandOutput>(
  _ep0,
  _mw0,
  "ListPolicyStores",
  ListPolicyStores$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPolicyStoresInput;
      output: ListPolicyStoresOutput;
    };
    sdk: {
      input: ListPolicyStoresCommandInput;
      output: ListPolicyStoresCommandOutput;
    };
  };
}
