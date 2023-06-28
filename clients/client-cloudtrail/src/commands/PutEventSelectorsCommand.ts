// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { PutEventSelectorsRequest, PutEventSelectorsResponse } from "../models/models_0";
import { de_PutEventSelectorsCommand, se_PutEventSelectorsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutEventSelectorsCommand}.
 */
export interface PutEventSelectorsCommandInput extends PutEventSelectorsRequest {}
/**
 * @public
 *
 * The output of {@link PutEventSelectorsCommand}.
 */
export interface PutEventSelectorsCommandOutput extends PutEventSelectorsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Configures an event selector or advanced event selectors for your trail. Use event
 *          selectors or advanced event selectors to specify management and data event settings for
 *          your trail. If you want your trail to log Insights events, be sure the event selector
 *          enables logging of the Insights event types you want configured for your trail. For more information about logging Insights events, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-insights-events-with-cloudtrail.html">Logging Insights events for trails</a> in the <i>CloudTrail User Guide</i>.
 *          By default, trails created without specific event selectors are configured to
 *          log all read and write management events, and no data events.</p>
 *          <p>When an event occurs in your account, CloudTrail evaluates the event selectors or
 *          advanced event selectors in all trails. For each trail, if the event matches any event
 *          selector, the trail processes and logs the event. If the event doesn't match any event
 *          selector, the trail doesn't log the event.</p>
 *          <p>Example</p>
 *          <ol>
 *             <li>
 *                <p>You create an event selector for a trail and specify that you want write-only
 *                events.</p>
 *             </li>
 *             <li>
 *                <p>The EC2 <code>GetConsoleOutput</code> and <code>RunInstances</code> API operations
 *                occur in your account.</p>
 *             </li>
 *             <li>
 *                <p>CloudTrail evaluates whether the events match your event selectors.</p>
 *             </li>
 *             <li>
 *                <p>The <code>RunInstances</code> is a write-only event and it matches your event
 *                selector. The trail logs the event.</p>
 *             </li>
 *             <li>
 *                <p>The <code>GetConsoleOutput</code> is a read-only event that doesn't match your
 *                event selector. The trail doesn't log the event. </p>
 *             </li>
 *          </ol>
 *          <p>The <code>PutEventSelectors</code> operation must be called from the Region in which the
 *          trail was created; otherwise, an <code>InvalidHomeRegionException</code> exception is
 *          thrown.</p>
 *          <p>You can configure up to five event selectors for each trail. For more information, see
 *             <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html">Logging management events</a>, <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging
 *             data events</a>, and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/WhatIsCloudTrail-Limits.html">Quotas in CloudTrail</a> in the <i>CloudTrail User
 *          Guide</i>.</p>
 *          <p>You can add advanced event selectors, and conditions for your advanced event selectors,
 *          up to a maximum of 500 values for all conditions and selectors on a trail. You can use
 *          either <code>AdvancedEventSelectors</code> or <code>EventSelectors</code>, but not both. If
 *          you apply <code>AdvancedEventSelectors</code> to a trail, any existing
 *             <code>EventSelectors</code> are overwritten. For more information about advanced event
 *          selectors, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html">Logging data events</a> in the <i>CloudTrail User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, PutEventSelectorsCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, PutEventSelectorsCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const input = { // PutEventSelectorsRequest
 *   TrailName: "STRING_VALUE", // required
 *   EventSelectors: [ // EventSelectors
 *     { // EventSelector
 *       ReadWriteType: "ReadOnly" || "WriteOnly" || "All",
 *       IncludeManagementEvents: true || false,
 *       DataResources: [ // DataResources
 *         { // DataResource
 *           Type: "STRING_VALUE",
 *           Values: [ // DataResourceValues
 *             "STRING_VALUE",
 *           ],
 *         },
 *       ],
 *       ExcludeManagementEventSources: [ // ExcludeManagementEventSources
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   AdvancedEventSelectors: [ // AdvancedEventSelectors
 *     { // AdvancedEventSelector
 *       Name: "STRING_VALUE",
 *       FieldSelectors: [ // AdvancedFieldSelectors // required
 *         { // AdvancedFieldSelector
 *           Field: "STRING_VALUE", // required
 *           Equals: [ // Operator
 *             "STRING_VALUE",
 *           ],
 *           StartsWith: [
 *             "STRING_VALUE",
 *           ],
 *           EndsWith: [
 *             "STRING_VALUE",
 *           ],
 *           NotEquals: [
 *             "STRING_VALUE",
 *           ],
 *           NotStartsWith: [
 *             "STRING_VALUE",
 *           ],
 *           NotEndsWith: "<Operator>",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new PutEventSelectorsCommand(input);
 * const response = await client.send(command);
 * // { // PutEventSelectorsResponse
 * //   TrailARN: "STRING_VALUE",
 * //   EventSelectors: [ // EventSelectors
 * //     { // EventSelector
 * //       ReadWriteType: "ReadOnly" || "WriteOnly" || "All",
 * //       IncludeManagementEvents: true || false,
 * //       DataResources: [ // DataResources
 * //         { // DataResource
 * //           Type: "STRING_VALUE",
 * //           Values: [ // DataResourceValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //       ExcludeManagementEventSources: [ // ExcludeManagementEventSources
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   AdvancedEventSelectors: [ // AdvancedEventSelectors
 * //     { // AdvancedEventSelector
 * //       Name: "STRING_VALUE",
 * //       FieldSelectors: [ // AdvancedFieldSelectors // required
 * //         { // AdvancedFieldSelector
 * //           Field: "STRING_VALUE", // required
 * //           Equals: [ // Operator
 * //             "STRING_VALUE",
 * //           ],
 * //           StartsWith: [
 * //             "STRING_VALUE",
 * //           ],
 * //           EndsWith: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NotEquals: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NotStartsWith: [
 * //             "STRING_VALUE",
 * //           ],
 * //           NotEndsWith: "<Operator>",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutEventSelectorsCommandInput - {@link PutEventSelectorsCommandInput}
 * @returns {@link PutEventSelectorsCommandOutput}
 * @see {@link PutEventSelectorsCommandInput} for command's `input` shape.
 * @see {@link PutEventSelectorsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link CloudTrailARNInvalidException} (client fault)
 *  <p>This exception is thrown when an operation is called with a trail ARN that is not valid.
 *          The following is the format of a trail ARN.</p>
 *          <p>
 *             <code>arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail</code>
 *          </p>
 *          <p>This exception is also thrown when you call <code>AddTags</code> or <code>RemoveTags</code> on a trail, event data store, or channel with a resource ARN that is not valid.</p>
 *          <p>The following is the format of an event data store ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE</code>
 *          </p>
 *          <p>The following is the format of a channel ARN:
 *          <code>arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890</code>
 *          </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when the specified resource is not ready for an operation. This
 *          can occur when you try to run an operation on a resource before CloudTrail has time
 *          to fully load the resource, or because another operation is modifying the resource. If this exception occurs, wait a few minutes, and then try the
 *          operation again.</p>
 *
 * @throws {@link InsufficientDependencyServiceAccessPermissionException} (client fault)
 *  <p>This exception is thrown when the IAM identity that is used to create
 *          the organization resource lacks one or more required permissions for creating an
 *          organization resource in a required service.</p>
 *
 * @throws {@link InvalidEventSelectorsException} (client fault)
 *  <p>This exception is thrown when the <code>PutEventSelectors</code> operation is called
 *          with a number of event selectors, advanced event selectors, or data resources that is not
 *          valid. The combination of event selectors or advanced event selectors and data resources is
 *          not valid. A trail can have up to 5 event selectors. If a trail uses advanced event
 *          selectors, a maximum of 500 total values for all conditions in all advanced event selectors
 *          is allowed. A trail is limited to 250 data resources. These data resources can be
 *          distributed across event selectors, but the overall total cannot exceed 250.</p>
 *          <p>You can:</p>
 *          <ul>
 *             <li>
 *                <p>Specify a valid number of event selectors (1 to 5) for a trail.</p>
 *             </li>
 *             <li>
 *                <p>Specify a valid number of data resources (1 to 250) for an event selector. The
 *                limit of number of resources on an individual event selector is configurable up to
 *                250. However, this upper limit is allowed only if the total number of data resources
 *                does not exceed 250 across all event selectors for a trail.</p>
 *             </li>
 *             <li>
 *                <p>Specify up to 500 values for all conditions in all advanced event selectors for a
 *                trail.</p>
 *             </li>
 *             <li>
 *                <p>Specify a valid value for a parameter. For example, specifying the
 *                   <code>ReadWriteType</code> parameter with a value of <code>read-only</code> is not
 *                valid.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidHomeRegionException} (client fault)
 *  <p>This exception is thrown when an operation is called on a trail from a Region other than
 *          the Region in which the trail was created.</p>
 *
 * @throws {@link InvalidTrailNameException} (client fault)
 *  <p>This exception is thrown when the provided trail name is not valid. Trail names must
 *          meet the following requirements:</p>
 *          <ul>
 *             <li>
 *                <p>Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores
 *                (_), or dashes (-)</p>
 *             </li>
 *             <li>
 *                <p>Start with a letter or number, and end with a letter or number</p>
 *             </li>
 *             <li>
 *                <p>Be between 3 and 128 characters</p>
 *             </li>
 *             <li>
 *                <p>Have no adjacent periods, underscores or dashes. Names like
 *                   <code>my-_namespace</code> and <code>my--namespace</code> are not valid.</p>
 *             </li>
 *             <li>
 *                <p>Not be in IP address format (for example, 192.168.5.4)</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *  <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 *
 * @throws {@link NotOrganizationMasterAccountException} (client fault)
 *  <p>This exception is thrown when the Amazon Web Services account making the request to
 *          create or update an organization trail or event data store is not the management account
 *          for an organization in Organizations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a> or <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-event-data-store.html">Create an event data store</a>.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link TrailNotFoundException} (client fault)
 *  <p>This exception is thrown when the trail with the given name is not found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 */
export class PutEventSelectorsCommand extends $Command<
  PutEventSelectorsCommandInput,
  PutEventSelectorsCommandOutput,
  CloudTrailClientResolvedConfig
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

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutEventSelectorsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "PutEventSelectorsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: PutEventSelectorsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutEventSelectorsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutEventSelectorsCommandOutput> {
    return de_PutEventSelectorsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
