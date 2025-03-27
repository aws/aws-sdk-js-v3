// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StopFailbackRequest } from "../models/models_0";
import { de_StopFailbackCommand, se_StopFailbackCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopFailbackCommand}.
 */
export interface StopFailbackCommandInput extends StopFailbackRequest {}
/**
 * @public
 *
 * The output of {@link StopFailbackCommand}.
 */
export interface StopFailbackCommandOutput extends __MetadataBearer {}

/**
 * <p>Stops the failback process for a specified Recovery Instance. This changes the Failback State of the Recovery Instance back to FAILBACK_NOT_STARTED.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, StopFailbackCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, StopFailbackCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // StopFailbackRequest
 *   recoveryInstanceID: "STRING_VALUE", // required
 * };
 * const command = new StopFailbackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopFailbackCommandInput - {@link StopFailbackCommandInput}
 * @returns {@link StopFailbackCommandOutput}
 * @see {@link StopFailbackCommandInput} for command's `input` shape.
 * @see {@link StopFailbackCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 *
 * @public
 */
export class StopFailbackCommand extends $Command
  .classBuilder<
    StopFailbackCommandInput,
    StopFailbackCommandOutput,
    DrsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DrsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticDisasterRecoveryService", "StopFailback", {})
  .n("DrsClient", "StopFailbackCommand")
  .f(void 0, void 0)
  .ser(se_StopFailbackCommand)
  .de(de_StopFailbackCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopFailbackRequest;
      output: {};
    };
    sdk: {
      input: StopFailbackCommandInput;
      output: StopFailbackCommandOutput;
    };
  };
}
