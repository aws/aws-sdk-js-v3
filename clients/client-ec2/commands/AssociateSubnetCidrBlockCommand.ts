import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateSubnetCidrBlockRequest, AssociateSubnetCidrBlockResult } from "../models/models_0";
import {
  deserializeAws_ec2AssociateSubnetCidrBlockCommand,
  serializeAws_ec2AssociateSubnetCidrBlockCommand,
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

export type AssociateSubnetCidrBlockCommandInput = AssociateSubnetCidrBlockRequest;
export type AssociateSubnetCidrBlockCommandOutput = AssociateSubnetCidrBlockResult & __MetadataBearer;

/**
 * <p>Associates a CIDR block with your subnet. You can only associate a single IPv6 CIDR
 *             block with your subnet. An IPv6 CIDR block must have a prefix length of /64.</p>
 */
export class AssociateSubnetCidrBlockCommand extends $Command<
  AssociateSubnetCidrBlockCommandInput,
  AssociateSubnetCidrBlockCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateSubnetCidrBlockCommandInput) {
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
  ): Handler<AssociateSubnetCidrBlockCommandInput, AssociateSubnetCidrBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateSubnetCidrBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateSubnetCidrBlockRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateSubnetCidrBlockResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateSubnetCidrBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AssociateSubnetCidrBlockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateSubnetCidrBlockCommandOutput> {
    return deserializeAws_ec2AssociateSubnetCidrBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
