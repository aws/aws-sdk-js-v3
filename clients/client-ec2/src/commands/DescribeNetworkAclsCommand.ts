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
import { DescribeNetworkAclsRequest, DescribeNetworkAclsResult } from "../models/models_4";
import {
  deserializeAws_ec2DescribeNetworkAclsCommand,
  serializeAws_ec2DescribeNetworkAclsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 *
 * The input for {@link DescribeNetworkAclsCommand}.
 */
export interface DescribeNetworkAclsCommandInput extends DescribeNetworkAclsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeNetworkAclsCommand}.
 */
export interface DescribeNetworkAclsCommandOutput extends DescribeNetworkAclsResult, __MetadataBearer {}

/**
 * @public
 * <p>Describes one or more of your network ACLs.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the
 * 				<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeNetworkAclsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeNetworkAclsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeNetworkAclsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeNetworkAclsCommandInput - {@link DescribeNetworkAclsCommandInput}
 * @returns {@link DescribeNetworkAclsCommandOutput}
 * @see {@link DescribeNetworkAclsCommandInput} for command's `input` shape.
 * @see {@link DescribeNetworkAclsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 *
 * @example To describe a network ACL
 * ```javascript
 * // This example describes the specified network ACL.
 * const input = {
 *   "NetworkAclIds": [
 *     "acl-5fb85d36"
 *   ]
 * };
 * const command = new DescribeNetworkAclsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NetworkAcls": [
 *     {
 *       "Associations": [
 *         {
 *           "NetworkAclAssociationId": "aclassoc-66ea5f0b",
 *           "NetworkAclId": "acl-9aeb5ef7",
 *           "SubnetId": "subnet-65ea5f08"
 *         }
 *       ],
 *       "Entries": [
 *         {
 *           "CidrBlock": "0.0.0.0/0",
 *           "Egress": true,
 *           "Protocol": "-1",
 *           "RuleAction": "deny",
 *           "RuleNumber": 32767
 *         },
 *         {
 *           "CidrBlock": "0.0.0.0/0",
 *           "Egress": false,
 *           "Protocol": "-1",
 *           "RuleAction": "deny",
 *           "RuleNumber": 32767
 *         }
 *       ],
 *       "IsDefault": false,
 *       "NetworkAclId": "acl-5fb85d36",
 *       "Tags": [],
 *       "VpcId": "vpc-a01106c2"
 *     }
 *   ]
 * }
 * *\/
 * // example id: ec2-
 * ```
 *
 */
export class DescribeNetworkAclsCommand extends $Command<
  DescribeNetworkAclsCommandInput,
  DescribeNetworkAclsCommandOutput,
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
  constructor(readonly input: DescribeNetworkAclsCommandInput) {
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
  ): Handler<DescribeNetworkAclsCommandInput, DescribeNetworkAclsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeNetworkAclsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeNetworkAclsCommand";
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
  private serialize(input: DescribeNetworkAclsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeNetworkAclsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeNetworkAclsCommandOutput> {
    return deserializeAws_ec2DescribeNetworkAclsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
