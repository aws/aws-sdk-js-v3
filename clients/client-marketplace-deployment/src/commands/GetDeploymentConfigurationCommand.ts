// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDeploymentConfigurationRequest, GetDeploymentConfigurationResponse } from "../models/models_0";
import { GetDeploymentConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDeploymentConfigurationCommand}.
 */
export interface GetDeploymentConfigurationCommandInput extends GetDeploymentConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetDeploymentConfigurationCommand}.
 */
export interface GetDeploymentConfigurationCommandOutput extends GetDeploymentConfigurationResponse, __MetadataBearer {}

/**
 * <p>Returns the active deployment configuration for a product and delivery option. The active deployment configuration is the configuration from the most recent successful deployment configuration job. The seller that owns the product and buyers entitled to the product can call this operation.</p> <p>If the product and delivery option have no active deployment configuration, the operation returns a <code>ResourceNotFoundException</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDeploymentClient, GetDeploymentConfigurationCommand } from "@aws-sdk/client-marketplace-deployment"; // ES Modules import
 * // const { MarketplaceDeploymentClient, GetDeploymentConfigurationCommand } = require("@aws-sdk/client-marketplace-deployment"); // CommonJS import
 * // import type { MarketplaceDeploymentClientConfig } from "@aws-sdk/client-marketplace-deployment";
 * const config = {}; // type is MarketplaceDeploymentClientConfig
 * const client = new MarketplaceDeploymentClient(config);
 * const input = { // GetDeploymentConfigurationRequest
 *   catalog: "STRING_VALUE", // required
 *   productId: "STRING_VALUE", // required
 *   deliveryOptionType: "data-as-a-service", // required
 * };
 * const command = new GetDeploymentConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentConfigurationResponse
 * //   configuration: { // DeploymentConfigurationDetail Union: only one key present
 * //     dataAsAService: { // DataAsAServiceConfigurationDetail
 * //       fulfillmentUrl: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDeploymentConfigurationCommandInput - {@link GetDeploymentConfigurationCommandInput}
 * @returns {@link GetDeploymentConfigurationCommandOutput}
 * @see {@link GetDeploymentConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentConfigurationCommandOutput} for command's `response` shape.
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
 * @example Get the active deployment configuration
 * ```javascript
 * // Returns only the current active configuration for the owning seller or an entitled buyer.
 * const input = {
 *   catalog: "AWSMarketplace",
 *   deliveryOptionType: "data-as-a-service",
 *   productId: "product-1234"
 * };
 * const command = new GetDeploymentConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   configuration: {
 *     dataAsAService: {
 *       fulfillmentUrl: "https://example.com/daas/register"
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @example Get active configuration fails when none exists
 * ```javascript
 * // If the product and delivery option have no active deployment configuration, the operation returns a ResourceNotFoundException.
 * const input = {
 *   catalog: "AWSMarketplace",
 *   deliveryOptionType: "data-as-a-service",
 *   productId: "product-1234"
 * };
 * const command = new GetDeploymentConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @example Get active configuration fails for an unauthorized caller
 * ```javascript
 * // If the caller is neither the seller of the product nor a buyer entitled to it, the operation returns an AccessDeniedException.
 * const input = {
 *   catalog: "AWSMarketplace",
 *   deliveryOptionType: "data-as-a-service",
 *   productId: "product-1234"
 * };
 * const command = new GetDeploymentConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class GetDeploymentConfigurationCommand extends command<GetDeploymentConfigurationCommandInput, GetDeploymentConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetDeploymentConfiguration",
  GetDeploymentConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeploymentConfigurationRequest;
      output: GetDeploymentConfigurationResponse;
    };
    sdk: {
      input: GetDeploymentConfigurationCommandInput;
      output: GetDeploymentConfigurationCommandOutput;
    };
  };
}
