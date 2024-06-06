// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutConfigurationRequest } from "../models/models_0";
import { de_PutConfigurationCommand, se_PutConfigurationCommand } from "../protocols/Aws_restJson1";
import {
  ServiceCatalogAppRegistryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogAppRegistryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutConfigurationCommand}.
 */
export interface PutConfigurationCommandInput extends PutConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutConfigurationCommand}.
 */
export interface PutConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>
 *       Associates a <code>TagKey</code> configuration
 *       to an account.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, PutConfigurationCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, PutConfigurationCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const input = { // PutConfigurationRequest
 *   configuration: { // AppRegistryConfiguration
 *     tagQueryConfiguration: { // TagQueryConfiguration
 *       tagKey: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new PutConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutConfigurationCommandInput - {@link PutConfigurationCommandInput}
 * @returns {@link PutConfigurationCommandOutput}
 * @see {@link PutConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for ServiceCatalogAppRegistryClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when processing the request (for example, a resource with the given
 *       name already exists within the account).</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service is experiencing internal problems.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link ServiceCatalogAppRegistryServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalogAppRegistry service.</p>
 *
 * @public
 */
export class PutConfigurationCommand extends $Command
  .classBuilder<
    PutConfigurationCommandInput,
    PutConfigurationCommandOutput,
    ServiceCatalogAppRegistryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogAppRegistryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242AppRegistry", "PutConfiguration", {})
  .n("ServiceCatalogAppRegistryClient", "PutConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutConfigurationCommand)
  .de(de_PutConfigurationCommand)
  .build() {}
