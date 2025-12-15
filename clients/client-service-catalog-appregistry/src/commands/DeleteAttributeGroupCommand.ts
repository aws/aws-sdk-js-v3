// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAttributeGroupRequest, DeleteAttributeGroupResponse } from "../models/models_0";
import { DeleteAttributeGroup$ } from "../schemas/schemas_0";
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
 * The input for {@link DeleteAttributeGroupCommand}.
 */
export interface DeleteAttributeGroupCommandInput extends DeleteAttributeGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAttributeGroupCommand}.
 */
export interface DeleteAttributeGroupCommandOutput extends DeleteAttributeGroupResponse, __MetadataBearer {}

/**
 * <p>Deletes an attribute group, specified either by its attribute group ID, name, or ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, DeleteAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, DeleteAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * // import type { ServiceCatalogAppRegistryClientConfig } from "@aws-sdk/client-service-catalog-appregistry";
 * const config = {}; // type is ServiceCatalogAppRegistryClientConfig
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const input = { // DeleteAttributeGroupRequest
 *   attributeGroup: "STRING_VALUE", // required
 * };
 * const command = new DeleteAttributeGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAttributeGroupResponse
 * //   attributeGroup: { // AttributeGroupSummary
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdateTime: new Date("TIMESTAMP"),
 * //     createdBy: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteAttributeGroupCommandInput - {@link DeleteAttributeGroupCommandInput}
 * @returns {@link DeleteAttributeGroupCommandOutput}
 * @see {@link DeleteAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteAttributeGroupCommandOutput} for command's `response` shape.
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
export class DeleteAttributeGroupCommand extends $Command
  .classBuilder<
    DeleteAttributeGroupCommandInput,
    DeleteAttributeGroupCommandOutput,
    ServiceCatalogAppRegistryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogAppRegistryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242AppRegistry", "DeleteAttributeGroup", {})
  .n("ServiceCatalogAppRegistryClient", "DeleteAttributeGroupCommand")
  .sc(DeleteAttributeGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAttributeGroupRequest;
      output: DeleteAttributeGroupResponse;
    };
    sdk: {
      input: DeleteAttributeGroupCommandInput;
      output: DeleteAttributeGroupCommandOutput;
    };
  };
}
