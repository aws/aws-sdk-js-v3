import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { SkipWaitTimeForInstanceTerminationInput } from "../models/models_0";
import {
  deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand,
  serializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand,
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

export type SkipWaitTimeForInstanceTerminationCommandInput = SkipWaitTimeForInstanceTerminationInput;
export type SkipWaitTimeForInstanceTerminationCommandOutput = __MetadataBearer;

/**
 * @deprecated
 *
 * <p>In a blue/green deployment, overrides any specified wait time and starts terminating
 *             instances immediately after the traffic routing is complete.</p>
 */
export class SkipWaitTimeForInstanceTerminationCommand extends $Command<
  SkipWaitTimeForInstanceTerminationCommandInput,
  SkipWaitTimeForInstanceTerminationCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SkipWaitTimeForInstanceTerminationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SkipWaitTimeForInstanceTerminationCommandInput, SkipWaitTimeForInstanceTerminationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "SkipWaitTimeForInstanceTerminationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SkipWaitTimeForInstanceTerminationInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: SkipWaitTimeForInstanceTerminationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SkipWaitTimeForInstanceTerminationCommandOutput> {
    return deserializeAws_json1_1SkipWaitTimeForInstanceTerminationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
