import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { CreateDeploymentRequest, CreateDeploymentResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDeploymentCommand,
  serializeAws_restJson1CreateDeploymentCommand,
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

export type CreateDeploymentCommandInput = CreateDeploymentRequest;
export type CreateDeploymentCommandOutput = CreateDeploymentResponse & __MetadataBearer;

/**
 * <p>Creates a continuous deployment for a target, which is a AWS IoT Greengrass core device or group of core
 *       devices. When you add a new core device to a group of core devices that has a deployment, AWS IoT Greengrass
 *       deploys that group's deployment to the new device.</p>
 *          <p>You can define one deployment for each target. When you create a new deployment for a
 *       target that has an existing deployment, you replace the previous deployment. AWS IoT Greengrass applies the
 *       new deployment to the target devices.</p>
 *          <p>Every deployment has a revision number that indicates how many deployment revisions you
 *       define for a target. Use this operation to create a new revision of an existing deployment.
 *       This operation returns the revision number of the new deployment when you create it.</p>
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the
 *         <i>AWS IoT Greengrass V2 Developer Guide</i>.</p>
 */
export class CreateDeploymentCommand extends $Command<
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
  GreengrassV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDeploymentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDeploymentCommandInput, CreateDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "CreateDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDeploymentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDeploymentResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDeploymentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDeploymentCommandOutput> {
    return deserializeAws_restJson1CreateDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
