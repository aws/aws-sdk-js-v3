// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateHypervisorInput,
  UpdateHypervisorInputFilterSensitiveLog,
  UpdateHypervisorOutput,
} from "../models/models_0";
import { de_UpdateHypervisorCommand, se_UpdateHypervisorCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateHypervisorCommand}.
 */
export interface UpdateHypervisorCommandInput extends UpdateHypervisorInput {}
/**
 * @public
 *
 * The output of {@link UpdateHypervisorCommand}.
 */
export interface UpdateHypervisorCommandOutput extends UpdateHypervisorOutput, __MetadataBearer {}

/**
 * <p>Updates a hypervisor metadata, including its host, username, and password. Specify which
 *       hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your
 *       request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, UpdateHypervisorCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, UpdateHypervisorCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * // import type { BackupGatewayClientConfig } from "@aws-sdk/client-backup-gateway";
 * const config = {}; // type is BackupGatewayClientConfig
 * const client = new BackupGatewayClient(config);
 * const input = { // UpdateHypervisorInput
 *   HypervisorArn: "STRING_VALUE", // required
 *   Host: "STRING_VALUE",
 *   Username: "STRING_VALUE",
 *   Password: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   LogGroupArn: "STRING_VALUE",
 * };
 * const command = new UpdateHypervisorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateHypervisorOutput
 * //   HypervisorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateHypervisorCommandInput - {@link UpdateHypervisorCommandInput}
 * @returns {@link UpdateHypervisorCommandOutput}
 * @see {@link UpdateHypervisorCommandInput} for command's `input` shape.
 * @see {@link UpdateHypervisorCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The operation cannot proceed because you have insufficient permissions.</p>
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
 *
 * @public
 */
export class UpdateHypervisorCommand extends $Command
  .classBuilder<
    UpdateHypervisorCommandInput,
    UpdateHypervisorCommandOutput,
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
  .s("BackupOnPremises_v20210101", "UpdateHypervisor", {})
  .n("BackupGatewayClient", "UpdateHypervisorCommand")
  .f(UpdateHypervisorInputFilterSensitiveLog, void 0)
  .ser(se_UpdateHypervisorCommand)
  .de(de_UpdateHypervisorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateHypervisorInput;
      output: UpdateHypervisorOutput;
    };
    sdk: {
      input: UpdateHypervisorCommandInput;
      output: UpdateHypervisorCommandOutput;
    };
  };
}
