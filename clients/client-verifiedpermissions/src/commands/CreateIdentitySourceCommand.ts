// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateIdentitySourceInput, CreateIdentitySourceOutput } from "../models/models_0";
import { CreateIdentitySource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateIdentitySourceCommand}.
 */
export interface CreateIdentitySourceCommandInput extends CreateIdentitySourceInput {}
/**
 * @public
 *
 * The output of {@link CreateIdentitySourceCommand}.
 */
export interface CreateIdentitySourceCommandOutput extends CreateIdentitySourceOutput, __MetadataBearer {}

/**
 * Adds an identity source to a policy store–an Amazon Cognito user pool or OpenID Connect (OIDC) identity provider (IdP).
 *
 * After you create an identity source, you can use the identities provided by the IdP as proxies for the principal in authorization queries that use the [IsAuthorizedWithToken](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_IsAuthorizedWithToken.html) or [BatchIsAuthorizedWithToken](https://docs.aws.amazon.com/verifiedpermissions/latest/apireference/API_BatchIsAuthorizedWithToken.html) API operations. These identities take the form of tokens that contain claims about the user, such as IDs, attributes and group memberships. Identity sources provide identity (ID) tokens and access tokens. Verified Permissions derives information about your user and session from token claims. Access tokens provide action `context` to your policies, and ID tokens provide principal `Attributes`.
 *
 * > **Important:** Tokens from an identity source user continue to be usable until they expire. Token revocation and resource deletion have no effect on the validity of a token in your policy store
 *
 * > **Note:**
 * >
 * > To reference a user from this identity source in your Cedar policies, refer to the following syntax examples.
 * >
 * > - Amazon Cognito user pool: `Namespace::[Entity type]::[User pool ID]|[user principal attribute]`, for example `MyCorp::User::us-east-1_EXAMPLE|a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`.
 * > - OpenID Connect (OIDC) provider: `Namespace::[Entity type]::[entityIdPrefix]|[user principal attribute]`, for example `MyCorp::User::MyOIDCProvider|a1b2c3d4-5678-90ab-cdef-EXAMPLE22222`.
 *
 * > **Note:** Verified Permissions is *[eventually consistent](https://wikipedia.org/wiki/Eventual_consistency)* . It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, CreateIdentitySourceCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, CreateIdentitySourceCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // import type { VerifiedPermissionsClientConfig } from "@aws-sdk/client-verifiedpermissions";
 * const config = {}; // type is VerifiedPermissionsClientConfig
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // CreateIdentitySourceInput
 *   clientToken: "STRING_VALUE",
 *   policyStoreId: "STRING_VALUE", // required
 *   configuration: { // Configuration Union: only one key present
 *     cognitoUserPoolConfiguration: { // CognitoUserPoolConfiguration
 *       userPoolArn: "STRING_VALUE", // required
 *       clientIds: [ // ClientIds
 *         "STRING_VALUE",
 *       ],
 *       groupConfiguration: { // CognitoGroupConfiguration
 *         groupEntityType: "STRING_VALUE", // required
 *       },
 *     },
 *     openIdConnectConfiguration: { // OpenIdConnectConfiguration
 *       issuer: "STRING_VALUE", // required
 *       entityIdPrefix: "STRING_VALUE",
 *       groupConfiguration: { // OpenIdConnectGroupConfiguration
 *         groupClaim: "STRING_VALUE", // required
 *         groupEntityType: "STRING_VALUE", // required
 *       },
 *       tokenSelection: { // OpenIdConnectTokenSelection Union: only one key present
 *         accessTokenOnly: { // OpenIdConnectAccessTokenConfiguration
 *           principalIdClaim: "STRING_VALUE",
 *           audiences: [ // Audiences
 *             "STRING_VALUE",
 *           ],
 *         },
 *         identityTokenOnly: { // OpenIdConnectIdentityTokenConfiguration
 *           principalIdClaim: "STRING_VALUE",
 *           clientIds: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *   },
 *   principalEntityType: "STRING_VALUE",
 * };
 * const command = new CreateIdentitySourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateIdentitySourceOutput
 * //   createdDate: new Date("TIMESTAMP"), // required
 * //   identitySourceId: "STRING_VALUE", // required
 * //   lastUpdatedDate: new Date("TIMESTAMP"), // required
 * //   policyStoreId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateIdentitySourceCommandInput - {@link CreateIdentitySourceCommandInput}
 * @returns {@link CreateIdentitySourceCommandOutput}
 * @see {@link CreateIdentitySourceCommandInput} for command's `input` shape.
 * @see {@link CreateIdentitySourceCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request failed because another request to modify a resource occurred at the same time.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request failed because it references a resource that doesn't exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request failed because it would cause a service quota to be exceeded.
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
 * @example To create an identity source
 * ```javascript
 * // The following ``create-identity-source`` example creates an identity source that lets you reference identities stored in the specified Amazon Cognito user pool. Those identities are available in Verified Permissions as entities of type ``User``.
 * const input = {
 *   clientToken: "a1b2c3d4-e5f6-a1b2-c3d4-TOKEN1111111",
 *   configuration: {
 *     cognitoUserPoolConfiguration: {
 *       clientIds: [
 *         "a1b2c3d4e5f6g7h8i9j0kalbmc"
 *       ],
 *       userPoolArn: "arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5"
 *     }
 *   },
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   principalEntityType: "User"
 * };
 * const command = new CreateIdentitySourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdDate: "2024-08-12T18:20:50.99Z",
 *   identitySourceId: "ISEXAMPLEabcdefg111111",
 *   lastUpdatedDate: "2024-08-12T18:20:50.99Z",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateIdentitySourceCommand extends command<CreateIdentitySourceCommandInput, CreateIdentitySourceCommandOutput>(
  _ep0,
  _mw0,
  "CreateIdentitySource",
  CreateIdentitySource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIdentitySourceInput;
      output: CreateIdentitySourceOutput;
    };
    sdk: {
      input: CreateIdentitySourceCommandInput;
      output: CreateIdentitySourceCommandOutput;
    };
  };
}
