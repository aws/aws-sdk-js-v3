// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCapacityBlockOfferingsRequest, DescribeCapacityBlockOfferingsResult } from "../models/models_3";
import {
  de_DescribeCapacityBlockOfferingsCommand,
  se_DescribeCapacityBlockOfferingsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCapacityBlockOfferingsCommand}.
 */
export interface DescribeCapacityBlockOfferingsCommandInput extends DescribeCapacityBlockOfferingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCapacityBlockOfferingsCommand}.
 */
export interface DescribeCapacityBlockOfferingsCommandOutput
  extends DescribeCapacityBlockOfferingsResult,
    __MetadataBearer {}

/**
 * <p>Describes Capacity Block offerings available for purchase in the Amazon Web Services Region that you're currently using. With Capacity Blocks, you can
 * 			purchase a specific GPU instance type or EC2 UltraServer for a period of time.</p>
 *          <p>To search for an available Capacity Block offering, you specify a reservation duration
 * 			and instance count.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCapacityBlockOfferingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCapacityBlockOfferingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeCapacityBlockOfferingsRequest
 *   DryRun: true || false,
 *   InstanceType: "STRING_VALUE",
 *   InstanceCount: Number("int"),
 *   StartDateRange: new Date("TIMESTAMP"),
 *   EndDateRange: new Date("TIMESTAMP"),
 *   CapacityDurationHours: Number("int"), // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   UltraserverType: "STRING_VALUE",
 *   UltraserverCount: Number("int"),
 * };
 * const command = new DescribeCapacityBlockOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCapacityBlockOfferingsResult
 * //   CapacityBlockOfferings: [ // CapacityBlockOfferingSet
 * //     { // CapacityBlockOffering
 * //       CapacityBlockOfferingId: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       InstanceCount: Number("int"),
 * //       StartDate: new Date("TIMESTAMP"),
 * //       EndDate: new Date("TIMESTAMP"),
 * //       CapacityBlockDurationHours: Number("int"),
 * //       UpfrontFee: "STRING_VALUE",
 * //       CurrencyCode: "STRING_VALUE",
 * //       Tenancy: "default" || "dedicated",
 * //       UltraserverType: "STRING_VALUE",
 * //       UltraserverCount: Number("int"),
 * //       CapacityBlockDurationMinutes: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCapacityBlockOfferingsCommandInput - {@link DescribeCapacityBlockOfferingsCommandInput}
 * @returns {@link DescribeCapacityBlockOfferingsCommandOutput}
 * @see {@link DescribeCapacityBlockOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityBlockOfferingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeCapacityBlockOfferingsCommand extends $Command
  .classBuilder<
    DescribeCapacityBlockOfferingsCommandInput,
    DescribeCapacityBlockOfferingsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DescribeCapacityBlockOfferings", {})
  .n("EC2Client", "DescribeCapacityBlockOfferingsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCapacityBlockOfferingsCommand)
  .de(de_DescribeCapacityBlockOfferingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCapacityBlockOfferingsRequest;
      output: DescribeCapacityBlockOfferingsResult;
    };
    sdk: {
      input: DescribeCapacityBlockOfferingsCommandInput;
      output: DescribeCapacityBlockOfferingsCommandOutput;
    };
  };
}
