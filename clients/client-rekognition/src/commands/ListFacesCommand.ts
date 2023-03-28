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

import { ListFacesRequest, ListFacesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListFacesCommand, serializeAws_json1_1ListFacesCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 *
 * The input for {@link ListFacesCommand}.
 */
export interface ListFacesCommandInput extends ListFacesRequest {}
/**
 * @public
 *
 * The output of {@link ListFacesCommand}.
 */
export interface ListFacesCommandOutput extends ListFacesResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // ListFacesRequest
 *   CollectionId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListFacesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListFacesCommandInput - {@link ListFacesCommandInput}
 * @returns {@link ListFacesCommandOutput}
 * @see {@link ListFacesCommandInput} for command's `input` shape.
 * @see {@link ListFacesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Pagination token in the request is not valid.</p>
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
 * @example To list the faces in a collection
 * ```javascript
 * // This operation lists the faces in a Rekognition collection.
 * const input = {
 *   "CollectionId": "myphotos",
 *   "MaxResults": 20
 * };
 * const command = new ListFacesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Faces": [
 *     {
 *       "BoundingBox": {
 *         "Height": 0.18000000715255737,
 *         "Left": 0.5555559992790222,
 *         "Top": 0.336667001247406,
 *         "Width": 0.23999999463558197
 *       },
 *       "Confidence": 100,
 *       "FaceId": "1c62e8b5-69a7-5b7d-b3cd-db4338a8a7e7",
 *       "ImageId": "147fdf82-7a71-52cf-819b-e786c7b9746e"
 *     },
 *     {
 *       "BoundingBox": {
 *         "Height": 0.16555599868297577,
 *         "Left": 0.30963000655174255,
 *         "Top": 0.7066670060157776,
 *         "Width": 0.22074100375175476
 *       },
 *       "Confidence": 100,
 *       "FaceId": "29a75abe-397b-5101-ba4f-706783b2246c",
 *       "ImageId": "147fdf82-7a71-52cf-819b-e786c7b9746e"
 *     },
 *     {
 *       "BoundingBox": {
 *         "Height": 0.3234420120716095,
 *         "Left": 0.3233329951763153,
 *         "Top": 0.5,
 *         "Width": 0.24222199618816376
 *       },
 *       "Confidence": 99.99829864501953,
 *       "FaceId": "38271d79-7bc2-5efb-b752-398a8d575b85",
 *       "ImageId": "d5631190-d039-54e4-b267-abd22c8647c5"
 *     },
 *     {
 *       "BoundingBox": {
 *         "Height": 0.03555560111999512,
 *         "Left": 0.37388700246810913,
 *         "Top": 0.2477779984474182,
 *         "Width": 0.04747769981622696
 *       },
 *       "Confidence": 99.99210357666016,
 *       "FaceId": "3b01bef0-c883-5654-ba42-d5ad28b720b3",
 *       "ImageId": "812d9f04-86f9-54fc-9275-8d0dcbcb6784"
 *     },
 *     {
 *       "BoundingBox": {
 *         "Height": 0.05333330109715462,
 *         "Left": 0.2937690019607544,
 *         "Top": 0.35666701197624207,
 *         "Width": 0.07121659815311432
 *       },
 *       "Confidence": 99.99919891357422,
 *       "FaceId": "4839a608-49d0-566c-8301-509d71b534d1",
 *       "ImageId": "812d9f04-86f9-54fc-9275-8d0dcbcb6784"
 *     },
 *     {
 *       "BoundingBox": {
 *         "Height": 0.3249259889125824,
 *         "Left": 0.5155559778213501,
 *         "Top": 0.1513350009918213,
 *         "Width": 0.24333299696445465
 *       },
 *       "Confidence": 99.99949645996094,
 *       "FaceId": "70008e50-75e4-55d0-8e80-363fb73b3a14",
 *       "ImageId": "d5631190-d039-54e4-b267-abd22c8647c5"
 *     },
 *     {
 *       "BoundingBox": {
 *         "Height": 0.03777780011296272,
 *         "Left": 0.7002969980239868,
 *         "Top": 0.18777799606323242,
 *         "Width": 0.05044509842991829
 *       },
 *       "Confidence": 99.92639923095703,
 *       "FaceId": "7f5f88ed-d684-5a88-b0df-01e4a521552b",
 *       "ImageId": "812d9f04-86f9-54fc-9275-8d0dcbcb6784"
 *     },
 *     {
 *       "BoundingBox": {
 *         "Height": 0.05555560067296028,
 *         "Left": 0.13946600258350372,
 *         "Top": 0.46333301067352295,
 *         "Width": 0.07270029932260513
 *       },
 *       "Confidence": 99.99469757080078,
 *       "FaceId": "895b4e2c-81de-5902-a4bd-d1792bda00b2",
 *       "ImageId": "812d9f04-86f9-54fc-9275-8d0dcbcb6784"
 *     },
 *     {
 *       "BoundingBox": {
 *         "Height": 0.3259260058403015,
 *         "Left": 0.5144439935684204,
 *         "Top": 0.15111100673675537,
 *         "Width": 0.24444399774074554
 *       },
 *       "Confidence": 99.99949645996094,
 *       "FaceId": "8be04dba-4e58-520d-850e-9eae4af70eb2",
 *       "ImageId": "465f4e93-763e-51d0-b030-b9667a2d94b1"
 *     },
 *     {
 *       "BoundingBox": {
 *         "Height": 0.18888899683952332,
 *         "Left": 0.3783380091190338,
 *         "Top": 0.2355560064315796,
 *         "Width": 0.25222599506378174
 *       },
 *       "Confidence": 99.9999008178711,
 *       "FaceId": "908544ad-edc3-59df-8faf-6a87cc256cf5",
 *       "ImageId": "3c731605-d772-541a-a5e7-0375dbc68a07"
 *     },
 *     {
 *       "BoundingBox": {
 *         "Height": 0.33481499552726746,
 *         "Left": 0.31888899207115173,
 *         "Top": 0.49333301186561584,
 *         "Width": 0.25
 *       },
 *       "Confidence": 99.99909973144531,
 *       "FaceId": "ff43d742-0c13-5d16-a3e8-03d3f58e980b",
 *       "ImageId": "465f4e93-763e-51d0-b030-b9667a2d94b1"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-the-faces-in-a-collection-1482181416530
 * ```
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ListFacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListFacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFacesCommandOutput> {
    return deserializeAws_json1_1ListFacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
