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
import {
  ReplaceNetworkAclAssociationRequest,
  ReplaceNetworkAclAssociationRequestFilterSensitiveLog,
  ReplaceNetworkAclAssociationResult,
  ReplaceNetworkAclAssociationResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2ReplaceNetworkAclAssociationCommand,
  serializeAws_ec2ReplaceNetworkAclAssociationCommand,
} from "../protocols/Aws_ec2";

export interface ReplaceNetworkAclAssociationCommandInput extends ReplaceNetworkAclAssociationRequest {}
export interface ReplaceNetworkAclAssociationCommandOutput
  extends ReplaceNetworkAclAssociationResult,
    __MetadataBearer {}

/**
 * <p>Changes which network ACL a subnet is associated with. By default when you create a
 * 			subnet, it's automatically associated with the default network ACL. For more
 * 			information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_ACLs.html">Network
 * 			ACLs</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *          <p>This is an idempotent operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ReplaceNetworkAclAssociationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ReplaceNetworkAclAssociationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ReplaceNetworkAclAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ReplaceNetworkAclAssociationCommandInput} for command's `input` shape.
 * @see {@link ReplaceNetworkAclAssociationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
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
      inputFilterSensitiveLog: ReplaceNetworkAclAssociationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ReplaceNetworkAclAssociationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ReplaceNetworkAclAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ReplaceNetworkAclAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ReplaceNetworkAclAssociationCommandOutput> {
    return deserializeAws_ec2ReplaceNetworkAclAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
