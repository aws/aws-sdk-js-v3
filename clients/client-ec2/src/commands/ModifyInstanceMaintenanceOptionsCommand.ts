// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstanceMaintenanceOptionsRequest, ModifyInstanceMaintenanceOptionsResult } from "../models/models_7";
import { ModifyInstanceMaintenanceOptions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceMaintenanceOptionsCommand}.
 */
export interface ModifyInstanceMaintenanceOptionsCommandInput extends ModifyInstanceMaintenanceOptionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceMaintenanceOptionsCommand}.
 */
export interface ModifyInstanceMaintenanceOptionsCommandOutput
  extends ModifyInstanceMaintenanceOptionsResult,
    __MetadataBearer {}

/**
 * <p>Modifies the recovery behavior of your instance to disable simplified automatic
 *             recovery or set the recovery behavior to default. The default configuration will not
 *             enable simplified automatic recovery for an unsupported instance type. For more
 *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html#instance-configuration-recovery">Simplified automatic recovery</a>.</p>
 *          <p>Modifies the reboot migration behavior during a user-initiated reboot of an instance
 *             that has a pending <code>system-reboot</code> event. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/schedevents_actions_reboot.html#reboot-migration">Enable or disable reboot migration</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceMaintenanceOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceMaintenanceOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyInstanceMaintenanceOptionsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   AutoRecovery: "disabled" || "default",
 *   RebootMigration: "disabled" || "default",
 *   DryRun: true || false,
 * };
 * const command = new ModifyInstanceMaintenanceOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstanceMaintenanceOptionsResult
 * //   InstanceId: "STRING_VALUE",
 * //   AutoRecovery: "disabled" || "default",
 * //   RebootMigration: "disabled" || "default",
 * // };
 *
 * ```
 *
 * @param ModifyInstanceMaintenanceOptionsCommandInput - {@link ModifyInstanceMaintenanceOptionsCommandInput}
 * @returns {@link ModifyInstanceMaintenanceOptionsCommandOutput}
 * @see {@link ModifyInstanceMaintenanceOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceMaintenanceOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyInstanceMaintenanceOptionsCommand extends $Command
  .classBuilder<
    ModifyInstanceMaintenanceOptionsCommandInput,
    ModifyInstanceMaintenanceOptionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyInstanceMaintenanceOptions", {})
  .n("EC2Client", "ModifyInstanceMaintenanceOptionsCommand")
  .sc(ModifyInstanceMaintenanceOptions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyInstanceMaintenanceOptionsRequest;
      output: ModifyInstanceMaintenanceOptionsResult;
    };
    sdk: {
      input: ModifyInstanceMaintenanceOptionsCommandInput;
      output: ModifyInstanceMaintenanceOptionsCommandOutput;
    };
  };
}
