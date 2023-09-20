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

import { DLMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DLMClient";
import { UpdateLifecyclePolicyRequest, UpdateLifecyclePolicyResponse } from "../models/models_0";
import { de_UpdateLifecyclePolicyCommand, se_UpdateLifecyclePolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateLifecyclePolicyCommand}.
 */
export interface UpdateLifecyclePolicyCommandInput extends UpdateLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLifecyclePolicyCommand}.
 */
export interface UpdateLifecyclePolicyCommandOutput extends UpdateLifecyclePolicyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates the specified lifecycle policy.</p>
 *          <p>For more information about updating a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#modify">Modify lifecycle
 * 			policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, UpdateLifecyclePolicyCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, UpdateLifecyclePolicyCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * const client = new DLMClient(config);
 * const input = { // UpdateLifecyclePolicyRequest
 *   PolicyId: "STRING_VALUE", // required
 *   ExecutionRoleArn: "STRING_VALUE",
 *   State: "ENABLED" || "DISABLED",
 *   Description: "STRING_VALUE",
 *   PolicyDetails: { // PolicyDetails
 *     PolicyType: "EBS_SNAPSHOT_MANAGEMENT" || "IMAGE_MANAGEMENT" || "EVENT_BASED_POLICY",
 *     ResourceTypes: [ // ResourceTypeValuesList
 *       "VOLUME" || "INSTANCE",
 *     ],
 *     ResourceLocations: [ // ResourceLocationList
 *       "CLOUD" || "OUTPOST",
 *     ],
 *     TargetTags: [ // TargetTagList
 *       { // Tag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *     Schedules: [ // ScheduleList
 *       { // Schedule
 *         Name: "STRING_VALUE",
 *         CopyTags: true || false,
 *         TagsToAdd: [ // TagsToAddList
 *           {
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *         VariableTags: [ // VariableTagsList
 *           {
 *             Key: "STRING_VALUE", // required
 *             Value: "STRING_VALUE", // required
 *           },
 *         ],
 *         CreateRule: { // CreateRule
 *           Location: "CLOUD" || "OUTPOST_LOCAL",
 *           Interval: Number("int"),
 *           IntervalUnit: "HOURS",
 *           Times: [ // TimesList
 *             "STRING_VALUE",
 *           ],
 *           CronExpression: "STRING_VALUE",
 *         },
 *         RetainRule: { // RetainRule
 *           Count: Number("int"),
 *           Interval: Number("int"),
 *           IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *         },
 *         FastRestoreRule: { // FastRestoreRule
 *           Count: Number("int"),
 *           Interval: Number("int"),
 *           IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *           AvailabilityZones: [ // AvailabilityZoneList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *         CrossRegionCopyRules: [ // CrossRegionCopyRules
 *           { // CrossRegionCopyRule
 *             TargetRegion: "STRING_VALUE",
 *             Target: "STRING_VALUE",
 *             Encrypted: true || false, // required
 *             CmkArn: "STRING_VALUE",
 *             CopyTags: true || false,
 *             RetainRule: { // CrossRegionCopyRetainRule
 *               Interval: Number("int"),
 *               IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *             },
 *             DeprecateRule: { // CrossRegionCopyDeprecateRule
 *               Interval: Number("int"),
 *               IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *             },
 *           },
 *         ],
 *         ShareRules: [ // ShareRules
 *           { // ShareRule
 *             TargetAccounts: [ // ShareTargetAccountList // required
 *               "STRING_VALUE",
 *             ],
 *             UnshareInterval: Number("int"),
 *             UnshareIntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *           },
 *         ],
 *         DeprecateRule: { // DeprecateRule
 *           Count: Number("int"),
 *           Interval: Number("int"),
 *           IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *         },
 *         ArchiveRule: { // ArchiveRule
 *           RetainRule: { // ArchiveRetainRule
 *             RetentionArchiveTier: { // RetentionArchiveTier
 *               Count: Number("int"),
 *               Interval: Number("int"),
 *               IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *             },
 *           },
 *         },
 *       },
 *     ],
 *     Parameters: { // Parameters
 *       ExcludeBootVolume: true || false,
 *       NoReboot: true || false,
 *       ExcludeDataVolumeTags: [ // ExcludeDataVolumeTagList
 *         "<Tag>",
 *       ],
 *     },
 *     EventSource: { // EventSource
 *       Type: "MANAGED_CWE", // required
 *       Parameters: { // EventParameters
 *         EventType: "shareSnapshot", // required
 *         SnapshotOwner: [ // SnapshotOwnerList // required
 *           "STRING_VALUE",
 *         ],
 *         DescriptionRegex: "STRING_VALUE", // required
 *       },
 *     },
 *     Actions: [ // ActionList
 *       { // Action
 *         Name: "STRING_VALUE", // required
 *         CrossRegionCopy: [ // CrossRegionCopyActionList // required
 *           { // CrossRegionCopyAction
 *             Target: "STRING_VALUE", // required
 *             EncryptionConfiguration: { // EncryptionConfiguration
 *               Encrypted: true || false, // required
 *               CmkArn: "STRING_VALUE",
 *             },
 *             RetainRule: {
 *               Interval: Number("int"),
 *               IntervalUnit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *             },
 *           },
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLifecyclePolicyCommandInput - {@link UpdateLifecyclePolicyCommandInput}
 * @returns {@link UpdateLifecyclePolicyCommandOutput}
 * @see {@link UpdateLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for DLMClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service failed in an unexpected way.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Bad request. The request is missing required parameters or has invalid
 * 			parameters.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because a limit was exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource was not found.</p>
 *
 * @throws {@link DLMServiceException}
 * <p>Base exception class for all service exceptions from DLM service.</p>
 *
 */
export class UpdateLifecyclePolicyCommand extends $Command<
  UpdateLifecyclePolicyCommandInput,
  UpdateLifecyclePolicyCommandOutput,
  DLMClientResolvedConfig
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
  constructor(readonly input: UpdateLifecyclePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DLMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateLifecyclePolicyCommandInput, UpdateLifecyclePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateLifecyclePolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DLMClient";
    const commandName = "UpdateLifecyclePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "dlm_20180112",
        operation: "UpdateLifecyclePolicy",
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
  private serialize(input: UpdateLifecyclePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateLifecyclePolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateLifecyclePolicyCommandOutput> {
    return de_UpdateLifecyclePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
