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
import { CreateVirtualClusterRequest, CreateVirtualClusterResponse } from "../models/models_0";
import { de_CreateVirtualClusterCommand, se_CreateVirtualClusterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateVirtualClusterCommand}.
 */
export interface CreateVirtualClusterCommandInput extends CreateVirtualClusterRequest {}
/**
 * @public
 *
 * The output of {@link CreateVirtualClusterCommand}.
 */
export interface CreateVirtualClusterCommandOutput extends CreateVirtualClusterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a virtual cluster. Virtual cluster is a managed entity on Amazon EMR on EKS. You can create, describe, list and delete virtual clusters. They do not consume any
 *          additional resource in your system. A single virtual cluster maps to a single Kubernetes
 *          namespace. Given this relationship, you can model virtual clusters the same way you model
 *          Kubernetes namespaces to meet your requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, CreateVirtualClusterCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, CreateVirtualClusterCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * const client = new EMRContainersClient(config);
 * const input = { // CreateVirtualClusterRequest
 *   name: "STRING_VALUE", // required
 *   containerProvider: { // ContainerProvider
 *     type: "EKS", // required
 *     id: "STRING_VALUE", // required
 *     info: { // ContainerInfo Union: only one key present
 *       eksInfo: { // EksInfo
 *         namespace: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   clientToken: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateVirtualClusterCommand(input);
 * const response = await client.send(command);
 * // { // CreateVirtualClusterResponse
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateVirtualClusterCommandInput - {@link CreateVirtualClusterCommandInput}
 * @returns {@link CreateVirtualClusterCommandOutput}
 * @see {@link CreateVirtualClusterCommandInput} for command's `input` shape.
 * @see {@link CreateVirtualClusterCommandOutput} for command's `response` shape.
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
export class CreateVirtualClusterCommand extends $Command<
  CreateVirtualClusterCommandInput,
  CreateVirtualClusterCommandOutput,
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
  constructor(readonly input: CreateVirtualClusterCommandInput) {
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
  ): Handler<CreateVirtualClusterCommandInput, CreateVirtualClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVirtualClusterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRContainersClient";
    const commandName = "CreateVirtualClusterCommand";
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
  private serialize(input: CreateVirtualClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateVirtualClusterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVirtualClusterCommandOutput> {
    return de_CreateVirtualClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
