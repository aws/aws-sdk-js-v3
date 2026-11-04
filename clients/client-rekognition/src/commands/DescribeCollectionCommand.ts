// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeCollectionRequest, DescribeCollectionResponse } from "../models/models_0";
import { DescribeCollection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeCollectionCommand}.
 */
export interface DescribeCollectionCommandInput extends DescribeCollectionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCollectionCommand}.
 */
export interface DescribeCollectionCommandOutput extends DescribeCollectionResponse, __MetadataBearer {}

/**
 * Describes the specified collection. You can use `DescribeCollection` to get information, such as the number of faces indexed into a collection and the version of the model used by the collection for face detection.
 *
 * For more information, see Describing a Collection in the Amazon Rekognition Developer Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DescribeCollectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DescribeCollectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // DescribeCollectionRequest
 *   CollectionId: "STRING_VALUE", // required
 * };
 * const command = new DescribeCollectionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCollectionResponse
 * //   FaceCount: Number("long"),
 * //   FaceModelVersion: "STRING_VALUE",
 * //   CollectionARN: "STRING_VALUE",
 * //   CreationTimestamp: new Date("TIMESTAMP"),
 * //   UserCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param DescribeCollectionCommandInput - {@link DescribeCollectionCommandInput}
 * @returns {@link DescribeCollectionCommandOutput}
 * @see {@link DescribeCollectionCommandInput} for command's `input` shape.
 * @see {@link DescribeCollectionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeCollectionCommand extends command<DescribeCollectionCommandInput, DescribeCollectionCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCollection",
  DescribeCollection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCollectionRequest;
      output: DescribeCollectionResponse;
    };
    sdk: {
      input: DescribeCollectionCommandInput;
      output: DescribeCollectionCommandOutput;
    };
  };
}
