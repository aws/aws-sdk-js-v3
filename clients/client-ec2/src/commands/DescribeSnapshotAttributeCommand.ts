// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSnapshotAttributeRequest, DescribeSnapshotAttributeResult } from "../models/models_5";
import { de_DescribeSnapshotAttributeCommand, se_DescribeSnapshotAttributeCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSnapshotAttributeCommand}.
 */
export interface DescribeSnapshotAttributeCommandInput extends DescribeSnapshotAttributeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSnapshotAttributeCommand}.
 */
export interface DescribeSnapshotAttributeCommandOutput extends DescribeSnapshotAttributeResult, __MetadataBearer {}

/**
 * <p>Describes the specified attribute of the specified snapshot. You can specify only one
 *       attribute at a time.</p>
 *          <p>For more information about EBS snapshots, see <a href="https://docs.aws.amazon.com/ebs/latest/userguide/ebs-snapshots.html">Amazon EBS snapshots</a> in the <i>Amazon EBS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSnapshotAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSnapshotAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeSnapshotAttributeRequest
 *   Attribute: "productCodes" || "createVolumePermission", // required
 *   SnapshotId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DescribeSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSnapshotAttributeResult
 * //   ProductCodes: [ // ProductCodeList
 * //     { // ProductCode
 * //       ProductCodeId: "STRING_VALUE",
 * //       ProductCodeType: "devpay" || "marketplace",
 * //     },
 * //   ],
 * //   SnapshotId: "STRING_VALUE",
 * //   CreateVolumePermissions: [ // CreateVolumePermissionList
 * //     { // CreateVolumePermission
 * //       UserId: "STRING_VALUE",
 * //       Group: "all",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeSnapshotAttributeCommandInput - {@link DescribeSnapshotAttributeCommandInput}
 * @returns {@link DescribeSnapshotAttributeCommandOutput}
 * @see {@link DescribeSnapshotAttributeCommandInput} for command's `input` shape.
 * @see {@link DescribeSnapshotAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To describe snapshot attributes
 * ```javascript
 * // This example describes the ``createVolumePermission`` attribute on a snapshot with the snapshot ID of ``snap-066877671789bd71b``.
 * const input = {
 *   Attribute: "createVolumePermission",
 *   SnapshotId: "snap-066877671789bd71b"
 * };
 * const command = new DescribeSnapshotAttributeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CreateVolumePermissions:   [],
 *   SnapshotId: "snap-066877671789bd71b"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeSnapshotAttributeCommand extends $Command
  .classBuilder<
    DescribeSnapshotAttributeCommandInput,
    DescribeSnapshotAttributeCommandOutput,
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
  .s("AmazonEC2", "DescribeSnapshotAttribute", {})
  .n("EC2Client", "DescribeSnapshotAttributeCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSnapshotAttributeCommand)
  .de(de_DescribeSnapshotAttributeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSnapshotAttributeRequest;
      output: DescribeSnapshotAttributeResult;
    };
    sdk: {
      input: DescribeSnapshotAttributeCommandInput;
      output: DescribeSnapshotAttributeCommandOutput;
    };
  };
}
