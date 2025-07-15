// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListIngestionsRequest, ListIngestionsResponse } from "../models/models_4";
import { de_ListIngestionsCommand, se_ListIngestionsCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIngestionsCommand}.
 */
export interface ListIngestionsCommandInput extends ListIngestionsRequest {}
/**
 * @public
 *
 * The output of {@link ListIngestionsCommand}.
 */
export interface ListIngestionsCommandOutput extends ListIngestionsResponse, __MetadataBearer {}

/**
 * <p>Lists the history of SPICE ingestions for a dataset. Limited to 5 TPS per user and 25 TPS per account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListIngestionsCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListIngestionsCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // ListIngestionsRequest
 *   DataSetId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   AwsAccountId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 * };
 * const command = new ListIngestionsCommand(input);
 * const response = await client.send(command);
 * // { // ListIngestionsResponse
 * //   Ingestions: [ // Ingestions
 * //     { // Ingestion
 * //       Arn: "STRING_VALUE", // required
 * //       IngestionId: "STRING_VALUE",
 * //       IngestionStatus: "INITIALIZED" || "QUEUED" || "RUNNING" || "FAILED" || "COMPLETED" || "CANCELLED", // required
 * //       ErrorInfo: { // ErrorInfo
 * //         Type: "FAILURE_TO_ASSUME_ROLE" || "INGESTION_SUPERSEDED" || "INGESTION_CANCELED" || "DATA_SET_DELETED" || "DATA_SET_NOT_SPICE" || "S3_UPLOADED_FILE_DELETED" || "S3_MANIFEST_ERROR" || "DATA_TOLERANCE_EXCEPTION" || "SPICE_TABLE_NOT_FOUND" || "DATA_SET_SIZE_LIMIT_EXCEEDED" || "ROW_SIZE_LIMIT_EXCEEDED" || "ACCOUNT_CAPACITY_LIMIT_EXCEEDED" || "CUSTOMER_ERROR" || "DATA_SOURCE_NOT_FOUND" || "IAM_ROLE_NOT_AVAILABLE" || "CONNECTION_FAILURE" || "SQL_TABLE_NOT_FOUND" || "PERMISSION_DENIED" || "SSL_CERTIFICATE_VALIDATION_FAILURE" || "OAUTH_TOKEN_FAILURE" || "SOURCE_API_LIMIT_EXCEEDED_FAILURE" || "PASSWORD_AUTHENTICATION_FAILURE" || "SQL_SCHEMA_MISMATCH_ERROR" || "INVALID_DATE_FORMAT" || "INVALID_DATAPREP_SYNTAX" || "SOURCE_RESOURCE_LIMIT_EXCEEDED" || "SQL_INVALID_PARAMETER_VALUE" || "QUERY_TIMEOUT" || "SQL_NUMERIC_OVERFLOW" || "UNRESOLVABLE_HOST" || "UNROUTABLE_HOST" || "SQL_EXCEPTION" || "S3_FILE_INACCESSIBLE" || "IOT_FILE_NOT_FOUND" || "IOT_DATA_SET_FILE_EMPTY" || "INVALID_DATA_SOURCE_CONFIG" || "DATA_SOURCE_AUTH_FAILED" || "DATA_SOURCE_CONNECTION_FAILED" || "FAILURE_TO_PROCESS_JSON_FILE" || "INTERNAL_SERVICE_ERROR" || "REFRESH_SUPPRESSED_BY_EDIT" || "PERMISSION_NOT_FOUND" || "ELASTICSEARCH_CURSOR_NOT_ENABLED" || "CURSOR_NOT_ENABLED" || "DUPLICATE_COLUMN_NAMES_FOUND",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       RowInfo: { // RowInfo
 * //         RowsIngested: Number("long"),
 * //         RowsDropped: Number("long"),
 * //         TotalRowsInDataset: Number("long"),
 * //       },
 * //       QueueInfo: { // QueueInfo
 * //         WaitingOnIngestion: "STRING_VALUE", // required
 * //         QueuedIngestion: "STRING_VALUE", // required
 * //       },
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       IngestionTimeInSeconds: Number("long"),
 * //       IngestionSizeInBytes: Number("long"),
 * //       RequestSource: "MANUAL" || "SCHEDULED",
 * //       RequestType: "INITIAL_INGESTION" || "EDIT" || "INCREMENTAL_REFRESH" || "FULL_REFRESH",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param ListIngestionsCommandInput - {@link ListIngestionsCommandInput}
 * @returns {@link ListIngestionsCommandOutput}
 * @see {@link ListIngestionsCommandInput} for command's `input` shape.
 * @see {@link ListIngestionsCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value isn't valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class ListIngestionsCommand extends $Command
  .classBuilder<
    ListIngestionsCommandInput,
    ListIngestionsCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "ListIngestions", {})
  .n("QuickSightClient", "ListIngestionsCommand")
  .f(void 0, void 0)
  .ser(se_ListIngestionsCommand)
  .de(de_ListIngestionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIngestionsRequest;
      output: ListIngestionsResponse;
    };
    sdk: {
      input: ListIngestionsCommandInput;
      output: ListIngestionsCommandOutput;
    };
  };
}
