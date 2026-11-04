// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateScraperRequest, CreateScraperResponse } from "../models/models_0";
import { CreateScraper$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a scraper to collect metrics from Prometheus-compatible sources. The scraper sends the collected metrics to Amazon Managed Service for Prometheus workspaces or CloudWatch datasets. You can configure scrapers to collect metrics from Amazon EKS clusters, Amazon MSK clusters, or from VPC-based sources that support DNS-based service discovery. Scrapers are flexible. You can configure a scraper to control which metrics to collect, the frequency of collection, which transformations to apply to the metrics, and more.
 *
 * An IAM role will be created for you that Amazon Managed Service for Prometheus uses to access the metrics in your source. You must configure this role with a policy that allows it to scrape metrics from your source. For Amazon EKS sources, see [Configuring your Amazon EKS cluster](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html#AMP-collector-eks-setup) in the *Amazon Managed Service for Prometheus User Guide*. For a Kafka exporter, grant this role access with a cluster policy on the Amazon MSK cluster instead. For details, see `KafkaExporterConfiguration`.
 *
 * The `scrapeConfiguration` parameter contains the base-64 encoded YAML configuration for the scraper.
 *
 * When creating a scraper, the service creates a `Network Interface` in each **Availability Zone** that are passed into `CreateScraper` through subnets. These network interfaces are used to connect to your source within the VPC for scraping metrics.
 *
 * > **Note:** For more information about collectors, including what metrics are collected, and how to configure the scraper, see [Using an Amazon Web Services managed collector](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-collector-how-to.html) in the *Amazon Managed Service for Prometheus User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, CreateScraperCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, CreateScraperCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
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
 *     vpcConfiguration: { // VpcConfiguration
 *       securityGroupIds: [ // required
 *         "STRING_VALUE",
 *       ],
 *       subnetIds: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   destination: { // Destination Union: only one key present
 *     ampConfiguration: { // AmpConfiguration
 *       workspaceArn: "STRING_VALUE", // required
 *     },
 *     cloudWatchConfiguration: { // CloudWatchConfiguration
 *       datasetArn: "STRING_VALUE", // required
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
 *   exporters: [ // ExporterList
 *     { // ExporterConfiguration Union: only one key present
 *       openSearchConfiguration: { // OpenSearchExporterConfiguration
 *         domainArn: "STRING_VALUE", // required
 *       },
 *       kafkaConfiguration: { // KafkaExporterConfiguration
 *         clusterArn: "STRING_VALUE", // required
 *         topicFilter: "STRING_VALUE",
 *         consumerGroupFilter: "STRING_VALUE",
 *       },
 *     },
 *   ],
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request would cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resources that doesn't exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Completing the request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link AmpServiceException}
 *
 * Base exception class for all service exceptions from Amp service.
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
 * @example CreateScraper with generic VPC config with mandatory securityGroupIds and subnetIds
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
 *     vpcConfiguration: {
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
export class CreateScraperCommand extends command<CreateScraperCommandInput, CreateScraperCommandOutput>(
  _ep0,
  _mw0,
  "CreateScraper",
  CreateScraper$
) {
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
