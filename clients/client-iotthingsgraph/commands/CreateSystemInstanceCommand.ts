import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { CreateSystemInstanceRequest, CreateSystemInstanceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateSystemInstanceCommand,
  serializeAws_json1_1CreateSystemInstanceCommand,
} from "../protocols/Aws_json1_1";
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

export type CreateSystemInstanceCommandInput = CreateSystemInstanceRequest;
export type CreateSystemInstanceCommandOutput = CreateSystemInstanceResponse & __MetadataBearer;

/**
 * <p>Creates a system instance. </p>
 *          <p>This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is
 *             specified by the <code>greengrassGroupName</code> parameter. It also adds a file to the S3 bucket specified by the <code>s3BucketName</code> parameter. You need to
 *             call <code>DeploySystemInstance</code> after running this action.</p>
 *          <p>For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions
 *          to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.</p>
 *          <p>For cloud deployments, this action requires a <code>flowActionsRoleArn</code> value. This is an IAM role
 *       that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.</p>
 *          <p>If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</p>
 */
export class CreateSystemInstanceCommand extends $Command<
  CreateSystemInstanceCommandInput,
  CreateSystemInstanceCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSystemInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTThingsGraphClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSystemInstanceCommandInput, CreateSystemInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "CreateSystemInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSystemInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSystemInstanceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSystemInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateSystemInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSystemInstanceCommandOutput> {
    return deserializeAws_json1_1CreateSystemInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
