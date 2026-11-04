// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutClusterPolicyInput, PutClusterPolicyOutput } from "../models/models_0";
import { PutClusterPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutClusterPolicyCommand}.
 */
export interface PutClusterPolicyCommandInput extends PutClusterPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutClusterPolicyCommand}.
 */
export interface PutClusterPolicyCommandOutput extends PutClusterPolicyOutput, __MetadataBearer {}

/**
 * Attaches a resource-based policy to a cluster. This policy defines access permissions and conditions for the cluster, allowing you to control which principals can perform actions on the cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, PutClusterPolicyCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, PutClusterPolicyCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * // import type { DSQLClientConfig } from "@aws-sdk/client-dsql";
 * const config = {}; // type is DSQLClientConfig
 * const client = new DSQLClient(config);
 * const input = { // PutClusterPolicyInput
 *   identifier: "STRING_VALUE", // required
 *   policy: "STRING_VALUE", // required
 *   bypassPolicyLockoutSafetyCheck: true || false,
 *   expectedPolicyVersion: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PutClusterPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutClusterPolicyOutput
 * //   policyVersion: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutClusterPolicyCommandInput - {@link PutClusterPolicyCommandInput}
 * @returns {@link PutClusterPolicyCommandOutput}
 * @see {@link PutClusterPolicyCommandInput} for command's `input` shape.
 * @see {@link PutClusterPolicyCommandOutput} for command's `response` shape.
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
export class PutClusterPolicyCommand extends command<PutClusterPolicyCommandInput, PutClusterPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutClusterPolicy",
  PutClusterPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutClusterPolicyInput;
      output: PutClusterPolicyOutput;
    };
    sdk: {
      input: PutClusterPolicyCommandInput;
      output: PutClusterPolicyCommandOutput;
    };
  };
}
