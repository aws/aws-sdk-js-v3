// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MarketplaceDeploymentClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceDeploymentClient";
import type { PutDeploymentParameterRequest, PutDeploymentParameterResponse } from "../models/models_0";
import { PutDeploymentParameter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDeploymentParameterCommand}.
 */
export interface PutDeploymentParameterCommandInput extends PutDeploymentParameterRequest {}
/**
 * @public
 *
 * The output of {@link PutDeploymentParameterCommand}.
 */
export interface PutDeploymentParameterCommandOutput extends PutDeploymentParameterResponse, __MetadataBearer {}

/**
 * <p>Creates or updates a deployment parameter and is targeted by <code>catalog</code> and <code>agreementId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceDeploymentClient, PutDeploymentParameterCommand } from "@aws-sdk/client-marketplace-deployment"; // ES Modules import
 * // const { MarketplaceDeploymentClient, PutDeploymentParameterCommand } = require("@aws-sdk/client-marketplace-deployment"); // CommonJS import
 * // import type { MarketplaceDeploymentClientConfig } from "@aws-sdk/client-marketplace-deployment";
 * const config = {}; // type is MarketplaceDeploymentClientConfig
 * const client = new MarketplaceDeploymentClient(config);
 * const input = { // PutDeploymentParameterRequest
 *   catalog: "STRING_VALUE", // required
 *   productId: "STRING_VALUE", // required
 *   agreementId: "STRING_VALUE", // required
 *   deploymentParameter: { // DeploymentParameterInput
 *     name: "STRING_VALUE", // required
 *     secretString: "STRING_VALUE", // required
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   expirationDate: new Date("TIMESTAMP"),
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new PutDeploymentParameterCommand(input);
 * const response = await client.send(command);
 * // { // PutDeploymentParameterResponse
 * //   resourceArn: "STRING_VALUE", // required
 * //   agreementId: "STRING_VALUE", // required
 * //   deploymentParameterId: "STRING_VALUE", // required
 * //   tags: { // TagsMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutDeploymentParameterCommandInput - {@link PutDeploymentParameterCommandInput}
 * @returns {@link PutDeploymentParameterCommandOutput}
 * @see {@link PutDeploymentParameterCommandInput} for command's `input` shape.
 * @see {@link PutDeploymentParameterCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The maximum number of requests per account has been exceeded.</p>
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
 * @example Creating or updating a deployment parameter
 * ```javascript
 * // The following example demonstrates creating or updating a deployment parameter named "ExampleDeploymentParameterName". The secret will be saved in the Buyer account associated with the passed `agreementId`, with the value set to the provided `secretString`. Note that the deployment parameter `secretString` can be passed in JSON string format, allowing [json-key specific CloudFormation dynamic references](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html) from a single deployment parameter.
 * const input = {
 *   agreementId: "agmt-1234",
 *   catalog: "AWSMarketplace",
 *   clientToken: "some-unique-uuid-between-32-and-64-characters",
 *   deploymentParameter: {
 *     name: "ExampleDeploymentParameterName",
 *     secretString: `{"apiKey": "helloWorldApiKey", "entityId": "fooBarEntityId"}`
 *   },
 *   productId: "product-1234"
 * };
 * const command = new PutDeploymentParameterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   agreementId: "agmt-1234",
 *   deploymentParameterId: "dp-uniqueidentifier",
 *   resourceArn: "arn:aws:aws-marketplace:us-east-1:123456789012:DeploymentParameter:catalogs/AWSMarketplace/products/product-1234/dp-uniqueidentifier",
 *   tags:   { /* empty *\/ }
 * }
 * *\/
 * ```
 *
 * @example Creating a simple deployment parameter, with tags and expiration.
 * ```javascript
 * // The following example demonstrates creating a simple deployment parameter named "ExampleSimpleDeploymentParameterName". If multiple secrets are not required, the `secretString` may be provided in String format. The provided tags are only applied on resource creation and will be ignored if the operation results in an update. The API response includes the tags present on the resource after completion of the operation.
 * const input = {
 *   agreementId: "agmt-1234",
 *   catalog: "AWSMarketplace",
 *   clientToken: "some-unique-uuid-between-32-and-64-characters",
 *   deploymentParameter: {
 *     name: "ExampleSimpleDeploymentParameterName",
 *     secretString: "MySimpleValue"
 *   },
 *   expirationDate: "2099-11-18T08:52:46.397Z",
 *   productId: "product-1234",
 *   tags: {
 *     FooKey: "BarValue",
 *     HelloKey: "WorldValue"
 *   }
 * };
 * const command = new PutDeploymentParameterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   agreementId: "agmt-1234",
 *   deploymentParameterId: "dp-uniqueidentifier",
 *   resourceArn: "arn:aws:aws-marketplace:us-east-1:123456789012:DeploymentParameter:catalogs/AWSMarketplace/products/product-1234/dp-uniqueidentifier",
 *   tags: {
 *     FooKey: "BarValue",
 *     HelloKey: "WorldValue"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutDeploymentParameterCommand extends $Command
  .classBuilder<
    PutDeploymentParameterCommandInput,
    PutDeploymentParameterCommandOutput,
    MarketplaceDeploymentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceDeploymentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMPDeploymentParametersService", "PutDeploymentParameter", {})
  .n("MarketplaceDeploymentClient", "PutDeploymentParameterCommand")
  .sc(PutDeploymentParameter$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDeploymentParameterRequest;
      output: PutDeploymentParameterResponse;
    };
    sdk: {
      input: PutDeploymentParameterCommandInput;
      output: PutDeploymentParameterCommandOutput;
    };
  };
}
