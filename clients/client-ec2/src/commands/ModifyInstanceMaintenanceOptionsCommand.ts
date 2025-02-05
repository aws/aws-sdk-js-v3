// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstanceMaintenanceOptionsRequest, ModifyInstanceMaintenanceOptionsResult } from "../models/models_7";
import {
  de_ModifyInstanceMaintenanceOptionsCommand,
  se_ModifyInstanceMaintenanceOptionsCommand,
} from "../protocols/Aws_ec2";

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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceMaintenanceOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceMaintenanceOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // ModifyInstanceMaintenanceOptionsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   AutoRecovery: "disabled" || "default",
 *   DryRun: true || false,
 * };
 * const command = new ModifyInstanceMaintenanceOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstanceMaintenanceOptionsResult
 * //   InstanceId: "STRING_VALUE",
 * //   AutoRecovery: "disabled" || "default",
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "ModifyInstanceMaintenanceOptions", {})
  .n("EC2Client", "ModifyInstanceMaintenanceOptionsCommand")
  .f(void 0, void 0)
  .ser(se_ModifyInstanceMaintenanceOptionsCommand)
  .de(de_ModifyInstanceMaintenanceOptionsCommand)
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
