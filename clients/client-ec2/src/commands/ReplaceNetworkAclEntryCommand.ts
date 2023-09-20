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
import { ReplaceNetworkAclEntryRequest } from "../models/models_6";
import { de_ReplaceNetworkAclEntryCommand, se_ReplaceNetworkAclEntryCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReplaceNetworkAclEntryCommand}.
 */
export interface ReplaceNetworkAclEntryCommandInput extends ReplaceNetworkAclEntryRequest {}
/**
 * @public
 *
 * The output of {@link ReplaceNetworkAclEntryCommand}.
 */
export interface ReplaceNetworkAclEntryCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Replaces an entry (rule) in a network ACL. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html">Network ACLs</a> in the
 * 				<i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceNetworkAclEntryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceNetworkAclEntryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ReplaceNetworkAclEntryRequest
 *   CidrBlock: "STRING_VALUE",
 *   DryRun: true || false,
 *   Egress: true || false, // required
 *   IcmpTypeCode: { // IcmpTypeCode
 *     Code: Number("int"),
 *     Type: Number("int"),
 *   },
 *   Ipv6CidrBlock: "STRING_VALUE",
 *   NetworkAclId: "STRING_VALUE", // required
 *   PortRange: { // PortRange
 *     From: Number("int"),
 *     To: Number("int"),
 *   },
 *   Protocol: "STRING_VALUE", // required
 *   RuleAction: "allow" || "deny", // required
 *   RuleNumber: Number("int"), // required
 * };
 * const command = new ReplaceNetworkAclEntryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ReplaceNetworkAclEntryCommandInput - {@link ReplaceNetworkAclEntryCommandInput}
 * @returns {@link ReplaceNetworkAclEntryCommandOutput}
 * @see {@link ReplaceNetworkAclEntryCommandInput} for command's `input` shape.
 * @see {@link ReplaceNetworkAclEntryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To replace a network ACL entry
 * ```javascript
 * // This example replaces an entry for the specified network ACL. The new rule 100 allows ingress traffic from 203.0.113.12/24 on UDP port 53 (DNS) into any associated subnet.
 * const input = {
 *   "CidrBlock": "203.0.113.12/24",
 *   "Egress": false,
 *   "NetworkAclId": "acl-5fb85d36",
 *   "PortRange": {
 *     "From": 53,
 *     "To": 53
 *   },
 *   "Protocol": "17",
 *   "RuleAction": "allow",
 *   "RuleNumber": 100
 * };
 * const command = new ReplaceNetworkAclEntryCommand(input);
 * await client.send(command);
 * // example id: ec2-replace-network-acl-entry-1
 * ```
 *
 */
export class ReplaceNetworkAclEntryCommand extends $Command<
  ReplaceNetworkAclEntryCommandInput,
  ReplaceNetworkAclEntryCommandOutput,
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
  constructor(readonly input: ReplaceNetworkAclEntryCommandInput) {
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
  ): Handler<ReplaceNetworkAclEntryCommandInput, ReplaceNetworkAclEntryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReplaceNetworkAclEntryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReplaceNetworkAclEntryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ReplaceNetworkAclEntry",
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
  private serialize(input: ReplaceNetworkAclEntryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReplaceNetworkAclEntryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ReplaceNetworkAclEntryCommandOutput> {
    return de_ReplaceNetworkAclEntryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
