// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAuthenticationProfileRequest } from "../models/models_3";
import { UpdateAuthenticationProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAuthenticationProfileCommand}.
 */
export interface UpdateAuthenticationProfileCommandInput extends UpdateAuthenticationProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAuthenticationProfileCommand}.
 */
export interface UpdateAuthenticationProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change. To
 * request access to this API, contact Amazon Web Services Support.</p>
 *          <p>Updates the selected authentication profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateAuthenticationProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateAuthenticationProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateAuthenticationProfileRequest
 *   AuthenticationProfileId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   AllowedIps: [ // IpCidrList
 *     "STRING_VALUE",
 *   ],
 *   BlockedIps: [
 *     "STRING_VALUE",
 *   ],
 *   PeriodicSessionDuration: Number("int"),
 *   SessionInactivityDuration: Number("int"),
 *   SessionInactivityHandlingEnabled: true || false,
 * };
 * const command = new UpdateAuthenticationProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAuthenticationProfileCommandInput - {@link UpdateAuthenticationProfileCommandInput}
 * @returns {@link UpdateAuthenticationProfileCommandOutput}
 * @see {@link UpdateAuthenticationProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateAuthenticationProfileCommandOutput} for command's `response` shape.
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
export class UpdateAuthenticationProfileCommand extends $Command
  .classBuilder<
    UpdateAuthenticationProfileCommandInput,
    UpdateAuthenticationProfileCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateAuthenticationProfile", {})
  .n("ConnectClient", "UpdateAuthenticationProfileCommand")
  .sc(UpdateAuthenticationProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAuthenticationProfileRequest;
      output: {};
    };
    sdk: {
      input: UpdateAuthenticationProfileCommandInput;
      output: UpdateAuthenticationProfileCommandOutput;
    };
  };
}
