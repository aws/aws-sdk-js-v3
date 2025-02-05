// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCollectionRequest, DeleteCollectionResponse } from "../models/models_0";
import { de_DeleteCollectionCommand, se_DeleteCollectionCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
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
export class DeleteCollectionCommand extends $Command
  .classBuilder<
    DeleteCollectionCommandInput,
    DeleteCollectionCommandOutput,
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
  .s("RekognitionService", "DeleteCollection", {})
  .n("RekognitionClient", "DeleteCollectionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCollectionCommand)
  .de(de_DeleteCollectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCollectionRequest;
      output: DeleteCollectionResponse;
    };
    sdk: {
      input: DeleteCollectionCommandInput;
      output: DeleteCollectionCommandOutput;
    };
  };
}
