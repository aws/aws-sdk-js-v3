// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateScraperRequest, CreateScraperResponse } from "../models/models_0";
import { de_CreateScraperCommand, se_CreateScraperCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateScraperCommand}.
 */
export interface CreateScraperCommandInput extends CreateScraperRequest {}
/**
 * @public
 *
 * The output of {@link CreateScraperCommand}.
 */
export interface CreateScraperCommandOutput extends CreateScraperResponse, __MetadataBearer {}

/**
 * <p>The <code>CreateScraper</code> operation creates a scraper to collect metrics. A
 *             scraper pulls metrics from Prometheus-compatible sources within an Amazon EKS
 *             cluster, and sends them to your Amazon Managed Service for Prometheus workspace. You can configure the
 *             scraper to control what metrics are collected, and what transformations are applied
 *             prior to sending them to your workspace.</p>
 *          <p>If needed, an IAM role will be created for you that gives Amazon Managed Service for Prometheus access to the metrics in your cluster. For more information, see
 *             <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/using-service-linked-roles.html#using-service-linked-roles-prom-scraper">Using roles for scraping metrics from EKS</a> in the <i>Amazon Managed Service for Prometheus User
 *                     Guide</i>.</p>
 *          <p>You cannot update a scraper. If you want to change the configuration of the scraper,
 *             create a new scraper and delete the old one.</p>
 *          <p>The <code>scrapeConfiguration</code> parameter contains the base64-encoded version of
 *             the YAML configuration file.</p>
 *          <note>
 *             <p>For more information about collectors, including what metrics are collected, and
 *                 how to configure the scraper, see <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector.html">Amazon Web Services managed
 *                     collectors</a> in the <i>Amazon Managed Service for Prometheus User
 *                         Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, CreateScraperCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, CreateScraperCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const input = { // CreateScraperRequest
 *   alias: "STRING_VALUE",
 *   scrapeConfiguration: { // ScrapeConfiguration Union: only one key present
 *     configurationBlob: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   },
 *   source: { // Source Union: only one key present
 *     eksConfiguration: { // EksConfiguration
 *       clusterArn: "STRING_VALUE", // required
 *       securityGroupIds: [ // SecurityGroupIds
 *         "STRING_VALUE",
 *       ],
 *       subnetIds: [ // SubnetIds // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   destination: { // Destination Union: only one key present
 *     ampConfiguration: { // AmpConfiguration
 *       workspaceArn: "STRING_VALUE", // required
 *     },
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateScraperCommand(input);
 * const response = await client.send(command);
 * // { // CreateScraperResponse
 * //   scraperId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: { // ScraperStatus
 * //     statusCode: "STRING_VALUE", // required
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateScraperCommandInput - {@link CreateScraperCommandInput}
 * @returns {@link CreateScraperCommandOutput}
 * @see {@link CreateScraperCommandInput} for command's `input` shape.
 * @see {@link CreateScraperCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request would cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resources that doesn't exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Completing the request would cause a service quota to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *             service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 * @public
 */
export class CreateScraperCommand extends $Command
  .classBuilder<
    CreateScraperCommandInput,
    CreateScraperCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPrometheusService", "CreateScraper", {})
  .n("AmpClient", "CreateScraperCommand")
  .f(void 0, void 0)
  .ser(se_CreateScraperCommand)
  .de(de_CreateScraperCommand)
  .build() {}
