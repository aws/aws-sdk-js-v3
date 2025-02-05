// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateDevicePoolRequest, UpdateDevicePoolResult } from "../models/models_0";
import { de_UpdateDevicePoolCommand, se_UpdateDevicePoolCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDevicePoolCommand}.
 */
export interface UpdateDevicePoolCommandInput extends UpdateDevicePoolRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDevicePoolCommand}.
 */
export interface UpdateDevicePoolCommandOutput extends UpdateDevicePoolResult, __MetadataBearer {}

/**
 * <p>Modifies the name, description, and rules in a device pool given the attributes and
 *             the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a
 *             whole (or not at all).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateDevicePoolCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateDevicePoolCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DeviceFarmClient(config);
 * const input = { // UpdateDevicePoolRequest
 *   arn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   rules: [ // Rules
 *     { // Rule
 *       attribute: "ARN" || "PLATFORM" || "FORM_FACTOR" || "MANUFACTURER" || "REMOTE_ACCESS_ENABLED" || "REMOTE_DEBUG_ENABLED" || "APPIUM_VERSION" || "INSTANCE_ARN" || "INSTANCE_LABELS" || "FLEET_TYPE" || "OS_VERSION" || "MODEL" || "AVAILABILITY",
 *       operator: "EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "IN" || "NOT_IN" || "CONTAINS",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   maxDevices: Number("int"),
 *   clearMaxDevices: true || false,
 * };
 * const command = new UpdateDevicePoolCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDevicePoolResult
 * //   devicePool: { // DevicePool
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     type: "CURATED" || "PRIVATE",
 * //     rules: [ // Rules
 * //       { // Rule
 * //         attribute: "ARN" || "PLATFORM" || "FORM_FACTOR" || "MANUFACTURER" || "REMOTE_ACCESS_ENABLED" || "REMOTE_DEBUG_ENABLED" || "APPIUM_VERSION" || "INSTANCE_ARN" || "INSTANCE_LABELS" || "FLEET_TYPE" || "OS_VERSION" || "MODEL" || "AVAILABILITY",
 * //         operator: "EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "IN" || "NOT_IN" || "CONTAINS",
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     maxDevices: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDevicePoolCommandInput - {@link UpdateDevicePoolCommandInput}
 * @returns {@link UpdateDevicePoolCommandOutput}
 * @see {@link UpdateDevicePoolCommandInput} for command's `input` shape.
 * @see {@link UpdateDevicePoolCommandOutput} for command's `response` shape.
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
 * @public
 * @example To update a device pool
 * ```javascript
 * // The following example updates the specified device pool with a new name and description. It also enables remote access of devices in the device pool.
 * const input = {
 *   "name": "NewName",
 *   "arn": "arn:aws:devicefarm:us-west-2::devicepool:082d10e5-d7d7-48a5-ba5c-12345EXAMPLE",
 *   "description": "NewDescription",
 *   "rules": [
 *     {
 *       "value": "True",
 *       "attribute": "REMOTE_ACCESS_ENABLED",
 *       "operator": "EQUALS"
 *     }
 *   ]
 * };
 * const command = new UpdateDevicePoolCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "devicePool": {}
 * }
 * *\/
 * // example id: to-update-a-device-pool-1472653887677
 * ```
 *
 */
export class UpdateDevicePoolCommand extends $Command
  .classBuilder<
    UpdateDevicePoolCommandInput,
    UpdateDevicePoolCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DeviceFarm_20150623", "UpdateDevicePool", {})
  .n("DeviceFarmClient", "UpdateDevicePoolCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDevicePoolCommand)
  .de(de_UpdateDevicePoolCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDevicePoolRequest;
      output: UpdateDevicePoolResult;
    };
    sdk: {
      input: UpdateDevicePoolCommandInput;
      output: UpdateDevicePoolCommandOutput;
    };
  };
}
