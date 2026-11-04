// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateColumnStatisticsTaskSettingsRequest,
  UpdateColumnStatisticsTaskSettingsResponse,
} from "../models/models_3";
import { UpdateColumnStatisticsTaskSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface UpdateColumnStatisticsTaskSettingsCommandOutput extends UpdateColumnStatisticsTaskSettingsResponse, __MetadataBearer {}

/**
 * Updates settings for a column statistics task.
 *
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
 *
 * Access to a resource was denied.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link VersionMismatchException} (client fault)
 *
 * There was a version conflict.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class UpdateColumnStatisticsTaskSettingsCommand extends command<UpdateColumnStatisticsTaskSettingsCommandInput, UpdateColumnStatisticsTaskSettingsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateColumnStatisticsTaskSettings",
  UpdateColumnStatisticsTaskSettings$
) {
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
