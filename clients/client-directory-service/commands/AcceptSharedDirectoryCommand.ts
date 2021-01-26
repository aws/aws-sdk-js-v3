import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { AcceptSharedDirectoryRequest, AcceptSharedDirectoryResult } from "../models/models_0";
import {
  deserializeAws_json1_1AcceptSharedDirectoryCommand,
  serializeAws_json1_1AcceptSharedDirectoryCommand,
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

export type AcceptSharedDirectoryCommandInput = AcceptSharedDirectoryRequest;
export type AcceptSharedDirectoryCommandOutput = AcceptSharedDirectoryResult & __MetadataBearer;

/**
 * <p>Accepts a directory sharing request that was sent from the directory owner account.</p>
 */
export class AcceptSharedDirectoryCommand extends $Command<
  AcceptSharedDirectoryCommandInput,
  AcceptSharedDirectoryCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptSharedDirectoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AcceptSharedDirectoryCommandInput, AcceptSharedDirectoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "AcceptSharedDirectoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptSharedDirectoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptSharedDirectoryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptSharedDirectoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AcceptSharedDirectoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcceptSharedDirectoryCommandOutput> {
    return deserializeAws_json1_1AcceptSharedDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
