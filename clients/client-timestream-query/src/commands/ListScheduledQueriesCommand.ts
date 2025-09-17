// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListScheduledQueriesRequest, ListScheduledQueriesResponse } from "../models/models_0";
import { de_ListScheduledQueriesCommand, se_ListScheduledQueriesCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets a list of all scheduled queries in the caller's Amazon account and Region.
 *                 <code>ListScheduledQueries</code> is eventually consistent. </p>
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
 *  <p>You do not have the necessary permissions to access the account settings.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request.</p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint is invalid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to excessive requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Invalid or malformed request. </p>
 *
 * @throws {@link TimestreamQueryServiceException}
 * <p>Base exception class for all service exceptions from TimestreamQuery service.</p>
 *
 *
 * @public
 */
export class ListScheduledQueriesCommand extends $Command
  .classBuilder<
    ListScheduledQueriesCommandInput,
    ListScheduledQueriesCommandOutput,
    TimestreamQueryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TimestreamQueryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getEndpointDiscoveryPlugin(config, {
        clientStack: cs,
        isDiscoveredEndpointRequired: true,
        options: o,
      }),
    ];
  })
  .s("Timestream_20181101", "ListScheduledQueries", {})
  .n("TimestreamQueryClient", "ListScheduledQueriesCommand")
  .f(void 0, void 0)
  .ser(se_ListScheduledQueriesCommand)
  .de(de_ListScheduledQueriesCommand)
  .build() {
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
