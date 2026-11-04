// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutIntegrationRequest, PutIntegrationResponse } from "../models/models_0";
import { PutIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutIntegrationCommand}.
 */
export interface PutIntegrationCommandInput extends PutIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link PutIntegrationCommand}.
 */
export interface PutIntegrationCommandOutput extends PutIntegrationResponse, __MetadataBearer {}

/**
 * Creates an integration between CloudWatch Logs and another service in this account. Currently, only integrations with OpenSearch Service are supported, and currently you can have only one integration in your account.
 *
 * Integrating with OpenSearch Service makes it possible for you to create curated vended logs dashboards, powered by OpenSearch Service analytics. For more information, see [Vended log dashboards powered by Amazon OpenSearch Service](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-OpenSearch-Dashboards.html).
 *
 * You can use this operation only to create a new integration. You can't modify an existing integration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutIntegrationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutIntegrationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutIntegrationRequest
 *   integrationName: "STRING_VALUE", // required
 *   resourceConfig: { // ResourceConfig Union: only one key present
 *     openSearchResourceConfig: { // OpenSearchResourceConfig
 *       kmsKeyArn: "STRING_VALUE",
 *       dataSourceRoleArn: "STRING_VALUE", // required
 *       dashboardViewerPrincipals: [ // DashboardViewerPrincipals // required
 *         "STRING_VALUE",
 *       ],
 *       applicationArn: "STRING_VALUE",
 *       retentionDays: Number("int"), // required
 *     },
 *   },
 *   integrationType: "OPENSEARCH", // required
 * };
 * const command = new PutIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // PutIntegrationResponse
 * //   integrationName: "STRING_VALUE",
 * //   integrationStatus: "PROVISIONING" || "ACTIVE" || "FAILED",
 * // };
 *
 * ```
 *
 * @param PutIntegrationCommandInput - {@link PutIntegrationCommandInput}
 * @returns {@link PutIntegrationCommandOutput}
 * @see {@link PutIntegrationCommandInput} for command's `input` shape.
 * @see {@link PutIntegrationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You have reached the maximum number of resources that can be created.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
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
export class PutIntegrationCommand extends command<PutIntegrationCommandInput, PutIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "PutIntegration",
  PutIntegration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutIntegrationRequest;
      output: PutIntegrationResponse;
    };
    sdk: {
      input: PutIntegrationCommandInput;
      output: PutIntegrationCommandOutput;
    };
  };
}
