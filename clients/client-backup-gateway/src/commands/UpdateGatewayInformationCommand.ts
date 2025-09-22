// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateGatewayInformationInput, UpdateGatewayInformationOutput } from "../models/models_0";
import { UpdateGatewayInformation } from "../schemas/schemas_1_Hypervisor";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGatewayInformationCommand}.
 */
export interface UpdateGatewayInformationCommandInput extends UpdateGatewayInformationInput {}
/**
 * @public
 *
 * The output of {@link UpdateGatewayInformationCommand}.
 */
export interface UpdateGatewayInformationCommandOutput extends UpdateGatewayInformationOutput, __MetadataBearer {}

/**
 * <p>Updates a gateway's name. Specify which gateway to update using the Amazon Resource Name
 *       (ARN) of the gateway in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, UpdateGatewayInformationCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, UpdateGatewayInformationCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * // import type { BackupGatewayClientConfig } from "@aws-sdk/client-backup-gateway";
 * const config = {}; // type is BackupGatewayClientConfig
 * const client = new BackupGatewayClient(config);
 * const input = { // UpdateGatewayInformationInput
 *   GatewayArn: "STRING_VALUE", // required
 *   GatewayDisplayName: "STRING_VALUE",
 * };
 * const command = new UpdateGatewayInformationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGatewayInformationOutput
 * //   GatewayArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateGatewayInformationCommandInput - {@link UpdateGatewayInformationCommandInput}
 * @returns {@link UpdateGatewayInformationCommandOutput}
 * @see {@link UpdateGatewayInformationCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewayInformationCommandOutput} for command's `response` shape.
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
export class UpdateGatewayInformationCommand extends $Command
  .classBuilder<
    UpdateGatewayInformationCommandInput,
    UpdateGatewayInformationCommandOutput,
    BackupGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackupOnPremises_v20210101", "UpdateGatewayInformation", {})
  .n("BackupGatewayClient", "UpdateGatewayInformationCommand")
  .sc(UpdateGatewayInformation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGatewayInformationInput;
      output: UpdateGatewayInformationOutput;
    };
    sdk: {
      input: UpdateGatewayInformationCommandInput;
      output: UpdateGatewayInformationCommandOutput;
    };
  };
}
