// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeNetworkingFlexCostAllocationPoliciesRequest,
  DescribeNetworkingFlexCostAllocationPoliciesResult,
} from "../models/models_4";
import { DescribeNetworkingFlexCostAllocationPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeNetworkingFlexCostAllocationPoliciesCommand}.
 */
export interface DescribeNetworkingFlexCostAllocationPoliciesCommandInput extends DescribeNetworkingFlexCostAllocationPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkingFlexCostAllocationPoliciesCommand}.
 */
export interface DescribeNetworkingFlexCostAllocationPoliciesCommandOutput extends DescribeNetworkingFlexCostAllocationPoliciesResult, __MetadataBearer {}

/**
 * <p>Describes one or more of your flex cost allocation policies. We recommend using
 *             pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkingFlexCostAllocationPoliciesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkingFlexCostAllocationPoliciesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeNetworkingFlexCostAllocationPoliciesRequest
 *   FcaPolicyIds: [ // FlexCostAllocationPolicyIdSet
 *     "STRING_VALUE",
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
 *   DryRun: true || false,
 * };
 * const command = new DescribeNetworkingFlexCostAllocationPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNetworkingFlexCostAllocationPoliciesResult
 * //   FlexCostAllocationPolicies: [ // FlexCostAllocationPolicySet
 * //     { // FlexCostAllocationPolicyDescription
 * //       FcaPolicyId: "STRING_VALUE",
 * //       FcaPolicyArn: "STRING_VALUE",
 * //       NetworkResourceType: "natgw" || "pcx" || "ec2",
 * //       NatFcaPolicyDocument: { // NatFlexCostAllocationPolicyDocument
 * //         ReportingGranularity: [ // FlexCostAllocationReportingGranularityList // required
 * //           "eni" || "ec2" || "subnet" || "vpc" || "account" || "peering-id" || "cidr",
 * //         ],
 * //         Dimensions: [ // FlexCostAllocationCostDimensionList // required
 * //           "data-transfer" || "data-processing",
 * //         ],
 * //         CidrRangeSpecifications: { // FlexCostAllocationCidrRangeSpecifications
 * //           PrefixesType: "STRING_VALUE", // required
 * //           Prefixes: [ // FlexCostAllocationCidrMappingList // required
 * //             { // FlexCostAllocationCidrMapping
 * //               CidrRange: "STRING_VALUE", // required
 * //               CidrLabel: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       InstanceFcaPolicyDocument: { // InstanceFlexCostAllocationPolicyDocument
 * //         ReportingGranularity: [ // required
 * //           "eni" || "ec2" || "subnet" || "vpc" || "account" || "peering-id" || "cidr",
 * //         ],
 * //         Dimensions: [ // required
 * //           "data-transfer" || "data-processing",
 * //         ],
 * //         CidrRangeSpecifications: {
 * //           PrefixesType: "STRING_VALUE", // required
 * //           Prefixes: [ // required
 * //             {
 * //               CidrRange: "STRING_VALUE", // required
 * //               CidrLabel: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       PcxFcaPolicyDocument: { // PcxFlexCostAllocationPolicyDocument
 * //         ReportingGranularity: [ // required
 * //           "eni" || "ec2" || "subnet" || "vpc" || "account" || "peering-id" || "cidr",
 * //         ],
 * //         Dimensions: [ // required
 * //           "data-transfer" || "data-processing",
 * //         ],
 * //         CidrRangeSpecifications: {
 * //           PrefixesType: "STRING_VALUE", // required
 * //           Prefixes: [ // required
 * //             {
 * //               CidrRange: "STRING_VALUE", // required
 * //               CidrLabel: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       ShowBackEnabled: true || false,
 * //       OwnerAccount: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       LatestVersion: Number("int"),
 * //       VersionExpectedEffectiveAt: new Date("TIMESTAMP"),
 * //       PolicyCreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       ManagedBy: "account" || "declarative-policy",
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
 * @param DescribeNetworkingFlexCostAllocationPoliciesCommandInput - {@link DescribeNetworkingFlexCostAllocationPoliciesCommandInput}
 * @returns {@link DescribeNetworkingFlexCostAllocationPoliciesCommandOutput}
 * @see {@link DescribeNetworkingFlexCostAllocationPoliciesCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkingFlexCostAllocationPoliciesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeNetworkingFlexCostAllocationPoliciesCommand extends command<DescribeNetworkingFlexCostAllocationPoliciesCommandInput, DescribeNetworkingFlexCostAllocationPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeNetworkingFlexCostAllocationPolicies",
  DescribeNetworkingFlexCostAllocationPolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNetworkingFlexCostAllocationPoliciesRequest;
      output: DescribeNetworkingFlexCostAllocationPoliciesResult;
    };
    sdk: {
      input: DescribeNetworkingFlexCostAllocationPoliciesCommandInput;
      output: DescribeNetworkingFlexCostAllocationPoliciesCommandOutput;
    };
  };
}
