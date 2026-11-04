// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDataSetExportTaskRequest, CreateDataSetExportTaskResponse } from "../models/models_0";
import { CreateDataSetExportTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDataSetExportTaskCommand}.
 */
export interface CreateDataSetExportTaskCommandInput extends CreateDataSetExportTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataSetExportTaskCommand}.
 */
export interface CreateDataSetExportTaskCommandOutput extends CreateDataSetExportTaskResponse, __MetadataBearer {}

/**
 * Starts a data set export task for a specific application.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, CreateDataSetExportTaskCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, CreateDataSetExportTaskCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // CreateDataSetExportTaskRequest
 *   applicationId: "STRING_VALUE", // required
 *   exportConfig: { // DataSetExportConfig Union: only one key present
 *     s3Location: "STRING_VALUE",
 *     dataSets: [ // DataSetExportList
 *       { // DataSetExportItem
 *         datasetName: "STRING_VALUE", // required
 *         externalLocation: { // ExternalLocation Union: only one key present
 *           s3Location: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 *   clientToken: "STRING_VALUE",
 *   kmsKeyId: "STRING_VALUE",
 * };
 * const command = new CreateDataSetExportTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataSetExportTaskResponse
 * //   taskId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateDataSetExportTaskCommandInput - {@link CreateDataSetExportTaskCommandInput}
 * @returns {@link CreateDataSetExportTaskCommandOutput}
 * @see {@link CreateDataSetExportTaskCommandInput} for command's `input` shape.
 * @see {@link CreateDataSetExportTaskCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The account or role doesn't have the right permissions to make the request.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The parameters provided in the request conflict with existing resources.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * One or more quotas for Amazon Web Services Mainframe Modernization exceeds the limit.
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
export class CreateDataSetExportTaskCommand extends command<CreateDataSetExportTaskCommandInput, CreateDataSetExportTaskCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataSetExportTask",
  CreateDataSetExportTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataSetExportTaskRequest;
      output: CreateDataSetExportTaskResponse;
    };
    sdk: {
      input: CreateDataSetExportTaskCommandInput;
      output: CreateDataSetExportTaskCommandOutput;
    };
  };
}
