// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DeleteCollectionRequest, DeleteCollectionResponse } from "../models/models_0";
import { de_DeleteCollectionCommand, se_DeleteCollectionCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteCollectionCommand}.
 */
export interface DeleteCollectionCommandInput extends DeleteCollectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCollectionCommand}.
 */
export interface DeleteCollectionCommandOutput extends DeleteCollectionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes the specified collection. Note that this operation removes all faces in the
 *       collection. For an example, see <a href="https://docs.aws.amazon.com/rekognition/latest/dg/delete-collection-procedure.html">Deleting a
 *       collection</a>.</p>
 *          <p>This operation requires permissions to perform the
 *         <code>rekognition:DeleteCollection</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DeleteCollectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DeleteCollectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // DeleteCollectionRequest
 *   CollectionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCollectionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCollectionResponse
 * //   StatusCode: Number("int"),
 * // };
 *
 * ```
 *
 * @param DeleteCollectionCommandInput - {@link DeleteCollectionCommandInput}
 * @returns {@link DeleteCollectionCommandOutput}
 * @see {@link DeleteCollectionCommandInput} for command's `input` shape.
 * @see {@link DeleteCollectionCommandOutput} for command's `response` shape.
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
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 * @example To delete a collection
 * ```javascript
 * // This operation deletes a Rekognition collection.
 * const input = {
 *   "CollectionId": "myphotos"
 * };
 * const command = new DeleteCollectionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "StatusCode": 200
 * }
 * *\/
 * // example id: to-delete-a-collection-1481838179973
 * ```
 *
 */
export class DeleteCollectionCommand extends $Command<
  DeleteCollectionCommandInput,
  DeleteCollectionCommandOutput,
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
  constructor(readonly input: DeleteCollectionCommandInput) {
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
  ): Handler<DeleteCollectionCommandInput, DeleteCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCollectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DeleteCollectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RekognitionService",
        operation: "DeleteCollection",
      },
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
  private serialize(input: DeleteCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteCollectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCollectionCommandOutput> {
    return de_DeleteCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
