// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartVirtualMachinesMetadataSyncInput, StartVirtualMachinesMetadataSyncOutput } from "../models/models_0";
import { StartVirtualMachinesMetadataSync } from "../schemas/schemas_4_Hypervisor";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartVirtualMachinesMetadataSyncCommand}.
 */
export interface StartVirtualMachinesMetadataSyncCommandInput extends StartVirtualMachinesMetadataSyncInput {}
/**
 * @public
 *
 * The output of {@link StartVirtualMachinesMetadataSyncCommand}.
 */
export interface StartVirtualMachinesMetadataSyncCommandOutput
  extends StartVirtualMachinesMetadataSyncOutput,
    __MetadataBearer {}

/**
 * <p>This action sends a request to sync metadata across the specified virtual machines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, StartVirtualMachinesMetadataSyncCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, StartVirtualMachinesMetadataSyncCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * // import type { BackupGatewayClientConfig } from "@aws-sdk/client-backup-gateway";
 * const config = {}; // type is BackupGatewayClientConfig
 * const client = new BackupGatewayClient(config);
 * const input = { // StartVirtualMachinesMetadataSyncInput
 *   HypervisorArn: "STRING_VALUE", // required
 * };
 * const command = new StartVirtualMachinesMetadataSyncCommand(input);
 * const response = await client.send(command);
 * // { // StartVirtualMachinesMetadataSyncOutput
 * //   HypervisorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartVirtualMachinesMetadataSyncCommandInput - {@link StartVirtualMachinesMetadataSyncCommandInput}
 * @returns {@link StartVirtualMachinesMetadataSyncCommandOutput}
 * @see {@link StartVirtualMachinesMetadataSyncCommandInput} for command's `input` shape.
 * @see {@link StartVirtualMachinesMetadataSyncCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The operation cannot proceed because you have insufficient permissions.</p>
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
export class StartVirtualMachinesMetadataSyncCommand extends $Command
  .classBuilder<
    StartVirtualMachinesMetadataSyncCommandInput,
    StartVirtualMachinesMetadataSyncCommandOutput,
    BackupGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackupOnPremises_v20210101", "StartVirtualMachinesMetadataSync", {})
  .n("BackupGatewayClient", "StartVirtualMachinesMetadataSyncCommand")
  .sc(StartVirtualMachinesMetadataSync)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartVirtualMachinesMetadataSyncInput;
      output: StartVirtualMachinesMetadataSyncOutput;
    };
    sdk: {
      input: StartVirtualMachinesMetadataSyncCommandInput;
      output: StartVirtualMachinesMetadataSyncCommandOutput;
    };
  };
}
