import { ECRPUBLICClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRPUBLICClient";
import { CompleteLayerUploadRequest, CompleteLayerUploadResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CompleteLayerUploadCommand,
  serializeAws_json1_1CompleteLayerUploadCommand,
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

export interface CompleteLayerUploadCommandInput extends CompleteLayerUploadRequest {}
export interface CompleteLayerUploadCommandOutput extends CompleteLayerUploadResponse, __MetadataBearer {}

/**
 * <p>Informs Amazon ECR that the image layer upload has completed for a specified public registry,
 *          repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of
 *          the image layer for data validation purposes.</p>
 *          <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image
 *          layer to verify that the upload has completed.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, CompleteLayerUploadCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, CompleteLayerUploadCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new CompleteLayerUploadCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CompleteLayerUploadCommandInput} for command's `input` shape.
 * @see {@link CompleteLayerUploadCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CompleteLayerUploadCommand extends $Command<
  CompleteLayerUploadCommandInput,
  CompleteLayerUploadCommandOutput,
  ECRPUBLICClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CompleteLayerUploadCommandInput) {
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
  ): Handler<CompleteLayerUploadCommandInput, CompleteLayerUploadCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRPUBLICClient";
    const commandName = "CompleteLayerUploadCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CompleteLayerUploadRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CompleteLayerUploadResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CompleteLayerUploadCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CompleteLayerUploadCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CompleteLayerUploadCommandOutput> {
    return deserializeAws_json1_1CompleteLayerUploadCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
