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
  DeleteImageRequest,
  DeleteImageRequestFilterSensitiveLog,
  DeleteImageResponse,
  DeleteImageResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteImageCommand,
  serializeAws_restJson1DeleteImageCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteImageCommandInput extends DeleteImageRequest {}
export interface DeleteImageCommandOutput extends DeleteImageResponse, __MetadataBearer {}

/**
 * <p>Deletes an Image Builder image resource. This does not delete any EC2 AMIs or ECR container images
 * 			that are created during the image build process. You must clean those up separately,
 * 			using the appropriate Amazon EC2 or Amazon ECR console actions, or API or CLI commands.</p>
 *          <ul>
 *             <li>
 *                <p>To deregister an EC2 Linux AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/deregister-ami.html">Deregister
 * 						your Linux AMI</a> in the <i>
 *                      <i>Amazon EC2 User Guide</i>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>To deregister an EC2 Windows AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/deregister-ami.html">Deregister
 * 						your Windows AMI</a> in the <i>
 *                      <i>Amazon EC2 Windows Guide</i>
 *                   </i>.</p>
 *             </li>
 *             <li>
 *                <p>To delete a container image from Amazon ECR, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/delete_image.html">Deleting
 * 						an image</a> in the <i>Amazon ECR User Guide</i>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, DeleteImageCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, DeleteImageCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new DeleteImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteImageCommandInput} for command's `input` shape.
 * @see {@link DeleteImageCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 */
export class DeleteImageCommand extends $Command<
  DeleteImageCommandInput,
  DeleteImageCommandOutput,
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

  constructor(readonly input: DeleteImageCommandInput) {
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
  ): Handler<DeleteImageCommandInput, DeleteImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteImageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "DeleteImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteImageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteImageResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteImageCommandOutput> {
    return deserializeAws_restJson1DeleteImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
