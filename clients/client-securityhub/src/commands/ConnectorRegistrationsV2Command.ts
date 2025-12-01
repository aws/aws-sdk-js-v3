// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ConnectorRegistrationsV2Request, ConnectorRegistrationsV2Response } from "../models/models_2";
import { ConnectorRegistrationsV2 } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConnectorRegistrationsV2Command}.
 */
export interface ConnectorRegistrationsV2CommandInput extends ConnectorRegistrationsV2Request {}
/**
 * @public
 *
 * The output of {@link ConnectorRegistrationsV2Command}.
 */
export interface ConnectorRegistrationsV2CommandOutput extends ConnectorRegistrationsV2Response, __MetadataBearer {}

/**
 * <p>Grants permission to complete the authorization based on input parameters. This API is in public preview and subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ConnectorRegistrationsV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ConnectorRegistrationsV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // ConnectorRegistrationsV2Request
 *   AuthCode: "STRING_VALUE", // required
 *   AuthState: "STRING_VALUE", // required
 * };
 * const command = new ConnectorRegistrationsV2Command(input);
 * const response = await client.send(command);
 * // { // ConnectorRegistrationsV2Response
 * //   ConnectorArn: "STRING_VALUE",
 * //   ConnectorId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ConnectorRegistrationsV2CommandInput - {@link ConnectorRegistrationsV2CommandInput}
 * @returns {@link ConnectorRegistrationsV2CommandOutput}
 * @see {@link ConnectorRegistrationsV2CommandInput} for command's `input` shape.
 * @see {@link ConnectorRegistrationsV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request causes conflict with the current state of the service resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class ConnectorRegistrationsV2Command extends $Command
  .classBuilder<
    ConnectorRegistrationsV2CommandInput,
    ConnectorRegistrationsV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "ConnectorRegistrationsV2", {})
  .n("SecurityHubClient", "ConnectorRegistrationsV2Command")
  .sc(ConnectorRegistrationsV2)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConnectorRegistrationsV2Request;
      output: ConnectorRegistrationsV2Response;
    };
    sdk: {
      input: ConnectorRegistrationsV2CommandInput;
      output: ConnectorRegistrationsV2CommandOutput;
    };
  };
}
