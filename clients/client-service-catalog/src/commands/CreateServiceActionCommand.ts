// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateServiceActionInput, CreateServiceActionOutput } from "../models/models_0";
import { de_CreateServiceActionCommand, se_CreateServiceActionCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateServiceActionCommand}.
 */
export interface CreateServiceActionCommandInput extends CreateServiceActionInput {}
/**
 * @public
 *
 * The output of {@link CreateServiceActionCommand}.
 */
export interface CreateServiceActionCommandOutput extends CreateServiceActionOutput, __MetadataBearer {}

/**
 * <p>Creates a self-service action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ServiceCatalogClient(config);
 * const input = { // CreateServiceActionInput
 *   Name: "STRING_VALUE", // required
 *   DefinitionType: "SSM_AUTOMATION", // required
 *   Definition: { // ServiceActionDefinitionMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Description: "STRING_VALUE",
 *   AcceptLanguage: "STRING_VALUE",
 *   IdempotencyToken: "STRING_VALUE", // required
 * };
 * const command = new CreateServiceActionCommand(input);
 * const response = await client.send(command);
 * // { // CreateServiceActionOutput
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
 * @param CreateServiceActionCommandInput - {@link CreateServiceActionCommandInput}
 * @returns {@link CreateServiceActionCommandOutput}
 * @see {@link CreateServiceActionCommandInput} for command's `input` shape.
 * @see {@link CreateServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The current limits of the service would have been exceeded by this operation. Decrease your
 *          resource use or increase your service limits and retry the operation.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 * @public
 */
export class CreateServiceActionCommand extends $Command
  .classBuilder<
    CreateServiceActionCommandInput,
    CreateServiceActionCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "CreateServiceAction", {})
  .n("ServiceCatalogClient", "CreateServiceActionCommand")
  .f(void 0, void 0)
  .ser(se_CreateServiceActionCommand)
  .de(de_CreateServiceActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateServiceActionInput;
      output: CreateServiceActionOutput;
    };
    sdk: {
      input: CreateServiceActionCommandInput;
      output: CreateServiceActionCommandOutput;
    };
  };
}
