// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateVPCEConfigurationRequest, UpdateVPCEConfigurationResult } from "../models/models_0";
import { UpdateVPCEConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateVPCEConfigurationCommand}.
 */
export interface UpdateVPCEConfigurationCommandInput extends UpdateVPCEConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVPCEConfigurationCommand}.
 */
export interface UpdateVPCEConfigurationCommandOutput extends UpdateVPCEConfigurationResult, __MetadataBearer {}

/**
 * <p>Updates information about an Amazon Virtual Private Cloud (VPC) endpoint configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateVPCEConfigurationCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateVPCEConfigurationCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // UpdateVPCEConfigurationRequest
 *   arn: "STRING_VALUE", // required
 *   vpceConfigurationName: "STRING_VALUE",
 *   vpceServiceName: "STRING_VALUE",
 *   serviceDnsName: "STRING_VALUE",
 *   vpceConfigurationDescription: "STRING_VALUE",
 * };
 * const command = new UpdateVPCEConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVPCEConfigurationResult
 * //   vpceConfiguration: { // VPCEConfiguration
 * //     arn: "STRING_VALUE",
 * //     vpceConfigurationName: "STRING_VALUE",
 * //     vpceServiceName: "STRING_VALUE",
 * //     serviceDnsName: "STRING_VALUE",
 * //     vpceConfigurationDescription: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateVPCEConfigurationCommandInput - {@link UpdateVPCEConfigurationCommandInput}
 * @returns {@link UpdateVPCEConfigurationCommandOutput}
 * @see {@link UpdateVPCEConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateVPCEConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>There was an error with the update request, or you do not have sufficient permissions
 *             to update this VPC endpoint configuration.</p>
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
export class UpdateVPCEConfigurationCommand extends $Command
  .classBuilder<
    UpdateVPCEConfigurationCommandInput,
    UpdateVPCEConfigurationCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "UpdateVPCEConfiguration", {})
  .n("DeviceFarmClient", "UpdateVPCEConfigurationCommand")
  .sc(UpdateVPCEConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVPCEConfigurationRequest;
      output: UpdateVPCEConfigurationResult;
    };
    sdk: {
      input: UpdateVPCEConfigurationCommandInput;
      output: UpdateVPCEConfigurationCommandOutput;
    };
  };
}
