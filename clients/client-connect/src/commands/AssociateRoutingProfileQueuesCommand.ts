// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateRoutingProfileQueuesRequest } from "../models/models_0";
import {
  de_AssociateRoutingProfileQueuesCommand,
  se_AssociateRoutingProfileQueuesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateRoutingProfileQueuesCommand}.
 */
export interface AssociateRoutingProfileQueuesCommandInput extends AssociateRoutingProfileQueuesRequest {}
/**
 * @public
 *
 * The output of {@link AssociateRoutingProfileQueuesCommand}.
 */
export interface AssociateRoutingProfileQueuesCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates a set of queues with a routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateRoutingProfileQueuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateRoutingProfileQueuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // AssociateRoutingProfileQueuesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   RoutingProfileId: "STRING_VALUE", // required
 *   QueueConfigs: [ // RoutingProfileQueueConfigList // required
 *     { // RoutingProfileQueueConfig
 *       QueueReference: { // RoutingProfileQueueReference
 *         QueueId: "STRING_VALUE", // required
 *         Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 *       },
 *       Priority: Number("int"), // required
 *       Delay: Number("int"), // required
 *     },
 *   ],
 * };
 * const command = new AssociateRoutingProfileQueuesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateRoutingProfileQueuesCommandInput - {@link AssociateRoutingProfileQueuesCommandInput}
 * @returns {@link AssociateRoutingProfileQueuesCommandOutput}
 * @see {@link AssociateRoutingProfileQueuesCommandInput} for command's `input` shape.
 * @see {@link AssociateRoutingProfileQueuesCommandOutput} for command's `response` shape.
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
export class AssociateRoutingProfileQueuesCommand extends $Command
  .classBuilder<
    AssociateRoutingProfileQueuesCommandInput,
    AssociateRoutingProfileQueuesCommandOutput,
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
  .s("AmazonConnectService", "AssociateRoutingProfileQueues", {})
  .n("ConnectClient", "AssociateRoutingProfileQueuesCommand")
  .f(void 0, void 0)
  .ser(se_AssociateRoutingProfileQueuesCommand)
  .de(de_AssociateRoutingProfileQueuesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateRoutingProfileQueuesRequest;
      output: {};
    };
    sdk: {
      input: AssociateRoutingProfileQueuesCommandInput;
      output: AssociateRoutingProfileQueuesCommandOutput;
    };
  };
}
