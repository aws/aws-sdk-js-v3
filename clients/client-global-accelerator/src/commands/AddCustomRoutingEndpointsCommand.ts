// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { AddCustomRoutingEndpointsRequest, AddCustomRoutingEndpointsResponse } from "../models/models_0";
import { de_AddCustomRoutingEndpointsCommand, se_AddCustomRoutingEndpointsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddCustomRoutingEndpointsCommand}.
 */
export interface AddCustomRoutingEndpointsCommandInput extends AddCustomRoutingEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link AddCustomRoutingEndpointsCommand}.
 */
export interface AddCustomRoutingEndpointsCommandOutput extends AddCustomRoutingEndpointsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p>
 *          <p>The listener port range must be large enough to support the number of IP addresses that can be
 * 		specified in your subnet. The number of ports required is: subnet size times the number
 * 		of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener
 * 		port range of at least 255 ports. </p>
 *          <p>Note: You must have enough remaining listener ports available to
 * 		map to the subnet ports, or the call will fail with a LimitExceededException.</p>
 *          <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all
 * 			destinations to receive traffic, or to specify individual port mappings that can receive
 * 			traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html">
 * 				AllowCustomRoutingTraffic</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, AddCustomRoutingEndpointsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, AddCustomRoutingEndpointsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // AddCustomRoutingEndpointsRequest
 *   EndpointConfigurations: [ // CustomRoutingEndpointConfigurations // required
 *     { // CustomRoutingEndpointConfiguration
 *       EndpointId: "STRING_VALUE",
 *     },
 *   ],
 *   EndpointGroupArn: "STRING_VALUE", // required
 * };
 * const command = new AddCustomRoutingEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // AddCustomRoutingEndpointsResponse
 * //   EndpointDescriptions: [ // CustomRoutingEndpointDescriptions
 * //     { // CustomRoutingEndpointDescription
 * //       EndpointId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   EndpointGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddCustomRoutingEndpointsCommandInput - {@link AddCustomRoutingEndpointsCommandInput}
 * @returns {@link AddCustomRoutingEndpointsCommandOutput}
 * @see {@link AddCustomRoutingEndpointsCommandInput} for command's `input` shape.
 * @see {@link AddCustomRoutingEndpointsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can't use both of those options.</p>
 *
 * @throws {@link EndpointAlreadyExistsException} (client fault)
 *  <p>The endpoint that you specified doesn't exist.</p>
 *
 * @throws {@link EndpointGroupNotFoundException} (client fault)
 *  <p>The endpoint group that you specified doesn't exist.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Processing your request would cause you to exceed an Global Accelerator limit.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: AddCustomRoutingEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddCustomRoutingEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AddCustomRoutingEndpointsCommandOutput> {
    return de_AddCustomRoutingEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
