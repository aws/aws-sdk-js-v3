import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { ListInferenceExecutionsRequest, ListInferenceExecutionsResponse } from "../models/models_0";
import {
  deserializeAws_json1_0ListInferenceExecutionsCommand,
  serializeAws_json1_0ListInferenceExecutionsCommand,
} from "../protocols/Aws_json1_0";
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

export interface ListInferenceExecutionsCommandInput extends ListInferenceExecutionsRequest {}
export interface ListInferenceExecutionsCommandOutput extends ListInferenceExecutionsResponse, __MetadataBearer {}

/**
 * <p> Lists all inference executions that have been performed by the specified inference
 *          scheduler. </p>
 */
export class ListInferenceExecutionsCommand extends $Command<
  ListInferenceExecutionsCommandInput,
  ListInferenceExecutionsCommandOutput,
  LookoutEquipmentClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListInferenceExecutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInferenceExecutionsCommandInput, ListInferenceExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "ListInferenceExecutionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInferenceExecutionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListInferenceExecutionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInferenceExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0ListInferenceExecutionsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInferenceExecutionsCommandOutput> {
    return deserializeAws_json1_0ListInferenceExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
