import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeregisterManagedInstanceRequest, DeregisterManagedInstanceResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeregisterManagedInstanceCommand,
  serializeAws_json1_1DeregisterManagedInstanceCommand,
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

export type DeregisterManagedInstanceCommandInput = DeregisterManagedInstanceRequest;
export type DeregisterManagedInstanceCommandOutput = DeregisterManagedInstanceResult & __MetadataBearer;

/**
 * <p>Removes the server or virtual machine from the list of registered servers. You can
 *    reregister the instance again at any time. If you don't plan to use Run Command on the server, we
 *    suggest uninstalling SSM Agent first.</p>
 */
export class DeregisterManagedInstanceCommand extends $Command<
  DeregisterManagedInstanceCommandInput,
  DeregisterManagedInstanceCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeregisterManagedInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeregisterManagedInstanceCommandInput, DeregisterManagedInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DeregisterManagedInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeregisterManagedInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeregisterManagedInstanceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeregisterManagedInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeregisterManagedInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeregisterManagedInstanceCommandOutput> {
    return deserializeAws_json1_1DeregisterManagedInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
