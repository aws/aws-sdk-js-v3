// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListServiceInstanceProvisionedResourcesInput,
  ListServiceInstanceProvisionedResourcesOutput,
} from "../models/models_0";
import { ListServiceInstanceProvisionedResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListServiceInstanceProvisionedResourcesCommand}.
 */
export interface ListServiceInstanceProvisionedResourcesCommandInput extends ListServiceInstanceProvisionedResourcesInput {}
/**
 * @public
 *
 * The output of {@link ListServiceInstanceProvisionedResourcesCommand}.
 */
export interface ListServiceInstanceProvisionedResourcesCommandOutput extends ListServiceInstanceProvisionedResourcesOutput, __MetadataBearer {}

/**
 * List provisioned resources for a service instance with details.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServiceInstanceProvisionedResourcesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServiceInstanceProvisionedResourcesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListServiceInstanceProvisionedResourcesInput
 *   serviceName: "STRING_VALUE", // required
 *   serviceInstanceName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceInstanceProvisionedResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceInstanceProvisionedResourcesOutput
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
 * @param ListServiceInstanceProvisionedResourcesCommandInput - {@link ListServiceInstanceProvisionedResourcesCommandInput}
 * @returns {@link ListServiceInstanceProvisionedResourcesCommandOutput}
 * @see {@link ListServiceInstanceProvisionedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListServiceInstanceProvisionedResourcesCommandOutput} for command's `response` shape.
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
export class ListServiceInstanceProvisionedResourcesCommand extends command<ListServiceInstanceProvisionedResourcesCommandInput, ListServiceInstanceProvisionedResourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListServiceInstanceProvisionedResources",
  ListServiceInstanceProvisionedResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceInstanceProvisionedResourcesInput;
      output: ListServiceInstanceProvisionedResourcesOutput;
    };
    sdk: {
      input: ListServiceInstanceProvisionedResourcesCommandInput;
      output: ListServiceInstanceProvisionedResourcesCommandOutput;
    };
  };
}
