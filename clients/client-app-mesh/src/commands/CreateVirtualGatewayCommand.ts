// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVirtualGatewayInput, CreateVirtualGatewayOutput } from "../models/models_0";
import { CreateVirtualGateway$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateVirtualGatewayCommand}.
 */
export interface CreateVirtualGatewayCommandInput extends CreateVirtualGatewayInput {}
/**
 * @public
 *
 * The output of {@link CreateVirtualGatewayCommand}.
 */
export interface CreateVirtualGatewayCommandOutput extends CreateVirtualGatewayOutput, __MetadataBearer {}

/**
 * Creates a virtual gateway.
 *
 * A virtual gateway allows resources outside your mesh to communicate to resources that are inside your mesh. The virtual gateway represents an Envoy proxy running in an Amazon ECS task, in a Kubernetes service, or on an Amazon EC2 instance. Unlike a virtual node, which represents an Envoy running with an application, a virtual gateway represents Envoy deployed by itself.
 *
 * For more information about virtual gateways, see [Virtual gateways](https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_gateways.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateVirtualGatewayCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateVirtualGatewayCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * // import type { AppMeshClientConfig } from "@aws-sdk/client-app-mesh";
 * const config = {}; // type is AppMeshClientConfig
 * const client = new AppMeshClient(config);
 * const input = { // CreateVirtualGatewayInput
 *   virtualGatewayName: "STRING_VALUE", // required
 *   meshName: "STRING_VALUE", // required
 *   spec: { // VirtualGatewaySpec
 *     backendDefaults: { // VirtualGatewayBackendDefaults
 *       clientPolicy: { // VirtualGatewayClientPolicy
 *         tls: { // VirtualGatewayClientPolicyTls
 *           enforce: true || false,
 *           ports: [ // PortSet
 *             Number("int"),
 *           ],
 *           certificate: { // VirtualGatewayClientTlsCertificate Union: only one key present
 *             file: { // VirtualGatewayListenerTlsFileCertificate
 *               certificateChain: "STRING_VALUE", // required
 *               privateKey: "STRING_VALUE", // required
 *             },
 *             sds: { // VirtualGatewayListenerTlsSdsCertificate
 *               secretName: "STRING_VALUE", // required
 *             },
 *           },
 *           validation: { // VirtualGatewayTlsValidationContext
 *             trust: { // VirtualGatewayTlsValidationContextTrust Union: only one key present
 *               acm: { // VirtualGatewayTlsValidationContextAcmTrust
 *                 certificateAuthorityArns: [ // VirtualGatewayCertificateAuthorityArns // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *               file: { // VirtualGatewayTlsValidationContextFileTrust
 *                 certificateChain: "STRING_VALUE", // required
 *               },
 *               sds: { // VirtualGatewayTlsValidationContextSdsTrust
 *                 secretName: "STRING_VALUE", // required
 *               },
 *             },
 *             subjectAlternativeNames: { // SubjectAlternativeNames
 *               match: { // SubjectAlternativeNameMatchers
 *                 exact: [ // SubjectAlternativeNameList // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             },
 *           },
 *         },
 *       },
 *     },
 *     listeners: [ // VirtualGatewayListeners // required
 *       { // VirtualGatewayListener
 *         healthCheck: { // VirtualGatewayHealthCheckPolicy
 *           timeoutMillis: Number("long"), // required
 *           intervalMillis: Number("long"), // required
 *           protocol: "STRING_VALUE", // required
 *           port: Number("int"),
 *           path: "STRING_VALUE",
 *           healthyThreshold: Number("int"), // required
 *           unhealthyThreshold: Number("int"), // required
 *         },
 *         portMapping: { // VirtualGatewayPortMapping
 *           port: Number("int"), // required
 *           protocol: "STRING_VALUE", // required
 *         },
 *         tls: { // VirtualGatewayListenerTls
 *           mode: "STRING_VALUE", // required
 *           validation: { // VirtualGatewayListenerTlsValidationContext
 *             trust: { // VirtualGatewayListenerTlsValidationContextTrust Union: only one key present
 *               file: {
 *                 certificateChain: "STRING_VALUE", // required
 *               },
 *               sds: {
 *                 secretName: "STRING_VALUE", // required
 *               },
 *             },
 *             subjectAlternativeNames: {
 *               match: {
 *                 exact: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             },
 *           },
 *           certificate: { // VirtualGatewayListenerTlsCertificate Union: only one key present
 *             acm: { // VirtualGatewayListenerTlsAcmCertificate
 *               certificateArn: "STRING_VALUE", // required
 *             },
 *             file: {
 *               certificateChain: "STRING_VALUE", // required
 *               privateKey: "STRING_VALUE", // required
 *             },
 *             sds: {
 *               secretName: "STRING_VALUE", // required
 *             },
 *           },
 *         },
 *         connectionPool: { // VirtualGatewayConnectionPool Union: only one key present
 *           http: { // VirtualGatewayHttpConnectionPool
 *             maxConnections: Number("int"), // required
 *             maxPendingRequests: Number("int"),
 *           },
 *           http2: { // VirtualGatewayHttp2ConnectionPool
 *             maxRequests: Number("int"), // required
 *           },
 *           grpc: { // VirtualGatewayGrpcConnectionPool
 *             maxRequests: Number("int"), // required
 *           },
 *         },
 *       },
 *     ],
 *     logging: { // VirtualGatewayLogging
 *       accessLog: { // VirtualGatewayAccessLog Union: only one key present
 *         file: { // VirtualGatewayFileAccessLog
 *           path: "STRING_VALUE", // required
 *           format: { // LoggingFormat Union: only one key present
 *             text: "STRING_VALUE",
 *             json: [ // JsonFormat
 *               { // JsonFormatRef
 *                 key: "STRING_VALUE", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         },
 *       },
 *     },
 *   },
 *   tags: [ // TagList
 *     { // TagRef
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new CreateVirtualGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateVirtualGatewayOutput
 * //   virtualGateway: { // VirtualGatewayData
 * //     meshName: "STRING_VALUE", // required
 * //     virtualGatewayName: "STRING_VALUE", // required
 * //     spec: { // VirtualGatewaySpec
 * //       backendDefaults: { // VirtualGatewayBackendDefaults
 * //         clientPolicy: { // VirtualGatewayClientPolicy
 * //           tls: { // VirtualGatewayClientPolicyTls
 * //             enforce: true || false,
 * //             ports: [ // PortSet
 * //               Number("int"),
 * //             ],
 * //             certificate: { // VirtualGatewayClientTlsCertificate Union: only one key present
 * //               file: { // VirtualGatewayListenerTlsFileCertificate
 * //                 certificateChain: "STRING_VALUE", // required
 * //                 privateKey: "STRING_VALUE", // required
 * //               },
 * //               sds: { // VirtualGatewayListenerTlsSdsCertificate
 * //                 secretName: "STRING_VALUE", // required
 * //               },
 * //             },
 * //             validation: { // VirtualGatewayTlsValidationContext
 * //               trust: { // VirtualGatewayTlsValidationContextTrust Union: only one key present
 * //                 acm: { // VirtualGatewayTlsValidationContextAcmTrust
 * //                   certificateAuthorityArns: [ // VirtualGatewayCertificateAuthorityArns // required
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //                 file: { // VirtualGatewayTlsValidationContextFileTrust
 * //                   certificateChain: "STRING_VALUE", // required
 * //                 },
 * //                 sds: { // VirtualGatewayTlsValidationContextSdsTrust
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
 * //         },
 * //       },
 * //       listeners: [ // VirtualGatewayListeners // required
 * //         { // VirtualGatewayListener
 * //           healthCheck: { // VirtualGatewayHealthCheckPolicy
 * //             timeoutMillis: Number("long"), // required
 * //             intervalMillis: Number("long"), // required
 * //             protocol: "STRING_VALUE", // required
 * //             port: Number("int"),
 * //             path: "STRING_VALUE",
 * //             healthyThreshold: Number("int"), // required
 * //             unhealthyThreshold: Number("int"), // required
 * //           },
 * //           portMapping: { // VirtualGatewayPortMapping
 * //             port: Number("int"), // required
 * //             protocol: "STRING_VALUE", // required
 * //           },
 * //           tls: { // VirtualGatewayListenerTls
 * //             mode: "STRING_VALUE", // required
 * //             validation: { // VirtualGatewayListenerTlsValidationContext
 * //               trust: { // VirtualGatewayListenerTlsValidationContextTrust Union: only one key present
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
 * //             certificate: { // VirtualGatewayListenerTlsCertificate Union: only one key present
 * //               acm: { // VirtualGatewayListenerTlsAcmCertificate
 * //                 certificateArn: "STRING_VALUE", // required
 * //               },
 * //               file: {
 * //                 certificateChain: "STRING_VALUE", // required
 * //                 privateKey: "STRING_VALUE", // required
 * //               },
 * //               sds: {
 * //                 secretName: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           },
 * //           connectionPool: { // VirtualGatewayConnectionPool Union: only one key present
 * //             http: { // VirtualGatewayHttpConnectionPool
 * //               maxConnections: Number("int"), // required
 * //               maxPendingRequests: Number("int"),
 * //             },
 * //             http2: { // VirtualGatewayHttp2ConnectionPool
 * //               maxRequests: Number("int"), // required
 * //             },
 * //             grpc: { // VirtualGatewayGrpcConnectionPool
 * //               maxRequests: Number("int"), // required
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       logging: { // VirtualGatewayLogging
 * //         accessLog: { // VirtualGatewayAccessLog Union: only one key present
 * //           file: { // VirtualGatewayFileAccessLog
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
 * //     status: { // VirtualGatewayStatus
 * //       status: "STRING_VALUE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVirtualGatewayCommandInput - {@link CreateVirtualGatewayCommandInput}
 * @returns {@link CreateVirtualGatewayCommandOutput}
 * @see {@link CreateVirtualGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualGatewayCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request syntax was malformed. Check your request syntax and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request contains a client token that was used for a previous update resource call with different specifications. Try the request again with a new client token.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You don't have permissions to perform this action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You have exceeded a service limit for your account. For more information, see [Service Limits](https://docs.aws.amazon.com/app-mesh/latest/userguide/service-quotas.html) in the *App Mesh User Guide*.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified resource doesn't exist. Check your request syntax and try again.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request has failed due to a temporary failure of the service.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The maximum request rate permitted by the App Mesh APIs has been exceeded for your account. For best results, use an increasing or variable sleep interval between requests.
 *
 * @throws {@link AppMeshServiceException}
 *
 * Base exception class for all service exceptions from AppMesh service.
 *
 * @public
 */
export class CreateVirtualGatewayCommand extends command<CreateVirtualGatewayCommandInput, CreateVirtualGatewayCommandOutput>(
  _ep0,
  _mw0,
  "CreateVirtualGateway",
  CreateVirtualGateway$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVirtualGatewayInput;
      output: CreateVirtualGatewayOutput;
    };
    sdk: {
      input: CreateVirtualGatewayCommandInput;
      output: CreateVirtualGatewayCommandOutput;
    };
  };
}
