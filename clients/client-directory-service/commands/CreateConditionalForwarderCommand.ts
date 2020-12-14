import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CreateConditionalForwarderRequest, CreateConditionalForwarderResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateConditionalForwarderCommand,
  serializeAws_json1_1CreateConditionalForwarderCommand,
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

export type CreateConditionalForwarderCommandInput = CreateConditionalForwarderRequest;
export type CreateConditionalForwarderCommandOutput = CreateConditionalForwarderResult & __MetadataBearer;

/**
 * <p>Creates a conditional forwarder associated with your AWS directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.</p>
 */
export class CreateConditionalForwarderCommand extends $Command<
  CreateConditionalForwarderCommandInput,
  CreateConditionalForwarderCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateConditionalForwarderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateConditionalForwarderCommandInput, CreateConditionalForwarderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "CreateConditionalForwarderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConditionalForwarderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateConditionalForwarderResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateConditionalForwarderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateConditionalForwarderCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateConditionalForwarderCommandOutput> {
    return deserializeAws_json1_1CreateConditionalForwarderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
