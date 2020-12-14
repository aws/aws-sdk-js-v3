import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { CreateDetectorRequest, CreateDetectorResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDetectorCommand,
  serializeAws_restJson1CreateDetectorCommand,
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

export type CreateDetectorCommandInput = CreateDetectorRequest;
export type CreateDetectorCommandOutput = CreateDetectorResponse & __MetadataBearer;

/**
 * <p>Creates a single Amazon GuardDuty detector. A detector is a resource that represents the
 *       GuardDuty service. To start using GuardDuty, you must create a detector in each Region where
 *       you enable the service. You can have only one detector per account per Region. All data
 *       sources are enabled in a new detector by default.</p>
 */
export class CreateDetectorCommand extends $Command<
  CreateDetectorCommandInput,
  CreateDetectorCommandOutput,
  GuardDutyClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDetectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GuardDutyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDetectorCommandInput, CreateDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GuardDutyClient";
    const commandName = "CreateDetectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDetectorRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDetectorResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDetectorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDetectorCommandOutput> {
    return deserializeAws_restJson1CreateDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
