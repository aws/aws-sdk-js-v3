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

import { DescribeInstanceInformationRequest, DescribeInstanceInformationResult } from "../models/models_0";
import { de_DescribeInstanceInformationCommand, se_DescribeInstanceInformationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 *
 * The input for {@link DescribeInstanceInformationCommand}.
 */
export interface DescribeInstanceInformationCommandInput extends DescribeInstanceInformationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceInformationCommand}.
 */
export interface DescribeInstanceInformationCommandOutput extends DescribeInstanceInformationResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your managed nodes, including information about the operating
 *    system platform, the version of SSM Agent installed on the managed node, node status, and so
 *    on.</p>
 *          <p>If you specify one or more managed node IDs, it returns information for those managed nodes.
 *    If you don't specify node IDs, it returns information for all your managed nodes. If you specify
 *    a node ID that isn't valid or a node that you don't own, you receive an error.</p>
 *          <note>
 *             <p>The <code>IamRole</code> field for this API operation is the Identity and Access Management
 *      (IAM) role assigned to on-premises managed nodes. This call doesn't return the
 *      IAM role for EC2 instances.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstanceInformationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstanceInformationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeInstanceInformationRequest
 *   InstanceInformationFilterList: [ // InstanceInformationFilterList
 *     { // InstanceInformationFilter
 *       key: "InstanceIds" || "AgentVersion" || "PingStatus" || "PlatformTypes" || "ActivationIds" || "IamRole" || "ResourceType" || "AssociationStatus", // required
 *       valueSet: [ // InstanceInformationFilterValueSet // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   Filters: [ // InstanceInformationStringFilterList
 *     { // InstanceInformationStringFilter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeInstanceInformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeInstanceInformationCommandInput - {@link DescribeInstanceInformationCommandInput}
 * @returns {@link DescribeInstanceInformationCommandOutput}
 * @see {@link DescribeInstanceInformationCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceInformationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilterKey} (client fault)
 *  <p>The specified key isn't valid.</p>
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *  <p>The following problems can cause this exception:</p>
 *          <ul>
 *             <li>
 *                <p>You don't have permission to access the managed node.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Systems Manager Agent(SSM Agent) isn't running. Verify that SSM Agent is
 *      running.</p>
 *             </li>
 *             <li>
 *                <p>SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.</p>
 *             </li>
 *             <li>
 *                <p>The managed node isn't in valid state. Valid states are: <code>Running</code>,
 *       <code>Pending</code>, <code>Stopped</code>, and <code>Stopping</code>. Invalid states are:
 *       <code>Shutting-down</code> and <code>Terminated</code>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidInstanceInformationFilterValue} (client fault)
 *  <p>The specified filter value isn't valid.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 *
 */
export class DescribeInstanceInformationCommand extends $Command<
  DescribeInstanceInformationCommandInput,
  DescribeInstanceInformationCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: DescribeInstanceInformationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInstanceInformationCommandInput, DescribeInstanceInformationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstanceInformationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DescribeInstanceInformationCommand";
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
  private serialize(input: DescribeInstanceInformationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInstanceInformationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeInstanceInformationCommandOutput> {
    return de_DescribeInstanceInformationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
