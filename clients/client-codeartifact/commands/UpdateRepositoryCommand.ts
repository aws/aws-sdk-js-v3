import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { UpdateRepositoryRequest, UpdateRepositoryResult } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateRepositoryCommand,
  serializeAws_restJson1UpdateRepositoryCommand,
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

export type UpdateRepositoryCommandInput = UpdateRepositoryRequest;
export type UpdateRepositoryCommandOutput = UpdateRepositoryResult & __MetadataBearer;

/**
 * <p>
 *          Update the properties of a repository.
 *        </p>
 */
export class UpdateRepositoryCommand extends $Command<
  UpdateRepositoryCommandInput,
  UpdateRepositoryCommandOutput,
  CodeartifactClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateRepositoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeartifactClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRepositoryCommandInput, UpdateRepositoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeartifactClient";
    const commandName = "UpdateRepositoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRepositoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRepositoryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateRepositoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRepositoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateRepositoryCommandOutput> {
    return deserializeAws_restJson1UpdateRepositoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
