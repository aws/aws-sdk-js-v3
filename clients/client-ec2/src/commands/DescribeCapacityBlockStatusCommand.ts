// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCapacityBlockStatusRequest, DescribeCapacityBlockStatusResult } from "../models/models_3";
import { de_DescribeCapacityBlockStatusCommand, se_DescribeCapacityBlockStatusCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCapacityBlockStatusCommand}.
 */
export interface DescribeCapacityBlockStatusCommandInput extends DescribeCapacityBlockStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCapacityBlockStatusCommand}.
 */
export interface DescribeCapacityBlockStatusCommandOutput extends DescribeCapacityBlockStatusResult, __MetadataBearer {}

/**
 * <p>Describes the availability of capacity for the specified Capacity blocks, or all of your Capacity Blocks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCapacityBlockStatusCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCapacityBlockStatusCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeCapacityBlockStatusRequest
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
 * const command = new DescribeCapacityBlockStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCapacityBlockStatusResult
 * //   CapacityBlockStatuses: [ // CapacityBlockStatusSet
 * //     { // CapacityBlockStatus
 * //       CapacityBlockId: "STRING_VALUE",
 * //       InterconnectStatus: "ok" || "impaired" || "insufficient-data",
 * //       TotalCapacity: Number("int"),
 * //       TotalAvailableCapacity: Number("int"),
 * //       TotalUnavailableCapacity: Number("int"),
 * //       CapacityReservationStatuses: [ // CapacityReservationStatusSet
 * //         { // CapacityReservationStatus
 * //           CapacityReservationId: "STRING_VALUE",
 * //           TotalCapacity: Number("int"),
 * //           TotalAvailableCapacity: Number("int"),
 * //           TotalUnavailableCapacity: Number("int"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeCapacityBlockStatusCommandInput - {@link DescribeCapacityBlockStatusCommandInput}
 * @returns {@link DescribeCapacityBlockStatusCommandOutput}
 * @see {@link DescribeCapacityBlockStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityBlockStatusCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeCapacityBlockStatusCommand extends $Command
  .classBuilder<
    DescribeCapacityBlockStatusCommandInput,
    DescribeCapacityBlockStatusCommandOutput,
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
  .s("AmazonEC2", "DescribeCapacityBlockStatus", {})
  .n("EC2Client", "DescribeCapacityBlockStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCapacityBlockStatusCommand)
  .de(de_DescribeCapacityBlockStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCapacityBlockStatusRequest;
      output: DescribeCapacityBlockStatusResult;
    };
    sdk: {
      input: DescribeCapacityBlockStatusCommandInput;
      output: DescribeCapacityBlockStatusCommandOutput;
    };
  };
}
