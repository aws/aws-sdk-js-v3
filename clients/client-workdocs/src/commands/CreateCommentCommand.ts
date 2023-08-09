// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  CreateCommentRequest,
  CreateCommentRequestFilterSensitiveLog,
  CreateCommentResponse,
  CreateCommentResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateCommentCommand, se_CreateCommentCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Adds a new comment to the specified document version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateCommentCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateCommentCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
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
 */
export class CreateCommentCommand extends $Command<
  CreateCommentCommandInput,
  CreateCommentCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateCommentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCommentCommandInput, CreateCommentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateCommentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "CreateCommentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCommentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCommentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateCommentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCommentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCommentCommandOutput> {
    return de_CreateCommentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
