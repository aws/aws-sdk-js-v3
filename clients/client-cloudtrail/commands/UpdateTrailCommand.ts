import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { UpdateTrailRequest, UpdateTrailResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateTrailCommand,
  serializeAws_json1_1UpdateTrailCommand,
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

export type UpdateTrailCommandInput = UpdateTrailRequest;
export type UpdateTrailCommandOutput = UpdateTrailResponse & __MetadataBearer;

/**
 * <p>Updates the settings that specify delivery of log files. Changes to a trail do not require
 *          stopping the CloudTrail service. Use this action to designate an existing bucket for log
 *          delivery. If the existing bucket has previously been a target for CloudTrail log files,
 *          an IAM policy exists for the bucket. <code>UpdateTrail</code> must be called from the
 *          region in which the trail was created; otherwise, an
 *             <code>InvalidHomeRegionException</code> is thrown.</p>
 */
export class UpdateTrailCommand extends $Command<
  UpdateTrailCommandInput,
  UpdateTrailCommandOutput,
  CloudTrailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateTrailCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateTrailCommandInput, UpdateTrailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "UpdateTrailCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateTrailRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateTrailResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateTrailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateTrailCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTrailCommandOutput> {
    return deserializeAws_json1_1UpdateTrailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
