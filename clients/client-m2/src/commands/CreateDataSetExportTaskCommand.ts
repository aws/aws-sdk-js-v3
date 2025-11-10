// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { CreateDataSetExportTaskRequest, CreateDataSetExportTaskResponse } from "../models/models_0";
import { CreateDataSetExportTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Starts a data set export task for a specific application.</p>
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
 *  <p>The account or role doesn't have the right permissions to make the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The parameters provided in the request conflict with existing resources.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>One or more quotas for Amazon Web Services Mainframe Modernization exceeds the limit.</p>
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
export class CreateDataSetExportTaskCommand extends $Command
  .classBuilder<
    CreateDataSetExportTaskCommandInput,
    CreateDataSetExportTaskCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsSupernovaControlPlaneService", "CreateDataSetExportTask", {})
  .n("M2Client", "CreateDataSetExportTaskCommand")
  .sc(CreateDataSetExportTask)
  .build() {
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
