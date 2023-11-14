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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  DeleteWirelessGatewayTaskDefinitionRequest,
  DeleteWirelessGatewayTaskDefinitionResponse,
} from "../models/models_0";
import {
  de_DeleteWirelessGatewayTaskDefinitionCommand,
  se_DeleteWirelessGatewayTaskDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteWirelessGatewayTaskDefinitionCommand}.
 */
export interface DeleteWirelessGatewayTaskDefinitionCommandInput extends DeleteWirelessGatewayTaskDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWirelessGatewayTaskDefinitionCommand}.
 */
export interface DeleteWirelessGatewayTaskDefinitionCommandOutput
  extends DeleteWirelessGatewayTaskDefinitionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes a wireless gateway task definition. Deleting this task definition does not
 *             affect tasks that are currently in progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, DeleteWirelessGatewayTaskDefinitionCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, DeleteWirelessGatewayTaskDefinitionCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // DeleteWirelessGatewayTaskDefinitionRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteWirelessGatewayTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWirelessGatewayTaskDefinitionCommandInput - {@link DeleteWirelessGatewayTaskDefinitionCommandInput}
 * @returns {@link DeleteWirelessGatewayTaskDefinitionCommandOutput}
 * @see {@link DeleteWirelessGatewayTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteWirelessGatewayTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
 *
 */
export class DeleteWirelessGatewayTaskDefinitionCommand extends $Command<
  DeleteWirelessGatewayTaskDefinitionCommandInput,
  DeleteWirelessGatewayTaskDefinitionCommandOutput,
  IoTWirelessClientResolvedConfig
> {
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
  constructor(readonly input: DeleteWirelessGatewayTaskDefinitionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteWirelessGatewayTaskDefinitionCommandInput, DeleteWirelessGatewayTaskDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteWirelessGatewayTaskDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "DeleteWirelessGatewayTaskDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "iotwireless",
        operation: "DeleteWirelessGatewayTaskDefinition",
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
    input: DeleteWirelessGatewayTaskDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteWirelessGatewayTaskDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteWirelessGatewayTaskDefinitionCommandOutput> {
    return de_DeleteWirelessGatewayTaskDefinitionCommand(output, context);
  }
}
