// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteNetworkingFlexCostAllocationPoliciesRequest,
  DeleteNetworkingFlexCostAllocationPoliciesResult,
} from "../models/models_3";
import { DeleteNetworkingFlexCostAllocationPolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteNetworkingFlexCostAllocationPoliciesCommand}.
 */
export interface DeleteNetworkingFlexCostAllocationPoliciesCommandInput extends DeleteNetworkingFlexCostAllocationPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkingFlexCostAllocationPoliciesCommand}.
 */
export interface DeleteNetworkingFlexCostAllocationPoliciesCommandOutput extends DeleteNetworkingFlexCostAllocationPoliciesResult, __MetadataBearer {}

/**
 * <p>Deletes one or more flex cost allocation policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkingFlexCostAllocationPoliciesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkingFlexCostAllocationPoliciesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteNetworkingFlexCostAllocationPoliciesRequest
 *   FcaPolicyIds: [ // FlexCostAllocationPolicyIdList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DeleteNetworkingFlexCostAllocationPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNetworkingFlexCostAllocationPoliciesResult
 * //   Successful: [ // FlexCostAllocationPolicyIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   Failed: [ // FlexCostAllocationOperationFailureList
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
 * @param DeleteNetworkingFlexCostAllocationPoliciesCommandInput - {@link DeleteNetworkingFlexCostAllocationPoliciesCommandInput}
 * @returns {@link DeleteNetworkingFlexCostAllocationPoliciesCommandOutput}
 * @see {@link DeleteNetworkingFlexCostAllocationPoliciesCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkingFlexCostAllocationPoliciesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteNetworkingFlexCostAllocationPoliciesCommand extends command<DeleteNetworkingFlexCostAllocationPoliciesCommandInput, DeleteNetworkingFlexCostAllocationPoliciesCommandOutput>(
  _ep0,
  _mw0,
  "DeleteNetworkingFlexCostAllocationPolicies",
  DeleteNetworkingFlexCostAllocationPolicies$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkingFlexCostAllocationPoliciesRequest;
      output: DeleteNetworkingFlexCostAllocationPoliciesResult;
    };
    sdk: {
      input: DeleteNetworkingFlexCostAllocationPoliciesCommandInput;
      output: DeleteNetworkingFlexCostAllocationPoliciesCommandOutput;
    };
  };
}
