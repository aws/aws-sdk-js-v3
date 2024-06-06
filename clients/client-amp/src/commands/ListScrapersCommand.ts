// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListScrapersRequest, ListScrapersResponse } from "../models/models_0";
import { de_ListScrapersCommand, se_ListScrapersCommand } from "../protocols/Aws_restJson1";

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
 * <p>The <code>ListScrapers</code> operation lists all of the scrapers in
 *             your account. This includes scrapers being created or deleted. You can optionally
 *             filter the returned list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, ListScrapersCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, ListScrapersCommand } = require("@aws-sdk/client-amp"); // CommonJS import
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
 * //       },
 * //       destination: { // Destination Union: only one key present
 * //         ampConfiguration: { // AmpConfiguration
 * //           workspaceArn: "STRING_VALUE", // required
 * //         },
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
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *             service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPrometheusService", "ListScrapers", {})
  .n("AmpClient", "ListScrapersCommand")
  .f(void 0, void 0)
  .ser(se_ListScrapersCommand)
  .de(de_ListScrapersCommand)
  .build() {}
