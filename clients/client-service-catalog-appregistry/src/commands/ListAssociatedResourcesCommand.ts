// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssociatedResourcesRequest, ListAssociatedResourcesResponse } from "../models/models_0";
import { ListAssociatedResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists all of the resources that are associated with the specified application. Results are paginated.
 *
 * > **Note:** If you share an application, and a consumer account associates a tag query to the application, all of the users who can access the application can also view the tag values in all accounts that are associated with it using this API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, ListAssociatedResourcesCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, ListAssociatedResourcesCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * // import type { ServiceCatalogAppRegistryClientConfig } from "@aws-sdk/client-service-catalog-appregistry";
 * const config = {}; // type is ServiceCatalogAppRegistryClientConfig
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
 *
 * The service is experiencing internal problems.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link ServiceCatalogAppRegistryServiceException}
 *
 * Base exception class for all service exceptions from ServiceCatalogAppRegistry service.
 *
 * @public
 */
export class ListAssociatedResourcesCommand extends command<ListAssociatedResourcesCommandInput, ListAssociatedResourcesCommandOutput>(
  _ep0,
  _mw0,
  "ListAssociatedResources",
  ListAssociatedResources$
) {
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
