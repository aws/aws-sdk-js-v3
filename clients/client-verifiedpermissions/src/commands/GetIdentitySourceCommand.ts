// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetIdentitySourceInput, GetIdentitySourceOutput } from "../models/models_0";
import { GetIdentitySource } from "../schemas/schemas_4_Identity";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  VerifiedPermissionsClientResolvedConfig,
} from "../VerifiedPermissionsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIdentitySourceCommand}.
 */
export interface GetIdentitySourceCommandInput extends GetIdentitySourceInput {}
/**
 * @public
 *
 * The output of {@link GetIdentitySourceCommand}.
 */
export interface GetIdentitySourceCommandOutput extends GetIdentitySourceOutput, __MetadataBearer {}

/**
 * <p>Retrieves the details about the specified identity source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { VerifiedPermissionsClient, GetIdentitySourceCommand } from "@aws-sdk/client-verifiedpermissions"; // ES Modules import
 * // const { VerifiedPermissionsClient, GetIdentitySourceCommand } = require("@aws-sdk/client-verifiedpermissions"); // CommonJS import
 * // import type { VerifiedPermissionsClientConfig } from "@aws-sdk/client-verifiedpermissions";
 * const config = {}; // type is VerifiedPermissionsClientConfig
 * const client = new VerifiedPermissionsClient(config);
 * const input = { // GetIdentitySourceInput
 *   policyStoreId: "STRING_VALUE", // required
 *   identitySourceId: "STRING_VALUE", // required
 * };
 * const command = new GetIdentitySourceCommand(input);
 * const response = await client.send(command);
 * // { // GetIdentitySourceOutput
 * //   createdDate: new Date("TIMESTAMP"), // required
 * //   details: { // IdentitySourceDetails
 * //     clientIds: [ // ClientIds
 * //       "STRING_VALUE",
 * //     ],
 * //     userPoolArn: "STRING_VALUE",
 * //     discoveryUrl: "STRING_VALUE",
 * //     openIdIssuer: "COGNITO",
 * //   },
 * //   identitySourceId: "STRING_VALUE", // required
 * //   lastUpdatedDate: new Date("TIMESTAMP"), // required
 * //   policyStoreId: "STRING_VALUE", // required
 * //   principalEntityType: "STRING_VALUE", // required
 * //   configuration: { // ConfigurationDetail Union: only one key present
 * //     cognitoUserPoolConfiguration: { // CognitoUserPoolConfigurationDetail
 * //       userPoolArn: "STRING_VALUE", // required
 * //       clientIds: [ // required
 * //         "STRING_VALUE",
 * //       ],
 * //       issuer: "STRING_VALUE", // required
 * //       groupConfiguration: { // CognitoGroupConfigurationDetail
 * //         groupEntityType: "STRING_VALUE",
 * //       },
 * //     },
 * //     openIdConnectConfiguration: { // OpenIdConnectConfigurationDetail
 * //       issuer: "STRING_VALUE", // required
 * //       entityIdPrefix: "STRING_VALUE",
 * //       groupConfiguration: { // OpenIdConnectGroupConfigurationDetail
 * //         groupClaim: "STRING_VALUE", // required
 * //         groupEntityType: "STRING_VALUE", // required
 * //       },
 * //       tokenSelection: { // OpenIdConnectTokenSelectionDetail Union: only one key present
 * //         accessTokenOnly: { // OpenIdConnectAccessTokenConfigurationDetail
 * //           principalIdClaim: "STRING_VALUE",
 * //           audiences: [ // Audiences
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         identityTokenOnly: { // OpenIdConnectIdentityTokenConfigurationDetail
 * //           principalIdClaim: "STRING_VALUE",
 * //           clientIds: "<ClientIds>",
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetIdentitySourceCommandInput - {@link GetIdentitySourceCommandInput}
 * @returns {@link GetIdentitySourceCommandOutput}
 * @see {@link GetIdentitySourceCommandInput} for command's `input` shape.
 * @see {@link GetIdentitySourceCommandOutput} for command's `response` shape.
 * @see {@link VerifiedPermissionsClientResolvedConfig | config} for VerifiedPermissionsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request failed because it references a resource that doesn't exist.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed because of an internal error. Try your request again later</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request failed because it exceeded a throttling quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because one or more input parameters don't satisfy their constraint requirements. The output is provided as a list of fields and a reason for each field that isn't valid.</p> <p>The possible reasons include the following:</p> <ul> <li> <p> <b>UnrecognizedEntityType</b> </p> <p>The policy includes an entity type that isn't found in the schema.</p> </li> <li> <p> <b>UnrecognizedActionId</b> </p> <p>The policy includes an action id that isn't found in the schema.</p> </li> <li> <p> <b>InvalidActionApplication</b> </p> <p>The policy includes an action that, according to the schema, doesn't support the specified principal and resource.</p> </li> <li> <p> <b>UnexpectedType</b> </p> <p>The policy included an operand that isn't a valid type for the specified operation.</p> </li> <li> <p> <b>IncompatibleTypes</b> </p> <p>The types of elements included in a <code>set</code>, or the types of expressions used in an <code>if...then...else</code> clause aren't compatible in this context.</p> </li> <li> <p> <b>MissingAttribute</b> </p> <p>The policy attempts to access a record or entity attribute that isn't specified in the schema. Test for the existence of the attribute first before attempting to access its value. For more information, see the <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the <i>Cedar Policy Language Guide</i>.</p> </li> <li> <p> <b>UnsafeOptionalAttributeAccess</b> </p> <p>The policy attempts to access a record or entity attribute that is optional and isn't guaranteed to be present. Test for the existence of the attribute first before attempting to access its value. For more information, see the <a href="https://docs.cedarpolicy.com/policies/syntax-operators.html#has-presence-of-attribute-test">has (presence of attribute test) operator</a> in the <i>Cedar Policy Language Guide</i>.</p> </li> <li> <p> <b>ImpossiblePolicy</b> </p> <p>Cedar has determined that a policy condition always evaluates to false. If the policy is always false, it can never apply to any query, and so it can never affect an authorization decision.</p> </li> <li> <p> <b>WrongNumberArguments</b> </p> <p>The policy references an extension type with the wrong number of arguments.</p> </li> <li> <p> <b>FunctionArgumentValidationError</b> </p> <p>Cedar couldn't parse the argument passed to an extension type. For example, a string that is to be parsed as an IPv4 address can contain only digits and the period character.</p> </li> </ul>
 *
 * @throws {@link VerifiedPermissionsServiceException}
 * <p>Base exception class for all service exceptions from VerifiedPermissions service.</p>
 *
 *
 * @example To retrieve details about an identity source
 * ```javascript
 * // The following example retrieves the details for the specified identity source.
 * const input = {
 *   identitySourceId: "ISEXAMPLEabcdefg111111",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a"
 * };
 * const command = new GetIdentitySourceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   createdDate: "2024-08-12T18:20:50.99Z",
 *   details: {
 *     clientIds: [
 *       "a1b2c3d4e5f6g7h8i9j0kalbmc"
 *     ],
 *     discoveryUrl: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_1a2b3c4d5",
 *     openIdIssuer: "COGNITO",
 *     userPoolArn: "arn:aws:cognito-idp:us-east-1:123456789012:userpool/us-east-1_1a2b3c4d5"
 *   },
 *   identitySourceId: "ISEXAMPLEabcdefg111111",
 *   lastUpdatedDate: "2024-08-12T18:20:50.99Z",
 *   policyStoreId: "C7v5xMplfFH3i3e4Jrzb1a",
 *   principalEntityType: "AWS::Cognito"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetIdentitySourceCommand extends $Command
  .classBuilder<
    GetIdentitySourceCommandInput,
    GetIdentitySourceCommandOutput,
    VerifiedPermissionsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: VerifiedPermissionsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("VerifiedPermissions", "GetIdentitySource", {})
  .n("VerifiedPermissionsClient", "GetIdentitySourceCommand")
  .sc(GetIdentitySource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIdentitySourceInput;
      output: GetIdentitySourceOutput;
    };
    sdk: {
      input: GetIdentitySourceCommandInput;
      output: GetIdentitySourceCommandOutput;
    };
  };
}
