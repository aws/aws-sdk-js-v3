// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeQueryRequest, DescribeQueryResponse } from "../models/models_0";
import { DescribeQuery$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeQueryCommand}.
 */
export interface DescribeQueryCommandInput extends DescribeQueryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeQueryCommand}.
 */
export interface DescribeQueryCommandOutput extends DescribeQueryResponse, __MetadataBearer {}

/**
 * > **Important:** CloudTrail Lake will no longer be open to new customers starting May 31, 2026. If you would like to use CloudTrail Lake, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see [CloudTrail Lake availability change](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-service-availability-change.html).
 *
 * Returns metadata about a query, including query run time in milliseconds, number of events scanned and matched, and query status. If the query results were delivered to an S3 bucket, the response also provides the S3 URI and the delivery status.
 *
 * You must specify either `QueryId` or `QueryAlias`. Specifying the `QueryAlias` parameter returns information about the last query run for the alias. You can provide `RefreshId` along with `QueryAlias` to view the query results of a dashboard query for the specified `RefreshId`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, DescribeQueryCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, DescribeQueryCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // DescribeQueryRequest
 *   EventDataStore: "STRING_VALUE",
 *   QueryId: "STRING_VALUE",
 *   QueryAlias: "STRING_VALUE",
 *   RefreshId: "STRING_VALUE",
 *   EventDataStoreOwnerAccountId: "STRING_VALUE",
 * };
 * const command = new DescribeQueryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeQueryResponse
 * //   QueryId: "STRING_VALUE",
 * //   QueryString: "STRING_VALUE",
 * //   QueryStatus: "QUEUED" || "RUNNING" || "FINISHED" || "FAILED" || "CANCELLED" || "TIMED_OUT",
 * //   QueryStatistics: { // QueryStatisticsForDescribeQuery
 * //     EventsMatched: Number("long"),
 * //     EventsScanned: Number("long"),
 * //     BytesScanned: Number("long"),
 * //     ExecutionTimeInMillis: Number("int"),
 * //     CreationTime: new Date("TIMESTAMP"),
 * //   },
 * //   ErrorMessage: "STRING_VALUE",
 * //   DeliveryS3Uri: "STRING_VALUE",
 * //   DeliveryStatus: "SUCCESS" || "FAILED" || "FAILED_SIGNING_FILE" || "PENDING" || "RESOURCE_NOT_FOUND" || "ACCESS_DENIED" || "ACCESS_DENIED_SIGNING_FILE" || "CANCELLED" || "UNKNOWN",
 * //   Prompt: "STRING_VALUE",
 * //   EventDataStoreOwnerAccountId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeQueryCommandInput - {@link DescribeQueryCommandInput}
 * @returns {@link DescribeQueryCommandOutput}
 * @see {@link DescribeQueryCommandInput} for command's `input` shape.
 * @see {@link DescribeQueryCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The request includes a parameter that is not valid.
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *
 * This exception is thrown when the management account does not have a service-linked role.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This exception is thrown when the requested operation is not permitted.
 *
 * @throws {@link QueryIdNotFoundException} (client fault)
 *
 * The query ID does not exist or does not map to a query.
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
export class DescribeQueryCommand extends command<DescribeQueryCommandInput, DescribeQueryCommandOutput>(
  _ep0,
  _mw0,
  "DescribeQuery",
  DescribeQuery$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeQueryRequest;
      output: DescribeQueryResponse;
    };
    sdk: {
      input: DescribeQueryCommandInput;
      output: DescribeQueryCommandOutput;
    };
  };
}
