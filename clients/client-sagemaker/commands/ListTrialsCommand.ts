import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListTrialsRequest, ListTrialsResponse } from "../models/models_2";
import {
  deserializeAws_json1_1ListTrialsCommand,
  serializeAws_json1_1ListTrialsCommand,
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

export type ListTrialsCommandInput = ListTrialsRequest;
export type ListTrialsCommandOutput = ListTrialsResponse & __MetadataBearer;

/**
 * <p>Lists the trials in your account. Specify an experiment name to limit the list to the
 *       trials that are part of that experiment. Specify a trial component name to limit the list to
 *       the trials that associated with that trial component. The list can be filtered to show only
 *       trials that were created in a specific time range. The list can be sorted by trial name or
 *       creation time.</p>
 */
export class ListTrialsCommand extends $Command<
  ListTrialsCommandInput,
  ListTrialsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTrialsCommandInput) {
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
  ): Handler<ListTrialsCommandInput, ListTrialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListTrialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTrialsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTrialsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTrialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTrialsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTrialsCommandOutput> {
    return deserializeAws_json1_1ListTrialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
