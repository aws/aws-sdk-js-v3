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
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import {
  AddCustomRoutingEndpointsRequest,
  AddCustomRoutingEndpointsRequestFilterSensitiveLog,
  AddCustomRoutingEndpointsResponse,
  AddCustomRoutingEndpointsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AddCustomRoutingEndpointsCommand,
  serializeAws_json1_1AddCustomRoutingEndpointsCommand,
} from "../protocols/Aws_json1_1";

export interface AddCustomRoutingEndpointsCommandInput extends AddCustomRoutingEndpointsRequest {}
export interface AddCustomRoutingEndpointsCommandOutput extends AddCustomRoutingEndpointsResponse, __MetadataBearer {}

/**
 * <p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p>
 * 	        <p>The listener port range must be large enough to support the number of IP addresses that can be
 * 		specified in your subnet. The number of ports required is: subnet size times the number
 * 		of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener
 * 		port range of at least 255 ports. </p>
 * 	        <p>Note: You must have enough remaining listener ports available to
 * 		map to the subnet ports, or the call will fail with a LimitExceededException.</p>
 * 	        <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all
 * 			destinations to receive traffic, or to specify individual port mappings that can receive
 * 			traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html">
 * 				AllowCustomRoutingTraffic</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, AddCustomRoutingEndpointsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, AddCustomRoutingEndpointsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new AddCustomRoutingEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddCustomRoutingEndpointsCommandInput} for command's `input` shape.
 * @see {@link AddCustomRoutingEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 */
export class AddCustomRoutingEndpointsCommand extends $Command<
  AddCustomRoutingEndpointsCommandInput,
  AddCustomRoutingEndpointsCommandOutput,
  GlobalAcceleratorClientResolvedConfig
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

  constructor(readonly input: AddCustomRoutingEndpointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddCustomRoutingEndpointsCommandInput, AddCustomRoutingEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddCustomRoutingEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "AddCustomRoutingEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddCustomRoutingEndpointsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AddCustomRoutingEndpointsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddCustomRoutingEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddCustomRoutingEndpointsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddCustomRoutingEndpointsCommandOutput> {
    return deserializeAws_json1_1AddCustomRoutingEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
