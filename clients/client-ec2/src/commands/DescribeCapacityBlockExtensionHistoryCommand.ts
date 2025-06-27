// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeCapacityBlockExtensionHistoryRequest,
  DescribeCapacityBlockExtensionHistoryResult,
} from "../models/models_3";
import {
  de_DescribeCapacityBlockExtensionHistoryCommand,
  se_DescribeCapacityBlockExtensionHistoryCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCapacityBlockExtensionHistoryCommand}.
 */
export interface DescribeCapacityBlockExtensionHistoryCommandInput
  extends DescribeCapacityBlockExtensionHistoryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCapacityBlockExtensionHistoryCommand}.
 */
export interface DescribeCapacityBlockExtensionHistoryCommandOutput
  extends DescribeCapacityBlockExtensionHistoryResult,
    __MetadataBearer {}

/**
 * <p>Describes the events for the specified Capacity Block extension during the specified
 * 			time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCapacityBlockExtensionHistoryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCapacityBlockExtensionHistoryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeCapacityBlockExtensionHistoryRequest
 *   CapacityReservationIds: [ // CapacityReservationIdSet
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeCapacityBlockExtensionHistoryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCapacityBlockExtensionHistoryResult
 * //   CapacityBlockExtensions: [ // CapacityBlockExtensionSet
 * //     { // CapacityBlockExtension
 * //       CapacityReservationId: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       InstanceCount: Number("int"),
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       CapacityBlockExtensionOfferingId: "STRING_VALUE",
 * //       CapacityBlockExtensionDurationHours: Number("int"),
 * //       CapacityBlockExtensionStatus: "payment-pending" || "payment-failed" || "payment-succeeded",
 * //       CapacityBlockExtensionPurchaseDate: new Date("TIMESTAMP"),
 * //       CapacityBlockExtensionStartDate: new Date("TIMESTAMP"),
 * //       CapacityBlockExtensionEndDate: new Date("TIMESTAMP"),
 * //       UpfrontFee: "STRING_VALUE",
 * //       CurrencyCode: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCapacityBlockExtensionHistoryCommandInput - {@link DescribeCapacityBlockExtensionHistoryCommandInput}
 * @returns {@link DescribeCapacityBlockExtensionHistoryCommandOutput}
 * @see {@link DescribeCapacityBlockExtensionHistoryCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityBlockExtensionHistoryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeCapacityBlockExtensionHistoryCommand extends $Command
  .classBuilder<
    DescribeCapacityBlockExtensionHistoryCommandInput,
    DescribeCapacityBlockExtensionHistoryCommandOutput,
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
  .s("AmazonEC2", "DescribeCapacityBlockExtensionHistory", {})
  .n("EC2Client", "DescribeCapacityBlockExtensionHistoryCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCapacityBlockExtensionHistoryCommand)
  .de(de_DescribeCapacityBlockExtensionHistoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCapacityBlockExtensionHistoryRequest;
      output: DescribeCapacityBlockExtensionHistoryResult;
    };
    sdk: {
      input: DescribeCapacityBlockExtensionHistoryCommandInput;
      output: DescribeCapacityBlockExtensionHistoryCommandOutput;
    };
  };
}
