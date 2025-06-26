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
import { UpdateAccountAssociationRequest } from "../models/models_0";
import { de_UpdateAccountAssociationCommand, se_UpdateAccountAssociationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAccountAssociationCommand}.
 */
export interface UpdateAccountAssociationCommandInput extends UpdateAccountAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAccountAssociationCommand}.
 */
export interface UpdateAccountAssociationCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the properties of an existing account association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, UpdateAccountAssociationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, UpdateAccountAssociationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // UpdateAccountAssociationRequest
 *   AccountAssociationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateAccountAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAccountAssociationCommandInput - {@link UpdateAccountAssociationCommandInput}
 * @returns {@link UpdateAccountAssociationCommandOutput}
 * @see {@link UpdateAccountAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateAccountAssociationCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>A validation error occurred when performing the API request.</p>
 *
 * @throws {@link IoTManagedIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from IoTManagedIntegrations service.</p>
 *
 *
 * @public
 */
export class UpdateAccountAssociationCommand extends $Command
  .classBuilder<
    UpdateAccountAssociationCommandInput,
    UpdateAccountAssociationCommandOutput,
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
  .s("IotManagedIntegrations", "UpdateAccountAssociation", {})
  .n("IoTManagedIntegrationsClient", "UpdateAccountAssociationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateAccountAssociationCommand)
  .de(de_UpdateAccountAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAccountAssociationRequest;
      output: {};
    };
    sdk: {
      input: UpdateAccountAssociationCommandInput;
      output: UpdateAccountAssociationCommandOutput;
    };
  };
}
