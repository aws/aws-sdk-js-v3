// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFacesRequest, DeleteFacesResponse } from "../models/models_0";
import { de_DeleteFacesCommand, se_DeleteFacesCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * @public
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
export class DeleteFacesCommand extends $Command
  .classBuilder<
    DeleteFacesCommandInput,
    DeleteFacesCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RekognitionService", "DeleteFaces", {})
  .n("RekognitionClient", "DeleteFacesCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFacesCommand)
  .de(de_DeleteFacesCommand)
  .build() {}
