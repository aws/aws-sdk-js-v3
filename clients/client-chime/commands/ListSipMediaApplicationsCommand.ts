import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { ListSipMediaApplicationsRequest, ListSipMediaApplicationsResponse } from "../models/models_1";
import {
  deserializeAws_restJson1ListSipMediaApplicationsCommand,
  serializeAws_restJson1ListSipMediaApplicationsCommand,
} from "../protocols/Aws_restJson1";
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

export type ListSipMediaApplicationsCommandInput = ListSipMediaApplicationsRequest;
export type ListSipMediaApplicationsCommandOutput = ListSipMediaApplicationsResponse & __MetadataBearer;

/**
 * <p>Lists the SIP media applications under the administrator's AWS account.</p>
 */
export class ListSipMediaApplicationsCommand extends $Command<
  ListSipMediaApplicationsCommandInput,
  ListSipMediaApplicationsCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListSipMediaApplicationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSipMediaApplicationsCommandInput, ListSipMediaApplicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ListSipMediaApplicationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListSipMediaApplicationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListSipMediaApplicationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListSipMediaApplicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListSipMediaApplicationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSipMediaApplicationsCommandOutput> {
    return deserializeAws_restJson1ListSipMediaApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
