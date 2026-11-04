// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateInstanceProfileRequest, UpdateInstanceProfileResult } from "../models/models_0";
import { UpdateInstanceProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateInstanceProfileCommand}.
 */
export interface UpdateInstanceProfileCommandInput extends UpdateInstanceProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateInstanceProfileCommand}.
 */
export interface UpdateInstanceProfileCommandOutput extends UpdateInstanceProfileResult, __MetadataBearer {}

/**
 * Updates information about an existing private device instance profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateInstanceProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateInstanceProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // UpdateInstanceProfileRequest
 *   arn: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   packageCleanup: true || false,
 *   excludeAppPackagesFromCleanup: [ // PackageIds
 *     "STRING_VALUE",
 *   ],
 *   rebootAfterUse: true || false,
 * };
 * const command = new UpdateInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInstanceProfileResult
 * //   instanceProfile: { // InstanceProfile
 * //     arn: "STRING_VALUE",
 * //     packageCleanup: true || false,
 * //     excludeAppPackagesFromCleanup: [ // PackageIds
 * //       "STRING_VALUE",
 * //     ],
 * //     rebootAfterUse: true || false,
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateInstanceProfileCommandInput - {@link UpdateInstanceProfileCommandInput}
 * @returns {@link UpdateInstanceProfileCommandOutput}
 * @see {@link UpdateInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateInstanceProfileCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateInstanceProfileCommand extends command<UpdateInstanceProfileCommandInput, UpdateInstanceProfileCommandOutput>(
  _ep0,
  _mw0,
  "UpdateInstanceProfile",
  UpdateInstanceProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateInstanceProfileRequest;
      output: UpdateInstanceProfileResult;
    };
    sdk: {
      input: UpdateInstanceProfileCommandInput;
      output: UpdateInstanceProfileCommandOutput;
    };
  };
}
