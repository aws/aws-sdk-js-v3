// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateScraperRequest, UpdateScraperResponse } from "../models/models_0";
import { UpdateScraper$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateScraperCommand}.
 */
export interface UpdateScraperCommandInput extends UpdateScraperRequest {}
/**
 * @public
 *
 * The output of {@link UpdateScraperCommand}.
 */
export interface UpdateScraperCommandOutput extends UpdateScraperResponse, __MetadataBearer {}

/**
 * Updates an existing scraper.
 *
 * You can't use this function to update the source from which the scraper is collecting metrics. To change the source, delete the scraper and create a new one.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, UpdateScraperCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, UpdateScraperCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // UpdateScraperRequest
 *   scraperId: "STRING_VALUE", // required
 *   alias: "STRING_VALUE",
 *   scrapeConfiguration: { // ScrapeConfiguration Union: only one key present
 *     configurationBlob: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
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
 * const command = new UpdateScraperCommand(input);
 * const response = await client.send(command);
 * // { // UpdateScraperResponse
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
 * @param UpdateScraperCommandInput - {@link UpdateScraperCommandInput}
 * @returns {@link UpdateScraperCommandOutput}
 * @see {@link UpdateScraperCommandInput} for command's `input` shape.
 * @see {@link UpdateScraperCommandOutput} for command's `response` shape.
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
 * @example UpdateScraper with all optional parameters
 * ```javascript
 * //
 * const input = {
 *   alias: "alias-update",
 *   clientToken: "token",
 *   destination: {
 *     ampConfiguration: {
 *       workspaceArn: "arn:aws:aps:us-west-2:123456789012:workspace/ws-ogh2u499-ce12-hg89-v6c7-123412341234-update"
 *     }
 *   },
 *   scrapeConfiguration: {
 *     configurationBlob: "blob-update"
 *   },
 *   scraperId: "scraper-123"
 * };
 * const command = new UpdateScraperCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   arn: "arn:aws:aps:us-west-2:123456789012:scraper/scraper-123",
 *   scraperId: "scraper-123",
 *   status: {
 *     statusCode: "UPDATING"
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
export class UpdateScraperCommand extends command<UpdateScraperCommandInput, UpdateScraperCommandOutput>(
  _ep0,
  _mw0,
  "UpdateScraper",
  UpdateScraper$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateScraperRequest;
      output: UpdateScraperResponse;
    };
    sdk: {
      input: UpdateScraperCommandInput;
      output: UpdateScraperCommandOutput;
    };
  };
}
