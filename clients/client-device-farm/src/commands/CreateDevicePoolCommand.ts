// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateDevicePoolRequest, CreateDevicePoolResult } from "../models/models_0";
import { CreateDevicePool$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDevicePoolCommand}.
 */
export interface CreateDevicePoolCommandInput extends CreateDevicePoolRequest {}
/**
 * @public
 *
 * The output of {@link CreateDevicePoolCommand}.
 */
export interface CreateDevicePoolCommandOutput extends CreateDevicePoolResult, __MetadataBearer {}

/**
 * <p>Creates a device pool.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateDevicePoolCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateDevicePoolCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // CreateDevicePoolRequest
 *   projectArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   rules: [ // Rules // required
 *     { // Rule
 *       attribute: "ARN" || "PLATFORM" || "FORM_FACTOR" || "MANUFACTURER" || "REMOTE_ACCESS_ENABLED" || "REMOTE_DEBUG_ENABLED" || "APPIUM_VERSION" || "INSTANCE_ARN" || "INSTANCE_LABELS" || "FLEET_TYPE" || "OS_VERSION" || "MODEL" || "AVAILABILITY",
 *       operator: "EQUALS" || "LESS_THAN" || "LESS_THAN_OR_EQUALS" || "GREATER_THAN" || "GREATER_THAN_OR_EQUALS" || "IN" || "NOT_IN" || "CONTAINS",
 *       value: "STRING_VALUE",
 *     },
 *   ],
 *   maxDevices: Number("int"),
 * };
 * const command = new CreateDevicePoolCommand(input);
 * const response = await client.send(command);
 * // { // CreateDevicePoolResult
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
 * @param CreateDevicePoolCommandInput - {@link CreateDevicePoolCommandInput}
 * @returns {@link CreateDevicePoolCommandOutput}
 * @see {@link CreateDevicePoolCommandInput} for command's `input` shape.
 * @see {@link CreateDevicePoolCommandOutput} for command's `response` shape.
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
 * @example To create a new device pool
 * ```javascript
 * // The following example creates a new device pool named MyDevicePool inside an existing project.
 * const input = {
 *   description: "My Android devices",
 *   name: "MyDevicePool",
 *   projectArn: "arn:aws:devicefarm:us-west-2:123456789101:project:EXAMPLE-GUID-123-456",
 *   rules:   []
 * };
 * const command = new CreateDevicePoolCommand(input);
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
export class CreateDevicePoolCommand extends $Command
  .classBuilder<
    CreateDevicePoolCommandInput,
    CreateDevicePoolCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "CreateDevicePool", {})
  .n("DeviceFarmClient", "CreateDevicePoolCommand")
  .sc(CreateDevicePool$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDevicePoolRequest;
      output: CreateDevicePoolResult;
    };
    sdk: {
      input: CreateDevicePoolCommandInput;
      output: CreateDevicePoolCommandOutput;
    };
  };
}
