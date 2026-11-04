// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDevicePoolRequest, GetDevicePoolResult } from "../models/models_0";
import { GetDevicePool$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets information about a device pool.
 *
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
 *
 * An invalid argument was specified.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit was exceeded.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified entity was not found.
 *
 * @throws {@link ServiceAccountException} (client fault)
 *
 * There was a problem with the service account.
 *
 * @throws {@link DeviceFarmServiceException}
 *
 * Base exception class for all service exceptions from DeviceFarm service.
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
export class GetDevicePoolCommand extends command<GetDevicePoolCommandInput, GetDevicePoolCommandOutput>(
  _ep0,
  _mw0,
  "GetDevicePool",
  GetDevicePool$
) {
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
