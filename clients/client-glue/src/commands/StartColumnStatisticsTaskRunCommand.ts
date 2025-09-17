// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartColumnStatisticsTaskRunRequest, StartColumnStatisticsTaskRunResponse } from "../models/models_3";
import {
  de_StartColumnStatisticsTaskRunCommand,
  se_StartColumnStatisticsTaskRunCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartColumnStatisticsTaskRunCommand}.
 */
export interface StartColumnStatisticsTaskRunCommandInput extends StartColumnStatisticsTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link StartColumnStatisticsTaskRunCommand}.
 */
export interface StartColumnStatisticsTaskRunCommandOutput
  extends StartColumnStatisticsTaskRunResponse,
    __MetadataBearer {}

/**
 * <p>Starts a column statistics task run, for a specified table and columns.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartColumnStatisticsTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartColumnStatisticsTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // StartColumnStatisticsTaskRunRequest
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   ColumnNameList: [ // ColumnNameList
 *     "STRING_VALUE",
 *   ],
 *   Role: "STRING_VALUE", // required
 *   SampleSize: Number("double"),
 *   CatalogID: "STRING_VALUE",
 *   SecurityConfiguration: "STRING_VALUE",
 * };
 * const command = new StartColumnStatisticsTaskRunCommand(input);
 * const response = await client.send(command);
 * // { // StartColumnStatisticsTaskRunResponse
 * //   ColumnStatisticsTaskRunId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartColumnStatisticsTaskRunCommandInput - {@link StartColumnStatisticsTaskRunCommandInput}
 * @returns {@link StartColumnStatisticsTaskRunCommandOutput}
 * @see {@link StartColumnStatisticsTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartColumnStatisticsTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
export class StartColumnStatisticsTaskRunCommand extends $Command
  .classBuilder<
    StartColumnStatisticsTaskRunCommandInput,
    StartColumnStatisticsTaskRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "StartColumnStatisticsTaskRun", {})
  .n("GlueClient", "StartColumnStatisticsTaskRunCommand")
  .f(void 0, void 0)
  .ser(se_StartColumnStatisticsTaskRunCommand)
  .de(de_StartColumnStatisticsTaskRunCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartColumnStatisticsTaskRunRequest;
      output: StartColumnStatisticsTaskRunResponse;
    };
    sdk: {
      input: StartColumnStatisticsTaskRunCommandInput;
      output: StartColumnStatisticsTaskRunCommandOutput;
    };
  };
}
