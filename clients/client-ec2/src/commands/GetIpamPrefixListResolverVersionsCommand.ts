// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetIpamPrefixListResolverVersionsRequest,
  GetIpamPrefixListResolverVersionsResult,
} from "../models/models_6";
import { GetIpamPrefixListResolverVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetIpamPrefixListResolverVersionsCommandOutput extends GetIpamPrefixListResolverVersionsResult, __MetadataBearer {}

/**
 * Retrieves version information for an IPAM prefix list resolver.
 *
 * Each version is a snapshot of what CIDRs matched your rules at that moment in time. The version number increments every time the CIDR list changes due to infrastructure changes.
 *
 * **Version example:**
 *
 * **Initial State (Version 1)**
 *
 * Production environment:
 *
 * - vpc-prod-web (10.1.0.0/16) - tagged env=prod
 * - vpc-prod-db (10.2.0.0/16) - tagged env=prod
 *
 * Resolver rule: Include all VPCs tagged env=prod
 *
 * **Version 1 CIDRs:** 10.1.0.0/16, 10.2.0.0/16
 *
 * **Infrastructure Change (Version 2)**
 *
 * New VPC added:
 *
 * - vpc-prod-api (10.3.0.0/16) - tagged env=prod
 *
 * IPAM automatically detects the change and creates a new version.
 *
 * **Version 2 CIDRs:** 10.1.0.0/16, 10.2.0.0/16, 10.3.0.0/16
 *
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
 *
 * Base exception class for all service exceptions from EC2 service.
 *
 * @public
 */
export class GetIpamPrefixListResolverVersionsCommand extends command<GetIpamPrefixListResolverVersionsCommandInput, GetIpamPrefixListResolverVersionsCommandOutput>(
  _ep0,
  _mw0,
  "GetIpamPrefixListResolverVersions",
  GetIpamPrefixListResolverVersions$
) {
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
