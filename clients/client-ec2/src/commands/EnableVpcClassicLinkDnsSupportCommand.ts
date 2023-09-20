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
import { EnableVpcClassicLinkDnsSupportRequest, EnableVpcClassicLinkDnsSupportResult } from "../models/models_5";
import {
  de_EnableVpcClassicLinkDnsSupportCommand,
  se_EnableVpcClassicLinkDnsSupportCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableVpcClassicLinkDnsSupportCommand}.
 */
export interface EnableVpcClassicLinkDnsSupportCommandInput extends EnableVpcClassicLinkDnsSupportRequest {}
/**
 * @public
 *
 * The output of {@link EnableVpcClassicLinkDnsSupportCommand}.
 */
export interface EnableVpcClassicLinkDnsSupportCommandOutput
  extends EnableVpcClassicLinkDnsSupportResult,
    __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>This action is deprecated.</p>
 *          </note>
 *          <p>Enables a VPC to support DNS hostname resolution for ClassicLink. If enabled, the DNS
 * 			hostname of a linked EC2-Classic instance resolves to its private IP address when
 * 			addressed from an instance in the VPC to which it's linked. Similarly, the DNS hostname
 * 			of an instance in a VPC resolves to its private IP address when addressed from a linked
 * 			EC2-Classic instance.</p>
 *          <p>You must specify a VPC ID in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, EnableVpcClassicLinkDnsSupportCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, EnableVpcClassicLinkDnsSupportCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // EnableVpcClassicLinkDnsSupportRequest
 *   VpcId: "STRING_VALUE",
 * };
 * const command = new EnableVpcClassicLinkDnsSupportCommand(input);
 * const response = await client.send(command);
 * // { // EnableVpcClassicLinkDnsSupportResult
 * //   Return: true || false,
 * // };
 *
 * ```
 *
 * @param EnableVpcClassicLinkDnsSupportCommandInput - {@link EnableVpcClassicLinkDnsSupportCommandInput}
 * @returns {@link EnableVpcClassicLinkDnsSupportCommandOutput}
 * @see {@link EnableVpcClassicLinkDnsSupportCommandInput} for command's `input` shape.
 * @see {@link EnableVpcClassicLinkDnsSupportCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class EnableVpcClassicLinkDnsSupportCommand extends $Command<
  EnableVpcClassicLinkDnsSupportCommandInput,
  EnableVpcClassicLinkDnsSupportCommandOutput,
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
  constructor(readonly input: EnableVpcClassicLinkDnsSupportCommandInput) {
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
  ): Handler<EnableVpcClassicLinkDnsSupportCommandInput, EnableVpcClassicLinkDnsSupportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableVpcClassicLinkDnsSupportCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "EnableVpcClassicLinkDnsSupportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "EnableVpcClassicLinkDnsSupport",
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
  private serialize(
    input: EnableVpcClassicLinkDnsSupportCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_EnableVpcClassicLinkDnsSupportCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableVpcClassicLinkDnsSupportCommandOutput> {
    return de_EnableVpcClassicLinkDnsSupportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
