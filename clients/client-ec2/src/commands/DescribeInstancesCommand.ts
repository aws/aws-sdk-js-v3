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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeInstancesRequest } from "../models/models_3";
import { DescribeInstancesResult } from "../models/models_4";
import {
  deserializeAws_ec2DescribeInstancesCommand,
  serializeAws_ec2DescribeInstancesCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DescribeInstancesCommand}.
 */
export interface DescribeInstancesCommandInput extends DescribeInstancesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstancesCommand}.
 */
export interface DescribeInstancesCommandOutput extends DescribeInstancesResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified instances or all instances.</p>
 *          <p>If you specify instance IDs, the output includes information for only the specified
 *             instances. If you specify filters, the output includes information for only those
 *             instances that meet the filter criteria. If you do not specify instance IDs or filters,
 *             the output includes information for all instances, which can affect performance. We
 *             recommend that you use pagination to ensure that the operation returns quickly and
 *             successfully.</p>
 *          <p>If you specify an instance ID that is not valid, an error is returned. If you specify
 *             an instance that you do not own, it is not included in the output.</p>
 *          <p>Recently terminated instances might appear in the returned results. This interval is
 *             usually less than one hour.</p>
 *          <p>If you describe instances in the rare case where an Availability Zone is experiencing
 *             a service disruption and you specify instance IDs that are in the affected zone, or do
 *             not specify any instance IDs at all, the call fails. If you describe instances and
 *             specify only instance IDs that are in an unaffected zone, the call works
 *             normally.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = {
 *   Filters: [
 *     {
 *       Name: "STRING_VALUE",
 *       Values: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   InstanceIds: [
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeInstancesCommandInput - {@link DescribeInstancesCommandInput}
 * @returns {@link DescribeInstancesCommandOutput}
 * @see {@link DescribeInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To describe an Amazon EC2 instance
 * ```javascript
 * // This example describes the specified instance.
 * const input = {
 *   "InstanceIds": [
 *     "i-1234567890abcdef0"
 *   ]
 * };
 * const command = new DescribeInstancesCommand(input);
 * await client.send(command);
 * // example id: to-describe-an-amazon-ec2-instance-1529025982172
 * ```
 *
 * @example To describe the instances with a specific instance type
 * ```javascript
 * // This example describes the instances with the t2.micro instance type.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "instance-type",
 *       "Values": [
 *         "t2.micro"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeInstancesCommand(input);
 * await client.send(command);
 * // example id: to-describe-the-instances-with-the-instance-type-t2micro-1529026147602
 * ```
 *
 * @example To describe the instances with a specific tag
 * ```javascript
 * // This example describes the instances with the Purpose=test tag.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "tag:Purpose",
 *       "Values": [
 *         "test"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeInstancesCommand(input);
 * await client.send(command);
 * // example id: to-describe-the-instances-with-a-specific-tag-1529026251928
 * ```
 *
 */
export class DescribeInstancesCommand extends $Command<
  DescribeInstancesCommandInput,
  DescribeInstancesCommandOutput,
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
  constructor(readonly input: DescribeInstancesCommandInput) {
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
  ): Handler<DescribeInstancesCommandInput, DescribeInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeInstancesCommand";
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
  private serialize(input: DescribeInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeInstancesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeInstancesCommandOutput> {
    return deserializeAws_ec2DescribeInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
