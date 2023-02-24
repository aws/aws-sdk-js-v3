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
  ReplicateInstanceRequest,
  ReplicateInstanceRequestFilterSensitiveLog,
  ReplicateInstanceResponse,
  ReplicateInstanceResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ReplicateInstanceCommand,
  serializeAws_restJson1ReplicateInstanceCommand,
} from "../protocols/Aws_restJson1";

export interface ReplicateInstanceCommandInput extends ReplicateInstanceRequest {}
export interface ReplicateInstanceCommandOutput extends ReplicateInstanceResponse, __MetadataBearer {}

/**
 * <p>Replicates an Amazon Connect instance in the specified Amazon Web Services Region.</p>
 *          <p>For more information about replicating an Amazon Connect instance, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-replica-connect-instance.html">Create
 *     a replica of your existing Amazon Connect instance</a> in the <i>Amazon Connect
 *     Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ReplicateInstanceCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ReplicateInstanceCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ReplicateInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplicateInstanceCommandInput} for command's `input` shape.
 * @see {@link ReplicateInstanceCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class ReplicateInstanceCommand extends $Command<
  ReplicateInstanceCommandInput,
  ReplicateInstanceCommandOutput,
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

  constructor(readonly input: ReplicateInstanceCommandInput) {
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
  ): Handler<ReplicateInstanceCommandInput, ReplicateInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReplicateInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "ReplicateInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ReplicateInstanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ReplicateInstanceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReplicateInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ReplicateInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReplicateInstanceCommandOutput> {
    return deserializeAws_restJson1ReplicateInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
