import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateExperimentRequest, CreateExperimentResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateExperimentCommand,
  serializeAws_json1_1CreateExperimentCommand,
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

export type CreateExperimentCommandInput = CreateExperimentRequest;
export type CreateExperimentCommandOutput = CreateExperimentResponse & __MetadataBearer;

/**
 * <p>Creates an SageMaker <i>experiment</i>. An experiment is a collection of
 *         <i>trials</i> that are observed, compared and evaluated as a group. A trial is
 *       a set of steps, called <i>trial components</i>, that produce a machine learning
 *       model.</p>
 *          <p>The goal of an experiment is to determine the components that produce the best model.
 *       Multiple trials are performed, each one isolating and measuring the impact of a change to one
 *       or more inputs, while keeping the remaining inputs constant.</p>
 *          <p>When you use Amazon SageMaker Studio or the Amazon SageMaker Python SDK, all experiments, trials, and trial
 *       components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you
 *       must use the logging APIs provided by the SDK.</p>
 *          <p>You can add tags to experiments, trials, trial components and then use the <a>Search</a> API to search for the tags.</p>
 *          <p>To add a description to an experiment, specify the optional <code>Description</code>
 *       parameter. To add a description later, or to change the description, call the <a>UpdateExperiment</a> API.</p>
 *          <p>To get a list of all your experiments, call the <a>ListExperiments</a> API. To
 *       view an experiment's properties, call the <a>DescribeExperiment</a> API. To get a
 *       list of all the trials associated with an experiment, call the <a>ListTrials</a>
 *       API. To create a trial call the <a>CreateTrial</a> API.</p>
 */
export class CreateExperimentCommand extends $Command<
  CreateExperimentCommandInput,
  CreateExperimentCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateExperimentCommandInput) {
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
  ): Handler<CreateExperimentCommandInput, CreateExperimentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateExperimentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateExperimentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateExperimentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateExperimentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateExperimentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateExperimentCommandOutput> {
    return deserializeAws_json1_1CreateExperimentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
