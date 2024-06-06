// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTableOptimizerRequest, GetTableOptimizerResponse } from "../models/models_2";
import { de_GetTableOptimizerCommand, se_GetTableOptimizerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTableOptimizerCommand}.
 */
export interface GetTableOptimizerCommandInput extends GetTableOptimizerRequest {}
/**
 * @public
 *
 * The output of {@link GetTableOptimizerCommand}.
 */
export interface GetTableOptimizerCommandOutput extends GetTableOptimizerResponse, __MetadataBearer {}

/**
 * <p>Returns the configuration of all optimizers associated with a specified table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetTableOptimizerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetTableOptimizerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetTableOptimizerRequest
 *   CatalogId: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   Type: "compaction", // required
 * };
 * const command = new GetTableOptimizerCommand(input);
 * const response = await client.send(command);
 * // { // GetTableOptimizerResponse
 * //   CatalogId: "STRING_VALUE",
 * //   DatabaseName: "STRING_VALUE",
 * //   TableName: "STRING_VALUE",
 * //   TableOptimizer: { // TableOptimizer
 * //     type: "compaction",
 * //     configuration: { // TableOptimizerConfiguration
 * //       roleArn: "STRING_VALUE",
 * //       enabled: true || false,
 * //     },
 * //     lastRun: { // TableOptimizerRun
 * //       eventType: "starting" || "completed" || "failed" || "in_progress",
 * //       startTimestamp: new Date("TIMESTAMP"),
 * //       endTimestamp: new Date("TIMESTAMP"),
 * //       metrics: { // RunMetrics
 * //         NumberOfBytesCompacted: "STRING_VALUE",
 * //         NumberOfFilesCompacted: "STRING_VALUE",
 * //         NumberOfDpus: "STRING_VALUE",
 * //         JobDurationInHour: "STRING_VALUE",
 * //       },
 * //       error: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTableOptimizerCommandInput - {@link GetTableOptimizerCommandInput}
 * @returns {@link GetTableOptimizerCommandOutput}
 * @see {@link GetTableOptimizerCommandInput} for command's `input` shape.
 * @see {@link GetTableOptimizerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class GetTableOptimizerCommand extends $Command
  .classBuilder<
    GetTableOptimizerCommandInput,
    GetTableOptimizerCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "GetTableOptimizer", {})
  .n("GlueClient", "GetTableOptimizerCommand")
  .f(void 0, void 0)
  .ser(se_GetTableOptimizerCommand)
  .de(de_GetTableOptimizerCommand)
  .build() {}
