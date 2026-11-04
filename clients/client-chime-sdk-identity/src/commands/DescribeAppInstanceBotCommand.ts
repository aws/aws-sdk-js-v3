// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAppInstanceBotRequest, DescribeAppInstanceBotResponse } from "../models/models_0";
import { DescribeAppInstanceBot$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * The `AppInstanceBot's` information.
 *
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeSDKIdentityServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKIdentity service.
 *
 * @public
 */
export class DescribeAppInstanceBotCommand extends command<DescribeAppInstanceBotCommandInput, DescribeAppInstanceBotCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAppInstanceBot",
  DescribeAppInstanceBot$
) {
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
