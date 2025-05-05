// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLockedSnapshotsRequest, DescribeLockedSnapshotsResult } from "../models/models_5";
import { de_DescribeLockedSnapshotsCommand, se_DescribeLockedSnapshotsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLockedSnapshotsCommand}.
 */
export interface DescribeLockedSnapshotsCommandInput extends DescribeLockedSnapshotsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLockedSnapshotsCommand}.
 */
export interface DescribeLockedSnapshotsCommandOutput extends DescribeLockedSnapshotsResult, __MetadataBearer {}

/**
 * <p>Describes the lock status for a snapshot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLockedSnapshotsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLockedSnapshotsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeLockedSnapshotsRequest
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   SnapshotIds: [ // SnapshotIdStringList
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeLockedSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLockedSnapshotsResult
 * //   Snapshots: [ // LockedSnapshotsInfoList
 * //     { // LockedSnapshotsInfo
 * //       OwnerId: "STRING_VALUE",
 * //       SnapshotId: "STRING_VALUE",
 * //       LockState: "compliance" || "governance" || "compliance-cooloff" || "expired",
 * //       LockDuration: Number("int"),
 * //       CoolOffPeriod: Number("int"),
 * //       CoolOffPeriodExpiresOn: new Date("TIMESTAMP"),
 * //       LockCreatedOn: new Date("TIMESTAMP"),
 * //       LockDurationStartTime: new Date("TIMESTAMP"),
 * //       LockExpiresOn: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeLockedSnapshotsCommandInput - {@link DescribeLockedSnapshotsCommandInput}
 * @returns {@link DescribeLockedSnapshotsCommandOutput}
 * @see {@link DescribeLockedSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeLockedSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeLockedSnapshotsCommand extends $Command
  .classBuilder<
    DescribeLockedSnapshotsCommandInput,
    DescribeLockedSnapshotsCommandOutput,
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
  .s("AmazonEC2", "DescribeLockedSnapshots", {})
  .n("EC2Client", "DescribeLockedSnapshotsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLockedSnapshotsCommand)
  .de(de_DescribeLockedSnapshotsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLockedSnapshotsRequest;
      output: DescribeLockedSnapshotsResult;
    };
    sdk: {
      input: DescribeLockedSnapshotsCommandInput;
      output: DescribeLockedSnapshotsCommandOutput;
    };
  };
}
