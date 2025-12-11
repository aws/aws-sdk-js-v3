// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateVPCEConfigurationRequest, CreateVPCEConfigurationResult } from "../models/models_0";
import { CreateVPCEConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVPCEConfigurationCommand}.
 */
export interface CreateVPCEConfigurationCommandInput extends CreateVPCEConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateVPCEConfigurationCommand}.
 */
export interface CreateVPCEConfigurationCommandOutput extends CreateVPCEConfigurationResult, __MetadataBearer {}

/**
 * <p>Creates a configuration record in Device Farm for your Amazon Virtual Private Cloud
 *             (VPC) endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, CreateVPCEConfigurationCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, CreateVPCEConfigurationCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // CreateVPCEConfigurationRequest
 *   vpceConfigurationName: "STRING_VALUE", // required
 *   vpceServiceName: "STRING_VALUE", // required
 *   serviceDnsName: "STRING_VALUE", // required
 *   vpceConfigurationDescription: "STRING_VALUE",
 * };
 * const command = new CreateVPCEConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateVPCEConfigurationResult
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
 * @param CreateVPCEConfigurationCommandInput - {@link CreateVPCEConfigurationCommandInput}
 * @returns {@link CreateVPCEConfigurationCommandOutput}
 * @see {@link CreateVPCEConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateVPCEConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit was exceeded.</p>
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
export class CreateVPCEConfigurationCommand extends $Command
  .classBuilder<
    CreateVPCEConfigurationCommandInput,
    CreateVPCEConfigurationCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "CreateVPCEConfiguration", {})
  .n("DeviceFarmClient", "CreateVPCEConfigurationCommand")
  .sc(CreateVPCEConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVPCEConfigurationRequest;
      output: CreateVPCEConfigurationResult;
    };
    sdk: {
      input: CreateVPCEConfigurationCommandInput;
      output: CreateVPCEConfigurationCommandOutput;
    };
  };
}
