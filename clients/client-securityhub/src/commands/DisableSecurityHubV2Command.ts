// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableSecurityHubV2Request, DisableSecurityHubV2Response } from "../models/models_2";
import { DisableSecurityHubV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableSecurityHubV2Command}.
 */
export interface DisableSecurityHubV2CommandInput extends DisableSecurityHubV2Request {}
/**
 * @public
 *
 * The output of {@link DisableSecurityHubV2Command}.
 */
export interface DisableSecurityHubV2CommandOutput extends DisableSecurityHubV2Response, __MetadataBearer {}

/**
 * <p>Disable the service for the current Amazon Web Services Region or specified Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisableSecurityHubV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisableSecurityHubV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = {};
 * const command = new DisableSecurityHubV2Command(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableSecurityHubV2CommandInput - {@link DisableSecurityHubV2CommandInput}
 * @returns {@link DisableSecurityHubV2CommandOutput}
 * @see {@link DisableSecurityHubV2CommandInput} for command's `input` shape.
 * @see {@link DisableSecurityHubV2CommandOutput} for command's `response` shape.
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
export class DisableSecurityHubV2Command extends command<DisableSecurityHubV2CommandInput, DisableSecurityHubV2CommandOutput>(
  _ep0,
  _mw0,
  "DisableSecurityHubV2",
  DisableSecurityHubV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DisableSecurityHubV2CommandInput;
      output: DisableSecurityHubV2CommandOutput;
    };
  };
}
