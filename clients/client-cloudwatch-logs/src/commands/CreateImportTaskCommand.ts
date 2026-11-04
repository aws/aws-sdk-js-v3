// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateImportTaskRequest, CreateImportTaskResponse } from "../models/models_0";
import { CreateImportTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Starts an import from a data source to CloudWatch Log and creates a managed log group as the destination for the imported data. Currently, [CloudTrail Event Data Store](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store.html) is the only supported data source.
 *
 * The import task must satisfy the following constraints:
 *
 * - The specified source must be in an ACTIVE state.
 * - The API caller must have permissions to access the data in the provided source and to perform iam:PassRole on the provided import role which has the same permissions, as described below.
 * - The provided IAM role must trust the "cloudtrail.amazonaws.com" principal and have the following permissions:
 *
 *   - cloudtrail:GetEventDataStoreData
 *   - logs:CreateLogGroup
 *   - logs:CreateLogStream
 *   - logs:PutResourcePolicy
 *   - (If source has an associated Amazon Web Services KMS Key) kms:Decrypt
 *   - (If source has an associated Amazon Web Services KMS Key) kms:GenerateDataKey
 *
 *   Example IAM policy for provided import role:
 *
 *   `[ \{ "Effect": "Allow", "Action": "iam:PassRole", "Resource": "arn:aws:iam::123456789012:role/apiCallerCredentials", "Condition": \{ "StringLike": \{ "iam:AssociatedResourceARN": "arn:aws:logs:us-east-1:123456789012:log-group:aws/cloudtrail/f1d45bff-d0e3-4868-b5d9-2eb678aa32fb:*" \} \} \}, \{ "Effect": "Allow", "Action": [ "cloudtrail:GetEventDataStoreData" ], "Resource": [ "arn:aws:cloudtrail:us-east-1:123456789012:eventdatastore/f1d45bff-d0e3-4868-b5d9-2eb678aa32fb" ] \}, \{ "Effect": "Allow", "Action": [ "logs:CreateImportTask", "logs:CreateLogGroup", "logs:CreateLogStream", "logs:PutResourcePolicy" ], "Resource": [ "arn:aws:logs:us-east-1:123456789012:log-group:/aws/cloudtrail/*" ] \}, \{ "Effect": "Allow", "Action": [ "kms:Decrypt", "kms:GenerateDataKey" ], "Resource": [ "arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012" ] \} ]`
 * - If the import source has a customer managed key, the "cloudtrail.amazonaws.com" principal needs permissions to perform kms:Decrypt and kms:GenerateDataKey.
 * - There can be no more than 3 active imports per account at a given time.
 * - The startEventTime must be less than or equal to endEventTime.
 * - The data being imported must be within the specified source's retention period.
 *
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
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This operation attempted to create a resource that already exists.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * The operation is not valid on the specified resource.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the parameters for the request is not valid.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class CreateImportTaskCommand extends command<CreateImportTaskCommandInput, CreateImportTaskCommandOutput>(
  _ep0,
  _mw0,
  "CreateImportTask",
  CreateImportTask$
) {
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
