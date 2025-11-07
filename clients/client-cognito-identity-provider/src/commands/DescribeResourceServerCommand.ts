// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeResourceServerRequest, DescribeResourceServerResponse } from "../models/models_0";
import { DescribeResourceServer } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeResourceServerCommand}.
 */
export interface DescribeResourceServerCommandInput extends DescribeResourceServerRequest {}
/**
 * @public
 *
 * The output of {@link DescribeResourceServerCommand}.
 */
export interface DescribeResourceServerCommandOutput extends DescribeResourceServerResponse, __MetadataBearer {}

/**
 * <p>Describes a resource server. For more information about resource servers, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-define-resource-servers.html">Access control with resource servers</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DescribeResourceServerCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeResourceServerCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DescribeResourceServerRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DescribeResourceServerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeResourceServerResponse
 * //   ResourceServer: { // ResourceServerType
 * //     UserPoolId: "STRING_VALUE",
 * //     Identifier: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Scopes: [ // ResourceServerScopeListType
 * //       { // ResourceServerScopeType
 * //         ScopeName: "STRING_VALUE", // required
 * //         ScopeDescription: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeResourceServerCommandInput - {@link DescribeResourceServerCommandInput}
 * @returns {@link DescribeResourceServerCommandOutput}
 * @see {@link DescribeResourceServerCommandInput} for command's `input` shape.
 * @see {@link DescribeResourceServerCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class DescribeResourceServerCommand extends $Command
  .classBuilder<
    DescribeResourceServerCommandInput,
    DescribeResourceServerCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "DescribeResourceServer", {})
  .n("CognitoIdentityProviderClient", "DescribeResourceServerCommand")
  .sc(DescribeResourceServer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeResourceServerRequest;
      output: DescribeResourceServerResponse;
    };
    sdk: {
      input: DescribeResourceServerCommandInput;
      output: DescribeResourceServerCommandOutput;
    };
  };
}
