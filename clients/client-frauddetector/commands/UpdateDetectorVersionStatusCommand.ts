import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { UpdateDetectorVersionStatusRequest, UpdateDetectorVersionStatusResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDetectorVersionStatusCommand,
  serializeAws_json1_1UpdateDetectorVersionStatusCommand,
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

export type UpdateDetectorVersionStatusCommandInput = UpdateDetectorVersionStatusRequest;
export type UpdateDetectorVersionStatusCommandOutput = UpdateDetectorVersionStatusResult & __MetadataBearer;

/**
 * <p>Updates the detector version’s status. You can perform the following promotions or
 *             demotions using <code>UpdateDetectorVersionStatus</code>: <code>DRAFT</code> to <code>ACTIVE</code>, <code>ACTIVE</code> to <code>INACTIVE</code>, and <code>INACTIVE</code> to <code>ACTIVE</code>.</p>
 */
export class UpdateDetectorVersionStatusCommand extends $Command<
  UpdateDetectorVersionStatusCommandInput,
  UpdateDetectorVersionStatusCommandOutput,
  FraudDetectorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDetectorVersionStatusCommandInput) {
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
  ): Handler<UpdateDetectorVersionStatusCommandInput, UpdateDetectorVersionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "UpdateDetectorVersionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDetectorVersionStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDetectorVersionStatusResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDetectorVersionStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDetectorVersionStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateDetectorVersionStatusCommandOutput> {
    return deserializeAws_json1_1UpdateDetectorVersionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
