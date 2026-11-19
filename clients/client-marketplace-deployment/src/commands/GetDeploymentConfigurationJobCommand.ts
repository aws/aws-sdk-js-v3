// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDeploymentConfigurationJobRequest, GetDeploymentConfigurationJobResponse } from "../models/models_0";
import { GetDeploymentConfigurationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDeploymentConfigurationJobCommand}.
 */
export interface GetDeploymentConfigurationJobCommandInput extends GetDeploymentConfigurationJobRequest {}
/**
 * @public
 *
 * The output of {@link GetDeploymentConfigurationJobCommand}.
 */
export interface GetDeploymentConfigurationJobCommandOutput extends GetDeploymentConfigurationJobResponse, __MetadataBearer {}

/**
 * <p>Returns the details of a deployment configuration job. Only the seller that started the job can call this operation.</p> <p>If the job doesn't belong to the product and delivery option in the request path, the operation returns a <code>ResourceNotFoundException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDeploymentClient, GetDeploymentConfigurationJobCommand } from "@aws-sdk/client-marketplace-deployment"; // ES Modules import
 * // const { MarketplaceDeploymentClient, GetDeploymentConfigurationJobCommand } = require("@aws-sdk/client-marketplace-deployment"); // CommonJS import
 * // import type { MarketplaceDeploymentClientConfig } from "@aws-sdk/client-marketplace-deployment";
 * const config = {}; // type is MarketplaceDeploymentClientConfig
 * const client = new MarketplaceDeploymentClient(config);
 * const input = { // GetDeploymentConfigurationJobRequest
 *   catalog: "STRING_VALUE", // required
 *   productId: "STRING_VALUE", // required
 *   deliveryOptionType: "data-as-a-service", // required
 *   jobId: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentConfigurationJobCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentConfigurationJobResponse
 * //   jobId: "STRING_VALUE", // required
 * //   configuration: { // DeploymentConfigurationDetail Union: only one key present
 * //     dataAsAService: { // DataAsAServiceConfigurationDetail
 * //       fulfillmentUrl: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   configurationArn: "STRING_VALUE",
 * //   endedAt: new Date("TIMESTAMP"),
 * //   errorCode: "FULFILLMENT_URL_UNREACHABLE" || "INTERNAL_ERROR" || "ENDPOINT_INVALID",
 * //   message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDeploymentConfigurationJobCommandInput - {@link GetDeploymentConfigurationJobCommandInput}
 * @returns {@link GetDeploymentConfigurationJobCommandOutput}
 * @see {@link GetDeploymentConfigurationJobCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentConfigurationJobCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceDeploymentClientResolvedConfig | config} for MarketplaceDeploymentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
 * @example Get a succeeded job
 * ```javascript
 * // A succeeded job includes endedAt and the ARN of the deployment configuration that it published.
 * const input = {
 *   catalog: "AWSMarketplace",
 *   deliveryOptionType: "data-as-a-service",
 *   jobId: "1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d",
 *   productId: "product-1234"
 * };
 * const command = new GetDeploymentConfigurationJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   configuration: {
 *     dataAsAService: {
 *       fulfillmentUrl: "https://example.com/daas/register"
 *     }
 *   },
 *   configurationArn: "arn:aws:aws-marketplace:us-east-1:123456789012:DeploymentConfiguration:catalogs/AWSMarketplace/products/product-1234/delivery-options/data-as-a-service",
 *   createdAt: "2026-09-18T08:52:46.397Z",
 *   endedAt: "2026-09-18T08:53:10.001Z",
 *   jobId: "1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d",
 *   status: "SUCCEEDED"
 * }
 * *\/
 * ```
 *
 * @example Get a failed job
 * ```javascript
 * // A failed job includes errorCode, message, and endedAt.
 * const input = {
 *   catalog: "AWSMarketplace",
 *   deliveryOptionType: "data-as-a-service",
 *   jobId: "9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c",
 *   productId: "product-1234"
 * };
 * const command = new GetDeploymentConfigurationJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   configuration: {
 *     dataAsAService: {
 *       fulfillmentUrl: "https://example.com/daas/register"
 *     }
 *   },
 *   createdAt: "2026-09-18T08:52:46.397Z",
 *   endedAt: "2026-09-18T08:53:05.221Z",
 *   errorCode: "FULFILLMENT_URL_UNREACHABLE",
 *   jobId: "9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c",
 *   message: "The fulfillment URL could not be reached. Verify the endpoint is publicly reachable over HTTPS and responding.",
 *   status: "FAILED"
 * }
 * *\/
 * ```
 *
 * @example Get job fails when the job isn't found
 * ```javascript
 * // If the job doesn't exist, or doesn't belong to the product and delivery option in the request path, the operation returns a ResourceNotFoundException.
 * const input = {
 *   catalog: "AWSMarketplace",
 *   deliveryOptionType: "data-as-a-service",
 *   jobId: "abcd1234abcd1234abcd1234abcd1234",
 *   productId: "product-1234"
 * };
 * const command = new GetDeploymentConfigurationJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Get job fails for a caller that didn't start the job
 * ```javascript
 * // If the job exists but the caller isn't the seller that started it, the operation returns an AccessDeniedException.
 * const input = {
 *   catalog: "AWSMarketplace",
 *   deliveryOptionType: "data-as-a-service",
 *   jobId: "1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d",
 *   productId: "product-1234"
 * };
 * const command = new GetDeploymentConfigurationJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Get job fails for a caller not authorized for the product
 * ```javascript
 * // When the job does not exist and the caller is not authorized for the product, the result is AccessDeniedException.
 * const input = {
 *   catalog: "AWSMarketplace",
 *   deliveryOptionType: "data-as-a-service",
 *   jobId: "abcd1234abcd1234abcd1234abcd1234",
 *   productId: "product-1234"
 * };
 * const command = new GetDeploymentConfigurationJobCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class GetDeploymentConfigurationJobCommand extends command<GetDeploymentConfigurationJobCommandInput, GetDeploymentConfigurationJobCommandOutput>(
  _ep0,
  _mw0,
  "GetDeploymentConfigurationJob",
  GetDeploymentConfigurationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeploymentConfigurationJobRequest;
      output: GetDeploymentConfigurationJobResponse;
    };
    sdk: {
      input: GetDeploymentConfigurationJobCommandInput;
      output: GetDeploymentConfigurationJobCommandOutput;
    };
  };
}
