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

import {
  DetectModerationLabelsRequest,
  DetectModerationLabelsRequestFilterSensitiveLog,
  DetectModerationLabelsResponse,
  DetectModerationLabelsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DetectModerationLabelsCommand,
  serializeAws_json1_1DetectModerationLabelsCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface DetectModerationLabelsCommandInput extends DetectModerationLabelsRequest {}
export interface DetectModerationLabelsCommandOutput extends DetectModerationLabelsResponse, __MetadataBearer {}

/**
 * <p>Detects unsafe content in a specified JPEG or PNG format image. Use
 *         <code>DetectModerationLabels</code> to moderate images depending on your requirements. For
 *       example, you might want to filter images that contain nudity, but not images containing
 *       suggestive content.</p>
 *          <p>To filter images, use the labels returned by <code>DetectModerationLabels</code> to
 *       determine which types of content are appropriate.</p>
 *          <p>For information about moderation labels, see Detecting Unsafe Content in the
 *       Amazon Rekognition Developer Guide.</p>
 *          <p>You pass the input image either as base64-encoded image bytes or as a reference to an
 *       image in an Amazon S3 bucket. If you use the
 *       AWS
 *       CLI to call Amazon Rekognition operations, passing image bytes is not
 *       supported. The image must be either a PNG or JPEG formatted file. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DetectModerationLabelsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DetectModerationLabelsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DetectModerationLabelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectModerationLabelsCommandInput} for command's `input` shape.
 * @see {@link DetectModerationLabelsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class DetectModerationLabelsCommand extends $Command<
  DetectModerationLabelsCommandInput,
  DetectModerationLabelsCommandOutput,
  RekognitionClientResolvedConfig
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

  constructor(readonly input: DetectModerationLabelsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DetectModerationLabelsCommandInput, DetectModerationLabelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetectModerationLabelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DetectModerationLabelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DetectModerationLabelsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DetectModerationLabelsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DetectModerationLabelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DetectModerationLabelsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DetectModerationLabelsCommandOutput> {
    return deserializeAws_json1_1DetectModerationLabelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
