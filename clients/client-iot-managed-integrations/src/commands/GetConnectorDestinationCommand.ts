// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetConnectorDestinationRequest, GetConnectorDestinationResponse } from "../models/models_0";
import { GetConnectorDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetConnectorDestinationCommand}.
 */
export interface GetConnectorDestinationCommandInput extends GetConnectorDestinationRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectorDestinationCommand}.
 */
export interface GetConnectorDestinationCommandOutput extends GetConnectorDestinationResponse, __MetadataBearer {}

/**
 * Get connector destination details linked to a cloud-to-cloud (C2C) connector.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, GetConnectorDestinationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, GetConnectorDestinationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // GetConnectorDestinationRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetConnectorDestinationCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectorDestinationResponse
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CloudConnectorId: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   AuthType: "OAUTH",
 * //   AuthConfig: { // AuthConfig
 * //     oAuth: { // OAuthConfig
 * //       authUrl: "STRING_VALUE", // required
 * //       tokenUrl: "STRING_VALUE", // required
 * //       scope: "STRING_VALUE",
 * //       tokenEndpointAuthenticationScheme: "HTTP_BASIC" || "REQUEST_BODY_CREDENTIALS", // required
 * //       oAuthCompleteRedirectUrl: "STRING_VALUE",
 * //       proactiveRefreshTokenRenewal: { // ProactiveRefreshTokenRenewal
 * //         enabled: true || false,
 * //         DaysBeforeRenewal: Number("int"),
 * //       },
 * //     },
 * //     GeneralAuthorization: [ // AuthMaterials
 * //       { // AuthMaterial
 * //         SecretsManager: { // SecretsManager
 * //           arn: "STRING_VALUE", // required
 * //           versionId: "STRING_VALUE", // required
 * //         },
 * //         AuthMaterialName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   SecretsManager: {
 * //     arn: "STRING_VALUE", // required
 * //     versionId: "STRING_VALUE", // required
 * //   },
 * //   OAuthCompleteRedirectUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConnectorDestinationCommandInput - {@link GetConnectorDestinationCommandInput}
 * @returns {@link GetConnectorDestinationCommandOutput}
 * @see {@link GetConnectorDestinationCommandInput} for command's `input` shape.
 * @see {@link GetConnectorDestinationCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
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
export class GetConnectorDestinationCommand extends command<GetConnectorDestinationCommandInput, GetConnectorDestinationCommandOutput>(
  _ep0,
  _mw0,
  "GetConnectorDestination",
  GetConnectorDestination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectorDestinationRequest;
      output: GetConnectorDestinationResponse;
    };
    sdk: {
      input: GetConnectorDestinationCommandInput;
      output: GetConnectorDestinationCommandOutput;
    };
  };
}
