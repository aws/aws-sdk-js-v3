// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeAppInstanceBotRequest,
  DescribeAppInstanceBotResponse,
  DescribeAppInstanceBotResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeAppInstanceBotCommand, se_DescribeAppInstanceBotCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppInstanceBotCommand}.
 */
export interface DescribeAppInstanceBotCommandInput extends DescribeAppInstanceBotRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppInstanceBotCommand}.
 */
export interface DescribeAppInstanceBotCommandOutput extends DescribeAppInstanceBotResponse, __MetadataBearer {}

/**
 * <p>The <code>AppInstanceBot's</code> information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, DescribeAppInstanceBotCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, DescribeAppInstanceBotCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // DescribeAppInstanceBotRequest
 *   AppInstanceBotArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppInstanceBotCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppInstanceBotResponse
 * //   AppInstanceBot: { // AppInstanceBot
 * //     AppInstanceBotArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Configuration: { // Configuration
 * //       Lex: { // LexConfiguration
 * //         RespondsTo: "STANDARD_MESSAGES",
 * //         InvokedBy: { // InvokedBy
 * //           StandardMessages: "AUTO" || "ALL" || "MENTIONS" || "NONE", // required
 * //           TargetedMessages: "ALL" || "NONE", // required
 * //         },
 * //         LexBotAliasArn: "STRING_VALUE", // required
 * //         LocaleId: "STRING_VALUE", // required
 * //         WelcomeIntent: "STRING_VALUE",
 * //       },
 * //     },
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     Metadata: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppInstanceBotCommandInput - {@link DescribeAppInstanceBotCommandInput}
 * @returns {@link DescribeAppInstanceBotCommandOutput}
 * @see {@link DescribeAppInstanceBotCommandInput} for command's `input` shape.
 * @see {@link DescribeAppInstanceBotCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
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
export class DescribeAppInstanceBotCommand extends $Command
  .classBuilder<
    DescribeAppInstanceBotCommandInput,
    DescribeAppInstanceBotCommandOutput,
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
  .s("ChimeIdentityService", "DescribeAppInstanceBot", {})
  .n("ChimeSDKIdentityClient", "DescribeAppInstanceBotCommand")
  .f(void 0, DescribeAppInstanceBotResponseFilterSensitiveLog)
  .ser(se_DescribeAppInstanceBotCommand)
  .de(de_DescribeAppInstanceBotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppInstanceBotRequest;
      output: DescribeAppInstanceBotResponse;
    };
    sdk: {
      input: DescribeAppInstanceBotCommandInput;
      output: DescribeAppInstanceBotCommandOutput;
    };
  };
}
