// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDevicePoolsRequest, ListDevicePoolsResult } from "../models/models_0";
import { ListDevicePools } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDevicePoolsCommand}.
 */
export interface ListDevicePoolsCommandInput extends ListDevicePoolsRequest {}
/**
 * @public
 *
 * The output of {@link ListDevicePoolsCommand}.
 */
export interface ListDevicePoolsCommandOutput extends ListDevicePoolsResult, __MetadataBearer {}

/**
 * <p>Gets information about device pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListDevicePoolsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListDevicePoolsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // ListDevicePoolsRequest
 *   arn: "STRING_VALUE", // required
 *   type: "CURATED" || "PRIVATE",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDevicePoolsCommand(input);
 * const response = await client.send(command);
 * // { // ListDevicePoolsResult
 * //   devicePools: [ // DevicePools
 * //     { // DevicePool
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       type: "CURATED" || "PRIVATE",
 * //       rules: [ // Rules
 * //         { // Rule
 * //           attribute: "ARN" || "PLATFORM" || "FORM_FACTOR" || "MANUFACTURER" || "REMOTE_ACCESS_ENABLED" || "REMOTE_DEBUG_ENABLED" || "APPIUM_VERSION" || "INSTANCE_ARN" || "INSTANCE_LABELS" || "FLEET_TYPE" || "OS_VERSION" || "MODEL" || "AVAILABILITY",
 * //           operator: "EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "IN" || "NOT_IN" || "CONTAINS",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       maxDevices: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDevicePoolsCommandInput - {@link ListDevicePoolsCommandInput}
 * @returns {@link ListDevicePoolsCommandOutput}
 * @see {@link ListDevicePoolsCommandInput} for command's `input` shape.
 * @see {@link ListDevicePoolsCommandOutput} for command's `response` shape.
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
 * @example To get information about device pools
 * ```javascript
 * // The following example returns information about the private device pools in a specific project.
 * const input = {
 *   arn: "arn:aws:devicefarm:us-west-2:123456789101:project:EXAMPLE-GUID-123-456",
 *   type: "PRIVATE"
 * };
 * const command = new ListDevicePoolsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   devicePools: [
 *     {
 *       arn: "arn:aws:devicefarm:us-west-2::devicepool:082d10e5-d7d7-48a5-ba5c-12345EXAMPLE",
 *       description: "Top devices",
 *       name: "Top Devices",
 *       rules: [
 *         {
 *           attribute: "ARN",
 *           operator: "IN",
 *           value: `["arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE"]`
 *         }
 *       ]
 *     },
 *     {
 *       arn: "arn:aws:devicefarm:us-west-2:123456789101:devicepool:5e01a8c7-c861-4c0a-b1d5-5ec6e6c6dd23/bf96e75a-28f6-4e61-b6a7-12345EXAMPLE",
 *       description: "Samsung Galaxy Android devices",
 *       name: "My Android Device Pool",
 *       rules: [
 *         {
 *           attribute: "ARN",
 *           operator: "IN",
 *           value: `["arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE","arn:aws:devicefarm:us-west-2::device:123456789EXAMPLE"]`
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDevicePoolsCommand extends $Command
  .classBuilder<
    ListDevicePoolsCommandInput,
    ListDevicePoolsCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "ListDevicePools", {})
  .n("DeviceFarmClient", "ListDevicePoolsCommand")
  .sc(ListDevicePools)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDevicePoolsRequest;
      output: ListDevicePoolsResult;
    };
    sdk: {
      input: ListDevicePoolsCommandInput;
      output: ListDevicePoolsCommandOutput;
    };
  };
}
