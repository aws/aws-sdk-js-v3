// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UnlinkDeveloperIdentityInput } from "../models/models_0";
import { UnlinkDeveloperIdentity$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UnlinkDeveloperIdentityCommand}.
 */
export interface UnlinkDeveloperIdentityCommandInput extends UnlinkDeveloperIdentityInput {}
/**
 * @public
 *
 * The output of {@link UnlinkDeveloperIdentityCommand}.
 */
export interface UnlinkDeveloperIdentityCommandOutput extends __MetadataBearer {}

/**
 * Unlinks a `DeveloperUserIdentifier` from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible.
 *
 * You must use Amazon Web Services developer credentials to call this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, UnlinkDeveloperIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, UnlinkDeveloperIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * // import type { CognitoIdentityClientConfig } from "@aws-sdk/client-cognito-identity";
 * const config = {}; // type is CognitoIdentityClientConfig
 * const client = new CognitoIdentityClient(config);
 * const input = { // UnlinkDeveloperIdentityInput
 *   IdentityId: "STRING_VALUE", // required
 *   IdentityPoolId: "STRING_VALUE", // required
 *   DeveloperProviderName: "STRING_VALUE", // required
 *   DeveloperUserIdentifier: "STRING_VALUE", // required
 * };
 * const command = new UnlinkDeveloperIdentityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UnlinkDeveloperIdentityCommandInput - {@link UnlinkDeveloperIdentityCommandInput}
 * @returns {@link UnlinkDeveloperIdentityCommandOutput}
 * @see {@link UnlinkDeveloperIdentityCommandInput} for command's `input` shape.
 * @see {@link UnlinkDeveloperIdentityCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceConflictException} (client fault)
 *
 * Thrown when a user tries to use a login which is already linked to another account.
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
export class UnlinkDeveloperIdentityCommand extends command<UnlinkDeveloperIdentityCommandInput, UnlinkDeveloperIdentityCommandOutput>(
  _ep0,
  _mw0,
  "UnlinkDeveloperIdentity",
  UnlinkDeveloperIdentity$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UnlinkDeveloperIdentityInput;
      output: {};
    };
    sdk: {
      input: UnlinkDeveloperIdentityCommandInput;
      output: UnlinkDeveloperIdentityCommandOutput;
    };
  };
}
