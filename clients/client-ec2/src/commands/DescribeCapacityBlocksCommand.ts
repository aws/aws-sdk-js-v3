// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCapacityBlocksRequest, DescribeCapacityBlocksResult } from "../models/models_3";
import { DescribeCapacityBlocks } from "../schemas/schemas_139_Capacity";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCapacityBlocksCommand}.
 */
export interface DescribeCapacityBlocksCommandInput extends DescribeCapacityBlocksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCapacityBlocksCommand}.
 */
export interface DescribeCapacityBlocksCommandOutput extends DescribeCapacityBlocksResult, __MetadataBearer {}

/**
 * <p>Describes details about Capacity Blocks in the Amazon Web Services Region that you're currently using.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCapacityBlocksCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCapacityBlocksCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeCapacityBlocksRequest
 *   CapacityBlockIds: [ // CapacityBlockIds
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
 * const command = new DescribeCapacityBlocksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCapacityBlocksResult
 * //   CapacityBlocks: [ // CapacityBlockSet
 * //     { // CapacityBlock
 * //       CapacityBlockId: "STRING_VALUE",
 * //       UltraserverType: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       CapacityReservationIds: [ // CapacityReservationIdSet
 * //         "STRING_VALUE",
 * //       ],
 * //       StartDate: new Date("TIMESTAMP"),
 * //       EndDate: new Date("TIMESTAMP"),
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       State: "active" || "expired" || "unavailable" || "cancelled" || "failed" || "scheduled" || "payment-pending" || "payment-failed",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCapacityBlocksCommandInput - {@link DescribeCapacityBlocksCommandInput}
 * @returns {@link DescribeCapacityBlocksCommandOutput}
 * @see {@link DescribeCapacityBlocksCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityBlocksCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeCapacityBlocksCommand extends $Command
  .classBuilder<
    DescribeCapacityBlocksCommandInput,
    DescribeCapacityBlocksCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeCapacityBlocks", {})
  .n("EC2Client", "DescribeCapacityBlocksCommand")
  .sc(DescribeCapacityBlocks)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCapacityBlocksRequest;
      output: DescribeCapacityBlocksResult;
    };
    sdk: {
      input: DescribeCapacityBlocksCommandInput;
      output: DescribeCapacityBlocksCommandOutput;
    };
  };
}
