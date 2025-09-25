// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MarketplaceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceCatalogClient";
import { StartChangeSetRequest, StartChangeSetResponse } from "../models/models_0";
import { StartChangeSet } from "../schemas/schemas_2_Resource";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartChangeSetCommand}.
 */
export interface StartChangeSetCommandInput extends StartChangeSetRequest {}
/**
 * @public
 *
 * The output of {@link StartChangeSetCommand}.
 */
export interface StartChangeSetCommandOutput extends StartChangeSetResponse, __MetadataBearer {}

/**
 * <p>Allows you to request changes for your entities. Within a single
 *                 <code>ChangeSet</code>, you can't start the same change type against the same entity
 *             multiple times. Additionally, when a <code>ChangeSet</code> is running, all the entities
 *             targeted by the different changes are locked until the change set has completed (either
 *             succeeded, cancelled, or failed). If you try to start a change set containing a change
 *             against an entity that is already locked, you will receive a
 *                 <code>ResourceInUseException</code> error.</p>
 *          <p>For example, you can't start the <code>ChangeSet</code> described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic because it contains two changes to run the same
 *             change type (<code>AddRevisions</code>) against the same entity
 *                 (<code>entity-id@1</code>).</p>
 *          <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets"> Working with change sets</a>. For information about change types for
 *             single-AMI products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products">Working with single-AMI products</a>. Also, for more information about change
 *             types available for container-based products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products">Working with container products</a>.</p>
 *          <p>To download "DetailsDocument" shapes, see <a href="https://github.com/awslabs/aws-marketplace-catalog-api-shapes-for-python">Python</a>
 *             and <a href="https://github.com/awslabs/aws-marketplace-catalog-api-shapes-for-java/tree/main">Java</a> shapes on GitHub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, StartChangeSetCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, StartChangeSetCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * // import type { MarketplaceCatalogClientConfig } from "@aws-sdk/client-marketplace-catalog";
 * const config = {}; // type is MarketplaceCatalogClientConfig
 * const client = new MarketplaceCatalogClient(config);
 * const input = { // StartChangeSetRequest
 *   Catalog: "STRING_VALUE", // required
 *   ChangeSet: [ // RequestedChangeList // required
 *     { // Change
 *       ChangeType: "STRING_VALUE", // required
 *       Entity: { // Entity
 *         Type: "STRING_VALUE", // required
 *         Identifier: "STRING_VALUE",
 *       },
 *       EntityTags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       Details: "STRING_VALUE",
 *       DetailsDocument: "DOCUMENT_VALUE",
 *       ChangeName: "STRING_VALUE",
 *     },
 *   ],
 *   ChangeSetName: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE",
 *   ChangeSetTags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Intent: "VALIDATE" || "APPLY",
 * };
 * const command = new StartChangeSetCommand(input);
 * const response = await client.send(command);
 * // { // StartChangeSetResponse
 * //   ChangeSetId: "STRING_VALUE",
 * //   ChangeSetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartChangeSetCommandInput - {@link StartChangeSetCommandInput}
 * @returns {@link StartChangeSetCommandOutput}
 * @see {@link StartChangeSetCommandInput} for command's `input` shape.
 * @see {@link StartChangeSetCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for MarketplaceCatalogClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *          <p>HTTP status code: 403</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>There was an internal service exception.</p>
 *          <p>HTTP status code: 500</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is currently in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource wasn't found.</p>
 *          <p>HTTP status code: 404</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The maximum number of open requests per account has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Too many requests.</p>
 *          <p>HTTP status code: 429</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An error occurred during validation.</p>
 *          <p>HTTP status code: 422</p>
 *
 * @throws {@link MarketplaceCatalogServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceCatalog service.</p>
 *
 *
 * @public
 */
export class StartChangeSetCommand extends $Command
  .classBuilder<
    StartChangeSetCommandInput,
    StartChangeSetCommandOutput,
    MarketplaceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMPSeymour", "StartChangeSet", {})
  .n("MarketplaceCatalogClient", "StartChangeSetCommand")
  .sc(StartChangeSet)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartChangeSetRequest;
      output: StartChangeSetResponse;
    };
    sdk: {
      input: StartChangeSetCommandInput;
      output: StartChangeSetCommandOutput;
    };
  };
}
