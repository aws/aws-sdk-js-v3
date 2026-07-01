// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetVpnConnectionDeviceSampleConfigurationRequest,
  GetVpnConnectionDeviceSampleConfigurationResult,
} from "../models/models_6";
import { GetVpnConnectionDeviceSampleConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVpnConnectionDeviceSampleConfigurationCommand}.
 */
export interface GetVpnConnectionDeviceSampleConfigurationCommandInput extends GetVpnConnectionDeviceSampleConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetVpnConnectionDeviceSampleConfigurationCommand}.
 */
export interface GetVpnConnectionDeviceSampleConfigurationCommandOutput extends GetVpnConnectionDeviceSampleConfigurationResult, __MetadataBearer {}

/**
 * <p>Download an Amazon Web Services-provided sample configuration file to be used with the customer
 *             gateway device specified for your Site-to-Site VPN connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetVpnConnectionDeviceSampleConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetVpnConnectionDeviceSampleConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetVpnConnectionDeviceSampleConfigurationRequest
 *   VpnConnectionId: "STRING_VALUE", // required
 *   VpnConnectionDeviceTypeId: "STRING_VALUE", // required
 *   InternetKeyExchangeVersion: "STRING_VALUE",
 *   SampleType: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new GetVpnConnectionDeviceSampleConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetVpnConnectionDeviceSampleConfigurationResult
 * //   VpnConnectionDeviceSampleConfiguration: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetVpnConnectionDeviceSampleConfigurationCommandInput - {@link GetVpnConnectionDeviceSampleConfigurationCommandInput}
 * @returns {@link GetVpnConnectionDeviceSampleConfigurationCommandOutput}
 * @see {@link GetVpnConnectionDeviceSampleConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetVpnConnectionDeviceSampleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetVpnConnectionDeviceSampleConfigurationCommand extends command<GetVpnConnectionDeviceSampleConfigurationCommandInput, GetVpnConnectionDeviceSampleConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetVpnConnectionDeviceSampleConfiguration",
  GetVpnConnectionDeviceSampleConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVpnConnectionDeviceSampleConfigurationRequest;
      output: GetVpnConnectionDeviceSampleConfigurationResult;
    };
    sdk: {
      input: GetVpnConnectionDeviceSampleConfigurationCommandInput;
      output: GetVpnConnectionDeviceSampleConfigurationCommandOutput;
    };
  };
}
