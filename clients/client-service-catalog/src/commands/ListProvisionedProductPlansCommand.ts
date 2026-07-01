// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListProvisionedProductPlansInput, ListProvisionedProductPlansOutput } from "../models/models_0";
import { ListProvisionedProductPlans$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListProvisionedProductPlansCommand}.
 */
export interface ListProvisionedProductPlansCommandInput extends ListProvisionedProductPlansInput {}
/**
 * @public
 *
 * The output of {@link ListProvisionedProductPlansCommand}.
 */
export interface ListProvisionedProductPlansCommandOutput extends ListProvisionedProductPlansOutput, __MetadataBearer {}

/**
 * <p>Lists the plans for the specified provisioned product or all plans to which the user has access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListProvisionedProductPlansCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListProvisionedProductPlansCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListProvisionedProductPlansInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProvisionProductId: "STRING_VALUE",
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 *   AccessLevelFilter: { // AccessLevelFilter
 *     Key: "Account" || "Role" || "User",
 *     Value: "STRING_VALUE",
 *   },
 * };
 * const command = new ListProvisionedProductPlansCommand(input);
 * const response = await client.send(command);
 * // { // ListProvisionedProductPlansOutput
 * //   ProvisionedProductPlans: [ // ProvisionedProductPlans
 * //     { // ProvisionedProductPlanSummary
 * //       PlanName: "STRING_VALUE",
 * //       PlanId: "STRING_VALUE",
 * //       ProvisionProductId: "STRING_VALUE",
 * //       ProvisionProductName: "STRING_VALUE",
 * //       PlanType: "CLOUDFORMATION",
 * //       ProvisioningArtifactId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListProvisionedProductPlansCommandInput - {@link ListProvisionedProductPlansCommandInput}
 * @returns {@link ListProvisionedProductPlansCommandOutput}
 * @see {@link ListProvisionedProductPlansCommandInput} for command's `input` shape.
 * @see {@link ListProvisionedProductPlansCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 *
 * @public
 */
export class ListProvisionedProductPlansCommand extends command<ListProvisionedProductPlansCommandInput, ListProvisionedProductPlansCommandOutput>(
  _ep0,
  _mw0,
  "ListProvisionedProductPlans",
  ListProvisionedProductPlans$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListProvisionedProductPlansInput;
      output: ListProvisionedProductPlansOutput;
    };
    sdk: {
      input: ListProvisionedProductPlansCommandInput;
      output: ListProvisionedProductPlansCommandOutput;
    };
  };
}
