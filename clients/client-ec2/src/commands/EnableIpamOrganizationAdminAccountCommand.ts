// smithy-typescript generated code
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
  EnableIpamOrganizationAdminAccountRequest,
  EnableIpamOrganizationAdminAccountResult,
} from "../models/models_4";
import {
  deserializeAws_ec2EnableIpamOrganizationAdminAccountCommand,
  serializeAws_ec2EnableIpamOrganizationAdminAccountCommand,
} from "../protocols/Aws_ec2";

export interface EnableIpamOrganizationAdminAccountCommandInput extends EnableIpamOrganizationAdminAccountRequest {}
export interface EnableIpamOrganizationAdminAccountCommandOutput
  extends EnableIpamOrganizationAdminAccountResult,
    __MetadataBearer {}

/**
 * <p>Enable an Organizations member account as the IPAM admin account. You cannot select the Organizations management account as the IPAM admin account. For more information, see <a href="/vpc/latest/ipam/enable-integ-ipam.html">Enable integration with Organizations</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableIpamOrganizationAdminAccountCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableIpamOrganizationAdminAccountCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new EnableIpamOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableIpamOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link EnableIpamOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class EnableIpamOrganizationAdminAccountCommand extends $Command<
  EnableIpamOrganizationAdminAccountCommandInput,
  EnableIpamOrganizationAdminAccountCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableIpamOrganizationAdminAccountCommandInput) {
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
  ): Handler<EnableIpamOrganizationAdminAccountCommandInput, EnableIpamOrganizationAdminAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableIpamOrganizationAdminAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableIpamOrganizationAdminAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableIpamOrganizationAdminAccountResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: EnableIpamOrganizationAdminAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2EnableIpamOrganizationAdminAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableIpamOrganizationAdminAccountCommandOutput> {
    return deserializeAws_ec2EnableIpamOrganizationAdminAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
