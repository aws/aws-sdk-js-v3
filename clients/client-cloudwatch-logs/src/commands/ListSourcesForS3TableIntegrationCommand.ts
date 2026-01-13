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
import type {
  ListSourcesForS3TableIntegrationRequest,
  ListSourcesForS3TableIntegrationResponse,
} from "../models/models_0";
import { ListSourcesForS3TableIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSourcesForS3TableIntegrationCommand}.
 */
export interface ListSourcesForS3TableIntegrationCommandInput extends ListSourcesForS3TableIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link ListSourcesForS3TableIntegrationCommand}.
 */
export interface ListSourcesForS3TableIntegrationCommandOutput extends ListSourcesForS3TableIntegrationResponse, __MetadataBearer {}

/**
 * <p>Returns a list of data source associations for a specified S3 Table Integration, showing
 *       which data sources are currently associated for query access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, ListSourcesForS3TableIntegrationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, ListSourcesForS3TableIntegrationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // ListSourcesForS3TableIntegrationRequest
 *   integrationArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSourcesForS3TableIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // ListSourcesForS3TableIntegrationResponse
 * //   sources: [ // S3TableIntegrationSources
 * //     { // S3TableIntegrationSource
 * //       identifier: "STRING_VALUE",
 * //       dataSource: { // DataSource
 * //         name: "STRING_VALUE", // required
 * //         type: "STRING_VALUE",
 * //       },
 * //       status: "ACTIVE" || "UNHEALTHY" || "FAILED" || "DATA_SOURCE_DELETE_IN_PROGRESS",
 * //       statusReason: "STRING_VALUE",
 * //       createdTimeStamp: Number("long"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSourcesForS3TableIntegrationCommandInput - {@link ListSourcesForS3TableIntegrationCommandInput}
 * @returns {@link ListSourcesForS3TableIntegrationCommandOutput}
 * @see {@link ListSourcesForS3TableIntegrationCommandInput} for command's `input` shape.
 * @see {@link ListSourcesForS3TableIntegrationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This exception is returned
 *       when the service encounters an unexpected condition that prevents it from fulfilling the
 *       request.</p>
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
export class ListSourcesForS3TableIntegrationCommand extends $Command
  .classBuilder<
    ListSourcesForS3TableIntegrationCommandInput,
    ListSourcesForS3TableIntegrationCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "ListSourcesForS3TableIntegration", {})
  .n("CloudWatchLogsClient", "ListSourcesForS3TableIntegrationCommand")
  .sc(ListSourcesForS3TableIntegration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSourcesForS3TableIntegrationRequest;
      output: ListSourcesForS3TableIntegrationResponse;
    };
    sdk: {
      input: ListSourcesForS3TableIntegrationCommandInput;
      output: ListSourcesForS3TableIntegrationCommandOutput;
    };
  };
}
