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
  CreateDatalakeAutoEnableRequest,
  CreateDatalakeAutoEnableRequestFilterSensitiveLog,
  CreateDatalakeAutoEnableResponse,
  CreateDatalakeAutoEnableResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateDatalakeAutoEnableCommand,
  serializeAws_restJson1CreateDatalakeAutoEnableCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

export interface CreateDatalakeAutoEnableCommandInput extends CreateDatalakeAutoEnableRequest {}
export interface CreateDatalakeAutoEnableCommandOutput extends CreateDatalakeAutoEnableResponse, __MetadataBearer {}

/**
 * <p>Automatically enables Amazon Security Lake for new member accounts in your organization.
 *          Security Lake is not automatically enabled for any existing member accounts in your
 *          organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, CreateDatalakeAutoEnableCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, CreateDatalakeAutoEnableCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const command = new CreateDatalakeAutoEnableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatalakeAutoEnableCommandInput} for command's `input` shape.
 * @see {@link CreateDatalakeAutoEnableCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 */
export class CreateDatalakeAutoEnableCommand extends $Command<
  CreateDatalakeAutoEnableCommandInput,
  CreateDatalakeAutoEnableCommandOutput,
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

  constructor(readonly input: CreateDatalakeAutoEnableCommandInput) {
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
  ): Handler<CreateDatalakeAutoEnableCommandInput, CreateDatalakeAutoEnableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDatalakeAutoEnableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "CreateDatalakeAutoEnableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDatalakeAutoEnableRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDatalakeAutoEnableResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDatalakeAutoEnableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDatalakeAutoEnableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDatalakeAutoEnableCommandOutput> {
    return deserializeAws_restJson1CreateDatalakeAutoEnableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
