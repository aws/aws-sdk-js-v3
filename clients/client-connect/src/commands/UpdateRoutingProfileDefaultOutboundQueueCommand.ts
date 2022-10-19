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
  UpdateRoutingProfileDefaultOutboundQueueRequest,
  UpdateRoutingProfileDefaultOutboundQueueRequestFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand,
  serializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand,
} from "../protocols/Aws_restJson1";

export interface UpdateRoutingProfileDefaultOutboundQueueCommandInput
  extends UpdateRoutingProfileDefaultOutboundQueueRequest {}
export interface UpdateRoutingProfileDefaultOutboundQueueCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the default outbound queue of a routing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateRoutingProfileDefaultOutboundQueueCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateRoutingProfileDefaultOutboundQueueCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateRoutingProfileDefaultOutboundQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRoutingProfileDefaultOutboundQueueCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingProfileDefaultOutboundQueueCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class UpdateRoutingProfileDefaultOutboundQueueCommand extends $Command<
  UpdateRoutingProfileDefaultOutboundQueueCommandInput,
  UpdateRoutingProfileDefaultOutboundQueueCommandOutput,
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

  constructor(readonly input: UpdateRoutingProfileDefaultOutboundQueueCommandInput) {
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
  ): Handler<
    UpdateRoutingProfileDefaultOutboundQueueCommandInput,
    UpdateRoutingProfileDefaultOutboundQueueCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        UpdateRoutingProfileDefaultOutboundQueueCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "UpdateRoutingProfileDefaultOutboundQueueCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateRoutingProfileDefaultOutboundQueueRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateRoutingProfileDefaultOutboundQueueCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRoutingProfileDefaultOutboundQueueCommandOutput> {
    return deserializeAws_restJson1UpdateRoutingProfileDefaultOutboundQueueCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
