// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIdentitySourcesInput, ListIdentitySourcesOutput } from "../models/models_0";
import { ListIdentitySources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIdentitySourcesCommand}.
 */
export interface ListIdentitySourcesCommandInput extends ListIdentitySourcesInput {}
/**
 * @public
 *
 * The output of {@link ListIdentitySourcesCommand}.
 */
export interface ListIdentitySourcesCommandOutput extends ListIdentitySourcesOutput, __MetadataBearer {}

/**
 * Returns a paginated list of all of the identity sources defined in the specified policy store.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, ListIdentitySourcesCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, ListIdentitySourcesCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // import type { VerifiedPermissionsClientConfig } from "@aws-sdk/client-verifiedpermissions";
 * const config = {}; // type is VerifiedPermissionsClientConfig
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // ListIdentitySourcesInput
 *   policyStoreId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   filters: [ // IdentitySourceFilters
 *     { // IdentitySourceFilter
 *       principalEntityType: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ListIdentitySourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListIdentitySourcesOutput
 * //   nextToken: "STRING_VALUE",
 * //   identitySources: [ // IdentitySources // required
 * //     { // IdentitySourceItem
 * //       createdDate: new Date("TIMESTAMP"), // required
 * //       details: { // IdentitySourceItemDetails
 * //         clientIds: [ // ClientIds
 * //           "STRING_VALUE",
 * //         ],
 * //         userPoolArn: "STRING_VALUE",
 * //         discoveryUrl: "STRING_VALUE",
 * //         openIdIssuer: "COGNITO",
 * //       },
 * //       identitySourceId: "STRING_VALUE", // required
 * //       lastUpdatedDate: new Date("TIMESTAMP"), // required
 * //       policyStoreId: "STRING_VALUE", // required
 * //       principalEntityType: "STRING_VALUE", // required
 * //       configuration: { // ConfigurationItem Union: only one key present
 * //         cognitoUserPoolConfiguration: { // CognitoUserPoolConfigurationItem
 * //           userPoolArn: "STRING_VALUE", // required
 * //           clientIds: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           issuer: "STRING_VALUE", // required
 * //           groupConfiguration: { // CognitoGroupConfigurationItem
 * //             groupEntityType: "STRING_VALUE",
 * //           },
 * //         },
 * //         openIdConnectConfiguration: { // OpenIdConnectConfigurationItem
 * //           issuer: "STRING_VALUE", // required
 * //           entityIdPrefix: "STRING_VALUE",
 * //           groupConfiguration: { // OpenIdConnectGroupConfigurationItem
 * //             groupClaim: "STRING_VALUE", // required
 * //             groupEntityType: "STRING_VALUE", // required
 * //           },
 * //           tokenSelection: { // OpenIdConnectTokenSelectionItem Union: only one key present
 * //             accessTokenOnly: { // OpenIdConnectAccessTokenConfigurationItem
 * //               principalIdClaim: "STRING_VALUE",
 * //               audiences: [ // Audiences
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             identityTokenOnly: { // OpenIdConnectIdentityTokenConfigurationItem
 * //               principalIdClaim: "STRING_VALUE",
 * //               clientIds: "<ClientIds>",
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListIdentitySourcesCommandInput - {@link ListIdentitySourcesCommandInput}
 * @returns {@link ListIdentitySourcesCommandOutput}
 * @see {@link ListIdentitySourcesCommandInput} for command's `input` shape.
 * @see {@link ListIdentitySourcesCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request failed because it references a resource that doesn't exist.
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
 * @example ListIdentitySources
 * ```javascript
 * // The following example request creates lists the identity sources currently defined in the specified policy store.
 * const input = {
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * };
 * const command = new ListIdentitySourcesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   identitySources: [
 *     {
 *       createdDate: "2023-05-19T20:29:23.66812Z",
 *       details: {
 *         clientIds: [
 *           "a1b2c3d4e5f6g7h8i9j0kalbmc"
 *         ],
 *         discoveryUrl: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_1a2b3c4d5",
 *         openIdIssuer: "COGNITO",
 *         userPoolArn: "arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5"
 *       },
 *       identitySourceId: "ISEXAMPLEabcdefg111111",
 *       lastUpdatedDate: "2023-05-19T20:29:23.66812Z",
 *       policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *       principalEntityType: "User"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListIdentitySourcesCommand extends command<ListIdentitySourcesCommandInput, ListIdentitySourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListIdentitySources",
  ListIdentitySources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIdentitySourcesInput;
      output: ListIdentitySourcesOutput;
    };
    sdk: {
      input: ListIdentitySourcesCommandInput;
      output: ListIdentitySourcesCommandOutput;
    };
  };
}
