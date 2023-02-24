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

import { M2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../M2Client";
import {
  DeleteApplicationFromEnvironmentRequest,
  DeleteApplicationFromEnvironmentRequestFilterSensitiveLog,
  DeleteApplicationFromEnvironmentResponse,
  DeleteApplicationFromEnvironmentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteApplicationFromEnvironmentCommand,
  serializeAws_restJson1DeleteApplicationFromEnvironmentCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteApplicationFromEnvironmentCommandInput extends DeleteApplicationFromEnvironmentRequest {}
export interface DeleteApplicationFromEnvironmentCommandOutput
  extends DeleteApplicationFromEnvironmentResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a specific application from the specific runtime environment where it was previously
 *          deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has
 *          ever been deployed to it. This API removes the association of the application with the
 *          runtime environment so you can delete the environment smoothly.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { M2Client, DeleteApplicationFromEnvironmentCommand } from "@aws-sdk/client-m2"; // ES Modules import
 * // const { M2Client, DeleteApplicationFromEnvironmentCommand } = require("@aws-sdk/client-m2"); // CommonJS import
 * const client = new M2Client(config);
 * const command = new DeleteApplicationFromEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationFromEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationFromEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link M2ClientResolvedConfig | config} for M2Client's `config` shape.
 *
 */
export class DeleteApplicationFromEnvironmentCommand extends $Command<
  DeleteApplicationFromEnvironmentCommandInput,
  DeleteApplicationFromEnvironmentCommandOutput,
  M2ClientResolvedConfig
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

  constructor(readonly input: DeleteApplicationFromEnvironmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: M2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteApplicationFromEnvironmentCommandInput, DeleteApplicationFromEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteApplicationFromEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "M2Client";
    const commandName = "DeleteApplicationFromEnvironmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteApplicationFromEnvironmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteApplicationFromEnvironmentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteApplicationFromEnvironmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteApplicationFromEnvironmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteApplicationFromEnvironmentCommandOutput> {
    return deserializeAws_restJson1DeleteApplicationFromEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
