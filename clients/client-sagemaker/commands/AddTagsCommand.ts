import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { AddTagsInput, AddTagsOutput } from "../models/models_0";
import { deserializeAws_json1_1AddTagsCommand, serializeAws_json1_1AddTagsCommand } from "../protocols/Aws_json1_1";
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

export type AddTagsCommandInput = AddTagsInput;
export type AddTagsCommandOutput = AddTagsOutput & __MetadataBearer;

/**
 * <p>Adds or overwrites one or more tags for the specified Amazon SageMaker resource. You can add
 *             tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform
 *             jobs, models, labeling jobs, work teams, endpoint configurations, and
 *             endpoints.</p>
 *         <p>Each tag consists of a key and an optional value. Tag keys must be unique per
 *             resource. For more information about tags, see For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
 *                 Tagging Strategies</a>.</p>
 *         <note>
 *             <p>Tags that you add to a hyperparameter tuning job by calling this API are also
 *                 added to any training jobs that the hyperparameter tuning job launches after you
 *                 call this API, but not to training jobs that the hyperparameter tuning job launched
 *                 before you called this API. To make sure that the tags associated with a
 *                 hyperparameter tuning job are also added to all training jobs that the
 *                 hyperparameter tuning job launches, add the tags when you first create the tuning
 *                 job by specifying them in the <code>Tags</code> parameter of <a>CreateHyperParameterTuningJob</a>
 *             </p>
 *         </note>
 */
export class AddTagsCommand extends $Command<AddTagsCommandInput, AddTagsCommandOutput, SageMakerClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddTagsCommandInput, AddTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "AddTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddTagsInput.filterSensitiveLog,
      outputFilterSensitiveLog: AddTagsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddTagsCommandOutput> {
    return deserializeAws_json1_1AddTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
