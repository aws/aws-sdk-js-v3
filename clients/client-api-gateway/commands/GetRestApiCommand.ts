import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { GetRestApiRequest, RestApi } from "../models/models_0";
import {
  deserializeAws_restJson1GetRestApiCommand,
  serializeAws_restJson1GetRestApiCommand,
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

export type GetRestApiCommandInput = GetRestApiRequest;
export type GetRestApiCommandOutput = RestApi & __MetadataBearer;

/**
 * <p>Lists the <a>RestApi</a> resource in the collection.</p>
 */
export class GetRestApiCommand extends $Command<
  GetRestApiCommandInput,
  GetRestApiCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRestApiCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRestApiCommandInput, GetRestApiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetRestApiCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRestApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestApi.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRestApiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRestApiCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRestApiCommandOutput> {
    return deserializeAws_restJson1GetRestApiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
