import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DeleteSolutionRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteSolutionCommand,
  serializeAws_json1_1DeleteSolutionCommand,
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

export type DeleteSolutionCommandInput = DeleteSolutionRequest;
export type DeleteSolutionCommandOutput = __MetadataBearer;

/**
 * <p>Deletes all versions of a solution and the <code>Solution</code> object itself.
 *       Before deleting a solution, you must delete all campaigns based on
 *       the solution. To determine what campaigns are using the solution, call
 *       <a>ListCampaigns</a> and supply the Amazon Resource Name (ARN) of the solution.
 *       You can't delete a solution if an associated <code>SolutionVersion</code> is in the
 *       CREATE PENDING or IN PROGRESS state.
 *       For more information on solutions, see <a>CreateSolution</a>.</p>
 */
export class DeleteSolutionCommand extends $Command<
  DeleteSolutionCommandInput,
  DeleteSolutionCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteSolutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSolutionCommandInput, DeleteSolutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "DeleteSolutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteSolutionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteSolutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteSolutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSolutionCommandOutput> {
    return deserializeAws_json1_1DeleteSolutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
