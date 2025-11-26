// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteVPCEConfigurationRequest, DeleteVPCEConfigurationResult } from "../models/models_0";
import { DeleteVPCEConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVPCEConfigurationCommand}.
 */
export interface DeleteVPCEConfigurationCommandInput extends DeleteVPCEConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVPCEConfigurationCommand}.
 */
export interface DeleteVPCEConfigurationCommandOutput extends DeleteVPCEConfigurationResult, __MetadataBearer {}

/**
 * <p>Deletes a configuration for your Amazon Virtual Private Cloud (VPC) endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, DeleteVPCEConfigurationCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, DeleteVPCEConfigurationCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // DeleteVPCEConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteVPCEConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVPCEConfigurationCommandInput - {@link DeleteVPCEConfigurationCommandInput}
 * @returns {@link DeleteVPCEConfigurationCommandOutput}
 * @see {@link DeleteVPCEConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteVPCEConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteVPCEConfigurationCommand extends $Command
  .classBuilder<
    DeleteVPCEConfigurationCommandInput,
    DeleteVPCEConfigurationCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "DeleteVPCEConfiguration", {})
  .n("DeviceFarmClient", "DeleteVPCEConfigurationCommand")
  .sc(DeleteVPCEConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVPCEConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteVPCEConfigurationCommandInput;
      output: DeleteVPCEConfigurationCommandOutput;
    };
  };
}
