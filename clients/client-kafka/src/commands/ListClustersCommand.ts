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
import { ListClustersRequest, ListClustersResponse } from "../models/models_0";
import { de_ListClustersCommand, se_ListClustersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListClustersCommand}.
 */
export interface ListClustersCommandInput extends ListClustersRequest {}
/**
 * @public
 *
 * The output of {@link ListClustersCommand}.
 */
export interface ListClustersCommandOutput extends ListClustersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of all the MSK clusters in the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListClustersCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListClustersCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // ListClustersRequest
 *   ClusterNameFilter: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListClustersCommand(input);
 * const response = await client.send(command);
 * // { // ListClustersResponse
 * //   ClusterInfoList: [ // __listOfClusterInfo
 * //     { // ClusterInfo
 * //       ActiveOperationArn: "STRING_VALUE",
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
 * //       ClusterArn: "STRING_VALUE",
 * //       ClusterName: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       CurrentBrokerSoftwareInfo: { // BrokerSoftwareInfo
 * //         ConfigurationArn: "STRING_VALUE",
 * //         ConfigurationRevision: Number("long"),
 * //         KafkaVersion: "STRING_VALUE",
 * //       },
 * //       CurrentVersion: "STRING_VALUE",
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
 * //       OpenMonitoring: { // OpenMonitoring
 * //         Prometheus: { // Prometheus
 * //           JmxExporter: { // JmxExporter
 * //             EnabledInBroker: true || false, // required
 * //           },
 * //           NodeExporter: { // NodeExporter
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
 * //       NumberOfBrokerNodes: Number("int"),
 * //       State: "ACTIVE" || "CREATING" || "DELETING" || "FAILED" || "HEALING" || "MAINTENANCE" || "REBOOTING_BROKER" || "UPDATING",
 * //       StateInfo: { // StateInfo
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       Tags: { // __mapOf__string
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ZookeeperConnectString: "STRING_VALUE",
 * //       ZookeeperConnectStringTls: "STRING_VALUE",
 * //       StorageMode: "LOCAL" || "TIERED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClustersCommandInput - {@link ListClustersCommandInput}
 * @returns {@link ListClustersCommandOutput}
 * @see {@link ListClustersCommandInput} for command's `input` shape.
 * @see {@link ListClustersCommandOutput} for command's `response` shape.
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
export class ListClustersCommand extends $Command<
  ListClustersCommandInput,
  ListClustersCommandOutput,
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
  constructor(readonly input: ListClustersCommandInput) {
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
  ): Handler<ListClustersCommandInput, ListClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListClustersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KafkaClient";
    const commandName = "ListClustersCommand";
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
  private serialize(input: ListClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListClustersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListClustersCommandOutput> {
    return de_ListClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
