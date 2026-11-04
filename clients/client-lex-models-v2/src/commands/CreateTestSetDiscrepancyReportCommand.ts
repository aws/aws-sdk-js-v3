// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTestSetDiscrepancyReportRequest, CreateTestSetDiscrepancyReportResponse } from "../models/models_0";
import { CreateTestSetDiscrepancyReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTestSetDiscrepancyReportCommand}.
 */
export interface CreateTestSetDiscrepancyReportCommandInput extends CreateTestSetDiscrepancyReportRequest {}
/**
 * @public
 *
 * The output of {@link CreateTestSetDiscrepancyReportCommand}.
 */
export interface CreateTestSetDiscrepancyReportCommandOutput extends CreateTestSetDiscrepancyReportResponse, __MetadataBearer {}

/**
 * Create a report that describes the differences between the bot and the test set.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateTestSetDiscrepancyReportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateTestSetDiscrepancyReportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // CreateTestSetDiscrepancyReportRequest
 *   testSetId: "STRING_VALUE", // required
 *   target: { // TestSetDiscrepancyReportResourceTarget
 *     botAliasTarget: { // TestSetDiscrepancyReportBotAliasTarget
 *       botId: "STRING_VALUE", // required
 *       botAliasId: "STRING_VALUE", // required
 *       localeId: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateTestSetDiscrepancyReportCommand(input);
 * const response = await client.send(command);
 * // { // CreateTestSetDiscrepancyReportResponse
 * //   testSetDiscrepancyReportId: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   testSetId: "STRING_VALUE",
 * //   target: { // TestSetDiscrepancyReportResourceTarget
 * //     botAliasTarget: { // TestSetDiscrepancyReportBotAliasTarget
 * //       botId: "STRING_VALUE", // required
 * //       botAliasId: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateTestSetDiscrepancyReportCommandInput - {@link CreateTestSetDiscrepancyReportCommandInput}
 * @returns {@link CreateTestSetDiscrepancyReportCommandOutput}
 * @see {@link CreateTestSetDiscrepancyReportCommandInput} for command's `input` shape.
 * @see {@link CreateTestSetDiscrepancyReportCommandOutput} for command's `response` shape.
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
export class CreateTestSetDiscrepancyReportCommand extends command<CreateTestSetDiscrepancyReportCommandInput, CreateTestSetDiscrepancyReportCommandOutput>(
  _ep0,
  _mw0,
  "CreateTestSetDiscrepancyReport",
  CreateTestSetDiscrepancyReport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTestSetDiscrepancyReportRequest;
      output: CreateTestSetDiscrepancyReportResponse;
    };
    sdk: {
      input: CreateTestSetDiscrepancyReportCommandInput;
      output: CreateTestSetDiscrepancyReportCommandOutput;
    };
  };
}
