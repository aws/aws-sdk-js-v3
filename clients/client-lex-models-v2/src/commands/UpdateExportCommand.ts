// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { UpdateExportRequest, UpdateExportResponse } from "../models/models_1";
import { UpdateExport } from "../schemas/schemas_7_Export";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateExportCommand}.
 */
export interface UpdateExportCommandInput extends UpdateExportRequest {}
/**
 * @public
 *
 * The output of {@link UpdateExportCommand}.
 */
export interface UpdateExportCommandOutput extends UpdateExportResponse, __MetadataBearer {}

/**
 * <p>Updates the password used to protect an export zip archive.</p>
 *          <p>The password is not required. If you don't supply a password, Amazon Lex
 *          generates a zip file that is not protected by a password. This is the
 *          archive that is available at the pre-signed S3 URL provided by the
 *             <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_DescribeExport.html">DescribeExport</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, UpdateExportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, UpdateExportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // UpdateExportRequest
 *   exportId: "STRING_VALUE", // required
 *   filePassword: "STRING_VALUE",
 * };
 * const command = new UpdateExportCommand(input);
 * const response = await client.send(command);
 * // { // UpdateExportResponse
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
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateExportCommandInput - {@link UpdateExportCommandInput}
 * @returns {@link UpdateExportCommandOutput}
 * @see {@link UpdateExportCommandInput} for command's `input` shape.
 * @see {@link UpdateExportCommandOutput} for command's `response` shape.
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
export class UpdateExportCommand extends $Command
  .classBuilder<
    UpdateExportCommandInput,
    UpdateExportCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "UpdateExport", {})
  .n("LexModelsV2Client", "UpdateExportCommand")
  .sc(UpdateExport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateExportRequest;
      output: UpdateExportResponse;
    };
    sdk: {
      input: UpdateExportCommandInput;
      output: UpdateExportCommandOutput;
    };
  };
}
