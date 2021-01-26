import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListHumanTaskUisRequest, ListHumanTaskUisResponse } from "../models/models_2";
import {
  deserializeAws_json1_1ListHumanTaskUisCommand,
  serializeAws_json1_1ListHumanTaskUisCommand,
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

export type ListHumanTaskUisCommandInput = ListHumanTaskUisRequest;
export type ListHumanTaskUisCommandOutput = ListHumanTaskUisResponse & __MetadataBearer;

/**
 * <p>Returns information about the human task user interfaces in your account.</p>
 */
export class ListHumanTaskUisCommand extends $Command<
  ListHumanTaskUisCommandInput,
  ListHumanTaskUisCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListHumanTaskUisCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListHumanTaskUisCommandInput, ListHumanTaskUisCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListHumanTaskUisCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListHumanTaskUisRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListHumanTaskUisResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListHumanTaskUisCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListHumanTaskUisCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListHumanTaskUisCommandOutput> {
    return deserializeAws_json1_1ListHumanTaskUisCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
