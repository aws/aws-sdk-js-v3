// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MailManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MailManagerClient";
import { UpdateRelayRequest, UpdateRelayResponse } from "../models/models_0";
import { de_UpdateRelayCommand, se_UpdateRelayCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRelayCommand}.
 */
export interface UpdateRelayCommandInput extends UpdateRelayRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRelayCommand}.
 */
export interface UpdateRelayCommandOutput extends UpdateRelayResponse, __MetadataBearer {}

/**
 * <p>Updates the attributes of an existing relay resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MailManagerClient, UpdateRelayCommand } from "@aws-sdk/client-mailmanager"; // ES Modules import
 * // const { MailManagerClient, UpdateRelayCommand } = require("@aws-sdk/client-mailmanager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MailManagerClient(config);
 * const input = { // UpdateRelayRequest
 *   RelayId: "STRING_VALUE", // required
 *   RelayName: "STRING_VALUE",
 *   ServerName: "STRING_VALUE",
 *   ServerPort: Number("int"),
 *   Authentication: { // RelayAuthentication Union: only one key present
 *     SecretArn: "STRING_VALUE",
 *     NoAuthentication: {},
 *   },
 * };
 * const command = new UpdateRelayCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRelayCommandInput - {@link UpdateRelayCommandInput}
 * @returns {@link UpdateRelayCommandOutput}
 * @see {@link UpdateRelayCommandInput} for command's `input` shape.
 * @see {@link UpdateRelayCommandOutput} for command's `response` shape.
 * @see {@link MailManagerClientResolvedConfig | config} for MailManagerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when a requested resource is not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request validation has failed. For details, see the accompanying error message.</p>
 *
 * @throws {@link MailManagerServiceException}
 * <p>Base exception class for all service exceptions from MailManager service.</p>
 *
 * @public
 */
export class UpdateRelayCommand extends $Command
  .classBuilder<
    UpdateRelayCommandInput,
    UpdateRelayCommandOutput,
    MailManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MailManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MailManagerSvc", "UpdateRelay", {})
  .n("MailManagerClient", "UpdateRelayCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRelayCommand)
  .de(de_UpdateRelayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRelayRequest;
      output: {};
    };
    sdk: {
      input: UpdateRelayCommandInput;
      output: UpdateRelayCommandOutput;
    };
  };
}
