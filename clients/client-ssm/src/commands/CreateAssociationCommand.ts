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
  CreateAssociationRequest,
  CreateAssociationRequestFilterSensitiveLog,
  CreateAssociationResult,
  CreateAssociationResultFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateAssociationCommand, se_CreateAssociationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAssociationCommand}.
 */
export interface CreateAssociationCommandInput extends CreateAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateAssociationCommand}.
 */
export interface CreateAssociationCommandOutput extends CreateAssociationResult, __MetadataBearer {}

/**
 * @public
 * <p>A State Manager association defines the state that you want to maintain on your managed
 *    nodes. For example, an association can specify that anti-virus software must be installed and
 *    running on your managed nodes, or that certain ports must be closed. For static targets, the
 *    association specifies a schedule for when the configuration is reapplied. For dynamic targets,
 *    such as an Amazon Web Services resource group or an Amazon Web Services autoscaling group, State Manager, a capability of
 *    Amazon Web Services Systems Manager applies the configuration when new managed nodes are added to the group. The
 *    association also specifies actions to take when applying the configuration. For example, an
 *    association for anti-virus software might run once a day. If the software isn't installed, then
 *    State Manager installs it. If the software is installed, but the service isn't running, then the
 *    association might instruct State Manager to start the service. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateAssociationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateAssociationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // CreateAssociationRequest
 *   Name: "STRING_VALUE", // required
 *   DocumentVersion: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 *   Parameters: { // Parameters
 *     "<keys>": [ // ParameterValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Targets: [ // Targets
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   ScheduleExpression: "STRING_VALUE",
 *   OutputLocation: { // InstanceAssociationOutputLocation
 *     S3Location: { // S3OutputLocation
 *       OutputS3Region: "STRING_VALUE",
 *       OutputS3BucketName: "STRING_VALUE",
 *       OutputS3KeyPrefix: "STRING_VALUE",
 *     },
 *   },
 *   AssociationName: "STRING_VALUE",
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
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
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
 * const command = new CreateAssociationCommand(input);
 * const response = await client.send(command);
 * // { // CreateAssociationResult
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
 * @param CreateAssociationCommandInput - {@link CreateAssociationCommandInput}
 * @returns {@link CreateAssociationCommandOutput}
 * @see {@link CreateAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateAssociationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AssociationAlreadyExists} (client fault)
 *  <p>The specified association already exists.</p>
 *
 * @throws {@link AssociationLimitExceeded} (client fault)
 *  <p>You can have at most 2,000 active associations.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
 *
 * @throws {@link InvalidDocumentVersion} (client fault)
 *  <p>The document version isn't valid or doesn't exist.</p>
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *  <p>The following problems can cause this exception:</p>
 *          <ul>
 *             <li>
 *                <p>You don't have permission to access the managed node.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Systems Manager Agent(SSM Agent) isn't running. Verify that SSM Agent is
 *      running.</p>
 *             </li>
 *             <li>
 *                <p>SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.</p>
 *             </li>
 *             <li>
 *                <p>The managed node isn't in valid state. Valid states are: <code>Running</code>,
 *       <code>Pending</code>, <code>Stopped</code>, and <code>Stopping</code>. Invalid states are:
 *       <code>Shutting-down</code> and <code>Terminated</code>.</p>
 *             </li>
 *          </ul>
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
 * @throws {@link InvalidTag} (client fault)
 *  <p>The specified tag key or value isn't valid.</p>
 *
 * @throws {@link InvalidTarget} (client fault)
 *  <p>The target isn't valid or doesn't exist. It might not be configured for Systems Manager or you might
 *    not have permission to perform the operation.</p>
 *
 * @throws {@link InvalidTargetMaps} (client fault)
 *  <p>TargetMap parameter isn't valid.</p>
 *
 * @throws {@link UnsupportedPlatformType} (client fault)
 *  <p>The document doesn't support the platform type of the given managed node ID(s). For example,
 *    you sent an document for a Windows managed node to a Linux node.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class CreateAssociationCommand extends $Command<
  CreateAssociationCommandInput,
  CreateAssociationCommandOutput,
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
  constructor(readonly input: CreateAssociationCommandInput) {
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
  ): Handler<CreateAssociationCommandInput, CreateAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "CreateAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAssociationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAssociationResultFilterSensitiveLog,
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
  private serialize(input: CreateAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAssociationCommandOutput> {
    return de_CreateAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
