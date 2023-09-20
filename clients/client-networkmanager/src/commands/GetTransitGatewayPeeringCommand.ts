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

import { GetTransitGatewayPeeringRequest, GetTransitGatewayPeeringResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_GetTransitGatewayPeeringCommand, se_GetTransitGatewayPeeringCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTransitGatewayPeeringCommand}.
 */
export interface GetTransitGatewayPeeringCommandInput extends GetTransitGatewayPeeringRequest {}
/**
 * @public
 *
 * The output of {@link GetTransitGatewayPeeringCommand}.
 */
export interface GetTransitGatewayPeeringCommandOutput extends GetTransitGatewayPeeringResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a transit gateway peer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetTransitGatewayPeeringCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetTransitGatewayPeeringCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // GetTransitGatewayPeeringRequest
 *   PeeringId: "STRING_VALUE", // required
 * };
 * const command = new GetTransitGatewayPeeringCommand(input);
 * const response = await client.send(command);
 * // { // GetTransitGatewayPeeringResponse
 * //   TransitGatewayPeering: { // TransitGatewayPeering
 * //     Peering: { // Peering
 * //       CoreNetworkId: "STRING_VALUE",
 * //       CoreNetworkArn: "STRING_VALUE",
 * //       PeeringId: "STRING_VALUE",
 * //       OwnerAccountId: "STRING_VALUE",
 * //       PeeringType: "TRANSIT_GATEWAY",
 * //       State: "CREATING" || "FAILED" || "AVAILABLE" || "DELETING",
 * //       EdgeLocation: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //     },
 * //     TransitGatewayArn: "STRING_VALUE",
 * //     TransitGatewayPeeringAttachmentId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTransitGatewayPeeringCommandInput - {@link GetTransitGatewayPeeringCommandInput}
 * @returns {@link GetTransitGatewayPeeringCommandOutput}
 * @see {@link GetTransitGatewayPeeringCommandInput} for command's `input` shape.
 * @see {@link GetTransitGatewayPeeringCommandOutput} for command's `response` shape.
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
export class GetTransitGatewayPeeringCommand extends $Command<
  GetTransitGatewayPeeringCommandInput,
  GetTransitGatewayPeeringCommandOutput,
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
  constructor(readonly input: GetTransitGatewayPeeringCommandInput) {
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
  ): Handler<GetTransitGatewayPeeringCommandInput, GetTransitGatewayPeeringCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTransitGatewayPeeringCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "GetTransitGatewayPeeringCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkManager",
        operation: "GetTransitGatewayPeering",
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
  private serialize(input: GetTransitGatewayPeeringCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTransitGatewayPeeringCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTransitGatewayPeeringCommandOutput> {
    return de_GetTransitGatewayPeeringCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
