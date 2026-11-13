// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeNetworkingFlexCostAllocationPolicyAssociationsRequest,
  DescribeNetworkingFlexCostAllocationPolicyAssociationsResult,
} from "../models/models_4";
import { DescribeNetworkingFlexCostAllocationPolicyAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeNetworkingFlexCostAllocationPolicyAssociationsCommand}.
 */
export interface DescribeNetworkingFlexCostAllocationPolicyAssociationsCommandInput extends DescribeNetworkingFlexCostAllocationPolicyAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkingFlexCostAllocationPolicyAssociationsCommand}.
 */
export interface DescribeNetworkingFlexCostAllocationPolicyAssociationsCommandOutput extends DescribeNetworkingFlexCostAllocationPolicyAssociationsResult, __MetadataBearer {}

/**
 * <p>Describes the associations between your flex cost allocation policies and network
 *             resources. We recommend using pagination to ensure that the operation returns quickly and
 *             successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkingFlexCostAllocationPolicyAssociationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkingFlexCostAllocationPolicyAssociationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeNetworkingFlexCostAllocationPolicyAssociationsRequest
 *   FcaPolicyAssociationIds: [ // FlexCostAllocationPolicyAssociationIdList
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
 * const command = new DescribeNetworkingFlexCostAllocationPolicyAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeNetworkingFlexCostAllocationPolicyAssociationsResult
 * //   FcaPolicyAssociations: [ // FlexCostAllocationPolicyAssociationSet
 * //     { // FlexCostAllocationPolicyAssociationDescription
 * //       FcaPolicyAssociationId: "STRING_VALUE",
 * //       FcaPolicyId: "STRING_VALUE",
 * //       NetworkResourceId: "STRING_VALUE",
 * //       OwnerAccount: "STRING_VALUE",
 * //       AssociatedAt: new Date("TIMESTAMP"),
 * //       ExpectedEffectiveAt: new Date("TIMESTAMP"),
 * //       AssociationMode: "direct" || "scope",
 * //       ManagedBy: "account" || "declarative-policy",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeNetworkingFlexCostAllocationPolicyAssociationsCommandInput - {@link DescribeNetworkingFlexCostAllocationPolicyAssociationsCommandInput}
 * @returns {@link DescribeNetworkingFlexCostAllocationPolicyAssociationsCommandOutput}
 * @see {@link DescribeNetworkingFlexCostAllocationPolicyAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkingFlexCostAllocationPolicyAssociationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeNetworkingFlexCostAllocationPolicyAssociationsCommand extends command<DescribeNetworkingFlexCostAllocationPolicyAssociationsCommandInput, DescribeNetworkingFlexCostAllocationPolicyAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeNetworkingFlexCostAllocationPolicyAssociations",
  DescribeNetworkingFlexCostAllocationPolicyAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeNetworkingFlexCostAllocationPolicyAssociationsRequest;
      output: DescribeNetworkingFlexCostAllocationPolicyAssociationsResult;
    };
    sdk: {
      input: DescribeNetworkingFlexCostAllocationPolicyAssociationsCommandInput;
      output: DescribeNetworkingFlexCostAllocationPolicyAssociationsCommandOutput;
    };
  };
}
