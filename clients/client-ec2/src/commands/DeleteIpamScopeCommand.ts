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
  DeleteIpamScopeRequest,
  DeleteIpamScopeRequestFilterSensitiveLog,
  DeleteIpamScopeResult,
  DeleteIpamScopeResultFilterSensitiveLog,
} from "../models/models_2";
import { deserializeAws_ec2DeleteIpamScopeCommand, serializeAws_ec2DeleteIpamScopeCommand } from "../protocols/Aws_ec2";

export interface DeleteIpamScopeCommandInput extends DeleteIpamScopeRequest {}
export interface DeleteIpamScopeCommandOutput extends DeleteIpamScopeResult, __MetadataBearer {}

/**
 * <p>Delete the scope for an IPAM. You cannot delete the default scopes.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/delete-scope-ipam.html">Delete a scope</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteIpamScopeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteIpamScopeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteIpamScopeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteIpamScopeCommandInput} for command's `input` shape.
 * @see {@link DeleteIpamScopeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeleteIpamScopeCommand extends $Command<
  DeleteIpamScopeCommandInput,
  DeleteIpamScopeCommandOutput,
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

  constructor(readonly input: DeleteIpamScopeCommandInput) {
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
  ): Handler<DeleteIpamScopeCommandInput, DeleteIpamScopeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteIpamScopeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteIpamScopeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteIpamScopeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteIpamScopeResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteIpamScopeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteIpamScopeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteIpamScopeCommandOutput> {
    return deserializeAws_ec2DeleteIpamScopeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
