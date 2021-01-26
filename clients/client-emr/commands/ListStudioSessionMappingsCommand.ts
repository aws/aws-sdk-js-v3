import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListStudioSessionMappingsInput, ListStudioSessionMappingsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListStudioSessionMappingsCommand,
  serializeAws_json1_1ListStudioSessionMappingsCommand,
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

export type ListStudioSessionMappingsCommandInput = ListStudioSessionMappingsInput;
export type ListStudioSessionMappingsCommandOutput = ListStudioSessionMappingsOutput & __MetadataBearer;

/**
 * <note>
 *             <p>The Amazon EMR Studio APIs are in preview release for Amazon EMR and are subject to
 *             change.</p>
 *          </note>
 *          <p>Returns a list of all user or group session mappings for the EMR Studio specified by
 *             <code>StudioId</code>.</p>
 */
export class ListStudioSessionMappingsCommand extends $Command<
  ListStudioSessionMappingsCommandInput,
  ListStudioSessionMappingsCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStudioSessionMappingsCommandInput) {
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
  ): Handler<ListStudioSessionMappingsCommandInput, ListStudioSessionMappingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListStudioSessionMappingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStudioSessionMappingsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListStudioSessionMappingsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStudioSessionMappingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListStudioSessionMappingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListStudioSessionMappingsCommandOutput> {
    return deserializeAws_json1_1ListStudioSessionMappingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
