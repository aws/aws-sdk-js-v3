// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateAttributeGroupRequest, DisassociateAttributeGroupResponse } from "../models/models_0";
import { DisassociateAttributeGroup } from "../schemas/schemas_0";
import type {
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
 * The input for {@link DisassociateAttributeGroupCommand}.
 */
export interface DisassociateAttributeGroupCommandInput extends DisassociateAttributeGroupRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateAttributeGroupCommand}.
 */
export interface DisassociateAttributeGroupCommandOutput extends DisassociateAttributeGroupResponse, __MetadataBearer {}

/**
 * <p>Disassociates an attribute group from an application to remove the extra attributes contained in the attribute group from the application's metadata. This operation reverts <code>AssociateAttributeGroup</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, DisassociateAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, DisassociateAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * // import type { ServiceCatalogAppRegistryClientConfig } from "@aws-sdk/client-service-catalog-appregistry";
 * const config = {}; // type is ServiceCatalogAppRegistryClientConfig
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const input = { // DisassociateAttributeGroupRequest
 *   application: "STRING_VALUE", // required
 *   attributeGroup: "STRING_VALUE", // required
 * };
 * const command = new DisassociateAttributeGroupCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateAttributeGroupResponse
 * //   applicationArn: "STRING_VALUE",
 * //   attributeGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociateAttributeGroupCommandInput - {@link DisassociateAttributeGroupCommandInput}
 * @returns {@link DisassociateAttributeGroupCommandOutput}
 * @see {@link DisassociateAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link DisassociateAttributeGroupCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for ServiceCatalogAppRegistryClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service is experiencing internal problems.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
export class DisassociateAttributeGroupCommand extends $Command
  .classBuilder<
    DisassociateAttributeGroupCommandInput,
    DisassociateAttributeGroupCommandOutput,
    ServiceCatalogAppRegistryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogAppRegistryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242AppRegistry", "DisassociateAttributeGroup", {})
  .n("ServiceCatalogAppRegistryClient", "DisassociateAttributeGroupCommand")
  .sc(DisassociateAttributeGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateAttributeGroupRequest;
      output: DisassociateAttributeGroupResponse;
    };
    sdk: {
      input: DisassociateAttributeGroupCommandInput;
      output: DisassociateAttributeGroupCommandOutput;
    };
  };
}
