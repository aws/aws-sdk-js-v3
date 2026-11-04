// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDataSetImportTaskRequest, GetDataSetImportTaskResponse } from "../models/models_0";
import { GetDataSetImportTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the status of a data set import task initiated with the CreateDataSetImportTask operation.
 *
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
 *
 * The account or role doesn't have the right permissions to make the request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests made exceeds the limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One or more parameters provided in the request is not valid.
 *
 * @throws {@link M2ServiceException}
 *
 * Base exception class for all service exceptions from M2 service.
 *
 * @public
 */
export class GetDataSetImportTaskCommand extends command<GetDataSetImportTaskCommandInput, GetDataSetImportTaskCommandOutput>(
  _ep0,
  _mw0,
  "GetDataSetImportTask",
  GetDataSetImportTask$
) {
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
