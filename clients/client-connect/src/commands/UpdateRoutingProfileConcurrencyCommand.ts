// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRoutingProfileConcurrencyRequest } from "../models/models_2";
import {
  de_UpdateRoutingProfileConcurrencyCommand,
  se_UpdateRoutingProfileConcurrencyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRoutingProfileConcurrencyCommand}.
 */
export interface UpdateRoutingProfileConcurrencyCommandInput extends UpdateRoutingProfileConcurrencyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRoutingProfileConcurrencyCommand}.
 */
export interface UpdateRoutingProfileConcurrencyCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the channels that agents can handle in the Contact Control Panel (CCP) for a routing
 *    profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateRoutingProfileConcurrencyCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateRoutingProfileConcurrencyCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateRoutingProfileConcurrencyRequest
 *   InstanceId: "STRING_VALUE", // required
 *   RoutingProfileId: "STRING_VALUE", // required
 *   MediaConcurrencies: [ // MediaConcurrencies // required
 *     { // MediaConcurrency
 *       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 *       Concurrency: Number("int"), // required
 *       CrossChannelBehavior: { // CrossChannelBehavior
 *         BehaviorType: "ROUTE_CURRENT_CHANNEL_ONLY" || "ROUTE_ANY_CHANNEL", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateRoutingProfileConcurrencyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRoutingProfileConcurrencyCommandInput - {@link UpdateRoutingProfileConcurrencyCommandInput}
 * @returns {@link UpdateRoutingProfileConcurrencyCommandOutput}
 * @see {@link UpdateRoutingProfileConcurrencyCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingProfileConcurrencyCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class UpdateRoutingProfileConcurrencyCommand extends $Command
  .classBuilder<
    UpdateRoutingProfileConcurrencyCommandInput,
    UpdateRoutingProfileConcurrencyCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "UpdateRoutingProfileConcurrency", {})
  .n("ConnectClient", "UpdateRoutingProfileConcurrencyCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRoutingProfileConcurrencyCommand)
  .de(de_UpdateRoutingProfileConcurrencyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRoutingProfileConcurrencyRequest;
      output: {};
    };
    sdk: {
      input: UpdateRoutingProfileConcurrencyCommandInput;
      output: UpdateRoutingProfileConcurrencyCommandOutput;
    };
  };
}
