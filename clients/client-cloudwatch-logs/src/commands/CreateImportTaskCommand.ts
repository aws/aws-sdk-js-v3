// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateImportTaskRequest, CreateImportTaskResponse } from "../models/models_0";
import { CreateImportTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateImportTaskCommand}.
 */
export interface CreateImportTaskCommandInput extends CreateImportTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateImportTaskCommand}.
 */
export interface CreateImportTaskCommandOutput extends CreateImportTaskResponse, __MetadataBearer {}

/**
 * <p>Starts an import from a data source to CloudWatch Log and creates a managed log group as the destination for the imported data.
 *       Currently, <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store.html">CloudTrail Event Data Store</a> is the only supported data source. </p>
 *          <p>The import task must satisfy the following constraints:</p>
 *          <ul>
 *             <li>
 *                <p>The specified source must be in an ACTIVE state.</p>
 *             </li>
 *             <li>
 *                <p>The API caller must have permissions to access the data in the provided source and to perform iam:PassRole on the
 *           provided import role which has the same permissions, as described below.</p>
 *             </li>
 *             <li>
 *                <p>The provided IAM role must trust the "cloudtrail.amazonaws.com" principal and have the following permissions:</p>
 *                <ul>
 *                   <li>
 *                      <p>cloudtrail:GetEventDataStoreData</p>
 *                   </li>
 *                   <li>
 *                      <p>logs:CreateLogGroup</p>
 *                   </li>
 *                   <li>
 *                      <p>logs:CreateLogStream</p>
 *                   </li>
 *                   <li>
 *                      <p>logs:PutResourcePolicy</p>
 *                   </li>
 *                   <li>
 *                      <p>(If source has an associated AWS KMS Key) kms:Decrypt</p>
 *                   </li>
 *                   <li>
 *                      <p>(If source has an associated AWS KMS Key) kms:GenerateDataKey</p>
 *                   </li>
 *                </ul>
 *                <p>Example IAM policy for provided import role:</p>
 *                <p>
 *                   <code>[ \{ "Effect": "Allow", "Action": "iam:PassRole", "Resource": "arn:aws:iam::123456789012:role/apiCallerCredentials", "Condition": \{ "StringLike": \{ "iam:AssociatedResourceARN": "arn:aws:logs:us-east-1:123456789012:log-group:aws/cloudtrail/f1d45bff-d0e3-4868-b5d9-2eb678aa32fb:*" \} \} \}, \{ "Effect": "Allow", "Action": [ "cloudtrail:GetEventDataStoreData" ], "Resource": [ "arn:aws:cloudtrail:us-east-1:123456789012:eventdatastore/f1d45bff-d0e3-4868-b5d9-2eb678aa32fb" ] \}, \{ "Effect": "Allow", "Action": [ "logs:CreateImportTask", "logs:CreateLogGroup", "logs:CreateLogStream", "logs:PutResourcePolicy" ], "Resource": [ "arn:aws:logs:us-east-1:123456789012:log-group:/aws/cloudtrail/*" ] \}, \{ "Effect": "Allow", "Action": [ "kms:Decrypt", "kms:GenerateDataKey" ], "Resource": [ "arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012" ] \} ]</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>If the import source has a customer managed key, the "cloudtrail.amazonaws.com" principal needs permissions to perform kms:Decrypt and kms:GenerateDataKey.</p>
 *             </li>
 *             <li>
 *                <p>There can be no more than 3 active imports per account at a given time.</p>
 *             </li>
 *             <li>
 *                <p>The startEventTime must be less than or equal to endEventTime.</p>
 *             </li>
 *             <li>
 *                <p>The data being imported must be within the specified source's retention period.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, CreateImportTaskCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, CreateImportTaskCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // CreateImportTaskRequest
 *   importSourceArn: "STRING_VALUE", // required
 *   importRoleArn: "STRING_VALUE", // required
 *   importFilter: { // ImportFilter
 *     startEventTime: Number("long"),
 *     endEventTime: Number("long"),
 *   },
 * };
 * const command = new CreateImportTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateImportTaskResponse
 * //   importId: "STRING_VALUE",
 * //   importDestinationArn: "STRING_VALUE",
 * //   creationTime: Number("long"),
 * // };
 *
 * ```
 *
 * @param CreateImportTaskCommandInput - {@link CreateImportTaskCommandInput}
 * @returns {@link CreateImportTaskCommandOutput}
 * @see {@link CreateImportTaskCommandInput} for command's `input` shape.
 * @see {@link CreateImportTaskCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation is not valid on the specified resource.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters for the request is not valid.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class CreateImportTaskCommand extends $Command
  .classBuilder<
    CreateImportTaskCommandInput,
    CreateImportTaskCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "CreateImportTask", {})
  .n("CloudWatchLogsClient", "CreateImportTaskCommand")
  .sc(CreateImportTask$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateImportTaskRequest;
      output: CreateImportTaskResponse;
    };
    sdk: {
      input: CreateImportTaskCommandInput;
      output: CreateImportTaskCommandOutput;
    };
  };
}
