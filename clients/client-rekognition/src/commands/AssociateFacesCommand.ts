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
} from "@smithy/types";

import { AssociateFacesRequest, AssociateFacesResponse } from "../models/models_0";
import { de_AssociateFacesCommand, se_AssociateFacesCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateFacesCommand}.
 */
export interface AssociateFacesCommandInput extends AssociateFacesRequest {}
/**
 * @public
 *
 * The output of {@link AssociateFacesCommand}.
 */
export interface AssociateFacesCommandOutput extends AssociateFacesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Associates one or more faces with an existing UserID. Takes an array of
 *         <code>FaceIds</code>. Each <code>FaceId</code> that are present in the <code>FaceIds</code>
 *       list is associated with the provided UserID. The maximum number of total <code>FaceIds</code>
 *       per UserID is 100. </p>
 *          <p>The <code>UserMatchThreshold</code> parameter specifies the minimum user match confidence
 *       required for the face to be associated with a UserID that has at least one <code>FaceID</code>
 *       already associated. This ensures that the <code>FaceIds</code> are associated with the right
 *       UserID. The value ranges from 0-100 and default value is 75. </p>
 *          <p>If successful, an array of <code>AssociatedFace</code> objects containing the associated
 *         <code>FaceIds</code> is returned. If a given face is already associated with the given
 *         <code>UserID</code>, it will be ignored and will not be returned in the response. If a given
 *       face is already associated to a different <code>UserID</code>, isn't found in the collection,
 *       doesn’t meet the <code>UserMatchThreshold</code>, or there are already 100 faces associated
 *       with the <code>UserID</code>, it will be returned as part of an array of
 *         <code>UnsuccessfulFaceAssociations.</code>
 *          </p>
 *          <p>The <code>UserStatus</code> reflects the status of an operation which updates a UserID
 *       representation with a list of given faces. The <code>UserStatus</code> can be: </p>
 *          <ul>
 *             <li>
 *                <p>ACTIVE - All associations or disassociations of FaceID(s) for a UserID are
 *           complete.</p>
 *             </li>
 *             <li>
 *                <p>CREATED - A UserID has been created, but has no FaceID(s) associated with it.</p>
 *             </li>
 *             <li>
 *                <p>UPDATING - A UserID is being updated and there are current associations or
 *           disassociations of FaceID(s) taking place.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, AssociateFacesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, AssociateFacesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // AssociateFacesRequest
 *   CollectionId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   FaceIds: [ // UserFaceIdList // required
 *     "STRING_VALUE",
 *   ],
 *   UserMatchThreshold: Number("float"),
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new AssociateFacesCommand(input);
 * const response = await client.send(command);
 * // { // AssociateFacesResponse
 * //   AssociatedFaces: [ // AssociatedFacesList
 * //     { // AssociatedFace
 * //       FaceId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UnsuccessfulFaceAssociations: [ // UnsuccessfulFaceAssociationList
 * //     { // UnsuccessfulFaceAssociation
 * //       FaceId: "STRING_VALUE",
 * //       UserId: "STRING_VALUE",
 * //       Confidence: Number("float"),
 * //       Reasons: [ // UnsuccessfulFaceAssociationReasons
 * //         "FACE_NOT_FOUND" || "ASSOCIATED_TO_A_DIFFERENT_USER" || "LOW_MATCH_CONFIDENCE",
 * //       ],
 * //     },
 * //   ],
 * //   UserStatus: "ACTIVE" || "UPDATING" || "CREATING" || "CREATED",
 * // };
 *
 * ```
 *
 * @param AssociateFacesCommandInput - {@link AssociateFacesCommandInput}
 * @returns {@link AssociateFacesCommandOutput}
 * @see {@link AssociateFacesCommandInput} for command's `input` shape.
 * @see {@link AssociateFacesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>
 *       A User with the same Id already exists within the collection, or the update or deletion of the User caused an inconsistent state. **
 *     </p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>A <code>ClientRequestToken</code> input parameter was reused with an operation, but at least one of the other input
 *         parameters is different from the previous call to the operation.</p>
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p></p>
 *          <p>The size of the collection exceeds the allowed limit. For more information,
 *       see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide. </p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 * @example AssociateFaces
 * ```javascript
 * // This operation associates one or more faces with an existing UserID.
 * const input = {
 *   "ClientRequestToken": "550e8400-e29b-41d4-a716-446655440002",
 *   "CollectionId": "MyCollection",
 *   "FaceIds": [
 *     "f5817d37-94f6-4335-bfee-6cf79a3d806e",
 *     "851cb847-dccc-4fea-9309-9f4805967855",
 *     "35ebbb41-7f67-4263-908d-dd0ecba05ab9"
 *   ],
 *   "UserId": "DemoUser",
 *   "UserMatchThreshold": 70
 * };
 * const command = new AssociateFacesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AssociatedFaces": [
 *     {
 *       "FaceId": "35ebbb41-7f67-4263-908d-dd0ecba05ab9"
 *     }
 *   ],
 *   "UnsuccessfulFaceAssociations": [
 *     {
 *       "Confidence": 0.9375374913215637,
 *       "FaceId": "f5817d37-94f6-4335-bfee-6cf79a3d806e",
 *       "Reasons": [
 *         "LOW_MATCH_CONFIDENCE"
 *       ]
 *     },
 *     {
 *       "FaceId": "851cb847-dccc-4fea-9309-9f4805967855",
 *       "Reasons": [
 *         "ASSOCIATED_TO_A_DIFFERENT_USER"
 *       ],
 *       "UserId": "demoUser2"
 *     }
 *   ],
 *   "UserStatus": "UPDATING"
 * }
 * *\/
 * // example id: associatefaces-1686181269281
 * ```
 *
 */
export class AssociateFacesCommand extends $Command<
  AssociateFacesCommandInput,
  AssociateFacesCommandOutput,
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
  constructor(readonly input: AssociateFacesCommandInput) {
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
  ): Handler<AssociateFacesCommandInput, AssociateFacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateFacesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "AssociateFacesCommand";
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
  private serialize(input: AssociateFacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateFacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateFacesCommandOutput> {
    return de_AssociateFacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
