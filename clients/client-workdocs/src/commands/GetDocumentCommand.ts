// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDocumentRequest, GetDocumentResponse } from "../models/models_0";
import { GetDocument$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDocumentCommand}.
 */
export interface GetDocumentCommandInput extends GetDocumentRequest {}
/**
 * @public
 *
 * The output of {@link GetDocumentCommand}.
 */
export interface GetDocumentCommandOutput extends GetDocumentResponse, __MetadataBearer {}

/**
 * Retrieves details of a document.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetDocumentCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetDocumentCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // GetDocumentRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   DocumentId: "STRING_VALUE", // required
 *   IncludeCustomMetadata: true || false,
 * };
 * const command = new GetDocumentCommand(input);
 * const response = await client.send(command);
 * // { // GetDocumentResponse
 * //   Metadata: { // DocumentMetadata
 * //     Id: "STRING_VALUE",
 * //     CreatorId: "STRING_VALUE",
 * //     ParentFolderId: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     ModifiedTimestamp: new Date("TIMESTAMP"),
 * //     LatestVersionMetadata: { // DocumentVersionMetadata
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       ContentType: "STRING_VALUE",
 * //       Size: Number("long"),
 * //       Signature: "STRING_VALUE",
 * //       Status: "INITIALIZED" || "ACTIVE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       ModifiedTimestamp: new Date("TIMESTAMP"),
 * //       ContentCreatedTimestamp: new Date("TIMESTAMP"),
 * //       ContentModifiedTimestamp: new Date("TIMESTAMP"),
 * //       CreatorId: "STRING_VALUE",
 * //       Thumbnail: { // DocumentThumbnailUrlMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Source: { // DocumentSourceUrlMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //     ResourceState: "ACTIVE" || "RESTORING" || "RECYCLING" || "RECYCLED",
 * //     Labels: [ // SharedLabels
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   CustomMetadata: { // CustomMetadataMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDocumentCommandInput - {@link GetDocumentCommandInput}
 * @returns {@link GetDocumentCommandOutput}
 * @see {@link GetDocumentCommandInput} for command's `input` shape.
 * @see {@link GetDocumentCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *
 * The resource does not exist.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *
 * The Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * The pagination marker or limit fields are not valid.
 *
 * @throws {@link InvalidPasswordException} (client fault)
 *
 * The password is invalid.
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
export class GetDocumentCommand extends command<GetDocumentCommandInput, GetDocumentCommandOutput>(
  _ep0,
  _mw0,
  "GetDocument",
  GetDocument$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDocumentRequest;
      output: GetDocumentResponse;
    };
    sdk: {
      input: GetDocumentCommandInput;
      output: GetDocumentCommandOutput;
    };
  };
}
