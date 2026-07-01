// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateColumnStatisticsTaskSettingsRequest,
  CreateColumnStatisticsTaskSettingsResponse,
} from "../models/models_0";
import { CreateColumnStatisticsTaskSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateColumnStatisticsTaskSettingsCommand}.
 */
export interface CreateColumnStatisticsTaskSettingsCommandInput extends CreateColumnStatisticsTaskSettingsRequest {}
/**
 * @public
 *
 * The output of {@link CreateColumnStatisticsTaskSettingsCommand}.
 */
export interface CreateColumnStatisticsTaskSettingsCommandOutput extends CreateColumnStatisticsTaskSettingsResponse, __MetadataBearer {}

/**
 * <p>Creates settings for a column statistics task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateColumnStatisticsTaskSettingsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateColumnStatisticsTaskSettingsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // CreateColumnStatisticsTaskSettingsRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   Role: "STRING_VALUE", // required
 *   Schedule: "STRING_VALUE",
 *   ColumnNameList: [ // ColumnNameList
 *     "STRING_VALUE",
 *   ],
 *   SampleSize: Number("double"),
 *   CatalogID: "STRING_VALUE",
 *   SecurityConfiguration: "STRING_VALUE",
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateColumnStatisticsTaskSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateColumnStatisticsTaskSettingsCommandInput - {@link CreateColumnStatisticsTaskSettingsCommandInput}
 * @returns {@link CreateColumnStatisticsTaskSettingsCommandOutput}
 * @see {@link CreateColumnStatisticsTaskSettingsCommandInput} for command's `input` shape.
 * @see {@link CreateColumnStatisticsTaskSettingsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link ColumnStatisticsTaskRunningException} (client fault)
 *  <p>An exception thrown when you try to start another job while running a column stats generation job.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class CreateColumnStatisticsTaskSettingsCommand extends command<CreateColumnStatisticsTaskSettingsCommandInput, CreateColumnStatisticsTaskSettingsCommandOutput>(
  _ep0,
  _mw0,
  "CreateColumnStatisticsTaskSettings",
  CreateColumnStatisticsTaskSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateColumnStatisticsTaskSettingsRequest;
      output: {};
    };
    sdk: {
      input: CreateColumnStatisticsTaskSettingsCommandInput;
      output: CreateColumnStatisticsTaskSettingsCommandOutput;
    };
  };
}
