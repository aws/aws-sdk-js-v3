// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateAttributeGroupRequest, AssociateAttributeGroupResponse } from "../models/models_0";
import { de_AssociateAttributeGroupCommand, se_AssociateAttributeGroupCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link AssociateAttributeGroupCommand}.
 */
export interface AssociateAttributeGroupCommandInput extends AssociateAttributeGroupRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAttributeGroupCommand}.
 */
export interface AssociateAttributeGroupCommandOutput extends AssociateAttributeGroupResponse, __MetadataBearer {}

/**
 * <p>Associates an attribute group with an application to augment the application's metadata
 *       with the group's attributes. This feature enables applications to be described with
 *       user-defined details that are machine-readable, such as third-party integrations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, AssociateAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, AssociateAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * // import type { ServiceCatalogAppRegistryClientConfig } from "@aws-sdk/client-service-catalog-appregistry";
 * const config = {}; // type is ServiceCatalogAppRegistryClientConfig
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const input = { // AssociateAttributeGroupRequest
 *   application: "STRING_VALUE", // required
 *   attributeGroup: "STRING_VALUE", // required
 * };
 * const command = new AssociateAttributeGroupCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAttributeGroupResponse
 * //   applicationArn: "STRING_VALUE",
 * //   attributeGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateAttributeGroupCommandInput - {@link AssociateAttributeGroupCommandInput}
 * @returns {@link AssociateAttributeGroupCommandOutput}
 * @see {@link AssociateAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link AssociateAttributeGroupCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for ServiceCatalogAppRegistryClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when processing the request (for example, a resource with the given
 *       name already exists within the account).</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service is experiencing internal problems.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *       The maximum number
 *       of resources per account
 *       has been reached.</p>
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
export class AssociateAttributeGroupCommand extends $Command
  .classBuilder<
    AssociateAttributeGroupCommandInput,
    AssociateAttributeGroupCommandOutput,
    ServiceCatalogAppRegistryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogAppRegistryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242AppRegistry", "AssociateAttributeGroup", {})
  .n("ServiceCatalogAppRegistryClient", "AssociateAttributeGroupCommand")
  .f(void 0, void 0)
  .ser(se_AssociateAttributeGroupCommand)
  .de(de_AssociateAttributeGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAttributeGroupRequest;
      output: AssociateAttributeGroupResponse;
    };
    sdk: {
      input: AssociateAttributeGroupCommandInput;
      output: AssociateAttributeGroupCommandOutput;
    };
  };
}
