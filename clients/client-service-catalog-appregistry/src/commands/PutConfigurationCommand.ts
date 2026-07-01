// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutConfigurationRequest } from "../models/models_0";
import { PutConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { ServiceCatalogAppRegistryClientConfig } from "@aws-sdk/client-service-catalog-appregistry";
 * const config = {}; // type is ServiceCatalogAppRegistryClientConfig
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
 *
 * @public
 */
export class PutConfigurationCommand extends command<PutConfigurationCommandInput, PutConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutConfiguration",
  PutConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutConfigurationCommandInput;
      output: PutConfigurationCommandOutput;
    };
  };
}
