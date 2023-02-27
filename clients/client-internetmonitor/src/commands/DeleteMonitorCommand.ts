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

import { InternetMonitorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InternetMonitorClient";
import {
  DeleteMonitorInput,
  DeleteMonitorInputFilterSensitiveLog,
  DeleteMonitorOutput,
  DeleteMonitorOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteMonitorCommand,
  serializeAws_restJson1DeleteMonitorCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteMonitorCommandInput extends DeleteMonitorInput {}
export interface DeleteMonitorCommandOutput extends DeleteMonitorOutput, __MetadataBearer {}

/**
 * <p>Deletes a monitor in Amazon CloudWatch Internet Monitor. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, DeleteMonitorCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, DeleteMonitorCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * const client = new InternetMonitorClient(config);
 * const command = new DeleteMonitorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMonitorCommandInput} for command's `input` shape.
 * @see {@link DeleteMonitorCommandOutput} for command's `response` shape.
 * @see {@link InternetMonitorClientResolvedConfig | config} for InternetMonitorClient's `config` shape.
 *
 */
export class DeleteMonitorCommand extends $Command<
  DeleteMonitorCommandInput,
  DeleteMonitorCommandOutput,
  InternetMonitorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  constructor(readonly input: DeleteMonitorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InternetMonitorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMonitorCommandInput, DeleteMonitorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteMonitorCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InternetMonitorClient";
    const commandName = "DeleteMonitorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteMonitorInputFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteMonitorOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteMonitorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteMonitorCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMonitorCommandOutput> {
    return deserializeAws_restJson1DeleteMonitorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
