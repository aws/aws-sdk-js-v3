// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { MergeDeveloperIdentitiesInput, MergeDeveloperIdentitiesResponse } from "../models/models_0";
import { de_MergeDeveloperIdentitiesCommand, se_MergeDeveloperIdentitiesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Merges two users having different <code>IdentityId</code>s, existing in the same
 *          identity pool, and identified by the same developer provider. You can use this action to
 *          request that discrete users be merged and identified as a single user in the Cognito
 *          environment. Cognito associates the given source user (<code>SourceUserIdentifier</code>)
 *          with the <code>IdentityId</code> of the <code>DestinationUserIdentifier</code>. Only
 *          developer-authenticated users can be merged. If the users to be merged are associated with
 *          the same public provider, but as two different users, an exception will be
 *          thrown.</p>
 *          <p>The number of linked logins is limited to 20. So, the number of linked logins for the
 *          source user, <code>SourceUserIdentifier</code>, and the destination user,
 *          <code>DestinationUserIdentifier</code>, together should not be larger than 20.
 *          Otherwise, an exception will be thrown.</p>
 *          <p>You must use AWS Developer credentials to call this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, MergeDeveloperIdentitiesCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, MergeDeveloperIdentitiesCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
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
 *  <p>Thrown when the service encounters an error during processing the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Thrown for missing or bad input parameter(s).</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>Thrown when a user is not authorized to access the requested resource.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>Thrown when a user tries to use a login which is already linked to another
 *          account.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when the requested resource (for example, a dataset or record) does not
 *          exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Thrown when a request is throttled.</p>
 *
 * @throws {@link CognitoIdentityServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentity service.</p>
 *
 * @public
 */
export class MergeDeveloperIdentitiesCommand extends $Command
  .classBuilder<
    MergeDeveloperIdentitiesCommandInput,
    MergeDeveloperIdentitiesCommandOutput,
    CognitoIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityService", "MergeDeveloperIdentities", {})
  .n("CognitoIdentityClient", "MergeDeveloperIdentitiesCommand")
  .f(void 0, void 0)
  .ser(se_MergeDeveloperIdentitiesCommand)
  .de(de_MergeDeveloperIdentitiesCommand)
  .build() {}
