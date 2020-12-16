import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { DeploySystemInstanceRequest, DeploySystemInstanceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeploySystemInstanceCommand,
  serializeAws_json1_1DeploySystemInstanceCommand,
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

export type DeploySystemInstanceCommandInput = DeploySystemInstanceRequest;
export type DeploySystemInstanceCommandOutput = DeploySystemInstanceResponse & __MetadataBearer;

/**
 * <p>
 *             <b>Greengrass and Cloud Deployments</b>
 *          </p>
 *          <p>Deploys the system instance to the target specified in <code>CreateSystemInstance</code>. </p>
 *          <p>
 *             <b>Greengrass Deployments</b>
 *          </p>
 *          <p>If the system or any workflows and entities have been updated before this action is called, then the deployment will create a new Amazon Simple Storage Service
 *          resource file and then deploy it.</p>
 *          <p>Since this action creates a Greengrass deployment on the caller's behalf, the calling identity must have write permissions
 *          to the specified Greengrass group. Otherwise, the call will fail with an authorization error.</p>
 *          <p>For information about the artifacts that get added to your Greengrass core device when you use this API, see <a href="https://docs.aws.amazon.com/thingsgraph/latest/ug/iot-tg-greengrass.html">AWS IoT Things Graph and AWS IoT Greengrass</a>.</p>
 */
export class DeploySystemInstanceCommand extends $Command<
  DeploySystemInstanceCommandInput,
  DeploySystemInstanceCommandOutput,
  IoTThingsGraphClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeploySystemInstanceCommandInput) {
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
  ): Handler<DeploySystemInstanceCommandInput, DeploySystemInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTThingsGraphClient";
    const commandName = "DeploySystemInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeploySystemInstanceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeploySystemInstanceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeploySystemInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeploySystemInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeploySystemInstanceCommandOutput> {
    return deserializeAws_json1_1DeploySystemInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
