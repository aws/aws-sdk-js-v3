// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListServiceInstanceProvisionedResourcesInput,
  ListServiceInstanceProvisionedResourcesOutput,
} from "../models/models_0";
import type { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { ListServiceInstanceProvisionedResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>List provisioned resources for a service instance with details.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
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
export class ListServiceInstanceProvisionedResourcesCommand extends $Command
  .classBuilder<
    ListServiceInstanceProvisionedResourcesCommandInput,
    ListServiceInstanceProvisionedResourcesCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "ListServiceInstanceProvisionedResources", {})
  .n("ProtonClient", "ListServiceInstanceProvisionedResourcesCommand")
  .sc(ListServiceInstanceProvisionedResources$)
  .build() {
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
