// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteCollectionRequest, DeleteCollectionResponse } from "../models/models_0";
import type { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DeleteCollection$ } from "../schemas/schemas_0";

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
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
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
 *
 * @example To delete a collection
 * ```javascript
 * // This operation deletes a Rekognition collection.
 * const input = {
 *   CollectionId: "myphotos"
 * };
 * const command = new DeleteCollectionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   StatusCode: 200
 * }
 * *\/
 * ```
 *
 * @public
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RekognitionService", "DeleteCollection", {})
  .n("RekognitionClient", "DeleteCollectionCommand")
  .sc(DeleteCollection$)
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
