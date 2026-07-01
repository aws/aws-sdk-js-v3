// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CheckInLicenseRequest, CheckInLicenseResponse } from "../models/models_0";
import { CheckInLicense$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CheckInLicenseCommand}.
 */
export interface CheckInLicenseCommandInput extends CheckInLicenseRequest {}
/**
 * @public
 *
 * The output of {@link CheckInLicenseCommand}.
 */
export interface CheckInLicenseCommandOutput extends CheckInLicenseResponse, __MetadataBearer {}

/**
 * <p>Checks in the specified license. Check in a license when it is no longer in use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CheckInLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CheckInLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // CheckInLicenseRequest
 *   LicenseConsumptionToken: "STRING_VALUE", // required
 *   Beneficiary: "STRING_VALUE",
 * };
 * const command = new CheckInLicenseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CheckInLicenseCommandInput - {@link CheckInLicenseCommandInput}
 * @returns {@link CheckInLicenseCommandOutput}
 * @see {@link CheckInLicenseCommandInput} for command's `input` shape.
 * @see {@link CheckInLicenseCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for LicenseManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Try your request again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link ServerInternalException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The provided input is not valid. Try your request again.</p>
 *
 * @throws {@link LicenseManagerServiceException}
 * <p>Base exception class for all service exceptions from LicenseManager service.</p>
 *
 *
 * @public
 */
export class CheckInLicenseCommand extends command<CheckInLicenseCommandInput, CheckInLicenseCommandOutput>(
  _ep0,
  _mw0,
  "CheckInLicense",
  CheckInLicense$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CheckInLicenseRequest;
      output: {};
    };
    sdk: {
      input: CheckInLicenseCommandInput;
      output: CheckInLicenseCommandOutput;
    };
  };
}
