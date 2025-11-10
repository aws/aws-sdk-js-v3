// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAccessTokenRequest, CreateAccessTokenResponse } from "../models/models_0";
import { CreateAccessToken } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessTokenCommand}.
 */
export interface CreateAccessTokenCommandInput extends CreateAccessTokenRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessTokenCommand}.
 */
export interface CreateAccessTokenCommandOutput extends CreateAccessTokenResponse, __MetadataBearer {}

/**
 * <p>Creates a personal access token (PAT) for the current user. A personal access token (PAT) is similar to a password.
 *       It is associated with your user identity for use across all spaces and projects in Amazon CodeCatalyst. You use PATs to access CodeCatalyst
 *       from resources that include integrated development environments (IDEs) and Git-based source repositories.
 *       PATs represent you in Amazon CodeCatalyst and you can manage them in your user settings.For more information, see
 *       <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/ipa-tokens-keys.html">Managing personal access tokens in Amazon CodeCatalyst</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, CreateAccessTokenCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, CreateAccessTokenCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * // import type { CodeCatalystClientConfig } from "@aws-sdk/client-codecatalyst";
 * const config = {}; // type is CodeCatalystClientConfig
 * const client = new CodeCatalystClient(config);
 * const input = { // CreateAccessTokenRequest
 *   name: "STRING_VALUE", // required
 *   expiresTime: new Date("TIMESTAMP"),
 * };
 * const command = new CreateAccessTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessTokenResponse
 * //   secret: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   expiresTime: new Date("TIMESTAMP"), // required
 * //   accessTokenId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAccessTokenCommandInput - {@link CreateAccessTokenCommandInput}
 * @returns {@link CreateAccessTokenCommandOutput}
 * @see {@link CreateAccessTokenCommandInput} for command's `input` shape.
 * @see {@link CreateAccessTokenCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request.
 *        Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce
 *       the number of resources, or change the tier if applicable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.</p>
 *
 * @throws {@link CodeCatalystServiceException}
 * <p>Base exception class for all service exceptions from CodeCatalyst service.</p>
 *
 *
 * @public
 */
export class CreateAccessTokenCommand extends $Command
  .classBuilder<
    CreateAccessTokenCommandInput,
    CreateAccessTokenCommandOutput,
    CodeCatalystClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeCatalystClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeCatalyst", "CreateAccessToken", {})
  .n("CodeCatalystClient", "CreateAccessTokenCommand")
  .sc(CreateAccessToken)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessTokenRequest;
      output: CreateAccessTokenResponse;
    };
    sdk: {
      input: CreateAccessTokenCommandInput;
      output: CreateAccessTokenCommandOutput;
    };
  };
}
