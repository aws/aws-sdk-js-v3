// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateContactFlowRequest, CreateContactFlowResponse } from "../models/models_0";
import { de_CreateContactFlowCommand, se_CreateContactFlowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateContactFlowCommand}.
 */
export interface CreateContactFlowCommandInput extends CreateContactFlowRequest {}
/**
 * @public
 *
 * The output of {@link CreateContactFlowCommand}.
 */
export interface CreateContactFlowCommandOutput extends CreateContactFlowResponse, __MetadataBearer {}

/**
 * <p>Creates a flow for the specified Amazon Connect instance.</p>
 *          <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateContactFlowCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateContactFlowCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // CreateContactFlowRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Type: "CONTACT_FLOW" || "CUSTOMER_QUEUE" || "CUSTOMER_HOLD" || "CUSTOMER_WHISPER" || "AGENT_HOLD" || "AGENT_WHISPER" || "OUTBOUND_WHISPER" || "AGENT_TRANSFER" || "QUEUE_TRANSFER" || "CAMPAIGN", // required
 *   Description: "STRING_VALUE",
 *   Content: "STRING_VALUE", // required
 *   Status: "PUBLISHED" || "SAVED",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateContactFlowCommand(input);
 * const response = await client.send(command);
 * // { // CreateContactFlowResponse
 * //   ContactFlowId: "STRING_VALUE",
 * //   ContactFlowArn: "STRING_VALUE",
 * //   FlowContentSha256: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateContactFlowCommandInput - {@link CreateContactFlowCommandInput}
 * @returns {@link CreateContactFlowCommandOutput}
 * @see {@link CreateContactFlowCommandInput} for command's `input` shape.
 * @see {@link CreateContactFlowCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidContactFlowException} (client fault)
 *  <p>The flow is not valid.</p>
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
export class CreateContactFlowCommand extends $Command
  .classBuilder<
    CreateContactFlowCommandInput,
    CreateContactFlowCommandOutput,
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
  .s("AmazonConnectService", "CreateContactFlow", {})
  .n("ConnectClient", "CreateContactFlowCommand")
  .f(void 0, void 0)
  .ser(se_CreateContactFlowCommand)
  .de(de_CreateContactFlowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateContactFlowRequest;
      output: CreateContactFlowResponse;
    };
    sdk: {
      input: CreateContactFlowCommandInput;
      output: CreateContactFlowCommandOutput;
    };
  };
}
