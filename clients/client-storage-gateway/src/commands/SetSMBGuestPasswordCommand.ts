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
  SetSMBGuestPasswordInput,
  SetSMBGuestPasswordInputFilterSensitiveLog,
  SetSMBGuestPasswordOutput,
} from "../models/models_0";
import { de_SetSMBGuestPasswordCommand, se_SetSMBGuestPasswordCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SetSMBGuestPasswordCommand}.
 */
export interface SetSMBGuestPasswordCommandInput extends SetSMBGuestPasswordInput {}
/**
 * @public
 *
 * The output of {@link SetSMBGuestPasswordCommand}.
 */
export interface SetSMBGuestPasswordCommandOutput extends SetSMBGuestPasswordOutput, __MetadataBearer {}

/**
 * @public
 * <p>Sets the password for the guest user <code>smbguest</code>. The <code>smbguest</code>
 *          user is the user when the authentication method for the file share is set to
 *             <code>GuestAccess</code>. This operation only supported for S3 File Gateways</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, SetSMBGuestPasswordCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, SetSMBGuestPasswordCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // SetSMBGuestPasswordInput
 *   GatewayARN: "STRING_VALUE", // required
 *   Password: "STRING_VALUE", // required
 * };
 * const command = new SetSMBGuestPasswordCommand(input);
 * const response = await client.send(command);
 * // { // SetSMBGuestPasswordOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SetSMBGuestPasswordCommandInput - {@link SetSMBGuestPasswordCommandInput}
 * @returns {@link SetSMBGuestPasswordCommandOutput}
 * @see {@link SetSMBGuestPasswordCommandInput} for command's `input` shape.
 * @see {@link SetSMBGuestPasswordCommandOutput} for command's `response` shape.
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
 */
export class SetSMBGuestPasswordCommand extends $Command<
  SetSMBGuestPasswordCommandInput,
  SetSMBGuestPasswordCommandOutput,
  StorageGatewayClientResolvedConfig
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
  constructor(readonly input: SetSMBGuestPasswordCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SetSMBGuestPasswordCommandInput, SetSMBGuestPasswordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SetSMBGuestPasswordCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "SetSMBGuestPasswordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetSMBGuestPasswordInputFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "SetSMBGuestPassword",
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
  private serialize(input: SetSMBGuestPasswordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SetSMBGuestPasswordCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetSMBGuestPasswordCommandOutput> {
    return de_SetSMBGuestPasswordCommand(output, context);
  }
}
