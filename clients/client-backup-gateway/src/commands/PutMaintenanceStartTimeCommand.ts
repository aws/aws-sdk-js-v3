// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutMaintenanceStartTimeInput, PutMaintenanceStartTimeOutput } from "../models/models_0";
import { de_PutMaintenanceStartTimeCommand, se_PutMaintenanceStartTimeCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutMaintenanceStartTimeCommand}.
 */
export interface PutMaintenanceStartTimeCommandInput extends PutMaintenanceStartTimeInput {}
/**
 * @public
 *
 * The output of {@link PutMaintenanceStartTimeCommand}.
 */
export interface PutMaintenanceStartTimeCommandOutput extends PutMaintenanceStartTimeOutput, __MetadataBearer {}

/**
 * <p>Set the maintenance start time for a gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, PutMaintenanceStartTimeCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, PutMaintenanceStartTimeCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * // import type { BackupGatewayClientConfig } from "@aws-sdk/client-backup-gateway";
 * const config = {}; // type is BackupGatewayClientConfig
 * const client = new BackupGatewayClient(config);
 * const input = { // PutMaintenanceStartTimeInput
 *   GatewayArn: "STRING_VALUE", // required
 *   HourOfDay: Number("int"), // required
 *   MinuteOfHour: Number("int"), // required
 *   DayOfWeek: Number("int"),
 *   DayOfMonth: Number("int"),
 * };
 * const command = new PutMaintenanceStartTimeCommand(input);
 * const response = await client.send(command);
 * // { // PutMaintenanceStartTimeOutput
 * //   GatewayArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutMaintenanceStartTimeCommandInput - {@link PutMaintenanceStartTimeCommandInput}
 * @returns {@link PutMaintenanceStartTimeCommandOutput}
 * @see {@link PutMaintenanceStartTimeCommandInput} for command's `input` shape.
 * @see {@link PutMaintenanceStartTimeCommandOutput} for command's `response` shape.
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
export class PutMaintenanceStartTimeCommand extends $Command
  .classBuilder<
    PutMaintenanceStartTimeCommandInput,
    PutMaintenanceStartTimeCommandOutput,
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
  .s("BackupOnPremises_v20210101", "PutMaintenanceStartTime", {})
  .n("BackupGatewayClient", "PutMaintenanceStartTimeCommand")
  .f(void 0, void 0)
  .ser(se_PutMaintenanceStartTimeCommand)
  .de(de_PutMaintenanceStartTimeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMaintenanceStartTimeInput;
      output: PutMaintenanceStartTimeOutput;
    };
    sdk: {
      input: PutMaintenanceStartTimeCommandInput;
      output: PutMaintenanceStartTimeCommandOutput;
    };
  };
}
