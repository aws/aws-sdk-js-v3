// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteClusterPolicyInput, DeleteClusterPolicyOutput } from "../models/models_0";
import { DeleteClusterPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteClusterPolicyCommand}.
 */
export interface DeleteClusterPolicyCommandInput extends DeleteClusterPolicyInput {}
/**
 * @public
 *
 * The output of {@link DeleteClusterPolicyCommand}.
 */
export interface DeleteClusterPolicyCommandOutput extends DeleteClusterPolicyOutput, __MetadataBearer {}

/**
 * Deletes the resource-based policy attached to a cluster. This removes all access permissions defined by the policy, reverting to default access controls.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, DeleteClusterPolicyCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, DeleteClusterPolicyCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * // import type { DSQLClientConfig } from "@aws-sdk/client-dsql";
 * const config = {}; // type is DSQLClientConfig
 * const client = new DSQLClient(config);
 * const input = { // DeleteClusterPolicyInput
 *   identifier: "STRING_VALUE", // required
 *   expectedPolicyVersion: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteClusterPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteClusterPolicyOutput
 * //   policyVersion: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteClusterPolicyCommandInput - {@link DeleteClusterPolicyCommandInput}
 * @returns {@link DeleteClusterPolicyCommandOutput}
 * @see {@link DeleteClusterPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterPolicyCommandOutput} for command's `response` shape.
 * @see {@link DSQLClientResolvedConfig | config} for DSQLClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The submitted action has conflicts.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link DSQLServiceException}
 *
 * Base exception class for all service exceptions from DSQL service.
 *
 * @public
 */
export class DeleteClusterPolicyCommand extends command<DeleteClusterPolicyCommandInput, DeleteClusterPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteClusterPolicy",
  DeleteClusterPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteClusterPolicyInput;
      output: DeleteClusterPolicyOutput;
    };
    sdk: {
      input: DeleteClusterPolicyCommandInput;
      output: DeleteClusterPolicyCommandOutput;
    };
  };
}
