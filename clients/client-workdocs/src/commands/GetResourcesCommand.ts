// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResourcesRequest, GetResourcesResponse } from "../models/models_0";
import { GetResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResourcesCommand}.
 */
export interface GetResourcesCommandInput extends GetResourcesRequest {}
/**
 * @public
 *
 * The output of {@link GetResourcesCommand}.
 */
export interface GetResourcesCommandOutput extends GetResourcesResponse, __MetadataBearer {}

/**
 * Retrieves a collection of resources, including folders and documents. The only `CollectionType` supported is `SHARED_WITH_ME`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetResourcesCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetResourcesCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // GetResourcesRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   UserId: "STRING_VALUE",
 *   CollectionType: "SHARED_WITH_ME",
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new GetResourcesCommand(input);
 * const response = await client.send(command);
 * // { // GetResourcesResponse
 * //   Folders: [ // FolderMetadataList
 * //     { // FolderMetadata
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       CreatorId: "STRING_VALUE",
 * //       ParentFolderId: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       ModifiedTimestamp: new Date("TIMESTAMP"),
 * //       ResourceState: "ACTIVE" || "RESTORING" || "RECYCLING" || "RECYCLED",
 * //       Signature: "STRING_VALUE",
 * //       Labels: [ // SharedLabels
 * //         "STRING_VALUE",
 * //       ],
 * //       Size: Number("long"),
 * //       LatestVersionSize: Number("long"),
 * //     },
 * //   ],
 * //   Documents: [ // DocumentMetadataList
 * //     { // DocumentMetadata
 * //       Id: "STRING_VALUE",
 * //       CreatorId: "STRING_VALUE",
 * //       ParentFolderId: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       ModifiedTimestamp: new Date("TIMESTAMP"),
 * //       LatestVersionMetadata: { // DocumentVersionMetadata
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
 * //         Thumbnail: { // DocumentThumbnailUrlMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         Source: { // DocumentSourceUrlMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //       ResourceState: "ACTIVE" || "RESTORING" || "RECYCLING" || "RECYCLED",
 * //       Labels: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourcesCommandInput - {@link GetResourcesCommandInput}
 * @returns {@link GetResourcesCommandOutput}
 * @see {@link GetResourcesCommandInput} for command's `input` shape.
 * @see {@link GetResourcesCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *
 * The Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The pagination marker or limit fields are not valid.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * One or more of the dependencies is unavailable.
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *
 * The operation is not permitted.
 *
 * @throws {@link UnauthorizedResourceAccessException} (client fault)
 *
 * The caller does not have access to perform the action on the resource.
 *
 * @throws {@link WorkDocsServiceException}
 *
 * Base exception class for all service exceptions from WorkDocs service.
 *
 * @public
 */
export class GetResourcesCommand extends command<GetResourcesCommandInput, GetResourcesCommandOutput>(
  _ep0,
  _mw0,
  "GetResources",
  GetResources$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourcesRequest;
      output: GetResourcesResponse;
    };
    sdk: {
      input: GetResourcesCommandInput;
      output: GetResourcesCommandOutput;
    };
  };
}
