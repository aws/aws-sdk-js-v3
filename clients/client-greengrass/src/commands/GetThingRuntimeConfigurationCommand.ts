// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetThingRuntimeConfigurationRequest, GetThingRuntimeConfigurationResponse } from "../models/models_0";
import {
  de_GetThingRuntimeConfigurationCommand,
  se_GetThingRuntimeConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetThingRuntimeConfigurationCommand}.
 */
export interface GetThingRuntimeConfigurationCommandInput extends GetThingRuntimeConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetThingRuntimeConfigurationCommand}.
 */
export interface GetThingRuntimeConfigurationCommandOutput
  extends GetThingRuntimeConfigurationResponse,
    __MetadataBearer {}

/**
 * Get the runtime configuration of a thing.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetThingRuntimeConfigurationCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetThingRuntimeConfigurationCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GreengrassClient(config);
 * const input = { // GetThingRuntimeConfigurationRequest
 *   ThingName: "STRING_VALUE", // required
 * };
 * const command = new GetThingRuntimeConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetThingRuntimeConfigurationResponse
 * //   RuntimeConfiguration: { // RuntimeConfiguration
 * //     TelemetryConfiguration: { // TelemetryConfiguration
 * //       ConfigurationSyncStatus: "InSync" || "OutOfSync",
 * //       Telemetry: "On" || "Off", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetThingRuntimeConfigurationCommandInput - {@link GetThingRuntimeConfigurationCommandInput}
 * @returns {@link GetThingRuntimeConfigurationCommandOutput}
 * @see {@link GetThingRuntimeConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetThingRuntimeConfigurationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetThingRuntimeConfigurationCommand extends $Command
  .classBuilder<
    GetThingRuntimeConfigurationCommandInput,
    GetThingRuntimeConfigurationCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "GetThingRuntimeConfiguration", {})
  .n("GreengrassClient", "GetThingRuntimeConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetThingRuntimeConfigurationCommand)
  .de(de_GetThingRuntimeConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetThingRuntimeConfigurationRequest;
      output: GetThingRuntimeConfigurationResponse;
    };
    sdk: {
      input: GetThingRuntimeConfigurationCommandInput;
      output: GetThingRuntimeConfigurationCommandOutput;
    };
  };
}
