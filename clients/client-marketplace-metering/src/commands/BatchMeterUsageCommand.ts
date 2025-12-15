// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MarketplaceMeteringClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceMeteringClient";
import type { BatchMeterUsageRequest, BatchMeterUsageResult } from "../models/models_0";
import { BatchMeterUsage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchMeterUsageCommand}.
 */
export interface BatchMeterUsageCommandInput extends BatchMeterUsageRequest {}
/**
 * @public
 *
 * The output of {@link BatchMeterUsageCommand}.
 */
export interface BatchMeterUsageCommandOutput extends BatchMeterUsageResult, __MetadataBearer {}

/**
 * <important>
 *             <p>
 *                 The <code>CustomerIdentifier</code> parameter is scheduled for deprecation on March 31, 2026. Use <code>CustomerAWSAccountID</code> instead.</p>
 *             <p>These parameters are mutually exclusive. You can't specify both <code>CustomerIdentifier</code> and <code>CustomerAWSAccountID</code> in the same request.
 *             </p>
 *          </important>
 *          <p>To post metering records for customers, SaaS applications call
 *         <code>BatchMeterUsage</code>, which is used for metering SaaS flexible
 *       consumption pricing (FCP). Identical requests are idempotent and can be
 *       retried with the same records or a subset of records. Each
 *         <code>BatchMeterUsage</code> request is for only one product. If you
 *       want to meter usage for multiple products, you must make multiple
 *         <code>BatchMeterUsage</code> calls.</p>
 *          <p>Usage records should be submitted in quick succession following a
 *       recorded event. Usage records aren't accepted 6 hours or more after an
 *       event.</p>
 *          <p>
 *             <code>BatchMeterUsage</code> can process up to 25
 *         <code>UsageRecords</code> at a time, and each request must be less than
 *       1 MB in size. Optionally, you can have multiple usage allocations for
 *       usage data that's split into buckets according to predefined tags.</p>
 *          <p>
 *             <code>BatchMeterUsage</code> returns a list of
 *         <code>UsageRecordResult</code> objects, which have each
 *         <code>UsageRecord</code>. It also returns a list of
 *         <code>UnprocessedRecords</code>, which indicate errors on the service
 *       side that should be retried.</p>
 *          <p>For Amazon Web Services Regions that support <code>BatchMeterUsage</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/APIReference/metering-regions.html#batchmeterusage-region-support">BatchMeterUsage Region support</a>.
 *       </p>
 *          <note>
 *             <p>For an example of <code>BatchMeterUsage</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-batchmeterusage-example"> BatchMeterUsage code example</a> in the <i>Amazon Web Services Marketplace Seller
 *           Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, BatchMeterUsageCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, BatchMeterUsageCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * // import type { MarketplaceMeteringClientConfig } from "@aws-sdk/client-marketplace-metering";
 * const config = {}; // type is MarketplaceMeteringClientConfig
 * const client = new MarketplaceMeteringClient(config);
 * const input = { // BatchMeterUsageRequest
 *   UsageRecords: [ // UsageRecordList // required
 *     { // UsageRecord
 *       Timestamp: new Date("TIMESTAMP"), // required
 *       CustomerIdentifier: "STRING_VALUE",
 *       Dimension: "STRING_VALUE", // required
 *       Quantity: Number("int"),
 *       UsageAllocations: [ // UsageAllocations
 *         { // UsageAllocation
 *           AllocatedUsageQuantity: Number("int"), // required
 *           Tags: [ // TagList
 *             { // Tag
 *               Key: "STRING_VALUE", // required
 *               Value: "STRING_VALUE", // required
 *             },
 *           ],
 *         },
 *       ],
 *       CustomerAWSAccountId: "STRING_VALUE",
 *     },
 *   ],
 *   ProductCode: "STRING_VALUE", // required
 * };
 * const command = new BatchMeterUsageCommand(input);
 * const response = await client.send(command);
 * // { // BatchMeterUsageResult
 * //   Results: [ // UsageRecordResultList
 * //     { // UsageRecordResult
 * //       UsageRecord: { // UsageRecord
 * //         Timestamp: new Date("TIMESTAMP"), // required
 * //         CustomerIdentifier: "STRING_VALUE",
 * //         Dimension: "STRING_VALUE", // required
 * //         Quantity: Number("int"),
 * //         UsageAllocations: [ // UsageAllocations
 * //           { // UsageAllocation
 * //             AllocatedUsageQuantity: Number("int"), // required
 * //             Tags: [ // TagList
 * //               { // Tag
 * //                 Key: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //         CustomerAWSAccountId: "STRING_VALUE",
 * //       },
 * //       MeteringRecordId: "STRING_VALUE",
 * //       Status: "Success" || "CustomerNotSubscribed" || "DuplicateRecord",
 * //     },
 * //   ],
 * //   UnprocessedRecords: [ // UsageRecordList
 * //     {
 * //       Timestamp: new Date("TIMESTAMP"), // required
 * //       CustomerIdentifier: "STRING_VALUE",
 * //       Dimension: "STRING_VALUE", // required
 * //       Quantity: Number("int"),
 * //       UsageAllocations: [
 * //         {
 * //           AllocatedUsageQuantity: Number("int"), // required
 * //           Tags: [
 * //             {
 * //               Key: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       CustomerAWSAccountId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchMeterUsageCommandInput - {@link BatchMeterUsageCommandInput}
 * @returns {@link BatchMeterUsageCommandOutput}
 * @see {@link BatchMeterUsageCommandInput} for command's `input` shape.
 * @see {@link BatchMeterUsageCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for MarketplaceMeteringClient's `config` shape.
 *
 * @throws {@link DisabledApiException} (client fault)
 *  <p>The API is disabled in the Region.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error has occurred. Retry your request. If the problem persists, post a
 *             message with details on the Amazon Web Services forums.</p>
 *
 * @throws {@link InvalidCustomerIdentifierException} (client fault)
 *  <p>You have metered usage for a <code>CustomerIdentifier</code> that does not
 *             exist.</p>
 *
 * @throws {@link InvalidProductCodeException} (client fault)
 *  <p>The product code passed does not match the product code used for publishing the
 *             product.</p>
 *
 * @throws {@link InvalidTagException} (client fault)
 *  <p>The tag is invalid, or the number of tags is greater than 5.</p>
 *
 * @throws {@link InvalidUsageAllocationsException} (client fault)
 *  <p>Sum of allocated usage quantities is not equal to the usage quantity.</p>
 *
 * @throws {@link InvalidUsageDimensionException} (client fault)
 *  <p>The usage dimension does not match one of the <code>UsageDimensions</code> associated
 *             with products.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The calls to the API are throttled.</p>
 *
 * @throws {@link TimestampOutOfBoundsException} (client fault)
 *  <p>The <code>timestamp</code> value passed in the <code>UsageRecord</code> is out of
 *             allowed range.</p>
 *          <p>For <code>BatchMeterUsage</code>, if any of the records are outside of the allowed
 *             range, the entire batch is not processed. You must remove invalid records and try
 *             again.</p>
 *
 * @throws {@link MarketplaceMeteringServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceMetering service.</p>
 *
 *
 * @public
 */
export class BatchMeterUsageCommand extends $Command
  .classBuilder<
    BatchMeterUsageCommandInput,
    BatchMeterUsageCommandOutput,
    MarketplaceMeteringClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceMeteringClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMPMeteringService", "BatchMeterUsage", {})
  .n("MarketplaceMeteringClient", "BatchMeterUsageCommand")
  .sc(BatchMeterUsage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchMeterUsageRequest;
      output: BatchMeterUsageResult;
    };
    sdk: {
      input: BatchMeterUsageCommandInput;
      output: BatchMeterUsageCommandOutput;
    };
  };
}
