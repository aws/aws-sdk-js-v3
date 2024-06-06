// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateInstanceProfileRequest, CreateInstanceProfileResult } from "../models/models_0";
import { de_CreateInstanceProfileCommand, se_CreateInstanceProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInstanceProfileCommand}.
 */
export interface CreateInstanceProfileCommandInput extends CreateInstanceProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateInstanceProfileCommand}.
 */
export interface CreateInstanceProfileCommandOutput extends CreateInstanceProfileResult, __MetadataBearer {}

/**
 * <p>Creates a profile that can be applied to one or more private fleet device
 *             instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateInstanceProfileCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateInstanceProfileCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const input = { // CreateInstanceProfileRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   packageCleanup: true || false,
 *   excludeAppPackagesFromCleanup: [ // PackageIds
 *     "STRING_VALUE",
 *   ],
 *   rebootAfterUse: true || false,
 * };
 * const command = new CreateInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateInstanceProfileResult
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
 * @param CreateInstanceProfileCommandInput - {@link CreateInstanceProfileCommandInput}
 * @returns {@link CreateInstanceProfileCommandOutput}
 * @see {@link CreateInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceProfileCommandOutput} for command's `response` shape.
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
 */
export class CreateInstanceProfileCommand extends $Command
  .classBuilder<
    CreateInstanceProfileCommandInput,
    CreateInstanceProfileCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DeviceFarm_20150623", "CreateInstanceProfile", {})
  .n("DeviceFarmClient", "CreateInstanceProfileCommand")
  .f(void 0, void 0)
  .ser(se_CreateInstanceProfileCommand)
  .de(de_CreateInstanceProfileCommand)
  .build() {}
