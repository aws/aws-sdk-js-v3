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
import { DescribeVirtualGatewayInput, DescribeVirtualGatewayOutput } from "../models/models_0";
import { de_DescribeVirtualGatewayCommand, se_DescribeVirtualGatewayCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVirtualGatewayCommand}.
 */
export interface DescribeVirtualGatewayCommandInput extends DescribeVirtualGatewayInput {}
/**
 * @public
 *
 * The output of {@link DescribeVirtualGatewayCommand}.
 */
export interface DescribeVirtualGatewayCommandOutput extends DescribeVirtualGatewayOutput, __MetadataBearer {}

/**
 * @public
 * <p>Describes an existing virtual gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, DescribeVirtualGatewayCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, DescribeVirtualGatewayCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const input = { // DescribeVirtualGatewayInput
 *   virtualGatewayName: "STRING_VALUE", // required
 *   meshName: "STRING_VALUE", // required
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new DescribeVirtualGatewayCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVirtualGatewayOutput
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
 * @param DescribeVirtualGatewayCommandInput - {@link DescribeVirtualGatewayCommandInput}
 * @returns {@link DescribeVirtualGatewayCommandOutput}
 * @see {@link DescribeVirtualGatewayCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualGatewayCommandOutput} for command's `response` shape.
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
export class DescribeVirtualGatewayCommand extends $Command<
  DescribeVirtualGatewayCommandInput,
  DescribeVirtualGatewayCommandOutput,
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
  constructor(readonly input: DescribeVirtualGatewayCommandInput) {
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
  ): Handler<DescribeVirtualGatewayCommandInput, DescribeVirtualGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVirtualGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "DescribeVirtualGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AppMesh",
        operation: "DescribeVirtualGateway",
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
  private serialize(input: DescribeVirtualGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeVirtualGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVirtualGatewayCommandOutput> {
    return de_DescribeVirtualGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
