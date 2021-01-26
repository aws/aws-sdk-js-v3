import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListOnPremisesInstancesInput, ListOnPremisesInstancesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ListOnPremisesInstancesCommand,
  serializeAws_json1_1ListOnPremisesInstancesCommand,
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

export type ListOnPremisesInstancesCommandInput = ListOnPremisesInstancesInput;
export type ListOnPremisesInstancesCommandOutput = ListOnPremisesInstancesOutput & __MetadataBearer;

/**
 * <p>Gets a list of names for one or more on-premises instances.</p>
 *         <p>Unless otherwise specified, both registered and deregistered on-premises instance
 *             names are listed. To list only registered or deregistered on-premises instance names,
 *             use the registration status parameter.</p>
 */
export class ListOnPremisesInstancesCommand extends $Command<
  ListOnPremisesInstancesCommandInput,
  ListOnPremisesInstancesCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListOnPremisesInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListOnPremisesInstancesCommandInput, ListOnPremisesInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "ListOnPremisesInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOnPremisesInstancesInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListOnPremisesInstancesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOnPremisesInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListOnPremisesInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOnPremisesInstancesCommandOutput> {
    return deserializeAws_json1_1ListOnPremisesInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
