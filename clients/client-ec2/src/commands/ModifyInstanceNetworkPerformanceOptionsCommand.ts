// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstanceNetworkPerformanceRequest, ModifyInstanceNetworkPerformanceResult } from "../models/models_7";
import {
  de_ModifyInstanceNetworkPerformanceOptionsCommand,
  se_ModifyInstanceNetworkPerformanceOptionsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceNetworkPerformanceOptionsCommand}.
 */
export interface ModifyInstanceNetworkPerformanceOptionsCommandInput extends ModifyInstanceNetworkPerformanceRequest {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceNetworkPerformanceOptionsCommand}.
 */
export interface ModifyInstanceNetworkPerformanceOptionsCommandOutput
  extends ModifyInstanceNetworkPerformanceResult,
    __MetadataBearer {}

/**
 * <p>Change the configuration of the network performance options for an existing
 *         	instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceNetworkPerformanceOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceNetworkPerformanceOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyInstanceNetworkPerformanceRequest
 *   InstanceId: "STRING_VALUE", // required
 *   BandwidthWeighting: "default" || "vpc-1" || "ebs-1", // required
 *   DryRun: true || false,
 * };
 * const command = new ModifyInstanceNetworkPerformanceOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstanceNetworkPerformanceResult
 * //   InstanceId: "STRING_VALUE",
 * //   BandwidthWeighting: "default" || "vpc-1" || "ebs-1",
 * // };
 *
 * ```
 *
 * @param ModifyInstanceNetworkPerformanceOptionsCommandInput - {@link ModifyInstanceNetworkPerformanceOptionsCommandInput}
 * @returns {@link ModifyInstanceNetworkPerformanceOptionsCommandOutput}
 * @see {@link ModifyInstanceNetworkPerformanceOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceNetworkPerformanceOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyInstanceNetworkPerformanceOptionsCommand extends $Command
  .classBuilder<
    ModifyInstanceNetworkPerformanceOptionsCommandInput,
    ModifyInstanceNetworkPerformanceOptionsCommandOutput,
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
  .s("AmazonEC2", "ModifyInstanceNetworkPerformanceOptions", {})
  .n("EC2Client", "ModifyInstanceNetworkPerformanceOptionsCommand")
  .f(void 0, void 0)
  .ser(se_ModifyInstanceNetworkPerformanceOptionsCommand)
  .de(de_ModifyInstanceNetworkPerformanceOptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyInstanceNetworkPerformanceRequest;
      output: ModifyInstanceNetworkPerformanceResult;
    };
    sdk: {
      input: ModifyInstanceNetworkPerformanceOptionsCommandInput;
      output: ModifyInstanceNetworkPerformanceOptionsCommandOutput;
    };
  };
}
