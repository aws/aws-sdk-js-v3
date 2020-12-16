import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateFpgaImageRequest, CreateFpgaImageResult } from "../models/models_0";
import { deserializeAws_ec2CreateFpgaImageCommand, serializeAws_ec2CreateFpgaImageCommand } from "../protocols/Aws_ec2";
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

export type CreateFpgaImageCommandInput = CreateFpgaImageRequest;
export type CreateFpgaImageCommandOutput = CreateFpgaImageResult & __MetadataBearer;

/**
 * <p>Creates an Amazon FPGA Image (AFI) from the specified design checkpoint (DCP).</p>
 *          <p>The create operation is asynchronous. To verify that the AFI is ready for use,
 *          check the output logs.</p>
 *          <p>An AFI contains the FPGA bitstream that is ready to download to an FPGA.
 *          You can securely deploy an AFI on multiple FPGA-accelerated instances.
 *          For more information, see the <a href="https://github.com/aws/aws-fpga/">AWS FPGA Hardware Development Kit</a>.</p>
 */
export class CreateFpgaImageCommand extends $Command<
  CreateFpgaImageCommandInput,
  CreateFpgaImageCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFpgaImageCommandInput) {
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
  ): Handler<CreateFpgaImageCommandInput, CreateFpgaImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateFpgaImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFpgaImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFpgaImageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateFpgaImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateFpgaImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFpgaImageCommandOutput> {
    return deserializeAws_ec2CreateFpgaImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
