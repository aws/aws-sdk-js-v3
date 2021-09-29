import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListDocumentsRequest, ListDocumentsResult } from "../models/models_1";
import {
  deserializeAws_json1_1ListDocumentsCommand,
  serializeAws_json1_1ListDocumentsCommand,
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

export interface ListDocumentsCommandInput extends ListDocumentsRequest {}
export interface ListDocumentsCommandOutput extends ListDocumentsResult, __MetadataBearer {}

/**
 * <p>Returns all Systems Manager (SSM) documents in the current Amazon Web Services account and Amazon Web Services Region. You can
 *    limit the results of this request by using a filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListDocumentsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListDocumentsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListDocumentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDocumentsCommandInput} for command's `input` shape.
 * @see {@link ListDocumentsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListDocumentsCommand extends $Command<
  ListDocumentsCommandInput,
  ListDocumentsCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListDocumentsCommandInput) {
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
  ): Handler<ListDocumentsCommandInput, ListDocumentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListDocumentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListDocumentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDocumentsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListDocumentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListDocumentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDocumentsCommandOutput> {
    return deserializeAws_json1_1ListDocumentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
