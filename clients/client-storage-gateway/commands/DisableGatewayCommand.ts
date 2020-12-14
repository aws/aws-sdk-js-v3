import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DisableGatewayInput, DisableGatewayOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DisableGatewayCommand,
  serializeAws_json1_1DisableGatewayCommand,
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

export type DisableGatewayCommandInput = DisableGatewayInput;
export type DisableGatewayCommandOutput = DisableGatewayOutput & __MetadataBearer;

/**
 * <p>Disables a tape gateway when the gateway is no longer functioning. For example, if your
 *          gateway VM is damaged, you can disable the gateway so you can recover virtual tapes.</p>
 *
 *          <p>Use this operation for a tape gateway that is not reachable or not functioning. This
 *          operation is only supported in the tape gateway type.</p>
 *
 *          <important>
 *             <p>After a gateway is disabled, it cannot be enabled.</p>
 *          </important>
 */
export class DisableGatewayCommand extends $Command<
  DisableGatewayCommandInput,
  DisableGatewayCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableGatewayCommandInput) {
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
  ): Handler<DisableGatewayCommandInput, DisableGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DisableGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableGatewayInput.filterSensitiveLog,
      outputFilterSensitiveLog: DisableGatewayOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisableGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableGatewayCommandOutput> {
    return deserializeAws_json1_1DisableGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
