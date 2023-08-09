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
import { DescribeClusterV2Request, DescribeClusterV2Response } from "../models/models_0";
import { de_DescribeClusterV2Command, se_DescribeClusterV2Command } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterV2Command}.
 */
export interface DescribeClusterV2CommandInput extends DescribeClusterV2Request {}
/**
 * @public
 *
 * The output of {@link DescribeClusterV2Command}.
 */
export interface DescribeClusterV2CommandOutput extends DescribeClusterV2Response, __MetadataBearer {}

/**
 * @public
 * <p>Returns a description of the MSK cluster whose Amazon Resource Name (ARN) is specified in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DescribeClusterV2Command } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DescribeClusterV2Command } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // DescribeClusterV2Request
 *   ClusterArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeClusterV2Command(input);
 * const response = await client.send(command);
 * // { // DescribeClusterV2Response
 * //   ClusterInfo: { // Cluster
 * //     ActiveOperationArn: "STRING_VALUE",
 * //     ClusterType: "PROVISIONED" || "SERVERLESS",
 * //     ClusterArn: "STRING_VALUE",
 * //     ClusterName: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     CurrentVersion: "STRING_VALUE",
 * //     State: "ACTIVE" || "CREATING" || "DELETING" || "FAILED" || "HEALING" || "MAINTENANCE" || "REBOOTING_BROKER" || "UPDATING",
 * //     StateInfo: { // StateInfo
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     Tags: { // __mapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Provisioned: { // Provisioned
 * //       BrokerNodeGroupInfo: { // BrokerNodeGroupInfo
 * //         BrokerAZDistribution: "DEFAULT",
 * //         ClientSubnets: [ // __listOf__string // required
 * //           "STRING_VALUE",
 * //         ],
 * //         InstanceType: "STRING_VALUE", // required
 * //         SecurityGroups: [
 * //           "STRING_VALUE",
 * //         ],
 * //         StorageInfo: { // StorageInfo
 * //           EbsStorageInfo: { // EBSStorageInfo
 * //             ProvisionedThroughput: { // ProvisionedThroughput
 * //               Enabled: true || false,
 * //               VolumeThroughput: Number("int"),
 * //             },
 * //             VolumeSize: Number("int"),
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
 * //         ZoneIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       CurrentBrokerSoftwareInfo: { // BrokerSoftwareInfo
 * //         ConfigurationArn: "STRING_VALUE",
 * //         ConfigurationRevision: Number("long"),
 * //         KafkaVersion: "STRING_VALUE",
 * //       },
 * //       ClientAuthentication: { // ClientAuthentication
 * //         Sasl: { // Sasl
 * //           Scram: { // Scram
 * //             Enabled: true || false,
 * //           },
 * //           Iam: { // Iam
 * //             Enabled: true || false,
 * //           },
 * //         },
 * //         Tls: { // Tls
 * //           CertificateAuthorityArnList: [
 * //             "STRING_VALUE",
 * //           ],
 * //           Enabled: true || false,
 * //         },
 * //         Unauthenticated: { // Unauthenticated
 * //           Enabled: true || false,
 * //         },
 * //       },
 * //       EncryptionInfo: { // EncryptionInfo
 * //         EncryptionAtRest: { // EncryptionAtRest
 * //           DataVolumeKMSKeyId: "STRING_VALUE", // required
 * //         },
 * //         EncryptionInTransit: { // EncryptionInTransit
 * //           ClientBroker: "TLS" || "TLS_PLAINTEXT" || "PLAINTEXT",
 * //           InCluster: true || false,
 * //         },
 * //       },
 * //       EnhancedMonitoring: "DEFAULT" || "PER_BROKER" || "PER_TOPIC_PER_BROKER" || "PER_TOPIC_PER_PARTITION",
 * //       OpenMonitoring: { // OpenMonitoringInfo
 * //         Prometheus: { // PrometheusInfo
 * //           JmxExporter: { // JmxExporterInfo
 * //             EnabledInBroker: true || false, // required
 * //           },
 * //           NodeExporter: { // NodeExporterInfo
 * //             EnabledInBroker: true || false, // required
 * //           },
 * //         },
 * //       },
 * //       LoggingInfo: { // LoggingInfo
 * //         BrokerLogs: { // BrokerLogs
 * //           CloudWatchLogs: { // CloudWatchLogs
 * //             Enabled: true || false, // required
 * //             LogGroup: "STRING_VALUE",
 * //           },
 * //           Firehose: { // Firehose
 * //             DeliveryStream: "STRING_VALUE",
 * //             Enabled: true || false, // required
 * //           },
 * //           S3: { // S3
 * //             Bucket: "STRING_VALUE",
 * //             Enabled: true || false, // required
 * //             Prefix: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       NumberOfBrokerNodes: Number("int"), // required
 * //       ZookeeperConnectString: "STRING_VALUE",
 * //       ZookeeperConnectStringTls: "STRING_VALUE",
 * //       StorageMode: "LOCAL" || "TIERED",
 * //     },
 * //     Serverless: { // Serverless
 * //       VpcConfigs: [ // __listOfVpcConfig // required
 * //         { // VpcConfig
 * //           SubnetIds: [ // required
 * //             "STRING_VALUE",
 * //           ],
 * //           SecurityGroupIds: "<__listOf__string>",
 * //         },
 * //       ],
 * //       ClientAuthentication: { // ServerlessClientAuthentication
 * //         Sasl: { // ServerlessSasl
 * //           Iam: {
 * //             Enabled: true || false,
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeClusterV2CommandInput - {@link DescribeClusterV2CommandInput}
 * @returns {@link DescribeClusterV2CommandOutput}
 * @see {@link DescribeClusterV2CommandInput} for command's `input` shape.
 * @see {@link DescribeClusterV2CommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 */
export class DescribeClusterV2Command extends $Command<
  DescribeClusterV2CommandInput,
  DescribeClusterV2CommandOutput,
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
  constructor(readonly input: DescribeClusterV2CommandInput) {
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
  ): Handler<DescribeClusterV2CommandInput, DescribeClusterV2CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeClusterV2Command.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "DescribeClusterV2Command";
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
  private serialize(input: DescribeClusterV2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeClusterV2Command(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeClusterV2CommandOutput> {
    return de_DescribeClusterV2Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
