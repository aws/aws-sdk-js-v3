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
import type { UpdateManagedThingRequest } from "../models/models_0";
import { UpdateManagedThing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateManagedThingCommand}.
 */
export interface UpdateManagedThingCommandInput extends UpdateManagedThingRequest {}
/**
 * @public
 *
 * The output of {@link UpdateManagedThingCommand}.
 */
export interface UpdateManagedThingCommandOutput extends __MetadataBearer {}

/**
 * <p>Update the attributes and capabilities associated with a managed thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, UpdateManagedThingCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, UpdateManagedThingCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // UpdateManagedThingRequest
 *   Identifier: "STRING_VALUE", // required
 *   Owner: "STRING_VALUE",
 *   CredentialLockerId: "STRING_VALUE",
 *   SerialNumber: "STRING_VALUE",
 *   WiFiSimpleSetupConfiguration: { // WiFiSimpleSetupConfiguration
 *     EnableAsProvisioner: true || false,
 *     EnableAsProvisionee: true || false,
 *     TimeoutInMinutes: Number("int"),
 *   },
 *   Brand: "STRING_VALUE",
 *   Model: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   CapabilityReport: { // CapabilityReport
 *     version: "STRING_VALUE", // required
 *     nodeId: "STRING_VALUE",
 *     endpoints: [ // CapabilityReportEndpoints // required
 *       { // CapabilityReportEndpoint
 *         id: "STRING_VALUE", // required
 *         deviceTypes: [ // DeviceTypes // required
 *           "STRING_VALUE",
 *         ],
 *         capabilities: [ // CapabilityReportCapabilities // required
 *           { // CapabilityReportCapability
 *             id: "STRING_VALUE", // required
 *             name: "STRING_VALUE", // required
 *             version: "STRING_VALUE", // required
 *             properties: [ // CapabilityReportProperties // required
 *               "STRING_VALUE",
 *             ],
 *             actions: [ // CapabilityReportActions // required
 *               "STRING_VALUE",
 *             ],
 *             events: [ // CapabilityReportEvents // required
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *     ],
 *   },
 *   CapabilitySchemas: [ // CapabilitySchemas
 *     { // CapabilitySchemaItem
 *       Format: "AWS" || "ZCL" || "CONNECTOR", // required
 *       CapabilityId: "STRING_VALUE", // required
 *       ExtrinsicId: "STRING_VALUE", // required
 *       ExtrinsicVersion: Number("int"), // required
 *       Schema: "DOCUMENT_VALUE", // required
 *     },
 *   ],
 *   Capabilities: "STRING_VALUE",
 *   Classification: "STRING_VALUE",
 *   HubNetworkMode: "STANDARD" || "NETWORK_WIDE_EXCLUSION",
 *   MetaData: { // MetaData
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateManagedThingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateManagedThingCommandInput - {@link UpdateManagedThingCommandInput}
 * @returns {@link UpdateManagedThingCommandOutput}
 * @see {@link UpdateManagedThingCommandInput} for command's `input` shape.
 * @see {@link UpdateManagedThingCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict with the request.</p>
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @public
 */
export class UpdateManagedThingCommand extends $Command
  .classBuilder<
    UpdateManagedThingCommandInput,
    UpdateManagedThingCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "UpdateManagedThing", {})
  .n("IoTManagedIntegrationsClient", "UpdateManagedThingCommand")
  .sc(UpdateManagedThing$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateManagedThingRequest;
      output: {};
    };
    sdk: {
      input: UpdateManagedThingCommandInput;
      output: UpdateManagedThingCommandOutput;
    };
  };
}
