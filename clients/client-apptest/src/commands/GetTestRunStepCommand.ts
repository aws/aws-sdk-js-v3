// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppTestClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppTestClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetTestRunStepRequest, GetTestRunStepResponse } from "../models/models_0";
import { de_GetTestRunStepCommand, se_GetTestRunStepCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTestRunStepCommand}.
 */
export interface GetTestRunStepCommandInput extends GetTestRunStepRequest {}
/**
 * @public
 *
 * The output of {@link GetTestRunStepCommand}.
 */
export interface GetTestRunStepCommandOutput extends GetTestRunStepResponse, __MetadataBearer {}

/**
 * <p>Gets a test run step.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppTestClient, GetTestRunStepCommand } from "@aws-sdk/client-apptest"; // ES Modules import
 * // const { AppTestClient, GetTestRunStepCommand } = require("@aws-sdk/client-apptest"); // CommonJS import
 * // import type { AppTestClientConfig } from "@aws-sdk/client-apptest";
 * const config = {}; // type is AppTestClientConfig
 * const client = new AppTestClient(config);
 * const input = { // GetTestRunStepRequest
 *   testRunId: "STRING_VALUE", // required
 *   stepName: "STRING_VALUE", // required
 *   testCaseId: "STRING_VALUE",
 *   testSuiteId: "STRING_VALUE",
 * };
 * const command = new GetTestRunStepCommand(input);
 * const response = await client.send(command);
 * // { // GetTestRunStepResponse
 * //   stepName: "STRING_VALUE", // required
 * //   testRunId: "STRING_VALUE", // required
 * //   testCaseId: "STRING_VALUE",
 * //   testCaseVersion: Number("int"),
 * //   testSuiteId: "STRING_VALUE",
 * //   testSuiteVersion: Number("int"),
 * //   beforeStep: true || false,
 * //   afterStep: true || false,
 * //   status: "Success" || "Failed" || "Running", // required
 * //   statusReason: "STRING_VALUE",
 * //   runStartTime: new Date("TIMESTAMP"), // required
 * //   runEndTime: new Date("TIMESTAMP"),
 * //   stepRunSummary: { // StepRunSummary Union: only one key present
 * //     mainframeAction: { // MainframeActionSummary Union: only one key present
 * //       batch: { // BatchSummary
 * //         stepInput: { // BatchStepInput
 * //           resource: { // MainframeResourceSummary Union: only one key present
 * //             m2ManagedApplication: { // M2ManagedApplicationSummary
 * //               applicationId: "STRING_VALUE", // required
 * //               runtime: "MicroFocus", // required
 * //               listenerPort: Number("int"),
 * //             },
 * //             m2NonManagedApplication: { // M2NonManagedApplicationSummary
 * //               vpcEndpointServiceName: "STRING_VALUE", // required
 * //               listenerPort: Number("int"), // required
 * //               runtime: "BluAge", // required
 * //               webAppName: "STRING_VALUE",
 * //             },
 * //           },
 * //           batchJobName: "STRING_VALUE", // required
 * //           batchJobParameters: { // BatchJobParameters
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           exportDataSetNames: [ // ExportDataSetNames
 * //             "STRING_VALUE",
 * //           ],
 * //           properties: { // MainframeActionProperties
 * //             dmsTaskArn: "STRING_VALUE",
 * //           },
 * //         },
 * //         stepOutput: { // BatchStepOutput
 * //           dataSetExportLocation: "STRING_VALUE",
 * //           dmsOutputLocation: "STRING_VALUE",
 * //           dataSetDetails: [ // DataSetList
 * //             { // DataSet
 * //               type: "PS", // required
 * //               name: "STRING_VALUE", // required
 * //               ccsid: "STRING_VALUE", // required
 * //               format: "FIXED" || "VARIABLE" || "LINE_SEQUENTIAL", // required
 * //               length: Number("int"), // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       tn3270: { // TN3270Summary
 * //         stepInput: { // TN3270StepInput
 * //           resource: {//  Union: only one key present
 * //             m2ManagedApplication: {
 * //               applicationId: "STRING_VALUE", // required
 * //               runtime: "MicroFocus", // required
 * //               listenerPort: Number("int"),
 * //             },
 * //             m2NonManagedApplication: {
 * //               vpcEndpointServiceName: "STRING_VALUE", // required
 * //               listenerPort: Number("int"), // required
 * //               runtime: "BluAge", // required
 * //               webAppName: "STRING_VALUE",
 * //             },
 * //           },
 * //           script: { // ScriptSummary
 * //             scriptLocation: "STRING_VALUE", // required
 * //             type: "Selenium", // required
 * //           },
 * //           exportDataSetNames: [
 * //             "STRING_VALUE",
 * //           ],
 * //           properties: {
 * //             dmsTaskArn: "STRING_VALUE",
 * //           },
 * //         },
 * //         stepOutput: { // TN3270StepOutput
 * //           dataSetExportLocation: "STRING_VALUE",
 * //           dmsOutputLocation: "STRING_VALUE",
 * //           dataSetDetails: [
 * //             {
 * //               type: "PS", // required
 * //               name: "STRING_VALUE", // required
 * //               ccsid: "STRING_VALUE", // required
 * //               format: "FIXED" || "VARIABLE" || "LINE_SEQUENTIAL", // required
 * //               length: Number("int"), // required
 * //             },
 * //           ],
 * //           scriptOutputLocation: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //     compareAction: { // CompareActionSummary
 * //       type: { // File Union: only one key present
 * //         fileType: { // CompareFileType Union: only one key present
 * //           datasets: { // CompareDataSetsSummary
 * //             stepInput: { // CompareDataSetsStepInput
 * //               sourceLocation: "STRING_VALUE", // required
 * //               targetLocation: "STRING_VALUE", // required
 * //               sourceDataSets: [ // required
 * //                 {
 * //                   type: "PS", // required
 * //                   name: "STRING_VALUE", // required
 * //                   ccsid: "STRING_VALUE", // required
 * //                   format: "FIXED" || "VARIABLE" || "LINE_SEQUENTIAL", // required
 * //                   length: Number("int"), // required
 * //                 },
 * //               ],
 * //               targetDataSets: [ // required
 * //                 {
 * //                   type: "PS", // required
 * //                   name: "STRING_VALUE", // required
 * //                   ccsid: "STRING_VALUE", // required
 * //                   format: "FIXED" || "VARIABLE" || "LINE_SEQUENTIAL", // required
 * //                   length: Number("int"), // required
 * //                 },
 * //               ],
 * //             },
 * //             stepOutput: { // CompareDataSetsStepOutput
 * //               comparisonOutputLocation: "STRING_VALUE", // required
 * //               comparisonStatus: "Different" || "Equivalent" || "Equal", // required
 * //             },
 * //           },
 * //           databaseCDC: { // CompareDatabaseCDCSummary
 * //             stepInput: { // CompareDatabaseCDCStepInput
 * //               sourceLocation: "STRING_VALUE", // required
 * //               targetLocation: "STRING_VALUE", // required
 * //               outputLocation: "STRING_VALUE",
 * //               sourceMetadata: { // SourceDatabaseMetadata
 * //                 type: "z/OS-DB2", // required
 * //                 captureTool: "Precisely" || "AWS DMS", // required
 * //               },
 * //               targetMetadata: { // TargetDatabaseMetadata
 * //                 type: "PostgreSQL", // required
 * //                 captureTool: "Precisely" || "AWS DMS", // required
 * //               },
 * //             },
 * //             stepOutput: { // CompareDatabaseCDCStepOutput
 * //               comparisonOutputLocation: "STRING_VALUE", // required
 * //               comparisonStatus: "Different" || "Equivalent" || "Equal", // required
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //     resourceAction: { // ResourceActionSummary Union: only one key present
 * //       cloudFormation: { // CloudFormationStepSummary Union: only one key present
 * //         createCloudformation: { // CreateCloudFormationSummary
 * //           stepInput: { // CreateCloudFormationStepInput
 * //             templateLocation: "STRING_VALUE", // required
 * //             parameters: { // Properties
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //           stepOutput: { // CreateCloudFormationStepOutput
 * //             stackId: "STRING_VALUE", // required
 * //             exports: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         deleteCloudformation: { // DeleteCloudFormationSummary
 * //           stepInput: { // DeleteCloudFormationStepInput
 * //             stackId: "STRING_VALUE", // required
 * //           },
 * //           stepOutput: {},
 * //         },
 * //       },
 * //       m2ManagedApplication: { // M2ManagedApplicationStepSummary
 * //         stepInput: { // M2ManagedApplicationStepInput
 * //           applicationId: "STRING_VALUE", // required
 * //           runtime: "STRING_VALUE", // required
 * //           vpcEndpointServiceName: "STRING_VALUE",
 * //           listenerPort: Number("int"),
 * //           actionType: "Configure" || "Deconfigure", // required
 * //           properties: { // M2ManagedActionProperties
 * //             forceStop: true || false,
 * //             importDataSetLocation: "STRING_VALUE",
 * //           },
 * //         },
 * //         stepOutput: { // M2ManagedApplicationStepOutput
 * //           importDataSetSummary: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       m2NonManagedApplication: { // M2NonManagedApplicationStepSummary
 * //         stepInput: { // M2NonManagedApplicationStepInput
 * //           vpcEndpointServiceName: "STRING_VALUE", // required
 * //           listenerPort: Number("int"), // required
 * //           runtime: "BluAge", // required
 * //           webAppName: "STRING_VALUE",
 * //           actionType: "Configure" || "Deconfigure", // required
 * //         },
 * //         stepOutput: {},
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTestRunStepCommandInput - {@link GetTestRunStepCommandInput}
 * @returns {@link GetTestRunStepCommandOutput}
 * @see {@link GetTestRunStepCommandInput} for command's `input` shape.
 * @see {@link GetTestRunStepCommandOutput} for command's `response` shape.
 * @see {@link AppTestClientResolvedConfig | config} for AppTestClient's `config` shape.
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
 *  <p>One or more parameter provided in the request is not valid.</p>
 *
 * @throws {@link AppTestServiceException}
 * <p>Base exception class for all service exceptions from AppTest service.</p>
 *
 *
 * @public
 */
export class GetTestRunStepCommand extends $Command
  .classBuilder<
    GetTestRunStepCommandInput,
    GetTestRunStepCommandOutput,
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
  .s("AwsApptestControlPlaneService", "GetTestRunStep", {})
  .n("AppTestClient", "GetTestRunStepCommand")
  .f(void 0, void 0)
  .ser(se_GetTestRunStepCommand)
  .de(de_GetTestRunStepCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTestRunStepRequest;
      output: GetTestRunStepResponse;
    };
    sdk: {
      input: GetTestRunStepCommandInput;
      output: GetTestRunStepCommandOutput;
    };
  };
}
