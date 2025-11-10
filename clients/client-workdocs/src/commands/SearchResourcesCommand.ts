// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SearchResourcesRequest, SearchResourcesResponse } from "../models/models_0";
import { SearchResources } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchResourcesCommand}.
 */
export interface SearchResourcesCommandInput extends SearchResourcesRequest {}
/**
 * @public
 *
 * The output of {@link SearchResourcesCommand}.
 */
export interface SearchResourcesCommandOutput extends SearchResourcesResponse, __MetadataBearer {}

/**
 * <p>Searches metadata and the content of folders, documents, document versions, and comments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, SearchResourcesCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, SearchResourcesCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // SearchResourcesRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   QueryText: "STRING_VALUE",
 *   QueryScopes: [ // SearchQueryScopeTypeList
 *     "NAME" || "CONTENT",
 *   ],
 *   OrganizationId: "STRING_VALUE",
 *   AdditionalResponseFields: [ // AdditionalResponseFieldsList
 *     "WEBURL",
 *   ],
 *   Filters: { // Filters
 *     TextLocales: [ // TextLocaleTypeList
 *       "AR" || "BG" || "BN" || "DA" || "DE" || "CS" || "EL" || "EN" || "ES" || "FA" || "FI" || "FR" || "HI" || "HU" || "ID" || "IT" || "JA" || "KO" || "LT" || "LV" || "NL" || "NO" || "PT" || "RO" || "RU" || "SV" || "SW" || "TH" || "TR" || "ZH" || "DEFAULT",
 *     ],
 *     ContentCategories: [ // SearchContentCategoryTypeList
 *       "IMAGE" || "DOCUMENT" || "PDF" || "SPREADSHEET" || "PRESENTATION" || "AUDIO" || "VIDEO" || "SOURCE_CODE" || "OTHER",
 *     ],
 *     ResourceTypes: [ // SearchResourceTypeList
 *       "FOLDER" || "DOCUMENT" || "COMMENT" || "DOCUMENT_VERSION",
 *     ],
 *     Labels: [ // SearchLabelList
 *       "STRING_VALUE",
 *     ],
 *     Principals: [ // SearchPrincipalTypeList
 *       { // SearchPrincipalType
 *         Id: "STRING_VALUE", // required
 *         Roles: [ // SearchPrincipalRoleList
 *           "VIEWER" || "CONTRIBUTOR" || "OWNER" || "COOWNER",
 *         ],
 *       },
 *     ],
 *     AncestorIds: [ // SearchAncestorIdList
 *       "STRING_VALUE",
 *     ],
 *     SearchCollectionTypes: [ // SearchCollectionTypeList
 *       "OWNED" || "SHARED_WITH_ME",
 *     ],
 *     SizeRange: { // LongRangeType
 *       StartValue: Number("long"),
 *       EndValue: Number("long"),
 *     },
 *     CreatedRange: { // DateRangeType
 *       StartValue: new Date("TIMESTAMP"),
 *       EndValue: new Date("TIMESTAMP"),
 *     },
 *     ModifiedRange: {
 *       StartValue: new Date("TIMESTAMP"),
 *       EndValue: new Date("TIMESTAMP"),
 *     },
 *   },
 *   OrderBy: [ // SearchResultSortList
 *     { // SearchSortResult
 *       Field: "RELEVANCE" || "NAME" || "SIZE" || "CREATED_TIMESTAMP" || "MODIFIED_TIMESTAMP",
 *       Order: "ASC" || "DESC",
 *     },
 *   ],
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new SearchResourcesCommand(input);
 * const response = await client.send(command);
 * // { // SearchResourcesResponse
 * //   Items: [ // ResponseItemsList
 * //     { // ResponseItem
 * //       ResourceType: "DOCUMENT" || "FOLDER" || "COMMENT" || "DOCUMENT_VERSION",
 * //       WebUrl: "STRING_VALUE",
 * //       DocumentMetadata: { // DocumentMetadata
 * //         Id: "STRING_VALUE",
 * //         CreatorId: "STRING_VALUE",
 * //         ParentFolderId: "STRING_VALUE",
 * //         CreatedTimestamp: new Date("TIMESTAMP"),
 * //         ModifiedTimestamp: new Date("TIMESTAMP"),
 * //         LatestVersionMetadata: { // DocumentVersionMetadata
 * //           Id: "STRING_VALUE",
 * //           Name: "STRING_VALUE",
 * //           ContentType: "STRING_VALUE",
 * //           Size: Number("long"),
 * //           Signature: "STRING_VALUE",
 * //           Status: "INITIALIZED" || "ACTIVE",
 * //           CreatedTimestamp: new Date("TIMESTAMP"),
 * //           ModifiedTimestamp: new Date("TIMESTAMP"),
 * //           ContentCreatedTimestamp: new Date("TIMESTAMP"),
 * //           ContentModifiedTimestamp: new Date("TIMESTAMP"),
 * //           CreatorId: "STRING_VALUE",
 * //           Thumbnail: { // DocumentThumbnailUrlMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           Source: { // DocumentSourceUrlMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         ResourceState: "ACTIVE" || "RESTORING" || "RECYCLING" || "RECYCLED",
 * //         Labels: [ // SharedLabels
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       FolderMetadata: { // FolderMetadata
 * //         Id: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         CreatorId: "STRING_VALUE",
 * //         ParentFolderId: "STRING_VALUE",
 * //         CreatedTimestamp: new Date("TIMESTAMP"),
 * //         ModifiedTimestamp: new Date("TIMESTAMP"),
 * //         ResourceState: "ACTIVE" || "RESTORING" || "RECYCLING" || "RECYCLED",
 * //         Signature: "STRING_VALUE",
 * //         Labels: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Size: Number("long"),
 * //         LatestVersionSize: Number("long"),
 * //       },
 * //       CommentMetadata: { // CommentMetadata
 * //         CommentId: "STRING_VALUE",
 * //         Contributor: { // User
 * //           Id: "STRING_VALUE",
 * //           Username: "STRING_VALUE",
 * //           EmailAddress: "STRING_VALUE",
 * //           GivenName: "STRING_VALUE",
 * //           Surname: "STRING_VALUE",
 * //           OrganizationId: "STRING_VALUE",
 * //           RootFolderId: "STRING_VALUE",
 * //           RecycleBinFolderId: "STRING_VALUE",
 * //           Status: "ACTIVE" || "INACTIVE" || "PENDING",
 * //           Type: "USER" || "ADMIN" || "POWERUSER" || "MINIMALUSER" || "WORKSPACESUSER",
 * //           CreatedTimestamp: new Date("TIMESTAMP"),
 * //           ModifiedTimestamp: new Date("TIMESTAMP"),
 * //           TimeZoneId: "STRING_VALUE",
 * //           Locale: "en" || "fr" || "ko" || "de" || "es" || "ja" || "ru" || "zh_CN" || "zh_TW" || "pt_BR" || "default",
 * //           Storage: { // UserStorageMetadata
 * //             StorageUtilizedInBytes: Number("long"),
 * //             StorageRule: { // StorageRuleType
 * //               StorageAllocatedInBytes: Number("long"),
 * //               StorageType: "UNLIMITED" || "QUOTA",
 * //             },
 * //           },
 * //         },
 * //         CreatedTimestamp: new Date("TIMESTAMP"),
 * //         CommentStatus: "DRAFT" || "PUBLISHED" || "DELETED",
 * //         RecipientId: "STRING_VALUE",
 * //         ContributorId: "STRING_VALUE",
 * //       },
 * //       DocumentVersionMetadata: {
 * //         Id: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         ContentType: "STRING_VALUE",
 * //         Size: Number("long"),
 * //         Signature: "STRING_VALUE",
 * //         Status: "INITIALIZED" || "ACTIVE",
 * //         CreatedTimestamp: new Date("TIMESTAMP"),
 * //         ModifiedTimestamp: new Date("TIMESTAMP"),
 * //         ContentCreatedTimestamp: new Date("TIMESTAMP"),
 * //         ContentModifiedTimestamp: new Date("TIMESTAMP"),
 * //         CreatorId: "STRING_VALUE",
 * //         Thumbnail: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         Source: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchResourcesCommandInput - {@link SearchResourcesCommandInput}
 * @returns {@link SearchResourcesCommandOutput}
 * @see {@link SearchResourcesCommandInput} for command's `input` shape.
 * @see {@link SearchResourcesCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The pagination marker or limit fields are not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>The operation is not permitted.</p>
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *  <p>The caller does not have access to perform the action on the resource.</p>
 *
 * @throws {@link WorkDocsServiceException}
 * <p>Base exception class for all service exceptions from WorkDocs service.</p>
 *
 *
 * @public
 */
export class SearchResourcesCommand extends $Command
  .classBuilder<
    SearchResourcesCommandInput,
    SearchResourcesCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGorillaBoyService", "SearchResources", {})
  .n("WorkDocsClient", "SearchResourcesCommand")
  .sc(SearchResources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchResourcesRequest;
      output: SearchResourcesResponse;
    };
    sdk: {
      input: SearchResourcesCommandInput;
      output: SearchResourcesCommandOutput;
    };
  };
}
