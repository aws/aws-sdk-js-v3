// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { CreateTestSetDiscrepancyReportRequest, CreateTestSetDiscrepancyReportResponse } from "../models/models_0";
import {
  de_CreateTestSetDiscrepancyReportCommand,
  se_CreateTestSetDiscrepancyReportCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface CreateTestSetDiscrepancyReportCommandOutput
  extends CreateTestSetDiscrepancyReportResponse,
    __MetadataBearer {}

/**
 * <p>Create a report that describes the differences between the bot and the test set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateTestSetDiscrepancyReportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateTestSetDiscrepancyReportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
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
 *  <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 *
 * @public
 */
export class CreateTestSetDiscrepancyReportCommand extends $Command
  .classBuilder<
    CreateTestSetDiscrepancyReportCommandInput,
    CreateTestSetDiscrepancyReportCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LexModelBuildingServiceV2", "CreateTestSetDiscrepancyReport", {})
  .n("LexModelsV2Client", "CreateTestSetDiscrepancyReportCommand")
  .f(void 0, void 0)
  .ser(se_CreateTestSetDiscrepancyReportCommand)
  .de(de_CreateTestSetDiscrepancyReportCommand)
  .build() {
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
