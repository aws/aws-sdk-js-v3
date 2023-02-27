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
  ListMonitorsInput,
  ListMonitorsInputFilterSensitiveLog,
  ListMonitorsOutput,
  ListMonitorsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListMonitorsCommand,
  serializeAws_restJson1ListMonitorsCommand,
} from "../protocols/Aws_restJson1";

export interface ListMonitorsCommandInput extends ListMonitorsInput {}
export interface ListMonitorsCommandOutput extends ListMonitorsOutput, __MetadataBearer {}

/**
 * <p>Lists all of your monitors for Amazon CloudWatch Internet Monitor and their statuses, along with the Amazon Resource Name (ARN) and name of each monitor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InternetMonitorClient, ListMonitorsCommand } from "@aws-sdk/client-internetmonitor"; // ES Modules import
 * // const { InternetMonitorClient, ListMonitorsCommand } = require("@aws-sdk/client-internetmonitor"); // CommonJS import
 * const client = new InternetMonitorClient(config);
 * const command = new ListMonitorsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMonitorsCommandInput} for command's `input` shape.
 * @see {@link ListMonitorsCommandOutput} for command's `response` shape.
 * @see {@link InternetMonitorClientResolvedConfig | config} for InternetMonitorClient's `config` shape.
 *
 */
export class ListMonitorsCommand extends $Command<
  ListMonitorsCommandInput,
  ListMonitorsCommandOutput,
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

  constructor(readonly input: ListMonitorsCommandInput) {
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
  ): Handler<ListMonitorsCommandInput, ListMonitorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListMonitorsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InternetMonitorClient";
    const commandName = "ListMonitorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMonitorsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListMonitorsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMonitorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListMonitorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMonitorsCommandOutput> {
    return deserializeAws_restJson1ListMonitorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
