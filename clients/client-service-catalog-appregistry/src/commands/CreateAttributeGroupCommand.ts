// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAttributeGroupRequest, CreateAttributeGroupResponse } from "../models/models_0";
import { de_CreateAttributeGroupCommand, se_CreateAttributeGroupCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link CreateAttributeGroupCommand}.
 */
export interface CreateAttributeGroupCommandInput extends CreateAttributeGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateAttributeGroupCommand}.
 */
export interface CreateAttributeGroupCommandOutput extends CreateAttributeGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a new attribute group as a container for user-defined attributes. This feature
 *       enables users to have full control over their cloud application's metadata in a rich
 *       machine-readable format to facilitate integration with automated workflows and third-party
 *       tools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, CreateAttributeGroupCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, CreateAttributeGroupCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const input = { // CreateAttributeGroupRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   attributes: "STRING_VALUE", // required
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new CreateAttributeGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateAttributeGroupResponse
 * //   attributeGroup: { // AttributeGroup
 * //     id: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdateTime: new Date("TIMESTAMP"),
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAttributeGroupCommandInput - {@link CreateAttributeGroupCommandInput}
 * @returns {@link CreateAttributeGroupCommandOutput}
 * @see {@link CreateAttributeGroupCommandInput} for command's `input` shape.
 * @see {@link CreateAttributeGroupCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for ServiceCatalogAppRegistryClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when processing the request (for example, a resource with the given
 *       name already exists within the account).</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service is experiencing internal problems.</p>
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
export class CreateAttributeGroupCommand extends $Command
  .classBuilder<
    CreateAttributeGroupCommandInput,
    CreateAttributeGroupCommandOutput,
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
  .s("AWS242AppRegistry", "CreateAttributeGroup", {})
  .n("ServiceCatalogAppRegistryClient", "CreateAttributeGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateAttributeGroupCommand)
  .de(de_CreateAttributeGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAttributeGroupRequest;
      output: CreateAttributeGroupResponse;
    };
    sdk: {
      input: CreateAttributeGroupCommandInput;
      output: CreateAttributeGroupCommandOutput;
    };
  };
}
