// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListServicePipelineProvisionedResourcesInput,
  ListServicePipelineProvisionedResourcesOutput,
} from "../models/models_0";
import type { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";
import { ListServicePipelineProvisionedResources } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServicePipelineProvisionedResourcesCommand}.
 */
export interface ListServicePipelineProvisionedResourcesCommandInput
  extends ListServicePipelineProvisionedResourcesInput {}
/**
 * @public
 *
 * The output of {@link ListServicePipelineProvisionedResourcesCommand}.
 */
export interface ListServicePipelineProvisionedResourcesCommandOutput
  extends ListServicePipelineProvisionedResourcesOutput,
    __MetadataBearer {}

/**
 * <p>List provisioned resources for a service and pipeline with details.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, ListServicePipelineProvisionedResourcesCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, ListServicePipelineProvisionedResourcesCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // ListServicePipelineProvisionedResourcesInput
 *   serviceName: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListServicePipelineProvisionedResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListServicePipelineProvisionedResourcesOutput
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
 * @param ListServicePipelineProvisionedResourcesCommandInput - {@link ListServicePipelineProvisionedResourcesCommandInput}
 * @returns {@link ListServicePipelineProvisionedResourcesCommandOutput}
 * @see {@link ListServicePipelineProvisionedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListServicePipelineProvisionedResourcesCommandOutput} for command's `response` shape.
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
export class ListServicePipelineProvisionedResourcesCommand extends $Command
  .classBuilder<
    ListServicePipelineProvisionedResourcesCommandInput,
    ListServicePipelineProvisionedResourcesCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsProton20200720", "ListServicePipelineProvisionedResources", {})
  .n("ProtonClient", "ListServicePipelineProvisionedResourcesCommand")
  .sc(ListServicePipelineProvisionedResources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServicePipelineProvisionedResourcesInput;
      output: ListServicePipelineProvisionedResourcesOutput;
    };
    sdk: {
      input: ListServicePipelineProvisionedResourcesCommandInput;
      output: ListServicePipelineProvisionedResourcesCommandOutput;
    };
  };
}
