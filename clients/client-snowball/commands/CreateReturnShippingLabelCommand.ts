import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { CreateReturnShippingLabelRequest, CreateReturnShippingLabelResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateReturnShippingLabelCommand,
  serializeAws_json1_1CreateReturnShippingLabelCommand,
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

export type CreateReturnShippingLabelCommandInput = CreateReturnShippingLabelRequest;
export type CreateReturnShippingLabelCommandOutput = CreateReturnShippingLabelResult & __MetadataBearer;

/**
 * <p>Creates a shipping label that will be used to return the Snow device to AWS.</p>
 */
export class CreateReturnShippingLabelCommand extends $Command<
  CreateReturnShippingLabelCommandInput,
  CreateReturnShippingLabelCommandOutput,
  SnowballClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateReturnShippingLabelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReturnShippingLabelCommandInput, CreateReturnShippingLabelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "CreateReturnShippingLabelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReturnShippingLabelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateReturnShippingLabelResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateReturnShippingLabelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateReturnShippingLabelCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateReturnShippingLabelCommandOutput> {
    return deserializeAws_json1_1CreateReturnShippingLabelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
