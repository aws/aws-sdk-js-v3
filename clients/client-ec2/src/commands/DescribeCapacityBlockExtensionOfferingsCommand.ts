// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeCapacityBlockExtensionOfferingsRequest,
  DescribeCapacityBlockExtensionOfferingsResult,
} from "../models/models_4";
import { DescribeCapacityBlockExtensionOfferings } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCapacityBlockExtensionOfferingsCommand}.
 */
export interface DescribeCapacityBlockExtensionOfferingsCommandInput
  extends DescribeCapacityBlockExtensionOfferingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCapacityBlockExtensionOfferingsCommand}.
 */
export interface DescribeCapacityBlockExtensionOfferingsCommandOutput
  extends DescribeCapacityBlockExtensionOfferingsResult,
    __MetadataBearer {}

/**
 * <p>Describes Capacity Block extension offerings available for purchase in the Amazon Web Services
 * 			Region that you're currently using.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCapacityBlockExtensionOfferingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCapacityBlockExtensionOfferingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeCapacityBlockExtensionOfferingsRequest
 *   DryRun: true || false,
 *   CapacityBlockExtensionDurationHours: Number("int"), // required
 *   CapacityReservationId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeCapacityBlockExtensionOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCapacityBlockExtensionOfferingsResult
 * //   CapacityBlockExtensionOfferings: [ // CapacityBlockExtensionOfferingSet
 * //     { // CapacityBlockExtensionOffering
 * //       CapacityBlockExtensionOfferingId: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       InstanceCount: Number("int"),
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       StartDate: new Date("TIMESTAMP"),
 * //       CapacityBlockExtensionStartDate: new Date("TIMESTAMP"),
 * //       CapacityBlockExtensionEndDate: new Date("TIMESTAMP"),
 * //       CapacityBlockExtensionDurationHours: Number("int"),
 * //       UpfrontFee: "STRING_VALUE",
 * //       CurrencyCode: "STRING_VALUE",
 * //       Tenancy: "default" || "dedicated",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCapacityBlockExtensionOfferingsCommandInput - {@link DescribeCapacityBlockExtensionOfferingsCommandInput}
 * @returns {@link DescribeCapacityBlockExtensionOfferingsCommandOutput}
 * @see {@link DescribeCapacityBlockExtensionOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityBlockExtensionOfferingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeCapacityBlockExtensionOfferingsCommand extends $Command
  .classBuilder<
    DescribeCapacityBlockExtensionOfferingsCommandInput,
    DescribeCapacityBlockExtensionOfferingsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeCapacityBlockExtensionOfferings", {})
  .n("EC2Client", "DescribeCapacityBlockExtensionOfferingsCommand")
  .sc(DescribeCapacityBlockExtensionOfferings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCapacityBlockExtensionOfferingsRequest;
      output: DescribeCapacityBlockExtensionOfferingsResult;
    };
    sdk: {
      input: DescribeCapacityBlockExtensionOfferingsCommandInput;
      output: DescribeCapacityBlockExtensionOfferingsCommandOutput;
    };
  };
}
