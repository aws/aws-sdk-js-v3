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
  PutRumEventsRequest,
  PutRumEventsRequestFilterSensitiveLog,
  PutRumEventsResponse,
  PutRumEventsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutRumEventsCommand,
  serializeAws_restJson1PutRumEventsCommand,
} from "../protocols/Aws_restJson1";
import { RUMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RUMClient";

export interface PutRumEventsCommandInput extends PutRumEventsRequest {}
export interface PutRumEventsCommandOutput extends PutRumEventsResponse, __MetadataBearer {}

/**
 * <p>Sends telemetry events about your application performance and user behavior to CloudWatch RUM. The code
 *       snippet that RUM generates for you to add to your application includes <code>PutRumEvents</code> operations to
 *       send this data to RUM.</p>
 *          <p>Each <code>PutRumEvents</code> operation can send a batch of events from one user session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RUMClient, PutRumEventsCommand } from "@aws-sdk/client-rum"; // ES Modules import
 * // const { RUMClient, PutRumEventsCommand } = require("@aws-sdk/client-rum"); // CommonJS import
 * const client = new RUMClient(config);
 * const command = new PutRumEventsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRumEventsCommandInput} for command's `input` shape.
 * @see {@link PutRumEventsCommandOutput} for command's `response` shape.
 * @see {@link RUMClientResolvedConfig | config} for RUMClient's `config` shape.
 *
 */
export class PutRumEventsCommand extends $Command<
  PutRumEventsCommandInput,
  PutRumEventsCommandOutput,
  RUMClientResolvedConfig
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

  constructor(readonly input: PutRumEventsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RUMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutRumEventsCommandInput, PutRumEventsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PutRumEventsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RUMClient";
    const commandName = "PutRumEventsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutRumEventsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutRumEventsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutRumEventsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutRumEventsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutRumEventsCommandOutput> {
    return deserializeAws_restJson1PutRumEventsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
