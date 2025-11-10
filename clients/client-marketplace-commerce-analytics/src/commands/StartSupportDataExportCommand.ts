// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MarketplaceCommerceAnalyticsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceCommerceAnalyticsClient";
import { StartSupportDataExportRequest, StartSupportDataExportResult } from "../models/models_0";
import { StartSupportDataExport } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartSupportDataExportCommand}.
 */
export interface StartSupportDataExportCommandInput extends StartSupportDataExportRequest {}
/**
 * @public
 *
 * The output of {@link StartSupportDataExportCommand}.
 */
export interface StartSupportDataExportCommandOutput extends StartSupportDataExportResult, __MetadataBearer {}

/**
 * <i>This target has been deprecated.</i> Given a data set type and a from date, asynchronously publishes the requested customer support data
 *         to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request
 *         identifier that can be used to correlate requests with notifications from the SNS topic.
 *         Data sets will be published in comma-separated values (CSV) format with the file name \{data_set_type\}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv.
 *         If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will
 *         be overwritten by the new file.
 *         Requires a Role with an attached permissions policy providing Allow permissions for the following actions:
 *         s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
 *
 * @deprecated This target has been deprecated. As of December 2022 Product Support Connection is no longer supported.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCommerceAnalyticsClient, StartSupportDataExportCommand } from "@aws-sdk/client-marketplace-commerce-analytics"; // ES Modules import
 * // const { MarketplaceCommerceAnalyticsClient, StartSupportDataExportCommand } = require("@aws-sdk/client-marketplace-commerce-analytics"); // CommonJS import
 * // import type { MarketplaceCommerceAnalyticsClientConfig } from "@aws-sdk/client-marketplace-commerce-analytics";
 * const config = {}; // type is MarketplaceCommerceAnalyticsClientConfig
 * const client = new MarketplaceCommerceAnalyticsClient(config);
 * const input = { // StartSupportDataExportRequest
 *   dataSetType: "customer_support_contacts_data" || "test_customer_support_contacts_data", // required
 *   fromDate: new Date("TIMESTAMP"), // required
 *   roleNameArn: "STRING_VALUE", // required
 *   destinationS3BucketName: "STRING_VALUE", // required
 *   destinationS3Prefix: "STRING_VALUE",
 *   snsTopicArn: "STRING_VALUE", // required
 *   customerDefinedValues: { // CustomerDefinedValues
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartSupportDataExportCommand(input);
 * const response = await client.send(command);
 * // { // StartSupportDataExportResult
 * //   dataSetRequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartSupportDataExportCommandInput - {@link StartSupportDataExportCommandInput}
 * @returns {@link StartSupportDataExportCommandOutput}
 * @see {@link StartSupportDataExportCommandInput} for command's `input` shape.
 * @see {@link StartSupportDataExportCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCommerceAnalyticsClientResolvedConfig | config} for MarketplaceCommerceAnalyticsClient's `config` shape.
 *
 * @throws {@link MarketplaceCommerceAnalyticsException} (server fault)
 *  This exception is thrown when an internal service error occurs.
 *
 * @throws {@link MarketplaceCommerceAnalyticsServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceCommerceAnalytics service.</p>
 *
 *
 * @public
 */
export class StartSupportDataExportCommand extends $Command
  .classBuilder<
    StartSupportDataExportCommandInput,
    StartSupportDataExportCommandOutput,
    MarketplaceCommerceAnalyticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceCommerceAnalyticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MarketplaceCommerceAnalytics20150701", "StartSupportDataExport", {})
  .n("MarketplaceCommerceAnalyticsClient", "StartSupportDataExportCommand")
  .sc(StartSupportDataExport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartSupportDataExportRequest;
      output: StartSupportDataExportResult;
    };
    sdk: {
      input: StartSupportDataExportCommandInput;
      output: StartSupportDataExportCommandOutput;
    };
  };
}
