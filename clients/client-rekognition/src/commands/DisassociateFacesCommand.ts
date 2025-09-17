// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisassociateFacesRequest, DisassociateFacesResponse } from "../models/models_0";
import { de_DisassociateFacesCommand, se_DisassociateFacesCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateFacesCommand}.
 */
export interface DisassociateFacesCommandInput extends DisassociateFacesRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateFacesCommand}.
 */
export interface DisassociateFacesCommandOutput extends DisassociateFacesResponse, __MetadataBearer {}

/**
 * <p>Removes the association between a <code>Face</code> supplied in an array of
 *         <code>FaceIds</code> and the User. If the User is not present already, then a
 *         <code>ResourceNotFound</code> exception is thrown. If successful, an array of faces that are
 *       disassociated from the User is returned. If a given face is already disassociated from the
 *       given UserID, it will be ignored and not be returned in the response. If a given face is
 *       already associated with a different User or not found in the collection it will be returned as
 *       part of <code>UnsuccessfulDisassociations</code>. You can remove 1 - 100 face IDs from a user
 *       at one time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DisassociateFacesCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DisassociateFacesCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // DisassociateFacesRequest
 *   CollectionId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   FaceIds: [ // UserFaceIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateFacesCommand(input);
 * const response = await client.send(command);
 * // { // DisassociateFacesResponse
 * //   DisassociatedFaces: [ // DisassociatedFacesList
 * //     { // DisassociatedFace
 * //       FaceId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   UnsuccessfulFaceDisassociations: [ // UnsuccessfulFaceDisassociationList
 * //     { // UnsuccessfulFaceDisassociation
 * //       FaceId: "STRING_VALUE",
 * //       UserId: "STRING_VALUE",
 * //       Reasons: [ // UnsuccessfulFaceDisassociationReasons
 * //         "FACE_NOT_FOUND" || "ASSOCIATED_TO_A_DIFFERENT_USER",
 * //       ],
 * //     },
 * //   ],
 * //   UserStatus: "ACTIVE" || "UPDATING" || "CREATING" || "CREATED",
 * // };
 *
 * ```
 *
 * @param DisassociateFacesCommandInput - {@link DisassociateFacesCommandInput}
 * @returns {@link DisassociateFacesCommandOutput}
 * @see {@link DisassociateFacesCommandInput} for command's `input` shape.
 * @see {@link DisassociateFacesCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> A User with the same Id already exists within the collection, or the update or deletion
 *       of the User caused an inconsistent state. ** </p>
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
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 *
 * @example DisassociateFaces
 * ```javascript
 * // Removes the association between a Face supplied in an array of FaceIds and the User.
 * const input = {
 *   ClientRequestToken: "550e8400-e29b-41d4-a716-446655440003",
 *   CollectionId: "MyCollection",
 *   FaceIds: [
 *     "f5817d37-94f6-4335-bfee-6cf79a3d806e",
 *     "c92265d4-5f9c-43af-a58e-12be0ce02bc3"
 *   ],
 *   UserId: "DemoUser"
 * };
 * const command = new DisassociateFacesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DisassociatedFaces: [
 *     {
 *       FaceId: "c92265d4-5f9c-43af-a58e-12be0ce02bc3"
 *     }
 *   ],
 *   UnsuccessfulFaceDisassociations: [
 *     {
 *       FaceId: "f5817d37-94f6-4335-bfee-6cf79a3d806e",
 *       Reasons: [
 *         "ASSOCIATED_TO_A_DIFFERENT_USER"
 *       ],
 *       UserId: "demoUser1"
 *     }
 *   ],
 *   UserStatus: "UPDATING"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DisassociateFacesCommand extends $Command
  .classBuilder<
    DisassociateFacesCommandInput,
    DisassociateFacesCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RekognitionService", "DisassociateFaces", {})
  .n("RekognitionClient", "DisassociateFacesCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateFacesCommand)
  .de(de_DisassociateFacesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateFacesRequest;
      output: DisassociateFacesResponse;
    };
    sdk: {
      input: DisassociateFacesCommandInput;
      output: DisassociateFacesCommandOutput;
    };
  };
}
