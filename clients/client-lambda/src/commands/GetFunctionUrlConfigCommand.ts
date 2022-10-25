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
  GetFunctionUrlConfigRequest,
  GetFunctionUrlConfigRequestFilterSensitiveLog,
  GetFunctionUrlConfigResponse,
  GetFunctionUrlConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetFunctionUrlConfigCommand,
  serializeAws_restJson1GetFunctionUrlConfigCommand,
} from "../protocols/Aws_restJson1";

export interface GetFunctionUrlConfigCommandInput extends GetFunctionUrlConfigRequest {}
export interface GetFunctionUrlConfigCommandOutput extends GetFunctionUrlConfigResponse, __MetadataBearer {}

/**
 * <p>Returns details about a Lambda function URL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionUrlConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionUrlConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new GetFunctionUrlConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFunctionUrlConfigCommandInput} for command's `input` shape.
 * @see {@link GetFunctionUrlConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class GetFunctionUrlConfigCommand extends $Command<
  GetFunctionUrlConfigCommandInput,
  GetFunctionUrlConfigCommandOutput,
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

  constructor(readonly input: GetFunctionUrlConfigCommandInput) {
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
  ): Handler<GetFunctionUrlConfigCommandInput, GetFunctionUrlConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFunctionUrlConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "GetFunctionUrlConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFunctionUrlConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetFunctionUrlConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFunctionUrlConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFunctionUrlConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFunctionUrlConfigCommandOutput> {
    return deserializeAws_restJson1GetFunctionUrlConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
