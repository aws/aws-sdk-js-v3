// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRoutingProfileDefaultOutboundQueueRequest } from "../models/models_3";
import {
  de_UpdateRoutingProfileDefaultOutboundQueueCommand,
  se_UpdateRoutingProfileDefaultOutboundQueueCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRoutingProfileDefaultOutboundQueueCommand}.
 */
export interface UpdateRoutingProfileDefaultOutboundQueueCommandInput
  extends UpdateRoutingProfileDefaultOutboundQueueRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRoutingProfileDefaultOutboundQueueCommand}.
 */
export interface UpdateRoutingProfileDefaultOutboundQueueCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the default outbound queue of a routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateRoutingProfileDefaultOutboundQueueCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateRoutingProfileDefaultOutboundQueueCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateRoutingProfileDefaultOutboundQueueRequest
 *   InstanceId: "STRING_VALUE", // required
 *   RoutingProfileId: "STRING_VALUE", // required
 *   DefaultOutboundQueueId: "STRING_VALUE", // required
 * };
 * const command = new UpdateRoutingProfileDefaultOutboundQueueCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRoutingProfileDefaultOutboundQueueCommandInput - {@link UpdateRoutingProfileDefaultOutboundQueueCommandInput}
 * @returns {@link UpdateRoutingProfileDefaultOutboundQueueCommandOutput}
 * @see {@link UpdateRoutingProfileDefaultOutboundQueueCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingProfileDefaultOutboundQueueCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class UpdateRoutingProfileDefaultOutboundQueueCommand extends $Command
  .classBuilder<
    UpdateRoutingProfileDefaultOutboundQueueCommandInput,
    UpdateRoutingProfileDefaultOutboundQueueCommandOutput,
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
  .s("AmazonConnectService", "UpdateRoutingProfileDefaultOutboundQueue", {})
  .n("ConnectClient", "UpdateRoutingProfileDefaultOutboundQueueCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRoutingProfileDefaultOutboundQueueCommand)
  .de(de_UpdateRoutingProfileDefaultOutboundQueueCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRoutingProfileDefaultOutboundQueueRequest;
      output: {};
    };
    sdk: {
      input: UpdateRoutingProfileDefaultOutboundQueueCommandInput;
      output: UpdateRoutingProfileDefaultOutboundQueueCommandOutput;
    };
  };
}
