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
export { __MetadataBearer, $Command };
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
 * @public
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
 */
export class InitiateDocumentVersionUploadCommand extends $Command<
  InitiateDocumentVersionUploadCommandInput,
  InitiateDocumentVersionUploadCommandOutput,
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
  constructor(readonly input: InitiateDocumentVersionUploadCommandInput) {
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
  ): Handler<InitiateDocumentVersionUploadCommandInput, InitiateDocumentVersionUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InitiateDocumentVersionUploadCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "InitiateDocumentVersionUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InitiateDocumentVersionUploadRequestFilterSensitiveLog,
      outputFilterSensitiveLog: InitiateDocumentVersionUploadResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGorillaBoyService",
        operation: "InitiateDocumentVersionUpload",
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
  private serialize(input: InitiateDocumentVersionUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_InitiateDocumentVersionUploadCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<InitiateDocumentVersionUploadCommandOutput> {
    return de_InitiateDocumentVersionUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
