// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateAppInstanceBotRequest,
  UpdateAppInstanceBotRequestFilterSensitiveLog,
  UpdateAppInstanceBotResponse,
} from "../models/models_0";
import { de_UpdateAppInstanceBotCommand, se_UpdateAppInstanceBotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAppInstanceBotCommand}.
 */
export interface UpdateAppInstanceBotCommandInput extends UpdateAppInstanceBotRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppInstanceBotCommand}.
 */
export interface UpdateAppInstanceBotCommandOutput extends UpdateAppInstanceBotResponse, __MetadataBearer {}

/**
 * <p>Updates the name and metadata of an <code>AppInstanceBot</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, UpdateAppInstanceBotCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, UpdateAppInstanceBotCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // UpdateAppInstanceBotRequest
 *   AppInstanceBotArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Metadata: "STRING_VALUE", // required
 *   Configuration: { // Configuration
 *     Lex: { // LexConfiguration
 *       RespondsTo: "STANDARD_MESSAGES",
 *       InvokedBy: { // InvokedBy
 *         StandardMessages: "AUTO" || "ALL" || "MENTIONS" || "NONE", // required
 *         TargetedMessages: "ALL" || "NONE", // required
 *       },
 *       LexBotAliasArn: "STRING_VALUE", // required
 *       LocaleId: "STRING_VALUE", // required
 *       WelcomeIntent: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateAppInstanceBotCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAppInstanceBotResponse
 * //   AppInstanceBotArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateAppInstanceBotCommandInput - {@link UpdateAppInstanceBotCommandInput}
 * @returns {@link UpdateAppInstanceBotCommandOutput}
 * @see {@link UpdateAppInstanceBotCommandInput} for command's `input` shape.
 * @see {@link UpdateAppInstanceBotCommandOutput} for command's `response` shape.
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
export class UpdateAppInstanceBotCommand extends $Command
  .classBuilder<
    UpdateAppInstanceBotCommandInput,
    UpdateAppInstanceBotCommandOutput,
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
  .s("ChimeIdentityService", "UpdateAppInstanceBot", {})
  .n("ChimeSDKIdentityClient", "UpdateAppInstanceBotCommand")
  .f(UpdateAppInstanceBotRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateAppInstanceBotCommand)
  .de(de_UpdateAppInstanceBotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAppInstanceBotRequest;
      output: UpdateAppInstanceBotResponse;
    };
    sdk: {
      input: UpdateAppInstanceBotCommandInput;
      output: UpdateAppInstanceBotCommandOutput;
    };
  };
}
