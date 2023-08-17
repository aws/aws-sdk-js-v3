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
import {
  ListCustomRoutingPortMappingsByDestinationRequest,
  ListCustomRoutingPortMappingsByDestinationResponse,
} from "../models/models_0";
import {
  de_ListCustomRoutingPortMappingsByDestinationCommand,
  se_ListCustomRoutingPortMappingsByDestinationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCustomRoutingPortMappingsByDestinationCommand}.
 */
export interface ListCustomRoutingPortMappingsByDestinationCommandInput
  extends ListCustomRoutingPortMappingsByDestinationRequest {}
/**
 * @public
 *
 * The output of {@link ListCustomRoutingPortMappingsByDestinationCommand}.
 */
export interface ListCustomRoutingPortMappingsByDestinationCommandOutput
  extends ListCustomRoutingPortMappingsByDestinationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The
 * 			response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that
 * 			span multiple custom routing accelerators in your account, or for scenarios where you only want to
 * 			list the port mappings for a specific destination instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingPortMappingsByDestinationCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingPortMappingsByDestinationCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // ListCustomRoutingPortMappingsByDestinationRequest
 *   EndpointId: "STRING_VALUE", // required
 *   DestinationAddress: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCustomRoutingPortMappingsByDestinationCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomRoutingPortMappingsByDestinationResponse
 * //   DestinationPortMappings: [ // DestinationPortMappings
 * //     { // DestinationPortMapping
 * //       AcceleratorArn: "STRING_VALUE",
 * //       AcceleratorSocketAddresses: [ // SocketAddresses
 * //         { // SocketAddress
 * //           IpAddress: "STRING_VALUE",
 * //           Port: Number("int"),
 * //         },
 * //       ],
 * //       EndpointGroupArn: "STRING_VALUE",
 * //       EndpointId: "STRING_VALUE",
 * //       EndpointGroupRegion: "STRING_VALUE",
 * //       DestinationSocketAddress: {
 * //         IpAddress: "STRING_VALUE",
 * //         Port: Number("int"),
 * //       },
 * //       IpAddressType: "IPV4" || "DUAL_STACK",
 * //       DestinationTrafficState: "ALLOW" || "DENY",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomRoutingPortMappingsByDestinationCommandInput - {@link ListCustomRoutingPortMappingsByDestinationCommandInput}
 * @returns {@link ListCustomRoutingPortMappingsByDestinationCommandOutput}
 * @see {@link ListCustomRoutingPortMappingsByDestinationCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingPortMappingsByDestinationCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link EndpointNotFoundException} (client fault)
 *  <p>The endpoint that you specified doesn't exist.</p>
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
export class ListCustomRoutingPortMappingsByDestinationCommand extends $Command<
  ListCustomRoutingPortMappingsByDestinationCommandInput,
  ListCustomRoutingPortMappingsByDestinationCommandOutput,
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
  constructor(readonly input: ListCustomRoutingPortMappingsByDestinationCommandInput) {
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
  ): Handler<
    ListCustomRoutingPortMappingsByDestinationCommandInput,
    ListCustomRoutingPortMappingsByDestinationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListCustomRoutingPortMappingsByDestinationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "ListCustomRoutingPortMappingsByDestinationCommand";
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
  private serialize(
    input: ListCustomRoutingPortMappingsByDestinationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListCustomRoutingPortMappingsByDestinationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCustomRoutingPortMappingsByDestinationCommandOutput> {
    return de_ListCustomRoutingPortMappingsByDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
