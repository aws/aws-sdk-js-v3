// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterConnectorV2Request, RegisterConnectorV2Response } from "../models/models_3";
import { RegisterConnectorV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterConnectorV2Command}.
 */
export interface RegisterConnectorV2CommandInput extends RegisterConnectorV2Request {}
/**
 * @public
 *
 * The output of {@link RegisterConnectorV2Command}.
 */
export interface RegisterConnectorV2CommandOutput extends RegisterConnectorV2Response, __MetadataBearer {}

/**
 * Grants permission to complete the authorization based on input parameters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, RegisterConnectorV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, RegisterConnectorV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // RegisterConnectorV2Request
 *   AuthCode: "STRING_VALUE", // required
 *   AuthState: "STRING_VALUE", // required
 * };
 * const command = new RegisterConnectorV2Command(input);
 * const response = await client.send(command);
 * // { // RegisterConnectorV2Response
 * //   ConnectorArn: "STRING_VALUE",
 * //   ConnectorId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param RegisterConnectorV2CommandInput - {@link RegisterConnectorV2CommandInput}
 * @returns {@link RegisterConnectorV2CommandOutput}
 * @see {@link RegisterConnectorV2CommandInput} for command's `input` shape.
 * @see {@link RegisterConnectorV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permission to perform the action specified in the request.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request causes conflict with the current state of the service resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request was rejected because we can't find the specified resource.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation because it's missing required fields or has invalid inputs.
 *
 * @throws {@link SecurityHubServiceException}
 *
 * Base exception class for all service exceptions from SecurityHub service.
 *
 * @public
 */
export class RegisterConnectorV2Command extends command<RegisterConnectorV2CommandInput, RegisterConnectorV2CommandOutput>(
  _ep0,
  _mw0,
  "RegisterConnectorV2",
  RegisterConnectorV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterConnectorV2Request;
      output: RegisterConnectorV2Response;
    };
    sdk: {
      input: RegisterConnectorV2CommandInput;
      output: RegisterConnectorV2CommandOutput;
    };
  };
}
