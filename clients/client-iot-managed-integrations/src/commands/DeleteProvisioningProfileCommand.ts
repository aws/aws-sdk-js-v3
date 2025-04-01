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
import { DeleteProvisioningProfileRequest } from "../models/models_0";
import { de_DeleteProvisioningProfileCommand, se_DeleteProvisioningProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProvisioningProfileCommand}.
 */
export interface DeleteProvisioningProfileCommandInput extends DeleteProvisioningProfileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProvisioningProfileCommand}.
 */
export interface DeleteProvisioningProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete a provisioning profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, DeleteProvisioningProfileCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, DeleteProvisioningProfileCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // DeleteProvisioningProfileRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteProvisioningProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProvisioningProfileCommandInput - {@link DeleteProvisioningProfileCommandInput}
 * @returns {@link DeleteProvisioningProfileCommandOutput}
 * @see {@link DeleteProvisioningProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisioningProfileCommandOutput} for command's `response` shape.
 * @see {@link IoTManagedIntegrationsClientResolvedConfig | config} for IoTManagedIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User is not authorized.</p>
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
 *
 * @public
 */
export class DeleteProvisioningProfileCommand extends $Command
  .classBuilder<
    DeleteProvisioningProfileCommandInput,
    DeleteProvisioningProfileCommandOutput,
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
  .s("IotManagedIntegrations", "DeleteProvisioningProfile", {})
  .n("IoTManagedIntegrationsClient", "DeleteProvisioningProfileCommand")
  .f(void 0, void 0)
  .ser(se_DeleteProvisioningProfileCommand)
  .de(de_DeleteProvisioningProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProvisioningProfileRequest;
      output: {};
    };
    sdk: {
      input: DeleteProvisioningProfileCommandInput;
      output: DeleteProvisioningProfileCommandOutput;
    };
  };
}
