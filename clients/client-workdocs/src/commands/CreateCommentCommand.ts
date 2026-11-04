// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCommentRequest, CreateCommentResponse } from "../models/models_0";
import { CreateComment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCommentCommand}.
 */
export interface CreateCommentCommandInput extends CreateCommentRequest {}
/**
 * @public
 *
 * The output of {@link CreateCommentCommand}.
 */
export interface CreateCommentCommandOutput extends CreateCommentResponse, __MetadataBearer {}

/**
 * Adds a new comment to the specified document version.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateCommentCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateCommentCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * // import type { WorkDocsClientConfig } from "@aws-sdk/client-workdocs";
 * const config = {}; // type is WorkDocsClientConfig
 * const client = new WorkDocsClient(config);
 * const input = { // CreateCommentRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   DocumentId: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE", // required
 *   ParentId: "STRING_VALUE",
 *   ThreadId: "STRING_VALUE",
 *   Text: "STRING_VALUE", // required
 *   Visibility: "PUBLIC" || "PRIVATE",
 *   NotifyCollaborators: true || false,
 * };
 * const command = new CreateCommentCommand(input);
 * const response = await client.send(command);
 * // { // CreateCommentResponse
 * //   Comment: { // Comment
 * //     CommentId: "STRING_VALUE", // required
 * //     ParentId: "STRING_VALUE",
 * //     ThreadId: "STRING_VALUE",
 * //     Text: "STRING_VALUE",
 * //     Contributor: { // User
 * //       Id: "STRING_VALUE",
 * //       Username: "STRING_VALUE",
 * //       EmailAddress: "STRING_VALUE",
 * //       GivenName: "STRING_VALUE",
 * //       Surname: "STRING_VALUE",
 * //       OrganizationId: "STRING_VALUE",
 * //       RootFolderId: "STRING_VALUE",
 * //       RecycleBinFolderId: "STRING_VALUE",
 * //       Status: "ACTIVE" || "INACTIVE" || "PENDING",
 * //       Type: "USER" || "ADMIN" || "POWERUSER" || "MINIMALUSER" || "WORKSPACESUSER",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       ModifiedTimestamp: new Date("TIMESTAMP"),
 * //       TimeZoneId: "STRING_VALUE",
 * //       Locale: "en" || "fr" || "ko" || "de" || "es" || "ja" || "ru" || "zh_CN" || "zh_TW" || "pt_BR" || "default",
 * //       Storage: { // UserStorageMetadata
 * //         StorageUtilizedInBytes: Number("long"),
 * //         StorageRule: { // StorageRuleType
 * //           StorageAllocatedInBytes: Number("long"),
 * //           StorageType: "UNLIMITED" || "QUOTA",
 * //         },
 * //       },
 * //     },
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     Status: "DRAFT" || "PUBLISHED" || "DELETED",
 * //     Visibility: "PUBLIC" || "PRIVATE",
 * //     RecipientId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateCommentCommandInput - {@link CreateCommentCommandInput}
 * @returns {@link CreateCommentCommandOutput}
 * @see {@link CreateCommentCommandInput} for command's `input` shape.
 * @see {@link CreateCommentCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link DocumentLockedForCommentsException} (client fault)
 *
 * This exception is thrown when the document is locked for comments and user tries to create or delete a comment on that document.
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *
 * The resource does not exist.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *
 * The Directory Service cannot reach an on-premises instance. Or a dependency under the control of the organization is failing, such as a connected Active Directory.
 *
 * @throws {@link InvalidCommentOperationException} (client fault)
 *
 * The requested operation is not allowed on the specified comment object.
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *
 * The specified document version is not in the INITIALIZED state.
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
export class CreateCommentCommand extends command<CreateCommentCommandInput, CreateCommentCommandOutput>(
  _ep0,
  _mw0,
  "CreateComment",
  CreateComment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCommentRequest;
      output: CreateCommentResponse;
    };
    sdk: {
      input: CreateCommentCommandInput;
      output: CreateCommentCommandOutput;
    };
  };
}
