// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPrincipalTagAttributeMapInput, GetPrincipalTagAttributeMapResponse } from "../models/models_0";
import { GetPrincipalTagAttributeMap$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPrincipalTagAttributeMapCommand}.
 */
export interface GetPrincipalTagAttributeMapCommandInput extends GetPrincipalTagAttributeMapInput {}
/**
 * @public
 *
 * The output of {@link GetPrincipalTagAttributeMapCommand}.
 */
export interface GetPrincipalTagAttributeMapCommandOutput extends GetPrincipalTagAttributeMapResponse, __MetadataBearer {}

/**
 * Use `GetPrincipalTagAttributeMap` to list all mappings between `PrincipalTags` and user attributes.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, GetPrincipalTagAttributeMapCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, GetPrincipalTagAttributeMapCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * // import type { CognitoIdentityClientConfig } from "@aws-sdk/client-cognito-identity";
 * const config = {}; // type is CognitoIdentityClientConfig
 * const client = new CognitoIdentityClient(config);
 * const input = { // GetPrincipalTagAttributeMapInput
 *   IdentityPoolId: "STRING_VALUE", // required
 *   IdentityProviderName: "STRING_VALUE", // required
 * };
 * const command = new GetPrincipalTagAttributeMapCommand(input);
 * const response = await client.send(command);
 * // { // GetPrincipalTagAttributeMapResponse
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
 * @param GetPrincipalTagAttributeMapCommandInput - {@link GetPrincipalTagAttributeMapCommandInput}
 * @returns {@link GetPrincipalTagAttributeMapCommandOutput}
 * @see {@link GetPrincipalTagAttributeMapCommandInput} for command's `input` shape.
 * @see {@link GetPrincipalTagAttributeMapCommandOutput} for command's `response` shape.
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
export class GetPrincipalTagAttributeMapCommand extends command<GetPrincipalTagAttributeMapCommandInput, GetPrincipalTagAttributeMapCommandOutput>(
  _ep0,
  _mw0,
  "GetPrincipalTagAttributeMap",
  GetPrincipalTagAttributeMap$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPrincipalTagAttributeMapInput;
      output: GetPrincipalTagAttributeMapResponse;
    };
    sdk: {
      input: GetPrincipalTagAttributeMapCommandInput;
      output: GetPrincipalTagAttributeMapCommandOutput;
    };
  };
}
