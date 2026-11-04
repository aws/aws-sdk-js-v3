// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ExtendLicenseConsumptionRequest, ExtendLicenseConsumptionResponse } from "../models/models_0";
import { ExtendLicenseConsumption$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ExtendLicenseConsumptionCommand}.
 */
export interface ExtendLicenseConsumptionCommandInput extends ExtendLicenseConsumptionRequest {}
/**
 * @public
 *
 * The output of {@link ExtendLicenseConsumptionCommand}.
 */
export interface ExtendLicenseConsumptionCommandOutput extends ExtendLicenseConsumptionResponse, __MetadataBearer {}

/**
 * Extends the expiration date for license consumption.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ExtendLicenseConsumptionCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ExtendLicenseConsumptionCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // ExtendLicenseConsumptionRequest
 *   LicenseConsumptionToken: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new ExtendLicenseConsumptionCommand(input);
 * const response = await client.send(command);
 * // { // ExtendLicenseConsumptionResponse
 * //   LicenseConsumptionToken: "STRING_VALUE",
 * //   Expiration: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExtendLicenseConsumptionCommandInput - {@link ExtendLicenseConsumptionCommandInput}
 * @returns {@link ExtendLicenseConsumptionCommandOutput}
 * @see {@link ExtendLicenseConsumptionCommandInput} for command's `input` shape.
 * @see {@link ExtendLicenseConsumptionCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to resource denied.
 *
 * @throws {@link AuthorizationException} (client fault)
 *
 * The Amazon Web Services user account does not have permission to perform the action. Check the IAM policy associated with this account.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameter values are not valid.
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *
 * Too many requests have been submitted. Try again after a brief wait.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link ServerInternalException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The provided input is not valid. Try your request again.
 *
 * @throws {@link LicenseManagerServiceException}
 *
 * Base exception class for all service exceptions from LicenseManager service.
 *
 * @public
 */
export class ExtendLicenseConsumptionCommand extends command<ExtendLicenseConsumptionCommandInput, ExtendLicenseConsumptionCommandOutput>(
  _ep0,
  _mw0,
  "ExtendLicenseConsumption",
  ExtendLicenseConsumption$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExtendLicenseConsumptionRequest;
      output: ExtendLicenseConsumptionResponse;
    };
    sdk: {
      input: ExtendLicenseConsumptionCommandInput;
      output: ExtendLicenseConsumptionCommandOutput;
    };
  };
}
