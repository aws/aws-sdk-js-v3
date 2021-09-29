import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { CreateComponentVersionRequest, CreateComponentVersionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateComponentVersionCommand,
  serializeAws_restJson1CreateComponentVersionCommand,
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

export interface CreateComponentVersionCommandInput extends CreateComponentVersionRequest {}
export interface CreateComponentVersionCommandOutput extends CreateComponentVersionResponse, __MetadataBearer {}

/**
 * <p>Creates a component. Components are software that run on Greengrass core devices. After you
 *       develop and test a component on your core device, you can use this operation to upload your
 *       component to IoT Greengrass. Then, you can deploy the component to other core devices.</p>
 *          <p>You can use this operation to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Create components from recipes</b>
 *                </p>
 *                <p>Create a component from a recipe, which is a file that defines the component's
 *           metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For
 *           more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/component-recipe-reference.html">IoT Greengrass component recipe
 *             reference</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
 *                <p>To create a component from a recipe, specify <code>inlineRecipe</code> when you call
 *           this operation.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Create components from Lambda functions</b>
 *                </p>
 *                <p>Create a component from an Lambda function that runs on IoT Greengrass. This creates a recipe
 *           and artifacts from the Lambda function's deployment package. You can use this operation to
 *           migrate Lambda functions from IoT Greengrass V1 to IoT Greengrass V2.</p>
 *                <p>This function only accepts Lambda functions that use the following runtimes:</p>
 *                <ul>
 *                   <li>
 *                      <p>Python 2.7 – <code>python2.7</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Python 3.7 – <code>python3.7</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Python 3.8 – <code>python3.8</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Java 8 – <code>java8</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Node.js 10 – <code>nodejs10.x</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>Node.js 12 – <code>nodejs12.x</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *                <p>To create a component from a Lambda function, specify <code>lambdaFunction</code>
 *           when you call this operation.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, CreateComponentVersionCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, CreateComponentVersionCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new CreateComponentVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateComponentVersionCommandInput} for command's `input` shape.
 * @see {@link CreateComponentVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateComponentVersionCommand extends $Command<
  CreateComponentVersionCommandInput,
  CreateComponentVersionCommandOutput,
  GreengrassV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateComponentVersionCommandInput) {
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
  ): Handler<CreateComponentVersionCommandInput, CreateComponentVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "CreateComponentVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateComponentVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateComponentVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateComponentVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateComponentVersionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateComponentVersionCommandOutput> {
    return deserializeAws_restJson1CreateComponentVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
