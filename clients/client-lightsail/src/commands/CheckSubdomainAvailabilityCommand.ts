// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CheckSubdomainAvailabilityRequest, CheckSubdomainAvailabilityResult } from "../models/models_0";
import { CheckSubdomainAvailability$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CheckSubdomainAvailabilityCommand}.
 */
export interface CheckSubdomainAvailabilityCommandInput extends CheckSubdomainAvailabilityRequest {}
/**
 * @public
 *
 * The output of {@link CheckSubdomainAvailabilityCommand}.
 */
export interface CheckSubdomainAvailabilityCommandOutput extends CheckSubdomainAvailabilityResult, __MetadataBearer {}

/**
 * <p>Checks whether a Lightsail subdomain is available to create. Optionally, reserves the
 *       subdomain for your account for 15 minutes.</p>
 *          <p>If you don't reserve the subdomain, another account can create it before you do.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, CheckSubdomainAvailabilityCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, CheckSubdomainAvailabilityCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
 * const client = new LightsailClient(config);
 * const input = { // CheckSubdomainAvailabilityRequest
 *   subdomainName: "STRING_VALUE", // required
 *   reserve: true || false,
 * };
 * const command = new CheckSubdomainAvailabilityCommand(input);
 * const response = await client.send(command);
 * // { // CheckSubdomainAvailabilityResult
 * //   available: true || false,
 * //   reservationExpiresAt: new Date("TIMESTAMP"),
 * //   subdomainName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CheckSubdomainAvailabilityCommandInput - {@link CheckSubdomainAvailabilityCommandInput}
 * @returns {@link CheckSubdomainAvailabilityCommandOutput}
 * @see {@link CheckSubdomainAvailabilityCommandInput} for command's `input` shape.
 * @see {@link CheckSubdomainAvailabilityCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link OperationFailureException} (client fault)
 *  <p>Lightsail throws this exception when an operation fails to execute.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 *
 * @public
 */
export class CheckSubdomainAvailabilityCommand extends command<CheckSubdomainAvailabilityCommandInput, CheckSubdomainAvailabilityCommandOutput>(
  _ep0,
  _mw0,
  "CheckSubdomainAvailability",
  CheckSubdomainAvailability$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CheckSubdomainAvailabilityRequest;
      output: CheckSubdomainAvailabilityResult;
    };
    sdk: {
      input: CheckSubdomainAvailabilityCommandInput;
      output: CheckSubdomainAvailabilityCommandOutput;
    };
  };
}
