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
import type { CreateProvisioningProfileRequest, CreateProvisioningProfileResponse } from "../models/models_0";
import { CreateProvisioningProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateProvisioningProfileCommand}.
 */
export interface CreateProvisioningProfileCommandInput extends CreateProvisioningProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateProvisioningProfileCommand}.
 */
export interface CreateProvisioningProfileCommandOutput extends CreateProvisioningProfileResponse, __MetadataBearer {}

/**
 * <p>Create a provisioning profile for a device to execute the provisioning flows using a provisioning template. The provisioning template is a document that defines the set of resources and policies applied to a device during the provisioning process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, CreateProvisioningProfileCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, CreateProvisioningProfileCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // CreateProvisioningProfileRequest
 *   ProvisioningType: "FLEET_PROVISIONING" || "JITR", // required
 *   CaCertificate: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateProvisioningProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateProvisioningProfileResponse
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   ProvisioningType: "FLEET_PROVISIONING" || "JITR",
 * //   Id: "STRING_VALUE",
 * //   ClaimCertificate: "STRING_VALUE",
 * //   ClaimCertificatePrivateKey: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateProvisioningProfileCommandInput - {@link CreateProvisioningProfileCommandInput}
 * @returns {@link CreateProvisioningProfileCommandOutput}
 * @see {@link CreateProvisioningProfileCommandInput} for command's `input` shape.
 * @see {@link CreateProvisioningProfileCommandOutput} for command's `response` shape.
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
export class CreateProvisioningProfileCommand extends $Command
  .classBuilder<
    CreateProvisioningProfileCommandInput,
    CreateProvisioningProfileCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "CreateProvisioningProfile", {})
  .n("IoTManagedIntegrationsClient", "CreateProvisioningProfileCommand")
  .sc(CreateProvisioningProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateProvisioningProfileRequest;
      output: CreateProvisioningProfileResponse;
    };
    sdk: {
      input: CreateProvisioningProfileCommandInput;
      output: CreateProvisioningProfileCommandOutput;
    };
  };
}
