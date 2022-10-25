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
  IntegrationResponse,
  IntegrationResponseFilterSensitiveLog,
  PutIntegrationResponseRequest,
  PutIntegrationResponseRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutIntegrationResponseCommand,
  serializeAws_restJson1PutIntegrationResponseCommand,
} from "../protocols/Aws_restJson1";

export interface PutIntegrationResponseCommandInput extends PutIntegrationResponseRequest {}
export interface PutIntegrationResponseCommandOutput extends IntegrationResponse, __MetadataBearer {}

/**
 * <p>Represents a put integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, PutIntegrationResponseCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, PutIntegrationResponseCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new PutIntegrationResponseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutIntegrationResponseCommandInput} for command's `input` shape.
 * @see {@link PutIntegrationResponseCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 */
export class PutIntegrationResponseCommand extends $Command<
  PutIntegrationResponseCommandInput,
  PutIntegrationResponseCommandOutput,
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

  constructor(readonly input: PutIntegrationResponseCommandInput) {
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
  ): Handler<PutIntegrationResponseCommandInput, PutIntegrationResponseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutIntegrationResponseCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "PutIntegrationResponseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutIntegrationResponseRequestFilterSensitiveLog,
      outputFilterSensitiveLog: IntegrationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutIntegrationResponseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutIntegrationResponseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutIntegrationResponseCommandOutput> {
    return deserializeAws_restJson1PutIntegrationResponseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
