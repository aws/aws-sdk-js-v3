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
  GetControlOperationInput,
  GetControlOperationInputFilterSensitiveLog,
  GetControlOperationOutput,
  GetControlOperationOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetControlOperationCommand,
  serializeAws_restJson1GetControlOperationCommand,
} from "../protocols/Aws_restJson1";

export interface GetControlOperationCommandInput extends GetControlOperationInput {}
export interface GetControlOperationCommandOutput extends GetControlOperationOutput, __MetadataBearer {}

/**
 * <p>Returns the status of a particular <code>EnableControl</code> or
 *         <code>DisableControl</code> operation. Displays a message in case of error.
 *       Details for an operation are available for 90 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, GetControlOperationCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, GetControlOperationCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * const client = new ControlTowerClient(config);
 * const command = new GetControlOperationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetControlOperationCommandInput} for command's `input` shape.
 * @see {@link GetControlOperationCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 */
export class GetControlOperationCommand extends $Command<
  GetControlOperationCommandInput,
  GetControlOperationCommandOutput,
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

  constructor(readonly input: GetControlOperationCommandInput) {
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
  ): Handler<GetControlOperationCommandInput, GetControlOperationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetControlOperationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ControlTowerClient";
    const commandName = "GetControlOperationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetControlOperationInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetControlOperationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetControlOperationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetControlOperationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetControlOperationCommandOutput> {
    return deserializeAws_restJson1GetControlOperationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
