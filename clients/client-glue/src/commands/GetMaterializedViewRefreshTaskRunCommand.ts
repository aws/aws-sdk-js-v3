// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type {
  GetMaterializedViewRefreshTaskRunRequest,
  GetMaterializedViewRefreshTaskRunResponse,
} from "../models/models_1";
import { GetMaterializedViewRefreshTaskRun$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMaterializedViewRefreshTaskRunCommand}.
 */
export interface GetMaterializedViewRefreshTaskRunCommandInput extends GetMaterializedViewRefreshTaskRunRequest {}
/**
 * @public
 *
 * The output of {@link GetMaterializedViewRefreshTaskRunCommand}.
 */
export interface GetMaterializedViewRefreshTaskRunCommandOutput extends GetMaterializedViewRefreshTaskRunResponse, __MetadataBearer {}

/**
 * <p>Get the associated metadata/information for a task run, given a task run ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMaterializedViewRefreshTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMaterializedViewRefreshTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetMaterializedViewRefreshTaskRunRequest
 *   CatalogId: "STRING_VALUE", // required
 *   MaterializedViewRefreshTaskRunId: "STRING_VALUE", // required
 * };
 * const command = new GetMaterializedViewRefreshTaskRunCommand(input);
 * const response = await client.send(command);
 * // { // GetMaterializedViewRefreshTaskRunResponse
 * //   MaterializedViewRefreshTaskRun: { // MaterializedViewRefreshTaskRun
 * //     CustomerId: "STRING_VALUE",
 * //     MaterializedViewRefreshTaskRunId: "STRING_VALUE",
 * //     DatabaseName: "STRING_VALUE",
 * //     TableName: "STRING_VALUE",
 * //     CatalogId: "STRING_VALUE",
 * //     Role: "STRING_VALUE",
 * //     Status: "STARTING" || "RUNNING" || "SUCCEEDED" || "FAILED" || "STOPPED",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     ErrorMessage: "STRING_VALUE",
 * //     DPUSeconds: Number("double"),
 * //     RefreshType: "FULL" || "INCREMENTAL",
 * //     ProcessedBytes: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMaterializedViewRefreshTaskRunCommandInput - {@link GetMaterializedViewRefreshTaskRunCommandInput}
 * @returns {@link GetMaterializedViewRefreshTaskRunCommandOutput}
 * @see {@link GetMaterializedViewRefreshTaskRunCommandInput} for command's `input` shape.
 * @see {@link GetMaterializedViewRefreshTaskRunCommandOutput} for command's `response` shape.
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
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class GetMaterializedViewRefreshTaskRunCommand extends $Command
  .classBuilder<
    GetMaterializedViewRefreshTaskRunCommandInput,
    GetMaterializedViewRefreshTaskRunCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "GetMaterializedViewRefreshTaskRun", {})
  .n("GlueClient", "GetMaterializedViewRefreshTaskRunCommand")
  .sc(GetMaterializedViewRefreshTaskRun$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMaterializedViewRefreshTaskRunRequest;
      output: GetMaterializedViewRefreshTaskRunResponse;
    };
    sdk: {
      input: GetMaterializedViewRefreshTaskRunCommandInput;
      output: GetMaterializedViewRefreshTaskRunCommandOutput;
    };
  };
}
