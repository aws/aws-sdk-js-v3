import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListStudiosInput, ListStudiosOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListStudiosCommand,
  serializeAws_json1_1ListStudiosCommand,
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

export type ListStudiosCommandInput = ListStudiosInput;
export type ListStudiosCommandOutput = ListStudiosOutput & __MetadataBearer;

/**
 * <note>
 *             <p>The Amazon EMR Studio APIs are in preview release for Amazon EMR and are subject to
 *             change.</p>
 *          </note>
 *          <p>Returns a list of all Amazon EMR Studios associated with the AWS account. The list
 *          includes details such as ID, Studio Access URL, and creation time for each Studio.</p>
 */
export class ListStudiosCommand extends $Command<
  ListStudiosCommandInput,
  ListStudiosCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStudiosCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStudiosCommandInput, ListStudiosCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListStudiosCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStudiosInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListStudiosOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStudiosCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListStudiosCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStudiosCommandOutput> {
    return deserializeAws_json1_1ListStudiosCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
