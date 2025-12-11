// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EnableSecurityHubV2Request, EnableSecurityHubV2Response } from "../models/models_2";
import { EnableSecurityHubV2 } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableSecurityHubV2Command}.
 */
export interface EnableSecurityHubV2CommandInput extends EnableSecurityHubV2Request {}
/**
 * @public
 *
 * The output of {@link EnableSecurityHubV2Command}.
 */
export interface EnableSecurityHubV2CommandOutput extends EnableSecurityHubV2Response, __MetadataBearer {}

/**
 * <p>Enables the service in account for the current Amazon Web Services Region or specified Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, EnableSecurityHubV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, EnableSecurityHubV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // EnableSecurityHubV2Request
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new EnableSecurityHubV2Command(input);
 * const response = await client.send(command);
 * // { // EnableSecurityHubV2Response
 * //   HubV2Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EnableSecurityHubV2CommandInput - {@link EnableSecurityHubV2CommandInput}
 * @returns {@link EnableSecurityHubV2CommandOutput}
 * @see {@link EnableSecurityHubV2CommandInput} for command's `input` shape.
 * @see {@link EnableSecurityHubV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
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
export class EnableSecurityHubV2Command extends $Command
  .classBuilder<
    EnableSecurityHubV2CommandInput,
    EnableSecurityHubV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "EnableSecurityHubV2", {})
  .n("SecurityHubClient", "EnableSecurityHubV2Command")
  .sc(EnableSecurityHubV2)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableSecurityHubV2Request;
      output: EnableSecurityHubV2Response;
    };
    sdk: {
      input: EnableSecurityHubV2CommandInput;
      output: EnableSecurityHubV2CommandOutput;
    };
  };
}
