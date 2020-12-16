import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteLaunchTemplateVersionsRequest, DeleteLaunchTemplateVersionsResult } from "../models/models_1";
import {
  deserializeAws_ec2DeleteLaunchTemplateVersionsCommand,
  serializeAws_ec2DeleteLaunchTemplateVersionsCommand,
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

export type DeleteLaunchTemplateVersionsCommandInput = DeleteLaunchTemplateVersionsRequest;
export type DeleteLaunchTemplateVersionsCommandOutput = DeleteLaunchTemplateVersionsResult & __MetadataBearer;

/**
 * <p>Deletes one or more versions of a launch template. You cannot delete the default
 *             version of a launch template; you must first assign a different version as the default.
 *             If the default version is the only version for the launch template, you must delete the
 *             entire launch template using <a>DeleteLaunchTemplate</a>.</p>
 */
export class DeleteLaunchTemplateVersionsCommand extends $Command<
  DeleteLaunchTemplateVersionsCommandInput,
  DeleteLaunchTemplateVersionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLaunchTemplateVersionsCommandInput) {
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
  ): Handler<DeleteLaunchTemplateVersionsCommandInput, DeleteLaunchTemplateVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteLaunchTemplateVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLaunchTemplateVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLaunchTemplateVersionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLaunchTemplateVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteLaunchTemplateVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteLaunchTemplateVersionsCommandOutput> {
    return deserializeAws_ec2DeleteLaunchTemplateVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
