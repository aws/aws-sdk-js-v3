import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { CancelStepsInput, CancelStepsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CancelStepsCommand,
  serializeAws_json1_1CancelStepsCommand,
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

export type CancelStepsCommandInput = CancelStepsInput;
export type CancelStepsCommandOutput = CancelStepsOutput & __MetadataBearer;

/**
 * <p>Cancels a pending step or steps in a running cluster. Available only in Amazon EMR
 *          versions 4.8.0 and later, excluding version 5.0.0. A maximum of 256 steps are allowed in
 *          each CancelSteps request. CancelSteps is idempotent but asynchronous; it does not guarantee
 *          that a step will be canceled, even if the request is successfully submitted. You can only
 *          cancel steps that are in a <code>PENDING</code> state.</p>
 */
export class CancelStepsCommand extends $Command<
  CancelStepsCommandInput,
  CancelStepsCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CancelStepsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelStepsCommandInput, CancelStepsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "CancelStepsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelStepsInput.filterSensitiveLog,
      outputFilterSensitiveLog: CancelStepsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelStepsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CancelStepsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelStepsCommandOutput> {
    return deserializeAws_json1_1CancelStepsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
