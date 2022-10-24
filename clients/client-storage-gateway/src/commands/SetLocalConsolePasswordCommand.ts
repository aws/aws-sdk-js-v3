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
  SetLocalConsolePasswordInput,
  SetLocalConsolePasswordInputFilterSensitiveLog,
  SetLocalConsolePasswordOutput,
  SetLocalConsolePasswordOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1SetLocalConsolePasswordCommand,
  serializeAws_json1_1SetLocalConsolePasswordCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface SetLocalConsolePasswordCommandInput extends SetLocalConsolePasswordInput {}
export interface SetLocalConsolePasswordCommandOutput extends SetLocalConsolePasswordOutput, __MetadataBearer {}

/**
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
 * const command = new SetLocalConsolePasswordCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetLocalConsolePasswordCommandInput} for command's `input` shape.
 * @see {@link SetLocalConsolePasswordCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
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
      outputFilterSensitiveLog: SetLocalConsolePasswordOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SetLocalConsolePasswordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SetLocalConsolePasswordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SetLocalConsolePasswordCommandOutput> {
    return deserializeAws_json1_1SetLocalConsolePasswordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
