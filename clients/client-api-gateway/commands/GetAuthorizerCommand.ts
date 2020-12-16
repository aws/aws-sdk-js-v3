import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { Authorizer, GetAuthorizerRequest } from "../models/models_0";
import {
  deserializeAws_restJson1GetAuthorizerCommand,
  serializeAws_restJson1GetAuthorizerCommand,
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

export type GetAuthorizerCommandInput = GetAuthorizerRequest;
export type GetAuthorizerCommandOutput = Authorizer & __MetadataBearer;

/**
 * <p>Describe an existing <a>Authorizer</a> resource.</p>
 *         <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizer.html">AWS CLI</a></div>
 */
export class GetAuthorizerCommand extends $Command<
  GetAuthorizerCommandInput,
  GetAuthorizerCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAuthorizerCommandInput) {
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
  ): Handler<GetAuthorizerCommandInput, GetAuthorizerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetAuthorizerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAuthorizerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: Authorizer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAuthorizerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAuthorizerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAuthorizerCommandOutput> {
    return deserializeAws_restJson1GetAuthorizerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
