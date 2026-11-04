// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateIndexingConfigurationRequest, UpdateIndexingConfigurationResponse } from "../models/models_2";
import { UpdateIndexingConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateIndexingConfigurationCommandOutput extends UpdateIndexingConfigurationResponse, __MetadataBearer {}

/**
 * Updates the search configuration.
 *
 * Requires permission to access the [UpdateIndexingConfiguration](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateIndexingConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateIndexingConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
 *       connectivity: { // ConnectivityFilter
 *         includeSocketInformation: [ // FleetIndexingApiList
 *           "GET_THING_CONNECTIVITY_DATA",
 *         ],
 *       },
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class UpdateIndexingConfigurationCommand extends command<UpdateIndexingConfigurationCommandInput, UpdateIndexingConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateIndexingConfiguration",
  UpdateIndexingConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateIndexingConfigurationRequest;
      output: {};
    };
    sdk: {
      input: UpdateIndexingConfigurationCommandInput;
      output: UpdateIndexingConfigurationCommandOutput;
    };
  };
}
