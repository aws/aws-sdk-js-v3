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
  GetTransitGatewayConnectPeerAssociationsRequest,
  GetTransitGatewayConnectPeerAssociationsResponse,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  de_GetTransitGatewayConnectPeerAssociationsCommand,
  se_GetTransitGatewayConnectPeerAssociationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayConnectPeerAssociationsCommand}.
 */
export interface GetTransitGatewayConnectPeerAssociationsCommandInput
  extends GetTransitGatewayConnectPeerAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayConnectPeerAssociationsCommand}.
 */
export interface GetTransitGatewayConnectPeerAssociationsCommandOutput
  extends GetTransitGatewayConnectPeerAssociationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets information about one or more of your transit gateway Connect peer associations in a global network.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetTransitGatewayConnectPeerAssociationsCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetTransitGatewayConnectPeerAssociationsCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // GetTransitGatewayConnectPeerAssociationsRequest
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   TransitGatewayConnectPeerArns: [ // TransitGatewayConnectPeerArnList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetTransitGatewayConnectPeerAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayConnectPeerAssociationsResponse
 * //   TransitGatewayConnectPeerAssociations: [ // TransitGatewayConnectPeerAssociationList
 * //     { // TransitGatewayConnectPeerAssociation
 * //       TransitGatewayConnectPeerArn: "STRING_VALUE",
 * //       GlobalNetworkId: "STRING_VALUE",
 * //       DeviceId: "STRING_VALUE",
 * //       LinkId: "STRING_VALUE",
 * //       State: "PENDING" || "AVAILABLE" || "DELETING" || "DELETED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayConnectPeerAssociationsCommandInput - {@link GetTransitGatewayConnectPeerAssociationsCommandInput}
 * @returns {@link GetTransitGatewayConnectPeerAssociationsCommandOutput}
 * @see {@link GetTransitGatewayConnectPeerAssociationsCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayConnectPeerAssociationsCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict processing the request. Updating or deleting the resource can
 *             cause an inconsistent state.</p>
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
export class GetTransitGatewayConnectPeerAssociationsCommand extends $Command<
  GetTransitGatewayConnectPeerAssociationsCommandInput,
  GetTransitGatewayConnectPeerAssociationsCommandOutput,
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
  constructor(readonly input: GetTransitGatewayConnectPeerAssociationsCommandInput) {
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
  ): Handler<
    GetTransitGatewayConnectPeerAssociationsCommandInput,
    GetTransitGatewayConnectPeerAssociationsCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        GetTransitGatewayConnectPeerAssociationsCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetTransitGatewayConnectPeerAssociationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkManager",
        operation: "GetTransitGatewayConnectPeerAssociations",
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
  private serialize(
    input: GetTransitGatewayConnectPeerAssociationsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetTransitGatewayConnectPeerAssociationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetTransitGatewayConnectPeerAssociationsCommandOutput> {
    return de_GetTransitGatewayConnectPeerAssociationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
