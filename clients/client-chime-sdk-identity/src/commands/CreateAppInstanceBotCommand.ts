// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAppInstanceBotRequest, CreateAppInstanceBotResponse } from "../models/models_0";
import { CreateAppInstanceBot } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAppInstanceBotCommand}.
 */
export interface CreateAppInstanceBotCommandInput extends CreateAppInstanceBotRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppInstanceBotCommand}.
 */
export interface CreateAppInstanceBotCommandOutput extends CreateAppInstanceBotResponse, __MetadataBearer {}

/**
 * <p>Creates a bot under an Amazon Chime <code>AppInstance</code>. The request consists of a
 *          unique <code>Configuration</code> and <code>Name</code> for that bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, CreateAppInstanceBotCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, CreateAppInstanceBotCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // CreateAppInstanceBotRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Metadata: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
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
 * const command = new CreateAppInstanceBotCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppInstanceBotResponse
 * //   AppInstanceBotArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateAppInstanceBotCommandInput - {@link CreateAppInstanceBotCommandInput}
 * @returns {@link CreateAppInstanceBotCommandOutput}
 * @see {@link CreateAppInstanceBotCommandInput} for command's `input` shape.
 * @see {@link CreateAppInstanceBotCommandOutput} for command's `response` shape.
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
export class CreateAppInstanceBotCommand extends $Command
  .classBuilder<
    CreateAppInstanceBotCommandInput,
    CreateAppInstanceBotCommandOutput,
    ChimeSDKIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKIdentityClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeIdentityService", "CreateAppInstanceBot", {})
  .n("ChimeSDKIdentityClient", "CreateAppInstanceBotCommand")
  .sc(CreateAppInstanceBot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAppInstanceBotRequest;
      output: CreateAppInstanceBotResponse;
    };
    sdk: {
      input: CreateAppInstanceBotCommandInput;
      output: CreateAppInstanceBotCommandOutput;
    };
  };
}
