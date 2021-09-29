import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeLaunchTemplatesRequest, DescribeLaunchTemplatesResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeLaunchTemplatesCommand,
  serializeAws_ec2DescribeLaunchTemplatesCommand,
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DescribeLaunchTemplatesCommandInput extends DescribeLaunchTemplatesRequest {}
export interface DescribeLaunchTemplatesCommandOutput extends DescribeLaunchTemplatesResult, __MetadataBearer {}

/**
 * <p>Describes one or more launch templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeLaunchTemplatesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeLaunchTemplatesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeLaunchTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLaunchTemplatesCommandInput} for command's `input` shape.
 * @see {@link DescribeLaunchTemplatesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeLaunchTemplatesCommand extends $Command<
  DescribeLaunchTemplatesCommandInput,
  DescribeLaunchTemplatesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeLaunchTemplatesCommandInput) {
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
  ): Handler<DescribeLaunchTemplatesCommandInput, DescribeLaunchTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeLaunchTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeLaunchTemplatesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLaunchTemplatesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeLaunchTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeLaunchTemplatesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLaunchTemplatesCommandOutput> {
    return deserializeAws_ec2DescribeLaunchTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
