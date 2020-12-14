import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListTrialComponentsRequest, ListTrialComponentsResponse } from "../models/models_2";
import {
  deserializeAws_json1_1ListTrialComponentsCommand,
  serializeAws_json1_1ListTrialComponentsCommand,
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

export type ListTrialComponentsCommandInput = ListTrialComponentsRequest;
export type ListTrialComponentsCommandOutput = ListTrialComponentsResponse & __MetadataBearer;

/**
 * <p>Lists the trial components in your account. You can sort the list by trial component name
 *       or creation time. You can filter the list to show only components that were created in a
 *       specific time range. You can also filter on one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ExperimentName</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SourceArn</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TrialName</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export class ListTrialComponentsCommand extends $Command<
  ListTrialComponentsCommandInput,
  ListTrialComponentsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTrialComponentsCommandInput) {
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
  ): Handler<ListTrialComponentsCommandInput, ListTrialComponentsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListTrialComponentsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTrialComponentsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListTrialComponentsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTrialComponentsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListTrialComponentsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTrialComponentsCommandOutput> {
    return deserializeAws_json1_1ListTrialComponentsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
