// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import { CreateDataSetImportTaskRequest, CreateDataSetImportTaskResponse } from "../models/models_0";
import { CreateDataSetImportTask } from "../schemas/schemas_1_Batch";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataSetImportTaskCommand}.
 */
export interface CreateDataSetImportTaskCommandInput extends CreateDataSetImportTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataSetImportTaskCommand}.
 */
export interface CreateDataSetImportTaskCommandOutput extends CreateDataSetImportTaskResponse, __MetadataBearer {}

/**
 * <p>Starts a data set import task for a specific application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, CreateDataSetImportTaskCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, CreateDataSetImportTaskCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * // import type { M2ClientConfig } from "@aws-sdk/client-m2";
 * const config = {}; // type is M2ClientConfig
 * const client = new M2Client(config);
 * const input = { // CreateDataSetImportTaskRequest
 *   applicationId: "STRING_VALUE", // required
 *   importConfig: { // DataSetImportConfig Union: only one key present
 *     s3Location: "STRING_VALUE",
 *     dataSets: [ // DataSetImportList
 *       { // DataSetImportItem
 *         dataSet: { // DataSet
 *           storageType: "STRING_VALUE",
 *           datasetName: "STRING_VALUE", // required
 *           datasetOrg: { // DatasetOrgAttributes Union: only one key present
 *             vsam: { // VsamAttributes
 *               format: "STRING_VALUE", // required
 *               encoding: "STRING_VALUE",
 *               compressed: true || false,
 *               primaryKey: { // PrimaryKey
 *                 name: "STRING_VALUE",
 *                 offset: Number("int"), // required
 *                 length: Number("int"), // required
 *               },
 *               alternateKeys: [ // AlternateKeyList
 *                 { // AlternateKey
 *                   name: "STRING_VALUE",
 *                   offset: Number("int"), // required
 *                   length: Number("int"), // required
 *                   allowDuplicates: true || false,
 *                 },
 *               ],
 *             },
 *             gdg: { // GdgAttributes
 *               limit: Number("int"),
 *               rollDisposition: "STRING_VALUE",
 *             },
 *             po: { // PoAttributes
 *               format: "STRING_VALUE", // required
 *               encoding: "STRING_VALUE",
 *               memberFileExtensions: [ // String20List // required
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             ps: { // PsAttributes
 *               format: "STRING_VALUE", // required
 *               encoding: "STRING_VALUE",
 *             },
 *           },
 *           relativePath: "STRING_VALUE",
 *           recordLength: { // RecordLength
 *             min: Number("int"), // required
 *             max: Number("int"), // required
 *           },
 *         },
 *         externalLocation: { // ExternalLocation Union: only one key present
 *           s3Location: "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateDataSetImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataSetImportTaskResponse
 * //   taskId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateDataSetImportTaskCommandInput - {@link CreateDataSetImportTaskCommandInput}
 * @returns {@link CreateDataSetImportTaskCommandOutput}
 * @see {@link CreateDataSetImportTaskCommandInput} for command's `input` shape.
 * @see {@link CreateDataSetImportTaskCommandOutput} for command's `response` shape.
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
export class CreateDataSetImportTaskCommand extends $Command
  .classBuilder<
    CreateDataSetImportTaskCommandInput,
    CreateDataSetImportTaskCommandOutput,
    M2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: M2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsSupernovaControlPlaneService", "CreateDataSetImportTask", {})
  .n("M2Client", "CreateDataSetImportTaskCommand")
  .sc(CreateDataSetImportTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataSetImportTaskRequest;
      output: CreateDataSetImportTaskResponse;
    };
    sdk: {
      input: CreateDataSetImportTaskCommandInput;
      output: CreateDataSetImportTaskCommandOutput;
    };
  };
}
