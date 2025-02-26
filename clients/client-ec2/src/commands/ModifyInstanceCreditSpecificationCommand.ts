// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyInstanceCreditSpecificationRequest } from "../models/models_6";
import { ModifyInstanceCreditSpecificationResult } from "../models/models_7";
import {
  de_ModifyInstanceCreditSpecificationCommand,
  se_ModifyInstanceCreditSpecificationCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceCreditSpecificationCommand}.
 */
export interface ModifyInstanceCreditSpecificationCommandInput extends ModifyInstanceCreditSpecificationRequest {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceCreditSpecificationCommand}.
 */
export interface ModifyInstanceCreditSpecificationCommandOutput
  extends ModifyInstanceCreditSpecificationResult,
    __MetadataBearer {}

/**
 * <p>Modifies the credit option for CPU usage on a running or stopped burstable performance
 *             instance. The credit options are <code>standard</code> and
 *             <code>unlimited</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *                 performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceCreditSpecificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceCreditSpecificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyInstanceCreditSpecificationRequest
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 *   InstanceCreditSpecifications: [ // InstanceCreditSpecificationListRequest // required
 *     { // InstanceCreditSpecificationRequest
 *       InstanceId: "STRING_VALUE", // required
 *       CpuCredits: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ModifyInstanceCreditSpecificationCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstanceCreditSpecificationResult
 * //   SuccessfulInstanceCreditSpecifications: [ // SuccessfulInstanceCreditSpecificationSet
 * //     { // SuccessfulInstanceCreditSpecificationItem
 * //       InstanceId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UnsuccessfulInstanceCreditSpecifications: [ // UnsuccessfulInstanceCreditSpecificationSet
 * //     { // UnsuccessfulInstanceCreditSpecificationItem
 * //       InstanceId: "STRING_VALUE",
 * //       Error: { // UnsuccessfulInstanceCreditSpecificationItemError
 * //         Code: "InvalidInstanceID.Malformed" || "InvalidInstanceID.NotFound" || "IncorrectInstanceState" || "InstanceCreditSpecification.NotSupported",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ModifyInstanceCreditSpecificationCommandInput - {@link ModifyInstanceCreditSpecificationCommandInput}
 * @returns {@link ModifyInstanceCreditSpecificationCommandOutput}
 * @see {@link ModifyInstanceCreditSpecificationCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceCreditSpecificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ModifyInstanceCreditSpecificationCommand extends $Command
  .classBuilder<
    ModifyInstanceCreditSpecificationCommandInput,
    ModifyInstanceCreditSpecificationCommandOutput,
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
  .s("AmazonEC2", "ModifyInstanceCreditSpecification", {})
  .n("EC2Client", "ModifyInstanceCreditSpecificationCommand")
  .f(void 0, void 0)
  .ser(se_ModifyInstanceCreditSpecificationCommand)
  .de(de_ModifyInstanceCreditSpecificationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyInstanceCreditSpecificationRequest;
      output: ModifyInstanceCreditSpecificationResult;
    };
    sdk: {
      input: ModifyInstanceCreditSpecificationCommandInput;
      output: ModifyInstanceCreditSpecificationCommandOutput;
    };
  };
}
