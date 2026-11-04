// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAppLicenseUsageRequest, DescribeAppLicenseUsageResult } from "../models/models_0";
import { DescribeAppLicenseUsage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves license included application usage information.
 *
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
 *
 * Indicates an incorrect combination of parameters, or a missing parameter.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The attempted operation is not permitted.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AppStreamServiceException}
 *
 * Base exception class for all service exceptions from AppStream service.
 *
 * @public
 */
export class DescribeAppLicenseUsageCommand extends command<DescribeAppLicenseUsageCommandInput, DescribeAppLicenseUsageCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAppLicenseUsage",
  DescribeAppLicenseUsage$
) {
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
