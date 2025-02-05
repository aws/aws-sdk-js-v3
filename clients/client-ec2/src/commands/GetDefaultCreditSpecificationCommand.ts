// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDefaultCreditSpecificationRequest, GetDefaultCreditSpecificationResult } from "../models/models_6";
import { de_GetDefaultCreditSpecificationCommand, se_GetDefaultCreditSpecificationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDefaultCreditSpecificationCommand}.
 */
export interface GetDefaultCreditSpecificationCommandInput extends GetDefaultCreditSpecificationRequest {}
/**
 * @public
 *
 * The output of {@link GetDefaultCreditSpecificationCommand}.
 */
export interface GetDefaultCreditSpecificationCommandOutput
  extends GetDefaultCreditSpecificationResult,
    __MetadataBearer {}

/**
 * <p>Describes the default credit option for CPU usage of a burstable performance instance
 *             family.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *                 performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetDefaultCreditSpecificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetDefaultCreditSpecificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // GetDefaultCreditSpecificationRequest
 *   DryRun: true || false,
 *   InstanceFamily: "t2" || "t3" || "t3a" || "t4g", // required
 * };
 * const command = new GetDefaultCreditSpecificationCommand(input);
 * const response = await client.send(command);
 * // { // GetDefaultCreditSpecificationResult
 * //   InstanceFamilyCreditSpecification: { // InstanceFamilyCreditSpecification
 * //     InstanceFamily: "t2" || "t3" || "t3a" || "t4g",
 * //     CpuCredits: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDefaultCreditSpecificationCommandInput - {@link GetDefaultCreditSpecificationCommandInput}
 * @returns {@link GetDefaultCreditSpecificationCommandOutput}
 * @see {@link GetDefaultCreditSpecificationCommandInput} for command's `input` shape.
 * @see {@link GetDefaultCreditSpecificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class GetDefaultCreditSpecificationCommand extends $Command
  .classBuilder<
    GetDefaultCreditSpecificationCommandInput,
    GetDefaultCreditSpecificationCommandOutput,
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
  .s("AmazonEC2", "GetDefaultCreditSpecification", {})
  .n("EC2Client", "GetDefaultCreditSpecificationCommand")
  .f(void 0, void 0)
  .ser(se_GetDefaultCreditSpecificationCommand)
  .de(de_GetDefaultCreditSpecificationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDefaultCreditSpecificationRequest;
      output: GetDefaultCreditSpecificationResult;
    };
    sdk: {
      input: GetDefaultCreditSpecificationCommandInput;
      output: GetDefaultCreditSpecificationCommandOutput;
    };
  };
}
