// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteHypervisorInput, DeleteHypervisorOutput } from "../models/models_0";
import { DeleteHypervisor } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteHypervisorCommand}.
 */
export interface DeleteHypervisorCommandInput extends DeleteHypervisorInput {}
/**
 * @public
 *
 * The output of {@link DeleteHypervisorCommand}.
 */
export interface DeleteHypervisorCommandOutput extends DeleteHypervisorOutput, __MetadataBearer {}

/**
 * <p>Deletes a hypervisor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, DeleteHypervisorCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, DeleteHypervisorCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * // import type { BackupGatewayClientConfig } from "@aws-sdk/client-backup-gateway";
 * const config = {}; // type is BackupGatewayClientConfig
 * const client = new BackupGatewayClient(config);
 * const input = { // DeleteHypervisorInput
 *   HypervisorArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteHypervisorCommand(input);
 * const response = await client.send(command);
 * // { // DeleteHypervisorOutput
 * //   HypervisorArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteHypervisorCommandInput - {@link DeleteHypervisorCommandInput}
 * @returns {@link DeleteHypervisorCommandOutput}
 * @see {@link DeleteHypervisorCommandInput} for command's `input` shape.
 * @see {@link DeleteHypervisorCommandOutput} for command's `response` shape.
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
export class DeleteHypervisorCommand extends $Command
  .classBuilder<
    DeleteHypervisorCommandInput,
    DeleteHypervisorCommandOutput,
    BackupGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackupOnPremises_v20210101", "DeleteHypervisor", {})
  .n("BackupGatewayClient", "DeleteHypervisorCommand")
  .sc(DeleteHypervisor)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteHypervisorInput;
      output: DeleteHypervisorOutput;
    };
    sdk: {
      input: DeleteHypervisorCommandInput;
      output: DeleteHypervisorCommandOutput;
    };
  };
}
