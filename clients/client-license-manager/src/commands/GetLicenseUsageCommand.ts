// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetLicenseUsageRequest, GetLicenseUsageResponse } from "../models/models_0";
import { de_GetLicenseUsageCommand, se_GetLicenseUsageCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets detailed information about the usage of the specified license.</p>
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
 *  <p>Access to resource denied.</p>
 *
 * @throws {@link AuthorizationException} (client fault)
 *  <p>The Amazon Web Services user account does not have permission to perform the action. Check the IAM
 *          policy associated with this account.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link RateLimitExceededException} (client fault)
 *  <p>Too many requests have been submitted. Try again after a brief wait.</p>
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
export class GetLicenseUsageCommand extends $Command
  .classBuilder<
    GetLicenseUsageCommandInput,
    GetLicenseUsageCommandOutput,
    LicenseManagerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LicenseManagerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLicenseManager", "GetLicenseUsage", {})
  .n("LicenseManagerClient", "GetLicenseUsageCommand")
  .f(void 0, void 0)
  .ser(se_GetLicenseUsageCommand)
  .de(de_GetLicenseUsageCommand)
  .build() {
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
