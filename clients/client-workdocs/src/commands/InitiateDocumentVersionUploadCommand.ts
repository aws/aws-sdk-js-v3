// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { InitiateDocumentVersionUploadRequest, InitiateDocumentVersionUploadResponse } from "../models/models_0";
import { InitiateDocumentVersionUpload$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link InitiateDocumentVersionUploadCommand}.
 */
export interface InitiateDocumentVersionUploadCommandInput extends InitiateDocumentVersionUploadRequest {}
/**
 * @public
 *
 * The output of {@link InitiateDocumentVersionUploadCommand}.
 */
export interface InitiateDocumentVersionUploadCommandOutput extends InitiateDocumentVersionUploadResponse, __MetadataBearer {}

/**
 * Creates a new document object and version object.
 *
 * The client specifies the parent folder ID and name of the document to upload. The ID is optionally specified when creating a new version of an existing document. This is the first step to upload a document. Next, upload the document to the URL returned from the call, and then call UpdateDocumentVersion.
 *
 * To cancel the document upload, call AbortDocumentVersionUpload.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, InitiateDocumentVersionUploadCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, InitiateDocumentVersionUploadCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // InitiateDocumentVersionUploadRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   Id: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   ContentCreatedTimestamp: new Date("TIMESTAMP"),
 *   ContentModifiedTimestamp: new Date("TIMESTAMP"),
 *   ContentType: "STRING_VALUE",
 *   DocumentSizeInBytes: Number("long"),
 *   ParentFolderId: "STRING_VALUE",
 * };
 * const command = new InitiateDocumentVersionUploadCommand(input);
 * const response = await client.send(command);
 * // { // InitiateDocumentVersionUploadResponse
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
 * //   UploadMetadata: { // UploadMetadata
 * //     UploadUrl: "STRING_VALUE",
 * //     SignedHeaders: { // SignedHeaderMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param InitiateDocumentVersionUploadCommandInput - {@link InitiateDocumentVersionUploadCommandInput}
 * @returns {@link InitiateDocumentVersionUploadCommandOutput}
 * @see {@link InitiateDocumentVersionUploadCommandInput} for command's `input` shape.
 * @see {@link InitiateDocumentVersionUploadCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link DraftUploadOutOfSyncException} (client fault)
 *
 * This exception is thrown when a valid checkout ID is not presented on document version upload calls for a document that has been checked out from Web client.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *
 * The resource already exists.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The maximum of 100,000 files and folders under the parent folder has been exceeded.
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *
 * The specified document version is not in the INITIALIZED state.
 *
 * @throws {@link ResourceAlreadyCheckedOutException} (client fault)
 *
 * The resource is already checked out.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * One or more of the dependencies is unavailable.
 *
 * @throws {@link StorageLimitExceededException} (client fault)
 *
 * The storage limit has been exceeded.
 *
 * @throws {@link StorageLimitWillExceedException} (client fault)
 *
 * The storage limit will be exceeded.
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
export class InitiateDocumentVersionUploadCommand extends command<InitiateDocumentVersionUploadCommandInput, InitiateDocumentVersionUploadCommandOutput>(
  _ep0,
  _mw0,
  "InitiateDocumentVersionUpload",
  InitiateDocumentVersionUpload$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InitiateDocumentVersionUploadRequest;
      output: InitiateDocumentVersionUploadResponse;
    };
    sdk: {
      input: InitiateDocumentVersionUploadCommandInput;
      output: InitiateDocumentVersionUploadCommandOutput;
    };
  };
}
