import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import { GetProductsRequest, GetProductsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetProductsCommand,
  serializeAws_json1_1GetProductsCommand,
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

export type GetProductsCommandInput = GetProductsRequest;
export type GetProductsCommandOutput = GetProductsResponse & __MetadataBearer;

/**
 * <p>Returns a list of all products that match the filter criteria.</p>
 */
export class GetProductsCommand extends $Command<
  GetProductsCommandInput,
  GetProductsCommandOutput,
  PricingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetProductsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PricingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetProductsCommandInput, GetProductsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PricingClient";
    const commandName = "GetProductsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetProductsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetProductsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetProductsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetProductsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetProductsCommandOutput> {
    return deserializeAws_json1_1GetProductsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
