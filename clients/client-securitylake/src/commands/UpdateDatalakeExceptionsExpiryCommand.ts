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

import {
  UpdateDatalakeExceptionsExpiryRequest,
  UpdateDatalakeExceptionsExpiryRequestFilterSensitiveLog,
  UpdateDatalakeExceptionsExpiryResponse,
  UpdateDatalakeExceptionsExpiryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDatalakeExceptionsExpiryCommand,
  serializeAws_restJson1UpdateDatalakeExceptionsExpiryCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

export interface UpdateDatalakeExceptionsExpiryCommandInput extends UpdateDatalakeExceptionsExpiryRequest {}
export interface UpdateDatalakeExceptionsExpiryCommandOutput
  extends UpdateDatalakeExceptionsExpiryResponse,
    __MetadataBearer {}

/**
 * <p>Update the expiration period for the exception message to your preferred time, and
 *          control the time-to-live (TTL) for the exception message to remain. Exceptions are stored
 *          by default for 2 weeks from when a record was created in Amazon Security Lake. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, UpdateDatalakeExceptionsExpiryCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, UpdateDatalakeExceptionsExpiryCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const command = new UpdateDatalakeExceptionsExpiryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatalakeExceptionsExpiryCommandInput} for command's `input` shape.
 * @see {@link UpdateDatalakeExceptionsExpiryCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 */
export class UpdateDatalakeExceptionsExpiryCommand extends $Command<
  UpdateDatalakeExceptionsExpiryCommandInput,
  UpdateDatalakeExceptionsExpiryCommandOutput,
  SecurityLakeClientResolvedConfig
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

  constructor(readonly input: UpdateDatalakeExceptionsExpiryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDatalakeExceptionsExpiryCommandInput, UpdateDatalakeExceptionsExpiryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDatalakeExceptionsExpiryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "UpdateDatalakeExceptionsExpiryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDatalakeExceptionsExpiryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDatalakeExceptionsExpiryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateDatalakeExceptionsExpiryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDatalakeExceptionsExpiryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDatalakeExceptionsExpiryCommandOutput> {
    return deserializeAws_restJson1UpdateDatalakeExceptionsExpiryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
