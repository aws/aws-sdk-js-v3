// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { UpdateIndexingConfigurationRequest, UpdateIndexingConfigurationResponse } from "../models/models_2";
import {
  de_UpdateIndexingConfigurationCommand,
  se_UpdateIndexingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateIndexingConfigurationCommand}.
 */
export interface UpdateIndexingConfigurationCommandInput extends UpdateIndexingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateIndexingConfigurationCommand}.
 */
export interface UpdateIndexingConfigurationCommandOutput
  extends UpdateIndexingConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Updates the search configuration.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateIndexingConfiguration</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateIndexingConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateIndexingConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // UpdateIndexingConfigurationRequest
 *   thingIndexingConfiguration: { // ThingIndexingConfiguration
 *     thingIndexingMode: "OFF" || "REGISTRY" || "REGISTRY_AND_SHADOW", // required
 *     thingConnectivityIndexingMode: "OFF" || "STATUS",
 *     deviceDefenderIndexingMode: "OFF" || "VIOLATIONS",
 *     namedShadowIndexingMode: "OFF" || "ON",
 *     managedFields: [ // Fields
 *       { // Field
 *         name: "STRING_VALUE",
 *         type: "Number" || "String" || "Boolean",
 *       },
 *     ],
 *     customFields: [
 *       {
 *         name: "STRING_VALUE",
 *         type: "Number" || "String" || "Boolean",
 *       },
 *     ],
 *     filter: { // IndexingFilter
 *       namedShadowNames: [ // NamedShadowNamesFilter
 *         "STRING_VALUE",
 *       ],
 *       geoLocations: [ // GeoLocationsFilter
 *         { // GeoLocationTarget
 *           name: "STRING_VALUE",
 *           order: "LatLon" || "LonLat",
 *         },
 *       ],
 *     },
 *   },
 *   thingGroupIndexingConfiguration: { // ThingGroupIndexingConfiguration
 *     thingGroupIndexingMode: "OFF" || "ON", // required
 *     managedFields: [
 *       {
 *         name: "STRING_VALUE",
 *         type: "Number" || "String" || "Boolean",
 *       },
 *     ],
 *     customFields: [
 *       {
 *         name: "STRING_VALUE",
 *         type: "Number" || "String" || "Boolean",
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateIndexingConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateIndexingConfigurationCommandInput - {@link UpdateIndexingConfigurationCommandInput}
 * @returns {@link UpdateIndexingConfigurationCommandOutput}
 * @see {@link UpdateIndexingConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateIndexingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class UpdateIndexingConfigurationCommand extends $Command
  .classBuilder<
    UpdateIndexingConfigurationCommandInput,
    UpdateIndexingConfigurationCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "UpdateIndexingConfiguration", {})
  .n("IoTClient", "UpdateIndexingConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateIndexingConfigurationCommand)
  .de(de_UpdateIndexingConfigurationCommand)
  .build() {}
