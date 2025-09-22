// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateThingRuntimeConfigurationRequest, UpdateThingRuntimeConfigurationResponse } from "../models/models_0";
import { UpdateThingRuntimeConfiguration } from "../schemas/schemas_1_Runtime";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateThingRuntimeConfigurationCommand}.
 */
export interface UpdateThingRuntimeConfigurationCommandInput extends UpdateThingRuntimeConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateThingRuntimeConfigurationCommand}.
 */
export interface UpdateThingRuntimeConfigurationCommandOutput
  extends UpdateThingRuntimeConfigurationResponse,
    __MetadataBearer {}

/**
 * Updates the runtime configuration of a thing.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateThingRuntimeConfigurationCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateThingRuntimeConfigurationCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // UpdateThingRuntimeConfigurationRequest
 *   TelemetryConfiguration: { // TelemetryConfigurationUpdate
 *     Telemetry: "On" || "Off", // required
 *   },
 *   ThingName: "STRING_VALUE", // required
 * };
 * const command = new UpdateThingRuntimeConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateThingRuntimeConfigurationCommandInput - {@link UpdateThingRuntimeConfigurationCommandInput}
 * @returns {@link UpdateThingRuntimeConfigurationCommandOutput}
 * @see {@link UpdateThingRuntimeConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateThingRuntimeConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class UpdateThingRuntimeConfigurationCommand extends $Command
  .classBuilder<
    UpdateThingRuntimeConfigurationCommandInput,
    UpdateThingRuntimeConfigurationCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "UpdateThingRuntimeConfiguration", {})
  .n("GreengrassClient", "UpdateThingRuntimeConfigurationCommand")
  .sc(UpdateThingRuntimeConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateThingRuntimeConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateThingRuntimeConfigurationCommandInput;
      output: UpdateThingRuntimeConfigurationCommandOutput;
    };
  };
}
