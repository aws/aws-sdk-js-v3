// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ConnectorRegistrationsV2Request, ConnectorRegistrationsV2Response } from "../models/models_2";
import { de_ConnectorRegistrationsV2Command, se_ConnectorRegistrationsV2Command } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

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
 * <p>Grants permission to complete the authorization based on input parameters. This API is in preview release and subject to change.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ConnectorRegistrationsV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ConnectorRegistrationsV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "ConnectorRegistrationsV2", {})
  .n("SecurityHubClient", "ConnectorRegistrationsV2Command")
  .f(void 0, void 0)
  .ser(se_ConnectorRegistrationsV2Command)
  .de(de_ConnectorRegistrationsV2Command)
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
