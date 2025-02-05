// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeFpgaImageAttributeRequest, DescribeFpgaImageAttributeResult } from "../models/models_4";
import { de_DescribeFpgaImageAttributeCommand, se_DescribeFpgaImageAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeFpgaImageAttributeCommand}.
 */
export interface DescribeFpgaImageAttributeCommandInput extends DescribeFpgaImageAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFpgaImageAttributeCommand}.
 */
export interface DescribeFpgaImageAttributeCommandOutput extends DescribeFpgaImageAttributeResult, __MetadataBearer {}

/**
 * <p>Describes the specified attribute of the specified Amazon FPGA Image (AFI).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFpgaImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFpgaImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EC2Client(config);
 * const input = { // DescribeFpgaImageAttributeRequest
 *   DryRun: true || false,
 *   FpgaImageId: "STRING_VALUE", // required
 *   Attribute: "description" || "name" || "loadPermission" || "productCodes", // required
 * };
 * const command = new DescribeFpgaImageAttributeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFpgaImageAttributeResult
 * //   FpgaImageAttribute: { // FpgaImageAttribute
 * //     FpgaImageId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     LoadPermissions: [ // LoadPermissionList
 * //       { // LoadPermission
 * //         UserId: "STRING_VALUE",
 * //         Group: "all",
 * //       },
 * //     ],
 * //     ProductCodes: [ // ProductCodeList
 * //       { // ProductCode
 * //         ProductCodeId: "STRING_VALUE",
 * //         ProductCodeType: "devpay" || "marketplace",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFpgaImageAttributeCommandInput - {@link DescribeFpgaImageAttributeCommandInput}
 * @returns {@link DescribeFpgaImageAttributeCommandOutput}
 * @see {@link DescribeFpgaImageAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeFpgaImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class DescribeFpgaImageAttributeCommand extends $Command
  .classBuilder<
    DescribeFpgaImageAttributeCommandInput,
    DescribeFpgaImageAttributeCommandOutput,
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
  .s("AmazonEC2", "DescribeFpgaImageAttribute", {})
  .n("EC2Client", "DescribeFpgaImageAttributeCommand")
  .f(void 0, void 0)
  .ser(se_DescribeFpgaImageAttributeCommand)
  .de(de_DescribeFpgaImageAttributeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeFpgaImageAttributeRequest;
      output: DescribeFpgaImageAttributeResult;
    };
    sdk: {
      input: DescribeFpgaImageAttributeCommandInput;
      output: DescribeFpgaImageAttributeCommandOutput;
    };
  };
}
