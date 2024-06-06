// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCollectionRequest, DescribeCollectionResponse } from "../models/models_0";
import { de_DescribeCollectionCommand, se_DescribeCollectionCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Describes the specified collection. You can use <code>DescribeCollection</code> to get
 *          information, such as the number of faces indexed into a collection and the version of the
 *          model used by the collection for face detection.</p>
 *          <p>For more information, see Describing a Collection in the
 *      Amazon Rekognition Developer Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DescribeCollectionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DescribeCollectionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
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
 */
export class DescribeCollectionCommand extends $Command
  .classBuilder<
    DescribeCollectionCommandInput,
    DescribeCollectionCommandOutput,
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
  .s("RekognitionService", "DescribeCollection", {})
  .n("RekognitionClient", "DescribeCollectionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCollectionCommand)
  .de(de_DescribeCollectionCommand)
  .build() {}
