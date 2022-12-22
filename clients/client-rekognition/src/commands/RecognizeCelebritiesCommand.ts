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
  RecognizeCelebritiesRequest,
  RecognizeCelebritiesRequestFilterSensitiveLog,
  RecognizeCelebritiesResponse,
  RecognizeCelebritiesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RecognizeCelebritiesCommand,
  serializeAws_json1_1RecognizeCelebritiesCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface RecognizeCelebritiesCommandInput extends RecognizeCelebritiesRequest {}
export interface RecognizeCelebritiesCommandOutput extends RecognizeCelebritiesResponse, __MetadataBearer {}

/**
 * <p>Returns an array of celebrities recognized in the input image. For more
 *       information, see Recognizing celebrities in the Amazon Rekognition Developer Guide. </p>
 *          <p>
 *             <code>RecognizeCelebrities</code> returns the 64 largest faces in the image. It lists
 *       the recognized celebrities in the <code>CelebrityFaces</code> array and any unrecognized faces
 *       in the <code>UnrecognizedFaces</code> array. <code>RecognizeCelebrities</code> doesn't return
 *       celebrities whose faces aren't among the largest 64 faces in the image.</p>
 *          <p>For each celebrity recognized, <code>RecognizeCelebrities</code> returns a
 *         <code>Celebrity</code> object. The <code>Celebrity</code> object contains the celebrity
 *       name, ID, URL links to additional information, match confidence, and a
 *         <code>ComparedFace</code> object that you can use to locate the celebrity's face on the
 *       image.</p>
 *          <p>Amazon Rekognition doesn't retain information about which images a celebrity has been recognized
 *       in. Your application must store this information and use the <code>Celebrity</code> ID
 *       property as a unique identifier for the celebrity. If you don't store the celebrity name or
 *       additional information URLs returned by <code>RecognizeCelebrities</code>, you will need the
 *       ID to identify the celebrity in a call to the <a>GetCelebrityInfo</a>
 *       operation.</p>
 *          <p>You pass the input image either as base64-encoded image bytes or as a reference to an
 *       image in an Amazon S3 bucket. If you use the
 *       AWS
 *       CLI to call Amazon Rekognition operations, passing image bytes is not
 *       supported. The image must be either a PNG or JPEG formatted file. </p>
 *          <p>For an example, see Recognizing celebrities in an image in the Amazon Rekognition
 *       Developer Guide.</p>
 *          <p>This operation requires permissions to perform the
 *         <code>rekognition:RecognizeCelebrities</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, RecognizeCelebritiesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, RecognizeCelebritiesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new RecognizeCelebritiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RecognizeCelebritiesCommandInput} for command's `input` shape.
 * @see {@link RecognizeCelebritiesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class RecognizeCelebritiesCommand extends $Command<
  RecognizeCelebritiesCommandInput,
  RecognizeCelebritiesCommandOutput,
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

  constructor(readonly input: RecognizeCelebritiesCommandInput) {
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
  ): Handler<RecognizeCelebritiesCommandInput, RecognizeCelebritiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RecognizeCelebritiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "RecognizeCelebritiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RecognizeCelebritiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RecognizeCelebritiesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RecognizeCelebritiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RecognizeCelebritiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RecognizeCelebritiesCommandOutput> {
    return deserializeAws_json1_1RecognizeCelebritiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
