import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DisassociateTrialComponentRequest, DisassociateTrialComponentResponse } from "../models/models_2";
import {
  deserializeAws_json1_1DisassociateTrialComponentCommand,
  serializeAws_json1_1DisassociateTrialComponentCommand,
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

export type DisassociateTrialComponentCommandInput = DisassociateTrialComponentRequest;
export type DisassociateTrialComponentCommandOutput = DisassociateTrialComponentResponse & __MetadataBearer;

/**
 * <p>Disassociates a trial component from a trial. This doesn't effect other trials the
 *       component is associated with. Before you can delete a component, you must disassociate the
 *       component from all trials it is associated with. To associate a trial component with a trial,
 *       call the <a>AssociateTrialComponent</a> API.</p>
 *          <p>To get a list of the trials a component is associated with, use the <a>Search</a> API. Specify <code>ExperimentTrialComponent</code> for the <code>Resource</code> parameter.
 *       The list appears in the response under <code>Results.TrialComponent.Parents</code>.</p>
 */
export class DisassociateTrialComponentCommand extends $Command<
  DisassociateTrialComponentCommandInput,
  DisassociateTrialComponentCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateTrialComponentCommandInput) {
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
  ): Handler<DisassociateTrialComponentCommandInput, DisassociateTrialComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DisassociateTrialComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateTrialComponentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateTrialComponentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateTrialComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateTrialComponentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateTrialComponentCommandOutput> {
    return deserializeAws_json1_1DisassociateTrialComponentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
