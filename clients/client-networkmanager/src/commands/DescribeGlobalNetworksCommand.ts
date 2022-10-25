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
  DescribeGlobalNetworksRequest,
  DescribeGlobalNetworksRequestFilterSensitiveLog,
  DescribeGlobalNetworksResponse,
  DescribeGlobalNetworksResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1DescribeGlobalNetworksCommand,
  serializeAws_restJson1DescribeGlobalNetworksCommand,
} from "../protocols/Aws_restJson1";

export interface DescribeGlobalNetworksCommandInput extends DescribeGlobalNetworksRequest {}
export interface DescribeGlobalNetworksCommandOutput extends DescribeGlobalNetworksResponse, __MetadataBearer {}

/**
 * <p>Describes one or more global networks. By default, all global networks are
 *             described. To describe the objects in your global network, you must use the appropriate
 *                 <code>Get*</code> action. For example, to list the transit gateways in your global
 *             network, use <a>GetTransitGatewayRegistrations</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, DescribeGlobalNetworksCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, DescribeGlobalNetworksCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new DescribeGlobalNetworksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGlobalNetworksCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalNetworksCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class DescribeGlobalNetworksCommand extends $Command<
  DescribeGlobalNetworksCommandInput,
  DescribeGlobalNetworksCommandOutput,
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

  constructor(readonly input: DescribeGlobalNetworksCommandInput) {
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
  ): Handler<DescribeGlobalNetworksCommandInput, DescribeGlobalNetworksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGlobalNetworksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "DescribeGlobalNetworksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGlobalNetworksRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeGlobalNetworksResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGlobalNetworksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeGlobalNetworksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeGlobalNetworksCommandOutput> {
    return deserializeAws_restJson1DescribeGlobalNetworksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
