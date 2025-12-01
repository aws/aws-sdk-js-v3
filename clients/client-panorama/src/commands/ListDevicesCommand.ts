// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDevicesRequest, ListDevicesResponse } from "../models/models_0";
import type { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import { ListDevices } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDevicesCommand}.
 */
export interface ListDevicesCommandInput extends ListDevicesRequest {}
/**
 * @public
 *
 * The output of {@link ListDevicesCommand}.
 */
export interface ListDevicesCommandOutput extends ListDevicesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ListDevicesCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ListDevicesCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * // import type { PanoramaClientConfig } from "@aws-sdk/client-panorama";
 * const config = {}; // type is PanoramaClientConfig
 * const client = new PanoramaClient(config);
 * const input = { // ListDevicesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SortBy: "STRING_VALUE",
 *   SortOrder: "STRING_VALUE",
 *   NameFilter: "STRING_VALUE",
 *   DeviceAggregatedStatusFilter: "STRING_VALUE",
 * };
 * const command = new ListDevicesCommand(input);
 * const response = await client.send(command);
 * // { // ListDevicesResponse
 * //   Devices: [ // DeviceList // required
 * //     { // Device
 * //       DeviceId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       ProvisioningStatus: "STRING_VALUE",
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       LeaseExpirationTime: new Date("TIMESTAMP"),
 * //       Brand: "STRING_VALUE",
 * //       CurrentSoftware: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Type: "STRING_VALUE",
 * //       LatestDeviceJob: { // LatestDeviceJob
 * //         ImageVersion: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         JobType: "STRING_VALUE",
 * //       },
 * //       DeviceAggregatedStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDevicesCommandInput - {@link ListDevicesCommandInput}
 * @returns {@link ListDevicesCommandOutput}
 * @see {@link ListDevicesCommandInput} for command's `input` shape.
 * @see {@link ListDevicesCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requestor does not have permission to access the target action or resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The target resource is in use.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request contains an invalid parameter value.</p>
 *
 * @throws {@link PanoramaServiceException}
 * <p>Base exception class for all service exceptions from Panorama service.</p>
 *
 *
 * @public
 */
export class ListDevicesCommand extends $Command
  .classBuilder<
    ListDevicesCommandInput,
    ListDevicesCommandOutput,
    PanoramaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PanoramaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OmniCloudServiceLambda", "ListDevices", {})
  .n("PanoramaClient", "ListDevicesCommand")
  .sc(ListDevices)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDevicesRequest;
      output: ListDevicesResponse;
    };
    sdk: {
      input: ListDevicesCommandInput;
      output: ListDevicesCommandOutput;
    };
  };
}
