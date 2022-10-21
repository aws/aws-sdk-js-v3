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
  ResetFpgaImageAttributeRequest,
  ResetFpgaImageAttributeRequestFilterSensitiveLog,
  ResetFpgaImageAttributeResult,
  ResetFpgaImageAttributeResultFilterSensitiveLog,
} from "../models/models_6";
import {
  deserializeAws_ec2ResetFpgaImageAttributeCommand,
  serializeAws_ec2ResetFpgaImageAttributeCommand,
} from "../protocols/Aws_ec2";

export interface ResetFpgaImageAttributeCommandInput extends ResetFpgaImageAttributeRequest {}
export interface ResetFpgaImageAttributeCommandOutput extends ResetFpgaImageAttributeResult, __MetadataBearer {}

/**
 * <p>Resets the specified attribute of the specified Amazon FPGA Image (AFI) to its default value.
 * 		    You can only reset the load permission attribute.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ResetFpgaImageAttributeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ResetFpgaImageAttributeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ResetFpgaImageAttributeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetFpgaImageAttributeCommandInput} for command's `input` shape.
 * @see {@link ResetFpgaImageAttributeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class ResetFpgaImageAttributeCommand extends $Command<
  ResetFpgaImageAttributeCommandInput,
  ResetFpgaImageAttributeCommandOutput,
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

  constructor(readonly input: ResetFpgaImageAttributeCommandInput) {
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
  ): Handler<ResetFpgaImageAttributeCommandInput, ResetFpgaImageAttributeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ResetFpgaImageAttributeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ResetFpgaImageAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetFpgaImageAttributeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ResetFpgaImageAttributeResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResetFpgaImageAttributeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ResetFpgaImageAttributeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResetFpgaImageAttributeCommandOutput> {
    return deserializeAws_ec2ResetFpgaImageAttributeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
