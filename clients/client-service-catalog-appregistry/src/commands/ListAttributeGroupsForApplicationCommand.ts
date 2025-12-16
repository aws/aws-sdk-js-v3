// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListAttributeGroupsForApplicationRequest,
  ListAttributeGroupsForApplicationResponse,
} from "../models/models_0";
import { ListAttributeGroupsForApplication$ } from "../schemas/schemas_0";
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
 * The input for {@link ListAttributeGroupsForApplicationCommand}.
 */
export interface ListAttributeGroupsForApplicationCommandInput extends ListAttributeGroupsForApplicationRequest {}
/**
 * @public
 *
 * The output of {@link ListAttributeGroupsForApplicationCommand}.
 */
export interface ListAttributeGroupsForApplicationCommandOutput
  extends ListAttributeGroupsForApplicationResponse,
    __MetadataBearer {}

/**
 * <p>Lists the details of all attribute groups associated with a specific application. The results display in pages.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, ListAttributeGroupsForApplicationCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, ListAttributeGroupsForApplicationCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * // import type { ServiceCatalogAppRegistryClientConfig } from "@aws-sdk/client-service-catalog-appregistry";
 * const config = {}; // type is ServiceCatalogAppRegistryClientConfig
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const input = { // ListAttributeGroupsForApplicationRequest
 *   application: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAttributeGroupsForApplicationCommand(input);
 * const response = await client.send(command);
 * // { // ListAttributeGroupsForApplicationResponse
 * //   attributeGroupsDetails: [ // AttributeGroupDetailsList
 * //     { // AttributeGroupDetails
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       createdBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAttributeGroupsForApplicationCommandInput - {@link ListAttributeGroupsForApplicationCommandInput}
 * @returns {@link ListAttributeGroupsForApplicationCommandOutput}
 * @see {@link ListAttributeGroupsForApplicationCommandInput} for command's `input` shape.
 * @see {@link ListAttributeGroupsForApplicationCommandOutput} for command's `response` shape.
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
export class ListAttributeGroupsForApplicationCommand extends $Command
  .classBuilder<
    ListAttributeGroupsForApplicationCommandInput,
    ListAttributeGroupsForApplicationCommandOutput,
    ServiceCatalogAppRegistryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogAppRegistryClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242AppRegistry", "ListAttributeGroupsForApplication", {})
  .n("ServiceCatalogAppRegistryClient", "ListAttributeGroupsForApplicationCommand")
  .sc(ListAttributeGroupsForApplication$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAttributeGroupsForApplicationRequest;
      output: ListAttributeGroupsForApplicationResponse;
    };
    sdk: {
      input: ListAttributeGroupsForApplicationCommandInput;
      output: ListAttributeGroupsForApplicationCommandOutput;
    };
  };
}
