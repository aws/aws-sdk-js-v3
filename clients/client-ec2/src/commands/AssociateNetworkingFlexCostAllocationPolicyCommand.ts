// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateNetworkingFlexCostAllocationPolicyRequest,
  AssociateNetworkingFlexCostAllocationPolicyResult,
} from "../models/models_0";
import { AssociateNetworkingFlexCostAllocationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateNetworkingFlexCostAllocationPolicyCommand}.
 */
export interface AssociateNetworkingFlexCostAllocationPolicyCommandInput extends AssociateNetworkingFlexCostAllocationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link AssociateNetworkingFlexCostAllocationPolicyCommand}.
 */
export interface AssociateNetworkingFlexCostAllocationPolicyCommandOutput extends AssociateNetworkingFlexCostAllocationPolicyResult, __MetadataBearer {}

/**
 * <p>Associates a flex cost allocation policy with one or more network resources. You can
 *             associate the policy directly with specific resources by resource ID, or you can associate it with
 *             a scope of resources in an account, Amazon VPC, or subnet.</p>
 *          <p>The following limits apply:</p>
 *          <ul>
 *             <li>
 *                <p>A request can associate up to 20 resources.</p>
 *             </li>
 *             <li>
 *                <p>A policy can have up to 100 active associations.</p>
 *             </li>
 *             <li>
 *                <p>A network resource can have only one active association, across all policies. If a resource
 *                     is already associated, the response includes it in the failures with the code
 *                     <code>ResourceAlreadyAssociated</code>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AssociateNetworkingFlexCostAllocationPolicyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AssociateNetworkingFlexCostAllocationPolicyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // AssociateNetworkingFlexCostAllocationPolicyRequest
 *   FcaPolicyId: "STRING_VALUE", // required
 *   NetworkResourceIds: [ // FlexCostAllocationNetworkResourceIdList
 *     "STRING_VALUE",
 *   ],
 *   NetworkResourceScope: { // FlexCostAllocationNetworkResourceScope
 *     ResourceType: "account" || "vpc" || "subnet", // required
 *     ResourceIds: [ // FlexCostAllocationNetworkResourceScopeIdList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new AssociateNetworkingFlexCostAllocationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // AssociateNetworkingFlexCostAllocationPolicyResult
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
 * //   FcaPolicyAssociationFailures: [ // FlexCostAllocationOperationFailureList
 * //     { // FlexCostAllocationOperationFailure
 * //       ResourceId: "STRING_VALUE",
 * //       FailureCode: "STRING_VALUE",
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AssociateNetworkingFlexCostAllocationPolicyCommandInput - {@link AssociateNetworkingFlexCostAllocationPolicyCommandInput}
 * @returns {@link AssociateNetworkingFlexCostAllocationPolicyCommandOutput}
 * @see {@link AssociateNetworkingFlexCostAllocationPolicyCommandInput} for command's `input` shape.
 * @see {@link AssociateNetworkingFlexCostAllocationPolicyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class AssociateNetworkingFlexCostAllocationPolicyCommand extends command<AssociateNetworkingFlexCostAllocationPolicyCommandInput, AssociateNetworkingFlexCostAllocationPolicyCommandOutput>(
  _ep0,
  _mw0,
  "AssociateNetworkingFlexCostAllocationPolicy",
  AssociateNetworkingFlexCostAllocationPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateNetworkingFlexCostAllocationPolicyRequest;
      output: AssociateNetworkingFlexCostAllocationPolicyResult;
    };
    sdk: {
      input: AssociateNetworkingFlexCostAllocationPolicyCommandInput;
      output: AssociateNetworkingFlexCostAllocationPolicyCommandOutput;
    };
  };
}
