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
  PutCoreNetworkPolicyRequest,
  PutCoreNetworkPolicyRequestFilterSensitiveLog,
  PutCoreNetworkPolicyResponse,
  PutCoreNetworkPolicyResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1PutCoreNetworkPolicyCommand,
  serializeAws_restJson1PutCoreNetworkPolicyCommand,
} from "../protocols/Aws_restJson1";

export interface PutCoreNetworkPolicyCommandInput extends PutCoreNetworkPolicyRequest {}
export interface PutCoreNetworkPolicyCommandOutput extends PutCoreNetworkPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates a new, immutable version of a core network policy. A subsequent change set is created showing the differences between the LIVE policy and the submitted policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, PutCoreNetworkPolicyCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, PutCoreNetworkPolicyCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new PutCoreNetworkPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutCoreNetworkPolicyCommandInput} for command's `input` shape.
 * @see {@link PutCoreNetworkPolicyCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class PutCoreNetworkPolicyCommand extends $Command<
  PutCoreNetworkPolicyCommandInput,
  PutCoreNetworkPolicyCommandOutput,
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

  constructor(readonly input: PutCoreNetworkPolicyCommandInput) {
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
  ): Handler<PutCoreNetworkPolicyCommandInput, PutCoreNetworkPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutCoreNetworkPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "PutCoreNetworkPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutCoreNetworkPolicyRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutCoreNetworkPolicyResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutCoreNetworkPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutCoreNetworkPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutCoreNetworkPolicyCommandOutput> {
    return deserializeAws_restJson1PutCoreNetworkPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
