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

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import {
  DisableControlInput,
  DisableControlInputFilterSensitiveLog,
  DisableControlOutput,
  DisableControlOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DisableControlCommand,
  serializeAws_restJson1DisableControlCommand,
} from "../protocols/Aws_restJson1";

export interface DisableControlCommandInput extends DisableControlInput {}
export interface DisableControlCommandOutput extends DisableControlOutput, __MetadataBearer {}

/**
 * <p>This API call turns off a control. It starts an asynchronous operation that deletes AWS resources on the specified
 *         organizational unit and the accounts it contains. The resources will vary according to the
 *         control that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, DisableControlCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, DisableControlCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const command = new DisableControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableControlCommandInput} for command's `input` shape.
 * @see {@link DisableControlCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 */
export class DisableControlCommand extends $Command<
  DisableControlCommandInput,
  DisableControlCommandOutput,
  ControlTowerClientResolvedConfig
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

  constructor(readonly input: DisableControlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ControlTowerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableControlCommandInput, DisableControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableControlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ControlTowerClient";
    const commandName = "DisableControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableControlInputFilterSensitiveLog,
      outputFilterSensitiveLog: DisableControlOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableControlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DisableControlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableControlCommandOutput> {
    return deserializeAws_restJson1DisableControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
