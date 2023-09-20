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

import { DescribeClusterRequest, DescribeClusterResult } from "../models/models_0";
import { de_DescribeClusterCommand, se_DescribeClusterCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterCommand}.
 */
export interface DescribeClusterCommandInput extends DescribeClusterRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClusterCommand}.
 */
export interface DescribeClusterCommandOutput extends DescribeClusterResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a specific cluster including shipping information, cluster
 *       status, and other important metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, DescribeClusterCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, DescribeClusterCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // DescribeClusterRequest
 *   ClusterId: "STRING_VALUE", // required
 * };
 * const command = new DescribeClusterCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClusterResult
 * //   ClusterMetadata: { // ClusterMetadata
 * //     ClusterId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     KmsKeyARN: "STRING_VALUE",
 * //     RoleARN: "STRING_VALUE",
 * //     ClusterState: "AwaitingQuorum" || "Pending" || "InUse" || "Complete" || "Cancelled",
 * //     JobType: "IMPORT" || "EXPORT" || "LOCAL_USE",
 * //     SnowballType: "STANDARD" || "EDGE" || "EDGE_C" || "EDGE_CG" || "EDGE_S" || "SNC1_HDD" || "SNC1_SSD" || "V3_5C" || "V3_5S" || "RACK_5U_C",
 * //     CreationDate: new Date("TIMESTAMP"),
 * //     Resources: { // JobResource
 * //       S3Resources: [ // S3ResourceList
 * //         { // S3Resource
 * //           BucketArn: "STRING_VALUE",
 * //           KeyRange: { // KeyRange
 * //             BeginMarker: "STRING_VALUE",
 * //             EndMarker: "STRING_VALUE",
 * //           },
 * //           TargetOnDeviceServices: [ // TargetOnDeviceServiceList
 * //             { // TargetOnDeviceService
 * //               ServiceName: "NFS_ON_DEVICE_SERVICE" || "S3_ON_DEVICE_SERVICE",
 * //               TransferOption: "IMPORT" || "EXPORT" || "LOCAL_USE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       LambdaResources: [ // LambdaResourceList
 * //         { // LambdaResource
 * //           LambdaArn: "STRING_VALUE",
 * //           EventTriggers: [ // EventTriggerDefinitionList
 * //             { // EventTriggerDefinition
 * //               EventResourceARN: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       Ec2AmiResources: [ // Ec2AmiResourceList
 * //         { // Ec2AmiResource
 * //           AmiId: "STRING_VALUE", // required
 * //           SnowballAmiId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //     AddressId: "STRING_VALUE",
 * //     ShippingOption: "SECOND_DAY" || "NEXT_DAY" || "EXPRESS" || "STANDARD",
 * //     Notification: { // Notification
 * //       SnsTopicARN: "STRING_VALUE",
 * //       JobStatesToNotify: [ // JobStateList
 * //         "New" || "PreparingAppliance" || "PreparingShipment" || "InTransitToCustomer" || "WithCustomer" || "InTransitToAWS" || "WithAWSSortingFacility" || "WithAWS" || "InProgress" || "Complete" || "Cancelled" || "Listing" || "Pending",
 * //       ],
 * //       NotifyAll: true || false,
 * //       DevicePickupSnsTopicARN: "STRING_VALUE",
 * //     },
 * //     ForwardingAddressId: "STRING_VALUE",
 * //     TaxDocuments: { // TaxDocuments
 * //       IND: { // INDTaxDocuments
 * //         GSTIN: "STRING_VALUE",
 * //       },
 * //     },
 * //     OnDeviceServiceConfiguration: { // OnDeviceServiceConfiguration
 * //       NFSOnDeviceService: { // NFSOnDeviceServiceConfiguration
 * //         StorageLimit: Number("int"),
 * //         StorageUnit: "TB",
 * //       },
 * //       TGWOnDeviceService: { // TGWOnDeviceServiceConfiguration
 * //         StorageLimit: Number("int"),
 * //         StorageUnit: "TB",
 * //       },
 * //       EKSOnDeviceService: { // EKSOnDeviceServiceConfiguration
 * //         KubernetesVersion: "STRING_VALUE",
 * //         EKSAnywhereVersion: "STRING_VALUE",
 * //       },
 * //       S3OnDeviceService: { // S3OnDeviceServiceConfiguration
 * //         StorageLimit: Number("double"),
 * //         StorageUnit: "TB",
 * //         ServiceSize: Number("int"),
 * //         FaultTolerance: Number("int"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeClusterCommandInput - {@link DescribeClusterCommandInput}
 * @returns {@link DescribeClusterCommandOutput}
 * @see {@link DescribeClusterCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 * @example To describe a cluster
 * ```javascript
 * // Returns information about a specific cluster including shipping information, cluster status, and other important metadata.
 * const input = {
 *   "ClusterId": "CID123e4567-e89b-12d3-a456-426655440000"
 * };
 * const command = new DescribeClusterCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ClusterMetadata": {
 *     "AddressId": "ADID1234ab12-3eec-4eb3-9be6-9374c10eb51b",
 *     "ClusterId": "CID123e4567-e89b-12d3-a456-426655440000",
 *     "ClusterState": "Pending",
 *     "CreationDate": "1480475517.0",
 *     "Description": "MyCluster",
 *     "JobType": "LOCAL_USE",
 *     "KmsKeyARN": "arn:aws:kms:us-east-1:123456789012:key/abcd1234-12ab-34cd-56ef-123456123456",
 *     "Notification": {
 *       "JobStatesToNotify": [],
 *       "NotifyAll": false
 *     },
 *     "Resources": {
 *       "S3Resources": [
 *         {
 *           "BucketArn": "arn:aws:s3:::MyBucket",
 *           "KeyRange": {}
 *         }
 *       ]
 *     },
 *     "RoleARN": "arn:aws:iam::123456789012:role/snowball-import-S3-role",
 *     "ShippingOption": "SECOND_DAY"
 *   }
 * }
 * *\/
 * // example id: to-describe-a-cluster-1482864218396
 * ```
 *
 */
export class DescribeClusterCommand extends $Command<
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput,
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
  constructor(readonly input: DescribeClusterCommandInput) {
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
  ): Handler<DescribeClusterCommandInput, DescribeClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SnowballClient";
    const commandName = "DescribeClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSIESnowballJobManagementService",
        operation: "DescribeCluster",
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
  private serialize(input: DescribeClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClusterCommandOutput> {
    return de_DescribeClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
