// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListScrapersRequest, ListScrapersResponse } from "../models/models_0";
import { ListScrapers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListScrapersCommand}.
 */
export interface ListScrapersCommandInput extends ListScrapersRequest {}
/**
 * @public
 *
 * The output of {@link ListScrapersCommand}.
 */
export interface ListScrapersCommandOutput extends ListScrapersResponse, __MetadataBearer {}

/**
 * <p>The <code>ListScrapers</code> operation lists all of the scrapers in your account. This includes scrapers being created or deleted. You can optionally filter the returned list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, ListScrapersCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, ListScrapersCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // ListScrapersRequest
 *   filters: { // ScraperFilters
 *     "<keys>": [ // FilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListScrapersCommand(input);
 * const response = await client.send(command);
 * // { // ListScrapersResponse
 * //   scrapers: [ // ScraperSummaryList // required
 * //     { // ScraperSummary
 * //       alias: "STRING_VALUE",
 * //       scraperId: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       status: { // ScraperStatus
 * //         statusCode: "STRING_VALUE", // required
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastModifiedAt: new Date("TIMESTAMP"), // required
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       statusReason: "STRING_VALUE",
 * //       source: { // Source Union: only one key present
 * //         eksConfiguration: { // EksConfiguration
 * //           clusterArn: "STRING_VALUE", // required
 * //           securityGroupIds: [ // SecurityGroupIds
 * //             "STRING_VALUE",
 * //           ],
 * //           subnetIds: [ // SubnetIds // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         vpcConfiguration: { // VpcConfiguration
 * //           securityGroupIds: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           subnetIds: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       destination: { // Destination Union: only one key present
 * //         ampConfiguration: { // AmpConfiguration
 * //           workspaceArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       roleConfiguration: { // RoleConfiguration
 * //         sourceRoleArn: "STRING_VALUE",
 * //         targetRoleArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListScrapersCommandInput - {@link ListScrapersCommandInput}
 * @returns {@link ListScrapersCommandOutput}
 * @see {@link ListScrapersCommandInput} for command's `input` shape.
 * @see {@link ListScrapersCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
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
 * @example ListScrapers, with a max result of 2, using a pagination token from a previous call to ListScrapers
 * ```javascript
 * //
 * const input = {
 *   maxResults: 2,
 *   nextToken: "previouslyGeneratedToken"
 * };
 * const command = new ListScrapersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   scrapers: [
 *     {
 *       alias: "alias1",
 *       arn: "arn:aws:aps:us-west-2:123456789012:scraper/scraper-123",
 *       createdAt: "2023-01-01T00:00:00Z",
 *       destination: {
 *         ampConfiguration: {
 *           workspaceArn: "arn:aws:aps:us-west-2:123456789012:workspace/ws-ogh2u499-ce12-hg89-v6c7-123412341234"
 *         }
 *       },
 *       lastModifiedAt: "2020-01-02T00:00:00Z",
 *       roleArn: "arn:aws:iam::123456789012:role/exampleRole",
 *       scraperId: "scraper-123",
 *       source: {
 *         eksConfiguration: {
 *           clusterArn: "arn:aws:eks:us-west-2:123456789012:cluster/example1",
 *           securityGroupIds: [
 *             "sg-abc123"
 *           ],
 *           subnetIds: [
 *             "subnet-abc123"
 *           ]
 *         }
 *       },
 *       status: {
 *         statusCode: "ACTIVE"
 *       },
 *       tags: {
 *         exampleTag: "exampleValue"
 *       }
 *     },
 *     {
 *       alias: "alias2",
 *       arn: "arn:aws:aps:us-west-2:123456789012:scraper/scraper-456",
 *       createdAt: "2023-01-01T00:00:00Z",
 *       destination: {
 *         ampConfiguration: {
 *           workspaceArn: "arn:aws:aps:us-west-2:123456789012:workspace/ws-ogh2u499-ce12-hg89-v6c7-123412341234"
 *         }
 *       },
 *       lastModifiedAt: "2020-01-02T00:00:00Z",
 *       roleArn: "arn:aws:iam::123456789012:role/exampleRole",
 *       scraperId: "scraper-456",
 *       source: {
 *         eksConfiguration: {
 *           clusterArn: "arn:aws:eks:us-west-2:123456789012:cluster/example2",
 *           securityGroupIds: [
 *             "sg-abc456"
 *           ],
 *           subnetIds: [
 *             "subnet-abc456"
 *           ]
 *         }
 *       },
 *       status: {
 *         statusCode: "CREATING"
 *       },
 *       tags: {
 *         exampleTag: "exampleValue"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example ListScrapers, with filters
 * ```javascript
 * //
 * const input = {
 *   filters: {
 *     alias: [
 *       "alias1"
 *     ],
 *     sourceArn: [
 *       "arn:aws:eks:us-west-2:123456789012:cluster/example1"
 *     ],
 *     status: [
 *       "ACTIVE"
 *     ]
 *   }
 * };
 * const command = new ListScrapersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   scrapers: [
 *     {
 *       alias: "alias1",
 *       arn: "arn:aws:aps:us-west-2:123456789012:scraper/scraper-123",
 *       createdAt: "2023-01-01T00:00:00Z",
 *       destination: {
 *         ampConfiguration: {
 *           workspaceArn: "arn:aws:aps:us-west-2:123456789012:workspace/ws-ogh2u499-ce12-hg89-v6c7-123412341234"
 *         }
 *       },
 *       lastModifiedAt: "2020-01-02T00:00:00Z",
 *       roleArn: "arn:aws:iam::123456789012:role/exampleRole",
 *       scraperId: "scraper-123",
 *       source: {
 *         eksConfiguration: {
 *           clusterArn: "arn:aws:eks:us-west-2:123456789012:cluster/example1",
 *           securityGroupIds: [
 *             "sg-abc123"
 *           ],
 *           subnetIds: [
 *             "subnet-abc123"
 *           ]
 *         }
 *       },
 *       status: {
 *         statusCode: "ACTIVE"
 *       },
 *       tags: {
 *         exampleTag: "exampleValue"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListScrapersCommand extends $Command
  .classBuilder<
    ListScrapersCommandInput,
    ListScrapersCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPrometheusService", "ListScrapers", {})
  .n("AmpClient", "ListScrapersCommand")
  .sc(ListScrapers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScrapersRequest;
      output: ListScrapersResponse;
    };
    sdk: {
      input: ListScrapersCommandInput;
      output: ListScrapersCommandOutput;
    };
  };
}
