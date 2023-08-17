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
import {
  EnableIpamOrganizationAdminAccountRequest,
  EnableIpamOrganizationAdminAccountResult,
} from "../models/models_5";
import {
  de_EnableIpamOrganizationAdminAccountCommand,
  se_EnableIpamOrganizationAdminAccountCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableIpamOrganizationAdminAccountCommand}.
 */
export interface EnableIpamOrganizationAdminAccountCommandInput extends EnableIpamOrganizationAdminAccountRequest {}
/**
 * @public
 *
 * The output of {@link EnableIpamOrganizationAdminAccountCommand}.
 */
export interface EnableIpamOrganizationAdminAccountCommandOutput
  extends EnableIpamOrganizationAdminAccountResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Enable an Organizations member account as the IPAM admin account. You cannot select the Organizations management account as the IPAM admin account. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/enable-integ-ipam.html">Enable integration with Organizations</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableIpamOrganizationAdminAccountCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableIpamOrganizationAdminAccountCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableIpamOrganizationAdminAccountRequest
 *   DryRun: true || false,
 *   DelegatedAdminAccountId: "STRING_VALUE", // required
 * };
 * const command = new EnableIpamOrganizationAdminAccountCommand(input);
 * const response = await client.send(command);
 * // { // EnableIpamOrganizationAdminAccountResult
 * //   Success: true || false,
 * // };
 *
 * ```
 *
 * @param EnableIpamOrganizationAdminAccountCommandInput - {@link EnableIpamOrganizationAdminAccountCommandInput}
 * @returns {@link EnableIpamOrganizationAdminAccountCommandOutput}
 * @see {@link EnableIpamOrganizationAdminAccountCommandInput} for command's `input` shape.
 * @see {@link EnableIpamOrganizationAdminAccountCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class EnableIpamOrganizationAdminAccountCommand extends $Command<
  EnableIpamOrganizationAdminAccountCommandInput,
  EnableIpamOrganizationAdminAccountCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableIpamOrganizationAdminAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableIpamOrganizationAdminAccountCommand";
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
  private serialize(
    input: EnableIpamOrganizationAdminAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_EnableIpamOrganizationAdminAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableIpamOrganizationAdminAccountCommandOutput> {
    return de_EnableIpamOrganizationAdminAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
