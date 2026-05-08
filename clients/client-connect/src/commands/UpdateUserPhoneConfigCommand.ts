// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateUserPhoneConfigRequest } from "../models/models_3";
import { UpdateUserPhoneConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserPhoneConfigCommand}.
 */
export interface UpdateUserPhoneConfigCommandInput extends UpdateUserPhoneConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserPhoneConfigCommand}.
 */
export interface UpdateUserPhoneConfigCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the phone configuration settings for the specified user.</p>
 *          <note>
 *             <p>We recommend using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateUserConfig.html">UpdateUserConfig</a> API, which supports additional functionality that is not available in the UpdateUserPhoneConfig API, such as voice enhancement settings and per-channel configuration for auto-accept and After Contact Work (ACW) timeouts. In comparison, the UpdateUserPhoneConfig API will always set the same ACW timeouts to all channels the user handles.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserPhoneConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserPhoneConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateUserPhoneConfigRequest
 *   PhoneConfig: { // UserPhoneConfig
 *     PhoneType: "SOFT_PHONE" || "DESK_PHONE",
 *     AutoAccept: true || false,
 *     AfterContactWorkTimeLimit: Number("int"),
 *     DeskPhoneNumber: "STRING_VALUE",
 *     PersistentConnection: true || false,
 *   },
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new UpdateUserPhoneConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserPhoneConfigCommandInput - {@link UpdateUserPhoneConfigCommandInput}
 * @returns {@link UpdateUserPhoneConfigCommandOutput}
 * @see {@link UpdateUserPhoneConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateUserPhoneConfigCommandOutput} for command's `response` shape.
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
export class UpdateUserPhoneConfigCommand extends $Command
  .classBuilder<
    UpdateUserPhoneConfigCommandInput,
    UpdateUserPhoneConfigCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateUserPhoneConfig", {})
  .n("ConnectClient", "UpdateUserPhoneConfigCommand")
  .sc(UpdateUserPhoneConfig$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserPhoneConfigRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserPhoneConfigCommandInput;
      output: UpdateUserPhoneConfigCommandOutput;
    };
  };
}
