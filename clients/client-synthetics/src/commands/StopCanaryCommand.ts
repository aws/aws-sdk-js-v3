// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StopCanaryRequest, StopCanaryResponse } from "../models/models_0";
import { StopCanary } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SyntheticsClientResolvedConfig } from "../SyntheticsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopCanaryCommand}.
 */
export interface StopCanaryCommandInput extends StopCanaryRequest {}
/**
 * @public
 *
 * The output of {@link StopCanaryCommand}.
 */
export interface StopCanaryCommandOutput extends StopCanaryResponse, __MetadataBearer {}

/**
 * <p>Stops the canary to prevent all future runs. If the canary is currently running,the
 *         run that is in progress completes on its own, publishes metrics, and uploads artifacts, but
 *          it is not recorded in Synthetics as a completed run.</p>
 *          <p>You can use <code>StartCanary</code> to start it running again
 *          with the canary’s current schedule at any point in the future.  </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, StopCanaryCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, StopCanaryCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * // import type { SyntheticsClientConfig } from "@aws-sdk/client-synthetics";
 * const config = {}; // type is SyntheticsClientConfig
 * const client = new SyntheticsClient(config);
 * const input = { // StopCanaryRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new StopCanaryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopCanaryCommandInput - {@link StopCanaryCommandInput}
 * @returns {@link StopCanaryCommandOutput}
 * @see {@link StopCanaryCommandInput} for command's `input` shape.
 * @see {@link StopCanaryCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflicting operation is already in progress.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One of the specified resources was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 *
 * @public
 */
export class StopCanaryCommand extends $Command
  .classBuilder<
    StopCanaryCommandInput,
    StopCanaryCommandOutput,
    SyntheticsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SyntheticsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Synthetics", "StopCanary", {})
  .n("SyntheticsClient", "StopCanaryCommand")
  .sc(StopCanary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopCanaryRequest;
      output: {};
    };
    sdk: {
      input: StopCanaryCommandInput;
      output: StopCanaryCommandOutput;
    };
  };
}
