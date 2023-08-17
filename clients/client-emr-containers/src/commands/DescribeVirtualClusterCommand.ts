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

import { EMRContainersClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRContainersClient";
import { DescribeVirtualClusterRequest, DescribeVirtualClusterResponse } from "../models/models_0";
import { de_DescribeVirtualClusterCommand, se_DescribeVirtualClusterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVirtualClusterCommand}.
 */
export interface DescribeVirtualClusterCommandInput extends DescribeVirtualClusterRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVirtualClusterCommand}.
 */
export interface DescribeVirtualClusterCommandOutput extends DescribeVirtualClusterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Displays detailed information about a specified virtual cluster. Virtual cluster is a
 *          managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual
 *          clusters. They do not consume any additional resource in your system. A single virtual
 *          cluster maps to a single Kubernetes namespace. Given this relationship, you can model
 *          virtual clusters the same way you model Kubernetes namespaces to meet your
 *          requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DescribeVirtualClusterCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DescribeVirtualClusterCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // DescribeVirtualClusterRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DescribeVirtualClusterCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVirtualClusterResponse
 * //   virtualCluster: { // VirtualCluster
 * //     id: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     arn: "STRING_VALUE",
 * //     state: "RUNNING" || "TERMINATING" || "TERMINATED" || "ARRESTED",
 * //     containerProvider: { // ContainerProvider
 * //       type: "EKS", // required
 * //       id: "STRING_VALUE", // required
 * //       info: { // ContainerInfo Union: only one key present
 * //         eksInfo: { // EksInfo
 * //           namespace: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     createdAt: new Date("TIMESTAMP"),
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeVirtualClusterCommandInput - {@link DescribeVirtualClusterCommandInput}
 * @returns {@link DescribeVirtualClusterCommandOutput}
 * @see {@link DescribeVirtualClusterCommandInput} for command's `input` shape.
 * @see {@link DescribeVirtualClusterCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 */
export class DescribeVirtualClusterCommand extends $Command<
  DescribeVirtualClusterCommandInput,
  DescribeVirtualClusterCommandOutput,
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
  constructor(readonly input: DescribeVirtualClusterCommandInput) {
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
  ): Handler<DescribeVirtualClusterCommandInput, DescribeVirtualClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVirtualClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "DescribeVirtualClusterCommand";
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
  private serialize(input: DescribeVirtualClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeVirtualClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeVirtualClusterCommandOutput> {
    return de_DescribeVirtualClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
