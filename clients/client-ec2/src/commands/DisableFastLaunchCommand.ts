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
import { DisableFastLaunchRequest, DisableFastLaunchResult } from "../models/models_4";
import {
  deserializeAws_ec2DisableFastLaunchCommand,
  serializeAws_ec2DisableFastLaunchCommand,
} from "../protocols/Aws_ec2";

export interface DisableFastLaunchCommandInput extends DisableFastLaunchRequest {}
export interface DisableFastLaunchCommandOutput extends DisableFastLaunchResult, __MetadataBearer {}

/**
 * <p>Discontinue faster launching for a Windows AMI, and clean up existing pre-provisioned snapshots.
 * 			When you disable faster launching, the AMI uses the standard launch process for each
 * 			instance. All pre-provisioned snapshots must be removed before you can enable faster launching again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DisableFastLaunchCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DisableFastLaunchCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DisableFastLaunchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableFastLaunchCommandInput} for command's `input` shape.
 * @see {@link DisableFastLaunchCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DisableFastLaunchCommand extends $Command<
  DisableFastLaunchCommandInput,
  DisableFastLaunchCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisableFastLaunchCommandInput) {
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
  ): Handler<DisableFastLaunchCommandInput, DisableFastLaunchCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisableFastLaunchCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableFastLaunchRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisableFastLaunchResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableFastLaunchCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DisableFastLaunchCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableFastLaunchCommandOutput> {
    return deserializeAws_ec2DisableFastLaunchCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
