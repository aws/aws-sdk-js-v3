// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DSQLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DSQLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteClusterPolicyInput, DeleteClusterPolicyOutput } from "../models/models_0";
import { DeleteClusterPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes the resource-based policy attached to a cluster. This removes all access permissions defined by the policy, reverting to default access controls.</p>
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
 *  <p>The submitted action has conflicts.</p>
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
export class DeleteClusterPolicyCommand extends $Command
  .classBuilder<
    DeleteClusterPolicyCommandInput,
    DeleteClusterPolicyCommandOutput,
    DSQLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DSQLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DSQL", "DeleteClusterPolicy", {})
  .n("DSQLClient", "DeleteClusterPolicyCommand")
  .sc(DeleteClusterPolicy$)
  .build() {
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
