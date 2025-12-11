// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ModifyAddressAttributeRequest, ModifyAddressAttributeResult } from "../models/models_6";
import { ModifyAddressAttribute } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyAddressAttributeCommand}.
 */
export interface ModifyAddressAttributeCommandInput extends ModifyAddressAttributeRequest {}
/**
 * @public
 *
 * The output of {@link ModifyAddressAttributeCommand}.
 */
export interface ModifyAddressAttributeCommandOutput extends ModifyAddressAttributeResult, __MetadataBearer {}

/**
 * <p>Modifies an attribute of the specified Elastic IP address. For requirements, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html#Using_Elastic_Addressing_Reverse_DNS">Using reverse DNS for email applications</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyAddressAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyAddressAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyAddressAttributeRequest
 *   AllocationId: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new ModifyAddressAttributeCommand(input);
 * const response = await client.send(command);
 * // { // ModifyAddressAttributeResult
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
 * @param ModifyAddressAttributeCommandInput - {@link ModifyAddressAttributeCommandInput}
 * @returns {@link ModifyAddressAttributeCommandOutput}
 * @see {@link ModifyAddressAttributeCommandInput} for command's `input` shape.
 * @see {@link ModifyAddressAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyAddressAttributeCommand extends $Command
  .classBuilder<
    ModifyAddressAttributeCommandInput,
    ModifyAddressAttributeCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyAddressAttribute", {})
  .n("EC2Client", "ModifyAddressAttributeCommand")
  .sc(ModifyAddressAttribute)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyAddressAttributeRequest;
      output: ModifyAddressAttributeResult;
    };
    sdk: {
      input: ModifyAddressAttributeCommandInput;
      output: ModifyAddressAttributeCommandOutput;
    };
  };
}
