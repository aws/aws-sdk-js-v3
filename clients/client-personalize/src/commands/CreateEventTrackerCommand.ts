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
  CreateEventTrackerRequest,
  CreateEventTrackerRequestFilterSensitiveLog,
  CreateEventTrackerResponse,
  CreateEventTrackerResponseFilterSensitiveLog,
} from "../models/models_0";
import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import {
  deserializeAws_json1_1CreateEventTrackerCommand,
  serializeAws_json1_1CreateEventTrackerCommand,
} from "../protocols/Aws_json1_1";

export interface CreateEventTrackerCommandInput extends CreateEventTrackerRequest {}
export interface CreateEventTrackerCommandOutput extends CreateEventTrackerResponse, __MetadataBearer {}

/**
 * <p>Creates an event tracker that you use when adding event data to a specified dataset
 *       group using the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p>
 *          <note>
 *             <p>Only one event tracker can be associated with a dataset group. You will get
 *         an error if you call <code>CreateEventTracker</code> using the same dataset group as an
 *         existing event tracker.</p>
 *          </note>
 *          <p>When you create an event tracker, the response includes a tracking ID, which you pass as a parameter when you use the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> operation.
 *       Amazon Personalize then appends the event data to the Interactions dataset of the dataset group you specify
 *       in your event tracker.
 *     </p>
 *          <p>The event tracker can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the event tracker, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a>.</p>
 *          <note>
 *             <p>The event tracker must be in the ACTIVE state before using the tracking ID.</p>
 *          </note>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListEventTrackers.html">ListEventTrackers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeEventTracker.html">DescribeEventTracker</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteEventTracker.html">DeleteEventTracker</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateEventTrackerCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateEventTrackerCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateEventTrackerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEventTrackerCommandInput} for command's `input` shape.
 * @see {@link CreateEventTrackerCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 */
export class CreateEventTrackerCommand extends $Command<
  CreateEventTrackerCommandInput,
  CreateEventTrackerCommandOutput,
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

  constructor(readonly input: CreateEventTrackerCommandInput) {
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
  ): Handler<CreateEventTrackerCommandInput, CreateEventTrackerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEventTrackerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "CreateEventTrackerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEventTrackerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateEventTrackerResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEventTrackerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEventTrackerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEventTrackerCommandOutput> {
    return deserializeAws_json1_1CreateEventTrackerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
