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
import { ReplaceNetworkAclAssociationRequest, ReplaceNetworkAclAssociationResult } from "../models/models_6";
import { de_ReplaceNetworkAclAssociationCommand, se_ReplaceNetworkAclAssociationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReplaceNetworkAclAssociationCommand}.
 */
export interface ReplaceNetworkAclAssociationCommandInput extends ReplaceNetworkAclAssociationRequest {}
/**
 * @public
 *
 * The output of {@link ReplaceNetworkAclAssociationCommand}.
 */
export interface ReplaceNetworkAclAssociationCommandOutput
  extends ReplaceNetworkAclAssociationResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Changes which network ACL a subnet is associated with. By default when you create a
 * 			subnet, it's automatically associated with the default network ACL. For more
 * 			information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html">Network ACLs</a> in the <i>Amazon VPC User Guide</i>.</p>
 *          <p>This is an idempotent operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceNetworkAclAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceNetworkAclAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ReplaceNetworkAclAssociationRequest
 *   AssociationId: "STRING_VALUE", // required
 *   DryRun: true || false,
 *   NetworkAclId: "STRING_VALUE", // required
 * };
 * const command = new ReplaceNetworkAclAssociationCommand(input);
 * const response = await client.send(command);
 * // { // ReplaceNetworkAclAssociationResult
 * //   NewAssociationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ReplaceNetworkAclAssociationCommandInput - {@link ReplaceNetworkAclAssociationCommandInput}
 * @returns {@link ReplaceNetworkAclAssociationCommandOutput}
 * @see {@link ReplaceNetworkAclAssociationCommandInput} for command's `input` shape.
 * @see {@link ReplaceNetworkAclAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @example To replace the network ACL associated with a subnet
 * ```javascript
 * // This example associates the specified network ACL with the subnet for the specified network ACL association.
 * const input = {
 *   "AssociationId": "aclassoc-e5b95c8c",
 *   "NetworkAclId": "acl-5fb85d36"
 * };
 * const command = new ReplaceNetworkAclAssociationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NewAssociationId": "aclassoc-3999875b"
 * }
 * *\/
 * // example id: ec2-replace-network-acl-association-1
 * ```
 *
 */
export class ReplaceNetworkAclAssociationCommand extends $Command<
  ReplaceNetworkAclAssociationCommandInput,
  ReplaceNetworkAclAssociationCommandOutput,
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
  constructor(readonly input: ReplaceNetworkAclAssociationCommandInput) {
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
  ): Handler<ReplaceNetworkAclAssociationCommandInput, ReplaceNetworkAclAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ReplaceNetworkAclAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ReplaceNetworkAclAssociationCommand";
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
  private serialize(input: ReplaceNetworkAclAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ReplaceNetworkAclAssociationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ReplaceNetworkAclAssociationCommandOutput> {
    return de_ReplaceNetworkAclAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
