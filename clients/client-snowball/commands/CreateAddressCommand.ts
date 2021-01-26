import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { CreateAddressRequest, CreateAddressResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateAddressCommand,
  serializeAws_json1_1CreateAddressCommand,
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

export type CreateAddressCommandInput = CreateAddressRequest;
export type CreateAddressCommandOutput = CreateAddressResult & __MetadataBearer;

/**
 * <p>Creates an address for a Snow device to be shipped to. In most regions,
 *       addresses are validated at the time of creation. The address you provide must be located
 *       within the serviceable area of your region. If the address is invalid or unsupported, then an
 *       exception is thrown.</p>
 */
export class CreateAddressCommand extends $Command<
  CreateAddressCommandInput,
  CreateAddressCommandOutput,
  SnowballClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAddressCommandInput) {
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
  ): Handler<CreateAddressCommandInput, CreateAddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "CreateAddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAddressRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAddressResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAddressCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAddressCommandOutput> {
    return deserializeAws_json1_1CreateAddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
