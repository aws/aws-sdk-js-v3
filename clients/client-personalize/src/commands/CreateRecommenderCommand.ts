// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateRecommenderRequest,
  CreateRecommenderRequestFilterSensitiveLog,
  CreateRecommenderResponse,
  CreateRecommenderResponseFilterSensitiveLog,
} from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import {
  deserializeAws_json1_1CreateRecommenderCommand,
  serializeAws_json1_1CreateRecommenderCommand,
} from "../protocols/Aws_json1_1";

export interface CreateRecommenderCommandInput extends CreateRecommenderRequest {}
export interface CreateRecommenderCommandOutput extends CreateRecommenderResponse, __MetadataBearer {}

/**
 * <p>Creates a recommender with the recipe (a Domain dataset group use case) you specify.
 *       You create recommenders for a Domain dataset group and specify the recommender's Amazon Resource Name (ARN) when you make a
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_RS_GetRecommendations.html">GetRecommendations</a>
 *       request.
 *      </p>
 *
 *          <p>
 *             <b>Minimum recommendation requests per second</b>
 *          </p>
 *
 *          <p>When you create a recommender, you can configure the recommender's minimum recommendation requests per second. The minimum recommendation requests per second
 *       (<code>minRecommendationRequestsPerSecond</code>) specifies the baseline recommendation request throughput provisioned by
 *       Amazon Personalize. The default minRecommendationRequestsPerSecond is <code>1</code>. A recommendation request is a single <code>GetRecommendations</code> operation.
 *       Request throughput is measured in requests per second and Amazon Personalize uses your requests per second to derive
 *       your requests per hour and the price of your recommender usage.
 *     </p>
 *          <p>
 *       If your requests per second increases beyond
 *       <code>minRecommendationRequestsPerSecond</code>, Amazon Personalize auto-scales the provisioned capacity up and down,
 *       but never below <code>minRecommendationRequestsPerSecond</code>.
 *       There's a short time delay while the capacity is increased that might cause loss of
 *       requests.</p>
 *          <p>
 *       Your bill is the greater of either the minimum requests per hour (based on minRecommendationRequestsPerSecond)
 *       or the actual number of requests. The actual request throughput used is calculated as the average requests/second within a one-hour window.
 *
 *       We recommend starting with the default <code>minRecommendationRequestsPerSecond</code>, track
 *       your usage using Amazon CloudWatch metrics, and then increase the <code>minRecommendationRequestsPerSecond</code>
 *       as necessary.
 *     </p>
 *
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A recommender can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>STOP PENDING > STOP IN_PROGRESS > INACTIVE > START PENDING > START IN_PROGRESS > ACTIVE</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
 *             </li>
 *          </ul>
 *          <p>To get the recommender status, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a>.</p>
 *          <note>
 *             <p>Wait until the <code>status</code> of the recommender
 *         is <code>ACTIVE</code> before asking the recommender for recommendations.</p>
 *          </note>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListRecommenders.html">ListRecommenders</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeRecommender.html">DescribeRecommender</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UpdateRecommender.html">UpdateRecommender</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteRecommender.html">DeleteRecommender</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateRecommenderCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateRecommenderCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateRecommenderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRecommenderCommandInput} for command's `input` shape.
 * @see {@link CreateRecommenderCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 */
export class CreateRecommenderCommand extends $Command<
  CreateRecommenderCommandInput,
  CreateRecommenderCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: CreateRecommenderCommandInput) {
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
  ): Handler<CreateRecommenderCommandInput, CreateRecommenderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRecommenderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "CreateRecommenderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRecommenderRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateRecommenderResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRecommenderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateRecommenderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRecommenderCommandOutput> {
    return deserializeAws_json1_1CreateRecommenderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
