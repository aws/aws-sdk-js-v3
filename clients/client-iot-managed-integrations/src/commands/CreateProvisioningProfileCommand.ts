// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateProvisioningProfileRequest, CreateProvisioningProfileResponse } from "../models/models_0";
import { CreateProvisioningProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Create a provisioning profile for executing device provisioning flows. The provisioning profile is a document that defines the set of resources and policies applied to a device during the provisioning process.
 *
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
 *   ClaimCertificate: "STRING_VALUE",
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
 * //   Status: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED",
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
 *
 * User is not authorized.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict with the request.
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
export class CreateProvisioningProfileCommand extends command<CreateProvisioningProfileCommandInput, CreateProvisioningProfileCommandOutput>(
  _ep0,
  _mw0,
  "CreateProvisioningProfile",
  CreateProvisioningProfile$
) {
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
