// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  UpdateColumnStatisticsTaskSettingsRequest,
  UpdateColumnStatisticsTaskSettingsResponse,
} from "../models/models_3";
import { UpdateColumnStatisticsTaskSettings } from "../schemas/schemas_3_Crawler";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateColumnStatisticsTaskSettingsCommand}.
 */
export interface UpdateColumnStatisticsTaskSettingsCommandInput extends UpdateColumnStatisticsTaskSettingsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateColumnStatisticsTaskSettingsCommand}.
 */
export interface UpdateColumnStatisticsTaskSettingsCommandOutput
  extends UpdateColumnStatisticsTaskSettingsResponse,
    __MetadataBearer {}

/**
 * <p>Updates settings for a column statistics task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateColumnStatisticsTaskSettingsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateColumnStatisticsTaskSettingsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // UpdateColumnStatisticsTaskSettingsRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   Role: "STRING_VALUE",
 *   Schedule: "STRING_VALUE",
 *   ColumnNameList: [ // ColumnNameList
 *     "STRING_VALUE",
 *   ],
 *   SampleSize: Number("double"),
 *   CatalogID: "STRING_VALUE",
 *   SecurityConfiguration: "STRING_VALUE",
 * };
 * const command = new UpdateColumnStatisticsTaskSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateColumnStatisticsTaskSettingsCommandInput - {@link UpdateColumnStatisticsTaskSettingsCommandInput}
 * @returns {@link UpdateColumnStatisticsTaskSettingsCommandOutput}
 * @see {@link UpdateColumnStatisticsTaskSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateColumnStatisticsTaskSettingsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link VersionMismatchException} (client fault)
 *  <p>There was a version conflict.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class UpdateColumnStatisticsTaskSettingsCommand extends $Command
  .classBuilder<
    UpdateColumnStatisticsTaskSettingsCommandInput,
    UpdateColumnStatisticsTaskSettingsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "UpdateColumnStatisticsTaskSettings", {})
  .n("GlueClient", "UpdateColumnStatisticsTaskSettingsCommand")
  .sc(UpdateColumnStatisticsTaskSettings)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateColumnStatisticsTaskSettingsRequest;
      output: {};
    };
    sdk: {
      input: UpdateColumnStatisticsTaskSettingsCommandInput;
      output: UpdateColumnStatisticsTaskSettingsCommandOutput;
    };
  };
}
