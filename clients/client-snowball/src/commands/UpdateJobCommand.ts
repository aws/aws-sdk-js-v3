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

import { UpdateJobRequest, UpdateJobRequestFilterSensitiveLog, UpdateJobResult } from "../models/models_0";
import { de_UpdateJobCommand, se_UpdateJobCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateJobCommand}.
 */
export interface UpdateJobCommandInput extends UpdateJobRequest {}
/**
 * @public
 *
 * The output of {@link UpdateJobCommand}.
 */
export interface UpdateJobCommandOutput extends UpdateJobResult, __MetadataBearer {}

/**
 * @public
 * <p>While a job's <code>JobState</code> value is <code>New</code>, you can update some of
 *       the information associated with a job. Once the job changes to a different job state, usually
 *       within 60 minutes of the job being created, this action is no longer available.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, UpdateJobCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, UpdateJobCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // UpdateJobRequest
 *   JobId: "STRING_VALUE", // required
 *   RoleARN: "STRING_VALUE",
 *   Notification: { // Notification
 *     SnsTopicARN: "STRING_VALUE",
 *     JobStatesToNotify: [ // JobStateList
 *       "New" || "PreparingAppliance" || "PreparingShipment" || "InTransitToCustomer" || "WithCustomer" || "InTransitToAWS" || "WithAWSSortingFacility" || "WithAWS" || "InProgress" || "Complete" || "Cancelled" || "Listing" || "Pending",
 *     ],
 *     NotifyAll: true || false,
 *     DevicePickupSnsTopicARN: "STRING_VALUE",
 *   },
 *   Resources: { // JobResource
 *     S3Resources: [ // S3ResourceList
 *       { // S3Resource
 *         BucketArn: "STRING_VALUE",
 *         KeyRange: { // KeyRange
 *           BeginMarker: "STRING_VALUE",
 *           EndMarker: "STRING_VALUE",
 *         },
 *         TargetOnDeviceServices: [ // TargetOnDeviceServiceList
 *           { // TargetOnDeviceService
 *             ServiceName: "NFS_ON_DEVICE_SERVICE" || "S3_ON_DEVICE_SERVICE",
 *             TransferOption: "IMPORT" || "EXPORT" || "LOCAL_USE",
 *           },
 *         ],
 *       },
 *     ],
 *     LambdaResources: [ // LambdaResourceList
 *       { // LambdaResource
 *         LambdaArn: "STRING_VALUE",
 *         EventTriggers: [ // EventTriggerDefinitionList
 *           { // EventTriggerDefinition
 *             EventResourceARN: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     ],
 *     Ec2AmiResources: [ // Ec2AmiResourceList
 *       { // Ec2AmiResource
 *         AmiId: "STRING_VALUE", // required
 *         SnowballAmiId: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   OnDeviceServiceConfiguration: { // OnDeviceServiceConfiguration
 *     NFSOnDeviceService: { // NFSOnDeviceServiceConfiguration
 *       StorageLimit: Number("int"),
 *       StorageUnit: "TB",
 *     },
 *     TGWOnDeviceService: { // TGWOnDeviceServiceConfiguration
 *       StorageLimit: Number("int"),
 *       StorageUnit: "TB",
 *     },
 *     EKSOnDeviceService: { // EKSOnDeviceServiceConfiguration
 *       KubernetesVersion: "STRING_VALUE",
 *       EKSAnywhereVersion: "STRING_VALUE",
 *     },
 *     S3OnDeviceService: { // S3OnDeviceServiceConfiguration
 *       StorageLimit: Number("double"),
 *       StorageUnit: "TB",
 *       ServiceSize: Number("int"),
 *       FaultTolerance: Number("int"),
 *     },
 *   },
 *   AddressId: "STRING_VALUE",
 *   ShippingOption: "SECOND_DAY" || "NEXT_DAY" || "EXPRESS" || "STANDARD",
 *   Description: "STRING_VALUE",
 *   SnowballCapacityPreference: "T50" || "T80" || "T100" || "T42" || "T98" || "T8" || "T14" || "T32" || "NoPreference" || "T240" || "T13",
 *   ForwardingAddressId: "STRING_VALUE",
 *   PickupDetails: { // PickupDetails
 *     Name: "STRING_VALUE",
 *     PhoneNumber: "STRING_VALUE",
 *     Email: "STRING_VALUE",
 *     IdentificationNumber: "STRING_VALUE",
 *     IdentificationExpirationDate: new Date("TIMESTAMP"),
 *     IdentificationIssuingOrg: "STRING_VALUE",
 *     DevicePickupId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateJobCommandInput - {@link UpdateJobCommandInput}
 * @returns {@link UpdateJobCommandOutput}
 * @see {@link UpdateJobCommandInput} for command's `input` shape.
 * @see {@link UpdateJobCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link ClusterLimitExceededException} (client fault)
 *  <p>Job creation failed. Currently, clusters support five nodes. If you have fewer than
 *       five nodes for your cluster and you have more nodes to create for this cluster, try again and
 *       create jobs until your cluster has exactly five nodes.</p>
 *
 * @throws {@link Ec2RequestFailedException} (client fault)
 *  <p>Your user lacks the necessary Amazon EC2 permissions to perform the attempted
 *       action.</p>
 *
 * @throws {@link InvalidInputCombinationException} (client fault)
 *  <p>Job or cluster creation failed. One or more inputs were invalid. Confirm that the <a>CreateClusterRequest$SnowballType</a> value supports your <a>CreateJobRequest$JobType</a>, and try again.</p>
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *  <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link KMSRequestFailedException} (client fault)
 *  <p>The provided Key Management Service key lacks the permissions to perform the specified
 *         <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 * @example To update a job
 * ```javascript
 * // This action allows you to update certain parameters for a job. Once the job changes to a different job state, usually within 60 minutes of the job being created, this action is no longer available.
 * const input = {
 *   "AddressId": "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b",
 *   "Description": "updated-job-name",
 *   "JobId": "JID123e4567-e89b-12d3-a456-426655440000",
 *   "ShippingOption": "NEXT_DAY",
 *   "SnowballCapacityPreference": "T100"
 * };
 * const command = new UpdateJobCommand(input);
 * await client.send(command);
 * // example id: to-update-a-job-1482863556886
 * ```
 *
 */
export class UpdateJobCommand extends $Command<
  UpdateJobCommandInput,
  UpdateJobCommandOutput,
  SnowballClientResolvedConfig
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
  constructor(readonly input: UpdateJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SnowballClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateJobCommandInput, UpdateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateJobCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "UpdateJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIESnowballJobManagementService",
        operation: "UpdateJob",
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
  private serialize(input: UpdateJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateJobCommandOutput> {
    return de_UpdateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
