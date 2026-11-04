// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartChangeSetRequest, StartChangeSetResponse } from "../models/models_0";
import { StartChangeSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Allows you to request changes for your entities. Within a single `ChangeSet`, you can't start the same change type against the same entity multiple times. Additionally, when a `ChangeSet` is running, all the entities targeted by the different changes are locked until the change set has completed (either succeeded, cancelled, or failed). If you try to start a change set containing a change against an entity that is already locked, you will receive a `ResourceInUseException` error.
 *
 * For example, you can't start the `ChangeSet` described in the [example](https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples) later in this topic because it contains two changes to run the same change type (`AddRevisions`) against the same entity (`entity-id@1`).
 *
 * For more information about working with change sets, see [Working with change sets](https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets). For information about change types for single-AMI products, see [Working with single-AMI products](https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products). Also, for more information about change types available for container-based products, see [Working with container products](https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products).
 *
 * To download "DetailsDocument" shapes, see [Python](https://github.com/awslabs/aws-marketplace-catalog-api-shapes-for-python) and [Java](https://github.com/awslabs/aws-marketplace-catalog-api-shapes-for-java/tree/main) shapes on GitHub.
 *
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
 *
 * Access is denied.
 *
 * HTTP status code: 403
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * There was an internal service exception.
 *
 * HTTP status code: 500
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The resource is currently in use.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource wasn't found.
 *
 * HTTP status code: 404
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The maximum number of open requests per account has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Too many requests.
 *
 * HTTP status code: 429
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An error occurred during validation.
 *
 * HTTP status code: 422
 *
 * @throws {@link MarketplaceCatalogServiceException}
 *
 * Base exception class for all service exceptions from MarketplaceCatalog service.
 *
 * @public
 */
export class StartChangeSetCommand extends command<StartChangeSetCommandInput, StartChangeSetCommandOutput>(
  _ep0,
  _mw0,
  "StartChangeSet",
  StartChangeSet$
) {
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
