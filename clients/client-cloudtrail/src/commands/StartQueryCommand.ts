// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartQueryRequest, StartQueryResponse } from "../models/models_0";
import { StartQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartQueryCommand}.
 */
export interface StartQueryCommandInput extends StartQueryRequest {}
/**
 * @public
 *
 * The output of {@link StartQueryCommand}.
 */
export interface StartQueryCommandOutput extends StartQueryResponse, __MetadataBearer {}

/**
 * > **Important:** CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see [CloudTrail Lake availability change](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-service-availability-change.html).
 *
 * Starts a CloudTrail Lake query. Use the `QueryStatement` parameter to provide your SQL query, enclosed in single quotation marks. Use the optional `DeliveryS3Uri` parameter to deliver the query results to an S3 bucket.
 *
 * `StartQuery` requires you specify either the `QueryStatement` parameter, or a `QueryAlias` and any `QueryParameters`. In the current release, the `QueryAlias` and `QueryParameters` parameters are used only for the queries that populate the CloudTrail Lake dashboards.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, StartQueryCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, StartQueryCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // StartQueryRequest
 *   QueryStatement: "STRING_VALUE",
 *   DeliveryS3Uri: "STRING_VALUE",
 *   QueryAlias: "STRING_VALUE",
 *   QueryParameters: [ // QueryParameters
 *     "STRING_VALUE",
 *   ],
 *   EventDataStoreOwnerAccountId: "STRING_VALUE",
 * };
 * const command = new StartQueryCommand(input);
 * const response = await client.send(command);
 * // { // StartQueryResponse
 * //   QueryId: "STRING_VALUE",
 * //   EventDataStoreOwnerAccountId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartQueryCommandInput - {@link StartQueryCommandInput}
 * @returns {@link StartQueryCommandOutput}
 * @see {@link StartQueryCommandInput} for command's `input` shape.
 * @see {@link StartQueryCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *
 * The specified event data store ARN is not valid or does not map to an event data store in your account.
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *
 * The specified event data store was not found.
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *
 * The event data store is inactive.
 *
 * @throws {@link InsufficientEncryptionPolicyException} (client fault)
 *
 * For the `CreateTrail` `PutInsightSelectors`, `UpdateTrail`, `StartQuery`, and `StartImport` operations, this exception is thrown when the policy on the S3 bucket or KMS key does not have sufficient permissions for the operation.
 *
 * For all other operations, this exception is thrown when the policy for the KMS key does not have sufficient permissions for the operation.
 *
 * @throws {@link InsufficientS3BucketPolicyException} (client fault)
 *
 * This exception is thrown when the policy on the S3 bucket is not sufficient.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The request includes a parameter that is not valid.
 *
 * @throws {@link InvalidQueryStatementException} (client fault)
 *
 * The query that was submitted has validation errors, or uses incorrect syntax or unsupported keywords. For more information about writing a query, see [Create or edit a query](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-create-edit-query.html) in the *CloudTrail User Guide*.
 *
 * @throws {@link InvalidS3BucketNameException} (client fault)
 *
 * This exception is thrown when the provided S3 bucket name is not valid.
 *
 * @throws {@link InvalidS3PrefixException} (client fault)
 *
 * This exception is thrown when the provided S3 prefix is not valid.
 *
 * @throws {@link MaxConcurrentQueriesException} (client fault)
 *
 * You are already running the maximum number of concurrent queries. The maximum number of concurrent queries is 10. Wait a minute for some queries to finish, and then run the query again.
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *
 * This exception is thrown when the management account does not have a service-linked role.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This exception is thrown when the requested operation is not permitted.
 *
 * @throws {@link S3BucketDoesNotExistException} (client fault)
 *
 * This exception is thrown when the specified S3 bucket does not exist.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * This exception is thrown when the requested operation is not supported.
 *
 * @throws {@link CloudTrailServiceException}
 *
 * Base exception class for all service exceptions from CloudTrail service.
 *
 * @public
 */
export class StartQueryCommand extends command<StartQueryCommandInput, StartQueryCommandOutput>(
  _ep0,
  _mw0,
  "StartQuery",
  StartQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartQueryRequest;
      output: StartQueryResponse;
    };
    sdk: {
      input: StartQueryCommandInput;
      output: StartQueryCommandOutput;
    };
  };
}
