// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruSecurityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruSecurityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAccountConfigurationRequest, GetAccountConfigurationResponse } from "../models/models_0";
import { de_GetAccountConfigurationCommand, se_GetAccountConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountConfigurationCommand}.
 */
export interface GetAccountConfigurationCommandInput extends GetAccountConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountConfigurationCommand}.
 */
export interface GetAccountConfigurationCommandOutput extends GetAccountConfigurationResponse, __MetadataBearer {}

/**
 * <p>Use to get the encryption configuration for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruSecurityClient, GetAccountConfigurationCommand } from "@aws-sdk/client-codeguru-security"; // ES Modules import
 * // const { CodeGuruSecurityClient, GetAccountConfigurationCommand } = require("@aws-sdk/client-codeguru-security"); // CommonJS import
 * const client = new CodeGuruSecurityClient(config);
 * const input = {};
 * const command = new GetAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountConfigurationResponse
 * //   encryptionConfig: { // EncryptionConfig
 * //     kmsKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccountConfigurationCommandInput - {@link GetAccountConfigurationCommandInput}
 * @returns {@link GetAccountConfigurationCommandOutput}
 * @see {@link GetAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAccountConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruSecurityClientResolvedConfig | config} for CodeGuruSecurityClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CodeGuruSecurityServiceException}
 * <p>Base exception class for all service exceptions from CodeGuruSecurity service.</p>
 *
 *
 * @public
 */
export class GetAccountConfigurationCommand extends $Command
  .classBuilder<
    GetAccountConfigurationCommandInput,
    GetAccountConfigurationCommandOutput,
    CodeGuruSecurityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeGuruSecurityClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsCodeGuruSecurity", "GetAccountConfiguration", {})
  .n("CodeGuruSecurityClient", "GetAccountConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetAccountConfigurationCommand)
  .de(de_GetAccountConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountConfigurationResponse;
    };
    sdk: {
      input: GetAccountConfigurationCommandInput;
      output: GetAccountConfigurationCommandOutput;
    };
  };
}
