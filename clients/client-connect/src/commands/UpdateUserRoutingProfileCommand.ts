// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateUserRoutingProfileRequest } from "../models/models_3";
import { UpdateUserRoutingProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserRoutingProfileCommand}.
 */
export interface UpdateUserRoutingProfileCommandInput extends UpdateUserRoutingProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserRoutingProfileCommand}.
 */
export interface UpdateUserRoutingProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Assigns the specified routing profile to the specified user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserRoutingProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserRoutingProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateUserRoutingProfileRequest
 *   RoutingProfileId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new UpdateUserRoutingProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserRoutingProfileCommandInput - {@link UpdateUserRoutingProfileCommandInput}
 * @returns {@link UpdateUserRoutingProfileCommandOutput}
 * @see {@link UpdateUserRoutingProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateUserRoutingProfileCommandOutput} for command's `response` shape.
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
export class UpdateUserRoutingProfileCommand extends $Command
  .classBuilder<
    UpdateUserRoutingProfileCommandInput,
    UpdateUserRoutingProfileCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateUserRoutingProfile", {})
  .n("ConnectClient", "UpdateUserRoutingProfileCommand")
  .sc(UpdateUserRoutingProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserRoutingProfileRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserRoutingProfileCommandInput;
      output: UpdateUserRoutingProfileCommandOutput;
    };
  };
}
