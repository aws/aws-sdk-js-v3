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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { AllowCustomRoutingTrafficRequest } from "../models/models_0";
import { de_AllowCustomRoutingTrafficCommand, se_AllowCustomRoutingTrafficCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AllowCustomRoutingTrafficCommand}.
 */
export interface AllowCustomRoutingTrafficCommandInput extends AllowCustomRoutingTrafficRequest {}
/**
 * @public
 *
 * The output of {@link AllowCustomRoutingTrafficCommand}.
 */
export interface AllowCustomRoutingTrafficCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic
 * 			for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a
 * 			specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports
 * 			outside of the range that you configured for the endpoint group.</p>
 *          <p>After you make changes, you can verify that the updates are complete by checking the status of your
 * 			accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, AllowCustomRoutingTrafficCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, AllowCustomRoutingTrafficCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // AllowCustomRoutingTrafficRequest
 *   EndpointGroupArn: "STRING_VALUE", // required
 *   EndpointId: "STRING_VALUE", // required
 *   DestinationAddresses: [ // DestinationAddresses
 *     "STRING_VALUE",
 *   ],
 *   DestinationPorts: [ // DestinationPorts
 *     Number("int"),
 *   ],
 *   AllowAllTrafficToEndpoint: true || false,
 * };
 * const command = new AllowCustomRoutingTrafficCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AllowCustomRoutingTrafficCommandInput - {@link AllowCustomRoutingTrafficCommandInput}
 * @returns {@link AllowCustomRoutingTrafficCommandOutput}
 * @see {@link AllowCustomRoutingTrafficCommandInput} for command's `input` shape.
 * @see {@link AllowCustomRoutingTrafficCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
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
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 */
export class AllowCustomRoutingTrafficCommand extends $Command<
  AllowCustomRoutingTrafficCommandInput,
  AllowCustomRoutingTrafficCommandOutput,
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
  constructor(readonly input: AllowCustomRoutingTrafficCommandInput) {
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
  ): Handler<AllowCustomRoutingTrafficCommandInput, AllowCustomRoutingTrafficCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AllowCustomRoutingTrafficCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "AllowCustomRoutingTrafficCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GlobalAccelerator_V20180706",
        operation: "AllowCustomRoutingTraffic",
      },
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
  private serialize(input: AllowCustomRoutingTrafficCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AllowCustomRoutingTrafficCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AllowCustomRoutingTrafficCommandOutput> {
    return de_AllowCustomRoutingTrafficCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
