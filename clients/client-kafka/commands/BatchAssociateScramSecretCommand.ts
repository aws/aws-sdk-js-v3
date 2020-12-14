import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { BatchAssociateScramSecretRequest, BatchAssociateScramSecretResponse } from "../models/models_0";
import {
  deserializeAws_restJson1BatchAssociateScramSecretCommand,
  serializeAws_restJson1BatchAssociateScramSecretCommand,
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

export type BatchAssociateScramSecretCommandInput = BatchAssociateScramSecretRequest;
export type BatchAssociateScramSecretCommandOutput = BatchAssociateScramSecretResponse & __MetadataBearer;

/**
 * <p>Associates one or more Scram Secrets with an Amazon MSK cluster.</p>
 */
export class BatchAssociateScramSecretCommand extends $Command<
  BatchAssociateScramSecretCommandInput,
  BatchAssociateScramSecretCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchAssociateScramSecretCommandInput) {
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
  ): Handler<BatchAssociateScramSecretCommandInput, BatchAssociateScramSecretCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "BatchAssociateScramSecretCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchAssociateScramSecretRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchAssociateScramSecretResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchAssociateScramSecretCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchAssociateScramSecretCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAssociateScramSecretCommandOutput> {
    return deserializeAws_restJson1BatchAssociateScramSecretCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
