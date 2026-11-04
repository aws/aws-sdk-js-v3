// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCollectionRequest, DeleteCollectionResponse } from "../models/models_0";
import { DeleteCollection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified collection. Note that this operation removes all faces in the collection. For an example, see [Deleting a collection](https://docs.aws.amazon.com/rekognition/latest/dg/delete-collection-procedure.html).
 *
 * This operation requires permissions to perform the `rekognition:DeleteCollection` action.
 *
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
export class DeleteCollectionCommand extends command<DeleteCollectionCommandInput, DeleteCollectionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCollection",
  DeleteCollection$
) {
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
