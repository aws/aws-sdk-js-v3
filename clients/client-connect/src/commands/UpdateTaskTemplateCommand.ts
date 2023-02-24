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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  UpdateTaskTemplateRequest,
  UpdateTaskTemplateRequestFilterSensitiveLog,
  UpdateTaskTemplateResponse,
  UpdateTaskTemplateResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1UpdateTaskTemplateCommand,
  serializeAws_restJson1UpdateTaskTemplateCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateTaskTemplateCommandInput extends UpdateTaskTemplateRequest {}
export interface UpdateTaskTemplateCommandOutput extends UpdateTaskTemplateResponse, __MetadataBearer {}

/**
 * <p>Updates details about a specific task template in the specified Amazon Connect instance.
 *    This operation does not support partial updates. Instead it does a full update of template
 *    content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateTaskTemplateCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateTaskTemplateCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateTaskTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTaskTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateTaskTemplateCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class UpdateTaskTemplateCommand extends $Command<
  UpdateTaskTemplateCommandInput,
  UpdateTaskTemplateCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: UpdateTaskTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTaskTemplateCommandInput, UpdateTaskTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateTaskTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateTaskTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTaskTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateTaskTemplateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTaskTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateTaskTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTaskTemplateCommandOutput> {
    return deserializeAws_restJson1UpdateTaskTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
