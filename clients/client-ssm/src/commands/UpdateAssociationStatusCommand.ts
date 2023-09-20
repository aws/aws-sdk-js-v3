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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  UpdateAssociationStatusRequest,
  UpdateAssociationStatusResult,
  UpdateAssociationStatusResultFilterSensitiveLog,
} from "../models/models_2";
import { de_UpdateAssociationStatusCommand, se_UpdateAssociationStatusCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateAssociationStatusCommand}.
 */
export interface UpdateAssociationStatusCommandInput extends UpdateAssociationStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAssociationStatusCommand}.
 */
export interface UpdateAssociationStatusCommandOutput extends UpdateAssociationStatusResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates the status of the Amazon Web Services Systems Manager document (SSM document) associated with the specified
 *    managed node.</p>
 *          <p>
 *             <code>UpdateAssociationStatus</code> is primarily used by the Amazon Web Services Systems Manager Agent (SSM Agent) to
 *    report status updates about your associations and is only used for associations created with the
 *     <code>InstanceId</code> legacy parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateAssociationStatusCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateAssociationStatusCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // UpdateAssociationStatusRequest
 *   Name: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   AssociationStatus: { // AssociationStatus
 *     Date: new Date("TIMESTAMP"), // required
 *     Name: "Pending" || "Success" || "Failed", // required
 *     Message: "STRING_VALUE", // required
 *     AdditionalInfo: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateAssociationStatusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAssociationStatusResult
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
 * @param UpdateAssociationStatusCommandInput - {@link UpdateAssociationStatusCommandInput}
 * @returns {@link UpdateAssociationStatusCommandOutput}
 * @see {@link UpdateAssociationStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAssociationStatusCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AssociationDoesNotExist} (client fault)
 *  <p>The specified association doesn't exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
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
 * @throws {@link StatusUnchanged} (client fault)
 *  <p>The updated status is the same as the current status.</p>
 *
 * @throws {@link TooManyUpdates} (client fault)
 *  <p>There are concurrent updates for a resource that supports one update at a time.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class UpdateAssociationStatusCommand extends $Command<
  UpdateAssociationStatusCommandInput,
  UpdateAssociationStatusCommandOutput,
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
  constructor(readonly input: UpdateAssociationStatusCommandInput) {
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
  ): Handler<UpdateAssociationStatusCommandInput, UpdateAssociationStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateAssociationStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateAssociationStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: UpdateAssociationStatusResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "UpdateAssociationStatus",
      },
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
  private serialize(input: UpdateAssociationStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateAssociationStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateAssociationStatusCommandOutput> {
    return de_UpdateAssociationStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
