// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import {
  CreateSystemInstanceRequest,
  CreateSystemInstanceRequestFilterSensitiveLog,
  CreateSystemInstanceResponse,
  CreateSystemInstanceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateSystemInstanceCommand,
  serializeAws_json1_1CreateSystemInstanceCommand,
} from "../protocols/Aws_json1_1";

export interface CreateSystemInstanceCommandInput extends CreateSystemInstanceRequest {}
export interface CreateSystemInstanceCommandOutput extends CreateSystemInstanceResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Creates a system instance. </p>
 *          <p>This action validates the system instance, prepares the deployment-related resources. For Greengrass deployments, it updates the Greengrass group that is
 *             specified by the <code>greengrassGroupName</code> parameter. It also adds a file to the S3 bucket specified by the <code>s3BucketName</code> parameter. You need to
 *             call <code>DeploySystemInstance</code> after running this action.</p>
 *          <p>For Greengrass deployments, since this action modifies and adds resources to a Greengrass group and an S3 bucket on the caller's behalf, the calling identity must have write permissions
 *          to both the specified Greengrass group and S3 bucket. Otherwise, the call will fail with an authorization error.</p>
 *          <p>For cloud deployments, this action requires a <code>flowActionsRoleArn</code> value. This is an IAM role
 *       that has permissions to access AWS services, such as AWS Lambda and AWS IoT, that the flow uses when it executes.</p>
 *          <p>If the definition document doesn't specify a version of the user's namespace, the latest version will be used by default.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, CreateSystemInstanceCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, CreateSystemInstanceCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new CreateSystemInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSystemInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateSystemInstanceCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 */
export class CreateSystemInstanceCommand extends $Command<
  CreateSystemInstanceCommandInput,
  CreateSystemInstanceCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSystemInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "CreateSystemInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSystemInstanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSystemInstanceResponseFilterSensitiveLog,
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
