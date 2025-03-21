// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  IoTManagedIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTManagedIntegrationsClient";
import {
  CreateManagedThingRequest,
  CreateManagedThingRequestFilterSensitiveLog,
  CreateManagedThingResponse,
} from "../models/models_0";
import { de_CreateManagedThingCommand, se_CreateManagedThingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateManagedThingCommand}.
 */
export interface CreateManagedThingCommandInput extends CreateManagedThingRequest {}
/**
 * @public
 *
 * The output of {@link CreateManagedThingCommand}.
 */
export interface CreateManagedThingCommandOutput extends CreateManagedThingResponse, __MetadataBearer {}

/**
 * <p>Creates a managed thing. A managed thing contains the device identifier, protocol
 *          supported, and capabilities of the device in a protocol-specific format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, CreateManagedThingCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, CreateManagedThingCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // CreateManagedThingRequest
 *   Role: "CONTROLLER" || "DEVICE", // required
 *   Owner: "STRING_VALUE",
 *   CredentialLockerId: "STRING_VALUE",
 *   AuthenticationMaterial: "STRING_VALUE", // required
 *   AuthenticationMaterialType: "WIFI_SETUP_QR_BAR_CODE" || "ZWAVE_QR_BAR_CODE" || "ZIGBEE_QR_BAR_CODE", // required
 *   SerialNumber: "STRING_VALUE",
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
 *   Capabilities: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   Classification: "STRING_VALUE",
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   MetaData: { // MetaData
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateManagedThingCommand(input);
 * const response = await client.send(command);
 * // { // CreateManagedThingResponse
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateManagedThingCommandInput - {@link CreateManagedThingCommandInput}
 * @returns {@link CreateManagedThingCommandOutput}
 * @see {@link CreateManagedThingCommandInput} for command's `input` shape.
 * @see {@link CreateManagedThingCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict with the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal error from the service that indicates an unexpected error or that the service
 *          is unavailable.</p>
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
 * @public
 */
export class CreateManagedThingCommand extends $Command
  .classBuilder<
    CreateManagedThingCommandInput,
    CreateManagedThingCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotManagedIntegrations", "CreateManagedThing", {})
  .n("IoTManagedIntegrationsClient", "CreateManagedThingCommand")
  .f(CreateManagedThingRequestFilterSensitiveLog, void 0)
  .ser(se_CreateManagedThingCommand)
  .de(de_CreateManagedThingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateManagedThingRequest;
      output: CreateManagedThingResponse;
    };
    sdk: {
      input: CreateManagedThingCommandInput;
      output: CreateManagedThingCommandOutput;
    };
  };
}
