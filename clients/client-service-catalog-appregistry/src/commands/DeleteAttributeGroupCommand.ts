// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAttributeGroupRequest, DeleteAttributeGroupResponse } from "../models/models_0";
import { de_DeleteAttributeGroupCommand, se_DeleteAttributeGroupCommand } from "../protocols/Aws_restJson1";
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242AppRegistry", "DeleteAttributeGroup", {})
  .n("ServiceCatalogAppRegistryClient", "DeleteAttributeGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAttributeGroupCommand)
  .de(de_DeleteAttributeGroupCommand)
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
