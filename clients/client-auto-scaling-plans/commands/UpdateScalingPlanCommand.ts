import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import { UpdateScalingPlanRequest, UpdateScalingPlanResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateScalingPlanCommand,
  serializeAws_json1_1UpdateScalingPlanCommand,
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

export type UpdateScalingPlanCommandInput = UpdateScalingPlanRequest;
export type UpdateScalingPlanCommandOutput = UpdateScalingPlanResponse & __MetadataBearer;

/**
 * <p>Updates the specified scaling plan.</p>
 *          <p>You cannot update a scaling plan if it is in the process of being created, updated, or
 *          deleted.</p>
 */
export class UpdateScalingPlanCommand extends $Command<
  UpdateScalingPlanCommandInput,
  UpdateScalingPlanCommandOutput,
  AutoScalingPlansClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateScalingPlanCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingPlansClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateScalingPlanCommandInput, UpdateScalingPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingPlansClient";
    const commandName = "UpdateScalingPlanCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateScalingPlanRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateScalingPlanResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateScalingPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateScalingPlanCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateScalingPlanCommandOutput> {
    return deserializeAws_json1_1UpdateScalingPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
