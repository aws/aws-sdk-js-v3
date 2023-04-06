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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { UpdateDirectConnectGatewayRequest, UpdateDirectConnectGatewayResponse } from "../models/models_0";
import { de_UpdateDirectConnectGatewayCommand, se_UpdateDirectConnectGatewayCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateDirectConnectGatewayCommand}.
 */
export interface UpdateDirectConnectGatewayCommandInput extends UpdateDirectConnectGatewayRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDirectConnectGatewayCommand}.
 */
export interface UpdateDirectConnectGatewayCommandOutput extends UpdateDirectConnectGatewayResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the name of a current Direct Connect gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, UpdateDirectConnectGatewayCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, UpdateDirectConnectGatewayCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const input = { // UpdateDirectConnectGatewayRequest
 *   directConnectGatewayId: "STRING_VALUE", // required
 *   newDirectConnectGatewayName: "STRING_VALUE", // required
 * };
 * const command = new UpdateDirectConnectGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateDirectConnectGatewayCommandInput - {@link UpdateDirectConnectGatewayCommandInput}
 * @returns {@link UpdateDirectConnectGatewayCommandOutput}
 * @see {@link UpdateDirectConnectGatewayCommandInput} for command's `input` shape.
 * @see {@link UpdateDirectConnectGatewayCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 * @throws {@link DirectConnectClientException} (client fault)
 *  <p>One or more parameters are not valid.</p>
 *
 * @throws {@link DirectConnectServerException} (server fault)
 *  <p>A server-side error occurred.</p>
 *
 *
 */
export class UpdateDirectConnectGatewayCommand extends $Command<
  UpdateDirectConnectGatewayCommandInput,
  UpdateDirectConnectGatewayCommandOutput,
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
  constructor(readonly input: UpdateDirectConnectGatewayCommandInput) {
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
  ): Handler<UpdateDirectConnectGatewayCommandInput, UpdateDirectConnectGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDirectConnectGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "UpdateDirectConnectGatewayCommand";
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
  private serialize(input: UpdateDirectConnectGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDirectConnectGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDirectConnectGatewayCommandOutput> {
    return de_UpdateDirectConnectGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
