// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDevicePoolRequest, GetDevicePoolResult } from "../models/models_0";
import { GetDevicePool } from "../schemas/schemas_7_Device";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDevicePoolCommand}.
 */
export interface GetDevicePoolCommandInput extends GetDevicePoolRequest {}
/**
 * @public
 *
 * The output of {@link GetDevicePoolCommand}.
 */
export interface GetDevicePoolCommandOutput extends GetDevicePoolResult, __MetadataBearer {}

/**
 * <p>Gets information about a device pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetDevicePoolCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetDevicePoolCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // GetDevicePoolRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetDevicePoolCommand(input);
 * const response = await client.send(command);
 * // { // GetDevicePoolResult
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
 * @param GetDevicePoolCommandInput - {@link GetDevicePoolCommandInput}
 * @returns {@link GetDevicePoolCommandOutput}
 * @see {@link GetDevicePoolCommandInput} for command's `input` shape.
 * @see {@link GetDevicePoolCommandOutput} for command's `response` shape.
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
 * @example To get information about a device pool
 * ```javascript
 * // The following example returns information about a specific device pool, given a project ARN.
 * const input = {
 *   arn: "arn:aws:devicefarm:us-west-2:123456789101:project:EXAMPLE-GUID-123-456"
 * };
 * const command = new GetDevicePoolCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   devicePool:   { /* empty *\/ }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetDevicePoolCommand extends $Command
  .classBuilder<
    GetDevicePoolCommandInput,
    GetDevicePoolCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "GetDevicePool", {})
  .n("DeviceFarmClient", "GetDevicePoolCommand")
  .sc(GetDevicePool)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDevicePoolRequest;
      output: GetDevicePoolResult;
    };
    sdk: {
      input: GetDevicePoolCommandInput;
      output: GetDevicePoolCommandOutput;
    };
  };
}
