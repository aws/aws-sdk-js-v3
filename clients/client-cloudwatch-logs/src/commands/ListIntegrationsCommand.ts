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
import type { ListIntegrationsRequest, ListIntegrationsResponse } from "../models/models_0";
import { ListIntegrations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIntegrationsCommand}.
 */
export interface ListIntegrationsCommandInput extends ListIntegrationsRequest {}
/**
 * @public
 *
 * The output of {@link ListIntegrationsCommand}.
 */
export interface ListIntegrationsCommandOutput extends ListIntegrationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of integrations between CloudWatch Logs and other services in this
 *       account. Currently, only one integration can be created in an account, and this integration
 *       must be with OpenSearch Service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, ListIntegrationsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, ListIntegrationsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // ListIntegrationsRequest
 *   integrationNamePrefix: "STRING_VALUE",
 *   integrationType: "OPENSEARCH",
 *   integrationStatus: "PROVISIONING" || "ACTIVE" || "FAILED",
 * };
 * const command = new ListIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListIntegrationsResponse
 * //   integrationSummaries: [ // IntegrationSummaries
 * //     { // IntegrationSummary
 * //       integrationName: "STRING_VALUE",
 * //       integrationType: "OPENSEARCH",
 * //       integrationStatus: "PROVISIONING" || "ACTIVE" || "FAILED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListIntegrationsCommandInput - {@link ListIntegrationsCommandInput}
 * @returns {@link ListIntegrationsCommandOutput}
 * @see {@link ListIntegrationsCommandInput} for command's `input` shape.
 * @see {@link ListIntegrationsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class ListIntegrationsCommand extends $Command
  .classBuilder<
    ListIntegrationsCommandInput,
    ListIntegrationsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "ListIntegrations", {})
  .n("CloudWatchLogsClient", "ListIntegrationsCommand")
  .sc(ListIntegrations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIntegrationsRequest;
      output: ListIntegrationsResponse;
    };
    sdk: {
      input: ListIntegrationsCommandInput;
      output: ListIntegrationsCommandOutput;
    };
  };
}
