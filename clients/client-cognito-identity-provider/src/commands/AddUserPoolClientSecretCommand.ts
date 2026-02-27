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
import type { AddUserPoolClientSecretRequest, AddUserPoolClientSecretResponse } from "../models/models_0";
import { AddUserPoolClientSecret$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddUserPoolClientSecretCommand}.
 */
export interface AddUserPoolClientSecretCommandInput extends AddUserPoolClientSecretRequest {}
/**
 * @public
 *
 * The output of {@link AddUserPoolClientSecretCommand}.
 */
export interface AddUserPoolClientSecretCommandOutput extends AddUserPoolClientSecretResponse, __MetadataBearer {}

/**
 * <p>Creates a new client secret for an existing confidential user pool app client. Supports up to 2 active secrets per app client for zero-downtime credential rotation workflows.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AddUserPoolClientSecretCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AddUserPoolClientSecretCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AddUserPoolClientSecretRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE", // required
 *   ClientSecret: "STRING_VALUE",
 * };
 * const command = new AddUserPoolClientSecretCommand(input);
 * const response = await client.send(command);
 * // { // AddUserPoolClientSecretResponse
 * //   ClientSecretDescriptor: { // ClientSecretDescriptorType
 * //     ClientSecretId: "STRING_VALUE",
 * //     ClientSecretValue: "STRING_VALUE",
 * //     ClientSecretCreateDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param AddUserPoolClientSecretCommandInput - {@link AddUserPoolClientSecretCommandInput}
 * @returns {@link AddUserPoolClientSecretCommandOutput}
 * @see {@link AddUserPoolClientSecretCommandInput} for command's `input` shape.
 * @see {@link AddUserPoolClientSecretCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when you don't have sufficient permissions to perform the requested operation.</p>
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
export class AddUserPoolClientSecretCommand extends $Command
  .classBuilder<
    AddUserPoolClientSecretCommandInput,
    AddUserPoolClientSecretCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "AddUserPoolClientSecret", {})
  .n("CognitoIdentityProviderClient", "AddUserPoolClientSecretCommand")
  .sc(AddUserPoolClientSecret$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddUserPoolClientSecretRequest;
      output: AddUserPoolClientSecretResponse;
    };
    sdk: {
      input: AddUserPoolClientSecretCommandInput;
      output: AddUserPoolClientSecretCommandOutput;
    };
  };
}
