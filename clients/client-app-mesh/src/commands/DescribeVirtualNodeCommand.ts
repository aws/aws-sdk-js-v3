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

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { DescribeVirtualNodeInput, DescribeVirtualNodeOutput } from "../models/models_0";
import { de_DescribeVirtualNodeCommand, se_DescribeVirtualNodeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVirtualNodeCommand}.
 */
export interface DescribeVirtualNodeCommandInput extends DescribeVirtualNodeInput {}
/**
 * @public
 *
 * The output of {@link DescribeVirtualNodeCommand}.
 */
export interface DescribeVirtualNodeCommandOutput extends DescribeVirtualNodeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Describes an existing virtual node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeVirtualNodeCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeVirtualNodeCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const input = { // DescribeVirtualNodeInput
 *   virtualNodeName: "STRING_VALUE", // required
 *   meshName: "STRING_VALUE", // required
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new DescribeVirtualNodeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVirtualNodeOutput
 * //   virtualNode: { // VirtualNodeData
 * //     meshName: "STRING_VALUE", // required
 * //     virtualNodeName: "STRING_VALUE", // required
 * //     spec: { // VirtualNodeSpec
 * //       serviceDiscovery: { // ServiceDiscovery Union: only one key present
 * //         dns: { // DnsServiceDiscovery
 * //           hostname: "STRING_VALUE", // required
 * //           responseType: "STRING_VALUE",
 * //           ipPreference: "STRING_VALUE",
 * //         },
 * //         awsCloudMap: { // AwsCloudMapServiceDiscovery
 * //           namespaceName: "STRING_VALUE", // required
 * //           serviceName: "STRING_VALUE", // required
 * //           attributes: [ // AwsCloudMapInstanceAttributes
 * //             { // AwsCloudMapInstanceAttribute
 * //               key: "STRING_VALUE", // required
 * //               value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           ipPreference: "STRING_VALUE",
 * //         },
 * //       },
 * //       listeners: [ // Listeners
 * //         { // Listener
 * //           portMapping: { // PortMapping
 * //             port: Number("int"), // required
 * //             protocol: "STRING_VALUE", // required
 * //           },
 * //           tls: { // ListenerTls
 * //             mode: "STRING_VALUE", // required
 * //             certificate: { // ListenerTlsCertificate Union: only one key present
 * //               acm: { // ListenerTlsAcmCertificate
 * //                 certificateArn: "STRING_VALUE", // required
 * //               },
 * //               file: { // ListenerTlsFileCertificate
 * //                 certificateChain: "STRING_VALUE", // required
 * //                 privateKey: "STRING_VALUE", // required
 * //               },
 * //               sds: { // ListenerTlsSdsCertificate
 * //                 secretName: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             validation: { // ListenerTlsValidationContext
 * //               trust: { // ListenerTlsValidationContextTrust Union: only one key present
 * //                 file: { // TlsValidationContextFileTrust
 * //                   certificateChain: "STRING_VALUE", // required
 * //                 },
 * //                 sds: { // TlsValidationContextSdsTrust
 * //                   secretName: "STRING_VALUE", // required
 * //                 },
 * //               },
 * //               subjectAlternativeNames: { // SubjectAlternativeNames
 * //                 match: { // SubjectAlternativeNameMatchers
 * //                   exact: [ // SubjectAlternativeNameList // required
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //             },
 * //           },
 * //           healthCheck: { // HealthCheckPolicy
 * //             timeoutMillis: Number("long"), // required
 * //             intervalMillis: Number("long"), // required
 * //             protocol: "STRING_VALUE", // required
 * //             port: Number("int"),
 * //             path: "STRING_VALUE",
 * //             healthyThreshold: Number("int"), // required
 * //             unhealthyThreshold: Number("int"), // required
 * //           },
 * //           timeout: { // ListenerTimeout Union: only one key present
 * //             tcp: { // TcpTimeout
 * //               idle: { // Duration
 * //                 value: Number("long"),
 * //                 unit: "STRING_VALUE",
 * //               },
 * //             },
 * //             http: { // HttpTimeout
 * //               perRequest: {
 * //                 value: Number("long"),
 * //                 unit: "STRING_VALUE",
 * //               },
 * //               idle: {
 * //                 value: Number("long"),
 * //                 unit: "STRING_VALUE",
 * //               },
 * //             },
 * //             http2: {
 * //               perRequest: {
 * //                 value: Number("long"),
 * //                 unit: "STRING_VALUE",
 * //               },
 * //               idle: {
 * //                 value: Number("long"),
 * //                 unit: "STRING_VALUE",
 * //               },
 * //             },
 * //             grpc: { // GrpcTimeout
 * //               perRequest: "<Duration>",
 * //               idle: "<Duration>",
 * //             },
 * //           },
 * //           outlierDetection: { // OutlierDetection
 * //             maxServerErrors: Number("long"), // required
 * //             interval: "<Duration>", // required
 * //             baseEjectionDuration: "<Duration>", // required
 * //             maxEjectionPercent: Number("int"), // required
 * //           },
 * //           connectionPool: { // VirtualNodeConnectionPool Union: only one key present
 * //             tcp: { // VirtualNodeTcpConnectionPool
 * //               maxConnections: Number("int"), // required
 * //             },
 * //             http: { // VirtualNodeHttpConnectionPool
 * //               maxConnections: Number("int"), // required
 * //               maxPendingRequests: Number("int"),
 * //             },
 * //             http2: { // VirtualNodeHttp2ConnectionPool
 * //               maxRequests: Number("int"), // required
 * //             },
 * //             grpc: { // VirtualNodeGrpcConnectionPool
 * //               maxRequests: Number("int"), // required
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       backends: [ // Backends
 * //         { // Backend Union: only one key present
 * //           virtualService: { // VirtualServiceBackend
 * //             virtualServiceName: "STRING_VALUE", // required
 * //             clientPolicy: { // ClientPolicy
 * //               tls: { // ClientPolicyTls
 * //                 enforce: true || false,
 * //                 ports: [ // PortSet
 * //                   Number("int"),
 * //                 ],
 * //                 certificate: { // ClientTlsCertificate Union: only one key present
 * //                   file: {
 * //                     certificateChain: "STRING_VALUE", // required
 * //                     privateKey: "STRING_VALUE", // required
 * //                   },
 * //                   sds: {
 * //                     secretName: "STRING_VALUE", // required
 * //                   },
 * //                 },
 * //                 validation: { // TlsValidationContext
 * //                   trust: { // TlsValidationContextTrust Union: only one key present
 * //                     acm: { // TlsValidationContextAcmTrust
 * //                       certificateAuthorityArns: [ // CertificateAuthorityArns // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                     file: {
 * //                       certificateChain: "STRING_VALUE", // required
 * //                     },
 * //                     sds: {
 * //                       secretName: "STRING_VALUE", // required
 * //                     },
 * //                   },
 * //                   subjectAlternativeNames: {
 * //                     match: {
 * //                       exact: [ // required
 * //                         "STRING_VALUE",
 * //                       ],
 * //                     },
 * //                   },
 * //                 },
 * //               },
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       backendDefaults: { // BackendDefaults
 * //         clientPolicy: {
 * //           tls: {
 * //             enforce: true || false,
 * //             ports: [
 * //               Number("int"),
 * //             ],
 * //             certificate: {//  Union: only one key present
 * //               file: {
 * //                 certificateChain: "STRING_VALUE", // required
 * //                 privateKey: "STRING_VALUE", // required
 * //               },
 * //               sds: {
 * //                 secretName: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             validation: {
 * //               trust: {//  Union: only one key present
 * //                 acm: {
 * //                   certificateAuthorityArns: [ // required
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 file: {
 * //                   certificateChain: "STRING_VALUE", // required
 * //                 },
 * //                 sds: {
 * //                   secretName: "STRING_VALUE", // required
 * //                 },
 * //               },
 * //               subjectAlternativeNames: {
 * //                 match: {
 * //                   exact: [ // required
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //             },
 * //           },
 * //         },
 * //       },
 * //       logging: { // Logging
 * //         accessLog: { // AccessLog Union: only one key present
 * //           file: { // FileAccessLog
 * //             path: "STRING_VALUE", // required
 * //             format: { // LoggingFormat Union: only one key present
 * //               text: "STRING_VALUE",
 * //               json: [ // JsonFormat
 * //                 { // JsonFormatRef
 * //                   key: "STRING_VALUE", // required
 * //                   value: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //     metadata: { // ResourceMetadata
 * //       arn: "STRING_VALUE", // required
 * //       version: Number("long"), // required
 * //       uid: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //       meshOwner: "STRING_VALUE", // required
 * //       resourceOwner: "STRING_VALUE", // required
 * //     },
 * //     status: { // VirtualNodeStatus
 * //       status: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeVirtualNodeCommandInput - {@link DescribeVirtualNodeCommandInput}
 * @returns {@link DescribeVirtualNodeCommandOutput}
 * @see {@link DescribeVirtualNodeCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualNodeCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request syntax was malformed. Check your request syntax and try again.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You don't have permissions to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified resource doesn't exist. Check your request syntax and try again.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed due to a temporary failure of the service.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for
 *          your account. For best results, use an increasing or variable sleep interval between
 *          requests.</p>
 *
 * @throws {@link AppMeshServiceException}
 * <p>Base exception class for all service exceptions from AppMesh service.</p>
 *
 */
export class DescribeVirtualNodeCommand extends $Command<
  DescribeVirtualNodeCommandInput,
  DescribeVirtualNodeCommandOutput,
  AppMeshClientResolvedConfig
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
  constructor(readonly input: DescribeVirtualNodeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppMeshClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeVirtualNodeCommandInput, DescribeVirtualNodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVirtualNodeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "DescribeVirtualNodeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AppMesh",
        operation: "DescribeVirtualNode",
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
  private serialize(input: DescribeVirtualNodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeVirtualNodeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVirtualNodeCommandOutput> {
    return de_DescribeVirtualNodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
