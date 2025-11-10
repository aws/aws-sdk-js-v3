// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAppLicenseUsageRequest, DescribeAppLicenseUsageResult } from "../models/models_0";
import { DescribeAppLicenseUsage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppLicenseUsageCommand}.
 */
export interface DescribeAppLicenseUsageCommandInput extends DescribeAppLicenseUsageRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppLicenseUsageCommand}.
 */
export interface DescribeAppLicenseUsageCommandOutput extends DescribeAppLicenseUsageResult, __MetadataBearer {}

/**
 * <p>Retrieves license included application usage information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeAppLicenseUsageCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeAppLicenseUsageCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DescribeAppLicenseUsageRequest
 *   BillingPeriod: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAppLicenseUsageCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppLicenseUsageResult
 * //   AppLicenseUsages: [ // AdminAppLicenseUsageList
 * //     { // AdminAppLicenseUsageRecord
 * //       UserArn: "STRING_VALUE", // required
 * //       BillingPeriod: "STRING_VALUE", // required
 * //       OwnerAWSAccountId: "STRING_VALUE", // required
 * //       SubscriptionFirstUsedDate: new Date("TIMESTAMP"), // required
 * //       SubscriptionLastUsedDate: new Date("TIMESTAMP"), // required
 * //       LicenseType: "STRING_VALUE", // required
 * //       UserId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAppLicenseUsageCommandInput - {@link DescribeAppLicenseUsageCommandInput}
 * @returns {@link DescribeAppLicenseUsageCommandOutput}
 * @see {@link DescribeAppLicenseUsageCommandInput} for command's `input` shape.
 * @see {@link DescribeAppLicenseUsageCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class DescribeAppLicenseUsageCommand extends $Command
  .classBuilder<
    DescribeAppLicenseUsageCommandInput,
    DescribeAppLicenseUsageCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "DescribeAppLicenseUsage", {})
  .n("AppStreamClient", "DescribeAppLicenseUsageCommand")
  .sc(DescribeAppLicenseUsage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppLicenseUsageRequest;
      output: DescribeAppLicenseUsageResult;
    };
    sdk: {
      input: DescribeAppLicenseUsageCommandInput;
      output: DescribeAppLicenseUsageCommandOutput;
    };
  };
}
