// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateParticipantRequest, CreateParticipantResponse } from "../models/models_0";
import { de_CreateParticipantCommand, se_CreateParticipantCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateParticipantCommand}.
 */
export interface CreateParticipantCommandInput extends CreateParticipantRequest {}
/**
 * @public
 *
 * The output of {@link CreateParticipantCommand}.
 */
export interface CreateParticipantCommandOutput extends CreateParticipantResponse, __MetadataBearer {}

/**
 * <p>Adds a new participant into an on-going chat contact or webRTC call. For more information,
 *    see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-customize-flow.html">Customize chat flow experiences by integrating custom participants</a> or <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-multiuser-inapp.html">Enable
 *     multi-user web, in-app, and video calling</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateParticipantCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateParticipantCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateParticipantRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   ParticipantDetails: { // ParticipantDetailsToAdd
 *     ParticipantRole: "AGENT" || "CUSTOMER" || "SYSTEM" || "CUSTOM_BOT" || "SUPERVISOR",
 *     DisplayName: "STRING_VALUE",
 *     ParticipantCapabilities: { // ParticipantCapabilities
 *       Video: "SEND",
 *       ScreenShare: "SEND",
 *     },
 *   },
 * };
 * const command = new CreateParticipantCommand(input);
 * const response = await client.send(command);
 * // { // CreateParticipantResponse
 * //   ParticipantCredentials: { // ParticipantTokenCredentials
 * //     ParticipantToken: "STRING_VALUE",
 * //     Expiry: "STRING_VALUE",
 * //   },
 * //   ParticipantId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateParticipantCommandInput - {@link CreateParticipantCommandInput}
 * @returns {@link CreateParticipantCommandOutput}
 * @see {@link CreateParticipantCommandInput} for command's `input` shape.
 * @see {@link CreateParticipantCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Operation cannot be performed at this time as there is a conflict with another operation or
 *    contact state.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
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
export class CreateParticipantCommand extends $Command
  .classBuilder<
    CreateParticipantCommandInput,
    CreateParticipantCommandOutput,
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
  .s("AmazonConnectService", "CreateParticipant", {})
  .n("ConnectClient", "CreateParticipantCommand")
  .f(void 0, void 0)
  .ser(se_CreateParticipantCommand)
  .de(de_CreateParticipantCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateParticipantRequest;
      output: CreateParticipantResponse;
    };
    sdk: {
      input: CreateParticipantCommandInput;
      output: CreateParticipantCommandOutput;
    };
  };
}
