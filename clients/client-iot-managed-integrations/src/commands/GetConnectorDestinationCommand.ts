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
import type { GetConnectorDestinationRequest, GetConnectorDestinationResponse } from "../models/models_0";
import { GetConnectorDestination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Get connector destination details linked to a cloud-to-cloud (C2C) connector.</p>
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
 * //   },
 * //   SecretsManager: { // SecretsManager
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
 *  <p>User is not authorized.</p>
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
export class GetConnectorDestinationCommand extends $Command
  .classBuilder<
    GetConnectorDestinationCommandInput,
    GetConnectorDestinationCommandOutput,
    IoTManagedIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTManagedIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IotManagedIntegrations", "GetConnectorDestination", {})
  .n("IoTManagedIntegrationsClient", "GetConnectorDestinationCommand")
  .sc(GetConnectorDestination$)
  .build() {
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
