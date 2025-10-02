// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeQueryRequest, DescribeQueryResponse } from "../models/models_0";
import { de_DescribeQueryCommand, se_DescribeQueryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns metadata about a query, including query run time in milliseconds, number of
 *          events scanned and matched, and query status. If the query results were delivered to an S3 bucket,
 *          the response also provides the S3 URI and the delivery status.</p>
 *          <p>You must specify either <code>QueryId</code> or <code>QueryAlias</code>. Specifying the <code>QueryAlias</code> parameter
 *          returns information about the last query run for the alias. You can provide
 *          <code>RefreshId</code> along with <code>QueryAlias</code> to view the query results
 *          of a dashboard query for the specified <code>RefreshId</code>.</p>
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
 *  <p>The specified event data store ARN is not valid or does not map to an event data store
 *          in your account.</p>
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *  <p>The specified event data store was not found.</p>
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *  <p>The event data store is inactive.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *  <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link QueryIdNotFoundException} (client fault)
 *  <p>The query ID does not exist or does not map to a query.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 *
 * @public
 */
export class DescribeQueryCommand extends $Command
  .classBuilder<
    DescribeQueryCommandInput,
    DescribeQueryCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudTrail_20131101", "DescribeQuery", {})
  .n("CloudTrailClient", "DescribeQueryCommand")
  .f(void 0, void 0)
  .ser(se_DescribeQueryCommand)
  .de(de_DescribeQueryCommand)
  .build() {
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
