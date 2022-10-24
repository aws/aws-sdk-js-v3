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
  SetSMBGuestPasswordInput,
  SetSMBGuestPasswordInputFilterSensitiveLog,
  SetSMBGuestPasswordOutput,
  SetSMBGuestPasswordOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1SetSMBGuestPasswordCommand,
  serializeAws_json1_1SetSMBGuestPasswordCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface SetSMBGuestPasswordCommandInput extends SetSMBGuestPasswordInput {}
export interface SetSMBGuestPasswordCommandOutput extends SetSMBGuestPasswordOutput, __MetadataBearer {}

/**
 * <p>Sets the password for the guest user <code>smbguest</code>. The <code>smbguest</code>
 *          user is the user when the authentication method for the file share is set to
 *             <code>GuestAccess</code>. This operation only supported for S3 File Gateways</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, SetSMBGuestPasswordCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, SetSMBGuestPasswordCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new SetSMBGuestPasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetSMBGuestPasswordCommandInput} for command's `input` shape.
 * @see {@link SetSMBGuestPasswordCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class SetSMBGuestPasswordCommand extends $Command<
  SetSMBGuestPasswordCommandInput,
  SetSMBGuestPasswordCommandOutput,
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

  constructor(readonly input: SetSMBGuestPasswordCommandInput) {
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
      outputFilterSensitiveLog: SetSMBGuestPasswordOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetSMBGuestPasswordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetSMBGuestPasswordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetSMBGuestPasswordCommandOutput> {
    return deserializeAws_json1_1SetSMBGuestPasswordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
