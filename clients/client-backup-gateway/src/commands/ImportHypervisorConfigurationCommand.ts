// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ImportHypervisorConfigurationInput, ImportHypervisorConfigurationOutput } from "../models/models_0";
import { ImportHypervisorConfiguration } from "../schemas/schemas_1_Hypervisor";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportHypervisorConfigurationCommand}.
 */
export interface ImportHypervisorConfigurationCommandInput extends ImportHypervisorConfigurationInput {}
/**
 * @public
 *
 * The output of {@link ImportHypervisorConfigurationCommand}.
 */
export interface ImportHypervisorConfigurationCommandOutput
  extends ImportHypervisorConfigurationOutput,
    __MetadataBearer {}

/**
 * <p>Connect to a hypervisor by importing its configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, ImportHypervisorConfigurationCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, ImportHypervisorConfigurationCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * // import type { BackupGatewayClientConfig } from "@aws-sdk/client-backup-gateway";
 * const config = {}; // type is BackupGatewayClientConfig
 * const client = new BackupGatewayClient(config);
 * const input = { // ImportHypervisorConfigurationInput
 *   Name: "STRING_VALUE", // required
 *   Host: "STRING_VALUE", // required
 *   Username: "STRING_VALUE",
 *   Password: "STRING_VALUE",
 *   KmsKeyArn: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new ImportHypervisorConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // ImportHypervisorConfigurationOutput
 * //   HypervisorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportHypervisorConfigurationCommandInput - {@link ImportHypervisorConfigurationCommandInput}
 * @returns {@link ImportHypervisorConfigurationCommandOutput}
 * @see {@link ImportHypervisorConfigurationCommandInput} for command's `input` shape.
 * @see {@link ImportHypervisorConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The operation cannot proceed because you have insufficient permissions.</p>
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
 *
 * @public
 */
export class ImportHypervisorConfigurationCommand extends $Command
  .classBuilder<
    ImportHypervisorConfigurationCommandInput,
    ImportHypervisorConfigurationCommandOutput,
    BackupGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackupOnPremises_v20210101", "ImportHypervisorConfiguration", {})
  .n("BackupGatewayClient", "ImportHypervisorConfigurationCommand")
  .sc(ImportHypervisorConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportHypervisorConfigurationInput;
      output: ImportHypervisorConfigurationOutput;
    };
    sdk: {
      input: ImportHypervisorConfigurationCommandInput;
      output: ImportHypervisorConfigurationCommandOutput;
    };
  };
}
