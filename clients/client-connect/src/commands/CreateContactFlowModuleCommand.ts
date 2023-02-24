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
  CreateContactFlowModuleRequest,
  CreateContactFlowModuleRequestFilterSensitiveLog,
  CreateContactFlowModuleResponse,
  CreateContactFlowModuleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateContactFlowModuleCommand,
  serializeAws_restJson1CreateContactFlowModuleCommand,
} from "../protocols/Aws_restJson1";

export interface CreateContactFlowModuleCommandInput extends CreateContactFlowModuleRequest {}
export interface CreateContactFlowModuleCommandOutput extends CreateContactFlowModuleResponse, __MetadataBearer {}

/**
 * <p>Creates a flow module for the specified Amazon Connect instance. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateContactFlowModuleCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateContactFlowModuleCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateContactFlowModuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateContactFlowModuleCommandInput} for command's `input` shape.
 * @see {@link CreateContactFlowModuleCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class CreateContactFlowModuleCommand extends $Command<
  CreateContactFlowModuleCommandInput,
  CreateContactFlowModuleCommandOutput,
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

  constructor(readonly input: CreateContactFlowModuleCommandInput) {
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
  ): Handler<CreateContactFlowModuleCommandInput, CreateContactFlowModuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateContactFlowModuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "CreateContactFlowModuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateContactFlowModuleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateContactFlowModuleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateContactFlowModuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateContactFlowModuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateContactFlowModuleCommandOutput> {
    return deserializeAws_restJson1CreateContactFlowModuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
