// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateRoleAliasRequest, UpdateRoleAliasResponse } from "../models/models_2";
import { de_UpdateRoleAliasCommand, se_UpdateRoleAliasCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRoleAliasCommand}.
 */
export interface UpdateRoleAliasCommandInput extends UpdateRoleAliasRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRoleAliasCommand}.
 */
export interface UpdateRoleAliasCommandOutput extends UpdateRoleAliasResponse, __MetadataBearer {}

/**
 * <p>Updates a role alias.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateRoleAlias</a> action.</p>
 *          <important>
 *             <p>The value of <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateRoleAlias.html#iot-UpdateRoleAlias-request-credentialDurationSeconds">
 *                   <code>credentialDurationSeconds</code>
 *                </a> must be less than or equal to the
 *             maximum session duration of the IAM role that the role alias references. For more
 *             information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-managingrole-editing-api.html#roles-modify_max-session-duration-api"> Modifying a role maximum session duration (Amazon Web Services API)</a> from the Amazon Web Services
 *             Identity and Access Management User Guide.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateRoleAliasCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateRoleAliasCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = { // UpdateRoleAliasRequest
 *   roleAlias: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   credentialDurationSeconds: Number("int"),
 * };
 * const command = new UpdateRoleAliasCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRoleAliasResponse
 * //   roleAlias: "STRING_VALUE",
 * //   roleAliasArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateRoleAliasCommandInput - {@link UpdateRoleAliasCommandInput}
 * @returns {@link UpdateRoleAliasCommandOutput}
 * @see {@link UpdateRoleAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateRoleAliasCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class UpdateRoleAliasCommand extends $Command
  .classBuilder<
    UpdateRoleAliasCommandInput,
    UpdateRoleAliasCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "UpdateRoleAlias", {})
  .n("IoTClient", "UpdateRoleAliasCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRoleAliasCommand)
  .de(de_UpdateRoleAliasCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRoleAliasRequest;
      output: UpdateRoleAliasResponse;
    };
    sdk: {
      input: UpdateRoleAliasCommandInput;
      output: UpdateRoleAliasCommandOutput;
    };
  };
}
