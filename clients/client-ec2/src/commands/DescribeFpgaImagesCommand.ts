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
import { DescribeFpgaImagesRequest, DescribeFpgaImagesResult } from "../models/models_3";
import {
  deserializeAws_ec2DescribeFpgaImagesCommand,
  serializeAws_ec2DescribeFpgaImagesCommand,
} from "../protocols/Aws_ec2";

export interface DescribeFpgaImagesCommandInput extends DescribeFpgaImagesRequest {}
export interface DescribeFpgaImagesCommandOutput extends DescribeFpgaImagesResult, __MetadataBearer {}

/**
 * <p>Describes the Amazon FPGA Images (AFIs) available to you. These include public AFIs,
 * 			private AFIs that you own, and AFIs owned by other Amazon Web Services accounts for which you have load
 * 			permissions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFpgaImagesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFpgaImagesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFpgaImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFpgaImagesCommandInput} for command's `input` shape.
 * @see {@link DescribeFpgaImagesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeFpgaImagesCommand extends $Command<
  DescribeFpgaImagesCommandInput,
  DescribeFpgaImagesCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeFpgaImagesCommandInput) {
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
  ): Handler<DescribeFpgaImagesCommandInput, DescribeFpgaImagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeFpgaImagesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeFpgaImagesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFpgaImagesResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeFpgaImagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeFpgaImagesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFpgaImagesCommandOutput> {
    return deserializeAws_ec2DescribeFpgaImagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
