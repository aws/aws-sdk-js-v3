// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateQuickConnectRequest, CreateQuickConnectResponse } from "../models/models_0";
import { CreateQuickConnect } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateQuickConnectCommand}.
 */
export interface CreateQuickConnectCommandInput extends CreateQuickConnectRequest {}
/**
 * @public
 *
 * The output of {@link CreateQuickConnectCommand}.
 */
export interface CreateQuickConnectCommandOutput extends CreateQuickConnectResponse, __MetadataBearer {}

/**
 * <p>Creates a quick connect for the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateQuickConnectCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateQuickConnectCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateQuickConnectRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   QuickConnectConfig: { // QuickConnectConfig
 *     QuickConnectType: "USER" || "QUEUE" || "PHONE_NUMBER" || "FLOW", // required
 *     UserConfig: { // UserQuickConnectConfig
 *       UserId: "STRING_VALUE", // required
 *       ContactFlowId: "STRING_VALUE", // required
 *     },
 *     QueueConfig: { // QueueQuickConnectConfig
 *       QueueId: "STRING_VALUE", // required
 *       ContactFlowId: "STRING_VALUE", // required
 *     },
 *     PhoneConfig: { // PhoneNumberQuickConnectConfig
 *       PhoneNumber: "STRING_VALUE", // required
 *     },
 *     FlowConfig: { // FlowQuickConnectConfig
 *       ContactFlowId: "STRING_VALUE", // required
 *     },
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateQuickConnectCommand(input);
 * const response = await client.send(command);
 * // { // CreateQuickConnectResponse
 * //   QuickConnectARN: "STRING_VALUE",
 * //   QuickConnectId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateQuickConnectCommandInput - {@link CreateQuickConnectCommandInput}
 * @returns {@link CreateQuickConnectCommandOutput}
 * @see {@link CreateQuickConnectCommandInput} for command's `input` shape.
 * @see {@link CreateQuickConnectCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class CreateQuickConnectCommand extends $Command
  .classBuilder<
    CreateQuickConnectCommandInput,
    CreateQuickConnectCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "CreateQuickConnect", {})
  .n("ConnectClient", "CreateQuickConnectCommand")
  .sc(CreateQuickConnect)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQuickConnectRequest;
      output: CreateQuickConnectResponse;
    };
    sdk: {
      input: CreateQuickConnectCommandInput;
      output: CreateQuickConnectCommandOutput;
    };
  };
}
