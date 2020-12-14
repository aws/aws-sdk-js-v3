import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DeleteFargateProfileRequest, DeleteFargateProfileResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteFargateProfileCommand,
  serializeAws_restJson1DeleteFargateProfileCommand,
} from "../protocols/Aws_restJson1";
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

export type DeleteFargateProfileCommandInput = DeleteFargateProfileRequest;
export type DeleteFargateProfileCommandOutput = DeleteFargateProfileResponse & __MetadataBearer;

/**
 * <p>Deletes an AWS Fargate profile.</p>
 *         <p>When you delete a Fargate profile, any pods running on Fargate that were created with the
 *             profile are deleted. If those pods match another Fargate profile, then they are scheduled
 *             on Fargate with that profile. If they no longer match any Fargate profiles, then they are not
 *             scheduled on Fargate and they may remain in a pending state.</p>
 *         <p>Only one Fargate profile in a cluster can be in the <code>DELETING</code> status at a
 *             time. You must wait for a Fargate profile to finish deleting before you can delete any
 *             other profiles in that cluster.</p>
 */
export class DeleteFargateProfileCommand extends $Command<
  DeleteFargateProfileCommandInput,
  DeleteFargateProfileCommandOutput,
  EKSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteFargateProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFargateProfileCommandInput, DeleteFargateProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DeleteFargateProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFargateProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteFargateProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteFargateProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteFargateProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFargateProfileCommandOutput> {
    return deserializeAws_restJson1DeleteFargateProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
