import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { GetShardIteratorInput, GetShardIteratorOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetShardIteratorCommand,
  serializeAws_json1_1GetShardIteratorCommand,
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

export type GetShardIteratorCommandInput = GetShardIteratorInput;
export type GetShardIteratorCommandOutput = GetShardIteratorOutput & __MetadataBearer;

export class GetShardIteratorCommand extends $Command<
  GetShardIteratorCommandInput,
  GetShardIteratorCommandOutput,
  KinesisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetShardIteratorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetShardIteratorCommandInput, GetShardIteratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisClient";
    const commandName = "GetShardIteratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetShardIteratorInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetShardIteratorOutput.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetShardIteratorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetShardIteratorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetShardIteratorCommandOutput> {
    return deserializeAws_json1_1GetShardIteratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
