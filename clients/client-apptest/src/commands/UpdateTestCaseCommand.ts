// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppTestClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppTestClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateTestCaseRequest, UpdateTestCaseResponse } from "../models/models_0";
import { de_UpdateTestCaseCommand, se_UpdateTestCaseCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateTestCaseCommand}.
 */
export interface UpdateTestCaseCommandInput extends UpdateTestCaseRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTestCaseCommand}.
 */
export interface UpdateTestCaseCommandOutput extends UpdateTestCaseResponse, __MetadataBearer {}

/**
 * <p>Updates a test case.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppTestClient, UpdateTestCaseCommand } from "@aws-sdk/client-apptest"; // ES Modules import
 * // const { AppTestClient, UpdateTestCaseCommand } = require("@aws-sdk/client-apptest"); // CommonJS import
 * const client = new AppTestClient(config);
 * const input = { // UpdateTestCaseRequest
 *   testCaseId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   steps: [ // StepList
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
 * };
 * const command = new UpdateTestCaseCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTestCaseResponse
 * //   testCaseId: "STRING_VALUE", // required
 * //   testCaseVersion: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param UpdateTestCaseCommandInput - {@link UpdateTestCaseCommandInput}
 * @returns {@link UpdateTestCaseCommandOutput}
 * @see {@link UpdateTestCaseCommandInput} for command's `input` shape.
 * @see {@link UpdateTestCaseCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateTestCaseCommand extends $Command
  .classBuilder<
    UpdateTestCaseCommandInput,
    UpdateTestCaseCommandOutput,
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
  .s("AwsApptestControlPlaneService", "UpdateTestCase", {})
  .n("AppTestClient", "UpdateTestCaseCommand")
  .f(void 0, void 0)
  .ser(se_UpdateTestCaseCommand)
  .de(de_UpdateTestCaseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTestCaseRequest;
      output: UpdateTestCaseResponse;
    };
    sdk: {
      input: UpdateTestCaseCommandInput;
      output: UpdateTestCaseCommandOutput;
    };
  };
}
