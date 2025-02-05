// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateDeviceRequest,
  CreateDeviceRequestFilterSensitiveLog,
  CreateDeviceResponse,
  CreateDeviceResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_CreateDeviceCommand, se_CreateDeviceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDeviceCommand}.
 */
export interface CreateDeviceCommandInput extends CreateDeviceRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeviceCommand}.
 */
export interface CreateDeviceCommandOutput extends CreateDeviceResponse, __MetadataBearer {}

/**
 * <p>Creates a new device in a global network. If you specify both a site ID and a
 *             location, the location of the site is used for visualization in the Network Manager console.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateDeviceCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateDeviceCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new NetworkManagerClient(config);
 * const input = { // CreateDeviceRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   AWSLocation: { // AWSLocation
 *     Zone: "STRING_VALUE",
 *     SubnetArn: "STRING_VALUE",
 *   },
 *   Description: "STRING_VALUE",
 *   Type: "STRING_VALUE",
 *   Vendor: "STRING_VALUE",
 *   Model: "STRING_VALUE",
 *   SerialNumber: "STRING_VALUE",
 *   Location: { // Location
 *     Address: "STRING_VALUE",
 *     Latitude: "STRING_VALUE",
 *     Longitude: "STRING_VALUE",
 *   },
 *   SiteId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDeviceCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeviceResponse
 * //   Device: { // Device
 * //     DeviceId: "STRING_VALUE",
 * //     DeviceArn: "STRING_VALUE",
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     AWSLocation: { // AWSLocation
 * //       Zone: "STRING_VALUE",
 * //       SubnetArn: "STRING_VALUE",
 * //     },
 * //     Description: "STRING_VALUE",
 * //     Type: "STRING_VALUE",
 * //     Vendor: "STRING_VALUE",
 * //     Model: "STRING_VALUE",
 * //     SerialNumber: "STRING_VALUE",
 * //     Location: { // Location
 * //       Address: "STRING_VALUE",
 * //       Latitude: "STRING_VALUE",
 * //       Longitude: "STRING_VALUE",
 * //     },
 * //     SiteId: "STRING_VALUE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     State: "PENDING" || "AVAILABLE" || "DELETING" || "UPDATING",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDeviceCommandInput - {@link CreateDeviceCommandInput}
 * @returns {@link CreateDeviceCommandOutput}
 * @see {@link CreateDeviceCommandInput} for command's `input` shape.
 * @see {@link CreateDeviceCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service limit was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 * @public
 */
export class CreateDeviceCommand extends $Command
  .classBuilder<
    CreateDeviceCommandInput,
    CreateDeviceCommandOutput,
    NetworkManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkManager", "CreateDevice", {})
  .n("NetworkManagerClient", "CreateDeviceCommand")
  .f(CreateDeviceRequestFilterSensitiveLog, CreateDeviceResponseFilterSensitiveLog)
  .ser(se_CreateDeviceCommand)
  .de(de_CreateDeviceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeviceRequest;
      output: CreateDeviceResponse;
    };
    sdk: {
      input: CreateDeviceCommandInput;
      output: CreateDeviceCommandOutput;
    };
  };
}
