// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AbortDocumentVersionUploadRequest,
  AbortDocumentVersionUploadRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AbortDocumentVersionUploadCommand,
  serializeAws_restJson1AbortDocumentVersionUploadCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";

export interface AbortDocumentVersionUploadCommandInput extends AbortDocumentVersionUploadRequest {}
export interface AbortDocumentVersionUploadCommandOutput extends __MetadataBearer {}

/**
 * <p>Aborts the upload of the specified document version that was previously initiated
 *             by <a>InitiateDocumentVersionUpload</a>. The client should make this call
 *             only when it no longer intends to upload the document version, or fails to do
 *             so.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, AbortDocumentVersionUploadCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, AbortDocumentVersionUploadCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new AbortDocumentVersionUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AbortDocumentVersionUploadCommandInput} for command's `input` shape.
 * @see {@link AbortDocumentVersionUploadCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for WorkDocsClient's `config` shape.
 *
 */
export class AbortDocumentVersionUploadCommand extends $Command<
  AbortDocumentVersionUploadCommandInput,
  AbortDocumentVersionUploadCommandOutput,
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

  constructor(readonly input: AbortDocumentVersionUploadCommandInput) {
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
  ): Handler<AbortDocumentVersionUploadCommandInput, AbortDocumentVersionUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AbortDocumentVersionUploadCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "AbortDocumentVersionUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AbortDocumentVersionUploadRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AbortDocumentVersionUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AbortDocumentVersionUploadCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AbortDocumentVersionUploadCommandOutput> {
    return deserializeAws_restJson1AbortDocumentVersionUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
