// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstanceEventStartTimeRequest, ModifyInstanceEventStartTimeResult } from "../models/models_7";
import { de_ModifyInstanceEventStartTimeCommand, se_ModifyInstanceEventStartTimeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceEventStartTimeCommand}.
 */
export interface ModifyInstanceEventStartTimeCommandInput extends ModifyInstanceEventStartTimeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceEventStartTimeCommand}.
 */
export interface ModifyInstanceEventStartTimeCommandOutput
  extends ModifyInstanceEventStartTimeResult,
    __MetadataBearer {}

/**
 * <p>Modifies the start time for a scheduled Amazon EC2 instance event.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceEventStartTimeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceEventStartTimeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyInstanceEventStartTimeRequest
 *   DryRun: true || false,
 *   InstanceId: "STRING_VALUE", // required
 *   InstanceEventId: "STRING_VALUE", // required
 *   NotBefore: new Date("TIMESTAMP"), // required
 * };
 * const command = new ModifyInstanceEventStartTimeCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstanceEventStartTimeResult
 * //   Event: { // InstanceStatusEvent
 * //     InstanceEventId: "STRING_VALUE",
 * //     Code: "instance-reboot" || "system-reboot" || "system-maintenance" || "instance-retirement" || "instance-stop",
 * //     Description: "STRING_VALUE",
 * //     NotAfter: new Date("TIMESTAMP"),
 * //     NotBefore: new Date("TIMESTAMP"),
 * //     NotBeforeDeadline: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyInstanceEventStartTimeCommandInput - {@link ModifyInstanceEventStartTimeCommandInput}
 * @returns {@link ModifyInstanceEventStartTimeCommandOutput}
 * @see {@link ModifyInstanceEventStartTimeCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceEventStartTimeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyInstanceEventStartTimeCommand extends $Command
  .classBuilder<
    ModifyInstanceEventStartTimeCommandInput,
    ModifyInstanceEventStartTimeCommandOutput,
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
  .s("AmazonEC2", "ModifyInstanceEventStartTime", {})
  .n("EC2Client", "ModifyInstanceEventStartTimeCommand")
  .f(void 0, void 0)
  .ser(se_ModifyInstanceEventStartTimeCommand)
  .de(de_ModifyInstanceEventStartTimeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyInstanceEventStartTimeRequest;
      output: ModifyInstanceEventStartTimeResult;
    };
    sdk: {
      input: ModifyInstanceEventStartTimeCommandInput;
      output: ModifyInstanceEventStartTimeCommandOutput;
    };
  };
}
