// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeScraperRequest, DescribeScraperResponse } from "../models/models_0";
import { DescribeScraper } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeScraperCommand}.
 */
export interface DescribeScraperCommandInput extends DescribeScraperRequest {}
/**
 * @public
 *
 * The output of {@link DescribeScraperCommand}.
 */
export interface DescribeScraperCommandOutput extends DescribeScraperResponse, __MetadataBearer {}

/**
 * <p>The <code>DescribeScraper</code> operation displays information about an existing scraper.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DescribeScraperCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DescribeScraperCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DescribeScraperRequest
 *   scraperId: "STRING_VALUE", // required
 * };
 * const command = new DescribeScraperCommand(input);
 * const response = await client.send(command);
 * // { // DescribeScraperResponse
 * //   scraper: { // ScraperDescription
 * //     alias: "STRING_VALUE",
 * //     scraperId: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     roleArn: "STRING_VALUE", // required
 * //     status: { // ScraperStatus
 * //       statusCode: "STRING_VALUE", // required
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     statusReason: "STRING_VALUE",
 * //     scrapeConfiguration: { // ScrapeConfiguration Union: only one key present
 * //       configurationBlob: new Uint8Array(),
 * //     },
 * //     source: { // Source Union: only one key present
 * //       eksConfiguration: { // EksConfiguration
 * //         clusterArn: "STRING_VALUE", // required
 * //         securityGroupIds: [ // SecurityGroupIds
 * //           "STRING_VALUE",
 * //         ],
 * //         subnetIds: [ // SubnetIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     destination: { // Destination Union: only one key present
 * //       ampConfiguration: { // AmpConfiguration
 * //         workspaceArn: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     roleConfiguration: { // RoleConfiguration
 * //       sourceRoleArn: "STRING_VALUE",
 * //       targetRoleArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeScraperCommandInput - {@link DescribeScraperCommandInput}
 * @returns {@link DescribeScraperCommandOutput}
 * @see {@link DescribeScraperCommandInput} for command's `input` shape.
 * @see {@link DescribeScraperCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resources that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 *
 * @example DescribeScraper, with no statusReason to report
 * ```javascript
 * //
 * const input = {
 *   scraperId: "scraper-123"
 * };
 * const command = new DescribeScraperCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   scraper: {
 *     alias: "alias",
 *     arn: "arn:aws:aps:us-west-2:123456789012:scraper/scraper-123",
 *     createdAt: "2023-01-01T00:00:00Z",
 *     destination: {
 *       ampConfiguration: {
 *         workspaceArn: "arn:aws:aps:us-west-2:123456789012:workspace/ws-ogh2u499-ce12-hg89-v6c7-123412341234"
 *       }
 *     },
 *     lastModifiedAt: "2020-01-02T00:00:00Z",
 *     roleArn: "arn:aws:iam::123456789012:role/exampleRole",
 *     scrapeConfiguration: {
 *       configurationBlob: "blob"
 *     },
 *     scraperId: "scraper-123",
 *     source: {
 *       eksConfiguration: {
 *         clusterArn: "arn:aws:eks:us-west-2:123456789012:cluster/example",
 *         securityGroupIds: [
 *           "sg-abc123"
 *         ],
 *         subnetIds: [
 *           "subnet-abc123"
 *         ]
 *       }
 *     },
 *     status: {
 *       statusCode: "ACTIVE"
 *     },
 *     tags: {
 *       exampleTag: "exampleValue"
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeScraperCommand extends $Command
  .classBuilder<
    DescribeScraperCommandInput,
    DescribeScraperCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPrometheusService", "DescribeScraper", {})
  .n("AmpClient", "DescribeScraperCommand")
  .sc(DescribeScraper)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeScraperRequest;
      output: DescribeScraperResponse;
    };
    sdk: {
      input: DescribeScraperCommandInput;
      output: DescribeScraperCommandOutput;
    };
  };
}
