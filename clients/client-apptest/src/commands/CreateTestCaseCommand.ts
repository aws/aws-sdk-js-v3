// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppTestClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppTestClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTestCaseRequest, CreateTestCaseResponse } from "../models/models_0";
import { CreateTestCase } from "../schemas/schemas_5_Test";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTestCaseCommand}.
 */
export interface CreateTestCaseCommandInput extends CreateTestCaseRequest {}
/**
 * @public
 *
 * The output of {@link CreateTestCaseCommand}.
 */
export interface CreateTestCaseCommandOutput extends CreateTestCaseResponse, __MetadataBearer {}

/**
 * <p>Creates a test case.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppTestClient, CreateTestCaseCommand } from "@aws-sdk/client-apptest"; // ES Modules import
 * // const { AppTestClient, CreateTestCaseCommand } = require("@aws-sdk/client-apptest"); // CommonJS import
 * // import type { AppTestClientConfig } from "@aws-sdk/client-apptest";
 * const config = {}; // type is AppTestClientConfig
 * const client = new AppTestClient(config);
 * const input = { // CreateTestCaseRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   steps: [ // StepList // required
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
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateTestCaseCommand(input);
 * const response = await client.send(command);
 * // { // CreateTestCaseResponse
 * //   testCaseId: "STRING_VALUE", // required
 * //   testCaseVersion: Number("int"), // required
 * // };
 *
 * ```
 *
 * @param CreateTestCaseCommandInput - {@link CreateTestCaseCommandInput}
 * @returns {@link CreateTestCaseCommandOutput}
 * @see {@link CreateTestCaseCommandInput} for command's `input` shape.
 * @see {@link CreateTestCaseCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>One or more quotas for AWS Application Testing exceeds the limit.</p>
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
export class CreateTestCaseCommand extends $Command
  .classBuilder<
    CreateTestCaseCommandInput,
    CreateTestCaseCommandOutput,
    AppTestClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppTestClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsApptestControlPlaneService", "CreateTestCase", {})
  .n("AppTestClient", "CreateTestCaseCommand")
  .sc(CreateTestCase)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTestCaseRequest;
      output: CreateTestCaseResponse;
    };
    sdk: {
      input: CreateTestCaseCommandInput;
      output: CreateTestCaseCommandOutput;
    };
  };
}
