// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateServiceActionInput, UpdateServiceActionOutput } from "../models/models_0";
import { UpdateServiceAction } from "../schemas/schemas_0";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceActionCommand}.
 */
export interface UpdateServiceActionCommandInput extends UpdateServiceActionInput {}
/**
 * @public
 *
 * The output of {@link UpdateServiceActionCommand}.
 */
export interface UpdateServiceActionCommandOutput extends UpdateServiceActionOutput, __MetadataBearer {}

/**
 * <p>Updates a self-service action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, UpdateServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, UpdateServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // UpdateServiceActionInput
 *   Id: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Definition: { // ServiceActionDefinitionMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Description: "STRING_VALUE",
 *   AcceptLanguage: "STRING_VALUE",
 * };
 * const command = new UpdateServiceActionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceActionOutput
 * //   ServiceActionDetail: { // ServiceActionDetail
 * //     ServiceActionSummary: { // ServiceActionSummary
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DefinitionType: "SSM_AUTOMATION",
 * //     },
 * //     Definition: { // ServiceActionDefinitionMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateServiceActionCommandInput - {@link UpdateServiceActionCommandInput}
 * @returns {@link UpdateServiceActionCommandOutput}
 * @see {@link UpdateServiceActionCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceActionCommandOutput} for command's `response` shape.
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
export class UpdateServiceActionCommand extends $Command
  .classBuilder<
    UpdateServiceActionCommandInput,
    UpdateServiceActionCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "UpdateServiceAction", {})
  .n("ServiceCatalogClient", "UpdateServiceActionCommand")
  .sc(UpdateServiceAction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceActionInput;
      output: UpdateServiceActionOutput;
    };
    sdk: {
      input: UpdateServiceActionCommandInput;
      output: UpdateServiceActionCommandOutput;
    };
  };
}
