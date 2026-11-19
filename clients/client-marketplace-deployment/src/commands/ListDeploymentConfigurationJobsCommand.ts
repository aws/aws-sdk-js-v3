// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListDeploymentConfigurationJobsRequest,
  ListDeploymentConfigurationJobsResponse,
} from "../models/models_0";
import { ListDeploymentConfigurationJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDeploymentConfigurationJobsCommand}.
 */
export interface ListDeploymentConfigurationJobsCommandInput extends ListDeploymentConfigurationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListDeploymentConfigurationJobsCommand}.
 */
export interface ListDeploymentConfigurationJobsCommandOutput extends ListDeploymentConfigurationJobsResponse, __MetadataBearer {}

/**
 * <p>Lists the deployment configuration jobs that you started for a product and delivery option, ordered from newest to oldest. Results are paginated. Use the <code>nextToken</code> parameter to retrieve additional results.</p> <p>If you haven't started any jobs for the product and delivery option, the operation returns an empty <code>jobs</code> list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDeploymentClient, ListDeploymentConfigurationJobsCommand } from "@aws-sdk/client-marketplace-deployment"; // ES Modules import
 * // const { MarketplaceDeploymentClient, ListDeploymentConfigurationJobsCommand } = require("@aws-sdk/client-marketplace-deployment"); // CommonJS import
 * // import type { MarketplaceDeploymentClientConfig } from "@aws-sdk/client-marketplace-deployment";
 * const config = {}; // type is MarketplaceDeploymentClientConfig
 * const client = new MarketplaceDeploymentClient(config);
 * const input = { // ListDeploymentConfigurationJobsRequest
 *   catalog: "STRING_VALUE", // required
 *   productId: "STRING_VALUE", // required
 *   deliveryOptionType: "data-as-a-service", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDeploymentConfigurationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeploymentConfigurationJobsResponse
 * //   jobs: [ // DeploymentConfigurationJobSummaries // required
 * //     { // DeploymentConfigurationJobSummary
 * //       jobId: "STRING_VALUE", // required
 * //       status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED", // required
 * //       configuration: { // DeploymentConfigurationDetail Union: only one key present
 * //         dataAsAService: { // DataAsAServiceConfigurationDetail
 * //           fulfillmentUrl: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeploymentConfigurationJobsCommandInput - {@link ListDeploymentConfigurationJobsCommandInput}
 * @returns {@link ListDeploymentConfigurationJobsCommandOutput}
 * @see {@link ListDeploymentConfigurationJobsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentConfigurationJobsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceDeploymentClientResolvedConfig | config} for MarketplaceDeploymentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal service exception.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Too many requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An error occurred during validation.</p>
 *
 * @throws {@link MarketplaceDeploymentServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceDeployment service.</p>
 *
 *
 * @example List jobs, newest first
 * ```javascript
 * // Returns the caller's jobs ordered by newest createdAt first, with an optional nextToken when more pages exist.
 * const input = {
 *   catalog: "AWSMarketplace",
 *   deliveryOptionType: "data-as-a-service",
 *   maxResults: 20,
 *   productId: "product-1234"
 * };
 * const command = new ListDeploymentConfigurationJobsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobs: [
 *     {
 *       configuration: {
 *         dataAsAService: {
 *           fulfillmentUrl: "https://example.com/daas/register"
 *         }
 *       },
 *       createdAt: "2026-09-18T09:10:00.000Z",
 *       jobId: "9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c",
 *       status: "FAILED"
 *     },
 *     {
 *       configuration: {
 *         dataAsAService: {
 *           fulfillmentUrl: "https://example.com/daas/register"
 *         }
 *       },
 *       createdAt: "2026-09-18T08:52:46.397Z",
 *       jobId: "1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d",
 *       status: "SUCCEEDED"
 *     }
 *   ],
 *   nextToken: "b3BhcXVlLXBhZ2luYXRpb24tY3Vyc29y"
 * }
 * *\/
 * ```
 *
 * @example List jobs returns an empty list when an authorized seller has no jobs
 * ```javascript
 * // When the caller is authorized for the product and has not started any jobs, the result is an empty jobs list with no nextToken.
 * const input = {
 *   catalog: "AWSMarketplace",
 *   deliveryOptionType: "data-as-a-service",
 *   productId: "product-1234"
 * };
 * const command = new ListDeploymentConfigurationJobsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobs:   []
 * }
 * *\/
 * ```
 *
 * @example List jobs fails for a caller not authorized for the product
 * ```javascript
 * // If the caller isn't authorized for the product, the operation returns an AccessDeniedException.
 * const input = {
 *   catalog: "AWSMarketplace",
 *   deliveryOptionType: "data-as-a-service",
 *   productId: "product-1234"
 * };
 * const command = new ListDeploymentConfigurationJobsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ListDeploymentConfigurationJobsCommand extends command<ListDeploymentConfigurationJobsCommandInput, ListDeploymentConfigurationJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListDeploymentConfigurationJobs",
  ListDeploymentConfigurationJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeploymentConfigurationJobsRequest;
      output: ListDeploymentConfigurationJobsResponse;
    };
    sdk: {
      input: ListDeploymentConfigurationJobsCommandInput;
      output: ListDeploymentConfigurationJobsCommandOutput;
    };
  };
}
