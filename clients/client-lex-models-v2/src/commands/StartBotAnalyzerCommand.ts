// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartBotAnalyzerRequest, StartBotAnalyzerResponse } from "../models/models_1";
import { StartBotAnalyzer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartBotAnalyzerCommand}.
 */
export interface StartBotAnalyzerCommandInput extends StartBotAnalyzerRequest {}
/**
 * @public
 *
 * The output of {@link StartBotAnalyzerCommand}.
 */
export interface StartBotAnalyzerCommandOutput extends StartBotAnalyzerResponse, __MetadataBearer {}

/**
 * Initiates an asynchronous analysis of your bot configuration using AI-powered analysis to identify potential issues and recommend improvements based on AWS best practices.
 *
 * The analysis examines your bot's configuration, including intents, utterances, slots, and conversation flows, to provide actionable recommendations for optimization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, StartBotAnalyzerCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, StartBotAnalyzerCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // StartBotAnalyzerRequest
 *   botId: "STRING_VALUE", // required
 *   analysisScope: "BotLocale", // required
 *   localeId: "STRING_VALUE",
 *   botVersion: "STRING_VALUE",
 * };
 * const command = new StartBotAnalyzerCommand(input);
 * const response = await client.send(command);
 * // { // StartBotAnalyzerResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   botAnalyzerStatus: "Processing" || "Available" || "Failed" || "Stopping" || "Stopped",
 * //   botAnalyzerRequestId: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartBotAnalyzerCommandInput - {@link StartBotAnalyzerCommandInput}
 * @returns {@link StartBotAnalyzerCommandOutput}
 * @see {@link StartBotAnalyzerCommandInput} for command's `input` shape.
 * @see {@link StartBotAnalyzerCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The action that you tried to perform couldn't be completed because the resource is in a conflicting state. For example, deleting a bot that is in the CREATING state. Try your request again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an unexpected condition. Try your request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * You asked to describe a resource that doesn't exist. Check the resource that you are requesting and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request rate is too high. Reduce the frequency of requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the input parameters in your request isn't valid. Check the parameters and try your request again.
 *
 * @throws {@link LexModelsV2ServiceException}
 *
 * Base exception class for all service exceptions from LexModelsV2 service.
 *
 * @public
 */
export class StartBotAnalyzerCommand extends command<StartBotAnalyzerCommandInput, StartBotAnalyzerCommandOutput>(
  _ep0,
  _mw0,
  "StartBotAnalyzer",
  StartBotAnalyzer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartBotAnalyzerRequest;
      output: StartBotAnalyzerResponse;
    };
    sdk: {
      input: StartBotAnalyzerCommandInput;
      output: StartBotAnalyzerCommandOutput;
    };
  };
}
