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

import { GetNetworkRoutesRequest, GetNetworkRoutesResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_GetNetworkRoutesCommand, se_GetNetworkRoutesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetNetworkRoutesCommand}.
 */
export interface GetNetworkRoutesCommandInput extends GetNetworkRoutesRequest {}
/**
 * @public
 *
 * The output of {@link GetNetworkRoutesCommand}.
 */
export interface GetNetworkRoutesCommandOutput extends GetNetworkRoutesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the network routes of the specified global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetNetworkRoutesCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetNetworkRoutesCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // GetNetworkRoutesRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   RouteTableIdentifier: { // RouteTableIdentifier
 *     TransitGatewayRouteTableArn: "STRING_VALUE",
 *     CoreNetworkSegmentEdge: { // CoreNetworkSegmentEdgeIdentifier
 *       CoreNetworkId: "STRING_VALUE",
 *       SegmentName: "STRING_VALUE",
 *       EdgeLocation: "STRING_VALUE",
 *     },
 *   },
 *   ExactCidrMatches: [ // ConstrainedStringList
 *     "STRING_VALUE",
 *   ],
 *   LongestPrefixMatches: [
 *     "STRING_VALUE",
 *   ],
 *   SubnetOfMatches: [
 *     "STRING_VALUE",
 *   ],
 *   SupernetOfMatches: [
 *     "STRING_VALUE",
 *   ],
 *   PrefixListIds: [
 *     "STRING_VALUE",
 *   ],
 *   States: [ // RouteStateList
 *     "ACTIVE" || "BLACKHOLE",
 *   ],
 *   Types: [ // RouteTypeList
 *     "PROPAGATED" || "STATIC",
 *   ],
 *   DestinationFilters: { // FilterMap
 *     "<keys>": [ // FilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new GetNetworkRoutesCommand(input);
 * const response = await client.send(command);
 * // { // GetNetworkRoutesResponse
 * //   RouteTableArn: "STRING_VALUE",
 * //   CoreNetworkSegmentEdge: { // CoreNetworkSegmentEdgeIdentifier
 * //     CoreNetworkId: "STRING_VALUE",
 * //     SegmentName: "STRING_VALUE",
 * //     EdgeLocation: "STRING_VALUE",
 * //   },
 * //   RouteTableType: "TRANSIT_GATEWAY_ROUTE_TABLE" || "CORE_NETWORK_SEGMENT",
 * //   RouteTableTimestamp: new Date("TIMESTAMP"),
 * //   NetworkRoutes: [ // NetworkRouteList
 * //     { // NetworkRoute
 * //       DestinationCidrBlock: "STRING_VALUE",
 * //       Destinations: [ // NetworkRouteDestinationList
 * //         { // NetworkRouteDestination
 * //           CoreNetworkAttachmentId: "STRING_VALUE",
 * //           TransitGatewayAttachmentId: "STRING_VALUE",
 * //           SegmentName: "STRING_VALUE",
 * //           EdgeLocation: "STRING_VALUE",
 * //           ResourceType: "STRING_VALUE",
 * //           ResourceId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PrefixListId: "STRING_VALUE",
 * //       State: "ACTIVE" || "BLACKHOLE",
 * //       Type: "PROPAGATED" || "STATIC",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetNetworkRoutesCommandInput - {@link GetNetworkRoutesCommandInput}
 * @returns {@link GetNetworkRoutesCommandOutput}
 * @see {@link GetNetworkRoutesCommandInput} for command's `input` shape.
 * @see {@link GetNetworkRoutesCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints.</p>
 *
 * @throws {@link NetworkManagerServiceException}
 * <p>Base exception class for all service exceptions from NetworkManager service.</p>
 *
 */
export class GetNetworkRoutesCommand extends $Command<
  GetNetworkRoutesCommandInput,
  GetNetworkRoutesCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: GetNetworkRoutesCommandInput) {
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
  ): Handler<GetNetworkRoutesCommandInput, GetNetworkRoutesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetNetworkRoutesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetNetworkRoutesCommand";
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
  private serialize(input: GetNetworkRoutesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetNetworkRoutesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetNetworkRoutesCommandOutput> {
    return de_GetNetworkRoutesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
