// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteFacesRequest, DeleteFacesResponse } from "../models/models_0";
import { DeleteFaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes faces from a collection. You specify a collection ID and an array of face IDs to remove from the collection.
 *
 * This operation requires permissions to perform the `rekognition:DeleteFaces` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DeleteFacesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DeleteFacesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // DeleteFacesRequest
 *   CollectionId: "STRING_VALUE", // required
 *   FaceIds: [ // FaceIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteFacesCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFacesResponse
 * //   DeletedFaces: [ // FaceIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   UnsuccessfulFaceDeletions: [ // UnsuccessfulFaceDeletionsList
 * //     { // UnsuccessfulFaceDeletion
 * //       FaceId: "STRING_VALUE",
 * //       UserId: "STRING_VALUE",
 * //       Reasons: [ // UnsuccessfulFaceDeletionReasons
 * //         "ASSOCIATED_TO_AN_EXISTING_USER" || "FACE_NOT_FOUND",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteFacesCommandInput - {@link DeleteFacesCommandInput}
 * @returns {@link DeleteFacesCommandOutput}
 * @see {@link DeleteFacesCommandInput} for command's `input` shape.
 * @see {@link DeleteFacesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to perform the action.
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
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Rekognition is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link RekognitionServiceException}
 *
 * Base exception class for all service exceptions from Rekognition service.
 *
 * @example To delete a face
 * ```javascript
 * // This operation deletes one or more faces from a Rekognition collection.
 * const input = {
 *   CollectionId: "myphotos",
 *   FaceIds: [
 *     "ff43d742-0c13-5d16-a3e8-03d3f58e980b"
 *   ]
 * };
 * const command = new DeleteFacesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DeletedFaces: [
 *     "ff43d742-0c13-5d16-a3e8-03d3f58e980b"
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteFacesCommand extends command<DeleteFacesCommandInput, DeleteFacesCommandOutput>(
  _ep0,
  _mw0,
  "DeleteFaces",
  DeleteFaces$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFacesRequest;
      output: DeleteFacesResponse;
    };
    sdk: {
      input: DeleteFacesCommandInput;
      output: DeleteFacesCommandOutput;
    };
  };
}
