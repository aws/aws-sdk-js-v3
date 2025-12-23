// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListEnvironmentProvisionedResourcesInput,
  ListEnvironmentProvisionedResourcesOutput,
} from "../models/models_0";
import type { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { ListEnvironmentProvisionedResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>List the provisioned resources for your environment.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
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
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 *
 * @public
 */
export class ListEnvironmentProvisionedResourcesCommand extends $Command
  .classBuilder<
    ListEnvironmentProvisionedResourcesCommandInput,
    ListEnvironmentProvisionedResourcesCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "ListEnvironmentProvisionedResources", {})
  .n("ProtonClient", "ListEnvironmentProvisionedResourcesCommand")
  .sc(ListEnvironmentProvisionedResources$)
  .build() {
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
