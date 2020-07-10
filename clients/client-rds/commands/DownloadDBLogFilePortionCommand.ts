import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DownloadDBLogFilePortionDetails, DownloadDBLogFilePortionMessage } from "../models/index";
import {
  deserializeAws_queryDownloadDBLogFilePortionCommand,
  serializeAws_queryDownloadDBLogFilePortionCommand,
} from "../protocols/Aws_query";
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

export type DownloadDBLogFilePortionCommandInput = DownloadDBLogFilePortionMessage;
export type DownloadDBLogFilePortionCommandOutput = DownloadDBLogFilePortionDetails & __MetadataBearer;

export class DownloadDBLogFilePortionCommand extends $Command<
  DownloadDBLogFilePortionCommandInput,
  DownloadDBLogFilePortionCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DownloadDBLogFilePortionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DownloadDBLogFilePortionCommandInput, DownloadDBLogFilePortionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DownloadDBLogFilePortionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDownloadDBLogFilePortionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DownloadDBLogFilePortionCommandOutput> {
    return deserializeAws_queryDownloadDBLogFilePortionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
