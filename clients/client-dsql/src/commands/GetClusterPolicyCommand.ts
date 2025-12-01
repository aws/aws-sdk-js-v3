// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DSQLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DSQLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetClusterPolicyInput, GetClusterPolicyOutput } from "../models/models_0";
import { GetClusterPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves the resource-based policy document attached to a cluster. This policy defines the access permissions and conditions for the cluster.</p>
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
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link DSQLServiceException}
 * <p>Base exception class for all service exceptions from DSQL service.</p>
 *
 *
 * @public
 */
export class GetClusterPolicyCommand extends $Command
  .classBuilder<
    GetClusterPolicyCommandInput,
    GetClusterPolicyCommandOutput,
    DSQLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DSQLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DSQL", "GetClusterPolicy", {})
  .n("DSQLClient", "GetClusterPolicyCommand")
  .sc(GetClusterPolicy)
  .build() {
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
