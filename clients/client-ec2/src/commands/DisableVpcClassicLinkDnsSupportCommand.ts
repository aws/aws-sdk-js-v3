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
import { DisableVpcClassicLinkDnsSupportRequest, DisableVpcClassicLinkDnsSupportResult } from "../models/models_5";
import {
  de_DisableVpcClassicLinkDnsSupportCommand,
  se_DisableVpcClassicLinkDnsSupportCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DisableVpcClassicLinkDnsSupportCommand}.
 */
export interface DisableVpcClassicLinkDnsSupportCommandInput extends DisableVpcClassicLinkDnsSupportRequest {}
/**
 * @public
 *
 * The output of {@link DisableVpcClassicLinkDnsSupportCommand}.
 */
export interface DisableVpcClassicLinkDnsSupportCommandOutput
  extends DisableVpcClassicLinkDnsSupportResult,
    __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Disables ClassicLink DNS support for a VPC. If disabled, DNS hostnames resolve to
 * 			public IP addresses when addressed between a linked EC2-Classic instance and instances
 * 			in the VPC to which it's linked.</p>
 *          <p>You must specify a VPC ID in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableVpcClassicLinkDnsSupportCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableVpcClassicLinkDnsSupportCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DisableVpcClassicLinkDnsSupportRequest
 *   VpcId: "STRING_VALUE",
 * };
 * const command = new DisableVpcClassicLinkDnsSupportCommand(input);
 * const response = await client.send(command);
 * // { // DisableVpcClassicLinkDnsSupportResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param DisableVpcClassicLinkDnsSupportCommandInput - {@link DisableVpcClassicLinkDnsSupportCommandInput}
 * @returns {@link DisableVpcClassicLinkDnsSupportCommandOutput}
 * @see {@link DisableVpcClassicLinkDnsSupportCommandInput} for command's `input` shape.
 * @see {@link DisableVpcClassicLinkDnsSupportCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DisableVpcClassicLinkDnsSupportCommand extends $Command<
  DisableVpcClassicLinkDnsSupportCommandInput,
  DisableVpcClassicLinkDnsSupportCommandOutput,
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
  constructor(readonly input: DisableVpcClassicLinkDnsSupportCommandInput) {
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
  ): Handler<DisableVpcClassicLinkDnsSupportCommandInput, DisableVpcClassicLinkDnsSupportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableVpcClassicLinkDnsSupportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableVpcClassicLinkDnsSupportCommand";
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
    input: DisableVpcClassicLinkDnsSupportCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DisableVpcClassicLinkDnsSupportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisableVpcClassicLinkDnsSupportCommandOutput> {
    return de_DisableVpcClassicLinkDnsSupportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
