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

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { ListVirtualClustersRequest, ListVirtualClustersResponse } from "../models/models_0";
import { de_ListVirtualClustersCommand, se_ListVirtualClustersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListVirtualClustersCommand}.
 */
export interface ListVirtualClustersCommandInput extends ListVirtualClustersRequest {}
/**
 * @public
 *
 * The output of {@link ListVirtualClustersCommand}.
 */
export interface ListVirtualClustersCommandOutput extends ListVirtualClustersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists information about the specified virtual cluster. Virtual cluster is a managed
 *          entity on Amazon EMR on EKS. You can create, describe, list and delete virtual
 *          clusters. They do not consume any additional resource in your system. A single virtual
 *          cluster maps to a single Kubernetes namespace. Given this relationship, you can model
 *          virtual clusters the same way you model Kubernetes namespaces to meet your
 *          requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, ListVirtualClustersCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, ListVirtualClustersCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // ListVirtualClustersRequest
 *   containerProviderId: "STRING_VALUE",
 *   containerProviderType: "EKS",
 *   createdAfter: new Date("TIMESTAMP"),
 *   createdBefore: new Date("TIMESTAMP"),
 *   states: [ // VirtualClusterStates
 *     "RUNNING" || "TERMINATING" || "TERMINATED" || "ARRESTED",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListVirtualClustersCommand(input);
 * const response = await client.send(command);
 * // { // ListVirtualClustersResponse
 * //   virtualClusters: [ // VirtualClusters
 * //     { // VirtualCluster
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       state: "RUNNING" || "TERMINATING" || "TERMINATED" || "ARRESTED",
 * //       containerProvider: { // ContainerProvider
 * //         type: "EKS", // required
 * //         id: "STRING_VALUE", // required
 * //         info: { // ContainerInfo Union: only one key present
 * //           eksInfo: { // EksInfo
 * //             namespace: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"),
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVirtualClustersCommandInput - {@link ListVirtualClustersCommandInput}
 * @returns {@link ListVirtualClustersCommandOutput}
 * @see {@link ListVirtualClustersCommandInput} for command's `input` shape.
 * @see {@link ListVirtualClustersCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 */
export class ListVirtualClustersCommand extends $Command<
  ListVirtualClustersCommandInput,
  ListVirtualClustersCommandOutput,
  EMRContainersClientResolvedConfig
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
  constructor(readonly input: ListVirtualClustersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRContainersClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVirtualClustersCommandInput, ListVirtualClustersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVirtualClustersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "ListVirtualClustersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AwsChicagoWebService",
        operation: "ListVirtualClusters",
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
  private serialize(input: ListVirtualClustersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListVirtualClustersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVirtualClustersCommandOutput> {
    return de_ListVirtualClustersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
