// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetNetworkingFlexCostAllocationPolicyVersionsRequest,
  GetNetworkingFlexCostAllocationPolicyVersionsResult,
} from "../models/models_6";
import { GetNetworkingFlexCostAllocationPolicyVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetNetworkingFlexCostAllocationPolicyVersionsCommand}.
 */
export interface GetNetworkingFlexCostAllocationPolicyVersionsCommandInput extends GetNetworkingFlexCostAllocationPolicyVersionsRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkingFlexCostAllocationPolicyVersionsCommand}.
 */
export interface GetNetworkingFlexCostAllocationPolicyVersionsCommandOutput extends GetNetworkingFlexCostAllocationPolicyVersionsResult, __MetadataBearer {}

/**
 * <p>Retrieves the versions of a flex cost allocation policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetNetworkingFlexCostAllocationPolicyVersionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetNetworkingFlexCostAllocationPolicyVersionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetNetworkingFlexCostAllocationPolicyVersionsRequest
 *   FcaPolicyId: "STRING_VALUE", // required
 *   VersionsToInclude: [ // FlexCostAllocationVersionsToIncludeList
 *     Number("int"),
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new GetNetworkingFlexCostAllocationPolicyVersionsCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkingFlexCostAllocationPolicyVersionsResult
 * //   FcaPolicyVersions: [ // FlexCostAllocationPolicyVersionSet
 * //     { // FlexCostAllocationPolicyVersion
 * //       FcaPolicyId: "STRING_VALUE",
 * //       Version: Number("int"),
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
 * //       Description: "STRING_VALUE",
 * //       ExpectedEffectiveAt: new Date("TIMESTAMP"),
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetNetworkingFlexCostAllocationPolicyVersionsCommandInput - {@link GetNetworkingFlexCostAllocationPolicyVersionsCommandInput}
 * @returns {@link GetNetworkingFlexCostAllocationPolicyVersionsCommandOutput}
 * @see {@link GetNetworkingFlexCostAllocationPolicyVersionsCommandInput} for command's `input` shape.
 * @see {@link GetNetworkingFlexCostAllocationPolicyVersionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetNetworkingFlexCostAllocationPolicyVersionsCommand extends command<GetNetworkingFlexCostAllocationPolicyVersionsCommandInput, GetNetworkingFlexCostAllocationPolicyVersionsCommandOutput>(
  _ep0,
  _mw0,
  "GetNetworkingFlexCostAllocationPolicyVersions",
  GetNetworkingFlexCostAllocationPolicyVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetNetworkingFlexCostAllocationPolicyVersionsRequest;
      output: GetNetworkingFlexCostAllocationPolicyVersionsResult;
    };
    sdk: {
      input: GetNetworkingFlexCostAllocationPolicyVersionsCommandInput;
      output: GetNetworkingFlexCostAllocationPolicyVersionsCommandOutput;
    };
  };
}
