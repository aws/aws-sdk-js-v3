import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { GetDownloadUrlForLayerRequest, GetDownloadUrlForLayerResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetDownloadUrlForLayerCommand,
  serializeAws_json1_1GetDownloadUrlForLayerCommand,
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

export interface GetDownloadUrlForLayerCommandInput extends GetDownloadUrlForLayerRequest {}
export interface GetDownloadUrlForLayerCommandOutput extends GetDownloadUrlForLayerResponse, __MetadataBearer {}

/**
 * <p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can
 *             only get URLs for image layers that are referenced in an image.</p>
 *         <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer
 *             that is not already cached.</p>
 *          <note>
 *             <p>This operation is used by the Amazon ECR proxy and is not generally used by
 *         customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetDownloadUrlForLayerCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetDownloadUrlForLayerCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new GetDownloadUrlForLayerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDownloadUrlForLayerCommandInput} for command's `input` shape.
 * @see {@link GetDownloadUrlForLayerCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetDownloadUrlForLayerCommand extends $Command<
  GetDownloadUrlForLayerCommandInput,
  GetDownloadUrlForLayerCommandOutput,
  ECRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDownloadUrlForLayerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDownloadUrlForLayerCommandInput, GetDownloadUrlForLayerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "GetDownloadUrlForLayerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDownloadUrlForLayerRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDownloadUrlForLayerResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDownloadUrlForLayerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDownloadUrlForLayerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDownloadUrlForLayerCommandOutput> {
    return deserializeAws_json1_1GetDownloadUrlForLayerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
