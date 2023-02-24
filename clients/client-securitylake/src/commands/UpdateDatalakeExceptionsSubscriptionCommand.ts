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
  UpdateDatalakeExceptionsSubscriptionRequest,
  UpdateDatalakeExceptionsSubscriptionRequestFilterSensitiveLog,
  UpdateDatalakeExceptionsSubscriptionResponse,
  UpdateDatalakeExceptionsSubscriptionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDatalakeExceptionsSubscriptionCommand,
  serializeAws_restJson1UpdateDatalakeExceptionsSubscriptionCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

export interface UpdateDatalakeExceptionsSubscriptionCommandInput extends UpdateDatalakeExceptionsSubscriptionRequest {}
export interface UpdateDatalakeExceptionsSubscriptionCommandOutput
  extends UpdateDatalakeExceptionsSubscriptionResponse,
    __MetadataBearer {}

/**
 * <p>Updates the specified notification subscription in Amazon Security Lake for the organization
 *          you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, UpdateDatalakeExceptionsSubscriptionCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, UpdateDatalakeExceptionsSubscriptionCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const command = new UpdateDatalakeExceptionsSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDatalakeExceptionsSubscriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateDatalakeExceptionsSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 */
export class UpdateDatalakeExceptionsSubscriptionCommand extends $Command<
  UpdateDatalakeExceptionsSubscriptionCommandInput,
  UpdateDatalakeExceptionsSubscriptionCommandOutput,
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

  constructor(readonly input: UpdateDatalakeExceptionsSubscriptionCommandInput) {
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
  ): Handler<UpdateDatalakeExceptionsSubscriptionCommandInput, UpdateDatalakeExceptionsSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDatalakeExceptionsSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "UpdateDatalakeExceptionsSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDatalakeExceptionsSubscriptionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDatalakeExceptionsSubscriptionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateDatalakeExceptionsSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDatalakeExceptionsSubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDatalakeExceptionsSubscriptionCommandOutput> {
    return deserializeAws_restJson1UpdateDatalakeExceptionsSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
