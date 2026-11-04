// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { MergeDeveloperIdentitiesInput, MergeDeveloperIdentitiesResponse } from "../models/models_0";
import { MergeDeveloperIdentities$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link MergeDeveloperIdentitiesCommand}.
 */
export interface MergeDeveloperIdentitiesCommandInput extends MergeDeveloperIdentitiesInput {}
/**
 * @public
 *
 * The output of {@link MergeDeveloperIdentitiesCommand}.
 */
export interface MergeDeveloperIdentitiesCommandOutput extends MergeDeveloperIdentitiesResponse, __MetadataBearer {}

/**
 * Merges two users having different `IdentityId`s, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (`SourceUserIdentifier`) with the `IdentityId` of the `DestinationUserIdentifier`. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown.
 *
 * The number of linked logins is limited to 20. So, the number of linked logins for the source user, `SourceUserIdentifier`, and the destination user, `DestinationUserIdentifier`, together should not be larger than 20. Otherwise, an exception will be thrown.
 *
 * You must use Amazon Web Services developer credentials to call this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, MergeDeveloperIdentitiesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, MergeDeveloperIdentitiesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * // import type { CognitoIdentityClientConfig } from "@aws-sdk/client-cognito-identity";
 * const config = {}; // type is CognitoIdentityClientConfig
 * const client = new CognitoIdentityClient(config);
 * const input = { // MergeDeveloperIdentitiesInput
 *   SourceUserIdentifier: "STRING_VALUE", // required
 *   DestinationUserIdentifier: "STRING_VALUE", // required
 *   DeveloperProviderName: "STRING_VALUE", // required
 *   IdentityPoolId: "STRING_VALUE", // required
 * };
 * const command = new MergeDeveloperIdentitiesCommand(input);
 * const response = await client.send(command);
 * // { // MergeDeveloperIdentitiesResponse
 * //   IdentityId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param MergeDeveloperIdentitiesCommandInput - {@link MergeDeveloperIdentitiesCommandInput}
 * @returns {@link MergeDeveloperIdentitiesCommandOutput}
 * @see {@link MergeDeveloperIdentitiesCommandInput} for command's `input` shape.
 * @see {@link MergeDeveloperIdentitiesCommandOutput} for command's `response` shape.
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
export class MergeDeveloperIdentitiesCommand extends command<MergeDeveloperIdentitiesCommandInput, MergeDeveloperIdentitiesCommandOutput>(
  _ep0,
  _mw0,
  "MergeDeveloperIdentities",
  MergeDeveloperIdentities$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MergeDeveloperIdentitiesInput;
      output: MergeDeveloperIdentitiesResponse;
    };
    sdk: {
      input: MergeDeveloperIdentitiesCommandInput;
      output: MergeDeveloperIdentitiesCommandOutput;
    };
  };
}
