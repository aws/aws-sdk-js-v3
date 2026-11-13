// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ModifyNetworkingFlexCostAllocationPolicyRequest,
  ModifyNetworkingFlexCostAllocationPolicyResult,
} from "../models/models_7";
import { ModifyNetworkingFlexCostAllocationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyNetworkingFlexCostAllocationPolicyCommand}.
 */
export interface ModifyNetworkingFlexCostAllocationPolicyCommandInput extends ModifyNetworkingFlexCostAllocationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link ModifyNetworkingFlexCostAllocationPolicyCommand}.
 */
export interface ModifyNetworkingFlexCostAllocationPolicyCommandOutput extends ModifyNetworkingFlexCostAllocationPolicyResult, __MetadataBearer {}

/**
 * <p>Modifies a flex cost allocation policy. Changing a policy document or
 *             <code>ShowBackEnabled</code> creates a new version of the policy. Changing only the description doesn't
 *             create a new version.</p>
 *          <p>A policy can have up to 100 versions. Versions are never removed, so after a policy reaches 100
 *             versions, you can't change its policy document or <code>ShowBackEnabled</code>. Policies that are managed
 *             by a declarative policy aren't subject to this limit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyNetworkingFlexCostAllocationPolicyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyNetworkingFlexCostAllocationPolicyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyNetworkingFlexCostAllocationPolicyRequest
 *   FcaPolicyId: "STRING_VALUE", // required
 *   NatFcaPolicyDocument: { // NatFlexCostAllocationPolicyDocument
 *     ReportingGranularity: [ // FlexCostAllocationReportingGranularityList // required
 *       "eni" || "ec2" || "subnet" || "vpc" || "account" || "peering-id" || "cidr",
 *     ],
 *     Dimensions: [ // FlexCostAllocationCostDimensionList // required
 *       "data-transfer" || "data-processing",
 *     ],
 *     CidrRangeSpecifications: { // FlexCostAllocationCidrRangeSpecifications
 *       PrefixesType: "STRING_VALUE", // required
 *       Prefixes: [ // FlexCostAllocationCidrMappingList // required
 *         { // FlexCostAllocationCidrMapping
 *           CidrRange: "STRING_VALUE", // required
 *           CidrLabel: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   InstanceFcaPolicyDocument: { // InstanceFlexCostAllocationPolicyDocument
 *     ReportingGranularity: [ // required
 *       "eni" || "ec2" || "subnet" || "vpc" || "account" || "peering-id" || "cidr",
 *     ],
 *     Dimensions: [ // required
 *       "data-transfer" || "data-processing",
 *     ],
 *     CidrRangeSpecifications: {
 *       PrefixesType: "STRING_VALUE", // required
 *       Prefixes: [ // required
 *         {
 *           CidrRange: "STRING_VALUE", // required
 *           CidrLabel: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   PcxFcaPolicyDocument: { // PcxFlexCostAllocationPolicyDocument
 *     ReportingGranularity: [ // required
 *       "eni" || "ec2" || "subnet" || "vpc" || "account" || "peering-id" || "cidr",
 *     ],
 *     Dimensions: [ // required
 *       "data-transfer" || "data-processing",
 *     ],
 *     CidrRangeSpecifications: {
 *       PrefixesType: "STRING_VALUE", // required
 *       Prefixes: [ // required
 *         {
 *           CidrRange: "STRING_VALUE", // required
 *           CidrLabel: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   ShowBackEnabled: true || false,
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new ModifyNetworkingFlexCostAllocationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // ModifyNetworkingFlexCostAllocationPolicyResult
 * //   FcaPolicyId: "STRING_VALUE",
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   Version: Number("int"),
 * //   VersionExpectedEffectiveAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param ModifyNetworkingFlexCostAllocationPolicyCommandInput - {@link ModifyNetworkingFlexCostAllocationPolicyCommandInput}
 * @returns {@link ModifyNetworkingFlexCostAllocationPolicyCommandOutput}
 * @see {@link ModifyNetworkingFlexCostAllocationPolicyCommandInput} for command's `input` shape.
 * @see {@link ModifyNetworkingFlexCostAllocationPolicyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyNetworkingFlexCostAllocationPolicyCommand extends command<ModifyNetworkingFlexCostAllocationPolicyCommandInput, ModifyNetworkingFlexCostAllocationPolicyCommandOutput>(
  _ep0,
  _mw0,
  "ModifyNetworkingFlexCostAllocationPolicy",
  ModifyNetworkingFlexCostAllocationPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyNetworkingFlexCostAllocationPolicyRequest;
      output: ModifyNetworkingFlexCostAllocationPolicyResult;
    };
    sdk: {
      input: ModifyNetworkingFlexCostAllocationPolicyCommandInput;
      output: ModifyNetworkingFlexCostAllocationPolicyCommandOutput;
    };
  };
}
