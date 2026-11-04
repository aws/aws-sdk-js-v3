// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListComponentProvisionedResourcesInput,
  ListComponentProvisionedResourcesOutput,
} from "../models/models_0";
import { ListComponentProvisionedResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListComponentProvisionedResourcesCommand}.
 */
export interface ListComponentProvisionedResourcesCommandInput extends ListComponentProvisionedResourcesInput {}
/**
 * @public
 *
 * The output of {@link ListComponentProvisionedResourcesCommand}.
 */
export interface ListComponentProvisionedResourcesCommandOutput extends ListComponentProvisionedResourcesOutput, __MetadataBearer {}

/**
 * List provisioned resources for a component with details.
 *
 * For more information about components, see [Proton components](https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html) in the *Proton User Guide*.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListComponentProvisionedResourcesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListComponentProvisionedResourcesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListComponentProvisionedResourcesInput
 *   componentName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListComponentProvisionedResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListComponentProvisionedResourcesOutput
 * //   nextToken: "STRING_VALUE",
 * //   provisionedResources: [ // ProvisionedResourceList // required
 * //     { // ProvisionedResource
 * //       name: "STRING_VALUE",
 * //       identifier: "STRING_VALUE",
 * //       provisioningEngine: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListComponentProvisionedResourcesCommandInput - {@link ListComponentProvisionedResourcesCommandInput}
 * @returns {@link ListComponentProvisionedResourcesCommandOutput}
 * @see {@link ListComponentProvisionedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListComponentProvisionedResourcesCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * There *isn't* sufficient access for performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed to register with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource *wasn't* found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input is invalid or an out-of-range value was supplied for the input parameter.
 *
 * @throws {@link ProtonServiceException}
 *
 * Base exception class for all service exceptions from Proton service.
 *
 * @public
 */
export class ListComponentProvisionedResourcesCommand extends command<ListComponentProvisionedResourcesCommandInput, ListComponentProvisionedResourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListComponentProvisionedResources",
  ListComponentProvisionedResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListComponentProvisionedResourcesInput;
      output: ListComponentProvisionedResourcesOutput;
    };
    sdk: {
      input: ListComponentProvisionedResourcesCommandInput;
      output: ListComponentProvisionedResourcesCommandOutput;
    };
  };
}
