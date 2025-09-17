// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { LookupDeveloperIdentityInput, LookupDeveloperIdentityResponse } from "../models/models_0";
import { de_LookupDeveloperIdentityCommand, se_LookupDeveloperIdentityCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link LookupDeveloperIdentityCommand}.
 */
export interface LookupDeveloperIdentityCommandInput extends LookupDeveloperIdentityInput {}
/**
 * @public
 *
 * The output of {@link LookupDeveloperIdentityCommand}.
 */
export interface LookupDeveloperIdentityCommandOutput extends LookupDeveloperIdentityResponse, __MetadataBearer {}

/**
 * <p>Retrieves the <code>IdentityID</code> associated with a
 *             <code>DeveloperUserIdentifier</code> or the list of <code>DeveloperUserIdentifier</code>
 *          values associated with an <code>IdentityId</code> for an existing identity. Either
 *             <code>IdentityID</code> or <code>DeveloperUserIdentifier</code> must not be null. If you
 *          supply only one of these values, the other value will be searched in the database and
 *          returned as a part of the response. If you supply both,
 *             <code>DeveloperUserIdentifier</code> will be matched against <code>IdentityID</code>. If
 *          the values are verified against the database, the response returns both values and is the
 *          same as the request. Otherwise, a <code>ResourceConflictException</code> is
 *          thrown.</p>
 *          <p>
 *             <code>LookupDeveloperIdentity</code> is intended for low-throughput control plane
 *          operations: for example, to enable customer service to locate an identity ID by username.
 *          If you are using it for higher-volume operations such as user authentication, your requests
 *          are likely to be throttled. <a>GetOpenIdTokenForDeveloperIdentity</a> is a
 *          better option for higher-volume operations for user authentication.</p>
 *          <p>You must use Amazon Web Services developer credentials to call this
 *          operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityClient, LookupDeveloperIdentityCommand } from "@aws-sdk/client-cognito-identity"; // ES Modules import
 * // const { CognitoIdentityClient, LookupDeveloperIdentityCommand } = require("@aws-sdk/client-cognito-identity"); // CommonJS import
 * // import type { CognitoIdentityClientConfig } from "@aws-sdk/client-cognito-identity";
 * const config = {}; // type is CognitoIdentityClientConfig
 * const client = new CognitoIdentityClient(config);
 * const input = { // LookupDeveloperIdentityInput
 *   IdentityPoolId: "STRING_VALUE", // required
 *   IdentityId: "STRING_VALUE",
 *   DeveloperUserIdentifier: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new LookupDeveloperIdentityCommand(input);
 * const response = await client.send(command);
 * // { // LookupDeveloperIdentityResponse
 * //   IdentityId: "STRING_VALUE",
 * //   DeveloperUserIdentifierList: [ // DeveloperUserIdentifierList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param LookupDeveloperIdentityCommandInput - {@link LookupDeveloperIdentityCommandInput}
 * @returns {@link LookupDeveloperIdentityCommandOutput}
 * @see {@link LookupDeveloperIdentityCommandInput} for command's `input` shape.
 * @see {@link LookupDeveloperIdentityCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class LookupDeveloperIdentityCommand extends $Command
  .classBuilder<
    LookupDeveloperIdentityCommandInput,
    LookupDeveloperIdentityCommandOutput,
    CognitoIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityService", "LookupDeveloperIdentity", {})
  .n("CognitoIdentityClient", "LookupDeveloperIdentityCommand")
  .f(void 0, void 0)
  .ser(se_LookupDeveloperIdentityCommand)
  .de(de_LookupDeveloperIdentityCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: LookupDeveloperIdentityInput;
      output: LookupDeveloperIdentityResponse;
    };
    sdk: {
      input: LookupDeveloperIdentityCommandInput;
      output: LookupDeveloperIdentityCommandOutput;
    };
  };
}
