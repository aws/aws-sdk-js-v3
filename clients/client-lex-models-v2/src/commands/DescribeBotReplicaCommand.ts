// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeBotReplicaRequest, DescribeBotReplicaResponse } from "../models/models_0";
import { DescribeBotReplica$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeBotReplicaCommand}.
 */
export interface DescribeBotReplicaCommandInput extends DescribeBotReplicaRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBotReplicaCommand}.
 */
export interface DescribeBotReplicaCommandOutput extends DescribeBotReplicaResponse, __MetadataBearer {}

/**
 * Monitors the bot replication status through the UI console.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotReplicaCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotReplicaCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeBotReplicaRequest
 *   botId: "STRING_VALUE", // required
 *   replicaRegion: "STRING_VALUE", // required
 * };
 * const command = new DescribeBotReplicaCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBotReplicaResponse
 * //   botId: "STRING_VALUE",
 * //   replicaRegion: "STRING_VALUE",
 * //   sourceRegion: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   botReplicaStatus: "Enabling" || "Enabled" || "Deleting" || "Failed",
 * //   failureReasons: [ // FailureReasons
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeBotReplicaCommandInput - {@link DescribeBotReplicaCommandInput}
 * @returns {@link DescribeBotReplicaCommandOutput}
 * @see {@link DescribeBotReplicaCommandInput} for command's `input` shape.
 * @see {@link DescribeBotReplicaCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an unexpected condition. Try your request again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * You asked to describe a resource that doesn't exist. Check the resource that you are requesting and try again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have reached a quota for your bot.
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
export class DescribeBotReplicaCommand extends command<DescribeBotReplicaCommandInput, DescribeBotReplicaCommandOutput>(
  _ep0,
  _mw0,
  "DescribeBotReplica",
  DescribeBotReplica$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBotReplicaRequest;
      output: DescribeBotReplicaResponse;
    };
    sdk: {
      input: DescribeBotReplicaCommandInput;
      output: DescribeBotReplicaCommandOutput;
    };
  };
}
