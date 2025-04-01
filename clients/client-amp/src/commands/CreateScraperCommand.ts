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
 *             cluster, and sends them to your Amazon Managed Service for Prometheus workspace. Scrapers are
 *             flexible, and can be configured to control what metrics are collected, the
 *             frequency of collection, what transformations are applied to the metrics, and more.</p>
 *          <p>An IAM role will be created for you that Amazon Managed Service for Prometheus uses
 *             to access the metrics in your cluster. You must configure this role with a policy that
 *             allows it to scrape metrics from your cluster. For more information, see
 *             <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-eks-setup">Configuring your Amazon EKS cluster</a> in the <i>Amazon Managed Service for Prometheus User Guide</i>.</p>
 *          <p>The <code>scrapeConfiguration</code> parameter contains the base-64 encoded YAML
 *             configuration for the scraper.</p>
 *          <note>
 *             <p>For more information about collectors, including what metrics are collected, and
 *                 how to configure the scraper, see <a href="https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html">Using an
 *                     Amazon Web Services managed
 *                     collector</a> in the <i>Amazon Managed Service for Prometheus User
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
 *   roleConfiguration: { // RoleConfiguration
 *     sourceRoleArn: "STRING_VALUE",
 *     targetRoleArn: "STRING_VALUE",
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
 *
 * @example CreateScraper with optional alias input, optional clientToken input, and one set of tags
 * ```javascript
 * //
 * const input = {
 *   alias: "alias",
 *   clientToken: "token",
 *   destination: {
 *     ampConfiguration: {
 *       workspaceArn: "arn:aws:aps:us-west-2:123456789012:workspace/ws-ogh2u499-ce12-hg89-v6c7-123412341234"
 *     }
 *   },
 *   scrapeConfiguration: {
 *     configurationBlob: "blob"
 *   },
 *   source: {
 *     eksConfiguration: {
 *       clusterArn: "arn:aws:eks:us-west-2:123456789012:cluster/example",
 *       securityGroupIds: [
 *         "sg-abc123"
 *       ],
 *       subnetIds: [
 *         "subnet-abc123"
 *       ]
 *     }
 *   },
 *   tags: {
 *     exampleTag: "exampleValue"
 *   }
 * };
 * const command = new CreateScraperCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:aps:us-west-2:123456789012:scraper/scraper-123",
 *   scraperId: "scraper-123",
 *   status: {
 *     statusCode: "CREATING"
 *   },
 *   tags: {
 *     exampleTag: "exampleValue"
 *   }
 * }
 * *\/
 * ```
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
  .ep(commonParams)
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
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateScraperRequest;
      output: CreateScraperResponse;
    };
    sdk: {
      input: CreateScraperCommandInput;
      output: CreateScraperCommandOutput;
    };
  };
}
