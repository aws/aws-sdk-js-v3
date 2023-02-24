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
  ListFacesRequest,
  ListFacesRequestFilterSensitiveLog,
  ListFacesResponse,
  ListFacesResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_json1_1ListFacesCommand, serializeAws_json1_1ListFacesCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

export interface ListFacesCommandInput extends ListFacesRequest {}
export interface ListFacesCommandOutput extends ListFacesResponse, __MetadataBearer {}

/**
 * <p>Returns metadata for faces in the specified collection. This metadata
 *       includes information such as the bounding box coordinates, the confidence (that the bounding
 *       box contains a face), and face ID. For an example, see Listing Faces in a Collection in the
 *       Amazon Rekognition Developer Guide.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:ListFaces</code>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, ListFacesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, ListFacesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new ListFacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFacesCommandInput} for command's `input` shape.
 * @see {@link ListFacesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 */
export class ListFacesCommand extends $Command<
  ListFacesCommandInput,
  ListFacesCommandOutput,
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

  constructor(readonly input: ListFacesCommandInput) {
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
  ): Handler<ListFacesCommandInput, ListFacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListFacesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "ListFacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListFacesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListFacesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListFacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListFacesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFacesCommandOutput> {
    return deserializeAws_json1_1ListFacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
