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

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import {
  ImportVmImageRequest,
  ImportVmImageRequestFilterSensitiveLog,
  ImportVmImageResponse,
  ImportVmImageResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ImportVmImageCommand,
  serializeAws_restJson1ImportVmImageCommand,
} from "../protocols/Aws_restJson1";

export interface ImportVmImageCommandInput extends ImportVmImageRequest {}
export interface ImportVmImageCommandOutput extends ImportVmImageResponse, __MetadataBearer {}

/**
 * <p>When you export your virtual machine (VM) from its virtualization environment,
 * 			that process creates a set of one or more disk container files that act as
 * 			snapshots of your VM’s environment, settings, and data. The Amazon EC2 API
 * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ImportImage.html">ImportImage</a>
 * 			action uses those files to import your VM and create an AMI. To import using the
 * 			CLI command, see <a href="https://docs.aws.amazon.com/cli/latest/reference/ec2/import-image.html">import-image</a>
 *          </p>
 *          <p>You can reference the task ID from the VM import to pull in the AMI that
 * 			the import created as the base image for your Image Builder recipe.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ImportVmImageCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ImportVmImageCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ImportVmImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportVmImageCommandInput} for command's `input` shape.
 * @see {@link ImportVmImageCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 */
export class ImportVmImageCommand extends $Command<
  ImportVmImageCommandInput,
  ImportVmImageCommandOutput,
  ImagebuilderClientResolvedConfig
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

  constructor(readonly input: ImportVmImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportVmImageCommandInput, ImportVmImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ImportVmImageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ImportVmImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportVmImageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ImportVmImageResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportVmImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ImportVmImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportVmImageCommandOutput> {
    return deserializeAws_restJson1ImportVmImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
