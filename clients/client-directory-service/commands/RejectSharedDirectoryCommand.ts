import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { RejectSharedDirectoryRequest, RejectSharedDirectoryResult } from "../models/models_0";
import {
  deserializeAws_json1_1RejectSharedDirectoryCommand,
  serializeAws_json1_1RejectSharedDirectoryCommand,
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

export type RejectSharedDirectoryCommandInput = RejectSharedDirectoryRequest;
export type RejectSharedDirectoryCommandOutput = RejectSharedDirectoryResult & __MetadataBearer;

/**
 * <p>Rejects a directory sharing request that was sent from the directory owner account.</p>
 */
export class RejectSharedDirectoryCommand extends $Command<
  RejectSharedDirectoryCommandInput,
  RejectSharedDirectoryCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RejectSharedDirectoryCommandInput) {
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
  ): Handler<RejectSharedDirectoryCommandInput, RejectSharedDirectoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "RejectSharedDirectoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectSharedDirectoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RejectSharedDirectoryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RejectSharedDirectoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RejectSharedDirectoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RejectSharedDirectoryCommandOutput> {
    return deserializeAws_json1_1RejectSharedDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
