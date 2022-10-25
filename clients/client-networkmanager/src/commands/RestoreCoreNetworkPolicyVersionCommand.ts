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
  RestoreCoreNetworkPolicyVersionRequest,
  RestoreCoreNetworkPolicyVersionRequestFilterSensitiveLog,
  RestoreCoreNetworkPolicyVersionResponse,
  RestoreCoreNetworkPolicyVersionResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1RestoreCoreNetworkPolicyVersionCommand,
  serializeAws_restJson1RestoreCoreNetworkPolicyVersionCommand,
} from "../protocols/Aws_restJson1";

export interface RestoreCoreNetworkPolicyVersionCommandInput extends RestoreCoreNetworkPolicyVersionRequest {}
export interface RestoreCoreNetworkPolicyVersionCommandOutput
  extends RestoreCoreNetworkPolicyVersionResponse,
    __MetadataBearer {}

/**
 * <p>Restores a previous policy version as a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and restored policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, RestoreCoreNetworkPolicyVersionCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, RestoreCoreNetworkPolicyVersionCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new RestoreCoreNetworkPolicyVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreCoreNetworkPolicyVersionCommandInput} for command's `input` shape.
 * @see {@link RestoreCoreNetworkPolicyVersionCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class RestoreCoreNetworkPolicyVersionCommand extends $Command<
  RestoreCoreNetworkPolicyVersionCommandInput,
  RestoreCoreNetworkPolicyVersionCommandOutput,
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

  constructor(readonly input: RestoreCoreNetworkPolicyVersionCommandInput) {
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
  ): Handler<RestoreCoreNetworkPolicyVersionCommandInput, RestoreCoreNetworkPolicyVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreCoreNetworkPolicyVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "RestoreCoreNetworkPolicyVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreCoreNetworkPolicyVersionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RestoreCoreNetworkPolicyVersionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RestoreCoreNetworkPolicyVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1RestoreCoreNetworkPolicyVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreCoreNetworkPolicyVersionCommandOutput> {
    return deserializeAws_restJson1RestoreCoreNetworkPolicyVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
