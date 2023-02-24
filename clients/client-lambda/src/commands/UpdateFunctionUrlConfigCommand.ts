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
  UpdateFunctionUrlConfigRequest,
  UpdateFunctionUrlConfigRequestFilterSensitiveLog,
  UpdateFunctionUrlConfigResponse,
  UpdateFunctionUrlConfigResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateFunctionUrlConfigCommand,
  serializeAws_restJson1UpdateFunctionUrlConfigCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateFunctionUrlConfigCommandInput extends UpdateFunctionUrlConfigRequest {}
export interface UpdateFunctionUrlConfigCommandOutput extends UpdateFunctionUrlConfigResponse, __MetadataBearer {}

/**
 * <p>Updates the configuration for a Lambda function URL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateFunctionUrlConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateFunctionUrlConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const command = new UpdateFunctionUrlConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFunctionUrlConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateFunctionUrlConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 */
export class UpdateFunctionUrlConfigCommand extends $Command<
  UpdateFunctionUrlConfigCommandInput,
  UpdateFunctionUrlConfigCommandOutput,
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

  constructor(readonly input: UpdateFunctionUrlConfigCommandInput) {
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
  ): Handler<UpdateFunctionUrlConfigCommandInput, UpdateFunctionUrlConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFunctionUrlConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LambdaClient";
    const commandName = "UpdateFunctionUrlConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateFunctionUrlConfigRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateFunctionUrlConfigResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateFunctionUrlConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateFunctionUrlConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFunctionUrlConfigCommandOutput> {
    return deserializeAws_restJson1UpdateFunctionUrlConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
