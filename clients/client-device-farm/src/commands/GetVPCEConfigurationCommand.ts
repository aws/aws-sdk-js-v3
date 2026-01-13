// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetVPCEConfigurationRequest, GetVPCEConfigurationResult } from "../models/models_0";
import { GetVPCEConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVPCEConfigurationCommand}.
 */
export interface GetVPCEConfigurationCommandInput extends GetVPCEConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetVPCEConfigurationCommand}.
 */
export interface GetVPCEConfigurationCommandOutput extends GetVPCEConfigurationResult, __MetadataBearer {}

/**
 * <p>Returns information about the configuration settings for your Amazon Virtual Private
 *             Cloud (VPC) endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, GetVPCEConfigurationCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, GetVPCEConfigurationCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * // import type { DeviceFarmClientConfig } from "@aws-sdk/client-device-farm";
 * const config = {}; // type is DeviceFarmClientConfig
 * const client = new DeviceFarmClient(config);
 * const input = { // GetVPCEConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetVPCEConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetVPCEConfigurationResult
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
 * @param GetVPCEConfigurationCommandInput - {@link GetVPCEConfigurationCommandInput}
 * @returns {@link GetVPCEConfigurationCommandOutput}
 * @see {@link GetVPCEConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetVPCEConfigurationCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 * @throws {@link ArgumentException} (client fault)
 *  <p>An invalid argument was specified.</p>
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
export class GetVPCEConfigurationCommand extends $Command
  .classBuilder<
    GetVPCEConfigurationCommandInput,
    GetVPCEConfigurationCommandOutput,
    DeviceFarmClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeviceFarmClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DeviceFarm_20150623", "GetVPCEConfiguration", {})
  .n("DeviceFarmClient", "GetVPCEConfigurationCommand")
  .sc(GetVPCEConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVPCEConfigurationRequest;
      output: GetVPCEConfigurationResult;
    };
    sdk: {
      input: GetVPCEConfigurationCommandInput;
      output: GetVPCEConfigurationCommandOutput;
    };
  };
}
