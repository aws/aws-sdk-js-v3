// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeIpamResourceDiscoveryAssociationsRequest,
  DescribeIpamResourceDiscoveryAssociationsResult,
} from "../models/models_4";
import { DescribeIpamResourceDiscoveryAssociations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeIpamResourceDiscoveryAssociationsCommand}.
 */
export interface DescribeIpamResourceDiscoveryAssociationsCommandInput
  extends DescribeIpamResourceDiscoveryAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIpamResourceDiscoveryAssociationsCommand}.
 */
export interface DescribeIpamResourceDiscoveryAssociationsCommandOutput
  extends DescribeIpamResourceDiscoveryAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Describes resource discovery association with an Amazon VPC IPAM. An associated resource discovery is a resource discovery that has been associated with an IPAM..</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeIpamResourceDiscoveryAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeIpamResourceDiscoveryAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeIpamResourceDiscoveryAssociationsRequest
 *   DryRun: true || false,
 *   IpamResourceDiscoveryAssociationIds: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeIpamResourceDiscoveryAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIpamResourceDiscoveryAssociationsResult
 * //   IpamResourceDiscoveryAssociations: [ // IpamResourceDiscoveryAssociationSet
 * //     { // IpamResourceDiscoveryAssociation
 * //       OwnerId: "STRING_VALUE",
 * //       IpamResourceDiscoveryAssociationId: "STRING_VALUE",
 * //       IpamResourceDiscoveryAssociationArn: "STRING_VALUE",
 * //       IpamResourceDiscoveryId: "STRING_VALUE",
 * //       IpamId: "STRING_VALUE",
 * //       IpamArn: "STRING_VALUE",
 * //       IpamRegion: "STRING_VALUE",
 * //       IsDefault: true || false,
 * //       ResourceDiscoveryStatus: "active" || "not-found",
 * //       State: "associate-in-progress" || "associate-complete" || "associate-failed" || "disassociate-in-progress" || "disassociate-complete" || "disassociate-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
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
 * @param DescribeIpamResourceDiscoveryAssociationsCommandInput - {@link DescribeIpamResourceDiscoveryAssociationsCommandInput}
 * @returns {@link DescribeIpamResourceDiscoveryAssociationsCommandOutput}
 * @see {@link DescribeIpamResourceDiscoveryAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeIpamResourceDiscoveryAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeIpamResourceDiscoveryAssociationsCommand extends $Command
  .classBuilder<
    DescribeIpamResourceDiscoveryAssociationsCommandInput,
    DescribeIpamResourceDiscoveryAssociationsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "DescribeIpamResourceDiscoveryAssociations", {})
  .n("EC2Client", "DescribeIpamResourceDiscoveryAssociationsCommand")
  .sc(DescribeIpamResourceDiscoveryAssociations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeIpamResourceDiscoveryAssociationsRequest;
      output: DescribeIpamResourceDiscoveryAssociationsResult;
    };
    sdk: {
      input: DescribeIpamResourceDiscoveryAssociationsCommandInput;
      output: DescribeIpamResourceDiscoveryAssociationsCommandOutput;
    };
  };
}
