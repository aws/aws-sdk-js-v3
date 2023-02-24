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
  DisableIpamOrganizationAdminAccountRequest,
  DisableIpamOrganizationAdminAccountRequestFilterSensitiveLog,
  DisableIpamOrganizationAdminAccountResult,
  DisableIpamOrganizationAdminAccountResultFilterSensitiveLog,
} from "../models/models_5";
import {
  deserializeAws_ec2DisableIpamOrganizationAdminAccountCommand,
  serializeAws_ec2DisableIpamOrganizationAdminAccountCommand,
} from "../protocols/Aws_ec2";

export interface DisableIpamOrganizationAdminAccountCommandInput extends DisableIpamOrganizationAdminAccountRequest {}
export interface DisableIpamOrganizationAdminAccountCommandOutput
  extends DisableIpamOrganizationAdminAccountResult,
    __MetadataBearer {}

/**
 * <p>Disable the IPAM account. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/enable-integ-ipam.html">Enable integration with Organizations</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableIpamOrganizationAdminAccountCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableIpamOrganizationAdminAccountCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisableIpamOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableIpamOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link DisableIpamOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DisableIpamOrganizationAdminAccountCommand extends $Command<
  DisableIpamOrganizationAdminAccountCommandInput,
  DisableIpamOrganizationAdminAccountCommandOutput,
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

  constructor(readonly input: DisableIpamOrganizationAdminAccountCommandInput) {
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
  ): Handler<DisableIpamOrganizationAdminAccountCommandInput, DisableIpamOrganizationAdminAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableIpamOrganizationAdminAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableIpamOrganizationAdminAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableIpamOrganizationAdminAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DisableIpamOrganizationAdminAccountResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisableIpamOrganizationAdminAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DisableIpamOrganizationAdminAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableIpamOrganizationAdminAccountCommandOutput> {
    return deserializeAws_ec2DisableIpamOrganizationAdminAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
