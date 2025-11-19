// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamAddressHistoryRequest, GetIpamAddressHistoryResult } from "../models/models_5";
import { GetIpamAddressHistory } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIpamAddressHistoryCommand}.
 */
export interface GetIpamAddressHistoryCommandInput extends GetIpamAddressHistoryRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamAddressHistoryCommand}.
 */
export interface GetIpamAddressHistoryCommandOutput extends GetIpamAddressHistoryResult, __MetadataBearer {}

/**
 * <p>Retrieve historical information about a CIDR within an IPAM scope. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/view-history-cidr-ipam.html">View the history of IP addresses</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamAddressHistoryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamAddressHistoryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamAddressHistoryRequest
 *   DryRun: true || false,
 *   Cidr: "STRING_VALUE", // required
 *   IpamScopeId: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetIpamAddressHistoryCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamAddressHistoryResult
 * //   HistoryRecords: [ // IpamAddressHistoryRecordSet
 * //     { // IpamAddressHistoryRecord
 * //       ResourceOwnerId: "STRING_VALUE",
 * //       ResourceRegion: "STRING_VALUE",
 * //       ResourceType: "eip" || "vpc" || "subnet" || "network-interface" || "instance",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceCidr: "STRING_VALUE",
 * //       ResourceName: "STRING_VALUE",
 * //       ResourceComplianceStatus: "compliant" || "noncompliant" || "unmanaged" || "ignored",
 * //       ResourceOverlapStatus: "overlapping" || "nonoverlapping" || "ignored",
 * //       VpcId: "STRING_VALUE",
 * //       SampledStartTime: new Date("TIMESTAMP"),
 * //       SampledEndTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamAddressHistoryCommandInput - {@link GetIpamAddressHistoryCommandInput}
 * @returns {@link GetIpamAddressHistoryCommandOutput}
 * @see {@link GetIpamAddressHistoryCommandInput} for command's `input` shape.
 * @see {@link GetIpamAddressHistoryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamAddressHistoryCommand extends $Command
  .classBuilder<
    GetIpamAddressHistoryCommandInput,
    GetIpamAddressHistoryCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetIpamAddressHistory", {})
  .n("EC2Client", "GetIpamAddressHistoryCommand")
  .sc(GetIpamAddressHistory)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamAddressHistoryRequest;
      output: GetIpamAddressHistoryResult;
    };
    sdk: {
      input: GetIpamAddressHistoryCommandInput;
      output: GetIpamAddressHistoryCommandOutput;
    };
  };
}
