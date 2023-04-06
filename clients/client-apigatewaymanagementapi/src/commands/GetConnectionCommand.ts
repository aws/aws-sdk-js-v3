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

import {
  ApiGatewayManagementApiClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApiGatewayManagementApiClient";
import { GetConnectionRequest, GetConnectionResponse } from "../models/models_0";
import { de_GetConnectionCommand, se_GetConnectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetConnectionCommand}.
 */
export interface GetConnectionCommandInput extends GetConnectionRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectionCommand}.
 */
export interface GetConnectionCommandOutput extends GetConnectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get information about the connection with the provided id.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayManagementApiClient, GetConnectionCommand } from "@aws-sdk/client-apigatewaymanagementapi"; // ES Modules import
 * // const { ApiGatewayManagementApiClient, GetConnectionCommand } = require("@aws-sdk/client-apigatewaymanagementapi"); // CommonJS import
 * const client = new ApiGatewayManagementApiClient(config);
 * const input = { // GetConnectionRequest
 *   ConnectionId: "STRING_VALUE", // required
 * };
 * const command = new GetConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetConnectionCommandInput - {@link GetConnectionCommandInput}
 * @returns {@link GetConnectionCommandOutput}
 * @see {@link GetConnectionCommandInput} for command's `input` shape.
 * @see {@link GetConnectionCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayManagementApiClientResolvedConfig | config} for ApiGatewayManagementApiClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller is not authorized to invoke this operation.</p>
 *
 * @throws {@link GoneException} (client fault)
 *  <p>The connection with the provided id no longer exists.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The client is sending more than the allowed number of requests per unit of time or the WebSocket client side buffer is full.</p>
 *
 *
 */
export class GetConnectionCommand extends $Command<
  GetConnectionCommandInput,
  GetConnectionCommandOutput,
  ApiGatewayManagementApiClientResolvedConfig
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
  constructor(readonly input: GetConnectionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApiGatewayManagementApiClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetConnectionCommandInput, GetConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetConnectionCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApiGatewayManagementApiClient";
    const commandName = "GetConnectionCommand";
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
  private serialize(input: GetConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetConnectionCommandOutput> {
    return de_GetConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
