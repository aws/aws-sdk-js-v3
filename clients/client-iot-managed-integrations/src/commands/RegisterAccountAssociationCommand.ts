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
import { RegisterAccountAssociationRequest, RegisterAccountAssociationResponse } from "../models/models_0";
import { de_RegisterAccountAssociationCommand, se_RegisterAccountAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RegisterAccountAssociationCommand}.
 */
export interface RegisterAccountAssociationCommandInput extends RegisterAccountAssociationRequest {}
/**
 * @public
 *
 * The output of {@link RegisterAccountAssociationCommand}.
 */
export interface RegisterAccountAssociationCommandOutput extends RegisterAccountAssociationResponse, __MetadataBearer {}

/**
 * <p>Registers an account association with a managed thing, establishing a connection between a device and a third-party account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, RegisterAccountAssociationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, RegisterAccountAssociationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // RegisterAccountAssociationRequest
 *   ManagedThingId: "STRING_VALUE", // required
 *   AccountAssociationId: "STRING_VALUE", // required
 *   DeviceDiscoveryId: "STRING_VALUE", // required
 * };
 * const command = new RegisterAccountAssociationCommand(input);
 * const response = await client.send(command);
 * // { // RegisterAccountAssociationResponse
 * //   AccountAssociationId: "STRING_VALUE",
 * //   DeviceDiscoveryId: "STRING_VALUE",
 * //   ManagedThingId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterAccountAssociationCommandInput - {@link RegisterAccountAssociationCommandInput}
 * @returns {@link RegisterAccountAssociationCommandOutput}
 * @see {@link RegisterAccountAssociationCommandInput} for command's `input` shape.
 * @see {@link RegisterAccountAssociationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class RegisterAccountAssociationCommand extends $Command
  .classBuilder<
    RegisterAccountAssociationCommandInput,
    RegisterAccountAssociationCommandOutput,
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
  .s("IotManagedIntegrations", "RegisterAccountAssociation", {})
  .n("IoTManagedIntegrationsClient", "RegisterAccountAssociationCommand")
  .f(void 0, void 0)
  .ser(se_RegisterAccountAssociationCommand)
  .de(de_RegisterAccountAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterAccountAssociationRequest;
      output: RegisterAccountAssociationResponse;
    };
    sdk: {
      input: RegisterAccountAssociationCommandInput;
      output: RegisterAccountAssociationCommandOutput;
    };
  };
}
