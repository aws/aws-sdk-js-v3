import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { CreateExperimentTemplateRequest, CreateExperimentTemplateResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateExperimentTemplateCommand,
  serializeAws_restJson1CreateExperimentTemplateCommand,
} from "../protocols/Aws_restJson1";
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

export interface CreateExperimentTemplateCommandInput extends CreateExperimentTemplateRequest {}
export interface CreateExperimentTemplateCommandOutput extends CreateExperimentTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates an experiment template. </p>
 *          <p>To create a template, specify the following information: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Targets</b>: A target can be a specific resource
 *                in your AWS environment, or one or more resources that match criteria that you
 *                specify, for example, resources that have specific tags.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Actions</b>: The actions to carry out on the
 *                target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Stop conditions</b>: If a stop condition is
 *                triggered while an experiment is running, the experiment is automatically
 *                stopped. You can define a stop condition as a CloudWatch alarm.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">AWS Fault Injection Simulator User Guide</a>.</p>
 */
export class CreateExperimentTemplateCommand extends $Command<
  CreateExperimentTemplateCommandInput,
  CreateExperimentTemplateCommandOutput,
  FisClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateExperimentTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FisClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateExperimentTemplateCommandInput, CreateExperimentTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FisClient";
    const commandName = "CreateExperimentTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateExperimentTemplateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateExperimentTemplateResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateExperimentTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateExperimentTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateExperimentTemplateCommandOutput> {
    return deserializeAws_restJson1CreateExperimentTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
