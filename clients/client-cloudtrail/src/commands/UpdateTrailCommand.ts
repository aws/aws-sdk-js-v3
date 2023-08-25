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
import { UpdateTrailRequest, UpdateTrailResponse } from "../models/models_0";
import { de_UpdateTrailCommand, se_UpdateTrailCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateTrailCommand}.
 */
export interface UpdateTrailCommandInput extends UpdateTrailRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTrailCommand}.
 */
export interface UpdateTrailCommandOutput extends UpdateTrailResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates trail settings that control what events you are logging, and how to handle log
 *          files. Changes to a trail do not require stopping the CloudTrail service. Use this
 *          action to designate an existing bucket for log delivery. If the existing bucket has
 *          previously been a target for CloudTrail log files, an IAM policy
 *          exists for the bucket. <code>UpdateTrail</code> must be called from the Region in which the
 *          trail was created; otherwise, an <code>InvalidHomeRegionException</code> is thrown.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, UpdateTrailCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, UpdateTrailCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const input = { // UpdateTrailRequest
 *   Name: "STRING_VALUE", // required
 *   S3BucketName: "STRING_VALUE",
 *   S3KeyPrefix: "STRING_VALUE",
 *   SnsTopicName: "STRING_VALUE",
 *   IncludeGlobalServiceEvents: true || false,
 *   IsMultiRegionTrail: true || false,
 *   EnableLogFileValidation: true || false,
 *   CloudWatchLogsLogGroupArn: "STRING_VALUE",
 *   CloudWatchLogsRoleArn: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   IsOrganizationTrail: true || false,
 * };
 * const command = new UpdateTrailCommand(input);
 * const response = await client.send(command);
 * // { // UpdateTrailResponse
 * //   Name: "STRING_VALUE",
 * //   S3BucketName: "STRING_VALUE",
 * //   S3KeyPrefix: "STRING_VALUE",
 * //   SnsTopicName: "STRING_VALUE",
 * //   SnsTopicARN: "STRING_VALUE",
 * //   IncludeGlobalServiceEvents: true || false,
 * //   IsMultiRegionTrail: true || false,
 * //   TrailARN: "STRING_VALUE",
 * //   LogFileValidationEnabled: true || false,
 * //   CloudWatchLogsLogGroupArn: "STRING_VALUE",
 * //   CloudWatchLogsRoleArn: "STRING_VALUE",
 * //   KmsKeyId: "STRING_VALUE",
 * //   IsOrganizationTrail: true || false,
 * // };
 *
 * ```
 *
 * @param UpdateTrailCommandInput - {@link UpdateTrailCommandInput}
 * @returns {@link UpdateTrailCommandOutput}
 * @see {@link UpdateTrailCommandInput} for command's `input` shape.
 * @see {@link UpdateTrailCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link CloudTrailAccessNotEnabledException} (client fault)
 *  <p>This exception is thrown when trusted access has not been enabled between CloudTrail and Organizations. For more information, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services.html">Enabling Trusted Access with Other Amazon Web Services Services</a> and <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html">Prepare For Creating a Trail For Your Organization</a>. </p>
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
 * @throws {@link CloudTrailInvalidClientTokenIdException} (client fault)
 *  <p>This exception is thrown when a call results in the <code>InvalidClientTokenId</code>
 *          error code. This can occur when you are creating or updating a trail to send notifications
 *          to an Amazon SNS topic that is in a suspended Amazon Web Services account.</p>
 *
 * @throws {@link CloudWatchLogsDeliveryUnavailableException} (client fault)
 *  <p>Cannot set a CloudWatch Logs delivery for this Region.</p>
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
 * @throws {@link InsufficientEncryptionPolicyException} (client fault)
 *  <p>This exception is thrown when the policy on the S3 bucket or KMS key does
 *          not have sufficient permissions for the operation.</p>
 *
 * @throws {@link InsufficientS3BucketPolicyException} (client fault)
 *  <p>This exception is thrown when the policy on the S3 bucket is not sufficient.</p>
 *
 * @throws {@link InsufficientSnsTopicPolicyException} (client fault)
 *  <p>This exception is thrown when the policy on the Amazon SNS topic is not
 *          sufficient.</p>
 *
 * @throws {@link InvalidCloudWatchLogsLogGroupArnException} (client fault)
 *  <p>This exception is thrown when the provided CloudWatch Logs log group is not
 *          valid.</p>
 *
 * @throws {@link InvalidCloudWatchLogsRoleArnException} (client fault)
 *  <p>This exception is thrown when the provided role is not valid.</p>
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
 * @throws {@link InvalidKmsKeyIdException} (client fault)
 *  <p>This exception is thrown when the KMS key ARN is not valid.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>This exception is thrown when the combination of parameters provided is not
 *          valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link InvalidS3BucketNameException} (client fault)
 *  <p>This exception is thrown when the provided S3 bucket name is not valid.</p>
 *
 * @throws {@link InvalidS3PrefixException} (client fault)
 *  <p>This exception is thrown when the provided S3 prefix is not valid.</p>
 *
 * @throws {@link InvalidSnsTopicNameException} (client fault)
 *  <p>This exception is thrown when the provided SNS topic name is not valid.</p>
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
 * @throws {@link KmsException} (client fault)
 *  <p>This exception is thrown when there is an issue with the specified KMS
 *          key and the trail or event data store can't be updated.</p>
 *
 * @throws {@link KmsKeyDisabledException} (client fault)
 *  <p>This exception is no longer in use.</p>
 *
 * @throws {@link KmsKeyNotFoundException} (client fault)
 *  <p>This exception is thrown when the KMS key does not exist, when the S3
 *          bucket and the KMS key are not in the same Region, or when the KMS key associated with the Amazon SNS topic either does not exist or is
 *          not in the same Region.</p>
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
 * @throws {@link OrganizationNotInAllFeaturesModeException} (client fault)
 *  <p>This exception is thrown when Organizations is not configured to support all
 *          features. All features must be enabled in Organizations to support creating an
 *          organization trail or event data store.</p>
 *
 * @throws {@link OrganizationsNotInUseException} (client fault)
 *  <p>This exception is thrown when the request is made from an Amazon Web Services account
 *          that is not a member of an organization. To make this request, sign in using the
 *          credentials of an account that belongs to an organization.</p>
 *
 * @throws {@link S3BucketDoesNotExistException} (client fault)
 *  <p>This exception is thrown when the specified S3 bucket does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          This exception is thrown when the request rate exceeds the limit.
 *       </p>
 *
 * @throws {@link TrailNotFoundException} (client fault)
 *  <p>This exception is thrown when the trail with the given name is not found.</p>
 *
 * @throws {@link TrailNotProvidedException} (client fault)
 *  <p>This exception is no longer in use.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 */
export class UpdateTrailCommand extends $Command<
  UpdateTrailCommandInput,
  UpdateTrailCommandOutput,
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
  constructor(readonly input: UpdateTrailCommandInput) {
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
  ): Handler<UpdateTrailCommandInput, UpdateTrailCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateTrailCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "UpdateTrailCommand";
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
  private serialize(input: UpdateTrailCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateTrailCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateTrailCommandOutput> {
    return de_UpdateTrailCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
