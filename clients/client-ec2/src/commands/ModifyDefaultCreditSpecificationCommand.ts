// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyDefaultCreditSpecificationRequest, ModifyDefaultCreditSpecificationResult } from "../models/models_7";
import {
  de_ModifyDefaultCreditSpecificationCommand,
  se_ModifyDefaultCreditSpecificationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyDefaultCreditSpecificationCommand}.
 */
export interface ModifyDefaultCreditSpecificationCommandInput extends ModifyDefaultCreditSpecificationRequest {}
/**
 * @public
 *
 * The output of {@link ModifyDefaultCreditSpecificationCommand}.
 */
export interface ModifyDefaultCreditSpecificationCommandOutput
  extends ModifyDefaultCreditSpecificationResult,
    __MetadataBearer {}

/**
 * <p>Modifies the default credit option for CPU usage of burstable performance instances.
 *             The default credit option is set at the account level per Amazon Web Services Region, and
 *             is specified per instance family. All new burstable performance instances in the account
 *             launch using the default credit option.</p>
 *          <p>
 *             <code>ModifyDefaultCreditSpecification</code> is an asynchronous operation, which
 *             works at an Amazon Web Services Region level and modifies the credit option for each
 *             Availability Zone. All zones in a Region are updated within five minutes. But if
 *             instances are launched during this operation, they might not get the new credit option
 *             until the zone is updated. To verify whether the update has occurred, you can call
 *                 <code>GetDefaultCreditSpecification</code> and check
 *                 <code>DefaultCreditSpecification</code> for updates.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *                 performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyDefaultCreditSpecificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyDefaultCreditSpecificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyDefaultCreditSpecificationRequest
 *   DryRun: true || false,
 *   InstanceFamily: "t2" || "t3" || "t3a" || "t4g", // required
 *   CpuCredits: "STRING_VALUE", // required
 * };
 * const command = new ModifyDefaultCreditSpecificationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyDefaultCreditSpecificationResult
 * //   InstanceFamilyCreditSpecification: { // InstanceFamilyCreditSpecification
 * //     InstanceFamily: "t2" || "t3" || "t3a" || "t4g",
 * //     CpuCredits: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyDefaultCreditSpecificationCommandInput - {@link ModifyDefaultCreditSpecificationCommandInput}
 * @returns {@link ModifyDefaultCreditSpecificationCommandOutput}
 * @see {@link ModifyDefaultCreditSpecificationCommandInput} for command's `input` shape.
 * @see {@link ModifyDefaultCreditSpecificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyDefaultCreditSpecificationCommand extends $Command
  .classBuilder<
    ModifyDefaultCreditSpecificationCommandInput,
    ModifyDefaultCreditSpecificationCommandOutput,
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
  .s("AmazonEC2", "ModifyDefaultCreditSpecification", {})
  .n("EC2Client", "ModifyDefaultCreditSpecificationCommand")
  .f(void 0, void 0)
  .ser(se_ModifyDefaultCreditSpecificationCommand)
  .de(de_ModifyDefaultCreditSpecificationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDefaultCreditSpecificationRequest;
      output: ModifyDefaultCreditSpecificationResult;
    };
    sdk: {
      input: ModifyDefaultCreditSpecificationCommandInput;
      output: ModifyDefaultCreditSpecificationCommandOutput;
    };
  };
}
