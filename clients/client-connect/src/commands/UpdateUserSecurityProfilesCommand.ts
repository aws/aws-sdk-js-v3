// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateUserSecurityProfilesRequest } from "../models/models_3";
import { UpdateUserSecurityProfiles } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateUserSecurityProfilesCommand}.
 */
export interface UpdateUserSecurityProfilesCommandInput extends UpdateUserSecurityProfilesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateUserSecurityProfilesCommand}.
 */
export interface UpdateUserSecurityProfilesCommandOutput extends __MetadataBearer {}

/**
 * <p>Assigns the specified security profiles to the specified user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateUserSecurityProfilesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateUserSecurityProfilesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateUserSecurityProfilesRequest
 *   SecurityProfileIds: [ // SecurityProfileIds // required
 *     "STRING_VALUE",
 *   ],
 *   UserId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new UpdateUserSecurityProfilesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateUserSecurityProfilesCommandInput - {@link UpdateUserSecurityProfilesCommandInput}
 * @returns {@link UpdateUserSecurityProfilesCommandOutput}
 * @see {@link UpdateUserSecurityProfilesCommandInput} for command's `input` shape.
 * @see {@link UpdateUserSecurityProfilesCommandOutput} for command's `response` shape.
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
export class UpdateUserSecurityProfilesCommand extends $Command
  .classBuilder<
    UpdateUserSecurityProfilesCommandInput,
    UpdateUserSecurityProfilesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateUserSecurityProfiles", {})
  .n("ConnectClient", "UpdateUserSecurityProfilesCommand")
  .sc(UpdateUserSecurityProfiles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateUserSecurityProfilesRequest;
      output: {};
    };
    sdk: {
      input: UpdateUserSecurityProfilesCommandInput;
      output: UpdateUserSecurityProfilesCommandOutput;
    };
  };
}
