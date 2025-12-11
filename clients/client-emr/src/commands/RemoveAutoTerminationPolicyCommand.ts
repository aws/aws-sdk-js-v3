// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { RemoveAutoTerminationPolicyInput, RemoveAutoTerminationPolicyOutput } from "../models/models_0";
import { RemoveAutoTerminationPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveAutoTerminationPolicyCommand}.
 */
export interface RemoveAutoTerminationPolicyCommandInput extends RemoveAutoTerminationPolicyInput {}
/**
 * @public
 *
 * The output of {@link RemoveAutoTerminationPolicyCommand}.
 */
export interface RemoveAutoTerminationPolicyCommandOutput extends RemoveAutoTerminationPolicyOutput, __MetadataBearer {}

/**
 * <p>Removes an auto-termination policy from an Amazon EMR cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, RemoveAutoTerminationPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, RemoveAutoTerminationPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // RemoveAutoTerminationPolicyInput
 *   ClusterId: "STRING_VALUE", // required
 * };
 * const command = new RemoveAutoTerminationPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemoveAutoTerminationPolicyCommandInput - {@link RemoveAutoTerminationPolicyCommandInput}
 * @returns {@link RemoveAutoTerminationPolicyCommandOutput}
 * @see {@link RemoveAutoTerminationPolicyCommandInput} for command's `input` shape.
 * @see {@link RemoveAutoTerminationPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class RemoveAutoTerminationPolicyCommand extends $Command
  .classBuilder<
    RemoveAutoTerminationPolicyCommandInput,
    RemoveAutoTerminationPolicyCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "RemoveAutoTerminationPolicy", {})
  .n("EMRClient", "RemoveAutoTerminationPolicyCommand")
  .sc(RemoveAutoTerminationPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveAutoTerminationPolicyInput;
      output: {};
    };
    sdk: {
      input: RemoveAutoTerminationPolicyCommandInput;
      output: RemoveAutoTerminationPolicyCommandOutput;
    };
  };
}
