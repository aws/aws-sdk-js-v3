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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateNetworkAclEntryRequest } from "../models/models_1";
import { de_CreateNetworkAclEntryCommand, se_CreateNetworkAclEntryCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkAclEntryCommand}.
 */
export interface CreateNetworkAclEntryCommandInput extends CreateNetworkAclEntryRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkAclEntryCommand}.
 */
export interface CreateNetworkAclEntryCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Creates an entry (a rule) in a network ACL with the specified rule number. Each network ACL has a set of numbered ingress rules
 * 		        and a separate set of numbered egress rules. When determining whether a packet should be allowed in or out of a subnet associated
 * 		        with the ACL, we process the entries in the ACL according to the rule numbers, in ascending order. Each network ACL has a set of
 * 		        ingress rules and a separate set of egress rules.</p>
 *          <p>We recommend that you leave room between the rule numbers (for example, 100, 110, 120, ...), and not number them one right after the
 * 		        other (for example, 101, 102, 103, ...). This makes it easier to add a rule between existing ones without having to renumber the rules.</p>
 *          <p>After you add an entry, you can't modify it; you must either replace it, or create an entry and delete the old one.</p>
 *          <p>For more information about network ACLs, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkAclEntryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkAclEntryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateNetworkAclEntryRequest
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
 * const command = new CreateNetworkAclEntryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateNetworkAclEntryCommandInput - {@link CreateNetworkAclEntryCommandInput}
 * @returns {@link CreateNetworkAclEntryCommandOutput}
 * @see {@link CreateNetworkAclEntryCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkAclEntryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To create a network ACL entry
 * ```javascript
 * // This example creates an entry for the specified network ACL. The rule allows ingress traffic from anywhere (0.0.0.0/0) on UDP port 53 (DNS) into any associated subnet.
 * const input = {
 *   "CidrBlock": "0.0.0.0/0",
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
 * const command = new CreateNetworkAclEntryCommand(input);
 * await client.send(command);
 * // example id: ec2-create-network-acl-entry-1
 * ```
 *
 */
export class CreateNetworkAclEntryCommand extends $Command<
  CreateNetworkAclEntryCommandInput,
  CreateNetworkAclEntryCommandOutput,
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
  constructor(readonly input: CreateNetworkAclEntryCommandInput) {
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
  ): Handler<CreateNetworkAclEntryCommandInput, CreateNetworkAclEntryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateNetworkAclEntryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateNetworkAclEntryCommand";
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
  private serialize(input: CreateNetworkAclEntryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateNetworkAclEntryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateNetworkAclEntryCommandOutput> {
    return de_CreateNetworkAclEntryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
