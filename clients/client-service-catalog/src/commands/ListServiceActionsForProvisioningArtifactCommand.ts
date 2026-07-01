// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListServiceActionsForProvisioningArtifactInput,
  ListServiceActionsForProvisioningArtifactOutput,
} from "../models/models_0";
import { ListServiceActionsForProvisioningArtifact$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListServiceActionsForProvisioningArtifactCommand}.
 */
export interface ListServiceActionsForProvisioningArtifactCommandInput extends ListServiceActionsForProvisioningArtifactInput {}
/**
 * @public
 *
 * The output of {@link ListServiceActionsForProvisioningArtifactCommand}.
 */
export interface ListServiceActionsForProvisioningArtifactCommandOutput extends ListServiceActionsForProvisioningArtifactOutput, __MetadataBearer {}

/**
 * <p>Returns a paginated list of self-service actions associated with the specified Product ID and Provisioning Artifact ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListServiceActionsForProvisioningArtifactCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListServiceActionsForProvisioningArtifactCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListServiceActionsForProvisioningArtifactInput
 *   ProductId: "STRING_VALUE", // required
 *   ProvisioningArtifactId: "STRING_VALUE", // required
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 *   AcceptLanguage: "STRING_VALUE",
 * };
 * const command = new ListServiceActionsForProvisioningArtifactCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceActionsForProvisioningArtifactOutput
 * //   ServiceActionSummaries: [ // ServiceActionSummaries
 * //     { // ServiceActionSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DefinitionType: "SSM_AUTOMATION",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceActionsForProvisioningArtifactCommandInput - {@link ListServiceActionsForProvisioningArtifactCommandInput}
 * @returns {@link ListServiceActionsForProvisioningArtifactCommandOutput}
 * @see {@link ListServiceActionsForProvisioningArtifactCommandInput} for command's `input` shape.
 * @see {@link ListServiceActionsForProvisioningArtifactCommandOutput} for command's `response` shape.
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
export class ListServiceActionsForProvisioningArtifactCommand extends command<ListServiceActionsForProvisioningArtifactCommandInput, ListServiceActionsForProvisioningArtifactCommandOutput>(
  _ep0,
  _mw0,
  "ListServiceActionsForProvisioningArtifact",
  ListServiceActionsForProvisioningArtifact$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceActionsForProvisioningArtifactInput;
      output: ListServiceActionsForProvisioningArtifactOutput;
    };
    sdk: {
      input: ListServiceActionsForProvisioningArtifactCommandInput;
      output: ListServiceActionsForProvisioningArtifactCommandOutput;
    };
  };
}
