import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateDocumentRequest, UpdateDocumentResult } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateDocumentCommand,
  serializeAws_json1_1UpdateDocumentCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface UpdateDocumentCommandInput extends UpdateDocumentRequest {}
export interface UpdateDocumentCommandOutput extends UpdateDocumentResult, __MetadataBearer {}

/**
 * <p>Updates one or more values for an SSM document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDocumentCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class UpdateDocumentCommand extends $Command<
  UpdateDocumentCommandInput,
  UpdateDocumentCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDocumentCommandInput, UpdateDocumentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateDocumentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDocumentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDocumentResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDocumentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDocumentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDocumentCommandOutput> {
    return deserializeAws_json1_1UpdateDocumentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
