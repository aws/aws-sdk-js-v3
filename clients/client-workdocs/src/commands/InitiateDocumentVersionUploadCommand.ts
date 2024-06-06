// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  InitiateDocumentVersionUploadRequest,
  InitiateDocumentVersionUploadRequestFilterSensitiveLog,
  InitiateDocumentVersionUploadResponse,
  InitiateDocumentVersionUploadResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_InitiateDocumentVersionUploadCommand,
  se_InitiateDocumentVersionUploadCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface InitiateDocumentVersionUploadCommandOutput
  extends InitiateDocumentVersionUploadResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new document object and version object.</p>
 *          <p>The client specifies the parent folder ID and name of the document to upload. The
 *             ID is optionally specified when creating a new version of an existing document. This is
 *             the first step to upload a document. Next, upload the document to the URL returned from
 *             the call, and then call <a>UpdateDocumentVersion</a>.</p>
 *          <p>To cancel the document upload, call <a>AbortDocumentVersionUpload</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, InitiateDocumentVersionUploadCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, InitiateDocumentVersionUploadCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
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
 *  <p>This exception is thrown when a valid checkout ID is not presented on document
 *             version upload calls for a document that has been checked out from Web client.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The pagination marker or limit fields are not valid.</p>
 *
 * @throws {@link InvalidPasswordException} (client fault)
 *  <p>The password is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The maximum of 100,000 files and folders under the parent folder has been exceeded.</p>
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *  <p>The specified document version is not in the INITIALIZED state.</p>
 *
 * @throws {@link ResourceAlreadyCheckedOutException} (client fault)
 *  <p>The resource is already checked out.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>One or more of the dependencies is unavailable.</p>
 *
 * @throws {@link StorageLimitExceededException} (client fault)
 *  <p>The storage limit has been exceeded.</p>
 *
 * @throws {@link StorageLimitWillExceedException} (client fault)
 *  <p>The storage limit will be exceeded.</p>
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
 * @public
 */
export class InitiateDocumentVersionUploadCommand extends $Command
  .classBuilder<
    InitiateDocumentVersionUploadCommandInput,
    InitiateDocumentVersionUploadCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGorillaBoyService", "InitiateDocumentVersionUpload", {})
  .n("WorkDocsClient", "InitiateDocumentVersionUploadCommand")
  .f(InitiateDocumentVersionUploadRequestFilterSensitiveLog, InitiateDocumentVersionUploadResponseFilterSensitiveLog)
  .ser(se_InitiateDocumentVersionUploadCommand)
  .de(de_InitiateDocumentVersionUploadCommand)
  .build() {}
