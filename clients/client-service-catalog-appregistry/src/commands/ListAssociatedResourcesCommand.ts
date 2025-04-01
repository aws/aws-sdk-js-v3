// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAssociatedResourcesRequest, ListAssociatedResourcesResponse } from "../models/models_0";
import { de_ListAssociatedResourcesCommand, se_ListAssociatedResourcesCommand } from "../protocols/Aws_restJson1";
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
 * The input for {@link ListAssociatedResourcesCommand}.
 */
export interface ListAssociatedResourcesCommandInput extends ListAssociatedResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociatedResourcesCommand}.
 */
export interface ListAssociatedResourcesCommandOutput extends ListAssociatedResourcesResponse, __MetadataBearer {}

/**
 * <p>
 *        Lists all
 *        of the resources
 *        that are associated
 *        with the specified application.
 *        Results are paginated.
 *      </p>
 *          <note>
 *             <p>
 *          If you share an application,
 *          and a consumer account associates a tag query
 *          to the application,
 *          all of the users
 *          who can access the application
 *          can also view the tag values
 *          in all accounts
 *          that are associated
 *          with it
 *          using this API.
 *        </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, ListAssociatedResourcesCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, ListAssociatedResourcesCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const input = { // ListAssociatedResourcesRequest
 *   application: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssociatedResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedResourcesResponse
 * //   resources: [ // Resources
 * //     { // ResourceInfo
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       resourceType: "CFN_STACK" || "RESOURCE_TAG_VALUE",
 * //       resourceDetails: { // ResourceDetails
 * //         tagValue: "STRING_VALUE",
 * //       },
 * //       options: [ // Options
 * //         "APPLY_APPLICATION_TAG" || "SKIP_APPLICATION_TAG",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociatedResourcesCommandInput - {@link ListAssociatedResourcesCommandInput}
 * @returns {@link ListAssociatedResourcesCommandOutput}
 * @see {@link ListAssociatedResourcesCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedResourcesCommandOutput} for command's `response` shape.
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
export class ListAssociatedResourcesCommand extends $Command
  .classBuilder<
    ListAssociatedResourcesCommandInput,
    ListAssociatedResourcesCommandOutput,
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
  .s("AWS242AppRegistry", "ListAssociatedResources", {})
  .n("ServiceCatalogAppRegistryClient", "ListAssociatedResourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListAssociatedResourcesCommand)
  .de(de_ListAssociatedResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociatedResourcesRequest;
      output: ListAssociatedResourcesResponse;
    };
    sdk: {
      input: ListAssociatedResourcesCommandInput;
      output: ListAssociatedResourcesCommandOutput;
    };
  };
}
