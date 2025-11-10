// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateCommentRequest, CreateCommentResponse } from "../models/models_0";
import { CreateComment } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Adds a new comment to the specified document version.</p>
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
 *  <p>This exception is thrown when the document is locked for comments and user tries to
 *             create or delete a comment on that document.</p>
 *
 * @throws {@link EntityNotExistsException} (client fault)
 *  <p>The resource does not exist.</p>
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
 *
 * @throws {@link InvalidCommentOperationException} (client fault)
 *  <p>The requested operation is not allowed on the specified comment object.</p>
 *
 * @throws {@link ProhibitedStateException} (client fault)
 *  <p>The specified document version is not in the INITIALIZED state.</p>
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
export class CreateCommentCommand extends $Command
  .classBuilder<
    CreateCommentCommandInput,
    CreateCommentCommandOutput,
    WorkDocsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkDocsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGorillaBoyService", "CreateComment", {})
  .n("WorkDocsClient", "CreateCommentCommand")
  .sc(CreateComment)
  .build() {
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
