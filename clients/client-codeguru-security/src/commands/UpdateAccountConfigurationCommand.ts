// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeGuruSecurityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruSecurityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAccountConfigurationRequest, UpdateAccountConfigurationResponse } from "../models/models_0";
import { de_UpdateAccountConfigurationCommand, se_UpdateAccountConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccountConfigurationCommand}.
 */
export interface UpdateAccountConfigurationCommandInput extends UpdateAccountConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccountConfigurationCommand}.
 */
export interface UpdateAccountConfigurationCommandOutput extends UpdateAccountConfigurationResponse, __MetadataBearer {}

/**
 * <p>Use to update the encryption configuration for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruSecurityClient, UpdateAccountConfigurationCommand } from "@aws-sdk/client-codeguru-security"; // ES Modules import
 * // const { CodeGuruSecurityClient, UpdateAccountConfigurationCommand } = require("@aws-sdk/client-codeguru-security"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeGuruSecurityClient(config);
 * const input = { // UpdateAccountConfigurationRequest
 *   encryptionConfig: { // EncryptionConfig
 *     kmsKeyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAccountConfigurationResponse
 * //   encryptionConfig: { // EncryptionConfig
 * //     kmsKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAccountConfigurationCommandInput - {@link UpdateAccountConfigurationCommandInput}
 * @returns {@link UpdateAccountConfigurationCommandOutput}
 * @see {@link UpdateAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruSecurityClientResolvedConfig | config} for CodeGuruSecurityClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request was not found.</p>
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
 * @public
 */
export class UpdateAccountConfigurationCommand extends $Command
  .classBuilder<
    UpdateAccountConfigurationCommandInput,
    UpdateAccountConfigurationCommandOutput,
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
  .s("AwsCodeGuruSecurity", "UpdateAccountConfiguration", {})
  .n("CodeGuruSecurityClient", "UpdateAccountConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAccountConfigurationCommand)
  .de(de_UpdateAccountConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccountConfigurationRequest;
      output: UpdateAccountConfigurationResponse;
    };
    sdk: {
      input: UpdateAccountConfigurationCommandInput;
      output: UpdateAccountConfigurationCommandOutput;
    };
  };
}
