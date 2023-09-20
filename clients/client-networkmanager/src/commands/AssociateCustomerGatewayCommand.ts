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

import { AssociateCustomerGatewayRequest, AssociateCustomerGatewayResponse } from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import { de_AssociateCustomerGatewayCommand, se_AssociateCustomerGatewayCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateCustomerGatewayCommand}.
 */
export interface AssociateCustomerGatewayCommandInput extends AssociateCustomerGatewayRequest {}
/**
 * @public
 *
 * The output of {@link AssociateCustomerGatewayCommand}.
 */
export interface AssociateCustomerGatewayCommandOutput extends AssociateCustomerGatewayResponse, __MetadataBearer {}

/**
 * @public
 * <p>Associates a customer gateway with a device and optionally, with a link. If you
 *             specify a link, it must be associated with the specified device. </p>
 *          <p>You can only associate customer gateways that are connected to a VPN attachment on a
 *             transit gateway or core network registered in your global network. When you register a
 *             transit gateway or core network, customer gateways that are connected to the transit
 *             gateway are automatically included in the global network. To list customer gateways
 *             that are connected to a transit gateway, use the <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeVpnConnections.html">DescribeVpnConnections</a> EC2 API and filter by
 *                 <code>transit-gateway-id</code>.</p>
 *          <p>You cannot associate a customer gateway with more than one device and link. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, AssociateCustomerGatewayCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, AssociateCustomerGatewayCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const input = { // AssociateCustomerGatewayRequest
 *   CustomerGatewayArn: "STRING_VALUE", // required
 *   GlobalNetworkId: "STRING_VALUE", // required
 *   DeviceId: "STRING_VALUE", // required
 *   LinkId: "STRING_VALUE",
 * };
 * const command = new AssociateCustomerGatewayCommand(input);
 * const response = await client.send(command);
 * // { // AssociateCustomerGatewayResponse
 * //   CustomerGatewayAssociation: { // CustomerGatewayAssociation
 * //     CustomerGatewayArn: "STRING_VALUE",
 * //     GlobalNetworkId: "STRING_VALUE",
 * //     DeviceId: "STRING_VALUE",
 * //     LinkId: "STRING_VALUE",
 * //     State: "PENDING" || "AVAILABLE" || "DELETING" || "DELETED",
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateCustomerGatewayCommandInput - {@link AssociateCustomerGatewayCommandInput}
 * @returns {@link AssociateCustomerGatewayCommandOutput}
 * @see {@link AssociateCustomerGatewayCommandInput} for command's `input` shape.
 * @see {@link AssociateCustomerGatewayCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>A service limit was exceeded.</p>
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
export class AssociateCustomerGatewayCommand extends $Command<
  AssociateCustomerGatewayCommandInput,
  AssociateCustomerGatewayCommandOutput,
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
  constructor(readonly input: AssociateCustomerGatewayCommandInput) {
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
  ): Handler<AssociateCustomerGatewayCommandInput, AssociateCustomerGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateCustomerGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "AssociateCustomerGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "NetworkManager",
        operation: "AssociateCustomerGateway",
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
  private serialize(input: AssociateCustomerGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateCustomerGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateCustomerGatewayCommandOutput> {
    return de_AssociateCustomerGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
