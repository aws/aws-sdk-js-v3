// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeImportTasksRequest, DescribeImportTasksResponse } from "../models/models_0";
import { de_DescribeImportTasksCommand, se_DescribeImportTasksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeImportTasksCommand}.
 */
export interface DescribeImportTasksCommandInput extends DescribeImportTasksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImportTasksCommand}.
 */
export interface DescribeImportTasksCommandOutput extends DescribeImportTasksResponse, __MetadataBearer {}

/**
 * <p>Returns an array of import tasks for your account, including status information, times,
 *       IDs, the Amazon S3 Object URL for the import file, and more.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeImportTasksCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeImportTasksCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // DescribeImportTasksRequest
 *   filters: [ // DescribeImportTasksFilterList
 *     { // ImportTaskFilter
 *       name: "IMPORT_TASK_ID" || "STATUS" || "NAME" || "FILE_CLASSIFICATION",
 *       values: [ // ImportTaskFilterValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new DescribeImportTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImportTasksResponse
 * //   nextToken: "STRING_VALUE",
 * //   tasks: [ // ImportTaskList
 * //     { // ImportTask
 * //       importTaskId: "STRING_VALUE",
 * //       clientRequestToken: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       importUrl: "STRING_VALUE",
 * //       status: "IMPORT_IN_PROGRESS" || "IMPORT_COMPLETE" || "IMPORT_COMPLETE_WITH_ERRORS" || "IMPORT_FAILED" || "IMPORT_FAILED_SERVER_LIMIT_EXCEEDED" || "IMPORT_FAILED_RECORD_LIMIT_EXCEEDED" || "IMPORT_FAILED_UNSUPPORTED_FILE_TYPE" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED" || "DELETE_FAILED_LIMIT_EXCEEDED" || "INTERNAL_ERROR",
 * //       importRequestTime: new Date("TIMESTAMP"),
 * //       importCompletionTime: new Date("TIMESTAMP"),
 * //       importDeletedTime: new Date("TIMESTAMP"),
 * //       fileClassification: "MODELIZEIT_EXPORT" || "RVTOOLS_EXPORT" || "VMWARE_NSX_EXPORT" || "IMPORT_TEMPLATE",
 * //       serverImportSuccess: Number("int"),
 * //       serverImportFailure: Number("int"),
 * //       applicationImportSuccess: Number("int"),
 * //       applicationImportFailure: Number("int"),
 * //       errorsAndFailedEntriesZip: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeImportTasksCommandInput - {@link DescribeImportTasksCommandInput}
 * @returns {@link DescribeImportTasksCommandOutput}
 * @see {@link DescribeImportTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeImportTasksCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home Region is not set. Set the home Region to continue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 *
 * @public
 */
export class DescribeImportTasksCommand extends $Command
  .classBuilder<
    DescribeImportTasksCommandInput,
    DescribeImportTasksCommandOutput,
    ApplicationDiscoveryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationDiscoveryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSPoseidonService_V2015_11_01", "DescribeImportTasks", {})
  .n("ApplicationDiscoveryServiceClient", "DescribeImportTasksCommand")
  .f(void 0, void 0)
  .ser(se_DescribeImportTasksCommand)
  .de(de_DescribeImportTasksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeImportTasksRequest;
      output: DescribeImportTasksResponse;
    };
    sdk: {
      input: DescribeImportTasksCommandInput;
      output: DescribeImportTasksCommandOutput;
    };
  };
}
