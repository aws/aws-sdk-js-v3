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
import {
  StartAccountAssociationRefreshRequest,
  StartAccountAssociationRefreshResponse,
  StartAccountAssociationRefreshResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_StartAccountAssociationRefreshCommand,
  se_StartAccountAssociationRefreshCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAccountAssociationRefreshCommand}.
 */
export interface StartAccountAssociationRefreshCommandInput extends StartAccountAssociationRefreshRequest {}
/**
 * @public
 *
 * The output of {@link StartAccountAssociationRefreshCommand}.
 */
export interface StartAccountAssociationRefreshCommandOutput
  extends StartAccountAssociationRefreshResponse,
    __MetadataBearer {}

/**
 * <p>Initiates a refresh of an existing account association to update its authorization and connection status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTManagedIntegrationsClient, StartAccountAssociationRefreshCommand } from "@aws-sdk/client-iot-managed-integrations"; // ES Modules import
 * // const { IoTManagedIntegrationsClient, StartAccountAssociationRefreshCommand } = require("@aws-sdk/client-iot-managed-integrations"); // CommonJS import
 * const client = new IoTManagedIntegrationsClient(config);
 * const input = { // StartAccountAssociationRefreshRequest
 *   AccountAssociationId: "STRING_VALUE", // required
 * };
 * const command = new StartAccountAssociationRefreshCommand(input);
 * const response = await client.send(command);
 * // { // StartAccountAssociationRefreshResponse
 * //   OAuthAuthorizationUrl: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartAccountAssociationRefreshCommandInput - {@link StartAccountAssociationRefreshCommandInput}
 * @returns {@link StartAccountAssociationRefreshCommandOutput}
 * @see {@link StartAccountAssociationRefreshCommandInput} for command's `input` shape.
 * @see {@link StartAccountAssociationRefreshCommandOutput} for command's `response` shape.
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
export class StartAccountAssociationRefreshCommand extends $Command
  .classBuilder<
    StartAccountAssociationRefreshCommandInput,
    StartAccountAssociationRefreshCommandOutput,
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
  .s("IotManagedIntegrations", "StartAccountAssociationRefresh", {})
  .n("IoTManagedIntegrationsClient", "StartAccountAssociationRefreshCommand")
  .f(void 0, StartAccountAssociationRefreshResponseFilterSensitiveLog)
  .ser(se_StartAccountAssociationRefreshCommand)
  .de(de_StartAccountAssociationRefreshCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAccountAssociationRefreshRequest;
      output: StartAccountAssociationRefreshResponse;
    };
    sdk: {
      input: StartAccountAssociationRefreshCommandInput;
      output: StartAccountAssociationRefreshCommandOutput;
    };
  };
}
