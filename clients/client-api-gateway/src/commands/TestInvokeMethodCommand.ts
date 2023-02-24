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
  TestInvokeMethodRequest,
  TestInvokeMethodRequestFilterSensitiveLog,
  TestInvokeMethodResponse,
  TestInvokeMethodResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1TestInvokeMethodCommand,
  serializeAws_restJson1TestInvokeMethodCommand,
} from "../protocols/Aws_restJson1";

export interface TestInvokeMethodCommandInput extends TestInvokeMethodRequest {}
export interface TestInvokeMethodCommandOutput extends TestInvokeMethodResponse, __MetadataBearer {}

/**
 * <p>Simulate the invocation of a Method in your RestApi with headers, parameters, and an incoming request body.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, TestInvokeMethodCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, TestInvokeMethodCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const command = new TestInvokeMethodCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestInvokeMethodCommandInput} for command's `input` shape.
 * @see {@link TestInvokeMethodCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 */
export class TestInvokeMethodCommand extends $Command<
  TestInvokeMethodCommandInput,
  TestInvokeMethodCommandOutput,
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

  constructor(readonly input: TestInvokeMethodCommandInput) {
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
  ): Handler<TestInvokeMethodCommandInput, TestInvokeMethodCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TestInvokeMethodCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "TestInvokeMethodCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TestInvokeMethodRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TestInvokeMethodResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TestInvokeMethodCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TestInvokeMethodCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TestInvokeMethodCommandOutput> {
    return deserializeAws_restJson1TestInvokeMethodCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
