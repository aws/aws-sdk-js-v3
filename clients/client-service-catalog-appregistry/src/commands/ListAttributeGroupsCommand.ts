// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAttributeGroupsRequest, ListAttributeGroupsResponse } from "../models/models_0";
import { ListAttributeGroups } from "../schemas/schemas_4_Attribute";
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
 * The input for {@link ListAttributeGroupsCommand}.
 */
export interface ListAttributeGroupsCommandInput extends ListAttributeGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListAttributeGroupsCommand}.
 */
export interface ListAttributeGroupsCommandOutput extends ListAttributeGroupsResponse, __MetadataBearer {}

/**
 * <p>Lists all attribute groups which you have access to. Results are paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, ListAttributeGroupsCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, ListAttributeGroupsCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * // import type { ServiceCatalogAppRegistryClientConfig } from "@aws-sdk/client-service-catalog-appregistry";
 * const config = {}; // type is ServiceCatalogAppRegistryClientConfig
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const input = { // ListAttributeGroupsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAttributeGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListAttributeGroupsResponse
 * //   attributeGroups: [ // AttributeGroupSummaries
 * //     { // AttributeGroupSummary
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       lastUpdateTime: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAttributeGroupsCommandInput - {@link ListAttributeGroupsCommandInput}
 * @returns {@link ListAttributeGroupsCommandOutput}
 * @see {@link ListAttributeGroupsCommandInput} for command's `input` shape.
 * @see {@link ListAttributeGroupsCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for ServiceCatalogAppRegistryClient's `config` shape.
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
export class ListAttributeGroupsCommand extends $Command
  .classBuilder<
    ListAttributeGroupsCommandInput,
    ListAttributeGroupsCommandOutput,
    ServiceCatalogAppRegistryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogAppRegistryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242AppRegistry", "ListAttributeGroups", {})
  .n("ServiceCatalogAppRegistryClient", "ListAttributeGroupsCommand")
  .sc(ListAttributeGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAttributeGroupsRequest;
      output: ListAttributeGroupsResponse;
    };
    sdk: {
      input: ListAttributeGroupsCommandInput;
      output: ListAttributeGroupsCommandOutput;
    };
  };
}
