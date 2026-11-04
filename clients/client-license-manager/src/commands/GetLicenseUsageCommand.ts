// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLicenseUsageRequest, GetLicenseUsageResponse } from "../models/models_0";
import { GetLicenseUsage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLicenseUsageCommand}.
 */
export interface GetLicenseUsageCommandInput extends GetLicenseUsageRequest {}
/**
 * @public
 *
 * The output of {@link GetLicenseUsageCommand}.
 */
export interface GetLicenseUsageCommandOutput extends GetLicenseUsageResponse, __MetadataBearer {}

/**
 * Gets detailed information about the usage of the specified license.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetLicenseUsageCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetLicenseUsageCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * // import type { LicenseManagerClientConfig } from "@aws-sdk/client-license-manager";
 * const config = {}; // type is LicenseManagerClientConfig
 * const client = new LicenseManagerClient(config);
 * const input = { // GetLicenseUsageRequest
 *   LicenseArn: "STRING_VALUE", // required
 * };
 * const command = new GetLicenseUsageCommand(input);
 * const response = await client.send(command);
 * // { // GetLicenseUsageResponse
 * //   LicenseUsage: { // LicenseUsage
 * //     EntitlementUsages: [ // EntitlementUsageList
 * //       { // EntitlementUsage
 * //         Name: "STRING_VALUE", // required
 * //         ConsumedValue: "STRING_VALUE", // required
 * //         MaxCount: "STRING_VALUE",
 * //         Unit: "Count" || "None" || "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLicenseUsageCommandInput - {@link GetLicenseUsageCommandInput}
 * @returns {@link GetLicenseUsageCommandOutput}
 * @see {@link GetLicenseUsageCommandInput} for command's `input` shape.
 * @see {@link GetLicenseUsageCommandOutput} for command's `response` shape.
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
export class GetLicenseUsageCommand extends command<GetLicenseUsageCommandInput, GetLicenseUsageCommandOutput>(
  _ep0,
  _mw0,
  "GetLicenseUsage",
  GetLicenseUsage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLicenseUsageRequest;
      output: GetLicenseUsageResponse;
    };
    sdk: {
      input: GetLicenseUsageCommandInput;
      output: GetLicenseUsageCommandOutput;
    };
  };
}
