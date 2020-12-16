import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { SetLocalConsolePasswordInput, SetLocalConsolePasswordOutput } from "../models/models_0";
import {
  deserializeAws_json1_1SetLocalConsolePasswordCommand,
  serializeAws_json1_1SetLocalConsolePasswordCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type SetLocalConsolePasswordCommandInput = SetLocalConsolePasswordInput;
export type SetLocalConsolePasswordCommandOutput = SetLocalConsolePasswordOutput & __MetadataBearer;

/**
 * <p>Sets the password for your VM local console. When you log in to the local console for
 *          the first time, you log in to the VM with the default credentials. We recommend that you
 *          set a new password. You don't need to know the default password to set a new
 *          password.</p>
 */
export class SetLocalConsolePasswordCommand extends $Command<
  SetLocalConsolePasswordCommandInput,
  SetLocalConsolePasswordCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "SetLocalConsolePasswordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SetLocalConsolePasswordInput.filterSensitiveLog,
      outputFilterSensitiveLog: SetLocalConsolePasswordOutput.filterSensitiveLog,
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
