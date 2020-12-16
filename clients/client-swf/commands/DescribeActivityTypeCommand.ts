import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { ActivityTypeDetail, DescribeActivityTypeInput } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeActivityTypeCommand,
  serializeAws_json1_0DescribeActivityTypeCommand,
} from "../protocols/Aws_json1_0";
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

export type DescribeActivityTypeCommandInput = DescribeActivityTypeInput;
export type DescribeActivityTypeCommandOutput = ActivityTypeDetail & __MetadataBearer;

/**
 * <p>Returns information about the specified activity type. This includes configuration
 *       settings provided when the type was registered and other general information about the
 *       type.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
 *       follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
 *           only specified domains.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this
 *           action.</p>
 *             </li>
 *             <li>
 *                <p>Constrain the following parameters by using a <code>Condition</code> element with
 *           the appropriate keys.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>activityType.name</code>: String constraint. The key is
 *                 <code>swf:activityType.name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>activityType.version</code>: String constraint. The key is
 *                 <code>swf:activityType.version</code>.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *       parameter values fall outside the specified constraints, the action fails. The associated
 *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
 *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
 */
export class DescribeActivityTypeCommand extends $Command<
  DescribeActivityTypeCommandInput,
  DescribeActivityTypeCommandOutput,
  SWFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeActivityTypeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SWFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeActivityTypeCommandInput, DescribeActivityTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SWFClient";
    const commandName = "DescribeActivityTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeActivityTypeInput.filterSensitiveLog,
      outputFilterSensitiveLog: ActivityTypeDetail.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeActivityTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeActivityTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeActivityTypeCommandOutput> {
    return deserializeAws_json1_0DescribeActivityTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
