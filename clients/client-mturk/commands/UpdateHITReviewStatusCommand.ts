import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { UpdateHITReviewStatusRequest, UpdateHITReviewStatusResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateHITReviewStatusCommand,
  serializeAws_json1_1UpdateHITReviewStatusCommand,
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

export type UpdateHITReviewStatusCommandInput = UpdateHITReviewStatusRequest;
export type UpdateHITReviewStatusCommandOutput = UpdateHITReviewStatusResponse & __MetadataBearer;

/**
 * <p>
 *             The <code>UpdateHITReviewStatus</code> operation updates the status of a HIT.
 *             If the status is Reviewable, this operation can update the status to Reviewing,
 *             or it can revert a Reviewing HIT back to the Reviewable status.
 *         </p>
 */
export class UpdateHITReviewStatusCommand extends $Command<
  UpdateHITReviewStatusCommandInput,
  UpdateHITReviewStatusCommandOutput,
  MTurkClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateHITReviewStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MTurkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateHITReviewStatusCommandInput, UpdateHITReviewStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MTurkClient";
    const commandName = "UpdateHITReviewStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateHITReviewStatusRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateHITReviewStatusResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateHITReviewStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateHITReviewStatusCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateHITReviewStatusCommandOutput> {
    return deserializeAws_json1_1UpdateHITReviewStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
