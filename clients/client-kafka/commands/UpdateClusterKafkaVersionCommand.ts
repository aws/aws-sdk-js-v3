import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateClusterKafkaVersionRequest, UpdateClusterKafkaVersionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateClusterKafkaVersionCommand,
  serializeAws_restJson1UpdateClusterKafkaVersionCommand,
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

export type UpdateClusterKafkaVersionCommandInput = UpdateClusterKafkaVersionRequest;
export type UpdateClusterKafkaVersionCommandOutput = UpdateClusterKafkaVersionResponse & __MetadataBearer;

/**
 * <p>Updates the Apache Kafka version for the cluster.</p>
 */
export class UpdateClusterKafkaVersionCommand extends $Command<
  UpdateClusterKafkaVersionCommandInput,
  UpdateClusterKafkaVersionCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateClusterKafkaVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateClusterKafkaVersionCommandInput, UpdateClusterKafkaVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "UpdateClusterKafkaVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateClusterKafkaVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateClusterKafkaVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateClusterKafkaVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateClusterKafkaVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateClusterKafkaVersionCommandOutput> {
    return deserializeAws_restJson1UpdateClusterKafkaVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
