// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListEnvironmentProvisionedResourcesInput,
  ListEnvironmentProvisionedResourcesOutput,
} from "../models/models_0";
import { ListEnvironmentProvisionedResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEnvironmentProvisionedResourcesCommand}.
 */
export interface ListEnvironmentProvisionedResourcesCommandInput extends ListEnvironmentProvisionedResourcesInput {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentProvisionedResourcesCommand}.
 */
export interface ListEnvironmentProvisionedResourcesCommandOutput extends ListEnvironmentProvisionedResourcesOutput, __MetadataBearer {}

/**
 * List the provisioned resources for your environment.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListEnvironmentProvisionedResourcesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListEnvironmentProvisionedResourcesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListEnvironmentProvisionedResourcesInput
 *   environmentName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEnvironmentProvisionedResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentProvisionedResourcesOutput
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
 * @param ListEnvironmentProvisionedResourcesCommandInput - {@link ListEnvironmentProvisionedResourcesCommandInput}
 * @returns {@link ListEnvironmentProvisionedResourcesCommandOutput}
 * @see {@link ListEnvironmentProvisionedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentProvisionedResourcesCommandOutput} for command's `response` shape.
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
export class ListEnvironmentProvisionedResourcesCommand extends command<ListEnvironmentProvisionedResourcesCommandInput, ListEnvironmentProvisionedResourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListEnvironmentProvisionedResources",
  ListEnvironmentProvisionedResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentProvisionedResourcesInput;
      output: ListEnvironmentProvisionedResourcesOutput;
    };
    sdk: {
      input: ListEnvironmentProvisionedResourcesCommandInput;
      output: ListEnvironmentProvisionedResourcesCommandOutput;
    };
  };
}
