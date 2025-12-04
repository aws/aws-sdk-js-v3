// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import type { SendConnectorEventRequest, SendConnectorEventResponse } from "../models/models_0";
import { SendConnectorEvent } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendConnectorEventCommand}.
 */
export interface SendConnectorEventCommandInput extends SendConnectorEventRequest {}
/**
 * @public
 *
 * The output of {@link SendConnectorEventCommand}.
 */
export interface SendConnectorEventCommandOutput extends SendConnectorEventResponse, __MetadataBearer {}

/**
 * <p>Relays third-party device events for a connector such as a new device or a device state change event.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, SendConnectorEventCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, SendConnectorEventCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // SendConnectorEventRequest
 *   ConnectorId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE",
 *   Operation: "DEVICE_COMMAND_RESPONSE" || "DEVICE_DISCOVERY" || "DEVICE_EVENT" || "DEVICE_COMMAND_REQUEST", // required
 *   OperationVersion: "STRING_VALUE",
 *   StatusCode: Number("int"),
 *   Message: "STRING_VALUE",
 *   DeviceDiscoveryId: "STRING_VALUE",
 *   ConnectorDeviceId: "STRING_VALUE",
 *   TraceId: "STRING_VALUE",
 *   Devices: [ // Devices
 *     { // Device
 *       ConnectorDeviceId: "STRING_VALUE", // required
 *       ConnectorDeviceName: "STRING_VALUE",
 *       CapabilityReport: { // MatterCapabilityReport
 *         version: "STRING_VALUE", // required
 *         nodeId: "STRING_VALUE",
 *         endpoints: [ // MatterCapabilityReportEndpoints // required
 *           { // MatterCapabilityReportEndpoint
 *             id: "STRING_VALUE", // required
 *             deviceTypes: [ // DeviceTypes // required
 *               "STRING_VALUE",
 *             ],
 *             clusters: [ // MatterCapabilityReportClusters // required
 *               { // MatterCapabilityReportCluster
 *                 id: "STRING_VALUE", // required
 *                 revision: Number("int"), // required
 *                 publicId: "STRING_VALUE",
 *                 name: "STRING_VALUE",
 *                 specVersion: "STRING_VALUE",
 *                 attributes: [ // MatterCapabilityReportAttributes
 *                   { // MatterCapabilityReportAttribute
 *                     id: "STRING_VALUE",
 *                     name: "STRING_VALUE",
 *                     value: "DOCUMENT_VALUE",
 *                   },
 *                 ],
 *                 commands: [ // MatterCapabilityReportCommands
 *                   "STRING_VALUE",
 *                 ],
 *                 events: [ // MatterCapabilityReportEvents
 *                   "STRING_VALUE",
 *                 ],
 *                 featureMap: Number("long"),
 *                 generatedCommands: [ // MatterCapabilityReportGeneratedCommands
 *                   "STRING_VALUE",
 *                 ],
 *                 fabricIndex: Number("int"),
 *               },
 *             ],
 *             parts: [ // MatterCapabilityReportEndpointParts
 *               "STRING_VALUE",
 *             ],
 *             semanticTags: [ // MatterCapabilityReportEndpointSemanticTags
 *               "STRING_VALUE",
 *             ],
 *             clientClusters: [ // MatterCapabilityReportEndpointClientClusters
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *       CapabilitySchemas: [ // CapabilitySchemas
 *         { // CapabilitySchemaItem
 *           Format: "AWS" || "ZCL" || "CONNECTOR", // required
 *           CapabilityId: "STRING_VALUE", // required
 *           ExtrinsicId: "STRING_VALUE", // required
 *           ExtrinsicVersion: Number("int"), // required
 *           Schema: "DOCUMENT_VALUE", // required
 *         },
 *       ],
 *       DeviceMetadata: "DOCUMENT_VALUE",
 *     },
 *   ],
 *   MatterEndpoint: { // MatterEndpoint
 *     id: "STRING_VALUE",
 *     clusters: [ // MatterClusters
 *       { // MatterCluster
 *         id: "STRING_VALUE",
 *         attributes: "DOCUMENT_VALUE",
 *         commands: { // MatterCommands
 *           "<keys>": "DOCUMENT_VALUE",
 *         },
 *         events: { // MatterEvents
 *           "<keys>": "DOCUMENT_VALUE",
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new SendConnectorEventCommand(input);
 * const response = await client.send(command);
 * // { // SendConnectorEventResponse
 * //   ConnectorId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SendConnectorEventCommandInput - {@link SendConnectorEventCommandInput}
 * @returns {@link SendConnectorEventCommandOutput}
 * @see {@link SendConnectorEventCommandInput} for command's `input` shape.
 * @see {@link SendConnectorEventCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service is unavailable.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @example SendConnectorEvent happy path for device discovery
 * ```javascript
 * //
 * const input = {
 *   ConnectorId: "MockConnectorId",
 *   DeviceDiscoveryId: "358275hbk3qr",
 *   Devices: [
 *     {
 *       CapabilityReport: {
 *         endpoints: [
 *           {
 *             clusters: [
 *               {
 *                 attributes: [
 *                   {
 *                     id: "0x0000",
 *                     value: "exampleString"
 *                   },
 *                   {
 *                     id: "0x0001"
 *                   },
 *                   {
 *                     id: "0x0002"
 *                   }
 *                 ],
 *                 commands: [
 *                   "0x00",
 *                   "0x01"
 *                 ],
 *                 events:                 [],
 *                 id: "0x0201",
 *                 revision: 1
 *               }
 *             ],
 *             deviceTypes: [
 *               "Refrigerator"
 *             ],
 *             id: "EP1"
 *           }
 *         ],
 *         nodeId: "1",
 *         version: "1.0.0"
 *       },
 *       ConnectorDeviceId: "Mock-Connector-DeviceId-1",
 *       ConnectorDeviceName: "Sample-User-device-1"
 *     }
 *   ],
 *   Message: "Sample ConnectorEventMessage",
 *   Operation: "DEVICE_DISCOVERY",
 *   OperationVersion: "1.0",
 *   StatusCode: 200,
 *   UserId: "MockThirdPartyUserId"
 * };
 * const command = new SendConnectorEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ConnectorId: "MockConnectorId"
 * }
 * *\/
 * ```
 *
 * @example SendConnectorEvent happy path for device command response
 * ```javascript
 * //
 * const input = {
 *   ConnectorId: "MockConnectorId",
 *   MatterEndpoint: {
 *     clusters: [
 *       {
 *         attributes: {
 *           0x0000: [
 *             73
 *           ],
 *           0x15570003: "exampleString"
 *         },
 *         commands: {
 *           0x03:           { /* empty *\/ }
 *         },
 *         id: "0x1003"
 *       }
 *     ],
 *     id: "1"
 *   },
 *   Message: "Sample ConnectorEventMessage",
 *   Operation: "DEVICE_COMMAND_RESPONSE",
 *   OperationVersion: "1.0",
 *   StatusCode: 200,
 *   TraceId: "9b75f3839b6140f=_1",
 *   UserId: "MockThirdPartyUserId"
 * };
 * const command = new SendConnectorEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ConnectorId: "MockConnectorId"
 * }
 * *\/
 * ```
 *
 * @example SendConnectorEvent happy path for device event
 * ```javascript
 * //
 * const input = {
 *   ConnectorId: "MockConnectorId",
 *   MatterEndpoint: {
 *     clusters: [
 *       {
 *         attributes: {
 *           0x0000: 73
 *         },
 *         id: "0x1003"
 *       }
 *     ],
 *     id: "1"
 *   },
 *   Message: "Sample ConnectorEventMessage",
 *   Operation: "DEVICE_EVENT",
 *   OperationVersion: "1.0",
 *   StatusCode: 200,
 *   TraceId: "TraceId-Sample",
 *   UserId: "MockThirdPartyUserId"
 * };
 * const command = new SendConnectorEventCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ConnectorId: "MockConnectorId"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class SendConnectorEventCommand extends $Command
  .classBuilder<
    SendConnectorEventCommandInput,
    SendConnectorEventCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "SendConnectorEvent", {})
  .n("IoTManagedIntegrationsClient", "SendConnectorEventCommand")
  .sc(SendConnectorEvent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendConnectorEventRequest;
      output: SendConnectorEventResponse;
    };
    sdk: {
      input: SendConnectorEventCommandInput;
      output: SendConnectorEventCommandOutput;
    };
  };
}
