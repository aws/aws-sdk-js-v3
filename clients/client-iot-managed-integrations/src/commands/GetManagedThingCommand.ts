// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetManagedThingRequest, GetManagedThingResponse } from "../models/models_0";
import { GetManagedThing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetManagedThingCommand}.
 */
export interface GetManagedThingCommandInput extends GetManagedThingRequest {}
/**
 * @public
 *
 * The output of {@link GetManagedThingCommand}.
 */
export interface GetManagedThingCommandOutput extends GetManagedThingResponse, __MetadataBearer {}

/**
 * Get details of a managed thing including its attributes and capabilities.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetManagedThingCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetManagedThingCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetManagedThingRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetManagedThingCommand(input);
 * const response = await client.send(command);
 * // { // GetManagedThingResponse
 * //   Id: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Owner: "STRING_VALUE",
 * //   CredentialLockerId: "STRING_VALUE",
 * //   AdvertisedProductId: "STRING_VALUE",
 * //   Role: "CONTROLLER" || "DEVICE",
 * //   ProvisioningStatus: "UNASSOCIATED" || "PRE_ASSOCIATED" || "DISCOVERED" || "ACTIVATED" || "DELETION_FAILED" || "DELETE_IN_PROGRESS" || "ISOLATED" || "DELETED",
 * //   Name: "STRING_VALUE",
 * //   Model: "STRING_VALUE",
 * //   Brand: "STRING_VALUE",
 * //   SerialNumber: "STRING_VALUE",
 * //   UniversalProductCode: "STRING_VALUE",
 * //   InternationalArticleNumber: "STRING_VALUE",
 * //   ConnectorPolicyId: "STRING_VALUE",
 * //   ConnectorDestinationId: "STRING_VALUE",
 * //   ConnectorDeviceId: "STRING_VALUE",
 * //   DeviceSpecificKey: "STRING_VALUE",
 * //   MacAddress: "STRING_VALUE",
 * //   ParentControllerId: "STRING_VALUE",
 * //   Classification: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   ActivatedAt: new Date("TIMESTAMP"),
 * //   HubNetworkMode: "STANDARD" || "NETWORK_WIDE_EXCLUSION",
 * //   MetaData: { // MetaData
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   WiFiSimpleSetupConfiguration: { // WiFiSimpleSetupConfiguration
 * //     EnableAsProvisioner: true || false,
 * //     EnableAsProvisionee: true || false,
 * //     TimeoutInMinutes: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetManagedThingCommandInput - {@link GetManagedThingCommandInput}
 * @returns {@link GetManagedThingCommandOutput}
 * @see {@link GetManagedThingCommandInput} for command's `input` shape.
 * @see {@link GetManagedThingCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User is not authorized.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal error from the service that indicates an unexpected error or that the service is unavailable.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
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
 * @throws {@link ValidationException} (client fault)
 *
 * A validation error occurred when performing the API request.
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 *
 * Base exception class for all service exceptions from IoTManagedIntegrations service.
 *
 * @public
 */
export class GetManagedThingCommand extends command<GetManagedThingCommandInput, GetManagedThingCommandOutput>(
  _ep0,
  _mw0,
  "GetManagedThing",
  GetManagedThing$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetManagedThingRequest;
      output: GetManagedThingResponse;
    };
    sdk: {
      input: GetManagedThingCommandInput;
      output: GetManagedThingCommandOutput;
    };
  };
}
