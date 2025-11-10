// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAssociatedAttributeGroupsRequest, ListAssociatedAttributeGroupsResponse } from "../models/models_0";
import { ListAssociatedAttributeGroups } from "../schemas/schemas_0";
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
 * The input for {@link ListAssociatedAttributeGroupsCommand}.
 */
export interface ListAssociatedAttributeGroupsCommandInput extends ListAssociatedAttributeGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociatedAttributeGroupsCommand}.
 */
export interface ListAssociatedAttributeGroupsCommandOutput
  extends ListAssociatedAttributeGroupsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all attribute groups that are associated with specified application.  Results are paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, ListAssociatedAttributeGroupsCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, ListAssociatedAttributeGroupsCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * // import type { ServiceCatalogAppRegistryClientConfig } from "@aws-sdk/client-service-catalog-appregistry";
 * const config = {}; // type is ServiceCatalogAppRegistryClientConfig
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const input = { // ListAssociatedAttributeGroupsRequest
 *   application: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssociatedAttributeGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedAttributeGroupsResponse
 * //   attributeGroups: [ // AttributeGroupIds
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociatedAttributeGroupsCommandInput - {@link ListAssociatedAttributeGroupsCommandInput}
 * @returns {@link ListAssociatedAttributeGroupsCommandOutput}
 * @see {@link ListAssociatedAttributeGroupsCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedAttributeGroupsCommandOutput} for command's `response` shape.
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
export class ListAssociatedAttributeGroupsCommand extends $Command
  .classBuilder<
    ListAssociatedAttributeGroupsCommandInput,
    ListAssociatedAttributeGroupsCommandOutput,
    ServiceCatalogAppRegistryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogAppRegistryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242AppRegistry", "ListAssociatedAttributeGroups", {})
  .n("ServiceCatalogAppRegistryClient", "ListAssociatedAttributeGroupsCommand")
  .sc(ListAssociatedAttributeGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociatedAttributeGroupsRequest;
      output: ListAssociatedAttributeGroupsResponse;
    };
    sdk: {
      input: ListAssociatedAttributeGroupsCommandInput;
      output: ListAssociatedAttributeGroupsCommandOutput;
    };
  };
}
