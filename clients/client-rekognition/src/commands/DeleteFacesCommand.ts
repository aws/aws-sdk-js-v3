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
  DeleteFacesRequest,
  DeleteFacesRequestFilterSensitiveLog,
  DeleteFacesResponse,
  DeleteFacesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteFacesCommand,
  serializeAws_json1_1DeleteFacesCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 *
 * The input for {@link DeleteFacesCommand}.
 */
export interface DeleteFacesCommandInput extends DeleteFacesRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFacesCommand}.
 */
export interface DeleteFacesCommandOutput extends DeleteFacesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes faces from a collection. You specify a collection ID and an array of face IDs
 *       to remove from the collection.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:DeleteFaces</code>
 *       action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DeleteFacesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DeleteFacesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const command = new DeleteFacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteFacesCommandInput - {@link DeleteFacesCommandInput}
 * @returns {@link DeleteFacesCommandOutput}
 * @see {@link DeleteFacesCommandInput} for command's `input` shape.
 * @see {@link DeleteFacesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 *
 * @example To delete a face
 * ```javascript
 * // This operation deletes one or more faces from a Rekognition collection.
 * const input = {
 *   "CollectionId": "myphotos",
 *   "FaceIds": [
 *     "ff43d742-0c13-5d16-a3e8-03d3f58e980b"
 *   ]
 * };
 * const command = new DeleteFacesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DeletedFaces": [
 *     "ff43d742-0c13-5d16-a3e8-03d3f58e980b"
 *   ]
 * }
 * *\/
 * // example id: to-delete-a-face-1482182799377
 * ```
 *
 */
export class DeleteFacesCommand extends $Command<
  DeleteFacesCommandInput,
  DeleteFacesCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DeleteFacesCommandInput) {
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
  ): Handler<DeleteFacesCommandInput, DeleteFacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteFacesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DeleteFacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteFacesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteFacesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteFacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteFacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFacesCommandOutput> {
    return deserializeAws_json1_1DeleteFacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
