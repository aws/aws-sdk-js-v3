// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRoutingProfileQueuesRequest } from "../models/models_2";
import { de_UpdateRoutingProfileQueuesCommand, se_UpdateRoutingProfileQueuesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRoutingProfileQueuesCommand}.
 */
export interface UpdateRoutingProfileQueuesCommandInput extends UpdateRoutingProfileQueuesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRoutingProfileQueuesCommand}.
 */
export interface UpdateRoutingProfileQueuesCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the properties associated with a set of queues for a routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateRoutingProfileQueuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateRoutingProfileQueuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // UpdateRoutingProfileQueuesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   RoutingProfileId: "STRING_VALUE", // required
 *   QueueConfigs: [ // RoutingProfileQueueConfigList // required
 *     { // RoutingProfileQueueConfig
 *       QueueReference: { // RoutingProfileQueueReference
 *         QueueId: "STRING_VALUE", // required
 *         Channel: "VOICE" || "CHAT" || "TASK", // required
 *       },
 *       Priority: Number("int"), // required
 *       Delay: Number("int"), // required
 *     },
 *   ],
 * };
 * const command = new UpdateRoutingProfileQueuesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRoutingProfileQueuesCommandInput - {@link UpdateRoutingProfileQueuesCommandInput}
 * @returns {@link UpdateRoutingProfileQueuesCommandOutput}
 * @see {@link UpdateRoutingProfileQueuesCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingProfileQueuesCommandOutput} for command's `response` shape.
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
export class UpdateRoutingProfileQueuesCommand extends $Command
  .classBuilder<
    UpdateRoutingProfileQueuesCommandInput,
    UpdateRoutingProfileQueuesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "UpdateRoutingProfileQueues", {})
  .n("ConnectClient", "UpdateRoutingProfileQueuesCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRoutingProfileQueuesCommand)
  .de(de_UpdateRoutingProfileQueuesCommand)
  .build() {}
