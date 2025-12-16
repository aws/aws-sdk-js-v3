// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateCollectionRequest, CreateCollectionResponse } from "../models/models_0";
import type { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { CreateCollection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCollectionCommand}.
 */
export interface CreateCollectionCommandInput extends CreateCollectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateCollectionCommand}.
 */
export interface CreateCollectionCommandOutput extends CreateCollectionResponse, __MetadataBearer {}

/**
 * <p>Creates a collection in an AWS Region. You can add faces to the collection using the
 *         <a>IndexFaces</a> operation. </p>
 *          <p>For example, you might create collections, one for each of your application users. A
 *       user can then index faces using the <code>IndexFaces</code> operation and persist results in a
 *       specific collection. Then, a user can search the collection for faces in the user-specific
 *       container. </p>
 *          <p>When you create a collection, it is associated with the latest version of the face model
 *       version.</p>
 *          <note>
 *             <p>Collection names are case-sensitive.</p>
 *          </note>
 *          <p>This operation requires permissions to perform the
 *         <code>rekognition:CreateCollection</code> action. If you want to tag your collection, you
 *       also require permission to perform the <code>rekognition:TagResource</code>
 *       operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, CreateCollectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, CreateCollectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // CreateCollectionRequest
 *   CollectionId: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCollectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateCollectionResponse
 * //   StatusCode: Number("int"),
 * //   CollectionArn: "STRING_VALUE",
 * //   FaceModelVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCollectionCommandInput - {@link CreateCollectionCommandInput}
 * @returns {@link CreateCollectionCommandOutput}
 * @see {@link CreateCollectionCommandInput} for command's `input` shape.
 * @see {@link CreateCollectionCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>A resource with the specified ID already exists.</p>
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
 *
 * @example To create a collection
 * ```javascript
 * // This operation creates a Rekognition collection for storing image data.
 * const input = {
 *   CollectionId: "myphotos"
 * };
 * const command = new CreateCollectionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CollectionArn: "aws:rekognition:us-west-2:123456789012:collection/myphotos",
 *   StatusCode: 200
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateCollectionCommand extends $Command
  .classBuilder<
    CreateCollectionCommandInput,
    CreateCollectionCommandOutput,
    RekognitionClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RekognitionClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RekognitionService", "CreateCollection", {})
  .n("RekognitionClient", "CreateCollectionCommand")
  .sc(CreateCollection$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCollectionRequest;
      output: CreateCollectionResponse;
    };
    sdk: {
      input: CreateCollectionCommandInput;
      output: CreateCollectionCommandOutput;
    };
  };
}
