import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { MoveAddressToVpcRequest, MoveAddressToVpcResult } from "../models/models_4";
import {
  deserializeAws_ec2MoveAddressToVpcCommand,
  serializeAws_ec2MoveAddressToVpcCommand,
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

export type MoveAddressToVpcCommandInput = MoveAddressToVpcRequest;
export type MoveAddressToVpcCommandOutput = MoveAddressToVpcResult & __MetadataBearer;

/**
 * <p>Moves an Elastic IP address from the EC2-Classic platform to the EC2-VPC platform. The
 *       Elastic IP address must be allocated to your account for more than 24 hours, and it must not
 *       be associated with an instance. After the Elastic IP address is moved, it is no longer
 *       available for use in the EC2-Classic platform, unless you move it back using the
 *         <a>RestoreAddressToClassic</a> request. You cannot move an Elastic IP address that was
 *       originally allocated for use in the EC2-VPC platform to the EC2-Classic platform. </p>
 */
export class MoveAddressToVpcCommand extends $Command<
  MoveAddressToVpcCommandInput,
  MoveAddressToVpcCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: MoveAddressToVpcCommandInput) {
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
  ): Handler<MoveAddressToVpcCommandInput, MoveAddressToVpcCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "MoveAddressToVpcCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: MoveAddressToVpcRequest.filterSensitiveLog,
      outputFilterSensitiveLog: MoveAddressToVpcResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: MoveAddressToVpcCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2MoveAddressToVpcCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<MoveAddressToVpcCommandOutput> {
    return deserializeAws_ec2MoveAddressToVpcCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
