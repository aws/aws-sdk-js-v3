// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeCapacityManagerDataExportsRequest,
  DescribeCapacityManagerDataExportsResult,
} from "../models/models_4";
import { DescribeCapacityManagerDataExports } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCapacityManagerDataExportsCommand}.
 */
export interface DescribeCapacityManagerDataExportsCommandInput extends DescribeCapacityManagerDataExportsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCapacityManagerDataExportsCommand}.
 */
export interface DescribeCapacityManagerDataExportsCommandOutput
  extends DescribeCapacityManagerDataExportsResult,
    __MetadataBearer {}

/**
 * <p>
 * Describes one or more Capacity Manager data export configurations. Returns information about export settings, delivery status, and recent export activity.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeCapacityManagerDataExportsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeCapacityManagerDataExportsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeCapacityManagerDataExportsRequest
 *   CapacityManagerDataExportIds: [ // CapacityManagerDataExportIdSet
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeCapacityManagerDataExportsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCapacityManagerDataExportsResult
 * //   CapacityManagerDataExports: [ // CapacityManagerDataExportResponseSet
 * //     { // CapacityManagerDataExportResponse
 * //       CapacityManagerDataExportId: "STRING_VALUE",
 * //       S3BucketName: "STRING_VALUE",
 * //       S3BucketPrefix: "STRING_VALUE",
 * //       Schedule: "hourly",
 * //       OutputFormat: "csv" || "parquet",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       LatestDeliveryStatus: "pending" || "in-progress" || "delivered" || "failed",
 * //       LatestDeliveryStatusMessage: "STRING_VALUE",
 * //       LatestDeliveryS3LocationUri: "STRING_VALUE",
 * //       LatestDeliveryTime: new Date("TIMESTAMP"),
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
 * @param DescribeCapacityManagerDataExportsCommandInput - {@link DescribeCapacityManagerDataExportsCommandInput}
 * @returns {@link DescribeCapacityManagerDataExportsCommandOutput}
 * @see {@link DescribeCapacityManagerDataExportsCommandInput} for command's `input` shape.
 * @see {@link DescribeCapacityManagerDataExportsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeCapacityManagerDataExportsCommand extends $Command
  .classBuilder<
    DescribeCapacityManagerDataExportsCommandInput,
    DescribeCapacityManagerDataExportsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeCapacityManagerDataExports", {})
  .n("EC2Client", "DescribeCapacityManagerDataExportsCommand")
  .sc(DescribeCapacityManagerDataExports)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCapacityManagerDataExportsRequest;
      output: DescribeCapacityManagerDataExportsResult;
    };
    sdk: {
      input: DescribeCapacityManagerDataExportsCommandInput;
      output: DescribeCapacityManagerDataExportsCommandOutput;
    };
  };
}
