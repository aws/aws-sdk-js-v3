// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MarketplaceMeteringClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceMeteringClient";
import { BatchMeterUsageRequest, BatchMeterUsageResult } from "../models/models_0";
import { de_BatchMeterUsageCommand, se_BatchMeterUsageCommand } from "../protocols/Aws_json1_1";

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
 * <p>
 *             <code>BatchMeterUsage</code> is called from a SaaS application listed on AWS
 *             Marketplace to post metering records for a set of customers.</p>
 *          <p>For identical requests, the API is idempotent; requests can be retried with the same
 *             records or a subset of the input records.</p>
 *          <p>Every request to <code>BatchMeterUsage</code> is for one product. If you need to meter
 *             usage for multiple products, you must make multiple calls to
 *                 <code>BatchMeterUsage</code>.</p>
 *          <p>Usage records are expected to be submitted as quickly as possible after the event that
 *             is being recorded, and are not accepted more than 6 hours after the event.</p>
 *          <p>
 *             <code>BatchMeterUsage</code> can process up to 25 <code>UsageRecords</code> at a
 *             time.</p>
 *          <p>A <code>UsageRecord</code> can optionally include multiple usage allocations, to
 *             provide customers with usage data split into buckets by tags that you define (or allow
 *             the customer to define).</p>
 *          <p>
 *             <code>BatchMeterUsage</code> returns a list of <code>UsageRecordResult</code> objects,
 *             showing the result for each <code>UsageRecord</code>, as well as a list of
 *                 <code>UnprocessedRecords</code>, indicating errors in the service side that you
 *             should retry.</p>
 *          <p>
 *             <code>BatchMeterUsage</code> requests must be less than 1MB in size.</p>
 *          <note>
 *             <p>For an example of using <code>BatchMeterUsage</code>, see <a href="https://docs.aws.amazon.com/marketplace/latest/userguide/saas-code-examples.html#saas-batchmeterusage-example"> BatchMeterUsage code example</a> in the <i>AWS Marketplace Seller
 *                     Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, BatchMeterUsageCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, BatchMeterUsageCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MarketplaceMeteringClient(config);
 * const input = { // BatchMeterUsageRequest
 *   UsageRecords: [ // UsageRecordList // required
 *     { // UsageRecord
 *       Timestamp: new Date("TIMESTAMP"), // required
 *       CustomerIdentifier: "STRING_VALUE", // required
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
 * //         CustomerIdentifier: "STRING_VALUE", // required
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
 * //       },
 * //       MeteringRecordId: "STRING_VALUE",
 * //       Status: "Success" || "CustomerNotSubscribed" || "DuplicateRecord",
 * //     },
 * //   ],
 * //   UnprocessedRecords: [ // UsageRecordList
 * //     {
 * //       Timestamp: new Date("TIMESTAMP"), // required
 * //       CustomerIdentifier: "STRING_VALUE", // required
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
 *             message with details on the AWS forums.</p>
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
 *  <p>The usage allocation objects are invalid, or the number of allocations is greater than
 *             500 for a single usage record.</p>
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMPMeteringService", "BatchMeterUsage", {})
  .n("MarketplaceMeteringClient", "BatchMeterUsageCommand")
  .f(void 0, void 0)
  .ser(se_BatchMeterUsageCommand)
  .de(de_BatchMeterUsageCommand)
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
