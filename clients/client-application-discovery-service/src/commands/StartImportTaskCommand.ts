// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartImportTaskRequest, StartImportTaskResponse } from "../models/models_0";
import { StartImportTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts an import task, which allows you to import details of your on-premises environment directly into Amazon Web Services Migration Hub without having to use the Amazon Web Services Application Discovery Service (Application Discovery Service) tools such as the Amazon Web Services Application Discovery Service Agentless Collector or Application Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data, including the ability to group your devices as applications and track their migration status.
 *
 * To start an import request, do this:
 *
 * 1. Download the specially formatted comma separated value (CSV) import template, which you can find here: [https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv](https://s3.us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv).
 * 2. Fill out the template with your server and application data.
 * 3. Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL. Your import file must be in the CSV format.
 * 4. Use the console or the `StartImportTask` command with the Amazon Web Services CLI or one of the Amazon Web Services SDKs to import the records from your file.
 *
 * For more information, including step-by-step procedures, see [Migration Hub Import](https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html) in the *Amazon Web Services Application Discovery Service User Guide*.
 *
 * > **Note:** There are limits to the number of import tasks you can create (and delete) in an Amazon Web Services account. For more information, see [Amazon Web Services Application Discovery Service Limits](https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html) in the *Amazon Web Services Application Discovery Service User Guide*.
 *
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
 *
 * The user does not have permission to perform the action. Check the IAM policy associated with this user.
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *
 * The home Region is not set. Set the home Region to continue.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid. Verify the parameters and try again.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value of one or more parameters are either invalid or out of range. Verify the parameter values and try again.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * This issue occurs when the same `clientRequestToken` is used with the `StartImportTask` action, but with different parameters. For example, you use the same request token but have two different import URLs, you can encounter this issue. If the import tasks are meant to be different, use a different `clientRequestToken`, and try again.
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *
 * The server experienced an internal error. Try again.
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 *
 * Base exception class for all service exceptions from ApplicationDiscoveryService service.
 *
 * @public
 */
export class StartImportTaskCommand extends command<StartImportTaskCommandInput, StartImportTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartImportTask",
  StartImportTask$
) {
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
