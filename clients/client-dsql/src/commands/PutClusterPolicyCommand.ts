// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DSQLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DSQLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutClusterPolicyInput, PutClusterPolicyOutput } from "../models/models_0";
import { de_PutClusterPolicyCommand, se_PutClusterPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Attaches a resource-based policy to a cluster. This policy defines access permissions and conditions for the cluster, allowing you to control which principals can perform actions on the cluster.</p>
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
export class PutClusterPolicyCommand extends $Command
  .classBuilder<
    PutClusterPolicyCommandInput,
    PutClusterPolicyCommandOutput,
    DSQLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DSQLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DSQL", "PutClusterPolicy", {})
  .n("DSQLClient", "PutClusterPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutClusterPolicyCommand)
  .de(de_PutClusterPolicyCommand)
  .build() {
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
