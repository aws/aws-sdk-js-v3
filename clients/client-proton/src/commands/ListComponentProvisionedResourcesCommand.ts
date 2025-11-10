// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListComponentProvisionedResourcesInput, ListComponentProvisionedResourcesOutput } from "../models/models_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { ListComponentProvisionedResources } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ListComponentProvisionedResourcesCommandOutput
  extends ListComponentProvisionedResourcesOutput,
    __MetadataBearer {}

/**
 * <p>List provisioned resources for a component with details.</p>
 *          <p>For more information about components, see
 *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
 *   <i>Proton User Guide</i>.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
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
export class ListComponentProvisionedResourcesCommand extends $Command
  .classBuilder<
    ListComponentProvisionedResourcesCommandInput,
    ListComponentProvisionedResourcesCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "ListComponentProvisionedResources", {})
  .n("ProtonClient", "ListComponentProvisionedResourcesCommand")
  .sc(ListComponentProvisionedResources)
  .build() {
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
