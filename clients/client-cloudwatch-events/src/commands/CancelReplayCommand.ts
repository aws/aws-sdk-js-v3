// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchEventsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CancelReplayRequest, CancelReplayResponse } from "../models/models_0";
import { CancelReplay } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelReplayCommand}.
 */
export interface CancelReplayCommandInput extends CancelReplayRequest {}
/**
 * @public
 *
 * The output of {@link CancelReplayCommand}.
 */
export interface CancelReplayCommandOutput extends CancelReplayResponse, __MetadataBearer {}

/**
 * <p>Cancels the specified replay.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, CancelReplayCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, CancelReplayCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // CancelReplayRequest
 *   ReplayName: "STRING_VALUE", // required
 * };
 * const command = new CancelReplayCommand(input);
 * const response = await client.send(command);
 * // { // CancelReplayResponse
 * //   ReplayArn: "STRING_VALUE",
 * //   State: "STARTING" || "RUNNING" || "CANCELLING" || "COMPLETED" || "CANCELLED" || "FAILED",
 * //   StateReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelReplayCommandInput - {@link CancelReplayCommandInput}
 * @returns {@link CancelReplayCommandOutput}
 * @see {@link CancelReplayCommandInput} for command's `input` shape.
 * @see {@link CancelReplayCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link IllegalStatusException} (client fault)
 *  <p>An error occurred because a replay can be canceled only when the state is Running or
 *       Starting.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 *
 * @public
 */
export class CancelReplayCommand extends $Command
  .classBuilder<
    CancelReplayCommandInput,
    CancelReplayCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "CancelReplay", {})
  .n("CloudWatchEventsClient", "CancelReplayCommand")
  .sc(CancelReplay)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelReplayRequest;
      output: CancelReplayResponse;
    };
    sdk: {
      input: CancelReplayCommandInput;
      output: CancelReplayCommandOutput;
    };
  };
}
