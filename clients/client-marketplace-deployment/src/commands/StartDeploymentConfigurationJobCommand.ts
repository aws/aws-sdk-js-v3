// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartDeploymentConfigurationJobRequest,
  StartDeploymentConfigurationJobResponse,
} from "../models/models_0";
import { StartDeploymentConfigurationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartDeploymentConfigurationJobCommand}.
 */
export interface StartDeploymentConfigurationJobCommandInput extends StartDeploymentConfigurationJobRequest {}
/**
 * @public
 *
 * The output of {@link StartDeploymentConfigurationJobCommand}.
 */
export interface StartDeploymentConfigurationJobCommandOutput extends StartDeploymentConfigurationJobResponse, __MetadataBearer {}

/**
 * <p>Starts a job that publishes a deployment configuration for a product and delivery option. The job runs asynchronously. Use <code>GetDeploymentConfigurationJob</code> to track its status. When the job reaches the <code>SUCCEEDED</code> status, its configuration becomes the active deployment configuration for the product and delivery option.</p> <p>The populated member of <code>configuration</code> must match the <code>deliveryOptionType</code> in the request path.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDeploymentClient, StartDeploymentConfigurationJobCommand } from "@aws-sdk/client-marketplace-deployment"; // ES Modules import
 * // const { MarketplaceDeploymentClient, StartDeploymentConfigurationJobCommand } = require("@aws-sdk/client-marketplace-deployment"); // CommonJS import
 * // import type { MarketplaceDeploymentClientConfig } from "@aws-sdk/client-marketplace-deployment";
 * const config = {}; // type is MarketplaceDeploymentClientConfig
 * const client = new MarketplaceDeploymentClient(config);
 * const input = { // StartDeploymentConfigurationJobRequest
 *   catalog: "STRING_VALUE", // required
 *   productId: "STRING_VALUE", // required
 *   deliveryOptionType: "data-as-a-service", // required
 *   configuration: { // DeploymentConfigurationDetail Union: only one key present
 *     dataAsAService: { // DataAsAServiceConfigurationDetail
 *       fulfillmentUrl: "STRING_VALUE", // required
 *     },
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartDeploymentConfigurationJobCommand(input);
 * const response = await client.send(command);
 * // { // StartDeploymentConfigurationJobResponse
 * //   jobId: "STRING_VALUE", // required
 * //   configuration: { // DeploymentConfigurationDetail Union: only one key present
 * //     dataAsAService: { // DataAsAServiceConfigurationDetail
 * //       fulfillmentUrl: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StartDeploymentConfigurationJobCommandInput - {@link StartDeploymentConfigurationJobCommandInput}
 * @returns {@link StartDeploymentConfigurationJobCommandOutput}
 * @see {@link StartDeploymentConfigurationJobCommandInput} for command's `input` shape.
 * @see {@link StartDeploymentConfigurationJobCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceDeploymentClientResolvedConfig | config} for MarketplaceDeploymentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal service exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource wasn't found.</p>
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
 * @example Start a Data-as-a-Service deployment configuration job
 * ```javascript
 * // Starts a job that publishes a Data-as-a-Service deployment configuration. The job starts in the IN_PROGRESS status. Call GetDeploymentConfigurationJob to check when it reaches SUCCEEDED or FAILED.
 * const input = {
 *   catalog: "AWSMarketplace",
 *   clientToken: "some-unique-uuid-between-32-and-64-characters",
 *   configuration: {
 *     dataAsAService: {
 *       fulfillmentUrl: "https://example.com/daas/register"
 *     }
 *   },
 *   deliveryOptionType: "data-as-a-service",
 *   productId: "product-1234"
 * };
 * const command = new StartDeploymentConfigurationJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   configuration: {
 *     dataAsAService: {
 *       fulfillmentUrl: "https://example.com/daas/register"
 *     }
 *   },
 *   createdAt: "2026-09-18T08:52:46.397Z",
 *   jobId: "1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d",
 *   status: "IN_PROGRESS"
 * }
 * *\/
 * ```
 *
 * @example Start fails when the product or catalog doesn't exist
 * ```javascript
 * // If the product or catalog doesn't exist, the operation returns a ResourceNotFoundException.
 * const input = {
 *   catalog: "AWSMarketplace",
 *   configuration: {
 *     dataAsAService: {
 *       fulfillmentUrl: "https://example.com/daas/register"
 *     }
 *   },
 *   deliveryOptionType: "data-as-a-service",
 *   productId: "product-does-not-exist"
 * };
 * const command = new StartDeploymentConfigurationJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Start fails when the caller is not the product seller
 * ```javascript
 * // If the caller isn't the seller of the product, the operation returns an AccessDeniedException.
 * const input = {
 *   catalog: "AWSMarketplace",
 *   configuration: {
 *     dataAsAService: {
 *       fulfillmentUrl: "https://example.com/daas/register"
 *     }
 *   },
 *   deliveryOptionType: "data-as-a-service",
 *   productId: "product-1234"
 * };
 * const command = new StartDeploymentConfigurationJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class StartDeploymentConfigurationJobCommand extends command<StartDeploymentConfigurationJobCommandInput, StartDeploymentConfigurationJobCommandOutput>(
  _ep0,
  _mw0,
  "StartDeploymentConfigurationJob",
  StartDeploymentConfigurationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDeploymentConfigurationJobRequest;
      output: StartDeploymentConfigurationJobResponse;
    };
    sdk: {
      input: StartDeploymentConfigurationJobCommandInput;
      output: StartDeploymentConfigurationJobCommandOutput;
    };
  };
}
