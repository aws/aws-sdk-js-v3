import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateModelVersionStatusRequest, UpdateModelVersionStatusResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateModelVersionStatusCommand,
  serializeAws_json1_1UpdateModelVersionStatusCommand,
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

export type UpdateModelVersionStatusCommandInput = UpdateModelVersionStatusRequest;
export type UpdateModelVersionStatusCommandOutput = UpdateModelVersionStatusResult & __MetadataBearer;

/**
 * <p>Updates the status of a model version.</p>
 *          <p>You can perform the following status updates:</p>
 *          <ol>
 *             <li>
 *                <p>Change the <code>TRAINING_COMPLETE</code> status to <code>ACTIVE</code>.</p>
 *             </li>
 *             <li>
 *                <p>Change <code>ACTIVE</code>to <code>INACTIVE</code>.</p>
 *             </li>
 *          </ol>
 */
export class UpdateModelVersionStatusCommand extends $Command<
  UpdateModelVersionStatusCommandInput,
  UpdateModelVersionStatusCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateModelVersionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateModelVersionStatusCommandInput, UpdateModelVersionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "UpdateModelVersionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateModelVersionStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateModelVersionStatusResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateModelVersionStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateModelVersionStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateModelVersionStatusCommandOutput> {
    return deserializeAws_json1_1UpdateModelVersionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
