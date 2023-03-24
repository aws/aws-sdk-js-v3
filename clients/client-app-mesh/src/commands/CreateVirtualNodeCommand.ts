// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AppMeshClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppMeshClient";
import { CreateVirtualNodeInput, CreateVirtualNodeOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateVirtualNodeCommand,
  serializeAws_restJson1CreateVirtualNodeCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateVirtualNodeCommand}.
 */
export interface CreateVirtualNodeCommandInput extends CreateVirtualNodeInput {}
/**
 * @public
 *
 * The output of {@link CreateVirtualNodeCommand}.
 */
export interface CreateVirtualNodeCommandOutput extends CreateVirtualNodeOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a virtual node within a service mesh.</p>
 *          <p> A virtual node acts as a logical pointer to a particular task group, such as an Amazon ECS service or a Kubernetes deployment. When you create a virtual node, you can
 *          specify the service discovery information for your task group, and whether the proxy
 *          running in a task group will communicate with other proxies using Transport Layer Security
 *          (TLS).</p>
 *          <p>You define a <code>listener</code> for any inbound traffic that your virtual node
 *          expects. Any virtual service that your virtual node expects to communicate to is specified
 *          as a <code>backend</code>.</p>
 *          <p>The response metadata for your new virtual node contains the <code>arn</code> that is
 *          associated with the virtual node. Set this value to the full ARN; for example,
 *             <code>arn:aws:appmesh:us-west-2:123456789012:myMesh/default/virtualNode/myApp</code>)
 *          as the <code>APPMESH_RESOURCE_ARN</code> environment variable for your task group's Envoy
 *          proxy container in your task definition or pod spec. This is then mapped to the
 *             <code>node.id</code> and <code>node.cluster</code> Envoy parameters.</p>
 *          <note>
 *             <p>By default, App Mesh uses the name of the resource you specified in
 *                <code>APPMESH_RESOURCE_ARN</code> when Envoy is referring to itself in metrics and
 *             traces. You can override this behavior by setting the
 *                <code>APPMESH_RESOURCE_CLUSTER</code> environment variable with your own name.</p>
 *          </note>
 *          <p>For more information about virtual nodes, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/virtual_nodes.html">Virtual nodes</a>. You must be using <code>1.15.0</code> or later of the Envoy image when
 *          setting these variables. For more information aboutApp Mesh Envoy variables, see
 *             <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/envoy.html">Envoy
 *             image</a> in the App Mesh User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppMeshClient, CreateVirtualNodeCommand } from "@aws-sdk/client-app-mesh"; // ES Modules import
 * // const { AppMeshClient, CreateVirtualNodeCommand } = require("@aws-sdk/client-app-mesh"); // CommonJS import
 * const client = new AppMeshClient(config);
 * const input = {
 *   virtualNodeName: "STRING_VALUE", // required
 *   meshName: "STRING_VALUE", // required
 *   spec: {
 *     serviceDiscovery: { // Union: only one key present
 *       dns: {
 *         hostname: "STRING_VALUE", // required
 *         responseType: "STRING_VALUE",
 *         ipPreference: "STRING_VALUE",
 *       },
 *       awsCloudMap: {
 *         namespaceName: "STRING_VALUE", // required
 *         serviceName: "STRING_VALUE", // required
 *         attributes: [
 *           {
 *             key: "STRING_VALUE", // required
 *             value: "STRING_VALUE", // required
 *           },
 *         ],
 *         ipPreference: "STRING_VALUE",
 *       },
 *     },
 *     listeners: [
 *       {
 *         portMapping: {
 *           port: Number("int"), // required
 *           protocol: "STRING_VALUE", // required
 *         },
 *         tls: {
 *           mode: "STRING_VALUE", // required
 *           certificate: { // Union: only one key present
 *             acm: {
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
 *           validation: {
 *             trust: { // Union: only one key present
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
 *         },
 *         healthCheck: {
 *           timeoutMillis: Number("long"), // required
 *           intervalMillis: Number("long"), // required
 *           protocol: "STRING_VALUE", // required
 *           port: Number("int"),
 *           path: "STRING_VALUE",
 *           healthyThreshold: Number("int"), // required
 *           unhealthyThreshold: Number("int"), // required
 *         },
 *         timeout: { // Union: only one key present
 *           tcp: {
 *             idle: {
 *               value: Number("long"),
 *               unit: "STRING_VALUE",
 *             },
 *           },
 *           http: {
 *             perRequest: {
 *               value: Number("long"),
 *               unit: "STRING_VALUE",
 *             },
 *             idle: {
 *               value: Number("long"),
 *               unit: "STRING_VALUE",
 *             },
 *           },
 *           http2: {
 *             perRequest: {
 *               value: Number("long"),
 *               unit: "STRING_VALUE",
 *             },
 *             idle: {
 *               value: Number("long"),
 *               unit: "STRING_VALUE",
 *             },
 *           },
 *           grpc: {
 *             perRequest: {
 *               value: Number("long"),
 *               unit: "STRING_VALUE",
 *             },
 *             idle: {
 *               value: Number("long"),
 *               unit: "STRING_VALUE",
 *             },
 *           },
 *         },
 *         outlierDetection: {
 *           maxServerErrors: Number("long"), // required
 *           interval: {
 *             value: Number("long"),
 *             unit: "STRING_VALUE",
 *           },
 *           baseEjectionDuration: {
 *             value: Number("long"),
 *             unit: "STRING_VALUE",
 *           },
 *           maxEjectionPercent: Number("int"), // required
 *         },
 *         connectionPool: { // Union: only one key present
 *           tcp: {
 *             maxConnections: Number("int"), // required
 *           },
 *           http: {
 *             maxConnections: Number("int"), // required
 *             maxPendingRequests: Number("int"),
 *           },
 *           http2: {
 *             maxRequests: Number("int"), // required
 *           },
 *           grpc: {
 *             maxRequests: Number("int"), // required
 *           },
 *         },
 *       },
 *     ],
 *     backends: [
 *       { // Union: only one key present
 *         virtualService: {
 *           virtualServiceName: "STRING_VALUE", // required
 *           clientPolicy: {
 *             tls: {
 *               enforce: true || false,
 *               ports: [
 *                 Number("int"),
 *               ],
 *               certificate: { // Union: only one key present
 *                 file: {
 *                   certificateChain: "STRING_VALUE", // required
 *                   privateKey: "STRING_VALUE", // required
 *                 },
 *                 sds: {
 *                   secretName: "STRING_VALUE", // required
 *                 },
 *               },
 *               validation: {
 *                 trust: { // Union: only one key present
 *                   acm: {
 *                     certificateAuthorityArns: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                   file: {
 *                     certificateChain: "STRING_VALUE", // required
 *                   },
 *                   sds: {
 *                     secretName: "STRING_VALUE", // required
 *                   },
 *                 },
 *                 subjectAlternativeNames: {
 *                   match: {
 *                     exact: [ // required
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                 },
 *               },
 *             },
 *           },
 *         },
 *       },
 *     ],
 *     backendDefaults: {
 *       clientPolicy: {
 *         tls: {
 *           enforce: true || false,
 *           ports: [
 *             Number("int"),
 *           ],
 *           certificate: { // Union: only one key present
 *             file: {
 *               certificateChain: "STRING_VALUE", // required
 *               privateKey: "STRING_VALUE", // required
 *             },
 *             sds: {
 *               secretName: "STRING_VALUE", // required
 *             },
 *           },
 *           validation: {
 *             trust: { // Union: only one key present
 *               acm: {
 *                 certificateAuthorityArns: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
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
 *         },
 *       },
 *     },
 *     logging: {
 *       accessLog: { // Union: only one key present
 *         file: {
 *           path: "STRING_VALUE", // required
 *           format: { // Union: only one key present
 *             text: "STRING_VALUE",
 *             json: [
 *               {
 *                 key: "STRING_VALUE", // required
 *                 value: "STRING_VALUE", // required
 *               },
 *             ],
 *           },
 *         },
 *       },
 *     },
 *   },
 *   tags: [
 *     {
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   clientToken: "STRING_VALUE",
 *   meshOwner: "STRING_VALUE",
 * };
 * const command = new CreateVirtualNodeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateVirtualNodeCommandInput - {@link CreateVirtualNodeCommandInput}
 * @returns {@link CreateVirtualNodeCommandOutput}
 * @see {@link CreateVirtualNodeCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualNodeCommandOutput} for command's `response` shape.
 * @see {@link AppMeshClientResolvedConfig | config} for AppMeshClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request syntax was malformed. Check your request syntax and try again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request contains a client token that was used for a previous update resource call
 *          with different specifications. Try the request again with a new client token.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You don't have permissions to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have exceeded a service limit for your account. For more information, see <a href="https://docs.aws.amazon.com/app-mesh/latest/userguide/service-quotas.html">Service
 *             Limits</a> in the <i>App Mesh User Guide</i>.</p>
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
 *
 */
export class CreateVirtualNodeCommand extends $Command<
  CreateVirtualNodeCommandInput,
  CreateVirtualNodeCommandOutput,
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
  constructor(readonly input: CreateVirtualNodeCommandInput) {
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
  ): Handler<CreateVirtualNodeCommandInput, CreateVirtualNodeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVirtualNodeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppMeshClient";
    const commandName = "CreateVirtualNodeCommand";
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
  private serialize(input: CreateVirtualNodeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateVirtualNodeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVirtualNodeCommandOutput> {
    return deserializeAws_restJson1CreateVirtualNodeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
