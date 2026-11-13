// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DisassociateNetworkingFlexCostAllocationPolicyRequest,
  DisassociateNetworkingFlexCostAllocationPolicyResult,
} from "../models/models_6";
import { DisassociateNetworkingFlexCostAllocationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisassociateNetworkingFlexCostAllocationPolicyCommand}.
 */
export interface DisassociateNetworkingFlexCostAllocationPolicyCommandInput extends DisassociateNetworkingFlexCostAllocationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateNetworkingFlexCostAllocationPolicyCommand}.
 */
export interface DisassociateNetworkingFlexCostAllocationPolicyCommandOutput extends DisassociateNetworkingFlexCostAllocationPolicyResult, __MetadataBearer {}

/**
 * <p>Disassociates a flex cost allocation policy from one or more network resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisassociateNetworkingFlexCostAllocationPolicyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisassociateNetworkingFlexCostAllocationPolicyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DisassociateNetworkingFlexCostAllocationPolicyRequest
 *   FcaPolicyAssociationIds: [ // FlexCostAllocationPolicyDisassociateAssociationIdList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DisassociateNetworkingFlexCostAllocationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateNetworkingFlexCostAllocationPolicyResult
 * //   FcaPolicyDisassociations: [ // FlexCostAllocationPolicyAssociationIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   FcaPolicyDisassociationFailures: [ // FlexCostAllocationOperationFailureList
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
 * @param DisassociateNetworkingFlexCostAllocationPolicyCommandInput - {@link DisassociateNetworkingFlexCostAllocationPolicyCommandInput}
 * @returns {@link DisassociateNetworkingFlexCostAllocationPolicyCommandOutput}
 * @see {@link DisassociateNetworkingFlexCostAllocationPolicyCommandInput} for command's `input` shape.
 * @see {@link DisassociateNetworkingFlexCostAllocationPolicyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DisassociateNetworkingFlexCostAllocationPolicyCommand extends command<DisassociateNetworkingFlexCostAllocationPolicyCommandInput, DisassociateNetworkingFlexCostAllocationPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateNetworkingFlexCostAllocationPolicy",
  DisassociateNetworkingFlexCostAllocationPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateNetworkingFlexCostAllocationPolicyRequest;
      output: DisassociateNetworkingFlexCostAllocationPolicyResult;
    };
    sdk: {
      input: DisassociateNetworkingFlexCostAllocationPolicyCommandInput;
      output: DisassociateNetworkingFlexCostAllocationPolicyCommandOutput;
    };
  };
}
