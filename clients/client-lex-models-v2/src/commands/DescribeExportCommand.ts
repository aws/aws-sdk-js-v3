// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeExportRequest, DescribeExportResponse } from "../models/models_1";
import { de_DescribeExportCommand, se_DescribeExportCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeExportCommand}.
 */
export interface DescribeExportCommandInput extends DescribeExportRequest {}
/**
 * @public
 *
 * The output of {@link DescribeExportCommand}.
 */
export interface DescribeExportCommandOutput extends DescribeExportResponse, __MetadataBearer {}

/**
 * <p>Gets information about a specific export.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeExportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeExportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeExportRequest
 *   exportId: "STRING_VALUE", // required
 * };
 * const command = new DescribeExportCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExportResponse
 * //   exportId: "STRING_VALUE",
 * //   resourceSpecification: { // ExportResourceSpecification
 * //     botExportSpecification: { // BotExportSpecification
 * //       botId: "STRING_VALUE", // required
 * //       botVersion: "STRING_VALUE", // required
 * //     },
 * //     botLocaleExportSpecification: { // BotLocaleExportSpecification
 * //       botId: "STRING_VALUE", // required
 * //       botVersion: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //     },
 * //     customVocabularyExportSpecification: { // CustomVocabularyExportSpecification
 * //       botId: "STRING_VALUE", // required
 * //       botVersion: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //     },
 * //     testSetExportSpecification: { // TestSetExportSpecification
 * //       testSetId: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   fileFormat: "LexJson" || "TSV" || "CSV",
 * //   exportStatus: "InProgress" || "Completed" || "Failed" || "Deleting",
 * //   failureReasons: [ // FailureReasons
 * //     "STRING_VALUE",
 * //   ],
 * //   downloadUrl: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeExportCommandInput - {@link DescribeExportCommandInput}
 * @returns {@link DescribeExportCommandOutput}
 * @see {@link DescribeExportCommandInput} for command's `input` shape.
 * @see {@link DescribeExportCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
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
export class DescribeExportCommand extends $Command
  .classBuilder<
    DescribeExportCommandInput,
    DescribeExportCommandOutput,
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
  .s("LexModelBuildingServiceV2", "DescribeExport", {})
  .n("LexModelsV2Client", "DescribeExportCommand")
  .f(void 0, void 0)
  .ser(se_DescribeExportCommand)
  .de(de_DescribeExportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeExportRequest;
      output: DescribeExportResponse;
    };
    sdk: {
      input: DescribeExportCommandInput;
      output: DescribeExportCommandOutput;
    };
  };
}
