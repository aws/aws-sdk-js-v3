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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { CreateNodegroupRequest, CreateNodegroupResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateNodegroupCommand,
  serializeAws_restJson1CreateNodegroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateNodegroupCommand}.
 */
export interface CreateNodegroupCommandInput extends CreateNodegroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateNodegroupCommand}.
 */
export interface CreateNodegroupCommandOutput extends CreateNodegroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a managed node group for an Amazon EKS cluster. You can only create a
 *             node group for your cluster that is equal to the current Kubernetes version for the
 *             cluster. All node groups are created with the latest AMI release version for the
 *             respective minor Kubernetes version of the cluster, unless you deploy a custom AMI using
 *             a launch template. For more information about using launch templates, see <a href="https://docs.aws.amazon.com/eks/latest/userguide/launch-templates.html">Launch
 *                 template support</a>.</p>
 *          <p>An Amazon EKS managed node group is an Amazon EC2
 *             Auto Scaling group and associated Amazon EC2 instances that are managed by
 *                 Amazon Web Services for an Amazon EKS cluster. For more information, see
 *                 <a href="https://docs.aws.amazon.com/eks/latest/userguide/managed-node-groups.html">Managed node groups</a> in the <i>Amazon EKS User Guide</i>.</p>
 *          <note>
 *             <p>Windows AMI types are only supported for commercial Regions that support Windows
 *                     Amazon EKS.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, CreateNodegroupCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, CreateNodegroupCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = {
 *   clusterName: "STRING_VALUE", // required
 *   nodegroupName: "STRING_VALUE", // required
 *   scalingConfig: {
 *     minSize: Number("int"),
 *     maxSize: Number("int"),
 *     desiredSize: Number("int"),
 *   },
 *   diskSize: Number("int"),
 *   subnets: [ // required
 *     "STRING_VALUE",
 *   ],
 *   instanceTypes: [
 *     "STRING_VALUE",
 *   ],
 *   amiType: "AL2_x86_64" || "AL2_x86_64_GPU" || "AL2_ARM_64" || "CUSTOM" || "BOTTLEROCKET_ARM_64" || "BOTTLEROCKET_x86_64" || "BOTTLEROCKET_ARM_64_NVIDIA" || "BOTTLEROCKET_x86_64_NVIDIA" || "WINDOWS_CORE_2019_x86_64" || "WINDOWS_FULL_2019_x86_64" || "WINDOWS_CORE_2022_x86_64" || "WINDOWS_FULL_2022_x86_64",
 *   remoteAccess: {
 *     ec2SshKey: "STRING_VALUE",
 *     sourceSecurityGroups: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   nodeRole: "STRING_VALUE", // required
 *   labels: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   taints: [
 *     {
 *       key: "STRING_VALUE",
 *       value: "STRING_VALUE",
 *       effect: "NO_SCHEDULE" || "NO_EXECUTE" || "PREFER_NO_SCHEDULE",
 *     },
 *   ],
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientRequestToken: "STRING_VALUE",
 *   launchTemplate: {
 *     name: "STRING_VALUE",
 *     version: "STRING_VALUE",
 *     id: "STRING_VALUE",
 *   },
 *   updateConfig: {
 *     maxUnavailable: Number("int"),
 *     maxUnavailablePercentage: Number("int"),
 *   },
 *   capacityType: "ON_DEMAND" || "SPOT",
 *   version: "STRING_VALUE",
 *   releaseVersion: "STRING_VALUE",
 * };
 * const command = new CreateNodegroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateNodegroupCommandInput - {@link CreateNodegroupCommandInput}
 * @returns {@link CreateNodegroupCommandOutput}
 * @see {@link CreateNodegroupCommandInput} for command's `input` shape.
 * @see {@link CreateNodegroupCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of a user that doesn't have permissions to use the action
 *             or resource or specifying an identifier that is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid given the state of the cluster. Check the state of the cluster
 *             and the associated operations.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>You have encountered a service limit on the specified resource.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 *
 */
export class CreateNodegroupCommand extends $Command<
  CreateNodegroupCommandInput,
  CreateNodegroupCommandOutput,
  EKSClientResolvedConfig
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
  constructor(readonly input: CreateNodegroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateNodegroupCommandInput, CreateNodegroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNodegroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "CreateNodegroupCommand";
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
  private serialize(input: CreateNodegroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateNodegroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNodegroupCommandOutput> {
    return deserializeAws_restJson1CreateNodegroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
