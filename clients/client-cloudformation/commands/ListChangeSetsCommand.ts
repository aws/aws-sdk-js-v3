import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListChangeSetsInput, ListChangeSetsOutput } from "../models/models_0";
import {
  deserializeAws_queryListChangeSetsCommand,
  serializeAws_queryListChangeSetsCommand,
} from "../protocols/Aws_query";
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

export type ListChangeSetsCommandInput = ListChangeSetsInput;
export type ListChangeSetsCommandOutput = ListChangeSetsOutput & __MetadataBearer;

/**
 * <p>Returns the ID and status of each active change set for a stack. For example, AWS
 *          CloudFormation lists change sets that are in the <code>CREATE_IN_PROGRESS</code> or
 *             <code>CREATE_PENDING</code> state.</p>
 */
export class ListChangeSetsCommand extends $Command<
  ListChangeSetsCommandInput,
  ListChangeSetsCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListChangeSetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListChangeSetsCommandInput, ListChangeSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListChangeSetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListChangeSetsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListChangeSetsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListChangeSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListChangeSetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListChangeSetsCommandOutput> {
    return deserializeAws_queryListChangeSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
