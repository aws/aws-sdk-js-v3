// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateGatewayFromServerInput, DisassociateGatewayFromServerOutput } from "../models/models_0";
import {
  de_DisassociateGatewayFromServerCommand,
  se_DisassociateGatewayFromServerCommand,
} from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateGatewayFromServerCommand}.
 */
export interface DisassociateGatewayFromServerCommandInput extends DisassociateGatewayFromServerInput {}
/**
 * @public
 *
 * The output of {@link DisassociateGatewayFromServerCommand}.
 */
export interface DisassociateGatewayFromServerCommandOutput
  extends DisassociateGatewayFromServerOutput,
    __MetadataBearer {}

/**
 * <p>Disassociates a backup gateway from the specified server. After the disassociation process
 *       finishes, the gateway can no longer access the virtual machines on the server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, DisassociateGatewayFromServerCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, DisassociateGatewayFromServerCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BackupGatewayClient(config);
 * const input = { // DisassociateGatewayFromServerInput
 *   GatewayArn: "STRING_VALUE", // required
 * };
 * const command = new DisassociateGatewayFromServerCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateGatewayFromServerOutput
 * //   GatewayArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateGatewayFromServerCommandInput - {@link DisassociateGatewayFromServerCommandInput}
 * @returns {@link DisassociateGatewayFromServerCommandOutput}
 * @see {@link DisassociateGatewayFromServerCommandInput} for command's `input` shape.
 * @see {@link DisassociateGatewayFromServerCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The operation cannot proceed because it is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action wasn't found.</p>
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
export class DisassociateGatewayFromServerCommand extends $Command
  .classBuilder<
    DisassociateGatewayFromServerCommandInput,
    DisassociateGatewayFromServerCommandOutput,
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
  .s("BackupOnPremises_v20210101", "DisassociateGatewayFromServer", {})
  .n("BackupGatewayClient", "DisassociateGatewayFromServerCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateGatewayFromServerCommand)
  .de(de_DisassociateGatewayFromServerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateGatewayFromServerInput;
      output: DisassociateGatewayFromServerOutput;
    };
    sdk: {
      input: DisassociateGatewayFromServerCommandInput;
      output: DisassociateGatewayFromServerCommandOutput;
    };
  };
}
