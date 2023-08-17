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
import { ListCustomRoutingPortMappingsRequest, ListCustomRoutingPortMappingsResponse } from "../models/models_0";
import {
  de_ListCustomRoutingPortMappingsCommand,
  se_ListCustomRoutingPortMappingsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCustomRoutingPortMappingsCommand}.
 */
export interface ListCustomRoutingPortMappingsCommandInput extends ListCustomRoutingPortMappingsRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomRoutingPortMappingsCommand}.
 */
export interface ListCustomRoutingPortMappingsCommandOutput
  extends ListCustomRoutingPortMappingsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance
 * 		IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator.
 * 		For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port
 * 	    mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p>
 *          <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to
 *         your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances
 *         in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p>
 *          <p>The mappings also include a flag for each destination denoting which destination IP addresses and
 * 		ports are allowed or denied traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingPortMappingsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingPortMappingsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // ListCustomRoutingPortMappingsRequest
 *   AcceleratorArn: "STRING_VALUE", // required
 *   EndpointGroupArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomRoutingPortMappingsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomRoutingPortMappingsResponse
 * //   PortMappings: [ // PortMappings
 * //     { // PortMapping
 * //       AcceleratorPort: Number("int"),
 * //       EndpointGroupArn: "STRING_VALUE",
 * //       EndpointId: "STRING_VALUE",
 * //       DestinationSocketAddress: { // SocketAddress
 * //         IpAddress: "STRING_VALUE",
 * //         Port: Number("int"),
 * //       },
 * //       Protocols: [ // CustomRoutingProtocols
 * //         "TCP" || "UDP",
 * //       ],
 * //       DestinationTrafficState: "ALLOW" || "DENY",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomRoutingPortMappingsCommandInput - {@link ListCustomRoutingPortMappingsCommandInput}
 * @returns {@link ListCustomRoutingPortMappingsCommandOutput}
 * @see {@link ListCustomRoutingPortMappingsCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingPortMappingsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *  <p>The accelerator that you specified doesn't exist.</p>
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
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>There isn't another item to return.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 */
export class ListCustomRoutingPortMappingsCommand extends $Command<
  ListCustomRoutingPortMappingsCommandInput,
  ListCustomRoutingPortMappingsCommandOutput,
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
  constructor(readonly input: ListCustomRoutingPortMappingsCommandInput) {
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
  ): Handler<ListCustomRoutingPortMappingsCommandInput, ListCustomRoutingPortMappingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCustomRoutingPortMappingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "ListCustomRoutingPortMappingsCommand";
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
  private serialize(input: ListCustomRoutingPortMappingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCustomRoutingPortMappingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCustomRoutingPortMappingsCommandOutput> {
    return de_ListCustomRoutingPortMappingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
