import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateTrialComponentRequest, CreateTrialComponentResponse } from "../models/models_1";
import {
  deserializeAws_json1_1CreateTrialComponentCommand,
  serializeAws_json1_1CreateTrialComponentCommand,
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

export type CreateTrialComponentCommandInput = CreateTrialComponentRequest;
export type CreateTrialComponentCommandOutput = CreateTrialComponentResponse & __MetadataBearer;

/**
 * <p>Creates a <i>trial component</i>, which is a stage of a machine learning
 *         <i>trial</i>. A trial is composed of one or more trial components. A trial
 *       component can be used in multiple trials.</p>
 *          <p>Trial components include pre-processing jobs, training jobs, and batch transform
 *       jobs.</p>
 *          <p>When you use Amazon SageMaker Studio or the Amazon SageMaker Python SDK, all experiments, trials, and trial
 *       components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you
 *       must use the logging APIs provided by the SDK.</p>
 *          <p>You can add tags to a trial component and then use the <a>Search</a> API to
 *       search for the tags.</p>
 *          <note>
 *             <p>
 *                <code>CreateTrialComponent</code> can only be invoked from within an Amazon SageMaker managed
 *         environment. This includes Amazon SageMaker training jobs, processing jobs, transform jobs, and Amazon SageMaker
 *         notebooks. A call to <code>CreateTrialComponent</code> from outside one of these
 *         environments results in an error.</p>
 *          </note>
 */
export class CreateTrialComponentCommand extends $Command<
  CreateTrialComponentCommandInput,
  CreateTrialComponentCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTrialComponentCommandInput) {
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
  ): Handler<CreateTrialComponentCommandInput, CreateTrialComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateTrialComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTrialComponentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTrialComponentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTrialComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateTrialComponentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTrialComponentCommandOutput> {
    return deserializeAws_json1_1CreateTrialComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
