import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateSolutionRequest, CreateSolutionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateSolutionCommand,
  serializeAws_json1_1CreateSolutionCommand,
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

export type CreateSolutionCommandInput = CreateSolutionRequest;
export type CreateSolutionCommandOutput = CreateSolutionResponse & __MetadataBearer;

/**
 * <p>Creates the configuration for training a model. A trained model is known as
 *       a solution. After the configuration is created, you train the model (create a solution)
 *       by calling the <a>CreateSolutionVersion</a> operation. Every time you call
 *       <code>CreateSolutionVersion</code>, a new version of the solution is created.</p>
 *          <p>After creating a solution version, you check its accuracy by calling
 *       <a>GetSolutionMetrics</a>. When you are satisfied with the version, you
 *       deploy it using <a>CreateCampaign</a>. The campaign provides recommendations
 *       to a client through the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a> API.</p>
 *          <p>To train a model, Amazon Personalize requires training data and a recipe. The training data
 *       comes from the dataset group that you provide in the request. A recipe specifies
 *       the training algorithm and a feature transformation. You can specify one of the predefined
 *       recipes provided by Amazon Personalize. Alternatively, you can specify
 *       <code>performAutoML</code> and Amazon Personalize will analyze your data and select the
 *       optimum USER_PERSONALIZATION recipe for you.</p>
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A solution can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the solution, call <a>DescribeSolution</a>. Wait
 *       until the status shows as ACTIVE before calling <code>CreateSolutionVersion</code>.</p>
 *
 *
 *
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListSolutions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateSolutionVersion</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeSolution</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteSolution</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListSolutionVersions</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeSolutionVersion</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class CreateSolutionCommand extends $Command<
  CreateSolutionCommandInput,
  CreateSolutionCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSolutionCommandInput) {
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
  ): Handler<CreateSolutionCommandInput, CreateSolutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "CreateSolutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSolutionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSolutionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSolutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateSolutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSolutionCommandOutput> {
    return deserializeAws_json1_1CreateSolutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
