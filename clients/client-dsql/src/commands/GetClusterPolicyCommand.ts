// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetClusterPolicyInput, GetClusterPolicyOutput } from "../models/models_0";
import { GetClusterPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetClusterPolicyCommand}.
 */
export interface GetClusterPolicyCommandInput extends GetClusterPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetClusterPolicyCommand}.
 */
export interface GetClusterPolicyCommandOutput extends GetClusterPolicyOutput, __MetadataBearer {}

/**
 * Retrieves the resource-based policy document attached to a cluster. This policy defines the access permissions and conditions for the cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DSQLClient, GetClusterPolicyCommand } from "@aws-sdk/client-dsql"; // ES Modules import
 * // const { DSQLClient, GetClusterPolicyCommand } = require("@aws-sdk/client-dsql"); // CommonJS import
 * // import type { DSQLClientConfig } from "@aws-sdk/client-dsql";
 * const config = {}; // type is DSQLClientConfig
 * const client = new DSQLClient(config);
 * const input = { // GetClusterPolicyInput
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetClusterPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetClusterPolicyOutput
 * //   policy: "STRING_VALUE", // required
 * //   policyVersion: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetClusterPolicyCommandInput - {@link GetClusterPolicyCommandInput}
 * @returns {@link GetClusterPolicyCommandOutput}
 * @see {@link GetClusterPolicyCommandInput} for command's `input` shape.
 * @see {@link GetClusterPolicyCommandOutput} for command's `response` shape.
 * @see {@link DSQLClientResolvedConfig | config} for DSQLClient's `config` shape.
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
export class GetClusterPolicyCommand extends command<GetClusterPolicyCommandInput, GetClusterPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetClusterPolicy",
  GetClusterPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClusterPolicyInput;
      output: GetClusterPolicyOutput;
    };
    sdk: {
      input: GetClusterPolicyCommandInput;
      output: GetClusterPolicyCommandOutput;
    };
  };
}
