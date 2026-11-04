// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateTagOptionWithResourceInput, AssociateTagOptionWithResourceOutput } from "../models/models_0";
import { AssociateTagOptionWithResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateTagOptionWithResourceCommand}.
 */
export interface AssociateTagOptionWithResourceCommandInput extends AssociateTagOptionWithResourceInput {}
/**
 * @public
 *
 * The output of {@link AssociateTagOptionWithResourceCommand}.
 */
export interface AssociateTagOptionWithResourceCommandOutput extends AssociateTagOptionWithResourceOutput, __MetadataBearer {}

/**
 * Associate the specified TagOption with the specified portfolio or product.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AssociateTagOptionWithResourceCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AssociateTagOptionWithResourceCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // AssociateTagOptionWithResourceInput
 *   ResourceId: "STRING_VALUE", // required
 *   TagOptionId: "STRING_VALUE", // required
 * };
 * const command = new AssociateTagOptionWithResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateTagOptionWithResourceCommandInput - {@link AssociateTagOptionWithResourceCommandInput}
 * @returns {@link AssociateTagOptionWithResourceCommandOutput}
 * @see {@link AssociateTagOptionWithResourceCommandInput} for command's `input` shape.
 * @see {@link AssociateTagOptionWithResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * The specified resource is a duplicate.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *
 * One or more parameters provided to the operation are not valid.
 *
 * @throws {@link InvalidStateException} (client fault)
 *
 * An attempt was made to modify a resource that is in a state that is not valid. Check your resources to ensure that they are in valid states before retrying the operation.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The current limits of the service would have been exceeded by this operation. Decrease your resource use or increase your service limits and retry the operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link TagOptionNotMigratedException} (client fault)
 *
 * An operation requiring TagOptions failed because the TagOptions migration process has not been performed for this account. Use the Amazon Web Services Management Console to perform the migration process before retrying the operation.
 *
 * @throws {@link ServiceCatalogServiceException}
 *
 * Base exception class for all service exceptions from ServiceCatalog service.
 *
 * @public
 */
export class AssociateTagOptionWithResourceCommand extends command<AssociateTagOptionWithResourceCommandInput, AssociateTagOptionWithResourceCommandOutput>(
  _ep0,
  _mw0,
  "AssociateTagOptionWithResource",
  AssociateTagOptionWithResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateTagOptionWithResourceInput;
      output: {};
    };
    sdk: {
      input: AssociateTagOptionWithResourceCommandInput;
      output: AssociateTagOptionWithResourceCommandOutput;
    };
  };
}
