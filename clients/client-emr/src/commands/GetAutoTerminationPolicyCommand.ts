// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetAutoTerminationPolicyInput, GetAutoTerminationPolicyOutput } from "../models/models_0";
import { GetAutoTerminationPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAutoTerminationPolicyCommand}.
 */
export interface GetAutoTerminationPolicyCommandInput extends GetAutoTerminationPolicyInput {}
/**
 * @public
 *
 * The output of {@link GetAutoTerminationPolicyCommand}.
 */
export interface GetAutoTerminationPolicyCommandOutput extends GetAutoTerminationPolicyOutput, __MetadataBearer {}

/**
 * <p>Returns the auto-termination policy for an Amazon EMR cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, GetAutoTerminationPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, GetAutoTerminationPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // GetAutoTerminationPolicyInput
 *   ClusterId: "STRING_VALUE", // required
 * };
 * const command = new GetAutoTerminationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetAutoTerminationPolicyOutput
 * //   AutoTerminationPolicy: { // AutoTerminationPolicy
 * //     IdleTimeout: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAutoTerminationPolicyCommandInput - {@link GetAutoTerminationPolicyCommandInput}
 * @returns {@link GetAutoTerminationPolicyCommandOutput}
 * @see {@link GetAutoTerminationPolicyCommandInput} for command's `input` shape.
 * @see {@link GetAutoTerminationPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class GetAutoTerminationPolicyCommand extends $Command
  .classBuilder<
    GetAutoTerminationPolicyCommandInput,
    GetAutoTerminationPolicyCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "GetAutoTerminationPolicy", {})
  .n("EMRClient", "GetAutoTerminationPolicyCommand")
  .sc(GetAutoTerminationPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAutoTerminationPolicyInput;
      output: GetAutoTerminationPolicyOutput;
    };
    sdk: {
      input: GetAutoTerminationPolicyCommandInput;
      output: GetAutoTerminationPolicyCommandOutput;
    };
  };
}
