// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateApplicationLayerAutomaticResponseRequest,
  UpdateApplicationLayerAutomaticResponseResponse,
} from "../models/models_0";
import {
  de_UpdateApplicationLayerAutomaticResponseCommand,
  se_UpdateApplicationLayerAutomaticResponseCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApplicationLayerAutomaticResponseCommand}.
 */
export interface UpdateApplicationLayerAutomaticResponseCommandInput
  extends UpdateApplicationLayerAutomaticResponseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApplicationLayerAutomaticResponseCommand}.
 */
export interface UpdateApplicationLayerAutomaticResponseCommandOutput
  extends UpdateApplicationLayerAutomaticResponseResponse,
    __MetadataBearer {}

/**
 * <p>Updates an existing Shield Advanced automatic application layer DDoS mitigation configuration for the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, UpdateApplicationLayerAutomaticResponseCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, UpdateApplicationLayerAutomaticResponseCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * const client = new ShieldClient(config);
 * const input = { // UpdateApplicationLayerAutomaticResponseRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   Action: { // ResponseAction
 *     Block: {},
 *     Count: {},
 *   },
 * };
 * const command = new UpdateApplicationLayerAutomaticResponseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateApplicationLayerAutomaticResponseCommandInput - {@link UpdateApplicationLayerAutomaticResponseCommandInput}
 * @returns {@link UpdateApplicationLayerAutomaticResponseCommandOutput}
 * @see {@link UpdateApplicationLayerAutomaticResponseCommandInput} for command's `input` shape.
 * @see {@link UpdateApplicationLayerAutomaticResponseCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateApplicationLayerAutomaticResponseCommand extends $Command
  .classBuilder<
    UpdateApplicationLayerAutomaticResponseCommandInput,
    UpdateApplicationLayerAutomaticResponseCommandOutput,
    ShieldClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ShieldClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSShield_20160616", "UpdateApplicationLayerAutomaticResponse", {})
  .n("ShieldClient", "UpdateApplicationLayerAutomaticResponseCommand")
  .f(void 0, void 0)
  .ser(se_UpdateApplicationLayerAutomaticResponseCommand)
  .de(de_UpdateApplicationLayerAutomaticResponseCommand)
  .build() {}
