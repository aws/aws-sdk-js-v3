// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListScheduledQueriesRequest, ListScheduledQueriesResponse } from "../models/models_0";
import { ListScheduledQueries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListScheduledQueriesCommand}.
 */
export interface ListScheduledQueriesCommandInput extends ListScheduledQueriesRequest {}
/**
 * @public
 *
 * The output of {@link ListScheduledQueriesCommand}.
 */
export interface ListScheduledQueriesCommandOutput extends ListScheduledQueriesResponse, __MetadataBearer {}

/**
 * Gets a list of all scheduled queries in the caller's Amazon account and Region. `ListScheduledQueries` is eventually consistent.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, ListScheduledQueriesCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, ListScheduledQueriesCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * // import type { TimestreamQueryClientConfig } from "@aws-sdk/client-timestream-query";
 * const config = {}; // type is TimestreamQueryClientConfig
 * const client = new TimestreamQueryClient(config);
 * const input = { // ListScheduledQueriesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListScheduledQueriesCommand(input);
 * const response = await client.send(command);
 * // { // ListScheduledQueriesResponse
 * //   ScheduledQueries: [ // ScheduledQueryList // required
 * //     { // ScheduledQuery
 * //       Arn: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       State: "ENABLED" || "DISABLED", // required
 * //       PreviousInvocationTime: new Date("TIMESTAMP"),
 * //       NextInvocationTime: new Date("TIMESTAMP"),
 * //       ErrorReportConfiguration: { // ErrorReportConfiguration
 * //         S3Configuration: { // S3Configuration
 * //           BucketName: "STRING_VALUE", // required
 * //           ObjectKeyPrefix: "STRING_VALUE",
 * //           EncryptionOption: "SSE_S3" || "SSE_KMS",
 * //         },
 * //       },
 * //       TargetDestination: { // TargetDestination
 * //         TimestreamDestination: { // TimestreamDestination
 * //           DatabaseName: "STRING_VALUE",
 * //           TableName: "STRING_VALUE",
 * //         },
 * //       },
 * //       LastRunStatus: "AUTO_TRIGGER_SUCCESS" || "AUTO_TRIGGER_FAILURE" || "MANUAL_TRIGGER_SUCCESS" || "MANUAL_TRIGGER_FAILURE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListScheduledQueriesCommandInput - {@link ListScheduledQueriesCommandInput}
 * @returns {@link ListScheduledQueriesCommandOutput}
 * @see {@link ListScheduledQueriesCommandInput} for command's `input` shape.
 * @see {@link ListScheduledQueriesCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have the necessary permissions to access the account settings.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred while processing the request.
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *
 * The requested endpoint is invalid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to excessive requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Invalid or malformed request.
 *
 * @throws {@link TimestreamQueryServiceException}
 *
 * Base exception class for all service exceptions from TimestreamQuery service.
 *
 * @public
 */
export class ListScheduledQueriesCommand extends command<ListScheduledQueriesCommandInput, ListScheduledQueriesCommandOutput>(
  _ep0,
  _mw0,
  "ListScheduledQueries",
  ListScheduledQueries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScheduledQueriesRequest;
      output: ListScheduledQueriesResponse;
    };
    sdk: {
      input: ListScheduledQueriesCommandInput;
      output: ListScheduledQueriesCommandOutput;
    };
  };
}
