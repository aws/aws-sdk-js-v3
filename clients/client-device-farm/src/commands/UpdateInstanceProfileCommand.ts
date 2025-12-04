// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateInstanceProfileRequest, UpdateInstanceProfileResult } from "../models/models_0";
import { UpdateInstanceProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates information about an existing private device instance profile.</p>
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
export class UpdateInstanceProfileCommand extends $Command
  .classBuilder<
    UpdateInstanceProfileCommandInput,
    UpdateInstanceProfileCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "UpdateInstanceProfile", {})
  .n("DeviceFarmClient", "UpdateInstanceProfileCommand")
  .sc(UpdateInstanceProfile)
  .build() {
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
