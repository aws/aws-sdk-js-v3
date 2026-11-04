// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchMeterUsageRequest, BatchMeterUsageResult } from "../models/models_0";
import { BatchMeterUsage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Note:** The Amazon Web Services Marketplace AI Metering Agent Skill (`aws-marketplace-metering`) helps an AI coding agent integrate your SaaS product's usage reporting with the `BatchMeterUsage` API. The skill is a curated package of instructions and reference material that guides your AI coding agent through building, deploying, and testing the metering integration. To get the skill on demand without checking it out locally, install the [Amazon Web Services MCP Server](https://docs.aws.amazon.com/agent-toolkit/latest/userguide/mcp-server.html) in your coding agent; the agent then discovers and loads the skill at runtime. The skill source is also available on [GitHub](https://github.com/aws/agent-toolkit-for-aws/blob/main/skills/specialized-skills/aws-marketplace-skills/aws-marketplace-metering). For more information, see [Get started with the Amazon Web Services Marketplace AI Metering Agent Skill](https://aws.amazon.com/blogs/awsmarketplace/build-aws-marketplace-saas-metering-with-the-metering-agent-skill/) on the Amazon Web Services Marketplace blog.
 *
 * > **Important:** Amazon Web Services Marketplace is introducing Concurrent Agreements, enabling buyers to make multiple purchases per Amazon Web Services account. Starting June 1, 2026, new SaaS products must use `CustomerAWSAccountId` (instead of `CustomerIdentifier`), `LicenseArn` (instead of `ProductCode`) to support this feature. `BatchMeterUsage` does not support `CustomerIdentifier` for new integrations. Existing integrations continue to work. Review the new integration for Concurrent Agreements [here](https://catalog.workshops.aws/mpseller/en-US/saas/integration-for-concurrent-agreements). For additional implementation details, see [BatchMeterUsage code example with LicenseArn](https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-batchmeterusage-licensearn-example) in the *Amazon Web Services Marketplace Seller Guide*.
 *
 * To post metering records for customers, SaaS applications call `BatchMeterUsage`, which is used for metering SaaS flexible consumption pricing (FCP). Identical requests are idempotent and can be retried with the same records or a subset of records. Each `BatchMeterUsage` request is for only one product. If you want to meter usage for multiple products, you must make multiple `BatchMeterUsage` calls.
 *
 * Usage records should be submitted in quick succession following a recorded event. Usage records aren't accepted 24 hours or more after an event. At the end of each billing cycle, a 6-hour grace period applies. We accept usage records for the previous billing month until 06:00 UTC on the first day of the next month. For example, you must submit March usage records before 06:00 UTC on April 1. On April 1 at 05:00 UTC, you can still submit records for March 31 (within the 6-hour grace period). After 06:00 UTC on April 1, March records are rejected regardless of the normal 24-hour submission window. After this grace period, we return a `TimestampOutOfBoundsException` error.
 *
 * `BatchMeterUsage` can process up to 25 `UsageRecords` at a time, and each request must be less than 1 MB in size.
 *
 * **Vendor-metered tagging**
 *
 * `BatchMeterUsage` supports vendor-metered tagging. Optionally, you can split the usage in a `UsageRecord` into buckets by including `UsageAllocations`, where each `UsageAllocation` has a set of `Tags` that you define. Vendor-metered tagging doesn't change the price, dimensions, or the total usage that you report. It gives buyers a more granular view of their usage of your product so they can perform cost allocation in the Amazon Web Services Billing and Cost Management console. For more information, see [Vendor-metered tagging](https://docs.aws.amazon.com/marketplace/latest/userguide/metering-for-usage.html#saas-vendor-metered-tagging) and [BatchMeterUsage with usage allocation tagging code example](https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-batchmeterusage-tagging) in the *Amazon Web Services Marketplace Seller Guide*.
 *
 * `BatchMeterUsage` returns a list of `UsageRecordResult` objects, which have each `UsageRecord`. It also returns a list of `UnprocessedRecords`, which indicate errors on the service side that should be retried.
 *
 * For Amazon Web Services Regions that support `BatchMeterUsage`, see [BatchMeterUsage Region support](https://docs.aws.amazon.com/marketplace/latest/APIReference/metering-regions.html#batchmeterusage-region-support).
 *
 * > **Note:** For an example of `BatchMeterUsage`, see [BatchMeterUsage code example](https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-batchmeterusage-example) in the *Amazon Web Services Marketplace Seller Guide*.
 *
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
 *       LicenseArn: "STRING_VALUE",
 *     },
 *   ],
 *   ProductCode: "STRING_VALUE",
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
 * //         LicenseArn: "STRING_VALUE",
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
 * //       LicenseArn: "STRING_VALUE",
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
 *
 * The API is disabled in the Region.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *
 * An internal error has occurred. Retry your request. If the problem persists, post a message with details on the Amazon Web Services forums.
 *
 * @throws {@link InvalidCustomerIdentifierException} (client fault)
 *
 * You have metered usage for a `CustomerIdentifier` that does not exist.
 *
 * @throws {@link InvalidLicenseException} (client fault)
 *
 * Ensure the `LicenseArn` is valid, matches the customer, and usage is within the license activation period.
 *
 * @throws {@link InvalidProductCodeException} (client fault)
 *
 * The product code passed does not match the product code used for publishing the product.
 *
 * @throws {@link InvalidTagException} (client fault)
 *
 * The tag is invalid, or the number of tags is greater than 5.
 *
 * @throws {@link InvalidUsageAllocationsException} (client fault)
 *
 * Sum of allocated usage quantities is not equal to the usage quantity.
 *
 * @throws {@link InvalidUsageDimensionException} (client fault)
 *
 * The usage dimension does not match one of the `UsageDimensions` associated with products.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The calls to the API are throttled.
 *
 * @throws {@link TimestampOutOfBoundsException} (client fault)
 *
 * The `timestamp` value passed in the `UsageRecord` is out of allowed range.
 *
 * For `BatchMeterUsage`, if any of the records are outside of the allowed range, the entire batch is not processed. You must remove invalid records and try again.
 *
 * @throws {@link MarketplaceMeteringServiceException}
 *
 * Base exception class for all service exceptions from MarketplaceMetering service.
 *
 * @public
 */
export class BatchMeterUsageCommand extends command<BatchMeterUsageCommandInput, BatchMeterUsageCommandOutput>(
  _ep0,
  _mw0,
  "BatchMeterUsage",
  BatchMeterUsage$
) {
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
