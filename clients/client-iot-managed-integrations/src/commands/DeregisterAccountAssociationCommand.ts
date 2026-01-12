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
import type { DeregisterAccountAssociationRequest } from "../models/models_0";
import { DeregisterAccountAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeregisterAccountAssociationCommand}.
 */
export interface DeregisterAccountAssociationCommandInput extends DeregisterAccountAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterAccountAssociationCommand}.
 */
export interface DeregisterAccountAssociationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deregister an account association from a managed thing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, DeregisterAccountAssociationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, DeregisterAccountAssociationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // DeregisterAccountAssociationRequest
 *   ManagedThingId: "STRING_VALUE", // required
 *   AccountAssociationId: "STRING_VALUE", // required
 * };
 * const command = new DeregisterAccountAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeregisterAccountAssociationCommandInput - {@link DeregisterAccountAssociationCommandInput}
 * @returns {@link DeregisterAccountAssociationCommandOutput}
 * @see {@link DeregisterAccountAssociationCommandInput} for command's `input` shape.
 * @see {@link DeregisterAccountAssociationCommandOutput} for command's `response` shape.
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
export class DeregisterAccountAssociationCommand extends $Command
  .classBuilder<
    DeregisterAccountAssociationCommandInput,
    DeregisterAccountAssociationCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "DeregisterAccountAssociation", {})
  .n("IoTManagedIntegrationsClient", "DeregisterAccountAssociationCommand")
  .sc(DeregisterAccountAssociation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterAccountAssociationRequest;
      output: {};
    };
    sdk: {
      input: DeregisterAccountAssociationCommandInput;
      output: DeregisterAccountAssociationCommandOutput;
    };
  };
}
