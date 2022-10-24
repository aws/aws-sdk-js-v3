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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import {
  ListTestGridSessionActionsRequest,
  ListTestGridSessionActionsRequestFilterSensitiveLog,
  ListTestGridSessionActionsResult,
  ListTestGridSessionActionsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListTestGridSessionActionsCommand,
  serializeAws_json1_1ListTestGridSessionActionsCommand,
} from "../protocols/Aws_json1_1";

export interface ListTestGridSessionActionsCommandInput extends ListTestGridSessionActionsRequest {}
export interface ListTestGridSessionActionsCommandOutput extends ListTestGridSessionActionsResult, __MetadataBearer {}

/**
 * <p>Returns a list of the actions taken in a <a>TestGridSession</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListTestGridSessionActionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListTestGridSessionActionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListTestGridSessionActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTestGridSessionActionsCommandInput} for command's `input` shape.
 * @see {@link ListTestGridSessionActionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 */
export class ListTestGridSessionActionsCommand extends $Command<
  ListTestGridSessionActionsCommandInput,
  ListTestGridSessionActionsCommandOutput,
  DeviceFarmClientResolvedConfig
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

  constructor(readonly input: ListTestGridSessionActionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTestGridSessionActionsCommandInput, ListTestGridSessionActionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTestGridSessionActionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "ListTestGridSessionActionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTestGridSessionActionsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTestGridSessionActionsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTestGridSessionActionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTestGridSessionActionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTestGridSessionActionsCommandOutput> {
    return deserializeAws_json1_1ListTestGridSessionActionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
