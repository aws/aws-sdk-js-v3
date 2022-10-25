// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import {
  GatewayResponses,
  GatewayResponsesFilterSensitiveLog,
  GetGatewayResponsesRequest,
  GetGatewayResponsesRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetGatewayResponsesCommand,
  serializeAws_restJson1GetGatewayResponsesCommand,
} from "../protocols/Aws_restJson1";

export interface GetGatewayResponsesCommandInput extends GetGatewayResponsesRequest {}
export interface GetGatewayResponsesCommandOutput extends GatewayResponses, __MetadataBearer {}

/**
 * <p>Gets the GatewayResponses collection on the given RestApi. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default GatewayResponses collection for the supported response types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetGatewayResponsesCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetGatewayResponsesCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new GetGatewayResponsesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGatewayResponsesCommandInput} for command's `input` shape.
 * @see {@link GetGatewayResponsesCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 */
export class GetGatewayResponsesCommand extends $Command<
  GetGatewayResponsesCommandInput,
  GetGatewayResponsesCommandOutput,
  APIGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: GetGatewayResponsesCommandInput) {
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
  ): Handler<GetGatewayResponsesCommandInput, GetGatewayResponsesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetGatewayResponsesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetGatewayResponsesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetGatewayResponsesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GatewayResponsesFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetGatewayResponsesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetGatewayResponsesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetGatewayResponsesCommandOutput> {
    return deserializeAws_restJson1GetGatewayResponsesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
