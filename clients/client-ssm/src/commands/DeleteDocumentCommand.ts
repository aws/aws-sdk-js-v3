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
  DeleteDocumentRequest,
  DeleteDocumentRequestFilterSensitiveLog,
  DeleteDocumentResult,
  DeleteDocumentResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDocumentCommand,
  serializeAws_json1_1DeleteDocumentCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface DeleteDocumentCommandInput extends DeleteDocumentRequest {}
export interface DeleteDocumentCommandOutput extends DeleteDocumentResult, __MetadataBearer {}

/**
 * <p>Deletes the Amazon Web Services Systems Manager document (SSM document) and all managed node associations to the
 *    document.</p>
 *          <p>Before you delete the document, we recommend that you use <a>DeleteAssociation</a> to disassociate all managed nodes that are associated with the document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDocumentCommandInput} for command's `input` shape.
 * @see {@link DeleteDocumentCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class DeleteDocumentCommand extends $Command<
  DeleteDocumentCommandInput,
  DeleteDocumentCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: DeleteDocumentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDocumentCommandInput, DeleteDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDocumentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DeleteDocumentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDocumentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteDocumentResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDocumentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDocumentCommandOutput> {
    return deserializeAws_json1_1DeleteDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
