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

import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  CreateFunctionUrlConfigRequest,
  CreateFunctionUrlConfigRequestFilterSensitiveLog,
  CreateFunctionUrlConfigResponse,
  CreateFunctionUrlConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateFunctionUrlConfigCommand,
  serializeAws_restJson1CreateFunctionUrlConfigCommand,
} from "../protocols/Aws_restJson1";

export interface CreateFunctionUrlConfigCommandInput extends CreateFunctionUrlConfigRequest {}
export interface CreateFunctionUrlConfigCommandOutput extends CreateFunctionUrlConfigResponse, __MetadataBearer {}

/**
 * <p>Creates a Lambda function URL with the specified configuration parameters. A function URL is
 *       a dedicated HTTP(S) endpoint that you can use to invoke your function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, CreateFunctionUrlConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, CreateFunctionUrlConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new CreateFunctionUrlConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFunctionUrlConfigCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionUrlConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class CreateFunctionUrlConfigCommand extends $Command<
  CreateFunctionUrlConfigCommandInput,
  CreateFunctionUrlConfigCommandOutput,
  LambdaClientResolvedConfig
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

  constructor(readonly input: CreateFunctionUrlConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LambdaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFunctionUrlConfigCommandInput, CreateFunctionUrlConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFunctionUrlConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "CreateFunctionUrlConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFunctionUrlConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateFunctionUrlConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFunctionUrlConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateFunctionUrlConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFunctionUrlConfigCommandOutput> {
    return deserializeAws_restJson1CreateFunctionUrlConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
