// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { StartImportTaskRequest, StartImportTaskResponse } from "../models/models_0";
import { StartImportTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartImportTaskCommand}.
 */
export interface StartImportTaskCommandInput extends StartImportTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartImportTaskCommand}.
 */
export interface StartImportTaskCommandOutput extends StartImportTaskResponse, __MetadataBearer {}

/**
 * <p>Starts an import task, which allows you to import details of your on-premises environment
 *       directly into Amazon Web Services Migration Hub without having to use the Amazon Web Services Application Discovery
 *       Service (Application Discovery Service) tools such as the Amazon Web Services Application Discovery Service Agentless Collector
 *       or Application Discovery Agent. This gives you the option to
 *       perform migration assessment and planning directly from your imported data, including the
 *       ability to group your devices as applications and track their migration status.</p>
 *          <p>To start an import request, do this:</p>
 *          <ol>
 *             <li>
 *                <p>Download the specially formatted comma separated value (CSV) import template, which
 *           you can find here: <a href="https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p>
 *             </li>
 *             <li>
 *                <p>Fill out the template with your server and application data.</p>
 *             </li>
 *             <li>
 *                <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL.
 *           Your import file must be in the CSV format.</p>
 *             </li>
 *             <li>
 *                <p>Use the console or the <code>StartImportTask</code> command with the Amazon Web Services CLI or one
 *           of the Amazon Web Services SDKs to import the records from your file.</p>
 *             </li>
 *          </ol>
 *          <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub
 *         Import</a> in the <i>Amazon Web Services Application Discovery Service User
 *       Guide</i>.</p>
 *          <note>
 *             <p>There are limits to the number of import tasks you can create (and delete) in an Amazon Web Services
 *         account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">Amazon Web Services Application
 *           Discovery Service Limits</a> in the <i>Amazon Web Services Application Discovery Service User
 *           Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StartImportTaskCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StartImportTaskCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * // import type { ApplicationDiscoveryServiceClientConfig } from "@aws-sdk/client-application-discovery-service";
 * const config = {}; // type is ApplicationDiscoveryServiceClientConfig
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // StartImportTaskRequest
 *   clientRequestToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   importUrl: "STRING_VALUE", // required
 * };
 * const command = new StartImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartImportTaskResponse
 * //   task: { // ImportTask
 * //     importTaskId: "STRING_VALUE",
 * //     clientRequestToken: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     importUrl: "STRING_VALUE",
 * //     status: "IMPORT_IN_PROGRESS" || "IMPORT_COMPLETE" || "IMPORT_COMPLETE_WITH_ERRORS" || "IMPORT_FAILED" || "IMPORT_FAILED_SERVER_LIMIT_EXCEEDED" || "IMPORT_FAILED_RECORD_LIMIT_EXCEEDED" || "IMPORT_FAILED_UNSUPPORTED_FILE_TYPE" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED" || "DELETE_FAILED_LIMIT_EXCEEDED" || "INTERNAL_ERROR",
 * //     importRequestTime: new Date("TIMESTAMP"),
 * //     importCompletionTime: new Date("TIMESTAMP"),
 * //     importDeletedTime: new Date("TIMESTAMP"),
 * //     fileClassification: "MODELIZEIT_EXPORT" || "RVTOOLS_EXPORT" || "VMWARE_NSX_EXPORT" || "IMPORT_TEMPLATE",
 * //     serverImportSuccess: Number("int"),
 * //     serverImportFailure: Number("int"),
 * //     applicationImportSuccess: Number("int"),
 * //     applicationImportFailure: Number("int"),
 * //     errorsAndFailedEntriesZip: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartImportTaskCommandInput - {@link StartImportTaskCommandInput}
 * @returns {@link StartImportTaskCommandOutput}
 * @see {@link StartImportTaskCommandInput} for command's `input` shape.
 * @see {@link StartImportTaskCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>This issue occurs when the same <code>clientRequestToken</code> is used with the
 *         <code>StartImportTask</code> action, but with different parameters. For example, you use the
 *       same request token but have two different import URLs, you can encounter this issue. If the
 *       import tasks are meant to be different, use a different <code>clientRequestToken</code>, and
 *       try again.</p>
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
export class StartImportTaskCommand extends $Command
  .classBuilder<
    StartImportTaskCommandInput,
    StartImportTaskCommandOutput,
    ApplicationDiscoveryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationDiscoveryServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSPoseidonService_V2015_11_01", "StartImportTask", {})
  .n("ApplicationDiscoveryServiceClient", "StartImportTaskCommand")
  .sc(StartImportTask$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartImportTaskRequest;
      output: StartImportTaskResponse;
    };
    sdk: {
      input: StartImportTaskCommandInput;
      output: StartImportTaskCommandOutput;
    };
  };
}
