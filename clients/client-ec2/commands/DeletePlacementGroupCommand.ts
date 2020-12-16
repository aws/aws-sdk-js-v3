import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeletePlacementGroupRequest } from "../models/models_2";
import {
  deserializeAws_ec2DeletePlacementGroupCommand,
  serializeAws_ec2DeletePlacementGroupCommand,
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

export type DeletePlacementGroupCommandInput = DeletePlacementGroupRequest;
export type DeletePlacementGroupCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the specified placement group. You must terminate all instances in the
 *             placement group before you can delete the placement group. For more information, see
 *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the <i>Amazon Elastic Compute Cloud User
 *                 Guide</i>.</p>
 */
export class DeletePlacementGroupCommand extends $Command<
  DeletePlacementGroupCommandInput,
  DeletePlacementGroupCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePlacementGroupCommandInput) {
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
  ): Handler<DeletePlacementGroupCommandInput, DeletePlacementGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeletePlacementGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePlacementGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePlacementGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeletePlacementGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeletePlacementGroupCommandOutput> {
    return deserializeAws_ec2DeletePlacementGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
