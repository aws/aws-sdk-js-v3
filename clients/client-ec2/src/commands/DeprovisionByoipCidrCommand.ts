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
  DeprovisionByoipCidrRequest,
  DeprovisionByoipCidrRequestFilterSensitiveLog,
  DeprovisionByoipCidrResult,
  DeprovisionByoipCidrResultFilterSensitiveLog,
} from "../models/models_3";
import {
  deserializeAws_ec2DeprovisionByoipCidrCommand,
  serializeAws_ec2DeprovisionByoipCidrCommand,
} from "../protocols/Aws_ec2";

export interface DeprovisionByoipCidrCommandInput extends DeprovisionByoipCidrRequest {}
export interface DeprovisionByoipCidrCommandOutput extends DeprovisionByoipCidrResult, __MetadataBearer {}

/**
 * <p>Releases the specified address range that you provisioned for use with your Amazon Web Services resources
 *          through bring your own IP addresses (BYOIP) and deletes the corresponding address pool.</p>
 *          <p>Before you can release an address range, you must stop advertising it using <a>WithdrawByoipCidr</a> and you must not have any IP addresses allocated from its
 *          address range.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeprovisionByoipCidrCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeprovisionByoipCidrCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeprovisionByoipCidrCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeprovisionByoipCidrCommandInput} for command's `input` shape.
 * @see {@link DeprovisionByoipCidrCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeprovisionByoipCidrCommand extends $Command<
  DeprovisionByoipCidrCommandInput,
  DeprovisionByoipCidrCommandOutput,
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

  constructor(readonly input: DeprovisionByoipCidrCommandInput) {
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
  ): Handler<DeprovisionByoipCidrCommandInput, DeprovisionByoipCidrCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeprovisionByoipCidrCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeprovisionByoipCidrCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeprovisionByoipCidrRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeprovisionByoipCidrResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeprovisionByoipCidrCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeprovisionByoipCidrCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeprovisionByoipCidrCommandOutput> {
    return deserializeAws_ec2DeprovisionByoipCidrCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
