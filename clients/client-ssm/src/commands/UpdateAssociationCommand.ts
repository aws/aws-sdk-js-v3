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

import {
  UpdateAssociationRequest,
  UpdateAssociationRequestFilterSensitiveLog,
  UpdateAssociationResult,
  UpdateAssociationResultFilterSensitiveLog,
} from "../models/models_2";
import { de_UpdateAssociationCommand, se_UpdateAssociationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAssociationCommand}.
 */
export interface UpdateAssociationCommandInput extends UpdateAssociationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssociationCommand}.
 */
export interface UpdateAssociationCommandOutput extends UpdateAssociationResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates an association. You can update the association name and version, the document
 *    version, schedule, parameters, and Amazon Simple Storage Service (Amazon S3) output. When you
 *    call <code>UpdateAssociation</code>, the system removes all optional parameters from the request
 *    and overwrites the association with null values for those parameters. This is by design. You must
 *    specify all optional parameters in the call, even if you are not changing the parameters. This
 *    includes the <code>Name</code> parameter. Before calling this API action, we recommend that you
 *    call the <a>DescribeAssociation</a> API operation and make a note of all optional
 *    parameters required for your <code>UpdateAssociation</code> call.</p>
 *          <p>In order to call this API operation, a user, group, or role must be granted permission to
 *    call the <a>DescribeAssociation</a> API operation. If you don't have permission to
 *    call <code>DescribeAssociation</code>, then you receive the following error: <code>An error
 *     occurred (AccessDeniedException) when calling the UpdateAssociation operation: User:
 *     <user_arn> isn't authorized to perform: ssm:DescribeAssociation on resource:
 *     <resource_arn></code>
 *          </p>
 *          <important>
 *             <p>When you update an association, the association immediately runs against the specified
 *     targets. You can add the <code>ApplyOnlyAtCronInterval</code> parameter to run the association
 *     during the next schedule run.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateAssociationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateAssociationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // UpdateAssociationRequest
 *   AssociationId: "STRING_VALUE", // required
 *   Parameters: { // Parameters
 *     "<keys>": [ // ParameterValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   DocumentVersion: "STRING_VALUE",
 *   ScheduleExpression: "STRING_VALUE",
 *   OutputLocation: { // InstanceAssociationOutputLocation
 *     S3Location: { // S3OutputLocation
 *       OutputS3Region: "STRING_VALUE",
 *       OutputS3BucketName: "STRING_VALUE",
 *       OutputS3KeyPrefix: "STRING_VALUE",
 *     },
 *   },
 *   Name: "STRING_VALUE",
 *   Targets: [ // Targets
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   AssociationName: "STRING_VALUE",
 *   AssociationVersion: "STRING_VALUE",
 *   AutomationTargetParameterName: "STRING_VALUE",
 *   MaxErrors: "STRING_VALUE",
 *   MaxConcurrency: "STRING_VALUE",
 *   ComplianceSeverity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "UNSPECIFIED",
 *   SyncCompliance: "AUTO" || "MANUAL",
 *   ApplyOnlyAtCronInterval: true || false,
 *   CalendarNames: [ // CalendarNameOrARNList
 *     "STRING_VALUE",
 *   ],
 *   TargetLocations: [ // TargetLocations
 *     { // TargetLocation
 *       Accounts: [ // Accounts
 *         "STRING_VALUE",
 *       ],
 *       Regions: [ // Regions
 *         "STRING_VALUE",
 *       ],
 *       TargetLocationMaxConcurrency: "STRING_VALUE",
 *       TargetLocationMaxErrors: "STRING_VALUE",
 *       ExecutionRoleName: "STRING_VALUE",
 *       TargetLocationAlarmConfiguration: { // AlarmConfiguration
 *         IgnorePollAlarmFailure: true || false,
 *         Alarms: [ // AlarmList // required
 *           { // Alarm
 *             Name: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *     },
 *   ],
 *   ScheduleOffset: Number("int"),
 *   TargetMaps: [ // TargetMaps
 *     { // TargetMap
 *       "<keys>": [ // TargetMapValueList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   AlarmConfiguration: {
 *     IgnorePollAlarmFailure: true || false,
 *     Alarms: [ // required
 *       {
 *         Name: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateAssociationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssociationResult
 * //   AssociationDescription: { // AssociationDescription
 * //     Name: "STRING_VALUE",
 * //     InstanceId: "STRING_VALUE",
 * //     AssociationVersion: "STRING_VALUE",
 * //     Date: new Date("TIMESTAMP"),
 * //     LastUpdateAssociationDate: new Date("TIMESTAMP"),
 * //     Status: { // AssociationStatus
 * //       Date: new Date("TIMESTAMP"), // required
 * //       Name: "Pending" || "Success" || "Failed", // required
 * //       Message: "STRING_VALUE", // required
 * //       AdditionalInfo: "STRING_VALUE",
 * //     },
 * //     Overview: { // AssociationOverview
 * //       Status: "STRING_VALUE",
 * //       DetailedStatus: "STRING_VALUE",
 * //       AssociationStatusAggregatedCount: { // AssociationStatusAggregatedCount
 * //         "<keys>": Number("int"),
 * //       },
 * //     },
 * //     DocumentVersion: "STRING_VALUE",
 * //     AutomationTargetParameterName: "STRING_VALUE",
 * //     Parameters: { // Parameters
 * //       "<keys>": [ // ParameterValueList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     AssociationId: "STRING_VALUE",
 * //     Targets: [ // Targets
 * //       { // Target
 * //         Key: "STRING_VALUE",
 * //         Values: [ // TargetValues
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     ScheduleExpression: "STRING_VALUE",
 * //     OutputLocation: { // InstanceAssociationOutputLocation
 * //       S3Location: { // S3OutputLocation
 * //         OutputS3Region: "STRING_VALUE",
 * //         OutputS3BucketName: "STRING_VALUE",
 * //         OutputS3KeyPrefix: "STRING_VALUE",
 * //       },
 * //     },
 * //     LastExecutionDate: new Date("TIMESTAMP"),
 * //     LastSuccessfulExecutionDate: new Date("TIMESTAMP"),
 * //     AssociationName: "STRING_VALUE",
 * //     MaxErrors: "STRING_VALUE",
 * //     MaxConcurrency: "STRING_VALUE",
 * //     ComplianceSeverity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "UNSPECIFIED",
 * //     SyncCompliance: "AUTO" || "MANUAL",
 * //     ApplyOnlyAtCronInterval: true || false,
 * //     CalendarNames: [ // CalendarNameOrARNList
 * //       "STRING_VALUE",
 * //     ],
 * //     TargetLocations: [ // TargetLocations
 * //       { // TargetLocation
 * //         Accounts: [ // Accounts
 * //           "STRING_VALUE",
 * //         ],
 * //         Regions: [ // Regions
 * //           "STRING_VALUE",
 * //         ],
 * //         TargetLocationMaxConcurrency: "STRING_VALUE",
 * //         TargetLocationMaxErrors: "STRING_VALUE",
 * //         ExecutionRoleName: "STRING_VALUE",
 * //         TargetLocationAlarmConfiguration: { // AlarmConfiguration
 * //           IgnorePollAlarmFailure: true || false,
 * //           Alarms: [ // AlarmList // required
 * //             { // Alarm
 * //               Name: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     ScheduleOffset: Number("int"),
 * //     TargetMaps: [ // TargetMaps
 * //       { // TargetMap
 * //         "<keys>": [ // TargetMapValueList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     AlarmConfiguration: {
 * //       IgnorePollAlarmFailure: true || false,
 * //       Alarms: [ // required
 * //         {
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     TriggeredAlarms: [ // AlarmStateInformationList
 * //       { // AlarmStateInformation
 * //         Name: "STRING_VALUE", // required
 * //         State: "UNKNOWN" || "ALARM", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAssociationCommandInput - {@link UpdateAssociationCommandInput}
 * @returns {@link UpdateAssociationCommandOutput}
 * @see {@link UpdateAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateAssociationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AssociationDoesNotExist} (client fault)
 *  <p>The specified association doesn't exist.</p>
 *
 * @throws {@link AssociationVersionLimitExceeded} (client fault)
 *  <p>You have reached the maximum number versions allowed for an association. Each association
 *    has a limit of 1,000 versions. </p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidAssociationVersion} (client fault)
 *  <p>The version you specified isn't valid. Use ListAssociationVersions to view all versions of
 *    an association according to the association ID. Or, use the <code>$LATEST</code> parameter to
 *    view the latest version of the association.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidDocumentVersion} (client fault)
 *  <p>The document version isn't valid or doesn't exist.</p>
 *
 * @throws {@link InvalidOutputLocation} (client fault)
 *  <p>The output location isn't valid or doesn't exist.</p>
 *
 * @throws {@link InvalidParameters} (client fault)
 *  <p>You must specify values for all required parameters in the Amazon Web Services Systems Manager document (SSM
 *    document). You can only supply values to parameters defined in the SSM document.</p>
 *
 * @throws {@link InvalidSchedule} (client fault)
 *  <p>The schedule is invalid. Verify your cron or rate expression and try again.</p>
 *
 * @throws {@link InvalidTarget} (client fault)
 *  <p>The target isn't valid or doesn't exist. It might not be configured for Systems Manager or you might
 *    not have permission to perform the operation.</p>
 *
 * @throws {@link InvalidTargetMaps} (client fault)
 *  <p>TargetMap parameter isn't valid.</p>
 *
 * @throws {@link InvalidUpdate} (client fault)
 *  <p>The update isn't valid.</p>
 *
 * @throws {@link TooManyUpdates} (client fault)
 *  <p>There are concurrent updates for a resource that supports one update at a time.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class UpdateAssociationCommand extends $Command<
  UpdateAssociationCommandInput,
  UpdateAssociationCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: UpdateAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateAssociationCommandInput, UpdateAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateAssociationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateAssociationResultFilterSensitiveLog,
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
  private serialize(input: UpdateAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAssociationCommandOutput> {
    return de_UpdateAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
