import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { UpdateEnrollmentStatusRequest, UpdateEnrollmentStatusResponse } from "../models/models_0";
import {
  deserializeAws_json1_0UpdateEnrollmentStatusCommand,
  serializeAws_json1_0UpdateEnrollmentStatusCommand,
} from "../protocols/Aws_json1_0";
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

export type UpdateEnrollmentStatusCommandInput = UpdateEnrollmentStatusRequest;
export type UpdateEnrollmentStatusCommandOutput = UpdateEnrollmentStatusResponse & __MetadataBearer;

/**
 * <p>Updates the enrollment (opt in) status of an account to the AWS Compute Optimizer service.</p>
 *         <p>If the account is a management account of an organization, this action can also be used
 *             to enroll member accounts within the organization.</p>
 */
export class UpdateEnrollmentStatusCommand extends $Command<
  UpdateEnrollmentStatusCommandInput,
  UpdateEnrollmentStatusCommandOutput,
  ComputeOptimizerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateEnrollmentStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComputeOptimizerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateEnrollmentStatusCommandInput, UpdateEnrollmentStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComputeOptimizerClient";
    const commandName = "UpdateEnrollmentStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateEnrollmentStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateEnrollmentStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateEnrollmentStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateEnrollmentStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateEnrollmentStatusCommandOutput> {
    return deserializeAws_json1_0UpdateEnrollmentStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
