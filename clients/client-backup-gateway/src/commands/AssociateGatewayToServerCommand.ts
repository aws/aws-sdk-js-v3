// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateGatewayToServerInput, AssociateGatewayToServerOutput } from "../models/models_0";
import { de_AssociateGatewayToServerCommand, se_AssociateGatewayToServerCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateGatewayToServerCommand}.
 */
export interface AssociateGatewayToServerCommandInput extends AssociateGatewayToServerInput {}
/**
 * @public
 *
 * The output of {@link AssociateGatewayToServerCommand}.
 */
export interface AssociateGatewayToServerCommandOutput extends AssociateGatewayToServerOutput, __MetadataBearer {}

/**
 * <p>Associates a backup gateway with your server. After you complete the association process,
 *       you can back up and restore your VMs through the gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, AssociateGatewayToServerCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, AssociateGatewayToServerCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BackupGatewayClient(config);
 * const input = { // AssociateGatewayToServerInput
 *   GatewayArn: "STRING_VALUE", // required
 *   ServerArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateGatewayToServerCommand(input);
 * const response = await client.send(command);
 * // { // AssociateGatewayToServerOutput
 * //   GatewayArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateGatewayToServerCommandInput - {@link AssociateGatewayToServerCommandInput}
 * @returns {@link AssociateGatewayToServerCommandOutput}
 * @see {@link AssociateGatewayToServerCommandInput} for command's `input` shape.
 * @see {@link AssociateGatewayToServerCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The operation cannot proceed because it is not supported.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The operation did not succeed because an internal error occurred. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>TPS has been limited to protect against intentional or unintentional
 *     high request volumes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The operation did not succeed because a validation error occurred.</p>
 *
 * @throws {@link BackupGatewayServiceException}
 * <p>Base exception class for all service exceptions from BackupGateway service.</p>
 *
 * @public
 */
export class AssociateGatewayToServerCommand extends $Command
  .classBuilder<
    AssociateGatewayToServerCommandInput,
    AssociateGatewayToServerCommandOutput,
    BackupGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackupOnPremises_v20210101", "AssociateGatewayToServer", {})
  .n("BackupGatewayClient", "AssociateGatewayToServerCommand")
  .f(void 0, void 0)
  .ser(se_AssociateGatewayToServerCommand)
  .de(de_AssociateGatewayToServerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateGatewayToServerInput;
      output: AssociateGatewayToServerOutput;
    };
    sdk: {
      input: AssociateGatewayToServerCommandInput;
      output: AssociateGatewayToServerCommandOutput;
    };
  };
}
