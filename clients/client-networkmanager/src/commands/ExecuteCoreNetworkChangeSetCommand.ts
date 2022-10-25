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
  ExecuteCoreNetworkChangeSetRequest,
  ExecuteCoreNetworkChangeSetRequestFilterSensitiveLog,
  ExecuteCoreNetworkChangeSetResponse,
  ExecuteCoreNetworkChangeSetResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1ExecuteCoreNetworkChangeSetCommand,
  serializeAws_restJson1ExecuteCoreNetworkChangeSetCommand,
} from "../protocols/Aws_restJson1";

export interface ExecuteCoreNetworkChangeSetCommandInput extends ExecuteCoreNetworkChangeSetRequest {}
export interface ExecuteCoreNetworkChangeSetCommandOutput
  extends ExecuteCoreNetworkChangeSetResponse,
    __MetadataBearer {}

/**
 * <p>Executes a change set on your core network. Deploys changes globally based on the policy submitted..</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ExecuteCoreNetworkChangeSetCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ExecuteCoreNetworkChangeSetCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new ExecuteCoreNetworkChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteCoreNetworkChangeSetCommandInput} for command's `input` shape.
 * @see {@link ExecuteCoreNetworkChangeSetCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class ExecuteCoreNetworkChangeSetCommand extends $Command<
  ExecuteCoreNetworkChangeSetCommandInput,
  ExecuteCoreNetworkChangeSetCommandOutput,
  NetworkManagerClientResolvedConfig
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

  constructor(readonly input: ExecuteCoreNetworkChangeSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteCoreNetworkChangeSetCommandInput, ExecuteCoreNetworkChangeSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExecuteCoreNetworkChangeSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "ExecuteCoreNetworkChangeSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExecuteCoreNetworkChangeSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExecuteCoreNetworkChangeSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExecuteCoreNetworkChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExecuteCoreNetworkChangeSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExecuteCoreNetworkChangeSetCommandOutput> {
    return deserializeAws_restJson1ExecuteCoreNetworkChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
