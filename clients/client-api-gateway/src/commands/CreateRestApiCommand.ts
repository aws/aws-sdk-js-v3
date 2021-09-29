import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { CreateRestApiRequest, RestApi } from "../models/models_0";
import {
  deserializeAws_restJson1CreateRestApiCommand,
  serializeAws_restJson1CreateRestApiCommand,
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

export interface CreateRestApiCommandInput extends CreateRestApiRequest {}
export interface CreateRestApiCommandOutput extends RestApi, __MetadataBearer {}

/**
 * <p>Creates a new <a>RestApi</a> resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, CreateRestApiCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, CreateRestApiCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new CreateRestApiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRestApiCommandInput} for command's `input` shape.
 * @see {@link CreateRestApiCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateRestApiCommand extends $Command<
  CreateRestApiCommandInput,
  CreateRestApiCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRestApiCommandInput) {
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
  ): Handler<CreateRestApiCommandInput, CreateRestApiCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "CreateRestApiCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRestApiRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestApi.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRestApiCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRestApiCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRestApiCommandOutput> {
    return deserializeAws_restJson1CreateRestApiCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
