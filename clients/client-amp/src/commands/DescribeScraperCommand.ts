// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeScraperRequest, DescribeScraperResponse } from "../models/models_0";
import { de_DescribeScraperCommand, se_DescribeScraperCommand } from "../protocols/Aws_restJson1";

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
 * <p>The <code>DescribeScraper</code> operation displays information about an existing
 *             scraper.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DescribeScraperCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DescribeScraperCommand } = require("@aws-sdk/client-amp"); // CommonJS import
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
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *             service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPrometheusService", "DescribeScraper", {})
  .n("AmpClient", "DescribeScraperCommand")
  .f(void 0, void 0)
  .ser(se_DescribeScraperCommand)
  .de(de_DescribeScraperCommand)
  .build() {}
