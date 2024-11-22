// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRoutingProfileRequest, CreateRoutingProfileResponse } from "../models/models_0";
import { de_CreateRoutingProfileCommand, se_CreateRoutingProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRoutingProfileCommand}.
 */
export interface CreateRoutingProfileCommandInput extends CreateRoutingProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateRoutingProfileCommand}.
 */
export interface CreateRoutingProfileCommandOutput extends CreateRoutingProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a new routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateRoutingProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateRoutingProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // CreateRoutingProfileRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   DefaultOutboundQueueId: "STRING_VALUE", // required
 *   QueueConfigs: [ // RoutingProfileQueueConfigList
 *     { // RoutingProfileQueueConfig
 *       QueueReference: { // RoutingProfileQueueReference
 *         QueueId: "STRING_VALUE", // required
 *         Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 *       },
 *       Priority: Number("int"), // required
 *       Delay: Number("int"), // required
 *     },
 *   ],
 *   MediaConcurrencies: [ // MediaConcurrencies // required
 *     { // MediaConcurrency
 *       Channel: "VOICE" || "CHAT" || "TASK" || "EMAIL", // required
 *       Concurrency: Number("int"), // required
 *       CrossChannelBehavior: { // CrossChannelBehavior
 *         BehaviorType: "ROUTE_CURRENT_CHANNEL_ONLY" || "ROUTE_ANY_CHANNEL", // required
 *       },
 *     },
 *   ],
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   AgentAvailabilityTimer: "TIME_SINCE_LAST_ACTIVITY" || "TIME_SINCE_LAST_INBOUND",
 * };
 * const command = new CreateRoutingProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateRoutingProfileResponse
 * //   RoutingProfileArn: "STRING_VALUE",
 * //   RoutingProfileId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateRoutingProfileCommandInput - {@link CreateRoutingProfileCommandInput}
 * @returns {@link CreateRoutingProfileCommandOutput}
 * @see {@link CreateRoutingProfileCommandInput} for command's `input` shape.
 * @see {@link CreateRoutingProfileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
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
export class CreateRoutingProfileCommand extends $Command
  .classBuilder<
    CreateRoutingProfileCommandInput,
    CreateRoutingProfileCommandOutput,
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
  .s("AmazonConnectService", "CreateRoutingProfile", {})
  .n("ConnectClient", "CreateRoutingProfileCommand")
  .f(void 0, void 0)
  .ser(se_CreateRoutingProfileCommand)
  .de(de_CreateRoutingProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRoutingProfileRequest;
      output: CreateRoutingProfileResponse;
    };
    sdk: {
      input: CreateRoutingProfileCommandInput;
      output: CreateRoutingProfileCommandOutput;
    };
  };
}
