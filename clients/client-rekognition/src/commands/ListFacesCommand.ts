// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListFacesRequest, ListFacesResponse } from "../models/models_0";
import { de_ListFacesCommand, se_ListFacesCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *   UserId: "STRING_VALUE",
 *   FaceIds: [ // FaceIdList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ListFacesCommand(input);
 * const response = await client.send(command);
 * // { // ListFacesResponse
 * //   Faces: [ // FaceList
 * //     { // Face
 * //       FaceId: "STRING_VALUE",
 * //       BoundingBox: { // BoundingBox
 * //         Width: Number("float"),
 * //         Height: Number("float"),
 * //         Left: Number("float"),
 * //         Top: Number("float"),
 * //       },
 * //       ImageId: "STRING_VALUE",
 * //       ExternalImageId: "STRING_VALUE",
 * //       Confidence: Number("float"),
 * //       IndexFacesModelVersion: "STRING_VALUE",
 * //       UserId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   FaceModelVersion: "STRING_VALUE",
 * // };
 *
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
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 * @public
 */
export class ListFacesCommand extends $Command
  .classBuilder<
    ListFacesCommandInput,
    ListFacesCommandOutput,
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
  .s("RekognitionService", "ListFaces", {})
  .n("RekognitionClient", "ListFacesCommand")
  .f(void 0, void 0)
  .ser(se_ListFacesCommand)
  .de(de_ListFacesCommand)
  .build() {}
