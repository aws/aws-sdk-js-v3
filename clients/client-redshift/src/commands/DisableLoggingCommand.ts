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
  DisableLoggingMessage,
  DisableLoggingMessageFilterSensitiveLog,
  LoggingStatus,
  LoggingStatusFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryDisableLoggingCommand,
  serializeAws_queryDisableLoggingCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface DisableLoggingCommandInput extends DisableLoggingMessage {}
export interface DisableLoggingCommandOutput extends LoggingStatus, __MetadataBearer {}

/**
 * <p>Stops logging information, such as queries and connection attempts, for the
 *             specified Amazon Redshift cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DisableLoggingCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DisableLoggingCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DisableLoggingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableLoggingCommandInput} for command's `input` shape.
 * @see {@link DisableLoggingCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class DisableLoggingCommand extends $Command<
  DisableLoggingCommandInput,
  DisableLoggingCommandOutput,
  RedshiftClientResolvedConfig
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

  constructor(readonly input: DisableLoggingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DisableLoggingCommandInput, DisableLoggingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableLoggingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "DisableLoggingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableLoggingMessageFilterSensitiveLog,
      outputFilterSensitiveLog: LoggingStatusFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableLoggingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDisableLoggingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableLoggingCommandOutput> {
    return deserializeAws_queryDisableLoggingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
