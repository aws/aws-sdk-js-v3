// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetInstanceUefiDataRequest, GetInstanceUefiDataResult } from "../models/models_5";
import { GetInstanceUefiData } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInstanceUefiDataCommand}.
 */
export interface GetInstanceUefiDataCommandInput extends GetInstanceUefiDataRequest {}
/**
 * @public
 *
 * The output of {@link GetInstanceUefiDataCommand}.
 */
export interface GetInstanceUefiDataCommandOutput extends GetInstanceUefiDataResult, __MetadataBearer {}

/**
 * <p>A binary representation of the UEFI variable store. Only non-volatile variables are
 *             stored. This is a base64 encoded and zlib compressed binary value that must be properly
 *             encoded.</p>
 *          <p>When you use <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/register-image.html">register-image</a> to create
 *             an AMI, you can create an exact copy of your variable store by passing the UEFI data in
 *             the <code>UefiData</code> parameter. You can modify the UEFI data by using the <a href="https://github.com/awslabs/python-uefivars">python-uefivars tool</a> on
 *             GitHub. You can use the tool to convert the UEFI data into a human-readable format
 *             (JSON), which you can inspect and modify, and then convert back into the binary format
 *             to use with register-image.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/uefi-secure-boot.html">UEFI Secure Boot</a> in the
 *                 <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetInstanceUefiDataCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetInstanceUefiDataCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetInstanceUefiDataRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new GetInstanceUefiDataCommand(input);
 * const response = await client.send(command);
 * // { // GetInstanceUefiDataResult
 * //   InstanceId: "STRING_VALUE",
 * //   UefiData: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInstanceUefiDataCommandInput - {@link GetInstanceUefiDataCommandInput}
 * @returns {@link GetInstanceUefiDataCommandOutput}
 * @see {@link GetInstanceUefiDataCommandInput} for command's `input` shape.
 * @see {@link GetInstanceUefiDataCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetInstanceUefiDataCommand extends $Command
  .classBuilder<
    GetInstanceUefiDataCommandInput,
    GetInstanceUefiDataCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetInstanceUefiData", {})
  .n("EC2Client", "GetInstanceUefiDataCommand")
  .sc(GetInstanceUefiData)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetInstanceUefiDataRequest;
      output: GetInstanceUefiDataResult;
    };
    sdk: {
      input: GetInstanceUefiDataCommandInput;
      output: GetInstanceUefiDataCommandOutput;
    };
  };
}
