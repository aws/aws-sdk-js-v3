// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDeviceInstancesRequest, ListDeviceInstancesResult } from "../models/models_0";
import { ListDeviceInstances } from "../schemas/schemas_28_ListDeviceInstances";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeviceInstancesCommand}.
 */
export interface ListDeviceInstancesCommandInput extends ListDeviceInstancesRequest {}
/**
 * @public
 *
 * The output of {@link ListDeviceInstancesCommand}.
 */
export interface ListDeviceInstancesCommandOutput extends ListDeviceInstancesResult, __MetadataBearer {}

/**
 * <p>Returns information about the private device instances associated with one or more AWS
 *             accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListDeviceInstancesCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListDeviceInstancesCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // ListDeviceInstancesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDeviceInstancesCommand(input);
 * const response = await client.send(command);
 * // { // ListDeviceInstancesResult
 * //   deviceInstances: [ // DeviceInstances
 * //     { // DeviceInstance
 * //       arn: "STRING_VALUE",
 * //       deviceArn: "STRING_VALUE",
 * //       labels: [ // InstanceLabels
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "IN_USE" || "PREPARING" || "AVAILABLE" || "NOT_AVAILABLE",
 * //       udid: "STRING_VALUE",
 * //       instanceProfile: { // InstanceProfile
 * //         arn: "STRING_VALUE",
 * //         packageCleanup: true || false,
 * //         excludeAppPackagesFromCleanup: [ // PackageIds
 * //           "STRING_VALUE",
 * //         ],
 * //         rebootAfterUse: true || false,
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeviceInstancesCommandInput - {@link ListDeviceInstancesCommandInput}
 * @returns {@link ListDeviceInstancesCommandOutput}
 * @see {@link ListDeviceInstancesCommandInput} for command's `input` shape.
 * @see {@link ListDeviceInstancesCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified entity was not found.</p>
 *
 * @throws {@link ServiceAccountException} (client fault)
 *  <p>There was a problem with the service account.</p>
 *
 * @throws {@link DeviceFarmServiceException}
 * <p>Base exception class for all service exceptions from DeviceFarm service.</p>
 *
 *
 * @public
 */
export class ListDeviceInstancesCommand extends $Command
  .classBuilder<
    ListDeviceInstancesCommandInput,
    ListDeviceInstancesCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "ListDeviceInstances", {})
  .n("DeviceFarmClient", "ListDeviceInstancesCommand")
  .sc(ListDeviceInstances)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeviceInstancesRequest;
      output: ListDeviceInstancesResult;
    };
    sdk: {
      input: ListDeviceInstancesCommandInput;
      output: ListDeviceInstancesCommandOutput;
    };
  };
}
