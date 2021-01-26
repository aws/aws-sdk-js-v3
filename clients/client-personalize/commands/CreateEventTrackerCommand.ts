import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateEventTrackerRequest, CreateEventTrackerResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateEventTrackerCommand,
  serializeAws_json1_1CreateEventTrackerCommand,
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

export type CreateEventTrackerCommandInput = CreateEventTrackerRequest;
export type CreateEventTrackerCommandOutput = CreateEventTrackerResponse & __MetadataBearer;

/**
 * <p>Creates an event tracker that you use when sending event data to the specified dataset
 *       group using the
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_UBS_PutEvents.html">PutEvents</a> API.</p>
 *          <p>When Amazon Personalize creates an event tracker, it also
 *       creates an <i>event-interactions</i> dataset in the dataset group associated
 *       with the event tracker.
 *       The event-interactions dataset stores the event data from the <code>PutEvents</code> call.
 *       The contents of this dataset are not available to the user.</p>
 *          <note>
 *             <p>Only one event tracker can be associated with a dataset group. You will get
 *         an error if you call <code>CreateEventTracker</code> using the same dataset group as an
 *         existing event tracker.</p>
 *          </note>
 *          <p>When you send event data you include your tracking ID. The tracking ID identifies
 *       the customer and authorizes the customer to send the data.</p>
 *          <p>The event tracker can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING > DELETE IN_PROGRESS</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the event tracker, call <a>DescribeEventTracker</a>.</p>
 *          <note>
 *             <p>The event tracker must be in the ACTIVE state before using the tracking ID.</p>
 *          </note>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListEventTrackers</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeEventTracker</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteEventTracker</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class CreateEventTrackerCommand extends $Command<
  CreateEventTrackerCommandInput,
  CreateEventTrackerCommandOutput,
  PersonalizeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeClient";
    const commandName = "CreateEventTrackerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEventTrackerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateEventTrackerResponse.filterSensitiveLog,
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
