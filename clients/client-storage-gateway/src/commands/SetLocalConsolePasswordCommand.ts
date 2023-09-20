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
  SetLocalConsolePasswordInput,
  SetLocalConsolePasswordInputFilterSensitiveLog,
  SetLocalConsolePasswordOutput,
} from "../models/models_0";
import { de_SetLocalConsolePasswordCommand, se_SetLocalConsolePasswordCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetLocalConsolePasswordCommand}.
 */
export interface SetLocalConsolePasswordCommandInput extends SetLocalConsolePasswordInput {}
/**
 * @public
 *
 * The output of {@link SetLocalConsolePasswordCommand}.
 */
export interface SetLocalConsolePasswordCommandOutput extends SetLocalConsolePasswordOutput, __MetadataBearer {}

/**
 * @public
 * <p>Sets the password for your VM local console. When you log in to the local console for
 *          the first time, you log in to the VM with the default credentials. We recommend that you
 *          set a new password. You don't need to know the default password to set a new
 *          password.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, SetLocalConsolePasswordCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, SetLocalConsolePasswordCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // SetLocalConsolePasswordInput
 *   GatewayARN: "STRING_VALUE", // required
 *   LocalConsolePassword: "STRING_VALUE", // required
 * };
 * const command = new SetLocalConsolePasswordCommand(input);
 * const response = await client.send(command);
 * // { // SetLocalConsolePasswordOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SetLocalConsolePasswordCommandInput - {@link SetLocalConsolePasswordCommandInput}
 * @returns {@link SetLocalConsolePasswordCommandOutput}
 * @see {@link SetLocalConsolePasswordCommandInput} for command's `input` shape.
 * @see {@link SetLocalConsolePasswordCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 * @example To set a password for your VM
 * ```javascript
 * // Sets the password for your VM local console.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B",
 *   "LocalConsolePassword": "PassWordMustBeAtLeast6Chars."
 * };
 * const command = new SetLocalConsolePasswordCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B"
 * }
 * *\/
 * // example id: to-set-a-password-for-your-vm-1472150202632
 * ```
 *
 */
export class SetLocalConsolePasswordCommand extends $Command<
  SetLocalConsolePasswordCommandInput,
  SetLocalConsolePasswordCommandOutput,
  StorageGatewayClientResolvedConfig
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
  constructor(readonly input: SetLocalConsolePasswordCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetLocalConsolePasswordCommandInput, SetLocalConsolePasswordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetLocalConsolePasswordCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "SetLocalConsolePasswordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetLocalConsolePasswordInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "SetLocalConsolePassword",
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
  private serialize(input: SetLocalConsolePasswordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetLocalConsolePasswordCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetLocalConsolePasswordCommandOutput> {
    return de_SetLocalConsolePasswordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
