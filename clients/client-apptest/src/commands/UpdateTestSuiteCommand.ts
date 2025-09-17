// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppTestClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppTestClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTestSuiteRequest, UpdateTestSuiteResponse } from "../models/models_0";
import { de_UpdateTestSuiteCommand, se_UpdateTestSuiteCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTestSuiteCommand}.
 */
export interface UpdateTestSuiteCommandInput extends UpdateTestSuiteRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTestSuiteCommand}.
 */
export interface UpdateTestSuiteCommandOutput extends UpdateTestSuiteResponse, __MetadataBearer {}

/**
 * <p>Updates a test suite.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppTestClient, UpdateTestSuiteCommand } from "@aws-sdk/client-apptest"; // ES Modules import
 * // const { AppTestClient, UpdateTestSuiteCommand } = require("@aws-sdk/client-apptest"); // CommonJS import
 * // import type { AppTestClientConfig } from "@aws-sdk/client-apptest";
 * const config = {}; // type is AppTestClientConfig
 * const client = new AppTestClient(config);
 * const input = { // UpdateTestSuiteRequest
 *   testSuiteId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   beforeSteps: [ // StepList
 *     { // Step
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       action: { // StepAction Union: only one key present
 *         resourceAction: { // ResourceAction Union: only one key present
 *           m2ManagedApplicationAction: { // M2ManagedApplicationAction
 *             resource: "STRING_VALUE", // required
 *             actionType: "Configure" || "Deconfigure", // required
 *             properties: { // M2ManagedActionProperties
 *               forceStop: true || false,
 *               importDataSetLocation: "STRING_VALUE",
 *             },
 *           },
 *           m2NonManagedApplicationAction: { // M2NonManagedApplicationAction
 *             resource: "STRING_VALUE", // required
 *             actionType: "Configure" || "Deconfigure", // required
 *           },
 *           cloudFormationAction: { // CloudFormationAction
 *             resource: "STRING_VALUE", // required
 *             actionType: "Create" || "Delete",
 *           },
 *         },
 *         mainframeAction: { // MainframeAction
 *           resource: "STRING_VALUE", // required
 *           actionType: { // MainframeActionType Union: only one key present
 *             batch: { // Batch
 *               batchJobName: "STRING_VALUE", // required
 *               batchJobParameters: { // BatchJobParameters
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               exportDataSetNames: [ // ExportDataSetNames
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             tn3270: { // TN3270
 *               script: { // Script
 *                 scriptLocation: "STRING_VALUE", // required
 *                 type: "Selenium", // required
 *               },
 *               exportDataSetNames: [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           },
 *           properties: { // MainframeActionProperties
 *             dmsTaskArn: "STRING_VALUE",
 *           },
 *         },
 *         compareAction: { // CompareAction
 *           input: { // Input Union: only one key present
 *             file: { // InputFile
 *               sourceLocation: "STRING_VALUE", // required
 *               targetLocation: "STRING_VALUE", // required
 *               fileMetadata: { // FileMetadata Union: only one key present
 *                 dataSets: [ // DataSetList
 *                   { // DataSet
 *                     type: "PS", // required
 *                     name: "STRING_VALUE", // required
 *                     ccsid: "STRING_VALUE", // required
 *                     format: "FIXED" || "VARIABLE" || "LINE_SEQUENTIAL", // required
 *                     length: Number("int"), // required
 *                   },
 *                 ],
 *                 databaseCDC: { // DatabaseCDC
 *                   sourceMetadata: { // SourceDatabaseMetadata
 *                     type: "z/OS-DB2", // required
 *                     captureTool: "Precisely" || "AWS DMS", // required
 *                   },
 *                   targetMetadata: { // TargetDatabaseMetadata
 *                     type: "PostgreSQL", // required
 *                     captureTool: "Precisely" || "AWS DMS", // required
 *                   },
 *                 },
 *               },
 *             },
 *           },
 *           output: { // Output Union: only one key present
 *             file: { // OutputFile
 *               fileLocation: "STRING_VALUE",
 *             },
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   afterSteps: [
 *     {
 *       name: "STRING_VALUE", // required
 *       description: "STRING_VALUE",
 *       action: {//  Union: only one key present
 *         resourceAction: {//  Union: only one key present
 *           m2ManagedApplicationAction: {
 *             resource: "STRING_VALUE", // required
 *             actionType: "Configure" || "Deconfigure", // required
 *             properties: {
 *               forceStop: true || false,
 *               importDataSetLocation: "STRING_VALUE",
 *             },
 *           },
 *           m2NonManagedApplicationAction: {
 *             resource: "STRING_VALUE", // required
 *             actionType: "Configure" || "Deconfigure", // required
 *           },
 *           cloudFormationAction: {
 *             resource: "STRING_VALUE", // required
 *             actionType: "Create" || "Delete",
 *           },
 *         },
 *         mainframeAction: {
 *           resource: "STRING_VALUE", // required
 *           actionType: {//  Union: only one key present
 *             batch: {
 *               batchJobName: "STRING_VALUE", // required
 *               batchJobParameters: {
 *                 "<keys>": "STRING_VALUE",
 *               },
 *               exportDataSetNames: [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             tn3270: {
 *               script: {
 *                 scriptLocation: "STRING_VALUE", // required
 *                 type: "Selenium", // required
 *               },
 *               exportDataSetNames: [
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           },
 *           properties: {
 *             dmsTaskArn: "STRING_VALUE",
 *           },
 *         },
 *         compareAction: {
 *           input: {//  Union: only one key present
 *             file: {
 *               sourceLocation: "STRING_VALUE", // required
 *               targetLocation: "STRING_VALUE", // required
 *               fileMetadata: {//  Union: only one key present
 *                 dataSets: [
 *                   {
 *                     type: "PS", // required
 *                     name: "STRING_VALUE", // required
 *                     ccsid: "STRING_VALUE", // required
 *                     format: "FIXED" || "VARIABLE" || "LINE_SEQUENTIAL", // required
 *                     length: Number("int"), // required
 *                   },
 *                 ],
 *                 databaseCDC: {
 *                   sourceMetadata: {
 *                     type: "z/OS-DB2", // required
 *                     captureTool: "Precisely" || "AWS DMS", // required
 *                   },
 *                   targetMetadata: {
 *                     type: "PostgreSQL", // required
 *                     captureTool: "Precisely" || "AWS DMS", // required
 *                   },
 *                 },
 *               },
 *             },
 *           },
 *           output: {//  Union: only one key present
 *             file: {
 *               fileLocation: "STRING_VALUE",
 *             },
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   testCases: { // TestCases Union: only one key present
 *     sequential: [ // TestCaseList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateTestSuiteCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTestSuiteResponse
 * //   testSuiteId: "STRING_VALUE", // required
 * //   testSuiteVersion: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateTestSuiteCommandInput - {@link UpdateTestSuiteCommandInput}
 * @returns {@link UpdateTestSuiteCommandOutput}
 * @see {@link UpdateTestSuiteCommandInput} for command's `input` shape.
 * @see {@link UpdateTestSuiteCommandOutput} for command's `response` shape.
 * @see {@link AppTestClientResolvedConfig | config} for AppTestClient's `config` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests made exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One or more parameter provided in the request is not valid.</p>
 *
 * @throws {@link AppTestServiceException}
 * <p>Base exception class for all service exceptions from AppTest service.</p>
 *
 *
 * @public
 */
export class UpdateTestSuiteCommand extends $Command
  .classBuilder<
    UpdateTestSuiteCommandInput,
    UpdateTestSuiteCommandOutput,
    AppTestClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppTestClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsApptestControlPlaneService", "UpdateTestSuite", {})
  .n("AppTestClient", "UpdateTestSuiteCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTestSuiteCommand)
  .de(de_UpdateTestSuiteCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTestSuiteRequest;
      output: UpdateTestSuiteResponse;
    };
    sdk: {
      input: UpdateTestSuiteCommandInput;
      output: UpdateTestSuiteCommandOutput;
    };
  };
}
