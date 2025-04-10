// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { ListDataSetExportHistoryRequest, ListDataSetExportHistoryResponse } from "../models/models_0";
import { de_ListDataSetExportHistoryCommand, se_ListDataSetExportHistoryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataSetExportHistoryCommand}.
 */
export interface ListDataSetExportHistoryCommandInput extends ListDataSetExportHistoryRequest {}
/**
 * @public
 *
 * The output of {@link ListDataSetExportHistoryCommand}.
 */
export interface ListDataSetExportHistoryCommandOutput extends ListDataSetExportHistoryResponse, __MetadataBearer {}

/**
 * <p>Lists the data set exports for the specified application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, ListDataSetExportHistoryCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, ListDataSetExportHistoryCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const input = { // ListDataSetExportHistoryRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   applicationId: "STRING_VALUE", // required
 * };
 * const command = new ListDataSetExportHistoryCommand(input);
 * const response = await client.send(command);
 * // { // ListDataSetExportHistoryResponse
 * //   dataSetExportTasks: [ // DataSetExportTaskList // required
 * //     { // DataSetExportTask
 * //       taskId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       summary: { // DataSetExportSummary
 * //         total: Number("int"), // required
 * //         succeeded: Number("int"), // required
 * //         failed: Number("int"), // required
 * //         pending: Number("int"), // required
 * //         inProgress: Number("int"), // required
 * //       },
 * //       statusReason: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataSetExportHistoryCommandInput - {@link ListDataSetExportHistoryCommandInput}
 * @returns {@link ListDataSetExportHistoryCommandOutput}
 * @see {@link ListDataSetExportHistoryCommandInput} for command's `input` shape.
 * @see {@link ListDataSetExportHistoryCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameters provided in the request is not valid.</p>
 *
 * @throws {@link M2ServiceException}
 * <p>Base exception class for all service exceptions from M2 service.</p>
 *
 *
 * @public
 */
export class ListDataSetExportHistoryCommand extends $Command
  .classBuilder<
    ListDataSetExportHistoryCommandInput,
    ListDataSetExportHistoryCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsSupernovaControlPlaneService", "ListDataSetExportHistory", {})
  .n("M2Client", "ListDataSetExportHistoryCommand")
  .f(void 0, void 0)
  .ser(se_ListDataSetExportHistoryCommand)
  .de(de_ListDataSetExportHistoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataSetExportHistoryRequest;
      output: ListDataSetExportHistoryResponse;
    };
    sdk: {
      input: ListDataSetExportHistoryCommandInput;
      output: ListDataSetExportHistoryCommandOutput;
    };
  };
}
