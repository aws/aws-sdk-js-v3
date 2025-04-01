// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeReservedElasticsearchInstanceOfferingsRequest,
  DescribeReservedElasticsearchInstanceOfferingsResponse,
} from "../models/models_0";
import {
  de_DescribeReservedElasticsearchInstanceOfferingsCommand,
  se_DescribeReservedElasticsearchInstanceOfferingsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReservedElasticsearchInstanceOfferingsCommand}.
 */
export interface DescribeReservedElasticsearchInstanceOfferingsCommandInput
  extends DescribeReservedElasticsearchInstanceOfferingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReservedElasticsearchInstanceOfferingsCommand}.
 */
export interface DescribeReservedElasticsearchInstanceOfferingsCommandOutput
  extends DescribeReservedElasticsearchInstanceOfferingsResponse,
    __MetadataBearer {}

/**
 * <p>Lists available reserved Elasticsearch instance offerings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DescribeReservedElasticsearchInstanceOfferingsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DescribeReservedElasticsearchInstanceOfferingsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // DescribeReservedElasticsearchInstanceOfferingsRequest
 *   ReservedElasticsearchInstanceOfferingId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeReservedElasticsearchInstanceOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReservedElasticsearchInstanceOfferingsResponse
 * //   NextToken: "STRING_VALUE",
 * //   ReservedElasticsearchInstanceOfferings: [ // ReservedElasticsearchInstanceOfferingList
 * //     { // ReservedElasticsearchInstanceOffering
 * //       ReservedElasticsearchInstanceOfferingId: "STRING_VALUE",
 * //       ElasticsearchInstanceType: "m3.medium.elasticsearch" || "m3.large.elasticsearch" || "m3.xlarge.elasticsearch" || "m3.2xlarge.elasticsearch" || "m4.large.elasticsearch" || "m4.xlarge.elasticsearch" || "m4.2xlarge.elasticsearch" || "m4.4xlarge.elasticsearch" || "m4.10xlarge.elasticsearch" || "m5.large.elasticsearch" || "m5.xlarge.elasticsearch" || "m5.2xlarge.elasticsearch" || "m5.4xlarge.elasticsearch" || "m5.12xlarge.elasticsearch" || "r5.large.elasticsearch" || "r5.xlarge.elasticsearch" || "r5.2xlarge.elasticsearch" || "r5.4xlarge.elasticsearch" || "r5.12xlarge.elasticsearch" || "c5.large.elasticsearch" || "c5.xlarge.elasticsearch" || "c5.2xlarge.elasticsearch" || "c5.4xlarge.elasticsearch" || "c5.9xlarge.elasticsearch" || "c5.18xlarge.elasticsearch" || "ultrawarm1.medium.elasticsearch" || "ultrawarm1.large.elasticsearch" || "t2.micro.elasticsearch" || "t2.small.elasticsearch" || "t2.medium.elasticsearch" || "r3.large.elasticsearch" || "r3.xlarge.elasticsearch" || "r3.2xlarge.elasticsearch" || "r3.4xlarge.elasticsearch" || "r3.8xlarge.elasticsearch" || "i2.xlarge.elasticsearch" || "i2.2xlarge.elasticsearch" || "d2.xlarge.elasticsearch" || "d2.2xlarge.elasticsearch" || "d2.4xlarge.elasticsearch" || "d2.8xlarge.elasticsearch" || "c4.large.elasticsearch" || "c4.xlarge.elasticsearch" || "c4.2xlarge.elasticsearch" || "c4.4xlarge.elasticsearch" || "c4.8xlarge.elasticsearch" || "r4.large.elasticsearch" || "r4.xlarge.elasticsearch" || "r4.2xlarge.elasticsearch" || "r4.4xlarge.elasticsearch" || "r4.8xlarge.elasticsearch" || "r4.16xlarge.elasticsearch" || "i3.large.elasticsearch" || "i3.xlarge.elasticsearch" || "i3.2xlarge.elasticsearch" || "i3.4xlarge.elasticsearch" || "i3.8xlarge.elasticsearch" || "i3.16xlarge.elasticsearch",
 * //       Duration: Number("int"),
 * //       FixedPrice: Number("double"),
 * //       UsagePrice: Number("double"),
 * //       CurrencyCode: "STRING_VALUE",
 * //       PaymentOption: "ALL_UPFRONT" || "PARTIAL_UPFRONT" || "NO_UPFRONT",
 * //       RecurringCharges: [ // RecurringChargeList
 * //         { // RecurringCharge
 * //           RecurringChargeAmount: Number("double"),
 * //           RecurringChargeFrequency: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReservedElasticsearchInstanceOfferingsCommandInput - {@link DescribeReservedElasticsearchInstanceOfferingsCommandInput}
 * @returns {@link DescribeReservedElasticsearchInstanceOfferingsCommandOutput}
 * @see {@link DescribeReservedElasticsearchInstanceOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedElasticsearchInstanceOfferingsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 *
 * @public
 */
export class DescribeReservedElasticsearchInstanceOfferingsCommand extends $Command
  .classBuilder<
    DescribeReservedElasticsearchInstanceOfferingsCommandInput,
    DescribeReservedElasticsearchInstanceOfferingsCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonElasticsearchService2015", "DescribeReservedElasticsearchInstanceOfferings", {})
  .n("ElasticsearchServiceClient", "DescribeReservedElasticsearchInstanceOfferingsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReservedElasticsearchInstanceOfferingsCommand)
  .de(de_DescribeReservedElasticsearchInstanceOfferingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReservedElasticsearchInstanceOfferingsRequest;
      output: DescribeReservedElasticsearchInstanceOfferingsResponse;
    };
    sdk: {
      input: DescribeReservedElasticsearchInstanceOfferingsCommandInput;
      output: DescribeReservedElasticsearchInstanceOfferingsCommandOutput;
    };
  };
}
