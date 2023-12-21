// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDeviceRequest, GetDeviceResponse } from "../models/models_0";
import { de_GetDeviceCommand, se_GetDeviceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDeviceCommand}.
 */
export interface GetDeviceCommandInput extends GetDeviceRequest {}
/**
 * @public
 *
 * The output of {@link GetDeviceCommand}.
 */
export interface GetDeviceCommandOutput extends GetDeviceResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Gets the details of a device by device ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetDeviceCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetDeviceCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // GetDeviceRequest
 *   DeviceArn: "STRING_VALUE",
 * };
 * const command = new GetDeviceCommand(input);
 * const response = await client.send(command);
 * // { // GetDeviceResponse
 * //   Device: { // Device
 * //     DeviceArn: "STRING_VALUE",
 * //     DeviceSerialNumber: "STRING_VALUE",
 * //     DeviceType: "STRING_VALUE",
 * //     DeviceName: "STRING_VALUE",
 * //     SoftwareVersion: "STRING_VALUE",
 * //     MacAddress: "STRING_VALUE",
 * //     RoomArn: "STRING_VALUE",
 * //     DeviceStatus: "READY" || "PENDING" || "WAS_OFFLINE" || "DEREGISTERED" || "FAILED",
 * //     DeviceStatusInfo: { // DeviceStatusInfo
 * //       DeviceStatusDetails: [ // DeviceStatusDetails
 * //         { // DeviceStatusDetail
 * //           Feature: "BLUETOOTH" || "VOLUME" || "NOTIFICATIONS" || "LISTS" || "SKILLS" || "NETWORK_PROFILE" || "SETTINGS" || "ALL",
 * //           Code: "DEVICE_SOFTWARE_UPDATE_NEEDED" || "DEVICE_WAS_OFFLINE" || "CREDENTIALS_ACCESS_FAILURE" || "TLS_VERSION_MISMATCH" || "ASSOCIATION_REJECTION" || "AUTHENTICATION_FAILURE" || "DHCP_FAILURE" || "INTERNET_UNAVAILABLE" || "DNS_FAILURE" || "UNKNOWN_FAILURE" || "CERTIFICATE_ISSUING_LIMIT_EXCEEDED" || "INVALID_CERTIFICATE_AUTHORITY" || "NETWORK_PROFILE_NOT_FOUND" || "INVALID_PASSWORD_STATE" || "PASSWORD_NOT_FOUND" || "PASSWORD_MANAGER_ACCESS_DENIED" || "CERTIFICATE_AUTHORITY_ACCESS_DENIED",
 * //         },
 * //       ],
 * //       ConnectionStatus: "ONLINE" || "OFFLINE",
 * //       ConnectionStatusUpdatedTime: new Date("TIMESTAMP"),
 * //     },
 * //     NetworkProfileInfo: { // DeviceNetworkProfileInfo
 * //       NetworkProfileArn: "STRING_VALUE",
 * //       CertificateArn: "STRING_VALUE",
 * //       CertificateExpirationTime: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeviceCommandInput - {@link GetDeviceCommandInput}
 * @returns {@link GetDeviceCommandOutput}
 * @see {@link GetDeviceCommandInput} for command's `input` shape.
 * @see {@link GetDeviceCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class GetDeviceCommand extends $Command
  .classBuilder<
    GetDeviceCommandInput,
    GetDeviceCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: AlexaForBusinessClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "GetDevice", {})
  .n("AlexaForBusinessClient", "GetDeviceCommand")
  .f(void 0, void 0)
  .ser(se_GetDeviceCommand)
  .de(de_GetDeviceCommand)
  .build() {}
