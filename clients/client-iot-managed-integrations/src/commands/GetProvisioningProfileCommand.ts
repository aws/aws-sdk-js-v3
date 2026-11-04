// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetProvisioningProfileRequest, GetProvisioningProfileResponse } from "../models/models_0";
import { GetProvisioningProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProvisioningProfileCommand}.
 */
export interface GetProvisioningProfileCommandInput extends GetProvisioningProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetProvisioningProfileCommand}.
 */
export interface GetProvisioningProfileCommandOutput extends GetProvisioningProfileResponse, __MetadataBearer {}

/**
 * Get details of a provisioning profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetProvisioningProfileCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetProvisioningProfileCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetProvisioningProfileRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetProvisioningProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetProvisioningProfileResponse
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   ProvisioningType: "FLEET_PROVISIONING" || "JITR",
 * //   Id: "STRING_VALUE",
 * //   Status: "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "CREATED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED",
 * //   ClaimCertificate: "STRING_VALUE",
 * //   Tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetProvisioningProfileCommandInput - {@link GetProvisioningProfileCommandInput}
 * @returns {@link GetProvisioningProfileCommandOutput}
 * @see {@link GetProvisioningProfileCommandInput} for command's `input` shape.
 * @see {@link GetProvisioningProfileCommandOutput} for command's `response` shape.
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
export class GetProvisioningProfileCommand extends command<GetProvisioningProfileCommandInput, GetProvisioningProfileCommandOutput>(
  _ep0,
  _mw0,
  "GetProvisioningProfile",
  GetProvisioningProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProvisioningProfileRequest;
      output: GetProvisioningProfileResponse;
    };
    sdk: {
      input: GetProvisioningProfileCommandInput;
      output: GetProvisioningProfileCommandOutput;
    };
  };
}
