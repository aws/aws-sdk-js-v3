// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisableProactiveEngagementRequest, DisableProactiveEngagementResponse } from "../models/models_0";
import { DisableProactiveEngagement } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableProactiveEngagementCommand}.
 */
export interface DisableProactiveEngagementCommandInput extends DisableProactiveEngagementRequest {}
/**
 * @public
 *
 * The output of {@link DisableProactiveEngagementCommand}.
 */
export interface DisableProactiveEngagementCommandOutput extends DisableProactiveEngagementResponse, __MetadataBearer {}

/**
 * <p>Removes authorization from the Shield Response Team (SRT) to notify contacts about escalations to the SRT and to initiate proactive customer support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DisableProactiveEngagementCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DisableProactiveEngagementCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // import type { ShieldClientConfig } from "@aws-sdk/client-shield";
 * const config = {}; // type is ShieldClientConfig
 * const client = new ShieldClient(config);
 * const input = {};
 * const command = new DisableProactiveEngagementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableProactiveEngagementCommandInput - {@link DisableProactiveEngagementCommandInput}
 * @returns {@link DisableProactiveEngagementCommandOutput}
 * @see {@link DisableProactiveEngagementCommandInput} for command's `input` shape.
 * @see {@link DisableProactiveEngagementCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>Exception that indicates that the operation would not cause any change to occur.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link OptimisticLockException} (client fault)
 *  <p>Exception that indicates that the resource state has been modified by another
 *          client. Retrieve the resource and then retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties. </p>
 *
 * @throws {@link ShieldServiceException}
 * <p>Base exception class for all service exceptions from Shield service.</p>
 *
 *
 * @public
 */
export class DisableProactiveEngagementCommand extends $Command
  .classBuilder<
    DisableProactiveEngagementCommandInput,
    DisableProactiveEngagementCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSShield_20160616", "DisableProactiveEngagement", {})
  .n("ShieldClient", "DisableProactiveEngagementCommand")
  .sc(DisableProactiveEngagement)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DisableProactiveEngagementCommandInput;
      output: DisableProactiveEngagementCommandOutput;
    };
  };
}
