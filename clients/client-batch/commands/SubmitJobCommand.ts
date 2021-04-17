import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { SubmitJobRequest, SubmitJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1SubmitJobCommand,
  serializeAws_restJson1SubmitJobCommand,
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

export interface SubmitJobCommandInput extends SubmitJobRequest {}
export interface SubmitJobCommandOutput extends SubmitJobResponse, __MetadataBearer {}

/**
 * <p>Submits an AWS Batch job from a job definition. Parameters that are specified during <a>SubmitJob</a>
 *    override parameters defined in the job definition. vCPU and memory requirements that are specified in the
 *     <code>ResourceRequirements</code> objects in the job definition are the exception. They can't be overridden this way
 *    using the <code>memory</code> and <code>vcpus</code> parameters. Rather, you must specify updates to job definition
 *    parameters in a <code>ResourceRequirements</code> object that's included in the <code>containerOverrides</code>
 *    parameter.</p>
 *          <important>
 *             <p>Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14
 *     days, Fargate resources might become unavailable and job might be terminated.</p>
 *          </important>
 */
export class SubmitJobCommand extends $Command<
  SubmitJobCommandInput,
  SubmitJobCommandOutput,
  BatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SubmitJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SubmitJobCommandInput, SubmitJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "SubmitJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubmitJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SubmitJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SubmitJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SubmitJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SubmitJobCommandOutput> {
    return deserializeAws_restJson1SubmitJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
