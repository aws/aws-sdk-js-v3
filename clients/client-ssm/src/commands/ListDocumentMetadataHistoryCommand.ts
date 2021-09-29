import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListDocumentMetadataHistoryRequest, ListDocumentMetadataHistoryResponse } from "../models/models_1";
import {
  deserializeAws_json1_1ListDocumentMetadataHistoryCommand,
  serializeAws_json1_1ListDocumentMetadataHistoryCommand,
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

export interface ListDocumentMetadataHistoryCommandInput extends ListDocumentMetadataHistoryRequest {}
export interface ListDocumentMetadataHistoryCommandOutput
  extends ListDocumentMetadataHistoryResponse,
    __MetadataBearer {}

/**
 * <p>Information about approval reviews for a version of a change template in Change Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListDocumentMetadataHistoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListDocumentMetadataHistoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListDocumentMetadataHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDocumentMetadataHistoryCommandInput} for command's `input` shape.
 * @see {@link ListDocumentMetadataHistoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDocumentMetadataHistoryCommand extends $Command<
  ListDocumentMetadataHistoryCommandInput,
  ListDocumentMetadataHistoryCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDocumentMetadataHistoryCommandInput) {
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
  ): Handler<ListDocumentMetadataHistoryCommandInput, ListDocumentMetadataHistoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListDocumentMetadataHistoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDocumentMetadataHistoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDocumentMetadataHistoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDocumentMetadataHistoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDocumentMetadataHistoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListDocumentMetadataHistoryCommandOutput> {
    return deserializeAws_json1_1ListDocumentMetadataHistoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
