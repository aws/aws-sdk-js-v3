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
  SearchFacesRequest,
  SearchFacesRequestFilterSensitiveLog,
  SearchFacesResponse,
  SearchFacesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1SearchFacesCommand,
  serializeAws_json1_1SearchFacesCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface SearchFacesCommandInput extends SearchFacesRequest {}
export interface SearchFacesCommandOutput extends SearchFacesResponse, __MetadataBearer {}

/**
 * <p>For a given input face ID, searches for matching faces in the collection the face
 *       belongs to. You get a face ID when you add a face to the collection using the <a>IndexFaces</a> operation. The operation compares the features of the input face with
 *       faces in the specified collection. </p>
 *          <note>
 *             <p>You can also search faces without indexing faces by using the
 *           <code>SearchFacesByImage</code> operation.</p>
 *          </note>
 *          <p> The operation response returns an array of faces that match, ordered by similarity
 *       score with the highest similarity first. More specifically, it is an array of metadata for
 *       each face match that is found. Along with the metadata, the response also includes a
 *         <code>confidence</code> value for each face match, indicating the confidence that the
 *       specific face matches the input face. </p>
 *          <p>For an example, see Searching for a face using its face ID in the Amazon Rekognition
 *       Developer Guide.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:SearchFaces</code>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, SearchFacesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, SearchFacesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new SearchFacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchFacesCommandInput} for command's `input` shape.
 * @see {@link SearchFacesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class SearchFacesCommand extends $Command<
  SearchFacesCommandInput,
  SearchFacesCommandOutput,
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

  constructor(readonly input: SearchFacesCommandInput) {
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
  ): Handler<SearchFacesCommandInput, SearchFacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, SearchFacesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "SearchFacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchFacesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SearchFacesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchFacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchFacesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchFacesCommandOutput> {
    return deserializeAws_json1_1SearchFacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
