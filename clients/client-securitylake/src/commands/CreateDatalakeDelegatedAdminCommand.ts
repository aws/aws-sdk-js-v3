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
  CreateDatalakeDelegatedAdminRequest,
  CreateDatalakeDelegatedAdminRequestFilterSensitiveLog,
  CreateDatalakeDelegatedAdminResponse,
  CreateDatalakeDelegatedAdminResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateDatalakeDelegatedAdminCommand,
  serializeAws_restJson1CreateDatalakeDelegatedAdminCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

export interface CreateDatalakeDelegatedAdminCommandInput extends CreateDatalakeDelegatedAdminRequest {}
export interface CreateDatalakeDelegatedAdminCommandOutput
  extends CreateDatalakeDelegatedAdminResponse,
    __MetadataBearer {}

/**
 * <p>Designates the Security Lake administrator account for the organization. This API can only
 *          be called by the organization management account. The organization management account
 *          cannot be the delegated administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, CreateDatalakeDelegatedAdminCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, CreateDatalakeDelegatedAdminCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const command = new CreateDatalakeDelegatedAdminCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatalakeDelegatedAdminCommandInput} for command's `input` shape.
 * @see {@link CreateDatalakeDelegatedAdminCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 */
export class CreateDatalakeDelegatedAdminCommand extends $Command<
  CreateDatalakeDelegatedAdminCommandInput,
  CreateDatalakeDelegatedAdminCommandOutput,
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

  constructor(readonly input: CreateDatalakeDelegatedAdminCommandInput) {
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
  ): Handler<CreateDatalakeDelegatedAdminCommandInput, CreateDatalakeDelegatedAdminCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDatalakeDelegatedAdminCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "CreateDatalakeDelegatedAdminCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDatalakeDelegatedAdminRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDatalakeDelegatedAdminResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDatalakeDelegatedAdminCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDatalakeDelegatedAdminCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDatalakeDelegatedAdminCommandOutput> {
    return deserializeAws_restJson1CreateDatalakeDelegatedAdminCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
