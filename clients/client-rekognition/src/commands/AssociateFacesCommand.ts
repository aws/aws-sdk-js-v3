// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateFacesRequest, AssociateFacesResponse } from "../models/models_0";
import { AssociateFaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Associates one or more faces with an existing UserID. Takes an array of `FaceIds`. Each `FaceId` that are present in the `FaceIds` list is associated with the provided UserID. The number of FaceIds that can be used as input in a single request is limited to 100.
 *
 * Note that the total number of faces that can be associated with a single `UserID` is also limited to 100. Once a `UserID` has 100 faces associated with it, no additional faces can be added. If more API calls are made after the limit is reached, a `ServiceQuotaExceededException` will result.
 *
 * The `UserMatchThreshold` parameter specifies the minimum user match confidence required for the face to be associated with a UserID that has at least one `FaceID` already associated. This ensures that the `FaceIds` are associated with the right UserID. The value ranges from 0-100 and default value is 75.
 *
 * If successful, an array of `AssociatedFace` objects containing the associated `FaceIds` is returned. If a given face is already associated with the given `UserID`, it will be ignored and will not be returned in the response. If a given face is already associated to a different `UserID`, isn't found in the collection, doesn’t meet the `UserMatchThreshold`, or there are already 100 faces associated with the `UserID`, it will be returned as part of an array of `UnsuccessfulFaceAssociations.`
 *
 * The `UserStatus` reflects the status of an operation which updates a UserID representation with a list of given faces. The `UserStatus` can be:
 *
 * - ACTIVE - All associations or disassociations of FaceID(s) for a UserID are complete.
 * - CREATED - A UserID has been created, but has no FaceID(s) associated with it.
 * - UPDATING - A UserID is being updated and there are current associations or disassociations of FaceID(s) taking place.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, AssociateFacesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, AssociateFacesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
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
 *
 * You are not authorized to perform the action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A User with the same Id already exists within the collection, or the update or deletion of the User caused an inconsistent state. **
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *
 * A `ClientRequestToken` input parameter was reused with an operation, but at least one of the other input parameters is different from the previous call to the operation.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Rekognition experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Input parameter violated a constraint. Validate your parameter before calling the API operation again.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Rekognition.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request cannot be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The size of the collection exceeds the allowed limit. For more information, see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Rekognition is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link RekognitionServiceException}
 *
 * Base exception class for all service exceptions from Rekognition service.
 *
 * @example AssociateFaces
 * ```javascript
 * // This operation associates one or more faces with an existing UserID.
 * const input = {
 *   ClientRequestToken: "550e8400-e29b-41d4-a716-446655440002",
 *   CollectionId: "MyCollection",
 *   FaceIds: [
 *     "f5817d37-94f6-4335-bfee-6cf79a3d806e",
 *     "851cb847-dccc-4fea-9309-9f4805967855",
 *     "35ebbb41-7f67-4263-908d-dd0ecba05ab9"
 *   ],
 *   UserId: "DemoUser",
 *   UserMatchThreshold: 70
 * };
 * const command = new AssociateFacesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AssociatedFaces: [
 *     {
 *       FaceId: "35ebbb41-7f67-4263-908d-dd0ecba05ab9"
 *     }
 *   ],
 *   UnsuccessfulFaceAssociations: [
 *     {
 *       Confidence: 0.9375374913215637,
 *       FaceId: "f5817d37-94f6-4335-bfee-6cf79a3d806e",
 *       Reasons: [
 *         "LOW_MATCH_CONFIDENCE"
 *       ]
 *     },
 *     {
 *       FaceId: "851cb847-dccc-4fea-9309-9f4805967855",
 *       Reasons: [
 *         "ASSOCIATED_TO_A_DIFFERENT_USER"
 *       ],
 *       UserId: "demoUser2"
 *     }
 *   ],
 *   UserStatus: "UPDATING"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AssociateFacesCommand extends command<AssociateFacesCommandInput, AssociateFacesCommandOutput>(
  _ep0,
  _mw0,
  "AssociateFaces",
  AssociateFaces$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateFacesRequest;
      output: AssociateFacesResponse;
    };
    sdk: {
      input: AssociateFacesCommandInput;
      output: AssociateFacesCommandOutput;
    };
  };
}
