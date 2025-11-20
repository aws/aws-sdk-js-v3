// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeVpcEncryptionControlsRequest, DescribeVpcEncryptionControlsResult } from "../models/models_5";
import { DescribeVpcEncryptionControls } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeVpcEncryptionControlsCommand}.
 */
export interface DescribeVpcEncryptionControlsCommandInput extends DescribeVpcEncryptionControlsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVpcEncryptionControlsCommand}.
 */
export interface DescribeVpcEncryptionControlsCommandOutput
  extends DescribeVpcEncryptionControlsResult,
    __MetadataBearer {}

/**
 * <p>Describes one or more VPC Encryption Control configurations. VPC Encryption Control enables you to enforce encryption for all data in transit within and between VPCs to meet compliance requirements You can filter the results to return information about specific encryption controls or VPCs.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-encryption-controls.html">Enforce VPC encryption in transit</a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcEncryptionControlsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcEncryptionControlsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeVpcEncryptionControlsRequest
 *   DryRun: true || false,
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   VpcEncryptionControlIds: [ // VpcEncryptionControlIdList
 *     "STRING_VALUE",
 *   ],
 *   VpcIds: [ // VpcIdStringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeVpcEncryptionControlsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVpcEncryptionControlsResult
 * //   VpcEncryptionControls: [ // VpcEncryptionControlList
 * //     { // VpcEncryptionControl
 * //       VpcId: "STRING_VALUE",
 * //       VpcEncryptionControlId: "STRING_VALUE",
 * //       Mode: "monitor" || "enforce",
 * //       State: "enforce-in-progress" || "monitor-in-progress" || "enforce-failed" || "monitor-failed" || "deleting" || "deleted" || "available" || "creating" || "delete-failed",
 * //       StateMessage: "STRING_VALUE",
 * //       ResourceExclusions: { // VpcEncryptionControlExclusions
 * //         InternetGateway: { // VpcEncryptionControlExclusion
 * //           State: "enabling" || "enabled" || "disabling" || "disabled",
 * //           StateMessage: "STRING_VALUE",
 * //         },
 * //         EgressOnlyInternetGateway: {
 * //           State: "enabling" || "enabled" || "disabling" || "disabled",
 * //           StateMessage: "STRING_VALUE",
 * //         },
 * //         NatGateway: {
 * //           State: "enabling" || "enabled" || "disabling" || "disabled",
 * //           StateMessage: "STRING_VALUE",
 * //         },
 * //         VirtualPrivateGateway: {
 * //           State: "enabling" || "enabled" || "disabling" || "disabled",
 * //           StateMessage: "STRING_VALUE",
 * //         },
 * //         VpcPeering: {
 * //           State: "enabling" || "enabled" || "disabling" || "disabled",
 * //           StateMessage: "STRING_VALUE",
 * //         },
 * //         Lambda: "<VpcEncryptionControlExclusion>",
 * //         VpcLattice: "<VpcEncryptionControlExclusion>",
 * //         ElasticFileSystem: "<VpcEncryptionControlExclusion>",
 * //       },
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
 * @param DescribeVpcEncryptionControlsCommandInput - {@link DescribeVpcEncryptionControlsCommandInput}
 * @returns {@link DescribeVpcEncryptionControlsCommandOutput}
 * @see {@link DescribeVpcEncryptionControlsCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcEncryptionControlsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeVpcEncryptionControlsCommand extends $Command
  .classBuilder<
    DescribeVpcEncryptionControlsCommandInput,
    DescribeVpcEncryptionControlsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeVpcEncryptionControls", {})
  .n("EC2Client", "DescribeVpcEncryptionControlsCommand")
  .sc(DescribeVpcEncryptionControls)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeVpcEncryptionControlsRequest;
      output: DescribeVpcEncryptionControlsResult;
    };
    sdk: {
      input: DescribeVpcEncryptionControlsCommandInput;
      output: DescribeVpcEncryptionControlsCommandOutput;
    };
  };
}
