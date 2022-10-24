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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  DescribeDirectConnectGatewayAssociationsRequest,
  DescribeDirectConnectGatewayAssociationsRequestFilterSensitiveLog,
  DescribeDirectConnectGatewayAssociationsResult,
  DescribeDirectConnectGatewayAssociationsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand,
  serializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeDirectConnectGatewayAssociationsCommandInput
  extends DescribeDirectConnectGatewayAssociationsRequest {}
export interface DescribeDirectConnectGatewayAssociationsCommandOutput
  extends DescribeDirectConnectGatewayAssociationsResult,
    __MetadataBearer {}

/**
 * <p>Lists the associations between your Direct Connect gateways and virtual private gateways and transit gateways. You must specify one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>A Direct Connect gateway</p>
 *                <p>The response contains all virtual private gateways and transit gateways associated with the Direct Connect gateway.</p>
 *             </li>
 *             <li>
 *                <p>A virtual private gateway</p>
 *                <p>The response contains the Direct Connect gateway.</p>
 *             </li>
 *             <li>
 *                <p>A transit gateway</p>
 *                <p>The response contains the Direct Connect gateway.</p>
 *             </li>
 *             <li>
 *                <p>A Direct Connect gateway and a virtual private gateway</p>
 *                <p>The response contains the association between the Direct Connect gateway and virtual private gateway.</p>
 *             </li>
 *             <li>
 *                <p>A Direct Connect gateway and a transit gateway</p>
 *                <p>The response contains the association between the Direct Connect gateway and transit gateway.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DescribeDirectConnectGatewayAssociationsCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DescribeDirectConnectGatewayAssociationsCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new DescribeDirectConnectGatewayAssociationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDirectConnectGatewayAssociationsCommandInput} for command's `input` shape.
 * @see {@link DescribeDirectConnectGatewayAssociationsCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class DescribeDirectConnectGatewayAssociationsCommand extends $Command<
  DescribeDirectConnectGatewayAssociationsCommandInput,
  DescribeDirectConnectGatewayAssociationsCommandOutput,
  DirectConnectClientResolvedConfig
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

  constructor(readonly input: DescribeDirectConnectGatewayAssociationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeDirectConnectGatewayAssociationsCommandInput,
    DescribeDirectConnectGatewayAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeDirectConnectGatewayAssociationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DescribeDirectConnectGatewayAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDirectConnectGatewayAssociationsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeDirectConnectGatewayAssociationsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeDirectConnectGatewayAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDirectConnectGatewayAssociationsCommandOutput> {
    return deserializeAws_json1_1DescribeDirectConnectGatewayAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
