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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  DescribeActivitiesRequest,
  DescribeActivitiesRequestFilterSensitiveLog,
  DescribeActivitiesResponse,
  DescribeActivitiesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeActivitiesCommand, se_DescribeActivitiesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeActivitiesCommand}.
 */
export interface DescribeActivitiesCommandInput extends DescribeActivitiesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeActivitiesCommand}.
 */
export interface DescribeActivitiesCommandOutput extends DescribeActivitiesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the user activities in a specified time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeActivitiesCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeActivitiesCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const input = { // DescribeActivitiesRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   OrganizationId: "STRING_VALUE",
 *   ActivityTypes: "STRING_VALUE",
 *   ResourceId: "STRING_VALUE",
 *   UserId: "STRING_VALUE",
 *   IncludeIndirectActivities: true || false,
 *   Limit: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeActivitiesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeActivitiesResponse
 * //   UserActivities: [ // UserActivities
 * //     { // Activity
 * //       Type: "DOCUMENT_CHECKED_IN" || "DOCUMENT_CHECKED_OUT" || "DOCUMENT_RENAMED" || "DOCUMENT_VERSION_UPLOADED" || "DOCUMENT_VERSION_DELETED" || "DOCUMENT_VERSION_VIEWED" || "DOCUMENT_VERSION_DOWNLOADED" || "DOCUMENT_RECYCLED" || "DOCUMENT_RESTORED" || "DOCUMENT_REVERTED" || "DOCUMENT_SHARED" || "DOCUMENT_UNSHARED" || "DOCUMENT_SHARE_PERMISSION_CHANGED" || "DOCUMENT_SHAREABLE_LINK_CREATED" || "DOCUMENT_SHAREABLE_LINK_REMOVED" || "DOCUMENT_SHAREABLE_LINK_PERMISSION_CHANGED" || "DOCUMENT_MOVED" || "DOCUMENT_COMMENT_ADDED" || "DOCUMENT_COMMENT_DELETED" || "DOCUMENT_ANNOTATION_ADDED" || "DOCUMENT_ANNOTATION_DELETED" || "FOLDER_CREATED" || "FOLDER_DELETED" || "FOLDER_RENAMED" || "FOLDER_RECYCLED" || "FOLDER_RESTORED" || "FOLDER_SHARED" || "FOLDER_UNSHARED" || "FOLDER_SHARE_PERMISSION_CHANGED" || "FOLDER_SHAREABLE_LINK_CREATED" || "FOLDER_SHAREABLE_LINK_REMOVED" || "FOLDER_SHAREABLE_LINK_PERMISSION_CHANGED" || "FOLDER_MOVED",
 * //       TimeStamp: new Date("TIMESTAMP"),
 * //       IsIndirectActivity: true || false,
 * //       OrganizationId: "STRING_VALUE",
 * //       Initiator: { // UserMetadata
 * //         Id: "STRING_VALUE",
 * //         Username: "STRING_VALUE",
 * //         GivenName: "STRING_VALUE",
 * //         Surname: "STRING_VALUE",
 * //         EmailAddress: "STRING_VALUE",
 * //       },
 * //       Participants: { // Participants
 * //         Users: [ // UserMetadataList
 * //           {
 * //             Id: "STRING_VALUE",
 * //             Username: "STRING_VALUE",
 * //             GivenName: "STRING_VALUE",
 * //             Surname: "STRING_VALUE",
 * //             EmailAddress: "STRING_VALUE",
 * //           },
 * //         ],
 * //         Groups: [ // GroupMetadataList
 * //           { // GroupMetadata
 * //             Id: "STRING_VALUE",
 * //             Name: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       ResourceMetadata: { // ResourceMetadata
 * //         Type: "FOLDER" || "DOCUMENT",
 * //         Name: "STRING_VALUE",
 * //         OriginalName: "STRING_VALUE",
 * //         Id: "STRING_VALUE",
 * //         VersionId: "STRING_VALUE",
 * //         Owner: "<UserMetadata>",
 * //         ParentId: "STRING_VALUE",
 * //       },
 * //       OriginalParent: {
 * //         Type: "FOLDER" || "DOCUMENT",
 * //         Name: "STRING_VALUE",
 * //         OriginalName: "STRING_VALUE",
 * //         Id: "STRING_VALUE",
 * //         VersionId: "STRING_VALUE",
 * //         Owner: "<UserMetadata>",
 * //         ParentId: "STRING_VALUE",
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
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeActivitiesCommandInput - {@link DescribeActivitiesCommandInput}
 * @returns {@link DescribeActivitiesCommandOutput}
 * @see {@link DescribeActivitiesCommandInput} for command's `input` shape.
 * @see {@link DescribeActivitiesCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link FailedDependencyException} (client fault)
 *  <p>The Directory Service cannot reach an on-premises instance. Or a dependency
 *             under the control of the organization is failing, such as a connected Active
 *             Directory.</p>
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
 */
export class DescribeActivitiesCommand extends $Command<
  DescribeActivitiesCommandInput,
  DescribeActivitiesCommandOutput,
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
  constructor(readonly input: DescribeActivitiesCommandInput) {
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
  ): Handler<DescribeActivitiesCommandInput, DescribeActivitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeActivitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "DescribeActivitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeActivitiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeActivitiesResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGorillaBoyService",
        operation: "DescribeActivities",
      },
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
  private serialize(input: DescribeActivitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeActivitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeActivitiesCommandOutput> {
    return de_DescribeActivitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
