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
  GetDatalakeExceptionsExpiryRequest,
  GetDatalakeExceptionsExpiryRequestFilterSensitiveLog,
  GetDatalakeExceptionsExpiryResponse,
  GetDatalakeExceptionsExpiryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetDatalakeExceptionsExpiryCommand,
  serializeAws_restJson1GetDatalakeExceptionsExpiryCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

export interface GetDatalakeExceptionsExpiryCommandInput extends GetDatalakeExceptionsExpiryRequest {}
export interface GetDatalakeExceptionsExpiryCommandOutput
  extends GetDatalakeExceptionsExpiryResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the expiration period and time-to-live (TTL) for which the exception message
 *          will remain. Exceptions are stored by default, for 2 weeks from when a record was created
 *          in Amazon Security Lake. This API does not take input parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, GetDatalakeExceptionsExpiryCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, GetDatalakeExceptionsExpiryCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const command = new GetDatalakeExceptionsExpiryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDatalakeExceptionsExpiryCommandInput} for command's `input` shape.
 * @see {@link GetDatalakeExceptionsExpiryCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 */
export class GetDatalakeExceptionsExpiryCommand extends $Command<
  GetDatalakeExceptionsExpiryCommandInput,
  GetDatalakeExceptionsExpiryCommandOutput,
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

  constructor(readonly input: GetDatalakeExceptionsExpiryCommandInput) {
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
  ): Handler<GetDatalakeExceptionsExpiryCommandInput, GetDatalakeExceptionsExpiryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDatalakeExceptionsExpiryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "GetDatalakeExceptionsExpiryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDatalakeExceptionsExpiryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDatalakeExceptionsExpiryResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDatalakeExceptionsExpiryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDatalakeExceptionsExpiryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDatalakeExceptionsExpiryCommandOutput> {
    return deserializeAws_restJson1GetDatalakeExceptionsExpiryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
