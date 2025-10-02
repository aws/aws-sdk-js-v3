// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateGatewaySoftwareNowInput, UpdateGatewaySoftwareNowOutput } from "../models/models_0";
import { de_UpdateGatewaySoftwareNowCommand, se_UpdateGatewaySoftwareNowCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGatewaySoftwareNowCommand}.
 */
export interface UpdateGatewaySoftwareNowCommandInput extends UpdateGatewaySoftwareNowInput {}
/**
 * @public
 *
 * The output of {@link UpdateGatewaySoftwareNowCommand}.
 */
export interface UpdateGatewaySoftwareNowCommandOutput extends UpdateGatewaySoftwareNowOutput, __MetadataBearer {}

/**
 * <p>Updates the gateway virtual machine (VM) software.
 *       The request immediately triggers the software update.</p>
 *          <note>
 *             <p>When you make this request, you get a <code>200 OK</code>
 *         success response immediately. However, it might take some
 *         time for the update to complete.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, UpdateGatewaySoftwareNowCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, UpdateGatewaySoftwareNowCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * // import type { BackupGatewayClientConfig } from "@aws-sdk/client-backup-gateway";
 * const config = {}; // type is BackupGatewayClientConfig
 * const client = new BackupGatewayClient(config);
 * const input = { // UpdateGatewaySoftwareNowInput
 *   GatewayArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateGatewaySoftwareNowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGatewaySoftwareNowOutput
 * //   GatewayArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateGatewaySoftwareNowCommandInput - {@link UpdateGatewaySoftwareNowCommandInput}
 * @returns {@link UpdateGatewaySoftwareNowCommandOutput}
 * @see {@link UpdateGatewaySoftwareNowCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewaySoftwareNowCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
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
 *
 * @public
 */
export class UpdateGatewaySoftwareNowCommand extends $Command
  .classBuilder<
    UpdateGatewaySoftwareNowCommandInput,
    UpdateGatewaySoftwareNowCommandOutput,
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
  .s("BackupOnPremises_v20210101", "UpdateGatewaySoftwareNow", {})
  .n("BackupGatewayClient", "UpdateGatewaySoftwareNowCommand")
  .f(void 0, void 0)
  .ser(se_UpdateGatewaySoftwareNowCommand)
  .de(de_UpdateGatewaySoftwareNowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGatewaySoftwareNowInput;
      output: UpdateGatewaySoftwareNowOutput;
    };
    sdk: {
      input: UpdateGatewaySoftwareNowCommandInput;
      output: UpdateGatewaySoftwareNowCommandOutput;
    };
  };
}
