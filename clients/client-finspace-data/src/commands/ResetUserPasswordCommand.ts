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

import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import {
  ResetUserPasswordRequest,
  ResetUserPasswordRequestFilterSensitiveLog,
  ResetUserPasswordResponse,
  ResetUserPasswordResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ResetUserPasswordCommand,
  serializeAws_restJson1ResetUserPasswordCommand,
} from "../protocols/Aws_restJson1";

export interface ResetUserPasswordCommandInput extends ResetUserPasswordRequest {}
export interface ResetUserPasswordCommandOutput extends ResetUserPasswordResponse, __MetadataBearer {}

/**
 * <p>Resets the password for a specified user ID and generates a temporary one. Only a superuser can reset password for other users. Resetting the password immediately invalidates the previous password associated with the user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, ResetUserPasswordCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, ResetUserPasswordCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const command = new ResetUserPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetUserPasswordCommandInput} for command's `input` shape.
 * @see {@link ResetUserPasswordCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 */
export class ResetUserPasswordCommand extends $Command<
  ResetUserPasswordCommandInput,
  ResetUserPasswordCommandOutput,
  FinspaceDataClientResolvedConfig
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

  constructor(readonly input: ResetUserPasswordCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResetUserPasswordCommandInput, ResetUserPasswordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetUserPasswordCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "ResetUserPasswordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetUserPasswordRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ResetUserPasswordResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetUserPasswordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ResetUserPasswordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetUserPasswordCommandOutput> {
    return deserializeAws_restJson1ResetUserPasswordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
