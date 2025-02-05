// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ResetAddressAttributeRequest, ResetAddressAttributeResult } from "../models/models_7";
import { de_ResetAddressAttributeCommand, se_ResetAddressAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetAddressAttributeCommand}.
 */
export interface ResetAddressAttributeCommandInput extends ResetAddressAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ResetAddressAttributeCommand}.
 */
export interface ResetAddressAttributeCommandOutput extends ResetAddressAttributeResult, __MetadataBearer {}

/**
 * <p>Resets the attribute of the specified IP address. For requirements, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#Using_Elastic_Addressing_Reverse_DNS">Using reverse DNS for email applications</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetAddressAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetAddressAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // ResetAddressAttributeRequest
 *   AllocationId: "STRING_VALUE", // required
 *   Attribute: "domain-name", // required
 *   DryRun: true || false,
 * };
 * const command = new ResetAddressAttributeCommand(input);
 * const response = await client.send(command);
 * // { // ResetAddressAttributeResult
 * //   Address: { // AddressAttribute
 * //     PublicIp: "STRING_VALUE",
 * //     AllocationId: "STRING_VALUE",
 * //     PtrRecord: "STRING_VALUE",
 * //     PtrRecordUpdate: { // PtrUpdateStatus
 * //       Value: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ResetAddressAttributeCommandInput - {@link ResetAddressAttributeCommandInput}
 * @returns {@link ResetAddressAttributeCommandOutput}
 * @see {@link ResetAddressAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetAddressAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class ResetAddressAttributeCommand extends $Command
  .classBuilder<
    ResetAddressAttributeCommandInput,
    ResetAddressAttributeCommandOutput,
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
  .s("AmazonEC2", "ResetAddressAttribute", {})
  .n("EC2Client", "ResetAddressAttributeCommand")
  .f(void 0, void 0)
  .ser(se_ResetAddressAttributeCommand)
  .de(de_ResetAddressAttributeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetAddressAttributeRequest;
      output: ResetAddressAttributeResult;
    };
    sdk: {
      input: ResetAddressAttributeCommandInput;
      output: ResetAddressAttributeCommandOutput;
    };
  };
}
