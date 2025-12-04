// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { TestHypervisorConfigurationInput, TestHypervisorConfigurationOutput } from "../models/models_0";
import { TestHypervisorConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestHypervisorConfigurationCommand}.
 */
export interface TestHypervisorConfigurationCommandInput extends TestHypervisorConfigurationInput {}
/**
 * @public
 *
 * The output of {@link TestHypervisorConfigurationCommand}.
 */
export interface TestHypervisorConfigurationCommandOutput extends TestHypervisorConfigurationOutput, __MetadataBearer {}

/**
 * <p>Tests your hypervisor configuration to validate that backup gateway can connect with the
 *       hypervisor and its resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, TestHypervisorConfigurationCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, TestHypervisorConfigurationCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * // import type { BackupGatewayClientConfig } from "@aws-sdk/client-backup-gateway";
 * const config = {}; // type is BackupGatewayClientConfig
 * const client = new BackupGatewayClient(config);
 * const input = { // TestHypervisorConfigurationInput
 *   GatewayArn: "STRING_VALUE", // required
 *   Host: "STRING_VALUE", // required
 *   Username: "STRING_VALUE",
 *   Password: "STRING_VALUE",
 * };
 * const command = new TestHypervisorConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TestHypervisorConfigurationCommandInput - {@link TestHypervisorConfigurationCommandInput}
 * @returns {@link TestHypervisorConfigurationCommandOutput}
 * @see {@link TestHypervisorConfigurationCommandInput} for command's `input` shape.
 * @see {@link TestHypervisorConfigurationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class TestHypervisorConfigurationCommand extends $Command
  .classBuilder<
    TestHypervisorConfigurationCommandInput,
    TestHypervisorConfigurationCommandOutput,
    BackupGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackupOnPremises_v20210101", "TestHypervisorConfiguration", {})
  .n("BackupGatewayClient", "TestHypervisorConfigurationCommand")
  .sc(TestHypervisorConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestHypervisorConfigurationInput;
      output: {};
    };
    sdk: {
      input: TestHypervisorConfigurationCommandInput;
      output: TestHypervisorConfigurationCommandOutput;
    };
  };
}
