// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ModifyInstanceConnectEndpointRequest, ModifyInstanceConnectEndpointResult } from "../models/models_6";
import { ModifyInstanceConnectEndpoint } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyInstanceConnectEndpointCommand}.
 */
export interface ModifyInstanceConnectEndpointCommandInput extends ModifyInstanceConnectEndpointRequest {}
/**
 * @public
 *
 * The output of {@link ModifyInstanceConnectEndpointCommand}.
 */
export interface ModifyInstanceConnectEndpointCommandOutput
  extends ModifyInstanceConnectEndpointResult,
    __MetadataBearer {}

/**
 * <p>Modifies the specified EC2 Instance Connect Endpoint.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/modify-ec2-instance-connect-endpoint.html">Modify an
 *                 EC2 Instance Connect Endpoint</a> in the
 *             <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceConnectEndpointCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceConnectEndpointCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyInstanceConnectEndpointRequest
 *   DryRun: true || false,
 *   InstanceConnectEndpointId: "STRING_VALUE", // required
 *   IpAddressType: "ipv4" || "dualstack" || "ipv6",
 *   SecurityGroupIds: [ // SecurityGroupIdStringListRequest
 *     "STRING_VALUE",
 *   ],
 *   PreserveClientIp: true || false,
 * };
 * const command = new ModifyInstanceConnectEndpointCommand(input);
 * const response = await client.send(command);
 * // { // ModifyInstanceConnectEndpointResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyInstanceConnectEndpointCommandInput - {@link ModifyInstanceConnectEndpointCommandInput}
 * @returns {@link ModifyInstanceConnectEndpointCommandOutput}
 * @see {@link ModifyInstanceConnectEndpointCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceConnectEndpointCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyInstanceConnectEndpointCommand extends $Command
  .classBuilder<
    ModifyInstanceConnectEndpointCommandInput,
    ModifyInstanceConnectEndpointCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyInstanceConnectEndpoint", {})
  .n("EC2Client", "ModifyInstanceConnectEndpointCommand")
  .sc(ModifyInstanceConnectEndpoint)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyInstanceConnectEndpointRequest;
      output: ModifyInstanceConnectEndpointResult;
    };
    sdk: {
      input: ModifyInstanceConnectEndpointCommandInput;
      output: ModifyInstanceConnectEndpointCommandOutput;
    };
  };
}
