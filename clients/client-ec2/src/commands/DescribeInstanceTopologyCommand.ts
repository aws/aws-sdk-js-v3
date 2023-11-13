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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInstanceTopologyRequest, DescribeInstanceTopologyResult } from "../models/models_4";
import { de_DescribeInstanceTopologyCommand, se_DescribeInstanceTopologyCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceTopologyCommand}.
 */
export interface DescribeInstanceTopologyCommandInput extends DescribeInstanceTopologyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceTopologyCommand}.
 */
export interface DescribeInstanceTopologyCommandOutput extends DescribeInstanceTopologyResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes a tree-based hierarchy that represents the physical host placement of your
 *             EC2 instances within an Availability Zone or Local Zone. You can use this information to
 *             determine the relative proximity of your EC2 instances within the Amazon Web Services network to
 *             support your tightly coupled workloads.</p>
 *          <p class="title">
 *             <b>Limitations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Supported zones</p>
 *                <ul>
 *                   <li>
 *                      <p>Availability Zone</p>
 *                   </li>
 *                   <li>
 *                      <p>Local Zone</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Supported instance types</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>hpc6a.48xlarge</code> | <code>hpc6id.32xlarge</code> |
 *                                 <code>hpc7a.12xlarge</code> | <code>hpc7a.24xlarge</code> |
 *                                 <code>hpc7a.48xlarge</code> | <code>hpc7a.96xlarge</code> |
 *                                 <code>hpc7g.4xlarge</code> | <code>hpc7g.8xlarge</code> |
 *                                 <code>hpc7g.16xlarge</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>p3dn.24xlarge</code> | <code>p4d.24xlarge</code> |
 *                                 <code>p4de.24xlarge</code> | <code>p5.48xlarge</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>trn1.2xlarge</code> | <code>trn1.32xlarge</code> |
 *                                 <code>trn1n.32xlarge</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-topology.html">Amazon EC2 instance
 *                 topology</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceTopologyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceTopologyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeInstanceTopologyRequest
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   InstanceIds: [ // DescribeInstanceTopologyInstanceIdSet
 *     "STRING_VALUE",
 *   ],
 *   GroupNames: [ // DescribeInstanceTopologyGroupNameSet
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeInstanceTopologyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceTopologyResult
 * //   Instances: [ // InstanceSet
 * //     { // InstanceTopology
 * //       InstanceId: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       NetworkNodes: [ // NetworkNodesList
 * //         "STRING_VALUE",
 * //       ],
 * //       AvailabilityZone: "STRING_VALUE",
 * //       ZoneId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstanceTopologyCommandInput - {@link DescribeInstanceTopologyCommandInput}
 * @returns {@link DescribeInstanceTopologyCommandOutput}
 * @see {@link DescribeInstanceTopologyCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceTopologyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeInstanceTopologyCommand extends $Command<
  DescribeInstanceTopologyCommandInput,
  DescribeInstanceTopologyCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: DescribeInstanceTopologyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeInstanceTopologyCommandInput, DescribeInstanceTopologyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstanceTopologyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInstanceTopologyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DescribeInstanceTopology",
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
  private serialize(input: DescribeInstanceTopologyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeInstanceTopologyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInstanceTopologyCommandOutput> {
    return de_DescribeInstanceTopologyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
