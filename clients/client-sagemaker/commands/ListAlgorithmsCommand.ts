import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListAlgorithmsInput, ListAlgorithmsOutput } from "../models/models_2";
import {
  deserializeAws_json1_1ListAlgorithmsCommand,
  serializeAws_json1_1ListAlgorithmsCommand,
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

export type ListAlgorithmsCommandInput = ListAlgorithmsInput;
export type ListAlgorithmsCommandOutput = ListAlgorithmsOutput & __MetadataBearer;

/**
 * <p>Lists the machine learning algorithms that have been created.</p>
 */
export class ListAlgorithmsCommand extends $Command<
  ListAlgorithmsCommandInput,
  ListAlgorithmsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAlgorithmsCommandInput) {
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
  ): Handler<ListAlgorithmsCommandInput, ListAlgorithmsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListAlgorithmsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAlgorithmsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListAlgorithmsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAlgorithmsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAlgorithmsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAlgorithmsCommandOutput> {
    return deserializeAws_json1_1ListAlgorithmsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
