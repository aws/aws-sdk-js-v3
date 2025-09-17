// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartScreenSharingRequest, StartScreenSharingResponse } from "../models/models_2";
import { de_StartScreenSharingCommand, se_StartScreenSharingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartScreenSharingCommand}.
 */
export interface StartScreenSharingCommandInput extends StartScreenSharingRequest {}
/**
 * @public
 *
 * The output of {@link StartScreenSharingCommand}.
 */
export interface StartScreenSharingCommandOutput extends StartScreenSharingResponse, __MetadataBearer {}

/**
 * <p>Starts screen sharing for a contact. For more information about screen sharing, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/inapp-calling.html">Set up in-app, web,
 *     video calling, and screen sharing capabilities</a> in the <i>Amazon Connect Administrator
 *     Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, StartScreenSharingCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, StartScreenSharingCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // StartScreenSharingRequest
 *   ClientToken: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 * };
 * const command = new StartScreenSharingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartScreenSharingCommandInput - {@link StartScreenSharingCommandInput}
 * @returns {@link StartScreenSharingCommandOutput}
 * @see {@link StartScreenSharingCommandInput} for command's `input` shape.
 * @see {@link StartScreenSharingCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
export class StartScreenSharingCommand extends $Command
  .classBuilder<
    StartScreenSharingCommandInput,
    StartScreenSharingCommandOutput,
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
  .s("AmazonConnectService", "StartScreenSharing", {})
  .n("ConnectClient", "StartScreenSharingCommand")
  .f(void 0, void 0)
  .ser(se_StartScreenSharingCommand)
  .de(de_StartScreenSharingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartScreenSharingRequest;
      output: {};
    };
    sdk: {
      input: StartScreenSharingCommandInput;
      output: StartScreenSharingCommandOutput;
    };
  };
}
