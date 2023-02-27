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
  ListAgentStatusRequest,
  ListAgentStatusRequestFilterSensitiveLog,
  ListAgentStatusResponse,
  ListAgentStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAgentStatusesCommand,
  serializeAws_restJson1ListAgentStatusesCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link ListAgentStatusesCommand}.
 */
export interface ListAgentStatusesCommandInput extends ListAgentStatusRequest {}
/**
 * The output of {@link ListAgentStatusesCommand}.
 */
export interface ListAgentStatusesCommandOutput extends ListAgentStatusResponse, __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Lists agent statuses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListAgentStatusesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListAgentStatusesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListAgentStatusesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAgentStatusesCommandInput} for command's `input` shape.
 * @see {@link ListAgentStatusesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class ListAgentStatusesCommand extends $Command<
  ListAgentStatusesCommandInput,
  ListAgentStatusesCommandOutput,
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

  constructor(readonly input: ListAgentStatusesCommandInput) {
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
  ): Handler<ListAgentStatusesCommandInput, ListAgentStatusesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAgentStatusesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ListAgentStatusesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAgentStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAgentStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAgentStatusesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAgentStatusesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAgentStatusesCommandOutput> {
    return deserializeAws_restJson1ListAgentStatusesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
