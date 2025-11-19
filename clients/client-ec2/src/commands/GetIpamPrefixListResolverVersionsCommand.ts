// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetIpamPrefixListResolverVersionsRequest, GetIpamPrefixListResolverVersionsResult } from "../models/models_6";
import { GetIpamPrefixListResolverVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIpamPrefixListResolverVersionsCommand}.
 */
export interface GetIpamPrefixListResolverVersionsCommandInput extends GetIpamPrefixListResolverVersionsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamPrefixListResolverVersionsCommand}.
 */
export interface GetIpamPrefixListResolverVersionsCommandOutput
  extends GetIpamPrefixListResolverVersionsResult,
    __MetadataBearer {}

/**
 * <p>Retrieves version information for an IPAM prefix list resolver.</p>
 *          <p>Each version is a snapshot of what CIDRs matched your rules at that moment in time. The version number increments every time the CIDR list
 * changes due to infrastructure changes.</p>
 *          <p>
 *             <b>Version example:</b>
 *          </p>
 *          <p>
 *             <b>Initial State (Version 1)</b>
 *          </p>
 *          <p>Production environment:</p>
 *          <ul>
 *             <li>
 *                <p>vpc-prod-web (10.1.0.0/16) - tagged env=prod</p>
 *             </li>
 *             <li>
 *                <p>vpc-prod-db (10.2.0.0/16) - tagged env=prod</p>
 *             </li>
 *          </ul>
 *          <p>Resolver rule: Include all VPCs tagged env=prod</p>
 *          <p>
 *             <b>Version 1 CIDRs:</b> 10.1.0.0/16, 10.2.0.0/16</p>
 *          <p>
 *             <b>Infrastructure Change (Version 2)</b>
 *          </p>
 *          <p>New VPC added:</p>
 *          <ul>
 *             <li>
 *                <p>vpc-prod-api (10.3.0.0/16) - tagged env=prod</p>
 *             </li>
 *          </ul>
 *          <p>IPAM automatically detects the change and creates a new version.</p>
 *          <p>
 *             <b>Version 2 CIDRs:</b> 10.1.0.0/16, 10.2.0.0/16, 10.3.0.0/16</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamPrefixListResolverVersionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamPrefixListResolverVersionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamPrefixListResolverVersionsRequest
 *   DryRun: true || false,
 *   IpamPrefixListResolverId: "STRING_VALUE", // required
 *   IpamPrefixListResolverVersions: [ // IpamPrefixListResolverVersionNumberSet
 *     Number("long"),
 *   ],
 *   MaxResults: Number("int"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetIpamPrefixListResolverVersionsCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamPrefixListResolverVersionsResult
 * //   IpamPrefixListResolverVersions: [ // IpamPrefixListResolverVersionSet
 * //     { // IpamPrefixListResolverVersion
 * //       Version: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamPrefixListResolverVersionsCommandInput - {@link GetIpamPrefixListResolverVersionsCommandInput}
 * @returns {@link GetIpamPrefixListResolverVersionsCommandOutput}
 * @see {@link GetIpamPrefixListResolverVersionsCommandInput} for command's `input` shape.
 * @see {@link GetIpamPrefixListResolverVersionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamPrefixListResolverVersionsCommand extends $Command
  .classBuilder<
    GetIpamPrefixListResolverVersionsCommandInput,
    GetIpamPrefixListResolverVersionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "GetIpamPrefixListResolverVersions", {})
  .n("EC2Client", "GetIpamPrefixListResolverVersionsCommand")
  .sc(GetIpamPrefixListResolverVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamPrefixListResolverVersionsRequest;
      output: GetIpamPrefixListResolverVersionsResult;
    };
    sdk: {
      input: GetIpamPrefixListResolverVersionsCommandInput;
      output: GetIpamPrefixListResolverVersionsCommandOutput;
    };
  };
}
