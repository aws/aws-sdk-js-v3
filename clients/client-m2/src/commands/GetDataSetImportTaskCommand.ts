// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { GetDataSetImportTaskRequest, GetDataSetImportTaskResponse } from "../models/models_0";
import { GetDataSetImportTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataSetImportTaskCommand}.
 */
export interface GetDataSetImportTaskCommandInput extends GetDataSetImportTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetDataSetImportTaskCommand}.
 */
export interface GetDataSetImportTaskCommandOutput extends GetDataSetImportTaskResponse, __MetadataBearer {}

/**
 * <p>Gets the status of a data set import task initiated with the <a>CreateDataSetImportTask</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, GetDataSetImportTaskCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, GetDataSetImportTaskCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // GetDataSetImportTaskRequest
 *   applicationId: "STRING_VALUE", // required
 *   taskId: "STRING_VALUE", // required
 * };
 * const command = new GetDataSetImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetDataSetImportTaskResponse
 * //   taskId: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   summary: { // DataSetImportSummary
 * //     total: Number("int"), // required
 * //     succeeded: Number("int"), // required
 * //     failed: Number("int"), // required
 * //     pending: Number("int"), // required
 * //     inProgress: Number("int"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataSetImportTaskCommandInput - {@link GetDataSetImportTaskCommandInput}
 * @returns {@link GetDataSetImportTaskCommandOutput}
 * @see {@link GetDataSetImportTaskCommandInput} for command's `input` shape.
 * @see {@link GetDataSetImportTaskCommandOutput} for command's `response` shape.
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
export class GetDataSetImportTaskCommand extends $Command
  .classBuilder<
    GetDataSetImportTaskCommandInput,
    GetDataSetImportTaskCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsSupernovaControlPlaneService", "GetDataSetImportTask", {})
  .n("M2Client", "GetDataSetImportTaskCommand")
  .sc(GetDataSetImportTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataSetImportTaskRequest;
      output: GetDataSetImportTaskResponse;
    };
    sdk: {
      input: GetDataSetImportTaskCommandInput;
      output: GetDataSetImportTaskCommandOutput;
    };
  };
}
