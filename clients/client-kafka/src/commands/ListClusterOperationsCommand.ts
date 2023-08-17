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

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListClusterOperationsRequest, ListClusterOperationsResponse } from "../models/models_0";
import { de_ListClusterOperationsCommand, se_ListClusterOperationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListClusterOperationsCommand}.
 */
export interface ListClusterOperationsCommandInput extends ListClusterOperationsRequest {}
/**
 * @public
 *
 * The output of {@link ListClusterOperationsCommand}.
 */
export interface ListClusterOperationsCommandOutput extends ListClusterOperationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all the operations that have been performed on the specified MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListClusterOperationsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListClusterOperationsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // ListClusterOperationsRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListClusterOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListClusterOperationsResponse
 * //   ClusterOperationInfoList: [ // __listOfClusterOperationInfo
 * //     { // ClusterOperationInfo
 * //       ClientRequestId: "STRING_VALUE",
 * //       ClusterArn: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       ErrorInfo: { // ErrorInfo
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorString: "STRING_VALUE",
 * //       },
 * //       OperationArn: "STRING_VALUE",
 * //       OperationState: "STRING_VALUE",
 * //       OperationSteps: [ // __listOfClusterOperationStep
 * //         { // ClusterOperationStep
 * //           StepInfo: { // ClusterOperationStepInfo
 * //             StepStatus: "STRING_VALUE",
 * //           },
 * //           StepName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OperationType: "STRING_VALUE",
 * //       SourceClusterInfo: { // MutableClusterInfo
 * //         BrokerEBSVolumeInfo: [ // __listOfBrokerEBSVolumeInfo
 * //           { // BrokerEBSVolumeInfo
 * //             KafkaBrokerNodeId: "STRING_VALUE", // required
 * //             ProvisionedThroughput: { // ProvisionedThroughput
 * //               Enabled: true || false,
 * //               VolumeThroughput: Number("int"),
 * //             },
 * //             VolumeSizeGB: Number("int"),
 * //           },
 * //         ],
 * //         ConfigurationInfo: { // ConfigurationInfo
 * //           Arn: "STRING_VALUE", // required
 * //           Revision: Number("long"), // required
 * //         },
 * //         NumberOfBrokerNodes: Number("int"),
 * //         EnhancedMonitoring: "DEFAULT" || "PER_BROKER" || "PER_TOPIC_PER_BROKER" || "PER_TOPIC_PER_PARTITION",
 * //         OpenMonitoring: { // OpenMonitoring
 * //           Prometheus: { // Prometheus
 * //             JmxExporter: { // JmxExporter
 * //               EnabledInBroker: true || false, // required
 * //             },
 * //             NodeExporter: { // NodeExporter
 * //               EnabledInBroker: true || false, // required
 * //             },
 * //           },
 * //         },
 * //         KafkaVersion: "STRING_VALUE",
 * //         LoggingInfo: { // LoggingInfo
 * //           BrokerLogs: { // BrokerLogs
 * //             CloudWatchLogs: { // CloudWatchLogs
 * //               Enabled: true || false, // required
 * //               LogGroup: "STRING_VALUE",
 * //             },
 * //             Firehose: { // Firehose
 * //               DeliveryStream: "STRING_VALUE",
 * //               Enabled: true || false, // required
 * //             },
 * //             S3: { // S3
 * //               Bucket: "STRING_VALUE",
 * //               Enabled: true || false, // required
 * //               Prefix: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         InstanceType: "STRING_VALUE",
 * //         ClientAuthentication: { // ClientAuthentication
 * //           Sasl: { // Sasl
 * //             Scram: { // Scram
 * //               Enabled: true || false,
 * //             },
 * //             Iam: { // Iam
 * //               Enabled: true || false,
 * //             },
 * //           },
 * //           Tls: { // Tls
 * //             CertificateAuthorityArnList: [ // __listOf__string
 * //               "STRING_VALUE",
 * //             ],
 * //             Enabled: true || false,
 * //           },
 * //           Unauthenticated: { // Unauthenticated
 * //             Enabled: true || false,
 * //           },
 * //         },
 * //         EncryptionInfo: { // EncryptionInfo
 * //           EncryptionAtRest: { // EncryptionAtRest
 * //             DataVolumeKMSKeyId: "STRING_VALUE", // required
 * //           },
 * //           EncryptionInTransit: { // EncryptionInTransit
 * //             ClientBroker: "TLS" || "TLS_PLAINTEXT" || "PLAINTEXT",
 * //             InCluster: true || false,
 * //           },
 * //         },
 * //         ConnectivityInfo: { // ConnectivityInfo
 * //           PublicAccess: { // PublicAccess
 * //             Type: "STRING_VALUE",
 * //           },
 * //           VpcConnectivity: { // VpcConnectivity
 * //             ClientAuthentication: { // VpcConnectivityClientAuthentication
 * //               Sasl: { // VpcConnectivitySasl
 * //                 Scram: { // VpcConnectivityScram
 * //                   Enabled: true || false,
 * //                 },
 * //                 Iam: { // VpcConnectivityIam
 * //                   Enabled: true || false,
 * //                 },
 * //               },
 * //               Tls: { // VpcConnectivityTls
 * //                 Enabled: true || false,
 * //               },
 * //             },
 * //           },
 * //         },
 * //         StorageMode: "LOCAL" || "TIERED",
 * //       },
 * //       TargetClusterInfo: {
 * //         BrokerEBSVolumeInfo: [
 * //           {
 * //             KafkaBrokerNodeId: "STRING_VALUE", // required
 * //             ProvisionedThroughput: {
 * //               Enabled: true || false,
 * //               VolumeThroughput: Number("int"),
 * //             },
 * //             VolumeSizeGB: Number("int"),
 * //           },
 * //         ],
 * //         ConfigurationInfo: {
 * //           Arn: "STRING_VALUE", // required
 * //           Revision: Number("long"), // required
 * //         },
 * //         NumberOfBrokerNodes: Number("int"),
 * //         EnhancedMonitoring: "DEFAULT" || "PER_BROKER" || "PER_TOPIC_PER_BROKER" || "PER_TOPIC_PER_PARTITION",
 * //         OpenMonitoring: {
 * //           Prometheus: {
 * //             JmxExporter: {
 * //               EnabledInBroker: true || false, // required
 * //             },
 * //             NodeExporter: {
 * //               EnabledInBroker: true || false, // required
 * //             },
 * //           },
 * //         },
 * //         KafkaVersion: "STRING_VALUE",
 * //         LoggingInfo: {
 * //           BrokerLogs: {
 * //             CloudWatchLogs: {
 * //               Enabled: true || false, // required
 * //               LogGroup: "STRING_VALUE",
 * //             },
 * //             Firehose: {
 * //               DeliveryStream: "STRING_VALUE",
 * //               Enabled: true || false, // required
 * //             },
 * //             S3: {
 * //               Bucket: "STRING_VALUE",
 * //               Enabled: true || false, // required
 * //               Prefix: "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //         InstanceType: "STRING_VALUE",
 * //         ClientAuthentication: {
 * //           Sasl: {
 * //             Scram: {
 * //               Enabled: true || false,
 * //             },
 * //             Iam: {
 * //               Enabled: true || false,
 * //             },
 * //           },
 * //           Tls: {
 * //             CertificateAuthorityArnList: [
 * //               "STRING_VALUE",
 * //             ],
 * //             Enabled: true || false,
 * //           },
 * //           Unauthenticated: {
 * //             Enabled: true || false,
 * //           },
 * //         },
 * //         EncryptionInfo: {
 * //           EncryptionAtRest: {
 * //             DataVolumeKMSKeyId: "STRING_VALUE", // required
 * //           },
 * //           EncryptionInTransit: {
 * //             ClientBroker: "TLS" || "TLS_PLAINTEXT" || "PLAINTEXT",
 * //             InCluster: true || false,
 * //           },
 * //         },
 * //         ConnectivityInfo: {
 * //           PublicAccess: {
 * //             Type: "STRING_VALUE",
 * //           },
 * //           VpcConnectivity: {
 * //             ClientAuthentication: {
 * //               Sasl: {
 * //                 Scram: {
 * //                   Enabled: true || false,
 * //                 },
 * //                 Iam: {
 * //                   Enabled: true || false,
 * //                 },
 * //               },
 * //               Tls: {
 * //                 Enabled: true || false,
 * //               },
 * //             },
 * //           },
 * //         },
 * //         StorageMode: "LOCAL" || "TIERED",
 * //       },
 * //       VpcConnectionInfo: { // VpcConnectionInfo
 * //         VpcConnectionArn: "STRING_VALUE",
 * //         Owner: "STRING_VALUE",
 * //         UserIdentity: { // UserIdentity
 * //           Type: "AWSACCOUNT" || "AWSSERVICE",
 * //           PrincipalId: "STRING_VALUE",
 * //         },
 * //         CreationTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClusterOperationsCommandInput - {@link ListClusterOperationsCommandInput}
 * @returns {@link ListClusterOperationsCommandOutput}
 * @see {@link ListClusterOperationsCommandInput} for command's `input` shape.
 * @see {@link ListClusterOperationsCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 */
export class ListClusterOperationsCommand extends $Command<
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput,
  KafkaClientResolvedConfig
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
  constructor(readonly input: ListClusterOperationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListClusterOperationsCommandInput, ListClusterOperationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListClusterOperationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "ListClusterOperationsCommand";
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
  private serialize(input: ListClusterOperationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListClusterOperationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListClusterOperationsCommandOutput> {
    return de_ListClusterOperationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
