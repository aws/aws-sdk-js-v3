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

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import {
  UpdateLayoutRequest,
  UpdateLayoutRequestFilterSensitiveLog,
  UpdateLayoutResponse,
  UpdateLayoutResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UpdateLayoutCommand,
  serializeAws_restJson1UpdateLayoutCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateLayoutCommandInput extends UpdateLayoutRequest {}
export interface UpdateLayoutCommandOutput extends UpdateLayoutResponse, __MetadataBearer {}

/**
 * <p>Updates the attributes of an existing layout.</p>
 *          <p>If the action is successful, the service sends back an HTTP 200 response with an empty
 *       HTTP body.</p>
 *          <p>A <code>ValidationException</code> is returned when you add non-existent
 *         <code>fieldIds</code> to a layout.</p>
 *          <note>
 *             <p>Title and Status fields cannot be part of layouts because they are not
 *         configurable.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, UpdateLayoutCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, UpdateLayoutCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const command = new UpdateLayoutCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLayoutCommandInput} for command's `input` shape.
 * @see {@link UpdateLayoutCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 */
export class UpdateLayoutCommand extends $Command<
  UpdateLayoutCommandInput,
  UpdateLayoutCommandOutput,
  ConnectCasesClientResolvedConfig
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

  constructor(readonly input: UpdateLayoutCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectCasesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLayoutCommandInput, UpdateLayoutCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateLayoutCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCasesClient";
    const commandName = "UpdateLayoutCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateLayoutRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateLayoutResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateLayoutCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateLayoutCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateLayoutCommandOutput> {
    return deserializeAws_restJson1UpdateLayoutCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
