// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListUserPoolClientSecretsRequest, ListUserPoolClientSecretsResponse } from "../models/models_0";
import { ListUserPoolClientSecrets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUserPoolClientSecretsCommand}.
 */
export interface ListUserPoolClientSecretsCommandInput extends ListUserPoolClientSecretsRequest {}
/**
 * @public
 *
 * The output of {@link ListUserPoolClientSecretsCommand}.
 */
export interface ListUserPoolClientSecretsCommandOutput extends ListUserPoolClientSecretsResponse, __MetadataBearer {}

/**
 * <p>Lists all client secrets associated with a user pool app client. Returns metadata about the secrets. The response does not include pagination tokens as there are only 2 secrets at any given time and we return both with every ListUserPoolClientSecrets call. For security reasons, the response never reveals the actual secret value in ClientSecretValue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, ListUserPoolClientSecretsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListUserPoolClientSecretsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ListUserPoolClientSecretsRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListUserPoolClientSecretsCommand(input);
 * const response = await client.send(command);
 * // { // ListUserPoolClientSecretsResponse
 * //   ClientSecrets: [ // ClientSecretDescriptorListType
 * //     { // ClientSecretDescriptorType
 * //       ClientSecretId: "STRING_VALUE",
 * //       ClientSecretValue: "STRING_VALUE",
 * //       ClientSecretCreateDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUserPoolClientSecretsCommandInput - {@link ListUserPoolClientSecretsCommandInput}
 * @returns {@link ListUserPoolClientSecretsCommandOutput}
 * @see {@link ListUserPoolClientSecretsCommandInput} for command's `input` shape.
 * @see {@link ListUserPoolClientSecretsCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal server error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>This exception is thrown when a user exceeds the limit for a requested Amazon Web Services
 *             resource.</p>
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
export class ListUserPoolClientSecretsCommand extends $Command
  .classBuilder<
    ListUserPoolClientSecretsCommandInput,
    ListUserPoolClientSecretsCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "ListUserPoolClientSecrets", {})
  .n("CognitoIdentityProviderClient", "ListUserPoolClientSecretsCommand")
  .sc(ListUserPoolClientSecrets$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUserPoolClientSecretsRequest;
      output: ListUserPoolClientSecretsResponse;
    };
    sdk: {
      input: ListUserPoolClientSecretsCommandInput;
      output: ListUserPoolClientSecretsCommandOutput;
    };
  };
}
