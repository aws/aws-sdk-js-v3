import { RoboMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RoboMakerClient";
import { ListWorldGenerationJobsRequest, ListWorldGenerationJobsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListWorldGenerationJobsCommand,
  serializeAws_restJson1ListWorldGenerationJobsCommand,
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

export type ListWorldGenerationJobsCommandInput = ListWorldGenerationJobsRequest;
export type ListWorldGenerationJobsCommandOutput = ListWorldGenerationJobsResponse & __MetadataBearer;

/**
 * <p>Lists world generator jobs.</p>
 */
export class ListWorldGenerationJobsCommand extends $Command<
  ListWorldGenerationJobsCommandInput,
  ListWorldGenerationJobsCommandOutput,
  RoboMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListWorldGenerationJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RoboMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListWorldGenerationJobsCommandInput, ListWorldGenerationJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RoboMakerClient";
    const commandName = "ListWorldGenerationJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListWorldGenerationJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListWorldGenerationJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListWorldGenerationJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListWorldGenerationJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListWorldGenerationJobsCommandOutput> {
    return deserializeAws_restJson1ListWorldGenerationJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
