// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetVpnConnectionDeviceTypesRequest, GetVpnConnectionDeviceTypesResult } from "../models/models_7";
import { de_GetVpnConnectionDeviceTypesCommand, se_GetVpnConnectionDeviceTypesCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVpnConnectionDeviceTypesCommand}.
 */
export interface GetVpnConnectionDeviceTypesCommandInput extends GetVpnConnectionDeviceTypesRequest {}
/**
 * @public
 *
 * The output of {@link GetVpnConnectionDeviceTypesCommand}.
 */
export interface GetVpnConnectionDeviceTypesCommandOutput extends GetVpnConnectionDeviceTypesResult, __MetadataBearer {}

/**
 * <p>Obtain a list of customer gateway devices for which sample configuration
 *             files can be provided. The request has no additional parameters. You can also see the
 *             list of device types with sample configuration files available under <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html">Your customer gateway
 *                 device</a> in the <i>Amazon Web Services Site-to-Site VPN User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetVpnConnectionDeviceTypesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetVpnConnectionDeviceTypesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // GetVpnConnectionDeviceTypesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetVpnConnectionDeviceTypesCommand(input);
 * const response = await client.send(command);
 * // { // GetVpnConnectionDeviceTypesResult
 * //   VpnConnectionDeviceTypes: [ // VpnConnectionDeviceTypeList
 * //     { // VpnConnectionDeviceType
 * //       VpnConnectionDeviceTypeId: "STRING_VALUE",
 * //       Vendor: "STRING_VALUE",
 * //       Platform: "STRING_VALUE",
 * //       Software: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetVpnConnectionDeviceTypesCommandInput - {@link GetVpnConnectionDeviceTypesCommandInput}
 * @returns {@link GetVpnConnectionDeviceTypesCommandOutput}
 * @see {@link GetVpnConnectionDeviceTypesCommandInput} for command's `input` shape.
 * @see {@link GetVpnConnectionDeviceTypesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetVpnConnectionDeviceTypesCommand extends $Command
  .classBuilder<
    GetVpnConnectionDeviceTypesCommandInput,
    GetVpnConnectionDeviceTypesCommandOutput,
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
  .s("AmazonEC2", "GetVpnConnectionDeviceTypes", {})
  .n("EC2Client", "GetVpnConnectionDeviceTypesCommand")
  .f(void 0, void 0)
  .ser(se_GetVpnConnectionDeviceTypesCommand)
  .de(de_GetVpnConnectionDeviceTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVpnConnectionDeviceTypesRequest;
      output: GetVpnConnectionDeviceTypesResult;
    };
    sdk: {
      input: GetVpnConnectionDeviceTypesCommandInput;
      output: GetVpnConnectionDeviceTypesCommandOutput;
    };
  };
}
