// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableSecurityHubFeatureV2Request, DisableSecurityHubFeatureV2Response } from "../models/models_2";
import { DisableSecurityHubFeatureV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableSecurityHubFeatureV2Command}.
 */
export interface DisableSecurityHubFeatureV2CommandInput extends DisableSecurityHubFeatureV2Request {}
/**
 * @public
 *
 * The output of {@link DisableSecurityHubFeatureV2Command}.
 */
export interface DisableSecurityHubFeatureV2CommandOutput extends DisableSecurityHubFeatureV2Response, __MetadataBearer {}

/**
 * <p>Disables an opt-in feature for the calling account in the current Amazon Web Services Region. The operation is idempotent. If the feature is already disabled, no changes are made. You cannot disable a feature that is managed by an organization policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DisableSecurityHubFeatureV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DisableSecurityHubFeatureV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // DisableSecurityHubFeatureV2Request
 *   FeatureName: "NETWORK_SCANNING", // required
 * };
 * const command = new DisableSecurityHubFeatureV2Command(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableSecurityHubFeatureV2CommandInput - {@link DisableSecurityHubFeatureV2CommandInput}
 * @returns {@link DisableSecurityHubFeatureV2CommandOutput}
 * @see {@link DisableSecurityHubFeatureV2CommandInput} for command's `input` shape.
 * @see {@link DisableSecurityHubFeatureV2CommandOutput} for command's `response` shape.
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
export class DisableSecurityHubFeatureV2Command extends command<DisableSecurityHubFeatureV2CommandInput, DisableSecurityHubFeatureV2CommandOutput>(
  _ep0,
  _mw0,
  "DisableSecurityHubFeatureV2",
  DisableSecurityHubFeatureV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableSecurityHubFeatureV2Request;
      output: {};
    };
    sdk: {
      input: DisableSecurityHubFeatureV2CommandInput;
      output: DisableSecurityHubFeatureV2CommandOutput;
    };
  };
}
