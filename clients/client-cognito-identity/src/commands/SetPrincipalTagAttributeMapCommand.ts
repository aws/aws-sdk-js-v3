// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetPrincipalTagAttributeMapInput, SetPrincipalTagAttributeMapResponse } from "../models/models_0";
import { SetPrincipalTagAttributeMap$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SetPrincipalTagAttributeMapCommand}.
 */
export interface SetPrincipalTagAttributeMapCommandInput extends SetPrincipalTagAttributeMapInput {}
/**
 * @public
 *
 * The output of {@link SetPrincipalTagAttributeMapCommand}.
 */
export interface SetPrincipalTagAttributeMapCommandOutput extends SetPrincipalTagAttributeMapResponse, __MetadataBearer {}

/**
 * You can use this operation to use default (username and clientID) attribute or custom attribute mappings.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, SetPrincipalTagAttributeMapCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, SetPrincipalTagAttributeMapCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * // import type { CognitoIdentityClientConfig } from "@aws-sdk/client-cognito-identity";
 * const config = {}; // type is CognitoIdentityClientConfig
 * const client = new CognitoIdentityClient(config);
 * const input = { // SetPrincipalTagAttributeMapInput
 *   IdentityPoolId: "STRING_VALUE", // required
 *   IdentityProviderName: "STRING_VALUE", // required
 *   UseDefaults: true || false,
 *   PrincipalTags: { // PrincipalTags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new SetPrincipalTagAttributeMapCommand(input);
 * const response = await client.send(command);
 * // { // SetPrincipalTagAttributeMapResponse
 * //   IdentityPoolId: "STRING_VALUE",
 * //   IdentityProviderName: "STRING_VALUE",
 * //   UseDefaults: true || false,
 * //   PrincipalTags: { // PrincipalTags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param SetPrincipalTagAttributeMapCommandInput - {@link SetPrincipalTagAttributeMapCommandInput}
 * @returns {@link SetPrincipalTagAttributeMapCommandOutput}
 * @see {@link SetPrincipalTagAttributeMapCommandInput} for command's `input` shape.
 * @see {@link SetPrincipalTagAttributeMapCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityClientResolvedConfig | config} for CognitoIdentityClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Thrown when the service encounters an error during processing the request.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Thrown for missing or bad input parameter(s).
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * Thrown when a user is not authorized to access the requested resource.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Thrown when the requested resource (for example, a dataset or record) does not exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Thrown when a request is throttled.
 *
 * @throws {@link CognitoIdentityServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentity service.
 *
 * @public
 */
export class SetPrincipalTagAttributeMapCommand extends command<SetPrincipalTagAttributeMapCommandInput, SetPrincipalTagAttributeMapCommandOutput>(
  _ep0,
  _mw0,
  "SetPrincipalTagAttributeMap",
  SetPrincipalTagAttributeMap$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetPrincipalTagAttributeMapInput;
      output: SetPrincipalTagAttributeMapResponse;
    };
    sdk: {
      input: SetPrincipalTagAttributeMapCommandInput;
      output: SetPrincipalTagAttributeMapCommandOutput;
    };
  };
}
