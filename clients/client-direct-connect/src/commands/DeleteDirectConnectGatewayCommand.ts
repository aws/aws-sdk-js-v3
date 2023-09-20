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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DeleteDirectConnectGatewayRequest, DeleteDirectConnectGatewayResult } from "../models/models_0";
import { de_DeleteDirectConnectGatewayCommand, se_DeleteDirectConnectGatewayCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteDirectConnectGatewayCommand}.
 */
export interface DeleteDirectConnectGatewayCommandInput extends DeleteDirectConnectGatewayRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDirectConnectGatewayCommand}.
 */
export interface DeleteDirectConnectGatewayCommandOutput extends DeleteDirectConnectGatewayResult, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that are
 *       attached to the Direct Connect gateway and disassociate all virtual private gateways associated
 *       with the Direct Connect gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, DeleteDirectConnectGatewayCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, DeleteDirectConnectGatewayCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // DeleteDirectConnectGatewayRequest
 *   directConnectGatewayId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDirectConnectGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDirectConnectGatewayResult
 * //   directConnectGateway: { // DirectConnectGateway
 * //     directConnectGatewayId: "STRING_VALUE",
 * //     directConnectGatewayName: "STRING_VALUE",
 * //     amazonSideAsn: Number("long"),
 * //     ownerAccount: "STRING_VALUE",
 * //     directConnectGatewayState: "pending" || "available" || "deleting" || "deleted",
 * //     stateChangeError: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteDirectConnectGatewayCommandInput - {@link DeleteDirectConnectGatewayCommandInput}
 * @returns {@link DeleteDirectConnectGatewayCommandOutput}
 * @see {@link DeleteDirectConnectGatewayCommandInput} for command's `input` shape.
 * @see {@link DeleteDirectConnectGatewayCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 * @throws {@link DirectConnectServiceException}
 * <p>Base exception class for all service exceptions from DirectConnect service.</p>
 *
 */
export class DeleteDirectConnectGatewayCommand extends $Command<
  DeleteDirectConnectGatewayCommandInput,
  DeleteDirectConnectGatewayCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DeleteDirectConnectGatewayCommandInput) {
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
  ): Handler<DeleteDirectConnectGatewayCommandInput, DeleteDirectConnectGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDirectConnectGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "DeleteDirectConnectGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OvertureService",
        operation: "DeleteDirectConnectGateway",
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
  private serialize(input: DeleteDirectConnectGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteDirectConnectGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDirectConnectGatewayCommandOutput> {
    return de_DeleteDirectConnectGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
