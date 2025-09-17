// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAppInstanceBotRequest } from "../models/models_0";
import { de_DeleteAppInstanceBotCommand, se_DeleteAppInstanceBotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppInstanceBotCommand}.
 */
export interface DeleteAppInstanceBotCommandInput extends DeleteAppInstanceBotRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppInstanceBotCommand}.
 */
export interface DeleteAppInstanceBotCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an <code>AppInstanceBot</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, DeleteAppInstanceBotCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, DeleteAppInstanceBotCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // DeleteAppInstanceBotRequest
 *   AppInstanceBotArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppInstanceBotCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppInstanceBotCommandInput - {@link DeleteAppInstanceBotCommandInput}
 * @returns {@link DeleteAppInstanceBotCommandOutput}
 * @see {@link DeleteAppInstanceBotCommandInput} for command's `input` shape.
 * @see {@link DeleteAppInstanceBotCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKIdentityServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKIdentity service.</p>
 *
 *
 * @public
 */
export class DeleteAppInstanceBotCommand extends $Command
  .classBuilder<
    DeleteAppInstanceBotCommandInput,
    DeleteAppInstanceBotCommandOutput,
    ChimeSDKIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKIdentityClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeIdentityService", "DeleteAppInstanceBot", {})
  .n("ChimeSDKIdentityClient", "DeleteAppInstanceBotCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAppInstanceBotCommand)
  .de(de_DeleteAppInstanceBotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppInstanceBotRequest;
      output: {};
    };
    sdk: {
      input: DeleteAppInstanceBotCommandInput;
      output: DeleteAppInstanceBotCommandOutput;
    };
  };
}
