import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateIamInstanceProfileRequest, DisassociateIamInstanceProfileResult } from "../models/models_4";
import {
  deserializeAws_ec2DisassociateIamInstanceProfileCommand,
  serializeAws_ec2DisassociateIamInstanceProfileCommand,
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

export type DisassociateIamInstanceProfileCommandInput = DisassociateIamInstanceProfileRequest;
export type DisassociateIamInstanceProfileCommandOutput = DisassociateIamInstanceProfileResult & __MetadataBearer;

/**
 * <p>Disassociates an IAM instance profile from a running or stopped instance.</p>
 *         <p>Use <a>DescribeIamInstanceProfileAssociations</a> to get the association
 *             ID.</p>
 */
export class DisassociateIamInstanceProfileCommand extends $Command<
  DisassociateIamInstanceProfileCommandInput,
  DisassociateIamInstanceProfileCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateIamInstanceProfileCommandInput) {
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
  ): Handler<DisassociateIamInstanceProfileCommandInput, DisassociateIamInstanceProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateIamInstanceProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateIamInstanceProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateIamInstanceProfileResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DisassociateIamInstanceProfileCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2DisassociateIamInstanceProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateIamInstanceProfileCommandOutput> {
    return deserializeAws_ec2DisassociateIamInstanceProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
