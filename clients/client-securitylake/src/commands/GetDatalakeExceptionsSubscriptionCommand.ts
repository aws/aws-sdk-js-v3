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
  GetDatalakeExceptionsSubscriptionRequest,
  GetDatalakeExceptionsSubscriptionRequestFilterSensitiveLog,
  GetDatalakeExceptionsSubscriptionResponse,
  GetDatalakeExceptionsSubscriptionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetDatalakeExceptionsSubscriptionCommand,
  serializeAws_restJson1GetDatalakeExceptionsSubscriptionCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

export interface GetDatalakeExceptionsSubscriptionCommandInput extends GetDatalakeExceptionsSubscriptionRequest {}
export interface GetDatalakeExceptionsSubscriptionCommandOutput
  extends GetDatalakeExceptionsSubscriptionResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the details of exception notifications for the account in Amazon Security Lake.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, GetDatalakeExceptionsSubscriptionCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, GetDatalakeExceptionsSubscriptionCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const command = new GetDatalakeExceptionsSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDatalakeExceptionsSubscriptionCommandInput} for command's `input` shape.
 * @see {@link GetDatalakeExceptionsSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 */
export class GetDatalakeExceptionsSubscriptionCommand extends $Command<
  GetDatalakeExceptionsSubscriptionCommandInput,
  GetDatalakeExceptionsSubscriptionCommandOutput,
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

  constructor(readonly input: GetDatalakeExceptionsSubscriptionCommandInput) {
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
  ): Handler<GetDatalakeExceptionsSubscriptionCommandInput, GetDatalakeExceptionsSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDatalakeExceptionsSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "GetDatalakeExceptionsSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDatalakeExceptionsSubscriptionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetDatalakeExceptionsSubscriptionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetDatalakeExceptionsSubscriptionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDatalakeExceptionsSubscriptionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDatalakeExceptionsSubscriptionCommandOutput> {
    return deserializeAws_restJson1GetDatalakeExceptionsSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
