import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { PutEventSelectorsRequest, PutEventSelectorsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1PutEventSelectorsCommand,
  serializeAws_json1_1PutEventSelectorsCommand,
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

export type PutEventSelectorsCommandInput = PutEventSelectorsRequest;
export type PutEventSelectorsCommandOutput = PutEventSelectorsResponse & __MetadataBearer;

/**
 * <p>Configures an event selector or advanced event selectors for your trail.
 *          Use event selectors or advanced event selectors to specify management and data event settings for your trail. By
 *          default, trails created without specific event selectors are configured to log all read and
 *          write management events, and no data events.</p>
 *          <p>When an event occurs in your account, CloudTrail
 *          evaluates the event selectors or advanced event selectors in all trails. For each trail, if the event matches
 *          any event selector, the trail processes and logs the event. If the event doesn't match any event
 *          selector, the trail doesn't log the event. </p>
 *          <p>Example</p>
 *          <ol>
 *             <li>
 *                <p>You create an event selector for a trail and specify that you want
 *                write-only events.</p>
 *             </li>
 *             <li>
 *                <p>The EC2 <code>GetConsoleOutput</code> and <code>RunInstances</code> API
 *                operations occur in your account.</p>
 *             </li>
 *             <li>
 *                <p>CloudTrail evaluates whether the events match your event
 *                selectors.</p>
 *             </li>
 *             <li>
 *                <p>The <code>RunInstances</code> is a write-only event and it matches your
 *                event selector. The trail logs the event.</p>
 *             </li>
 *             <li>
 *                <p>The <code>GetConsoleOutput</code> is a read-only event that doesn't
 *                match your event selector. The trail doesn't log the event.
 *          </p>
 *             </li>
 *          </ol>
 *          <p>The <code>PutEventSelectors</code> operation must be called from the region in which
 *          the trail was created; otherwise, an <code>InvalidHomeRegionException</code> exception is
 *          thrown.</p>
 *          <p>You can configure up to five event selectors for each trail. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-and-data-events-with-cloudtrail.html">Logging data and management events for trails
 *       </a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Quotas in AWS CloudTrail</a>
 *          in the <i>AWS CloudTrail User Guide</i>.</p>
 *          <p>You can add advanced event selectors, and conditions for your advanced
 *          event selectors, up to a maximum of 500 values for all conditions and selectors on a trail.
 *          You can use either <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If you apply <code>AdvancedEventSelectors</code>
 *          to a trail, any existing <code>EventSelectors</code> are overwritten. For more information about
 *          advanced event selectors, see
 *          <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging
 *             data events for trails</a> in the <i>AWS CloudTrail User Guide</i>.</p>
 */
export class PutEventSelectorsCommand extends $Command<
  PutEventSelectorsCommandInput,
  PutEventSelectorsCommandOutput,
  CloudTrailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutEventSelectorsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutEventSelectorsCommandInput, PutEventSelectorsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "PutEventSelectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutEventSelectorsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutEventSelectorsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutEventSelectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutEventSelectorsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutEventSelectorsCommandOutput> {
    return deserializeAws_json1_1PutEventSelectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
