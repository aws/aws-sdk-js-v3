import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateTrialRequest, CreateTrialResponse } from "../models/models_1";
import {
  deserializeAws_json1_1CreateTrialCommand,
  serializeAws_json1_1CreateTrialCommand,
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

export type CreateTrialCommandInput = CreateTrialRequest;
export type CreateTrialCommandOutput = CreateTrialResponse & __MetadataBearer;

/**
 * <p>Creates an Amazon SageMaker <i>trial</i>. A trial is a set of steps called
 *         <i>trial components</i> that produce a machine learning model. A trial is part
 *       of a single Amazon SageMaker <i>experiment</i>.</p>
 *          <p>When you use Amazon SageMaker Studio or the Amazon SageMaker Python SDK, all experiments, trials, and trial
 *       components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you
 *       must use the logging APIs provided by the SDK.</p>
 *          <p>You can add tags to a trial and then use the <a>Search</a> API to search for
 *       the tags.</p>
 *          <p>To get a list of all your trials, call the <a>ListTrials</a> API. To view a
 *       trial's properties, call the <a>DescribeTrial</a> API. To create a trial component,
 *       call the <a>CreateTrialComponent</a> API.</p>
 */
export class CreateTrialCommand extends $Command<
  CreateTrialCommandInput,
  CreateTrialCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTrialCommandInput) {
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
  ): Handler<CreateTrialCommandInput, CreateTrialCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateTrialCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTrialRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTrialResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTrialCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTrialCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTrialCommandOutput> {
    return deserializeAws_json1_1CreateTrialCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
