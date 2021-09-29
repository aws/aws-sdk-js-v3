import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { BatchDeleteImageRequest, BatchDeleteImageResponse } from "../models/models_0";
import {
  deserializeAws_json1_1BatchDeleteImageCommand,
  serializeAws_json1_1BatchDeleteImageCommand,
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

export interface BatchDeleteImageCommandInput extends BatchDeleteImageRequest {}
export interface BatchDeleteImageCommandOutput extends BatchDeleteImageResponse, __MetadataBearer {}

/**
 * <p>Deletes a list of specified images within a repository in a public registry. Images are
 *          specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p>
 *          <p>You can remove a tag from an image by specifying the image's tag in your request. When
 *          you remove the last tag from an image, the image is deleted from your repository.</p>
 *          <p>You can completely delete an image (and all of its tags) by specifying the image's
 *          digest in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, BatchDeleteImageCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, BatchDeleteImageCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new BatchDeleteImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDeleteImageCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteImageCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchDeleteImageCommand extends $Command<
  BatchDeleteImageCommandInput,
  BatchDeleteImageCommandOutput,
  ECRPUBLICClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDeleteImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRPUBLICClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchDeleteImageCommandInput, BatchDeleteImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRPUBLICClient";
    const commandName = "BatchDeleteImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDeleteImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDeleteImageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDeleteImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchDeleteImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchDeleteImageCommandOutput> {
    return deserializeAws_json1_1BatchDeleteImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
