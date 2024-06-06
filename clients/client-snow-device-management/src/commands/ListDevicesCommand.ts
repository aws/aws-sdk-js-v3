// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDevicesInput, ListDevicesOutput } from "../models/models_0";
import { de_ListDevicesCommand, se_ListDevicesCommand } from "../protocols/Aws_restJson1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowDeviceManagementClientResolvedConfig,
} from "../SnowDeviceManagementClient";

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
export interface ListDevicesCommandInput extends ListDevicesInput {}
/**
 * @public
 *
 * The output of {@link ListDevicesCommand}.
 */
export interface ListDevicesCommandOutput extends ListDevicesOutput, __MetadataBearer {}

/**
 * <p>Returns a list of all devices on your Amazon Web Services account that have Amazon Web Services Snow Device Management
 *       enabled in the Amazon Web Services Region where the command is run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowDeviceManagementClient, ListDevicesCommand } from "@aws-sdk/client-snow-device-management"; // ES Modules import
 * // const { SnowDeviceManagementClient, ListDevicesCommand } = require("@aws-sdk/client-snow-device-management"); // CommonJS import
 * const client = new SnowDeviceManagementClient(config);
 * const input = { // ListDevicesInput
 *   jobId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDevicesCommand(input);
 * const response = await client.send(command);
 * // { // ListDevicesOutput
 * //   devices: [ // DeviceSummaryList
 * //     { // DeviceSummary
 * //       managedDeviceId: "STRING_VALUE",
 * //       managedDeviceArn: "STRING_VALUE",
 * //       associatedWithJob: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDevicesCommandInput - {@link ListDevicesCommandInput}
 * @returns {@link ListDevicesCommandOutput}
 * @see {@link ListDevicesCommandInput} for command's `input` shape.
 * @see {@link ListDevicesCommandOutput} for command's `response` shape.
 * @see {@link SnowDeviceManagementClientResolvedConfig | config} for SnowDeviceManagementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SnowDeviceManagementServiceException}
 * <p>Base exception class for all service exceptions from SnowDeviceManagement service.</p>
 *
 * @public
 */
export class ListDevicesCommand extends $Command
  .classBuilder<
    ListDevicesCommandInput,
    ListDevicesCommandOutput,
    SnowDeviceManagementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SnowDeviceManagementClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SnowDeviceManagement", "ListDevices", {})
  .n("SnowDeviceManagementClient", "ListDevicesCommand")
  .f(void 0, void 0)
  .ser(se_ListDevicesCommand)
  .de(de_ListDevicesCommand)
  .build() {}
