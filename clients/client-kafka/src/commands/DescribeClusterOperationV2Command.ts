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

import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { DescribeClusterOperationV2Request, DescribeClusterOperationV2Response } from "../models/models_0";
import { de_DescribeClusterOperationV2Command, se_DescribeClusterOperationV2Command } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterOperationV2Command}.
 */
export interface DescribeClusterOperationV2CommandInput extends DescribeClusterOperationV2Request {}
/**
 * @public
 *
 * The output of {@link DescribeClusterOperationV2Command}.
 */
export interface DescribeClusterOperationV2CommandOutput extends DescribeClusterOperationV2Response, __MetadataBearer {}

/**
 * @public
 * <p>Returns a description of the cluster operation specified by the ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeClusterOperationV2Command } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeClusterOperationV2Command } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // DescribeClusterOperationV2Request
 *   ClusterOperationArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeClusterOperationV2Command(input);
 * const response = await client.send(command);
 * // { // DescribeClusterOperationV2Response
 * //   ClusterOperationInfo: { // ClusterOperationV2
 * //     ClusterArn: "STRING_VALUE",
 * //     ClusterType: "PROVISIONED" || "SERVERLESS",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     ErrorInfo: { // ErrorInfo
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorString: "STRING_VALUE",
 * //     },
 * //     OperationArn: "STRING_VALUE",
 * //     OperationState: "STRING_VALUE",
 * //     OperationType: "STRING_VALUE",
 * //     Provisioned: { // ClusterOperationV2Provisioned
 * //       OperationSteps: [ // __listOfClusterOperationStep
 * //         { // ClusterOperationStep
 * //           StepInfo: { // ClusterOperationStepInfo
 * //             StepStatus: "STRING_VALUE",
 * //           },
 * //           StepName: "STRING_VALUE",
 * //         },
 * //       ],
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
 * //     Serverless: { // ClusterOperationV2Serverless
 * //       VpcConnectionInfo: { // VpcConnectionInfoServerless
 * //         CreationTime: new Date("TIMESTAMP"),
 * //         Owner: "STRING_VALUE",
 * //         UserIdentity: {
 * //           Type: "AWSACCOUNT" || "AWSSERVICE",
 * //           PrincipalId: "STRING_VALUE",
 * //         },
 * //         VpcConnectionArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeClusterOperationV2CommandInput - {@link DescribeClusterOperationV2CommandInput}
 * @returns {@link DescribeClusterOperationV2CommandOutput}
 * @see {@link DescribeClusterOperationV2CommandInput} for command's `input` shape.
 * @see {@link DescribeClusterOperationV2CommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 */
export class DescribeClusterOperationV2Command extends $Command<
  DescribeClusterOperationV2CommandInput,
  DescribeClusterOperationV2CommandOutput,
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
  constructor(readonly input: DescribeClusterOperationV2CommandInput) {
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
  ): Handler<DescribeClusterOperationV2CommandInput, DescribeClusterOperationV2CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClusterOperationV2Command.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "DescribeClusterOperationV2Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Kafka",
        operation: "DescribeClusterOperationV2",
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
  private serialize(input: DescribeClusterOperationV2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeClusterOperationV2Command(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeClusterOperationV2CommandOutput> {
    return de_DescribeClusterOperationV2Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
