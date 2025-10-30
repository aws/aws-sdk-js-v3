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
import { CreateConnectorDestinationRequest, CreateConnectorDestinationResponse } from "../models/models_0";
import { de_CreateConnectorDestinationCommand, se_CreateConnectorDestinationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConnectorDestinationCommand}.
 */
export interface CreateConnectorDestinationCommandInput extends CreateConnectorDestinationRequest {}
/**
 * @public
 *
 * The output of {@link CreateConnectorDestinationCommand}.
 */
export interface CreateConnectorDestinationCommandOutput extends CreateConnectorDestinationResponse, __MetadataBearer {}

/**
 * <p>Create a connector destination for connecting a cloud-to-cloud (C2C) connector to the customer's Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, CreateConnectorDestinationCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, CreateConnectorDestinationCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * // import type { IoTManagedIntegrationsClientConfig } from "@aws-sdk/client-iot-managed-integrations";
 * const config = {}; // type is IoTManagedIntegrationsClientConfig
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // CreateConnectorDestinationRequest
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   CloudConnectorId: "STRING_VALUE", // required
 *   AuthType: "OAUTH", // required
 *   AuthConfig: { // AuthConfig
 *     oAuth: { // OAuthConfig
 *       authUrl: "STRING_VALUE", // required
 *       tokenUrl: "STRING_VALUE", // required
 *       scope: "STRING_VALUE",
 *       tokenEndpointAuthenticationScheme: "HTTP_BASIC" || "REQUEST_BODY_CREDENTIALS", // required
 *       oAuthCompleteRedirectUrl: "STRING_VALUE",
 *       proactiveRefreshTokenRenewal: { // ProactiveRefreshTokenRenewal
 *         enabled: true || false,
 *         DaysBeforeRenewal: Number("int"),
 *       },
 *     },
 *   },
 *   SecretsManager: { // SecretsManager
 *     arn: "STRING_VALUE", // required
 *     versionId: "STRING_VALUE", // required
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateConnectorDestinationCommand(input);
 * const response = await client.send(command);
 * // { // CreateConnectorDestinationResponse
 * //   Id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateConnectorDestinationCommandInput - {@link CreateConnectorDestinationCommandInput}
 * @returns {@link CreateConnectorDestinationCommandOutput}
 * @see {@link CreateConnectorDestinationCommandInput} for command's `input` shape.
 * @see {@link CreateConnectorDestinationCommandOutput} for command's `response` shape.
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
export class CreateConnectorDestinationCommand extends $Command
  .classBuilder<
    CreateConnectorDestinationCommandInput,
    CreateConnectorDestinationCommandOutput,
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
  .s("IotManagedIntegrations", "CreateConnectorDestination", {})
  .n("IoTManagedIntegrationsClient", "CreateConnectorDestinationCommand")
  .f(void 0, void 0)
  .ser(se_CreateConnectorDestinationCommand)
  .de(de_CreateConnectorDestinationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConnectorDestinationRequest;
      output: CreateConnectorDestinationResponse;
    };
    sdk: {
      input: CreateConnectorDestinationCommandInput;
      output: CreateConnectorDestinationCommandOutput;
    };
  };
}
