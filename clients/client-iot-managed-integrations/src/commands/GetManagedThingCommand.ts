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
  GetManagedThingRequest,
  GetManagedThingResponse,
  GetManagedThingResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetManagedThingCommand, se_GetManagedThingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Get the attributes and capabilities associated with a managed thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetManagedThingCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetManagedThingCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
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
export class GetManagedThingCommand extends $Command
  .classBuilder<
    GetManagedThingCommandInput,
    GetManagedThingCommandOutput,
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
  .s("IotManagedIntegrations", "GetManagedThing", {})
  .n("IoTManagedIntegrationsClient", "GetManagedThingCommand")
  .f(void 0, GetManagedThingResponseFilterSensitiveLog)
  .ser(se_GetManagedThingCommand)
  .de(de_GetManagedThingCommand)
  .build() {
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
