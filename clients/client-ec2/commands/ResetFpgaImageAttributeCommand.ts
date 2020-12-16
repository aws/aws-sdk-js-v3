import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ResetFpgaImageAttributeRequest, ResetFpgaImageAttributeResult } from "../models/models_4";
import {
  deserializeAws_ec2ResetFpgaImageAttributeCommand,
  serializeAws_ec2ResetFpgaImageAttributeCommand,
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

export type ResetFpgaImageAttributeCommandInput = ResetFpgaImageAttributeRequest;
export type ResetFpgaImageAttributeCommandOutput = ResetFpgaImageAttributeResult & __MetadataBearer;

/**
 * <p>Resets the specified attribute of the specified Amazon FPGA Image (AFI) to its default value.
 * 		    You can only reset the load permission attribute.</p>
 */
export class ResetFpgaImageAttributeCommand extends $Command<
  ResetFpgaImageAttributeCommandInput,
  ResetFpgaImageAttributeCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ResetFpgaImageAttributeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResetFpgaImageAttributeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResetFpgaImageAttributeResult.filterSensitiveLog,
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
