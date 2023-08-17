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

import { UpdateDocumentRequest, UpdateDocumentRequestFilterSensitiveLog } from "../models/models_0";
import { de_UpdateDocumentCommand, se_UpdateDocumentCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDocumentCommand}.
 */
export interface UpdateDocumentCommandInput extends UpdateDocumentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDocumentCommand}.
 */
export interface UpdateDocumentCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified attributes of a document. The user must have access to both
 *             the document and its parent folder, if applicable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, UpdateDocumentCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, UpdateDocumentCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const input = { // UpdateDocumentRequest
 *   AuthenticationToken: "STRING_VALUE",
 *   DocumentId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   ParentFolderId: "STRING_VALUE",
 *   ResourceState: "ACTIVE" || "RESTORING" || "RECYCLING" || "RECYCLED",
 * };
 * const command = new UpdateDocumentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDocumentCommandInput - {@link UpdateDocumentCommandInput}
 * @returns {@link UpdateDocumentCommandOutput}
 * @see {@link UpdateDocumentCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The resource hierarchy is changing.</p>
 *
 * @throws {@link ConflictingOperationException} (client fault)
 *  <p>Another operation is in progress on the resource that conflicts with the current operation.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The maximum of 100,000 files and folders under the parent folder has been exceeded.</p>
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
export class UpdateDocumentCommand extends $Command<
  UpdateDocumentCommandInput,
  UpdateDocumentCommandOutput,
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
  constructor(readonly input: UpdateDocumentCommandInput) {
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
  ): Handler<UpdateDocumentCommandInput, UpdateDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDocumentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "UpdateDocumentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDocumentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: UpdateDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDocumentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDocumentCommandOutput> {
    return de_UpdateDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
