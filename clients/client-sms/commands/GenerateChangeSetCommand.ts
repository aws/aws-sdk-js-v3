import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GenerateChangeSetRequest, GenerateChangeSetResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GenerateChangeSetCommand,
  serializeAws_json1_1GenerateChangeSetCommand,
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

export type GenerateChangeSetCommandInput = GenerateChangeSetRequest;
export type GenerateChangeSetCommandOutput = GenerateChangeSetResponse & __MetadataBearer;

/**
 * <p>Generates a target change set for a currently launched stack and writes it to an Amazon S3
 *             object in the customer’s Amazon S3 bucket.</p>
 */
export class GenerateChangeSetCommand extends $Command<
  GenerateChangeSetCommandInput,
  GenerateChangeSetCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GenerateChangeSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GenerateChangeSetCommandInput, GenerateChangeSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "GenerateChangeSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GenerateChangeSetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GenerateChangeSetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GenerateChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GenerateChangeSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateChangeSetCommandOutput> {
    return deserializeAws_json1_1GenerateChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
