// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisableApplicationLayerAutomaticResponseRequest,
  DisableApplicationLayerAutomaticResponseResponse,
} from "../models/models_0";
import { DisableApplicationLayerAutomaticResponse } from "../schemas/schemas_9_DisableApplicationLayerAutomaticResponse";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableApplicationLayerAutomaticResponseCommand}.
 */
export interface DisableApplicationLayerAutomaticResponseCommandInput
  extends DisableApplicationLayerAutomaticResponseRequest {}
/**
 * @public
 *
 * The output of {@link DisableApplicationLayerAutomaticResponseCommand}.
 */
export interface DisableApplicationLayerAutomaticResponseCommandOutput
  extends DisableApplicationLayerAutomaticResponseResponse,
    __MetadataBearer {}

/**
 * <p>Disable the Shield Advanced automatic application layer DDoS mitigation feature for the protected resource. This
 *        stops Shield Advanced from creating, verifying, and applying WAF rules for attacks that it detects for the resource. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, DisableApplicationLayerAutomaticResponseCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, DisableApplicationLayerAutomaticResponseCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // import type { ShieldClientConfig } from "@aws-sdk/client-shield";
 * const config = {}; // type is ShieldClientConfig
 * const client = new ShieldClient(config);
 * const input = { // DisableApplicationLayerAutomaticResponseRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DisableApplicationLayerAutomaticResponseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableApplicationLayerAutomaticResponseCommandInput - {@link DisableApplicationLayerAutomaticResponseCommandInput}
 * @returns {@link DisableApplicationLayerAutomaticResponseCommandOutput}
 * @see {@link DisableApplicationLayerAutomaticResponseCommandInput} for command's `input` shape.
 * @see {@link DisableApplicationLayerAutomaticResponseCommandOutput} for command's `response` shape.
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
export class DisableApplicationLayerAutomaticResponseCommand extends $Command
  .classBuilder<
    DisableApplicationLayerAutomaticResponseCommandInput,
    DisableApplicationLayerAutomaticResponseCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSShield_20160616", "DisableApplicationLayerAutomaticResponse", {})
  .n("ShieldClient", "DisableApplicationLayerAutomaticResponseCommand")
  .sc(DisableApplicationLayerAutomaticResponse)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableApplicationLayerAutomaticResponseRequest;
      output: {};
    };
    sdk: {
      input: DisableApplicationLayerAutomaticResponseCommandInput;
      output: DisableApplicationLayerAutomaticResponseCommandOutput;
    };
  };
}
